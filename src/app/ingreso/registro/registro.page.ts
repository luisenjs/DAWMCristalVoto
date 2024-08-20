import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegistroPage implements OnInit {

  router = inject(Router);

  registroForm: FormGroup;
  database: any;
  
  constructor(private formBuilder: FormBuilder) {
    this.registroForm = this.formBuilder.group({});
    const app = initializeApp(environment.firebaseConfig);
    this.database = getDatabase(app);
  }

  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      zona: ['', Validators.required],
      recinto: ['', Validators.required],
      telefono1: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      telefono2: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const formData = this.registroForm.value;
      const userRef = ref(this.database, "usuarios/" + formData.cedula);
      set(userRef, formData)
        .then(() => {
          console.log('Datos guardados con éxito');
          this.router.navigate(['/'])
        })
        .catch((error: any) => {
          console.error('Error al guardar datos: ', error);
        });
    }
  }

}
