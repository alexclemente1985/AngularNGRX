import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance/persistance.service';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from '../../actions/user.actions';



@Injectable()
export class GetCurrentUserEffects {



  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService
    ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken');
        console.log('eita kcta: ', token)
        if(!token){
          console.log('kcta')
          return of(getCurrentUserFailureAction());
        }
        return this.authService.getCurrentUser()
        .pipe(
          map((currentUser: ICurrentUser) => {
            return getCurrentUserSuccessAction({currentUser})
          })
        )
      }),
      catchError(()=> {
        return of(getCurrentUserFailureAction())
      })
    )
  );

}
