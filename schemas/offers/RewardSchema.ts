import type { JSONSchemaType } from "ajv";
import type Reward from "~/interfaces/offer/reward";

const RewardSchema: JSONSchemaType<Reward> = {
    "type": "object",
    "properties": {
        "coin": {
            "type": "number",
            "minimum": 5,
            "maximum":100
        },
        "cash": {
            "type": "number",
            "minimum": 5,
            "maximum": 100,
        },
        "bonusCash": {
            "type": "number",
            "minimum": 5,
            "maximum": 100
        },
    },
    "required": ["coin","cash","bonusCash"],
    "additionalProperties": false,
};

export default RewardSchema;