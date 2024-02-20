export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("ukr", {
    dateStyle: "short",
  }).format(new Date(date));
}
