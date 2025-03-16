import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentModule) }, { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
