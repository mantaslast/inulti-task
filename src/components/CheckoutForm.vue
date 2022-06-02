<template>
  <form
    name="checkoutForm"
    action="#"
    @submit="submitForm"
  >
    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Full Name'"
      :name="'fname'"
      v-model="checkoutData.fullName"
    />
    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Email'"
      :name="'email'"
      v-model="checkoutData.email"
    />

    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Zip Code'"
      :name="'zipCode'"
      :input-class="'input--zip pl-7'"
      :placeholder="'10001'"
      v-model="checkoutData.zipCode"
      :format-options="{ numericOnly: true, blocks: [5] }"
    />

    <date-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Birth date'"
      v-model="checkoutData.birthDate"
    />

    <radio-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Gender'"
      :name="'gender'"
      :options="[
        { value: 'Female', label: 'Female' },
        { value: 'Male', label: 'Male' },
      ]"
      v-model="checkoutData.gender"
    />

    <section
      class="bg-[#FAFAFA] rounded-[3.6px] border border-white-tertiary border-solid px-[9.2px] sm:px-[24px] py-[15px] sm:pt-[16px] sm:pb-[25.5px] mb-[20px] sm:mb-[26px]"
    >
      <text-input
        class="pb-[15px]"
        :label="'Card Holder Name'"
        :name="'cardHolderName'"
        :value="checkoutData.fullName"
        @input="checkoutData.cardHolderName = $event"
      />
      <text-input
        class="pb-[15px]"
        :label="'Card Number'"
        :name="'cardNumber'"
        :input-class="'input--sensitive'"
        v-model="checkoutData.cardNumber"
        :format-options="{ creditCard: true }"
      />

      <div class="flex">
        <text-input
          class="flex-1"
          :label="'Expiration Date'"
          :label-class="'!text-[14.8px] sm:!text-md'"
          :name="'expirationDate'"
          :placeholder="'MM/YY'"
          v-model="checkoutData.expirationDate"
          :format-options="{ date: true, datePattern: ['m', 'y'] }"
        />
        <text-input
          class="ml-1 flex-1"
          :label-class="'!text-[14.8px] sm:!text-md'"
          :label="'CVV'"
          :name="'cvv'"
          v-model="checkoutData.cvv"
          :format-options="{ numericOnly: true, blocks: [4] }"
        />
      </div>
    </section>

    <fieldset>
      <button
        class="text-white text-lg font-bold w-full py-[12.5px] rounded-lg bg-cta"
        type="submit"
      >
        CONTINUE
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
/**
 * Inputs
 */
import TextInput from "./Global/Inputs/TextInput.vue";
import DateInput from "./Global/Inputs/DateInput.vue";
import RadioInput from "./Global/Inputs/RadioInput.vue";

import { getUserZip, wait } from "../utils/helpers";

const checkoutData = {
  fullName: "",
  email: "",
  zipCode: "",
  birthDate: "",
  gender: "Female",
  /**
   * Neccessary? (?)
   */
  cardHolderName: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

export default Vue.extend({
  name: "CheckoutForm",
  components: { TextInput, DateInput, RadioInput },
  props: {},
  data() {
    return {
      checkoutData: {...checkoutData},
    };
  },
  methods: {
    submitForm(e: Event) {
      e.preventDefault();
      console.log(e);
      this.resetForm()
    },
    resetForm() {
      this.checkoutData = {...checkoutData}
    }
  },
  async beforeMount() {
    const zipCode = await getUserZip();
    this.checkoutData.zipCode = zipCode as string;
  },
});
</script>

<style></style>
