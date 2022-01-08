/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AlertInput {
  user?: string | null;
  keywords?: (string | null)[] | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface InputID {
  id: string;
}

export interface UsersPermissionsRegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface createAlertInput {
  data?: AlertInput | null;
}

export interface editAlertInput {
  user?: string | null;
  keywords?: (string | null)[] | null;
  created_by?: string | null;
  updated_by?: string | null;
}

export interface updateAlertInput {
  where?: InputID | null;
  data?: editAlertInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
