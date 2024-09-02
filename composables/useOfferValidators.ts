import Ajv, { type JSONSchemaType } from "ajv";
import type Basic from "~/interfaces/offer/basic";
import type Reward from "~/interfaces/offer/reward";
import BasicSchema from "~/schemas/offers/BasicSchema";
import RewardSchema from "~/schemas/offers/RewardSchema";

export default function useOfferValidator(){
    const ajv = new Ajv();

    function validateOfferReward(rewardData:Reward) : boolean{
        const rewardSchema:JSONSchemaType<Reward> = RewardSchema;
        const validator = ajv.compile(rewardSchema);
        if(validator(rewardData))
            return true;
        return false;
    }

    function validateOfferBasic(basicData:Basic):boolean{
        const basicSchema:JSONSchemaType<Basic> = BasicSchema;
        const validator = ajv.compile(basicSchema);
        if(validator(basicData))
            return true;
        return false;
    }

    return {
        validateOfferReward,
        validateOfferBasic
    }
}