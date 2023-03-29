import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth-service/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance/persistance.service';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { FeedService } from '../../../services/feed.service';
import { IFeedResponse } from '../../../types/feed/feed-response.interface';
import { getFeedAction, getFeedActionFailure, getFeedActionSuccess } from '../../actions/feed-actions';



@Injectable()
export class GetFeedEffects {



  constructor(
    private actions$: Actions,
    private feedService: FeedService,
    private persistanceService: PersistanceService
  ) {}

    getFeed$ = createEffect(()=>
      this.actions$.pipe(
        ofType(getFeedAction),
        switchMap(({url})=> {
          const token = this.persistanceService.get('accessToken');

          if(!token){
            return of(getFeedActionFailure());
          }

          return this.feedService.getFeed(url).pipe(
            map((feed: IFeedResponse) => {
              return getFeedActionSuccess({feed})
            })
          )
        }),
        catchError(() => {
          return of(getFeedActionFailure());
        })
    )
  )
}
