import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon} from '@ionic/angular/standalone';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-registroacta',
  templateUrl: './registroacta.page.html',
  styleUrls: ['./registroacta.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFab, IonFabButton, IonIcon]
})
export class RegistroactaPage implements OnInit {

  constructor(public photoService: PhotoService) {}

  ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
