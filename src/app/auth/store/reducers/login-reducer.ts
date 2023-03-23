import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.interface";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.actions";

export const featureKey = 'login';

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: false
}

const loginReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): IAuthState => ({
    ...state,
    isSubmitting: true,
    validationErrors: initialState.validationErrors
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: action.errors
    })
  )
);



export function reducers(state: IAuthState, action: Action) {
  return loginReducer(state,action)
}
