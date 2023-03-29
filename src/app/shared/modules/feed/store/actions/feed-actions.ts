import { createAction, props } from "@ngrx/store";
import { IFeedResponse } from "../../types/feed/feed-response.interface";
import { FeedTypes } from "../types/feed-types";

export const getFeedAction = createAction(
  FeedTypes.GET_FEED,
  props<{url: string}>()
);

export const getFeedActionSuccess = createAction(
  FeedTypes.GET_FEED_SUCCESS,
  props<{feed: IFeedResponse}>()
);

export const getFeedActionFailure= createAction(
  FeedTypes.GET_FEED_FAILURE
);
