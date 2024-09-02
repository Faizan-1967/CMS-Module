<template>
  <div>
    <div class="flex flex-row justify-between">
      <div>
        <div>
          <JsonForms
            :data="rewardData"
            :schema="rewardSchema"
            :uischema="rewardUiSchema"
            :renderers="renderers"
            @change="handlerewardChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Reward from "~/interfaces/offer/reward";
import { reactive, type PropType } from "vue";
import { JsonForms, type JsonFormsChangeEvent } from "@jsonforms/vue";
import {
  defaultStyles,
  mergeStyles,
  vuetifyRenderers,
} from "@jsonforms/vue-vuetify";
import type { JSONSchemaType } from "ajv";
import RewardSchema from "~/schemas/offers/RewardSchema";

// Merge styles if needed
const myStyles = mergeStyles(defaultStyles, { control: { label: "mylabel" } });

const rewardSchema: JSONSchemaType<Reward> = RewardSchema;

const rewardUiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/coin",
        },
        {
          type: "Control",
          scope: "#/properties/cash",
        },
        {
          type: "Control",
          scope: "#/properties/bonusCash",
        },
      ],
    },
  ],
};

const props = defineProps({
  rewardData: {
    type: Object as PropType<Reward>,
    required: true,
  },
});

let rewardData: Reward = reactive(props.rewardData);

const emit = defineEmits(["season-reward-emit"]);
function handlerewardChange(event: JsonFormsChangeEvent) {
  Object.assign(rewardData, event.data);
  emit("season-reward-emit", rewardData);
}

const renderers = Object.freeze([...vuetifyRenderers]);
</script>
