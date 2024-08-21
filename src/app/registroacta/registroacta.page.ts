import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonButton, IonLoading } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-registroacta',
  templateUrl: './registroacta.page.html',
  styleUrls: ['./registroacta.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, IonIcon, IonLoading]
})
export class RegistroactaPage implements OnInit {
  router = inject(Router)
  loading = false;

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
  }

  analizarQR() {
    this.loading = true;

    // Simular el análisis de QR
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/resultados']);
    }, 3000);
  }

  async addPhotoToGallery() {
    await this.photoService.addNewToGallery();
  }

}
