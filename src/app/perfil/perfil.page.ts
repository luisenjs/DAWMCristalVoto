import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonNote, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonAvatar, IonGrid, IonButtons } from '@ionic/angular/standalone';
import { UserService } from '../services/user.service';
import { getDatabase, ref, get } from 'firebase/database';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonText, IonNote, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonAvatar, IonGrid, IonButtons, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  userData: any = {};
  private router = inject(Router)
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userService)
    const cedula = this.userService.getUserCedula();

    if (cedula) {
      const db = getDatabase();
      const userRef = ref(db, `usuarios/${cedula}`);

      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          this.userData = snapshot.val();
        } else {
          console.error('Usuario no encontrado');
        }
      }).catch((error) => {
        console.error('Error al obtener los datos del usuario:', error);
      });
    } else {
      console.error('Cédula del usuario no encontrada');
    }
  }

  editProfile() { }

  logout() {
    this.userService.setUserCedula("");
    this.router.navigate(['/'])
  }

}
