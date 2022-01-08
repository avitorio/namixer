/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createAlertInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateAlert
// ====================================================

export interface MutationCreateAlert_createAlert_alert_keywords {
  __typename: "AlertKeywords";
  id: string;
  keyword: string | null;
}

export interface MutationCreateAlert_createAlert_alert {
  __typename: "Alert";
  id: string;
  keywords: MutationCreateAlert_createAlert_alert_keywords[];
}

export interface MutationCreateAlert_createAlert {
  __typename: "createAlertPayload";
  alert: MutationCreateAlert_createAlert_alert | null;
}

export interface MutationCreateAlert {
  createAlert: MutationCreateAlert_createAlert | null;
}

export interface MutationCreateAlertVariables {
  input: createAlertInput;
}
