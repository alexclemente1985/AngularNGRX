import { createAction, props } from "@ngrx/store";
import { ICurrentUser } from "src/app/shared/types/current-user.interface";
import { UserTypes } from "../types/user.types";

export const getCurrentUserAction = createAction(
  UserTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
  UserTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
);

export const getCurrentUserFailureAction = createAction(
  UserTypes.GET_CURRENT_USER_FAILURE
);


