<template>
  <div class="p-2">
    <h1 class="text-2xl md:font-bold">Create Offer</h1>
    <v-stepper
      hide-actions
      v-model="currentStep"
      :items="['Basic Info', 'Reward', 'Save']"
    >
      <template v-slot:item.1>
        <v-card flat>
          <Basic
            @test-emit="handleChildEmit"
            :basicData="offerData.basicData"
          />
        </v-card>
      </template>

      <template v-slot:item.2>
        <v-card flat>
          <Reward
            @season-reward-emit="handleChildEmit"
            :rewardData="offerData.rewardData"
          />
        </v-card>
      </template>
      <template v-slot:item.3>
        <v-card flat>
          <OfferSave />
        </v-card>
      </template>

      <div class="flex justify-between mb-1 mx-1">
        <v-btn @click="moveBack" :disabled="currentStep === 1">Previous</v-btn>
        <v-btn @click="moveNext" :disabled="currentStep < 3 || !stepValidated"
          >Submit</v-btn
        >
        <v-btn
          @click="moveNext"
          v-if="!(currentStep === 3)"
          :disabled="!stepValidated"
          >Next</v-btn
        >
      </div>
    </v-stepper>
  </div>
</template>

<script setup lang="ts">
import OfferSave from "~/components/OfferSave.vue";
import useOfferValidator from "~/composables/useOfferValidators";
import type Basic from "~/interfaces/offer/basic";
import type Reward from "~/interfaces/offer/reward";

let currentStep = ref(1);

let validationStates: boolean[] = [true, false, true, true];
let stepValidated = ref(validationStates[0]);

let basicData: Basic = {
  offerName: "abc123",
  offerId: "12-34",
  price: 12,
  adjustEventId: "njnaknssn",
  specialOffer: true,
  Enabled: false,
};

let rewardData: Reward = reactive({
  cash: 10,
  coin: 10,
  bonusCash: 10,
});

let offerData = {
  basicData: basicData,
  rewardData: rewardData,
};

function moveNext() {
  if (currentStep.value < 3 && stepValidated.value) {
    currentStep.value++;
    stepValidated.value = validationStates[currentStep.value - 1];
  }
}
function moveBack() {
  if (currentStep.value > 1) {
    currentStep.value--;
    stepValidated.value = validationStates[currentStep.value - 1];
  }
}

function handleValidation() {
  let valid = false;
  if (currentStep.value === 1) valid = true;
  else if (currentStep.value === 2) valid = true;
  else valid = true;

  stepValidated.value = valid;
  validationStates[currentStep.value] = valid;
}
function handleChildEmit(offerData: any) {
  handleValidation();
}
</script>
