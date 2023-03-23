import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.interface";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.actions";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.actions";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/user.actions";

export const featureKey = "auth";

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: false
}

const authReducer = createReducer(
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
  ),
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
  ),
  on(
    getCurrentUserAction,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: initialState.isLoggedIn,
      currentUser: initialState.currentUser
    })
  ),
);



export function reducers(state: IAuthState, action: Action) {
  return authReducer(state,action)
}
