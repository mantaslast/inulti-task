<template>
  <div>
    <app-header />
    <section>
      <router-link :to="{ name: 'checkout' }">
        Checkout
      </router-link>
      <router-view />
    </section>
    <app-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppFooter from "./components/Layout/AppFooter.vue";
import AppHeader from "./components/Layout/AppHeader.vue";

export default Vue.extend({
  name: "App",
  components: { AppFooter, AppHeader },
});
</script>

<style></style>
