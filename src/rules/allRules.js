import { ruleDefinitions } from "./ruleDefinitions";

const createRuleFromRuleDefinitionName = (ruleName) => (...props) => {
  const ruleDefinition = ruleDefinitions[ruleName];
  const { test, msg } = ruleDefinition(...props);

  return (val) => test(val) || msg;
};

export const allRules = {
  stringDoesNotContainX: createRuleFromRuleDefinitionName("stringDoesNotContainX"),
  stringMustContainX: createRuleFromRuleDefinitionName("stringMustContainX"),
  stringMustContainXandY: createRuleFromRuleDefinitionName("stringMustContainXandY"),
};
