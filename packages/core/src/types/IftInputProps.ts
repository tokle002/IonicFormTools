import { IftBaseProps } from "./IftBaseProps";
import type { IftValidators } from "./validators";

export interface IftInputProps extends IftBaseProps {
	modelValue: string | number | null;
	type?: IftInputTypes;
	validators?: IftValidators;
}

export enum IftInputTypes {
	Text = "text",
	Email = "email",
	Password = "password",
	Number = "number",
	Tel = "tel",
	Url = "url",
	Search = "search",
}
