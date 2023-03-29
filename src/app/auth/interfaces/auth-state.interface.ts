import { ICurrentUser } from "src/app/shared/types/current-user.interface";

export interface IAuthState {
  isSubmitting: boolean;
  currentUser?: ICurrentUser;
  isLoggedIn?: boolean;
  validationErrors?: any;
  isLoading?: boolean;
}
