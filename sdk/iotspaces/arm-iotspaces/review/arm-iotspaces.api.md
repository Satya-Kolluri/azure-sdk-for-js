## API Report File for "@azure/arm-iotspaces"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface ErrorDetails {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface IoTSpaces {
    beginCreateOrUpdate(resourceGroupName: string, resourceName: string, iotSpaceDescription: IoTSpacesDescription, options?: IoTSpacesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<IoTSpacesCreateOrUpdateResponse>, IoTSpacesCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, resourceName: string, iotSpaceDescription: IoTSpacesDescription, options?: IoTSpacesCreateOrUpdateOptionalParams): Promise<IoTSpacesCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, resourceName: string, options?: IoTSpacesDeleteOptionalParams): Promise<PollerLike<PollOperationState<IoTSpacesDeleteResponse>, IoTSpacesDeleteResponse>>;
    beginDeleteAndWait(resourceGroupName: string, resourceName: string, options?: IoTSpacesDeleteOptionalParams): Promise<IoTSpacesDeleteResponse>;
    beginUpdate(resourceGroupName: string, resourceName: string, iotSpacePatchDescription: IoTSpacesPatchDescription, options?: IoTSpacesUpdateOptionalParams): Promise<PollerLike<PollOperationState<IoTSpacesUpdateResponse>, IoTSpacesUpdateResponse>>;
    beginUpdateAndWait(resourceGroupName: string, resourceName: string, iotSpacePatchDescription: IoTSpacesPatchDescription, options?: IoTSpacesUpdateOptionalParams): Promise<IoTSpacesUpdateResponse>;
    checkNameAvailability(operationInputs: OperationInputs, options?: IoTSpacesCheckNameAvailabilityOptionalParams): Promise<IoTSpacesCheckNameAvailabilityResponse>;
    get(resourceGroupName: string, resourceName: string, options?: IoTSpacesGetOptionalParams): Promise<IoTSpacesGetResponse>;
    list(options?: IoTSpacesListOptionalParams): PagedAsyncIterableIterator<IoTSpacesDescription>;
    listByResourceGroup(resourceGroupName: string, options?: IoTSpacesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<IoTSpacesDescription>;
}

// @public
export interface IoTSpacesCheckNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IoTSpacesCheckNameAvailabilityResponse = IoTSpacesNameAvailabilityInfo;

// @public (undocumented)
export class IoTSpacesClient extends IoTSpacesClientContext {
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: IoTSpacesClientOptionalParams);
    // (undocumented)
    ioTSpaces: IoTSpaces;
    // (undocumented)
    operations: Operations;
}

// @public (undocumented)
export class IoTSpacesClientContext extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: IoTSpacesClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface IoTSpacesClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface IoTSpacesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type IoTSpacesCreateOrUpdateResponse = IoTSpacesDescription;

// @public
export interface IoTSpacesDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type IoTSpacesDeleteResponse = IoTSpacesDescription;

// @public
export type IoTSpacesDescription = Resource & {
    properties?: IoTSpacesProperties;
    sku: IoTSpacesSkuInfo;
};

// @public
export interface IoTSpacesDescriptionListResult {
    nextLink?: string;
    value?: IoTSpacesDescription[];
}

// @public
export interface IoTSpacesGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IoTSpacesGetResponse = IoTSpacesDescription;

// @public
export interface IoTSpacesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IoTSpacesListByResourceGroupNextResponse = IoTSpacesDescriptionListResult;

// @public
export interface IoTSpacesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IoTSpacesListByResourceGroupResponse = IoTSpacesDescriptionListResult;

// @public
export interface IoTSpacesListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IoTSpacesListNextResponse = IoTSpacesDescriptionListResult;

// @public
export interface IoTSpacesListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type IoTSpacesListResponse = IoTSpacesDescriptionListResult;

// @public
export interface IoTSpacesNameAvailabilityInfo {
    message?: string;
    readonly nameAvailable?: boolean;
    readonly reason?: IoTSpacesNameUnavailabilityReason;
}

// @public
export type IoTSpacesNameUnavailabilityReason = "Invalid" | "AlreadyExists";

// @public
export interface IoTSpacesPatchDescription {
    properties?: IoTSpacesProperties;
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export interface IoTSpacesProperties {
    readonly managementApiUrl?: string;
    readonly provisioningState?: ProvisioningState;
    storageContainer?: StorageContainerProperties;
    readonly webPortalUrl?: string;
}

// @public
export type IoTSpacesSku = string;

// @public
export interface IoTSpacesSkuInfo {
    name: IoTSpacesSku;
}

// @public
export interface IoTSpacesUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type IoTSpacesUpdateResponse = IoTSpacesDescription;

// @public
export const enum KnownIoTSpacesSku {
    // (undocumented)
    F1 = "F1",
    // (undocumented)
    S1 = "S1",
    // (undocumented)
    S2 = "S2",
    // (undocumented)
    S3 = "S3"
}

// @public
export const enum KnownProvisioningState {
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Provisioning = "Provisioning",
    // (undocumented)
    Succeeded = "Succeeded"
}

// @public
export interface Operation {
    display?: OperationDisplay;
    readonly name?: string;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationInputs {
    name: string;
}

// @public
export interface OperationListResult {
    nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type ProvisioningState = string;

// @public
export interface Resource {
    readonly id?: string;
    location: string;
    readonly name?: string;
    tags?: {
        [propertyName: string]: string;
    };
    readonly type?: string;
}

// @public
export interface StorageContainerProperties {
    connectionString?: string;
    containerName?: string;
    resourceGroup?: string;
    subscriptionId?: string;
}


// (No @packageDocumentation comment for this package)

```