import type { BaseValidation } from "@vuelidate/core";
import { IftBaseProps } from "./IftBaseProps";
import { Color } from "@ionic/core";
export interface IftTextareaProps extends IftBaseProps {
	modelValue: string | null;
	validation?: BaseValidation;
	placeholder?: string;
	autoGrow?: boolean;
	autoCapitalize?: string;
	color?: Color;
	showCounter?: boolean;
	error?: boolean;
	errorText?: string;
	helperText?: string;
	fill?: "outline" | "solid";
	labelPlacement?: "start" | "end" | "floating" | "stacked" | "fixed";
	shape?: "round" | "square";
}
