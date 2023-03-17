import { createAction, props } from "@ngrx/store";
import { IRegisterRequest } from "../../types/register-request.interface";
import {AuthActionTypes} from '../types/auth.types';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{request: IRegisterRequest}>()
)
