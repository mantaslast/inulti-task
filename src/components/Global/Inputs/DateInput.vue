<template>
  <div>
    <!--- Fieldset doesn't apply flexbox styles in chome, amazing :) -->
    <label
      class="inline-block text-md font-bold text-gray-800 pb-[3.81px] sm:pb-[5px]"
      :class="labelClass"
    >{{ label }}</label>

    <div class="flex">
      <select
        v-model="month"
        class="input--date h-[40px] sm:h-[45px] rounded-lg pr-1 pl-2 text-gray-500 border-sm border-gray-300 min-w-0 basis-[40%] mr-[5px]"
      >
        <template v-for="(month, key) in months">
          {{ key }}
          <option
            :key="key"
            :value="key"
          >
            {{ month }}
          </option>
        </template>
      </select>

      <select
        :disabled="month === '0'"
        class="input--date h-[40px] sm:h-[45px] rounded-lg pr-1 pl-2 text-gray-500 border-sm border-gray-300 min-w-0 basis-[30%] mr-[5px]"
      >
        <option
          selected
          value="0"
        >
          Day
        </option>
        <option value="saab">
          Saab
        </option>
        <option value="mercedes">
          Mercedes
        </option>
        <option value="audi">
          Audi
        </option>
      </select>

      <select
        class="input--date h-[40px] sm:h-[45px] rounded-lg pr-1 pl-2 text-gray-500 border-sm border-gray-300 min-w-0 basis-[30%]"
      >
        <option
          selected
          value="0"
        >
          Year
        </option>
        <option value="saab">
          Saab
        </option>
        <option value="mercedes">
          Mercedes
        </option>
        <option value="audi">
          Audi
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "DateInput",
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
    labelClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      month: "0",
      day: "",
      year: "",
      months: {},
    };
  },
});
</script>

<style></style>
