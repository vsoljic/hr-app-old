import './vendor.ts';

import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocalStorageService, Ng2Webstorage, SessionStorageService } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { HrAppSharedModule } from 'app/shared';
import { HrAppCoreModule } from 'app/core';
import { HrAppAppRoutingModule } from './app-routing.module';
import { HrAppHomeModule } from './home/home.module';
import { HrAppAccountModule } from './account/account.module';
import { HrAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { ActiveMenuDirective, ErrorComponent, FooterComponent, JhiMainComponent, NavbarComponent, PageRibbonComponent } from './layouts';
import { NgbDateCustomParserFormatter } from 'app/shared/ngb-date-custom-parser-formatter';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { GoalGroupComponent } from './goal-group/goal-group.component';
@NgModule({
    imports: [
        BrowserModule,
        HrAppAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        HrAppSharedModule,
        HrAppCoreModule,
        HrAppHomeModule,
        HrAppAccountModule,
        HrAppEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        GoalGroupComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [LocalStorageService, SessionStorageService]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: NgbDateParserFormatter,
            useClass: NgbDateCustomParserFormatter
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class HrAppAppModule {}
