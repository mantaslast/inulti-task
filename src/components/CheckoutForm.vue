<template>
  <form
    name="checkoutForm"
    action="#"
    @submit="submitForm"
  >
    <fieldset class="pb-[15px]">
      <label
        class="text-md font-bold text-gray-800 pb-[3px]"
        for="fname"
      >Full Name</label>
      <input
        class="w-full h-[40px] rounded-lg px-1 text-gray-500 border-sm border-gray-300"
        type="text"
        id="fname"
        name="fname"
      >
    </fieldset>
    <fieldset class="pb-[15px]">
      <label
        class="text-md font-bold text-gray-800 pb-[3px]"
        for="email"
      >Email</label>
      <input
        class="w-full h-[40px] rounded-lg px-1 text-gray-500 border-sm border-gray-300"
        type="text"
        id="email"
        name="email"
      >
    </fieldset>
    <fieldset class="pb-[15px]">
      <label
        class="text-md font-bold text-gray-800 pb-[3px]"
        for="zip"
      >Zip Code</label>
      <input
        class="w-full input--zip h-[40px] rounded-lg pl-7 px-1 text-gray-500 border-sm border-gray-300"
        type="text"
        s
        id="zip"
        name="zip"
      >
    </fieldset>
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
import { getUserZip } from "../utils/helpers";
export default Vue.extend({
  name: "CheckoutForm",
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
