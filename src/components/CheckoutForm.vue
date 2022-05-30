<template>
  <form
    name="checkoutForm"
    action="#"
    @submit="submitForm"
  >
    <input type="text">
    <button type="submit">
      Submit
    </button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
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
});
</script>

<style></style>
