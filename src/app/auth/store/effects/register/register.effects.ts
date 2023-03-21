import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance/persistance.service';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { registerAction, registerFailureAction, registerSuccessAction } from '../../actions/register.actions';



@Injectable()
export class RegisterEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistanceService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request)
        .pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return registerSuccessAction({currentUser})
          })
        )
      }),
      catchError((errorResponse: HttpErrorResponse)=> {
        return of(registerFailureAction({errors: errorResponse.error.errors}))
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )
}
