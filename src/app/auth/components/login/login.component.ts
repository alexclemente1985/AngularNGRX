import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from '../../store/actions/register.actions';
import { selectIsSubmitting, selectValidationErrors } from '../../store/selectors/auth-selectors';
import { IBackendErrors } from '../../types/backend-errors-interface';
import { IRegisterRequest } from '../../types/register-request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private initializeValues(): void{
    this.isSubmitting$ = this.store.pipe(select(selectIsSubmitting));
    this.backendErrors$ = this.store.pipe(select(selectValidationErrors));
  }

  onSubmit(): void{
    console.log('submit ', this.form.value);
    const request: IRegisterRequest = {
      user: this.form.value
    }
    this.store.dispatch(registerAction({request}));
  }
}
