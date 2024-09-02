<template>
  <div>
    <JsonForms
      :data="basicData"
      :schema="schema"
      :uischema="uischema"
      :renderers="renderers"
      @change="onChange"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, type PropType } from "vue";
import { JsonForms, type JsonFormsChangeEvent } from "@jsonforms/vue";
import {
  defaultStyles,
  mergeStyles,
  vuetifyRenderers,
} from "@jsonforms/vue-vuetify";
import type { JSONSchemaType } from "ajv";
import type Basic from "~/interfaces/offer/basic";
import BasicSchema from "~/schemas/offers/BasicSchema";

// Merge styles if needed
const myStyles = mergeStyles(defaultStyles, { control: { label: "mylabel" } });

// Define the schema and UI schema
const schema: JSONSchemaType<Basic> = BasicSchema;

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/offerName",
        },
      ],
    },
    {
      type: "Group",
      label: "Availability",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/offerId",
            },
            {
              type: "Control",
              scope: "#/properties/price",
            },
          ],
        },
        {
          type: "HorizontalLayout",
          elements: [
            {
              type: "Control",
              scope: "#/properties/offerId",
            },
            {
              type: "Control",
              scope: "#/properties/specialOffer",
            },
            {
              type: "Control",
              scope: "#/properties/Enabled",
              options: {
                format: "checkbox",
              },
            },
          ],
        },
      ],
    },
  ],
};

// get the parent props
const props = defineProps({
  basicData: {
    type: Object as PropType<Basic>,
    required: true,
  },
});

const basicData: Basic = reactive(props.basicData);

const emit = defineEmits(["test-emit"]);
// Handle form changes
const onChange = (event: JsonFormsChangeEvent) => {
  Object.assign(basicData, event.data);
  console.log(basicData);
  emit("test-emit", basicData);
};

// Provide the custom renderers and styles
const renderers = Object.freeze([...vuetifyRenderers]);
</script>
