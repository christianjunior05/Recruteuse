import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgxSpinnerModule} from 'ngx-spinner';
import {entrepotRoute} from './entrepot.route';
import {TranslateModule} from '@ngx-translate/core';
import { EntrepotUpdateComponent } from './entrepot-update/entrepot-update.component';
import {EntrepotComponent} from "./entrepot.component";

@NgModule({
  declarations: [
    EntrepotComponent,
    EntrepotUpdateComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(entrepotRoute),
        NgxDatatableModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        TranslateModule,
    ],
  exports: [RouterModule],
})
export class EntrepotModule {
}
