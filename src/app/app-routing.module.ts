import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'query-demo',
    loadChildren: () =>
      import('./query-params-demo/query-params-demo.module').then(
        m => m.QueryParamsDemoModule,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'query-demo' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
