import Cleave from "cleave.js";
import { DirectiveBinding } from "vue/types/options";

interface IHTMLElementCleave extends HTMLElement {
  cleave?: Cleave;
  value?: string;
}

const cleaveDirective = {
    inserted: (el: IHTMLElementCleave, binding: DirectiveBinding) => {
        const {initValue, ...directiveValues } = binding.value
        const isDirectiveApplied = Object.keys(directiveValues).length > 0
        el.cleave = isDirectiveApplied ? new Cleave(el, binding.value || {}) : undefined;
      },
      update: (el: IHTMLElementCleave, binding: DirectiveBinding) => {
        const event = new Event("input", { bubbles: true });
        setTimeout(function () {
          //el.cleave && (el.value = el.cleave.properties.result || el.value)
          el.dispatchEvent(event);
        }, 100);
      },
}

export default cleaveDirective
