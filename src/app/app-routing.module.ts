import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementShowComponent } from './advertisement-show/advertisement-show.component';
import { AdvertisementEditComponent } from './advertisement-edit/advertisement-edit.component';
import { AdvertisementCreateComponent } from './advertisement-create/advertisement-create.component';
import { AppComponent } from './app.component';
import { UserShowComponent } from './user-show/user-show.component';

const routes: Routes = [
  {
    path: 'advertisements',
    component: AdvertisementShowComponent
  },
  {
    path: 'advertisements/edit/:id',
    component: AdvertisementEditComponent
  },
  {
    path: 'advertisements/create',
    component: AdvertisementCreateComponent
  },
  {
    path: 'users',
    component: UserShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
