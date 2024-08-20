import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { initializeApp } from 'firebase/app';
import { environment } from '../../../environments/environment';
import { getDatabase, ref, get, child } from 'firebase/database';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonItem, IonLabel, IonInput, CommonModule, FormsModule, ReactiveFormsModule]
})
export class IniciosesionPage implements OnInit {
  loginForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);

  constructor(private userService: UserService) {
    const app = initializeApp(environment.firebaseConfig);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      const db = getDatabase();
      const userRef = ref(db, `usuarios/${username}`);

      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();
          if (userData.cedula === password) {
            this.userService.setUserCedula(userData.cedula);
            this.router.navigate(['/tabs']);
          } else {
            alert('Contraseña incorrecta');
          }
        } else {
          alert('Usuario no encontrado');
        }
      }).catch((error) => {
        console.error('Error al autenticar:', error);
      });
    }
  }

  onForgotPassword() {
    
  }

  onRegister() {
    this.router.navigate(['/registro']);
  }
}
