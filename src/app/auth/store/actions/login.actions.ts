import { createAction, props } from "@ngrx/store";
import { ICurrentUser } from "src/app/shared/types/current-user.interface";
import { IBackendErrors } from "../../types/backend-errors-interface";
import { ILoginRequest } from "../../types/login-request.interface";
import { LoginActionTypes } from "../types/login.types";

export const loginAction = createAction(
  LoginActionTypes.LOGIN,
  props<{request: ILoginRequest}>()
);

export const loginSuccessAction = createAction(
  LoginActionTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const loginFailureAction = createAction(
  LoginActionTypes.LOGIN_FAILURE,
  props<{errors: IBackendErrors}>()
)
