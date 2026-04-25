import {
	helpers,
	maxLength as vuelidateMaxLength,
} from "@vuelidate/validators";

export const maxLength = (length: number, message = `Maximal ${length} Zeichen`) =>
	helpers.withMessage(message, vuelidateMaxLength(length));
