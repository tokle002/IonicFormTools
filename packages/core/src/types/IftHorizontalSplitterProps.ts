import { IftBaseProps } from "./IftBaseProps";
export interface IftHorizontalSplitterProps extends IftBaseProps {
	sizeFirstCell?:
		| "1"
		| "2"
		| "3"
		| "4"
		| "5"
		| "6"
		| "7"
		| "8"
		| "9"
		| "10"
		| "11";
	gap?: string;
}
