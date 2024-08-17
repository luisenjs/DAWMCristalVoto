import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class IniciosesionPage implements OnInit {
  loginForm: FormGroup;
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  constructor() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Aquí iría la lógica para autenticar al usuario
      console.log('Inicio de sesión con:', username, password);
      // Si la autenticación es exitosa, navega a otra página
      this.router.navigate(['/tabs']);
    } else {
      console.log('Formulario inválido');
    }
  }

  onForgotPassword() {
    // Lógica para manejar el olvido de contraseña
    console.log('Olvido de contraseña');
  }

  onRegister() {
    // Navega a la página de registro
    this.router.navigate(['/registro']);
  }
}
