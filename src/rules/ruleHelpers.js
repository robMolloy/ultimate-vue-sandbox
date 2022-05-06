import { ruleDefinitions } from "./ruleDefinitions";

export const createRuleFromRuleDefinition = (ruleDefinition, ...props) => {
  const { test, msg } = ruleDefinition(...props);
  return (val) => !test(val) || msg;
};

export const createRuleFromRuleDefinitionName = (ruleDefinitionName, ...props) => {
  const ruleDefinition = ruleDefinitions[ruleDefinitionName];
  return createRuleFromRuleDefinition(ruleDefinition, ...props);
};
