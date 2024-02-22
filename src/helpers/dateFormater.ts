export function formatDate(date: string | number | Date): string {
  return new Intl.DateTimeFormat("ukr", {
    dateStyle: "short",
  }).format(new Date(date));
}

export function getWeekday(date: string | number | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date(date));
}

export function padWithLeadingZero(num: number): number | string {
  if (num > 10) {
    return num;
  }

  return String(num).padStart(2, "0");
}
