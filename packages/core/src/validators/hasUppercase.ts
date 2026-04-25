import { helpers } from "@vuelidate/validators";

export const hasUppercase = (message = "Mindestens ein Großbuchstabe erforderlich") =>
	helpers.withMessage(message, helpers.regex(/[A-Z]/));
