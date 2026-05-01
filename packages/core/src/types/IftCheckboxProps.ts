import { BaseValidation } from "@vuelidate/core";
import { IftBaseProps } from "./IftBaseProps";

export interface IftCheckboxProps extends IftBaseProps {
	modelValue: boolean | null;
	validation?: BaseValidation;
	helperText?: string;
	error?: boolean;
	errorMessage?: string;
}
