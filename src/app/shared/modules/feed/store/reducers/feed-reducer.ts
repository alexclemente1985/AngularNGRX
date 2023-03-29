import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";
import { getFeedAction, getFeedActionFailure, getFeedActionSuccess } from "../actions/feed-actions";
import { IFeedState } from "../interfaces/feed-state";

export const featureKey = 'feed';

const initialState: IFeedState = {
  data: null,
  isLoading: false,
  error: null
}

const reducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedActionSuccess,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedActionFailure,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction,
    (): IFeedState => initialState
  )
);

export function feedReducer(state: IFeedState, action: Action) {
  return reducer(state, action)
}


