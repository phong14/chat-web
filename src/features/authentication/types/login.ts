export interface LoginFormField {
  email: string;
  password: string;
}

export interface IAuthenticate {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  scope: string;
}
