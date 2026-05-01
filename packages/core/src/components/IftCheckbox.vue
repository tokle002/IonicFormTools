<script setup lang="ts">
import { computed } from "vue";
import { IonInput, IonIcon } from "@ionic/vue";
import { IftCheckboxProps } from "../types/IftCheckboxProps";
import { squareOutline, checkbox } from "ionicons/icons";

const props = withDefaults(defineProps<IftCheckboxProps>(), {});

const emit = defineEmits<{
	"update:modelValue": [value: boolean | null];
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

const getValue = computed(() => {
	return props.modelValue === null ? false : props.modelValue;
});

const toggleCheckbox = () => {
	emit("update:modelValue", !getValue.value);
	if (props.validation) props.validation.$touch();
};

const handleBlur = () => {
	if (props.validation) props.validation.$touch();
};
</script>

<template>
	<ion-input
		:value="label"
		:button="true"
		type="text"
		:class="{ 'ion-invalid': hasError, 'ion-touched': isTouched }"
		:error-text="errorMessage"
		:helper-text="helperText"
		fill="outline"
		color="primary"
		label-placement="stacked"
		:readonly="true"
		@click="toggleCheckbox"
		@enter="toggleCheckbox"
		@ionBlur="handleBlur"
	>
		<ion-icon
			slot="end"
			:icon="getValue ? checkbox : squareOutline"
			size="small"
			:color="getValue ? 'primary' : 'medium'"
			@click="toggleCheckbox"
		/>
	</ion-input>
</template>

<style scoped>
ion-input {
	margin-top: 6px;
	margin-bottom: 6px;
}
</style>
