import { required as vuelidateRequired, helpers } from "@vuelidate/validators";

export const required = (message = "Pflichtfeld") =>
	helpers.withMessage(message, vuelidateRequired);
