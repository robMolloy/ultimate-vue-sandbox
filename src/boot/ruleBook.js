import { createRuleBook, createRulesFromRuleBookDefinitions, createUseRulesFromRuleBook } from "src/rules/helpers";
import ruleBookDefinitions from "src/rules";

const ruleBook = createRuleBook(ruleBookDefinitions);
const rules = createRulesFromRuleBookDefinitions(ruleBookDefinitions);
const useRules = createUseRulesFromRuleBook(ruleBookDefinitions);

export { ruleBook, rules, useRules };
