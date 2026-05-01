import type { BaseValidation } from "@vuelidate/core";
import { IftBaseProps } from "./IftBaseProps";
import { AutocompleteTypes, Color, TextFieldTypes } from "@ionic/core";
export interface IftInputProps extends IftBaseProps {
	modelValue: string | number | null;
	type?: TextFieldTypes;
	validation?: BaseValidation;
	placeholder?: string;
	helperText?: string;
	error?: boolean;
	errorMessage?: string;
	showCounter?: boolean;
	autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
	autocomplete?: AutocompleteTypes;
	clearInput?: boolean;
	icon?: string;
	color?: Color;
}
