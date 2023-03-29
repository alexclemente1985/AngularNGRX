import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IFeedState } from "../interfaces/feed-state";
import { featureKey } from "../reducers/feed-reducer";

export const feedFeatureSelector = createFeatureSelector<IFeedState>(featureKey);

const isLoadingSelectorFn = (state: IFeedState) => state.isLoading;

const errorSelectorFn = (state: IFeedState) => state.error;

const feedSelectorFn = (state: IFeedState) => state.data;

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  isLoadingSelectorFn
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  errorSelectorFn
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  feedSelectorFn
)
