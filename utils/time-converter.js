const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function timeConverter(isoTime) {
  const date = new Date(isoTime);
  if (Number.isNaN(date.getTime())) return "";
  return formatter.format(date);
}
