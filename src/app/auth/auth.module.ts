import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { featureKey as authFeatureKey, reducers as authReducer } from './store/reducers/auth-reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register/register.effects';
import { BackendErrorMessagesModule } from '../shared/modules/backend-error-messages/backend-error-messages.module';
import { LoginEffects } from './store/effects/login/login.effects';
import { LoginComponent } from './components/login/login.component';
import { GetCurrentUserEffects } from './store/effects/get-current-user/get-current-user.effects';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BackendErrorMessagesModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature( authFeatureKey, authReducer ),
    EffectsModule.forFeature([
      RegisterEffects,
      LoginEffects,
      GetCurrentUserEffects
    ])
  ]
})
export class AuthModule { }
