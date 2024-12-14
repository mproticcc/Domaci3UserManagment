import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { AddUserComponent } from './shared/add-user/add-user.component';
import { TabelOfUsersComponent } from './shared/tabel-of-users/tabel-of-users.component';
import { LoginGuard } from './core/guards/login.guard';
import { AddGuard } from './core/guards/add.guard';
import { UpdateUserComponent } from './shared/update-user/update-user.component';
import { UpdateGuard } from './core/guards/update.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: TabelOfUsersComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'adduser',
    component: AddUserComponent,
    canActivate: [AddGuard],
  },
  {
    path: 'updateuser',
    component: UpdateUserComponent,
    canActivate: [UpdateGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
