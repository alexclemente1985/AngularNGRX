import { Action, createReducer, on } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/user.actions";

export const featureKey = "user";

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
  isLoading: false
}

const userReducer = createReducer(
  initialState,
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
    (state, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: initialState.isLoggedIn,
      currentUser: initialState.currentUser
    })
  ),

);

export function reducers(state: IAuthState, action: Action) {
  return userReducer(state,action)
}

