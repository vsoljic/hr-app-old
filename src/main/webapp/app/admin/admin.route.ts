import {Routes} from '@angular/router';

import {auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, metricsRoute, userMgmtRoute} from './';

import {UserRouteAccessService} from 'app/core';
import {ESTIMATION_ROUTE} from 'app/admin/estimation/estimation.route';

const ADMIN_ROUTES = [auditsRoute, configurationRoute, docsRoute, healthRoute, logsRoute, ...userMgmtRoute, metricsRoute, ESTIMATION_ROUTE];

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
