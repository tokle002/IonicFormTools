<script setup lang="ts">
import { reactive } from "vue";
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
} from "@ionic/vue";
import { keyOutline } from "ionicons/icons";
import {
	IftInput,
	IftHorizontalSplitter,
	IftVerticalSplitter,
	IftTextarea,
	required,
	email,
	minLength,
	maxLength,
} from "@ionic-form-tools/core";
import useVuelidate from "@vuelidate/core";

const state = reactive({
	email: "",
	username: "",
	firstName: "",
	lastName: "",
	zip: "",
	city: "",
	street: "",
	houseNumber: "",
	notes: "",
});

const rules = {
	email: { required: required(), email: email() },
	username: {
		required: required(),
		minLength: minLength(3),
		maxLength: maxLength(20),
	},
	firstName: { required: required() },
	lastName: { required: required() },
	zip: { required: required() },
	city: { required: required() },
	street: { required: required() },
	houseNumber: { required: required() },
};

const v$ = useVuelidate(rules, state);

const submit = async () => {
	const valid = await v$.value.$validate();
	if (valid) console.log("Form valid:", state);
};
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
				v-model="state.email"
				label="E-Mail"
				type="email"
				:validation="v$.email"
			/>
			<IftInput
				v-model="state.username"
				label="Benutzername"
				type="password"
				:icon="keyOutline"
				:validation="v$.username"
				:show-counter="true"
				helper-text="asdas"
				:clear-input="true"
			/>
			<IftHorizontalSplitter size-first-cell="8">
				<template #left>
					<IftInput
						v-model="state.firstName"
						label="Vorname"
						:validation="v$.firstName"
					/>
				</template>
				<template #right>
					<IftInput
						v-model="state.lastName"
						label="Nachname"
						:validation="v$.lastName"
					/>
				</template>
			</IftHorizontalSplitter>
			<IftHorizontalSplitter size-first-cell="8">
				<template #left>
					<IftVerticalSplitter>
						<template #top>
							<IftInput v-model="state.zip" label="PLZ" :validation="v$.zip" />
						</template>
						<template #bottom>
							<IftInput
								v-model="state.street"
								label="Straße"
								:validation="v$.street"
							/>
						</template>
					</IftVerticalSplitter>
				</template>
				<template #right>
					<IftTextarea
						v-model="state.notes"
						label="Anmerkungen"
						:show-counter="true"
						:auto-grow="true"
					/>
				</template>
			</IftHorizontalSplitter>

			<ion-button expand="block" @click="submit"> Absenden </ion-button>
		</ion-content>
	</ion-page>
</template>
