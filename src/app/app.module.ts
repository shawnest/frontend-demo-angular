import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdvertisementShowComponent } from './advertisement-show/advertisement-show.component';
import { AdvertisementCreateComponent } from './advertisement-create/advertisement-create.component';
import { AdvertisementEditComponent } from './advertisement-edit/advertisement-edit.component';
import { HeaderComponent } from './header/header.component';
import { UserShowComponent } from './user-show/user-show.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AdvertisementService } from './services/advertisement.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementShowComponent,
    AdvertisementCreateComponent,
    AdvertisementEditComponent,
    HeaderComponent,
    UserShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AdvertisementService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
