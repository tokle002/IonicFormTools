<script setup lang="ts" generic="T">
import { computed } from "vue";
import { IonText, IonInput } from "@ionic/vue";
import IftCustomContainer from "./IftCustomContainer.vue";
import { IftGenericSelectProps } from "../types/IftGenericSelectProps";

const props = withDefaults(defineProps<IftGenericSelectProps<T>>(), {});

const emit = defineEmits<{
	"update:modelValue": [value: T | null];
}>();

const hasError = computed(() => {
	if (props.validation) return props.validation.$error;
	return props.error ?? false;
});

const errorMessage = computed(() => {
	if (props.validation && props.validation.$errors.length > 0) {
		return props.validation.$errors[0].$message?.toString();
	}
	return props.errorMessage ?? "";
});
</script>

<template>
	<ion-input
		:value="label"
		:button="true"
		type="text"
		:class="{ 'ion-invalid': hasError }"
		:error-text="errorMessage"
		fill="outline"
		color="primary"
		label-placement="end"
	/>
	<ift-custom-container
		:label="label"
		label-placement="stacked"
		:error="hasError"
		:error-text="errorMessage"
		:helper-text="helperText"
		:fill="fill"
	>
		<template #component>
			<ion-text>TestText</ion-text>
		</template>
	</ift-custom-container>
</template>

<style scoped></style>
