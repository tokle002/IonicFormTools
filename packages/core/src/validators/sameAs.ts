import { helpers, sameAs as vuelidateSameAs } from "@vuelidate/validators";

export const sameAs = (other: unknown, label = "Wert", message = `Muss mit ${label} übereinstimmen`) =>
	helpers.withMessage(message, vuelidateSameAs(other));
