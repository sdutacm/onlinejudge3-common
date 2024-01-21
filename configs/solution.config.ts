import { ESolutionResult } from '../enums';

export const oj2SrkResultMap = {
  [ESolutionResult.AC]: 'AC',
  [ESolutionResult.TLE]: 'TLE',
  [ESolutionResult.MLE]: 'MLE',
  [ESolutionResult.WA]: 'WA',
  [ESolutionResult.RTE]: 'RTE',
  [ESolutionResult.OLE]: 'OLE',
  [ESolutionResult.CE]: 'CE',
  [ESolutionResult.PE]: 'PE',
  [ESolutionResult.SE]: 'UKE',

  [ESolutionResult.WT]: null,
  [ESolutionResult.JG]: null,
  [ESolutionResult.RPD]: null,
  [ESolutionResult.V_Frozen]: '?',
};

export const unsettledResults = [ESolutionResult.WT, ESolutionResult.JG, ESolutionResult.RPD];

export const noPenaltyResults = [
  ...unsettledResults,
  ESolutionResult.AC,
  ESolutionResult.CE,
  ESolutionResult.SE,
];
