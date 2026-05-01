import { helpers } from "@vuelidate/validators";

export const required = (message = "Pflichtfeld") =>
	helpers.withMessage(message, (value: unknown) => {
		if (typeof value === "boolean") return value === true;
		return helpers.req(value);
	});
