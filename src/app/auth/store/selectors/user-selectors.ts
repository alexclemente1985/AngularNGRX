import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IAppState } from "../../interfaces/app-state.interface"
import { IAuthState } from "../../interfaces/auth-state.interface"
import { featureKey } from "../reducers/user-reducer";

//const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const authFeatureSelector = createFeatureSelector<IAuthState>(featureKey);

//export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>('auth')

const isSubmittingSelector = (state: IAuthState) => state.isSubmitting;

const validationErrorsSelector = (state: IAuthState) => state.validationErrors;

const isLoggedInSelector = (state: IAuthState) => state.isLoggedIn;

const isAnonymousSelector = (state: IAuthState) => state.isLoggedIn === false;

const currentUserSelector = (state: IAuthState) => state.currentUser;

export const selectIsSubmitting = createSelector(
  authFeatureSelector,
  isSubmittingSelector
)


export const selectValidationErrors = createSelector(
  authFeatureSelector,
  validationErrorsSelector
)

export const selectIsLoggedIn = createSelector(
  authFeatureSelector,
  isLoggedInSelector
)


export const selectIsAnonymous = createSelector(
  authFeatureSelector,
  isAnonymousSelector
)

export const selectCurrentUser = createSelector(
  authFeatureSelector,
  currentUserSelector
)
