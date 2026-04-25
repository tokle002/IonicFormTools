<script setup lang="ts">
import { computed } from "vue";
import { IonInput, IonInputPasswordToggle, IonIcon } from "@ionic/vue";
import type { IonInputCustomEvent, InputInputEventDetail } from "@ionic/core";
import { IftInputProps } from "../types/IftInputProps";

const props = withDefaults(defineProps<IftInputProps>(), {
	type: "text",
	disabled: false,
	showCounter: false,
	autoCapitalize: "none",
	clearInput: false,
	autocomplete: "off",
	fill: "outline",
	labelPlacement: "stacked",
	color: "primary",
});

const emit = defineEmits<{
	"update:modelValue": [value: string | number | null];
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
	return props.errorMessage ?? "";
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

const onInput = (event: IonInputCustomEvent<InputInputEventDetail>) => {
	let value = event.detail.value;

	if (props.type === "email" && value) {
		value = value.trim().toLowerCase();
	}

	if (props.type === "number") {
		emit(
			"update:modelValue",
			value == null || value === "" ? null : Number(value),
		);
	} else {
		emit("update:modelValue", value ?? "");
	}
};

const handleBlur = () => {
	if (props.validation) props.validation.$touch();
};
</script>

<template>
	<ion-input
		:model-value="modelValue ?? ''"
		:type="type"
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
		:autocomplete="autocomplete"
		:clear-input="clearInput"
		:fill="fill"
		:color="color"
		:label-placement="labelPlacement"
		@ionInput="onInput"
		@ionBlur="handleBlur"
	>
		<ion-icon
			v-if="icon"
			slot="start"
			:icon="icon"
			aria-hidden="true"
			size="small"
		/>
		<ion-input-password-toggle slot="end" v-if="type === 'password'" />
	</ion-input>
</template>

<style scoped>
ion-input {
	margin-top: 12px;
}
</style>
