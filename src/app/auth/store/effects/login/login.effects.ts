import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance/persistance.service';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { loginAction, loginFailureAction, loginSuccessAction } from '../../actions/login.actions';



@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistanceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request)
        .pipe(
          map((currentUser: ICurrentUser) => {
            this.persistenceService.set('accessToken', currentUser.token);
            return loginSuccessAction({currentUser})
          })
        )
      }),
      catchError((errorResponse: HttpErrorResponse)=> {
        return of(loginFailureAction({errors: errorResponse.error.errors}))
      })
    )
  );

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/')
        })
      ),
    {dispatch: false}
  )

}
