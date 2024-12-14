import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PerrmissionService {
  permissions: string[] = [];

  constructor() {}

  getPermissions(): string[] {
    return this.permissions;
  }

  resetPermissions(): void {
    this.permissions = [];
  }

  addPermission(permissions: string[]): void {
    this.resetPermissions();
    this.permissions = permissions;
  }
}
