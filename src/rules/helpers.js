export const getRuleDefinitionsFromRuleBookDefinitions = (ruleBookDefinitions) => {
  const ruleBookDefinitionValues = Object.values(ruleBookDefinitions);
  return Object.assign({}, ...ruleBookDefinitionValues);
};

export const createRuleFromRuleDefinition = (ruleDefinition) => (...props) => {
  const { test, msg } = ruleDefinition(...props);

  return (val) => test(val) || msg;
};

export const createRulesFromRuleDefinitions = (ruleDefinitions = {}) => {
  const newRules = {};

  const ruleDefinitionEntries = Object.entries(ruleDefinitions);
  ruleDefinitionEntries.forEach(([ruleDefinitionName, ruleDefinition]) => {
    newRules[ruleDefinitionName] = createRuleFromRuleDefinition(ruleDefinition);
  });

  return newRules;
};

export const createRuleBook = (ruleBookDefinitions) => {
  const newRuleBook = {};

  const ruleBookDefinitionEntries = Object.entries(ruleBookDefinitions);
  ruleBookDefinitionEntries.forEach(([category, ruleDefinitions]) => {
    newRuleBook[category] = createRulesFromRuleDefinitions(ruleDefinitions);
  });

  return newRuleBook;
};

export const createRulesFromRuleBookDefinitions = (ruleBookDefinitions) => {
  const ruleDefinitions = getRuleDefinitionsFromRuleBookDefinitions(ruleBookDefinitions);

  return createRulesFromRuleDefinitions(ruleDefinitions);
};

const createSomeRulesFromRuleDefinitions = (ruleDefinitions, ruleDefinitionNames) => {
  const newRules = {};

  ruleDefinitionNames.forEach((ruleDefinitionName) => {
    const ruleDefinition = ruleDefinitions[ruleDefinitionName];
    newRules[ruleDefinitionName] = createRuleFromRuleDefinition(ruleDefinition);
  });

  return newRules;
};

export const createUseRulesFromRuleBook = (ruleBookDefinitions) => {
  const ruleDefinitions = getRuleDefinitionsFromRuleBookDefinitions(ruleBookDefinitions);

  return (ruleDefinitionNames) => {
    const isUndefined = ruleDefinitionNames === undefined;
    ruleDefinitionNames = isUndefined ? Object.values(ruleDefinitions) : [ruleDefinitionNames];

    const isArray = Array.isArray(ruleDefinitionNames);
    ruleDefinitionNames = isArray ? ruleDefinitionNames : [ruleDefinitionNames];

    return createSomeRulesFromRuleDefinitions(ruleDefinitions, ruleDefinitionNames);
  };
};

export const createUseRulesFromRuleDefinitions = (ruleDefinitions) => (ruleDefinitionNames) => {
  const isUndefined = ruleDefinitionNames === undefined;
  ruleDefinitionNames = isUndefined ? Object.values(ruleDefinitions) : [ruleDefinitionNames];

  const isArray = Array.isArray(ruleDefinitionNames);
  ruleDefinitionNames = isArray ? ruleDefinitionNames : [ruleDefinitionNames];

  return createSomeRulesFromRuleDefinitions(ruleDefinitions, ruleDefinitionNames);
};
