import { Inject, Injectable } from '@angular/core';
import { TokenStuff } from '../models/auth';
import { environment } from '../../environments/environment.development';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountsService } from './accounts.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // httpClient = Inject(HttpClient);

  constructor(
    private httpClient: HttpClient,
    private accServ: AccountsService
  ) {}

  postAuth() {
    const body = new URLSearchParams();

    body.set('grant_type', 'client_credentials');

    const env = `${environment.CLIENT_ID}:${environment.CLIENT_SERCRET}`;

    let options = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('accept', 'application/json')
        .set(
          'x-api-key',
          'eUF4elFSRlg5N3ZPY3lRQXdsdUVVNkg2ZVB4TUE1ZVk6YVc1MlpYTjBaV010ZW1FdGNHSXRZV05qYjNWdWRITXRjMkZ1WkdKdmVBPT0='
        )
        .set('Authorization', `Basic ${btoa(env)}`),
    };

    this.httpClient
      .post(
        'https://coral-app-sat5a.ondigitalocean.app/identity/v2/oauth2/token',
        body.toString(),
        options
      )
      .pipe(takeUntilDestroyed())
      .subscribe((res: any) => {
        environment.BEARER_TOKEN = res.access_token;
        this.accServ.getTransactions('4675778129910189600000003');
      });
  }
}
