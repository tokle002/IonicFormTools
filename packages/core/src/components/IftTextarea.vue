<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { IonTextarea } from "@ionic/vue";
import type {
	TextareaInputEventDetail,
	IonTextareaCustomEvent,
} from "@ionic/core";
import { IftTextareaProps } from "../types/IftTextareaProps";

const MARGIN = 6;
const LINE_HEIGHT = 24;
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

const wrapperRef = ref<HTMLElement | null>(null);
const rows = ref(3);

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

const updateRows = (height: number) => {
	if (props.rows) {
		rows.value = props.rows;
		return;
	}
	const available = height - 2 * MARGIN;
	rows.value = Math.max(3, Math.floor(available / LINE_HEIGHT));
};

let observer: ResizeObserver | null = null;

onMounted(() => {
	if (!wrapperRef.value) return;
	observer = new ResizeObserver((entries) => {
		const height = entries[0].contentRect.height;
		updateRows(height);
	});
	observer.observe(wrapperRef.value);
});

onBeforeUnmount(() => {
	observer?.disconnect();
});
</script>

<template>
	<div ref="wrapperRef" class="ift-textarea-wrapper">
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
			:rows="rows"
			:auto-grow="false"
			@ionInput="onInput"
			@ionBlur="handleBlur"
		/>
	</div>
</template>

<style scoped>
.ift-textarea-wrapper {
	height: 100%;
}

ion-textarea {
	height: calc(100% - 6px);
	margin-top: 6px;
	margin-bottom: 6px;
}
</style>
--
