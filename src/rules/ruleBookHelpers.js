import ruleBookDefinitions from ".";
import { createRulesFromRuleDefinitions } from "./ruleHelpers";

export const getAllRuleDefinitionsFromRuleBookDefinitions = () => {
  const allRuleDefinitions = {};
  Object.values(ruleBookDefinitions).forEach((ruleDefinitions) => {
    Object.assign(allRuleDefinitions, { ...ruleDefinitions });
  });
  return allRuleDefinitions;
};

export const createRuleBook = () => {
  const ruleBook = {};
  const ruleBookDefinitionEntries = Object.entries(ruleBookDefinitions);
  ruleBookDefinitionEntries.forEach(([category, ruleDefinitions]) => {
    ruleBook[category] = createRulesFromRuleDefinitions(ruleDefinitions);
  });

  return ruleBook;
};
