import { createAction, props } from "@ngrx/store";
import { ICurrentUser } from "src/app/shared/types/current-user.interface";
import { IBackendErrors } from "../../types/backend-errors-interface";
import { IRegisterRequest } from "../../types/register-request.interface";
import {RegisterActionTypes} from '../types/register.types';

export const registerAction = createAction(
  RegisterActionTypes.REGISTER,
  props<{request: IRegisterRequest}>()
);

export const registerSuccessAction = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const registerFailureAction = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>()
)
