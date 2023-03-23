import { Action, createFeatureSelector, createReducer, on, State } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";

export const featureKey = 'auth';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: false
}

const registerReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
    ...state,
    isSubmitting: true,
    validationErrors: initialState.validationErrors
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: action.errors
    })
  )
);



export function reducers(state: IAuthState, action: Action) {
  return registerReducer(state,action)
}

