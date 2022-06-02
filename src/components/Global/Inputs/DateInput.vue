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
        :disabled="year === ''"
        class="input--date h-[40px] sm:h-[45px] rounded-lg pr-1 pl-2 text-gray-500 border-sm border-gray-300 min-w-0 basis-[40%] mr-[5px]"
      >
        <option
          selected
          value=""
        >
          Month
        </option>
        <template v-for="(monthItem, key) in months">
          <option
            :key="'month-' + key"
            :value="key"
          >
            {{ monthItem }}
          </option>
        </template>
      </select>

      <select
        v-model="day"
        :disabled="month === ''"
        class="input--date h-[40px] sm:h-[45px] rounded-lg pr-1 pl-2 text-gray-500 border-sm border-gray-300 min-w-0 basis-[30%] mr-[5px]"
      >
        <option
          selected
          value=""
        >
          Day
        </option>
        <template v-for="(dayItem, key) in days">
          {{ key }}
          <option
            :key="'day-' + key"
            :value="dayItem"
          >
            {{ dayItem }}
          </option>
        </template>
      </select>

      <select
        v-model="year"
        class="input--date h-[40px] sm:h-[45px] rounded-lg pr-1 pl-2 text-gray-500 border-sm border-gray-300 min-w-0 basis-[30%]"
      >
        <option
          selected
          value=""
        >
          Year
        </option>
        <template v-for="(yearItem, key) in years">
          {{ key }}
          <option
            :key="'year-' + key"
            :value="yearItem"
          >
            {{ yearItem }}
          </option>
        </template>
      </select>
    </div>
    <div class="errors__list flex flex-col">
      <template v-for="(error, key) in errors">
        <span
          :key="key"
          class="text-xs text-error"
        >{{ error.$message }}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getDaysInMonth, range } from "../../../utils/helpers";

/**
 * I'd change the design flow of birth date inputs from
 * month -> day -> year
 * to
 * year -> month -> day
 */
export default Vue.extend({
  name: "DateInput",
  model: {
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: ''
    },
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
    errors: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      month: "",
      day: "",
      year: "",
      /**
       * Generate a range [1900....<currentyear>]
       */
      years: range(1900, new Date().getFullYear()).sort((a, b) => b - a),
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  watch: {
    year(newVal) {
      if (!newVal) {
        this.day = "";
        this.month = "";
      } else {
        this.handleDateChange();
      }
    },
    month(newVal) {
      if (newVal !== 0 && !newVal) {
        this.day = "";
      } else {
        this.handleDateChange();
      }
    },
    value(newVal) {
      if (!newVal) {
        this.day = "";
        this.month = "";
        this.year = ""
      }
    },
    dateInputValue(newVal) {
      this.$emit("change", newVal);
    },
  },
  computed: {
    dateInputValue(): string {
      let { year, month, day } = this;
      month = month + 1;
      if (!day || !month || !year) return "";
      return `${year}-${parseInt(month) > 9 ? month : "0" + month}-${
        parseInt(day) > 9 ? day : "0" + day
      }`;
    },
    /**
     * Days might depend on year and month picked
     */
    days(): Array<number> {
      const year = parseInt(this.year);
      const month = parseInt(this.month) + 1;
      if (isNaN(year) || isNaN(month)) return [];
      const daysInMonth = getDaysInMonth(
        parseInt(this.year),
        parseInt(this.month) + 1
      );
      return range(1, daysInMonth);
    },
  },
  methods: {
    /**
     * When user changes month or year, the amount of days for that month/year might change as well.
     */
    handleDateChange() {
      if (this.days.length === 0 || !this.day) return;
      if (this.days[this.days.length - 1] < parseInt(this.day)) {
        this.day = "";
      }
    },
  },
});
</script>

<style></style>
