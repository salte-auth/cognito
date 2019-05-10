import { SalteAuth } from '@salte-auth/salte-auth';
import { Redirect } from '@salte-auth/redirect';
import { Cognito } from '../src/cognito';

const auth = new SalteAuth({
  providers: [
    new Cognito({
      url: 'https://salte-os.auth.us-east-1.amazoncognito.com',

      clientID: '5v4dilrda9p8cfo74gfvrc9hd4',

      routes: true
    })
  ],

  handlers: [
    new Redirect({
      default: true
    })
  ]
});

const logoutButton = document.createElement('button');
logoutButton.innerHTML = `Logout`;
logoutButton.addEventListener('click', () => {
  auth.logout('cognito');
});
document.body.appendChild(logoutButton);
