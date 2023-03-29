import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { AuthService } from '../../services/auth-service/auth.service';
import { registerAction } from '../../store/actions/register.actions';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors/auth-selectors';
import { IBackendErrors } from '../../interfaces/backend-errors-interface';
import { IRegisterRequest } from '../../interfaces/register-request.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  private initializeForm(): void{
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private initializeValues(): void{
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void{
    console.log('submit ', this.form.value);
    const request: IRegisterRequest = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}));
  }

}
