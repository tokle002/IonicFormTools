<script setup lang="ts">
import { computed } from "vue";
import { IonTextarea } from "@ionic/vue";
import type {
	TextareaInputEventDetail,
	IonTextareaCustomEvent,
} from "@ionic/core";
import { IftTextareaProps } from "../types/IftTextareaProps";

const props = withDefaults(defineProps<IftTextareaProps>(), {
	disabled: false,
	showCounter: false,
	fill: "outline",
	color: "primary",
	labelPlacement: "stacked",
});

const emit = defineEmits<{
	"update:modelValue": [value: string | null];
}>();

const hasError = computed(() => {
	if (props.validation) return props.validation.$error;
	return props.error ?? false;
});

const isTouched = computed(() => {
	if (props.validation) return props.validation.$dirty;
	return false;
});

const errorMessage = computed(() => {
	if (props.validation && props.validation.$errors.length > 0) {
		return props.validation.$errors[0].$message?.toString();
	}
	return props.errorText ?? "";
});

const maxLengthValue = computed(() => {
	if (!props.validation) return undefined;
	const v = props.validation as any;
	return v.maxLength?.$params?.max ?? undefined;
});

const hasMaxLength = computed(() => maxLengthValue.value !== undefined);

const counterFormat = (inputLength: number, maxLength: number): string => {
	return (maxLength - inputLength).toString();
};

const onInput = (event: IonTextareaCustomEvent<TextareaInputEventDetail>) => {
	let value = event.detail.value;
	emit("update:modelValue", value ?? "");
};

const handleBlur = () => {
	if (props.validation) props.validation.$touch();
};
</script>

<template>
	<ion-textarea
		:model-value="modelValue ?? ''"
		:autocapitalize="autoCapitalize"
		:label="label"
		:placeholder="placeholder"
		:disabled="disabled"
		:class="{ 'ion-invalid': hasError, 'ion-touched': isTouched }"
		:error-text="errorMessage"
		:helper-text="helperText"
		:counter="showCounter && hasMaxLength"
		:maxlength="maxLengthValue"
		:counter-formatter="counterFormat"
		:auto-capitalize="autoCapitalize"
		:fill="fill"
		:color="color"
		:label-placement="labelPlacement"
		@ionInput="onInput"
		@ionBlur="handleBlur"
	/>
</template>

<style scoped>
ion-textarea {
	margin-top: 12px;
}
</style>
