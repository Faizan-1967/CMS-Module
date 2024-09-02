import type { JSONSchemaType } from "ajv";
import type Basic from "~/interfaces/offer/basic";


const BasicSchema:JSONSchemaType<Basic> = {
    "type": "object",
    "properties": {
        "offerName":{
            "type":"string",
            "minimum":3,
            "maxLength":15
        },
        "offerId":{
            "type":"string",
            "minimum":3
        },
        "price":{
            "type":"number",
            "minLength":3
        },
        "adjustEventId":{
            "type":"string",
            "minimum":3
        },
        "specialOffer":{
            "type":"boolean"
        },
        "Enabled":{
            "type":"boolean"
        }

    },
    "required": ["offerId" , "offerName" , "price" , "adjustEventId" , "specialOffer" , "Enabled"],
    "additionalProperties": false
};

export default BasicSchema;