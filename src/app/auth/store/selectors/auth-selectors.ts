import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthState } from "../../types/auth-state.interface";
import { featureKey } from "../reducers/auth-reducer";


export const authFeatureSelector = createFeatureSelector<IAuthState>(featureKey);

const isSubmittingSelectorFn = (state: IAuthState) => state.isSubmitting;

const validationErrorsSelectorFn = (state: IAuthState) => state.validationErrors;

const isLoggedInSelectorFn = (state: IAuthState) => state.isLoggedIn;

const isAnonymousSelectorFn = (state: IAuthState) => state.isLoggedIn === false;

const currentUserSelectorFn = (state: IAuthState) => state.currentUser;

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  isSubmittingSelectorFn
)


export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  validationErrorsSelectorFn
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  isLoggedInSelectorFn
)


export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  isAnonymousSelectorFn
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  currentUserSelectorFn
)
