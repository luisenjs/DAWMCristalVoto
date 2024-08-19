import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-registroacta',
  templateUrl: './registroacta.page.html',
  styleUrls: ['./registroacta.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, IonIcon]
})
export class RegistroactaPage implements OnInit {
  router = inject(Router)
  constructor(public photoService: PhotoService) {}

  ngOnInit() {
  }

  analizarQR() {
    this.router.navigate(['/resultados'])
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
