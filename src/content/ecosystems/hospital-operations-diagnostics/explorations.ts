import { plansToExplorations } from '../../seed-builders';
import { hospitalOperationsDiagnosticsPlans } from './exploration-plans';

export const hospitalOperationsDiagnosticsExplorations =
  plansToExplorations(hospitalOperationsDiagnosticsPlans);
