import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IAppState } from "../../types/app-state.interface"
import { IAuthState } from "../../types/auth-state.interface"
import { featureKey } from "../reducers/auth-reducer";

//const authFeatureSelector = (state: IAppState): IAuthState => state.auth;

export const authFeatureSelector = createFeatureSelector<IAuthState>(featureKey);

//export const authFeatureSelector = createFeatureSelector<IAppState, IAuthState>('auth')

const isSubmittingSelector = (state: IAuthState) => state.isSubmitting;

const validationErrorsSelector = (state: IAuthState) => state.validationErrors;

export const selectIsSubmitting = createSelector(
  authFeatureSelector,
  isSubmittingSelector
)


export const selectValidationErrors = createSelector(
  authFeatureSelector,
  validationErrorsSelector
)
