import { helpers } from "@vuelidate/validators";

export const hasLowercase = (message = "Mindestens ein Kleinbuchstabe erforderlich") =>
	helpers.withMessage(message, helpers.regex(/[a-z]/));
