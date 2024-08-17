import { Injectable } from '@angular/core';
/* 1. Importe los módulos con la funcionalidad nativa */
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';

/* 2. Importe la interfaz */
import { UserPhoto } from '../interfaces/user-photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  /* 3. Atributo para almacenar las fotos */
  public photos: UserPhoto[] = [];

  constructor() { }

  public async addNewToGallery() {

    /* 4. Tome una foto */
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    /* 5. Agregue el archivo al inicio del arreglo */
    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });
  }
}
