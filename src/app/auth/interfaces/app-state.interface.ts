import { IFeedState } from "src/app/shared/modules/feed/store/interfaces/feed-state";
import { IAuthState } from "./auth-state.interface";

export interface IAppState {
  auth: IAuthState,
  feed: IFeedState
}
