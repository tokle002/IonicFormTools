<script setup lang="ts">
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { IftHorizontalSplitterProps } from "../types/IftHorizontalSplitterProps";

const props = withDefaults(defineProps<IftHorizontalSplitterProps>(), {
	sizeFirstCell: "6",
	gap: "12px",
});
</script>

<template>
	<ion-grid class="ion-no-padding">
		<ion-row>
			<ion-col :size="sizeFirstCell">
				<slot name="left" />
			</ion-col>
			<ion-col>
				<slot name="right" />
			</ion-col>
		</ion-row>
	</ion-grid>
</template>

<style scoped>
ion-row {
	gap: v-bind(gap);
}
</style>
