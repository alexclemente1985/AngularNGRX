import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  selectCurrentUser as registerUserSelector,
  selectIsAnonymous as registerAnonymousSelector,
  selectIsLoggedIn as registerIsLoggedInSelector
} from 'src/app/auth/store/selectors/auth-selectors';
import {
  selectCurrentUser as loginUserSelector,
  selectIsAnonymous as loginAnonymousSelector,
  selectIsLoggedIn as loginIsLoggedInSelector
} from 'src/app/auth/store/selectors/login-selectors';
import {
  selectCurrentUser as userSelector,
  selectIsAnonymous as userAnonymousSelector,
  selectIsLoggedIn as userIsLoggedInSelector
} from 'src/app/auth/store/selectors/user-selectors';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
//import { State as LoginState } from '../../../../../auth/store/reducers/login-reducer'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  registerIsLoggedIn$: Observable<boolean>;
  registerIsAnonymous$: Observable<boolean>;
  registerCurrentUser$: Observable<ICurrentUser | null>;

  loginIsLoggedIn$: Observable<boolean>;
  loginIsAnonymous$: Observable<boolean>;
  loginCurrentUser$: Observable<ICurrentUser | null>;

  currentUser$: Observable<ICurrentUser | null>;


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.registerIsLoggedIn$ = this.store.pipe(select(registerIsLoggedInSelector));
    this.registerIsAnonymous$ = this.store.pipe(select(registerAnonymousSelector));
    this.registerCurrentUser$ = this.store.pipe(select(registerUserSelector));

    this.loginIsLoggedIn$ = this.store.pipe(select(loginIsLoggedInSelector));
    this.loginIsAnonymous$ = this.store.pipe(select(loginAnonymousSelector));
    this.loginCurrentUser$ = this.store.pipe(select(loginUserSelector));

    this.currentUser$ = this.store.pipe(select(userSelector))
  }

}
