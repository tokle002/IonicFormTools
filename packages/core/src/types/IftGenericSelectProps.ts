import { BaseValidation } from "@vuelidate/core";
import { IftBaseProps } from "./IftBaseProps";

export interface IftGenericSelectProps<T> extends IftBaseProps {
	modelValue: T | null;
	validation?: BaseValidation;
	helperText?: string;
	error?: boolean;
	errorMessage?: string;
	multiSelect?: boolean;
}
