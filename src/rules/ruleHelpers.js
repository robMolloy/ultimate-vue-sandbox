// // import { allRuleDefinitions } from "./allRuleDefinitions";

// export const createRuleFromRuleDefinitionName = (ruleName) => (...props) => {
//   const ruleDefinition = allRuleDefinitions[ruleName];
//   const { test, msg } = ruleDefinition(...props);

//   return (val) => test(val) || msg;
// };

// export const getAllRules = () => {
//   const allRules = {};

//   const allRuleDefinitionNames = Object.keys(allRuleDefinitions);
//   allRuleDefinitionNames.forEach((ruleDefinitionName) => {
//     allRules[ruleDefinitionName] = createRuleFromRuleDefinitionName(ruleDefinitionName);
//   });

//   return allRules;
// };

// export const getAllRulesFromRuleBook = () => {
//   const allRules = {};

//   const allRuleDefinitionNames = Object.keys(allRuleDefinitions);
//   allRuleDefinitionNames.forEach((ruleDefinitionName) => {
//     allRules[ruleDefinitionName] = createRuleFromRuleDefinitionName(ruleDefinitionName);
//   });

//   return allRules;
// };

// export const createRulesFromRuleDefinitions = (ruleDefinitions) => {
//   const allRules = {};

//   const ruleDefinitionNames = Object.keys(ruleDefinitions);
//   ruleDefinitionNames.forEach((ruleDefinitionName) => {
//     allRules[ruleDefinitionName] = createRuleFromRuleDefinitionName(ruleDefinitionName);
//   });

//   return allRules;
// };
