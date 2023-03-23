import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from 'src/app/shared/types/current-user.interface';
import { IRegisterRequest } from '../../types/register-request.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IAuthResponse } from '../../types/auth-response.interface';
import { ILoginRequest } from '../../types/login-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }

  register(data: IRegisterRequest): Observable<ICurrentUser>{
    //const url = "https://conduit.productionready.io/api/users";
    const url = environment.apiUrl + '/users';

    return this.http.post<IAuthResponse>(url, data)
    .pipe(
      map(this.getUser)
    );
  }

  login(data: ILoginRequest): Observable<ICurrentUser>{
    const url = environment.apiUrl + '/users/login';

    return this.http.post<IAuthResponse>(url, data)
    .pipe(
      map(this.getUser)
    );
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';

    return this.http.get(url).pipe(map(this.getUser));
  }
}
