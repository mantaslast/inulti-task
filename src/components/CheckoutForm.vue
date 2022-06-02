<template>
  <form
    name="checkoutForm"
    action="#"
    @submit.prevent="submitForm"
  >
    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Full Name'"
      :name="'fname'"
      v-model="checkoutData.fullName"
      :errors="v$.checkoutData.fullName.$errors"
      @input="updateCardHolderName($event)"
    />
    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Email'"
      :name="'email'"
      v-model="checkoutData.email"
      :errors="v$.checkoutData.email.$errors"
    />

    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Zip Code'"
      :name="'zipCode'"
      :input-class="'input--zip pl-7'"
      :placeholder="'10001'"
      v-model="checkoutData.zipCode"
      :format-options="{ numericOnly: true, blocks: [5] }"
      :errors="v$.checkoutData.zipCode.$errors"
    />

    <date-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Birth date'"
      v-model="checkoutData.birthDate"
      :errors="v$.checkoutData.birthDate.$errors"
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
        v-model="checkoutData.cardHolderName"
        :errors="v$.checkoutData.cardHolderName.$errors"
      />
      <text-input
        class="pb-[15px]"
        :label="'Card Number'"
        :name="'cardNumber'"
        :input-class="'input--sensitive'"
        v-model="checkoutData.cardNumber"
        :format-options="{ creditCard: true }"
        :errors="v$.checkoutData.cardNumber.$errors"
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
          :errors="v$.checkoutData.expirationDate.$errors"
        />
        <text-input
          class="ml-1 flex-1"
          :label-class="'!text-[14.8px] sm:!text-md'"
          :label="'CVV'"
          :name="'cvv'"
          v-model="checkoutData.cvv"
          :format-options="{ numericOnly: true, blocks: [4] }"
          :errors="v$.checkoutData.cvv.$errors"
        />
      </div>
    </section>

    <fieldset>
      <button
        :disabled="v$.$error"
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
/**
 * Helpers
 */
import { getUserZip } from "../utils/helpers";
/**
 * Validation
 */
import useVuelidate from "@vuelidate/core";
import { required, helpers, email, minLength } from "@vuelidate/validators";
import {minTwoWords, eachWordLengthTwo, ccNotPastExpiration, ageOver18} from "../utils/custom-validators"

const checkoutData = {
  fullName: "",
  email: "",
  zipCode: "",
  birthDate: "",
  gender: "Female",
  cardHolderName: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

export default Vue.extend({
  setup() {
    return { v$: useVuelidate() };
  },
  name: "CheckoutForm",
  components: { TextInput, DateInput, RadioInput },
  props: {},
  data() {
    return {
      checkoutData: { ...checkoutData },
    };
  },
  validations(): Record<string, any> {
    return {
      checkoutData: {
        fullName: { 
          required, 
          minTwoWords: helpers.withMessage('Field must contain at least two words', minTwoWords),
          eachWordLengthTwo: helpers.withMessage('Each word must contain at least two characters', eachWordLengthTwo)
          },
        email: { required, email },
        zipCode: { required, minLength: minLength(3) },
        birthDate: { 
          required: helpers.withMessage('All fields must be selected', required),
          ageOver18: helpers.withMessage('Age must be over 18', ageOver18)
         },
        cardHolderName: { required, minLength: minLength(3) },
        cardNumber: { required, minLength: minLength(3) },
        expirationDate: { 
          required,
          minLength: minLength(3),
          ccNotPastExpiration: helpers.withMessage('Expiration date cannot be past date', ccNotPastExpiration)
           },
        cvv: { required },
      },
    };
  },
  methods: {
    async submitForm(): Promise<void> {
      const valid = await this.v$.$validate()
      if (valid) {
        try {
        /**
         * Send http request......
         */
        //await this.sendData()
        this.showSuccess()
        this.resetForm()
        } catch (err) {
          console.error(err)
          this.resetForm()
        }
      }
    },
    async sendData(): Promise<void> {
      const response = await this.$http.postJSON('https://www.google.com', this.checkoutData)
    },
    updateCardHolderName(e: string): void {
      this.checkoutData.cardHolderName = e
    },
    resetForm(): void {
      this.v$.$reset()
      this.checkoutData = { ...checkoutData };
    },
    showSuccess(): void {
        this.$emit('success')
    }
  },
  async beforeMount(): Promise<void> {
    const zipCode = await getUserZip();
    this.checkoutData.zipCode = zipCode as string;
  },
});
</script>

<style></style>
