import { OAuth2Provider } from '@salte-auth/salte-auth';

export class Cognito extends OAuth2Provider {
  public constructor(config: Cognito.Config) {
    super(config);
  }

  public get name() {
    return 'cognito';
  }

  public get login() {
    return this.url(`${this.config.url}/oauth2/authorize`);
  }

  public get logout() {
    return this.url(`${this.config.url}/logout`, {
      logout_uri: this.redirectUrl('logout'),
      client_id: this.config.clientID
    });
  }
}

export interface Cognito {
  config: Cognito.Config;
}

export declare namespace Cognito {
  export interface Config extends OAuth2Provider.Config {
    /**
     * The domain of your Cognito tenant.
     *
     * @example 'https://salte-os.auth.us-east-1.amazoncognito.com'
     */
    url: string;

    /**
     * The unique identifier of the target API you want to access.
     */
    audience?: string;
  }
}
