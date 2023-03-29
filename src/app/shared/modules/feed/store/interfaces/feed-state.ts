import { IFeedResponse } from "../../types/feed/feed-response.interface";

export interface IFeedState {
  isLoading: boolean;
  error?: string;
  data?: IFeedResponse;
}
