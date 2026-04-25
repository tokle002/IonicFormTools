import { email as vuelidateEmail, helpers } from "@vuelidate/validators";

export const email = (message = "Bitte gültige E-Mail angeben") =>
	helpers.withMessage(message, vuelidateEmail);
