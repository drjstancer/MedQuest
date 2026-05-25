import { plansToExplorations } from '../../seed-builders';
import { primaryCareCommunityHealthPlans } from './exploration-plans';

export const primaryCareCommunityHealthExplorations =
  plansToExplorations(primaryCareCommunityHealthPlans);
