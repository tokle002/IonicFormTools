<script setup lang="ts">
import { reactive } from "vue";
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
	IonList,
	IonItem,
} from "@ionic/vue";
import { keyOutline } from "ionicons/icons";
import {
	IftInput,
	IftHorizontalSplitter,
	IftVerticalSplitter,
	IftTextarea,
	IftGenericSelect,
	IftCheckbox,
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
	terms: false,
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
	terms: { required: required() },
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
		<ion-content>
			<ion-list lines="none">
				<ion-item>
					<IftInput
						v-model="state.email"
						label="E-Mail"
						:validation="v$.email"
					/>
				</ion-item>
				<ion-item>
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
				</ion-item>
				<ion-item>
					<IftHorizontalSplitter>
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
				</ion-item>
				<ion-item>
					<IftHorizontalSplitter size-first-cell="3">
						<template #left>
							<IftVerticalSplitter>
								<template #top>
									<IftInput
										v-model="state.zip"
										label="PLZ"
										:validation="v$.zip"
									/>
								</template>
								<template #bottom>
									<IftVerticalSplitter>
										<template #top>
											<IftInput
												v-model="state.street"
												label="Straße"
												:validation="v$.street"
											/>
										</template>
										<template #bottom>
											<IftCheckbox
												v-model="state.terms"
												label="Ich stimme den Nutzungsbedingungen zu"
												:validation="v$.terms"
											/>
										</template>
									</IftVerticalSplitter>
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
				</ion-item>
				<ion-item>
					<IftInput
						v-model="state.email"
						label="Wie bist du her gekommen?"
						label-placement="start"
					/>
				</ion-item>
				<ion-item>
					<IftGenericSelect
						v-model="state.email"
						label="Wie bist du her gekommen?"
						label-placement="start"
						:error="true"
						error-text="Das ist ein Fehler"
					/>
				</ion-item>
				<ion-button expand="block" @click="submit"> Absenden </ion-button>
			</ion-list>
		</ion-content>
	</ion-page>
</template>
