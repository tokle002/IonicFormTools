import { helpers } from "@vuelidate/validators";

export const noWhitespace = (message = "Darf keine Leerzeichen enthalten") =>
	helpers.withMessage(message, helpers.regex(/^\S+$/));
