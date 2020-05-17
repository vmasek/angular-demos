import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryParamsDemoComponent } from './query-params-demo.component';

const routes: Routes = [{ path: '', component: QueryParamsDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class QueryParamsDemoRoutingModule {}
