<script setup lang="ts">
import { ref } from "vue";
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from "@ionic/vue";
import { IftInput, IftInputTypes } from "@ionic-form-tools/core";

const email = ref<string | null>(null);
</script>

<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>IftInput Test</ion-title>
			</ion-toolbar>
		</ion-header>

		<ion-content class="ion-padding">
			<IftInput
				v-model="email"
				-
				label="E-Mail"
				:type="IftInputTypes.Email"
				:validators="{ required: true, email: true }"
			/>

			<pre>{{ email }}</pre>
		</ion-content>
	</ion-page>
</template>
