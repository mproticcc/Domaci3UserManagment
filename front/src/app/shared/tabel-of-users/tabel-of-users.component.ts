import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReadUsersDto, UserDto } from 'src/app/core/model/model';
import { BackService } from 'src/app/core/service/back.service';
import { PerrmissionService } from 'src/app/core/service/perrmission.service';

@Component({
  selector: 'app-tabel-of-users',
  templateUrl: './tabel-of-users.component.html',
  styleUrls: ['./tabel-of-users.component.scss'],
})
export class TabelOfUsersComponent implements OnInit {
  users: ReadUsersDto;
  can_list_users: boolean = false;
  can_create_users: boolean = false;
  can_edit_users: boolean = false;
  can_delete_users: boolean = false;

  message: string = '';
  constructor(
    private service: BackService,
    private router: Router,
    private perrmissionService: PerrmissionService
  ) {
    this.users = {
      users: [],
    };
  }
  ngOnInit(): void {
    this.service.getUsers().subscribe(
      (val: any) => {
        this.users = val;
        for (var i = 0; i < this.users.users.length; i++) {
          if (this.users.users[i].email == localStorage.getItem('email')) {
            this.perrmissionService.addPermission(
              this.users.users[i].permissions
            );
            if (
              this.users.users[i].permissions.indexOf('can_read_users') != -1
            ) {
              this.can_list_users = true;
            }
            if (
              this.users.users[i].permissions.indexOf('can_create_users') != -1
            ) {
              this.can_create_users = true;
            }
            if (
              this.users.users[i].permissions.indexOf('can_delete_users') != -1
            ) {
              this.can_delete_users = true;
            }
            if (
              this.users.users[i].permissions.indexOf('can_update_users') != -1
            ) {
              this.can_edit_users = true;
            }
          }
        }
      },
      (error: any) => {
        this.message = 'no access to user data';
      }
    );
  }

  addUser() {
    this.router.navigate(['/adduser']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  deleteUser(email: string) {
    this.service.deleteUser(email).subscribe((val) => {
      for (var i = 0; i < this.users.users.length; i++) {
        if (this.users.users[i].email === email) {
          this.users.users.splice(i, 1);
          break;
        }
      }
    });
  }

  updateUser(user: UserDto) {
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/updateuser']);
  }
}
