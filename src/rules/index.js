import { createUseRules, combineRuleDefinitions } from "rule101";

import stringRuleDefinitions from "./stringRuleDefinitions";
import arrayRuleDefinitions from "./arrayRuleDefinitions";

export const useStringRules = createUseRules(stringRuleDefinitions);
export const useArrayRules = createUseRules(arrayRuleDefinitions);

const allRuleDefinitions = combineRuleDefinitions(
  stringRuleDefinitions,
  arrayRuleDefinitions,
);

export const useRules = createUseRules(allRuleDefinitions);
