export type LoginPayload = {
  client_id: string;
  client_secret: string;
  scope: string;
  username: string;
  password: string;
};

export type ForgotPasswordPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  token: string;
  password: string;
};

export type SignUpPayload = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  alpha2Code: string;
  referrerCode: string | null;
};

export type VerifyPayload = {
  token: string;
};

export type AppleOauthPayload = {
  email: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
};
