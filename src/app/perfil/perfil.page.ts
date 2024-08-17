import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonNote, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonAvatar, IonGrid, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonNote, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonList, IonAvatar, IonGrid, IonButtons, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {
  private router = inject(Router)
  constructor() { }

  ngOnInit() {
  }

  editProfile() { }

  logout() {
    this.router.navigate(['/'])
  }

}
