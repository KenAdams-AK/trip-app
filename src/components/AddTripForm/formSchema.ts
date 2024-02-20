/* eslint-disable @typescript-eslint/no-use-before-define */
import { RefinementCtx, z } from "zod";

export const FORM_ERRORS = {
  destination: "Choose the destination city",
  date: "The date should be within the next 15 days",
  root: "Failed to add a new trip. Try again later",
} as const;

export const schema = z
  .object({
    destination: z.string().min(1, { message: FORM_ERRORS.destination }),
    departureDate: z.string().refine(dateRefine, {
      message: FORM_ERRORS.date,
    }),
    returnDate: z.string().refine(dateRefine, {
      message: FORM_ERRORS.date,
    }),
  })
  .superRefine(superRefine);

export type FormFields = z.infer<typeof schema>;

function dateRefine(value: string) {
  const date = new Date(value);
  const now = new Date();
  const next15Days = new Date(now);
  next15Days.setDate(now.getDate() + 15);

  return date > now && date < next15Days;
}

function superRefine(
  { departureDate, returnDate }: { departureDate: string; returnDate: string },
  ctx: RefinementCtx,
) {
  const isRetrunDateValid = Date.parse(departureDate) < Date.parse(returnDate);
  if (!isRetrunDateValid) {
    ctx.addIssue({
      message: "Return date should be after the departure date",
      code: z.ZodIssueCode.custom,
      path: ["returnDate"],
    });
  }
}
