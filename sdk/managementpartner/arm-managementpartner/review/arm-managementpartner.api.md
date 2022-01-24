## API Report File for "@azure/arm-managementpartner"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

// @public (undocumented)
export class ACEProvisioningManagementPartnerAPI extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, options?: ACEProvisioningManagementPartnerAPIOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    operation: Operation;
    // (undocumented)
    partner: Partner;
    // (undocumented)
    partners: Partners;
}

// @public
export interface ACEProvisioningManagementPartnerAPIOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface ErrorModel {
    code?: string;
    error?: ExtendedErrorInfo;
    message?: string;
}

// @public
export interface ExtendedErrorInfo {
    code?: string;
    message?: string;
}

// @public
export enum KnownManagementPartnerState {
    // (undocumented)
    Active = "Active",
    // (undocumented)
    Deleted = "Deleted"
}

// @public
export type ManagementPartnerState = string;

// @public
export interface Operation {
    list(options?: OperationListOptionalParams): PagedAsyncIterableIterator<OperationResponse>;
}

// @public
export interface OperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface OperationList {
    nextLink?: string;
    value?: OperationResponse[];
}

// @public
export interface OperationListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationListNextResponse = OperationList;

// @public
export interface OperationListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationListResponse = OperationList;

// @public
export interface OperationResponse {
    display?: OperationDisplay;
    name?: string;
    origin?: string;
}

// @public
export interface Partner {
    create(partnerId: string, options?: PartnerCreateOptionalParams): Promise<PartnerCreateResponse>;
    delete(partnerId: string, options?: PartnerDeleteOptionalParams): Promise<void>;
    get(partnerId: string, options?: PartnerGetOptionalParams): Promise<PartnerGetResponse>;
    update(partnerId: string, options?: PartnerUpdateOptionalParams): Promise<PartnerUpdateResponse>;
}

// @public
export interface PartnerCreateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PartnerCreateResponse = PartnerResponse;

// @public
export interface PartnerDeleteOptionalParams extends coreClient.OperationOptions {
}

// @public
export interface PartnerGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PartnerGetResponse = PartnerResponse;

// @public
export interface PartnerResponse {
    createdTime?: Date;
    etag?: number;
    readonly id?: string;
    readonly name?: string;
    objectId?: string;
    partnerId?: string;
    partnerName?: string;
    state?: ManagementPartnerState;
    tenantId?: string;
    readonly type?: string;
    updatedTime?: Date;
    version?: number;
}

// @public
export interface Partners {
    get(options?: PartnersGetOptionalParams): Promise<PartnersGetResponse>;
}

// @public
export interface PartnersGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PartnersGetResponse = PartnerResponse;

// @public
export interface PartnerUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type PartnerUpdateResponse = PartnerResponse;

// (No @packageDocumentation comment for this package)

```