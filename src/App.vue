<template>
  <div class="font-sans h-full flex flex-col">
    <app-header />
    <main class="py-[18px] px-[15px] sm:pt-[54px] sm:pb-[32.5px]">
      <router-view />
    </main>
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
