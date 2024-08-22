import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonAvatar, IonButton, IonNote, IonFooter, IonButtons, IonIcon, IonCardSubtitle, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonGrid, IonCardSubtitle, IonIcon, IonButtons, IonFooter, IonNote, IonButton, IonAvatar, IonItem, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonLabel, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ResultadosPage implements OnInit {

  router = inject(Router)

  constructor(private alertController: AlertController) {
    addIcons({ arrowBack });
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registro Completo',
      message: '¿Está seguro de subir los datos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirmación cancelada');
          }
        },
        {
          text: 'Confirmar',
          role: 'confirm',
          handler: () => {
            console.log('Datos confirmados');
            this.router.navigate(['/tabs/actas']);
          }
        }
      ]
    });
    await alert.present();

  }

  onSubmit() {
    this.presentAlert();
    this.router.navigate(['/'])
  }

  regresar() {
    this.router.navigate(['/tabs/actas'])
  }

}
