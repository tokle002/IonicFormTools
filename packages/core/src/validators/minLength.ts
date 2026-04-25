import {
	helpers,
	minLength as vuelidateMinLength,
} from "@vuelidate/validators";

export const minLength = (length: number, message = `Mindestens ${length} Zeichen`) =>
	helpers.withMessage(message, vuelidateMinLength(length));
