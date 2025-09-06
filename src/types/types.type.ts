import { contactSchema } from "../components/contact-form";
import * as z from "zod";

export type ContactFormData = z.infer<typeof contactSchema>;
