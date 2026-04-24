<script setup lang="ts">
import { computed } from "vue";
import { IonInput } from "@ionic/vue";
import { useVuelidate } from "@vuelidate/core";

import { IftInputProps, IftInputTypes } from "../types/IftInputProps";

const props = withDefaults(defineProps<IftInputProps>(), {
	type: IftInputTypes.Text,
	disabled: false,
});

const emit = defineEmits<{
	"update:modelValue": [value: string | number | null];
}>();

const state = computed(() => ({ value: props.modelValue }));
const rules = computed(() => ({}));

const v$ = useVuelidate(rules, state);

const handleInput = (event: CustomEvent) => {
	emit("update:modelValue", event.detail.value);
};
</script>
<template>
	<ion-input
		:type="type"
		:label="label"
		:value="modelValue"
		:class="{
			'ion-invalid': v$.value.$error,
			'ion-touched': v$.value.$dirty,
		}"
		label-placement="floating"
		@ion-input="handleInput"
		@ion-blur="v$.value.$touch"
	/>
</template>
