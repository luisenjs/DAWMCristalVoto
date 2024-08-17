import { Component, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, CommonModule, FormsModule, ReactiveFormsModule ]
})
export class RegistroPage implements OnInit {
  registerForm: FormGroup;
  private formBuilder = inject(FormBuilder);
  constructor() {
    this.registerForm = this.formBuilder.group({
      idCard: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zone: ['', Validators.required],
      precinct: ['', Validators.required],
      phone1: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      phone2: [''],
    });
  }

  ngOnInit() {
  }

  onRegister() {

  }

}
