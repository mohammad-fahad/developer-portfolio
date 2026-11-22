import Parser from "rss-parser";
import { NextResponse } from "next/server";

const FEED_URL = "https://medium.com/feed/@blogs-mohammadfahad";
const MEDIUM_PROFILE = "https://medium.com/@blogs-mohammadfahad";
const PLACEHOLDER = "/png/placeholder.png";
const ALLOWED_IMAGE_HOSTS = new Set(["miro.medium.com", "cdn-images-1.medium.com"]);
const TIMEOUT_MS = 8000;

const parser = new Parser({
  customFields: {
    item: [["media:content", "mediaContent"]],
  },
});

function safeThumbnail(value) {
  if (!value) return PLACEHOLDER;
  try {
    const url = new URL(value);
    if (url.protocol === "https:" && ALLOWED_IMAGE_HOSTS.has(url.hostname)) {
      return url.toString();
    }
  } catch {
    return PLACEHOLDER;
  }
  return PLACEHOLDER;
}

function getThumbnail(item) {
  return safeThumbnail(item?.enclosure?.url || item?.mediaContent?.$?.url);
}

export async function GET() {
  let response;
  try {
    response = await fetch(FEED_URL, {
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { "User-Agent": "portfolio-rss-reader/1.0" },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Medium feed request failed:", error?.message || "unknown error");
    return NextResponse.json(
      { posts: [], fallback: true, error: "UPSTREAM_UNAVAILABLE", profile: MEDIUM_PROFILE },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }

  if (!response.ok) {
    console.error("Medium feed returned status:", response.status);
    return NextResponse.json(
      { posts: [], fallback: true, error: "UPSTREAM_UNAVAILABLE", profile: MEDIUM_PROFILE },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }

  try {
    const feed = await parser.parseString(await response.text());
    const posts = feed.items.slice(0, 6).map((item) => ({
      title: item.title || "Untitled",
      link: item.link,
      date: item.pubDate,
      description: item.contentSnippet || "",
      thumbnail: getThumbnail(item),
    }));

    return NextResponse.json(
      { posts, fallback: false },
      { status: 200, headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch (error) {
    console.error("Medium feed parse failed:", error?.message || "unknown error");
    return NextResponse.json(
      { posts: [], fallback: true, error: "UPSTREAM_UNAVAILABLE", profile: MEDIUM_PROFILE },
      { status: 502, headers: { "Cache-Control": "no-store" } }
    );
  }
}
