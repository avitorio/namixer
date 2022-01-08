/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryAlert
// ====================================================

export interface QueryAlert_alerts_keywords {
  __typename: "AlertKeywords";
  id: string;
  keyword: string | null;
}

export interface QueryAlert_alerts {
  __typename: "Alert";
  id: string;
  keywords: QueryAlert_alerts_keywords[];
}

export interface QueryAlert {
  alerts: QueryAlert_alerts[];
}

export interface QueryAlertVariables {
  identifier: string;
}
