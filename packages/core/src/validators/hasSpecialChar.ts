import { helpers } from "@vuelidate/validators";

export const hasSpecialChar = (message = "Mindestens ein Sonderzeichen erforderlich") =>
	helpers.withMessage(message, helpers.regex(/[^A-Za-z0-9]/));
