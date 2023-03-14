import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'sth',
    data: { breadcrumb: 'Step 1' },
    component: AppComponent,
    children: [
      {
        path: 'zxc',
        component: AppComponent,
        data: { breadcrumb: 'Step 2' },
        children: [
          {
            path: 'sdf',
            component: AppComponent,
            data: { breadcrumb: 'Step 3' },
          },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
