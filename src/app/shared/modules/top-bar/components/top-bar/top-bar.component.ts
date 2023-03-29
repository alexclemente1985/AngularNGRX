import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector
} from 'src/app/auth/store/selectors/auth-selectors';
import { IAuthState } from 'src/app/auth/interfaces/auth-state.interface';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<ICurrentUser | null>;

  constructor(
    private store: Store<IAuthState>
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
