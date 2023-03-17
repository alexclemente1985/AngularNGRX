import { Action, createFeatureSelector, createReducer, on, State } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.interface";
import { registerAction } from "../actions/auth.actions";

export const featureKey = 'auth';

const initialState: IAuthState = {
  isSubmitting: false
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
    ...state,
    isSubmitting: true
    })
  )
);



export function reducers(state: IAuthState, action: Action) {
  return authReducer(state,action)
}

