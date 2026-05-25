import { plansToClues } from '../../seed-builders';
import { hospitalOperationsDiagnosticsPlans } from './exploration-plans';

export const hospitalOperationsDiagnosticsClues =
  plansToClues(hospitalOperationsDiagnosticsPlans);
