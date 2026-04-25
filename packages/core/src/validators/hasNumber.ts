import { helpers } from "@vuelidate/validators";

export const hasNumber = (message = "Mindestens eine Zahl erforderlich") =>
	helpers.withMessage(message, helpers.regex(/[0-9]/));
