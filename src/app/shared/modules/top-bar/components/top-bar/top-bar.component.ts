import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isAnonymousIn$: Observable<boolean>;
  currentUser$: Observable<ICurrentUser | null>;


  constructor() { }

  ngOnInit(): void {
  }

}
