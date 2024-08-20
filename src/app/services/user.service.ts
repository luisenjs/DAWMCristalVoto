import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userCedula: string | null = null;

  setUserCedula(cedula: string) {
    this.userCedula = cedula;
  }

  getUserCedula(): string | null {
    return this.userCedula;
  }
}
