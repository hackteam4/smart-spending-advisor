import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStuff} from '../models/auth';
import {environment} from '../../environments/environment.development';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpClient = Inject(HttpClient);

  constructor() {

  }

  postAuth() {
    this.httpClient.post('https://coral-app-sat5a.ondigitalocean.app/identity/v2/oauth2/token', {
      'grant_type': 'client_credentials'
    }, {
      headers: {
        'x-api-key': 'eUF4elFSRlg5N3ZPY3lRQXdsdUVVNkg2ZVB4TUE1ZVk6YVc1MlpYTjBaV010ZW1FdGNHSXRZV05qYjNWdWRITXRjMkZ1WkdKdmVBPT0=',
        'accept': 'application/json'
      }
    }).pipe(takeUntilDestroyed()).subscribe((res: TokenStuff) => {
      environment.BEARER_TOKEN = res.access_token;
    })
  }
}
