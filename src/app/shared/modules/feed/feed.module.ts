import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffects } from './store/effects/get-feed/get-feed.effects';
import { StoreModule } from '@ngrx/store';
import { featureKey as feedFeatureKey, feedReducer } from './store/reducers/feed-reducer';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    EffectsModule.forFeature([
      GetFeedEffects
    ]),
    StoreModule.forFeature(feedFeatureKey, feedReducer)
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
