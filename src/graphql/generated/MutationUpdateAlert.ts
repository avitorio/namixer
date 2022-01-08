/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateAlertInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateAlert
// ====================================================

export interface MutationUpdateAlert_updateAlert_alert_keywords {
  __typename: "AlertKeywords";
  id: string;
  keyword: string | null;
}

export interface MutationUpdateAlert_updateAlert_alert {
  __typename: "Alert";
  id: string;
  keywords: MutationUpdateAlert_updateAlert_alert_keywords[];
}

export interface MutationUpdateAlert_updateAlert {
  __typename: "updateAlertPayload";
  alert: MutationUpdateAlert_updateAlert_alert | null;
}

export interface MutationUpdateAlert {
  updateAlert: MutationUpdateAlert_updateAlert | null;
}

export interface MutationUpdateAlertVariables {
  input?: updateAlertInput | null;
}
