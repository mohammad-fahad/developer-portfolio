import Parser from "rss-parser";
import { NextResponse } from "next/server";
import axios from "axios";

const cheerio = require('cheerio');

async function fetchThumbnail(url) {
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
      timeout: 8000,
    });
    const $ = cheerio.load(data);
    return $('meta[property="og:image"]').attr('content') || "/png/placeholder.png";
  } catch {
    return "/png/placeholder.png";
  }
}

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL("https://medium.com/feed/@blogs-mohammadfahad");

    const items = await Promise.all(
      feed.items.slice(0, 6).map(async (item) => ({
        title: item.title,
        link: item.link,
        date: item.pubDate,
        description: item.contentSnippet,
        thumbnail: await fetchThumbnail(item.link),
      }))
    );

    return NextResponse.json(items);
  } catch {
    return NextResponse.json([]);
  }
}