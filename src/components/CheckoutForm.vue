<template>
  <form name="checkoutForm" action="#" @submit="submitForm">
    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Full Name'"
      :name="'fname'"
    />
    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Email'"
      :name="'email'"
    />

    <text-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Zip Code'"
      :name="'zipCode'"
      :input-class="'input--zip pl-7'"
      :placeholder="'10001'"
    />

    <date-input class="pb-[15px] sm:pb-[20px]" :label="'Birth date'" />

    <radio-input
      class="pb-[15px] sm:pb-[20px]"
      :label="'Gender'"
      :name="'gender'"
      :options="[
        { value: 'Female', label: 'Female' },
        { value: 'Male', label: 'Male' },
      ]"
    ></radio-input>

    <section
      class="bg-[#FAFAFA] rounded-[3.6px] border border-white-tertiary border-solid px-[9.2px] sm:px-[24px] py-[15px] sm:pt-[16px] sm:pb-[25.5px] mb-[20px] sm:mb-[26px]"
    >
      <text-input
        class="pb-[15px]"
        :label="'Card Holder Name'"
        :name="'cardHolderName'"
      />
      <text-input
        class="pb-[15px]"
        :label="'Card Number'"
        :name="'cardNumber'"
        :input-class="'input--sensitive'"
      />

      <div class="flex">
        <text-input
          class="flex-1"
          :label="'Expiration Date'"
          :label-class="'!text-[14.8px] sm:!text-md'"
          :name="'expirationDate'"
          :placeholder="'MM/YY'"
        />
        <text-input
          class="ml-1 flex-1"
          :label-class="'!text-[14.8px] sm:!text-md'"
          :label="'CVV'"
          :name="'cvv'"
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

import { getUserZip } from "../utils/helpers";

export default Vue.extend({
  name: "CheckoutForm",
  components: { TextInput, DateInput, RadioInput },
  props: {},
  data() {
    return {};
  },
  methods: {
    submitForm(e: Event) {
      e.preventDefault();
      console.log(e);
    },
  },
  async beforeMount() {
    const data = await getUserZip();
    console.log(data);
  },
});
</script>

<style></style>
