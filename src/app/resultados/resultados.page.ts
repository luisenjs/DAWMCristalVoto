import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonItem, IonAvatar, IonButton, IonNote, IonFooter, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { arrowBack } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonFooter, IonNote, IonButton, IonAvatar, IonItem, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonHeader, IonLabel, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ResultadosPage implements OnInit {

  router = inject(Router)

  constructor() { 
    addIcons({arrowBack});
  }

  ngOnInit() {
  }

  regresar() {
    this.router.navigate(['/tabs/actas'])
  }

}
