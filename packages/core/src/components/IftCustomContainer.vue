<script setup lang="ts">
import { IftCustomContainerProps } from "../types/IftCustomContainerProps";
import { IonLabel, IonNote } from "@ionic/vue";

const props = withDefaults(defineProps<IftCustomContainerProps>(), {
	label: "",
	labelPlacement: "start",
	error: false,
	errorText: "",
	helperText: "",
	fill: "outline",
});
</script>

<template>
	<div class="wrapper">
		<div
			:class="
				fill +
				` componentContainer` +
				(error ? ' hasError' : '') +
				(labelPlacement === 'stacked' ? ' stacked' : '')
			"
		>
			<ion-label
				v-if="labelPlacement === 'stacked'"
				class="stacked-label label"
			>
				<small>{{ label }}</small>
			</ion-label>
			<ion-label v-if="labelPlacement === 'start'">{{ label }}</ion-label>
			<slot name="component" />
			<ion-label v-if="labelPlacement === 'end'">{{ label }}</ion-label>
		</div>
		<ion-note
			v-if="helperText || errorText"
			:color="error ? 'danger' : 'medium'"
			class="note"
		>
			<small>{{ errorText ? errorText : helperText }}</small>
		</ion-note>
	</div>
</template>

<style scoped>
.wrapper {
	position: relative;
	width: 100%;
}
.outline {
	border: 1px solid var(--ion-color-medium-shade, var(--ion-color-medium));
	border-radius: 4px;
	padding: 8px;
}
.solid {
	background-color: var(--ion-color-primary);
	border-radius: 4px;
	padding: 8px;
	color: var(--ion-color-light);
}
.note {
	margin-left: 15px;
}
.stacked-label {
	position: absolute;
	top: -2px;
	left: 11px;
	transform: translateY(-50%);
	margin: 0;
	padding: 0 0.2rem;
	background: var(--ion-card-background, #fff);
	z-index: 2;
}
.componentContainer {
	position: relative;
	width: 100%;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 10px;
	padding: 18px;
	overflow: visible;
}
.componentContainer.stacked {
	margin-top: 5px;
}
.componentContainer > ion-label:not(.stacked-label) {
	white-space: nowrap;
	flex: 0 0 auto;
}
.componentContainer > * {
	min-width: 0;
}
.componentContainer:hover {
	border: 1px solid var(--ion-color-light-shade);
}

.componentContainer:not(.hasError):focus-within {
	border: 1px solid var(--ion-color-primary);
}

.componentContainer:not(.hasError):focus-within ion-label,
.componentContainer:not(.hasError):focus-within .label {
	color: var(--ion-color-primary);
}

.componentContainer.hasError {
	border: 1px solid var(--ion-color-danger);
}

.componentContainer.hasError ion-label,
.componentContainer.hasError .label {
	color: var(--ion-color-danger);
}
</style>
