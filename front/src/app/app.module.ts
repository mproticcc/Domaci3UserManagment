import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AddUserComponent } from './shared/add-user/add-user.component';
import { TabelOfUsersComponent } from './shared/tabel-of-users/tabel-of-users.component';
import { UpdateUserComponent } from './shared/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    TabelOfUsersComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
