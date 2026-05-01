<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { IftVerticalSplitterProps } from "../types/IftVerticalSplitterProps";

const props = withDefaults(defineProps<IftVerticalSplitterProps>(), {});
</script>

<template>
	<ion-grid class="ion-no-padding">
		<ion-row>
			<ion-col>
				<slot name="top" />
			</ion-col>
		</ion-row>
		<ion-row>
			<ion-col>
				<slot name="bottom" />
			</ion-col>
		</ion-row>
	</ion-grid>
</template>

<style scoped></style>
