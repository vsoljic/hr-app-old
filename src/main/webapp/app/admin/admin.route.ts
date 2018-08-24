import { Routes } from '@angular/router';

import { auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, userMgmtRoute } from './';

import { UserRouteAccessService } from 'app/core';
import { ESTIMATION_ROUTE } from 'app/admin/estimation/estimation.route';
import { EVALUATOR_ROUTE } from 'app/admin/evaluator/evaluator.route';
import { EVALUATEE_ROUTE } from 'app/admin/evaluatee/evaluatee.route';
import { ESTIMATIONS_OVERVIEW_ROUTE } from 'app/admin/estimations-overview/estimations-overview.route';

const ADMIN_ROUTES = [
    auditsRoute,
    configurationRoute,
    docsRoute,
    healthRoute,
    logsRoute,
    ...userMgmtRoute,
    metricsRoute,
    ESTIMATION_ROUTE,
    EVALUATOR_ROUTE,
    EVALUATEE_ROUTE,
    ESTIMATIONS_OVERVIEW_ROUTE
];

export const adminState: Routes = [
    {
        path: '',
        data: {
            authorities: ['ROLE_ADMIN']
        },
        canActivate: [UserRouteAccessService],
        children: ADMIN_ROUTES
    }
];
