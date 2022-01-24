## API Report File for "@azure/arm-machinelearningcompute"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export interface AcsClusterProperties {
    agentCount?: number;
    agentVmSize?: AgentVMSizeTypes;
    readonly clusterFqdn?: string;
    masterCount?: number;
    orchestratorProperties?: KubernetesClusterProperties;
    orchestratorType: OrchestratorType;
    systemServices?: SystemService[];
}

// @public
export type AgentVMSizeTypes = string;

// @public
export interface AppInsightsCredentials {
    appId?: string;
    instrumentationKey?: string;
}

// @public
export interface AppInsightsProperties {
    resourceId?: string;
}

// @public
export interface AutoScaleConfiguration {
    maxReplicas?: number;
    minReplicas?: number;
    refreshPeriodInSeconds?: number;
    status?: Status;
    targetUtilization?: number;
}

// @public
export interface AvailableOperations {
    value?: ResourceOperation[];
}

// @public
export interface CheckSystemServicesUpdatesAvailableResponse {
    readonly updatesAvailable?: UpdatesAvailable;
}

// @public
export type ClusterType = string;

// @public
export interface ContainerRegistryCredentials {
    readonly loginServer?: string;
    readonly password?: string;
    readonly password2?: string;
    readonly username?: string;
}

// @public
export interface ContainerRegistryProperties {
    resourceId?: string;
}

// @public
export interface ContainerServiceCredentials {
    readonly acsKubeConfig?: string;
    readonly imagePullSecretName?: string;
    readonly servicePrincipalConfiguration?: ServicePrincipalProperties;
}

// @public
export interface ErrorDetail {
    code: string;
    message: string;
}

// @public
export interface ErrorResponse {
    code: string;
    details?: ErrorDetail[];
    message: string;
}

// @public
export interface ErrorResponseWrapper {
    error?: ErrorResponse;
}

// @public
export interface GlobalServiceConfiguration {
    [property: string]: any;
    autoScale?: AutoScaleConfiguration;
    etag?: string;
    serviceAuth?: ServiceAuthConfiguration;
    ssl?: SslConfiguration;
}

// @public
export enum KnownAgentVMSizeTypes {
    // (undocumented)
    StandardA0 = "Standard_A0",
    // (undocumented)
    StandardA1 = "Standard_A1",
    // (undocumented)
    StandardA10 = "Standard_A10",
    // (undocumented)
    StandardA11 = "Standard_A11",
    // (undocumented)
    StandardA2 = "Standard_A2",
    // (undocumented)
    StandardA3 = "Standard_A3",
    // (undocumented)
    StandardA4 = "Standard_A4",
    // (undocumented)
    StandardA5 = "Standard_A5",
    // (undocumented)
    StandardA6 = "Standard_A6",
    // (undocumented)
    StandardA7 = "Standard_A7",
    // (undocumented)
    StandardA8 = "Standard_A8",
    // (undocumented)
    StandardA9 = "Standard_A9",
    // (undocumented)
    StandardD1 = "Standard_D1",
    // (undocumented)
    StandardD11 = "Standard_D11",
    // (undocumented)
    StandardD11V2 = "Standard_D11_v2",
    // (undocumented)
    StandardD12 = "Standard_D12",
    // (undocumented)
    StandardD12V2 = "Standard_D12_v2",
    // (undocumented)
    StandardD13 = "Standard_D13",
    // (undocumented)
    StandardD13V2 = "Standard_D13_v2",
    // (undocumented)
    StandardD14 = "Standard_D14",
    // (undocumented)
    StandardD14V2 = "Standard_D14_v2",
    // (undocumented)
    StandardD1V2 = "Standard_D1_v2",
    // (undocumented)
    StandardD2 = "Standard_D2",
    // (undocumented)
    StandardD2V2 = "Standard_D2_v2",
    // (undocumented)
    StandardD3 = "Standard_D3",
    // (undocumented)
    StandardD3V2 = "Standard_D3_v2",
    // (undocumented)
    StandardD4 = "Standard_D4",
    // (undocumented)
    StandardD4V2 = "Standard_D4_v2",
    // (undocumented)
    StandardD5V2 = "Standard_D5_v2",
    // (undocumented)
    StandardDS1 = "Standard_DS1",
    // (undocumented)
    StandardDS11 = "Standard_DS11",
    // (undocumented)
    StandardDS12 = "Standard_DS12",
    // (undocumented)
    StandardDS13 = "Standard_DS13",
    // (undocumented)
    StandardDS14 = "Standard_DS14",
    // (undocumented)
    StandardDS2 = "Standard_DS2",
    // (undocumented)
    StandardDS3 = "Standard_DS3",
    // (undocumented)
    StandardDS4 = "Standard_DS4",
    // (undocumented)
    StandardG1 = "Standard_G1",
    // (undocumented)
    StandardG2 = "Standard_G2",
    // (undocumented)
    StandardG3 = "Standard_G3",
    // (undocumented)
    StandardG4 = "Standard_G4",
    // (undocumented)
    StandardG5 = "Standard_G5",
    // (undocumented)
    StandardGS1 = "Standard_GS1",
    // (undocumented)
    StandardGS2 = "Standard_GS2",
    // (undocumented)
    StandardGS3 = "Standard_GS3",
    // (undocumented)
    StandardGS4 = "Standard_GS4",
    // (undocumented)
    StandardGS5 = "Standard_GS5"
}

// @public
export enum KnownClusterType {
    // (undocumented)
    ACS = "ACS",
    // (undocumented)
    Local = "Local"
}

// @public
export enum KnownOperationStatus {
    // (undocumented)
    Canceled = "Canceled",
    // (undocumented)
    Creating = "Creating",
    // (undocumented)
    Deleting = "Deleting",
    // (undocumented)
    Failed = "Failed",
    // (undocumented)
    Succeeded = "Succeeded",
    // (undocumented)
    Unknown = "Unknown",
    // (undocumented)
    Updating = "Updating"
}

// @public
export enum KnownOrchestratorType {
    // (undocumented)
    Kubernetes = "Kubernetes",
    // (undocumented)
    None = "None"
}

// @public
export enum KnownStatus {
    // (undocumented)
    Disabled = "Disabled",
    // (undocumented)
    Enabled = "Enabled"
}

// @public
export enum KnownSystemServiceType {
    // (undocumented)
    BatchFrontEnd = "BatchFrontEnd",
    // (undocumented)
    None = "None",
    // (undocumented)
    ScoringFrontEnd = "ScoringFrontEnd"
}

// @public
export enum KnownUpdatesAvailable {
    // (undocumented)
    No = "No",
    // (undocumented)
    Yes = "Yes"
}

// @public
export interface KubernetesClusterProperties {
    servicePrincipal?: ServicePrincipalProperties;
}

// @public
export interface MachineLearningCompute {
    listAvailableOperations(options?: MachineLearningComputeListAvailableOperationsOptionalParams): Promise<MachineLearningComputeListAvailableOperationsResponse>;
}

// @public
export interface MachineLearningComputeListAvailableOperationsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type MachineLearningComputeListAvailableOperationsResponse = AvailableOperations;

// @public (undocumented)
export class MachineLearningComputeManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: MachineLearningComputeManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    machineLearningCompute: MachineLearningCompute;
    // (undocumented)
    operationalizationClusters: OperationalizationClusters;
    // (undocumented)
    subscriptionId: string;
}

// @public
export interface MachineLearningComputeManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export type OperationalizationCluster = Resource & {
    description?: string;
    readonly createdOn?: Date;
    readonly modifiedOn?: Date;
    readonly provisioningState?: OperationStatus;
    readonly provisioningErrors?: ErrorResponseWrapper[];
    clusterType?: ClusterType;
    storageAccount?: StorageAccountProperties;
    containerRegistry?: ContainerRegistryProperties;
    containerService?: AcsClusterProperties;
    appInsights?: AppInsightsProperties;
    globalServiceConfiguration?: GlobalServiceConfiguration;
};

// @public
export interface OperationalizationClusterCredentials {
    appInsights?: AppInsightsCredentials;
    containerRegistry?: ContainerRegistryCredentials;
    containerService?: ContainerServiceCredentials;
    serviceAuthConfiguration?: ServiceAuthConfiguration;
    sslConfiguration?: SslConfiguration;
    storageAccount?: StorageAccountCredentials;
}

// @public
export interface OperationalizationClusters {
    beginCreateOrUpdate(resourceGroupName: string, clusterName: string, parameters: OperationalizationCluster, options?: OperationalizationClustersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<OperationalizationClustersCreateOrUpdateResponse>, OperationalizationClustersCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceGroupName: string, clusterName: string, parameters: OperationalizationCluster, options?: OperationalizationClustersCreateOrUpdateOptionalParams): Promise<OperationalizationClustersCreateOrUpdateResponse>;
    beginDelete(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersDeleteOptionalParams): Promise<PollerLike<PollOperationState<OperationalizationClustersDeleteResponse>, OperationalizationClustersDeleteResponse>>;
    beginDeleteAndWait(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersDeleteOptionalParams): Promise<OperationalizationClustersDeleteResponse>;
    beginUpdateSystemServices(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersUpdateSystemServicesOptionalParams): Promise<PollerLike<PollOperationState<OperationalizationClustersUpdateSystemServicesResponse>, OperationalizationClustersUpdateSystemServicesResponse>>;
    beginUpdateSystemServicesAndWait(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersUpdateSystemServicesOptionalParams): Promise<OperationalizationClustersUpdateSystemServicesResponse>;
    checkSystemServicesUpdatesAvailable(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersCheckSystemServicesUpdatesAvailableOptionalParams): Promise<OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse>;
    get(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersGetOptionalParams): Promise<OperationalizationClustersGetResponse>;
    listByResourceGroup(resourceGroupName: string, options?: OperationalizationClustersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<OperationalizationCluster>;
    listBySubscriptionId(options?: OperationalizationClustersListBySubscriptionIdOptionalParams): PagedAsyncIterableIterator<OperationalizationCluster>;
    listKeys(resourceGroupName: string, clusterName: string, options?: OperationalizationClustersListKeysOptionalParams): Promise<OperationalizationClustersListKeysResponse>;
    update(resourceGroupName: string, clusterName: string, parameters: OperationalizationClusterUpdateParameters, options?: OperationalizationClustersUpdateOptionalParams): Promise<OperationalizationClustersUpdateResponse>;
}

// @public
export interface OperationalizationClustersCheckSystemServicesUpdatesAvailableOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse = CheckSystemServicesUpdatesAvailableResponse;

// @public
export interface OperationalizationClustersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type OperationalizationClustersCreateOrUpdateResponse = OperationalizationCluster;

// @public
export interface OperationalizationClustersDeleteHeaders {
    location?: string;
}

// @public
export interface OperationalizationClustersDeleteOptionalParams extends coreClient.OperationOptions {
    deleteAll?: boolean;
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type OperationalizationClustersDeleteResponse = OperationalizationClustersDeleteHeaders;

// @public
export interface OperationalizationClustersGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationalizationClustersGetResponse = OperationalizationCluster;

// @public
export interface OperationalizationClustersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
    skiptoken?: string;
}

// @public
export type OperationalizationClustersListByResourceGroupNextResponse = PaginatedOperationalizationClustersList;

// @public
export interface OperationalizationClustersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
    skiptoken?: string;
}

// @public
export type OperationalizationClustersListByResourceGroupResponse = PaginatedOperationalizationClustersList;

// @public
export interface OperationalizationClustersListBySubscriptionIdNextOptionalParams extends coreClient.OperationOptions {
    skiptoken?: string;
}

// @public
export type OperationalizationClustersListBySubscriptionIdNextResponse = PaginatedOperationalizationClustersList;

// @public
export interface OperationalizationClustersListBySubscriptionIdOptionalParams extends coreClient.OperationOptions {
    skiptoken?: string;
}

// @public
export type OperationalizationClustersListBySubscriptionIdResponse = PaginatedOperationalizationClustersList;

// @public
export interface OperationalizationClustersListKeysOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationalizationClustersListKeysResponse = OperationalizationClusterCredentials;

// @public
export interface OperationalizationClustersUpdateOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationalizationClustersUpdateResponse = OperationalizationCluster;

// @public
export interface OperationalizationClustersUpdateSystemServicesHeaders {
    location?: string;
}

// @public
export interface OperationalizationClustersUpdateSystemServicesOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type OperationalizationClustersUpdateSystemServicesResponse = UpdateSystemServicesResponse;

// @public
export interface OperationalizationClusterUpdateParameters {
    tags?: {
        [propertyName: string]: string;
    };
}

// @public
export type OperationStatus = string;

// @public
export type OrchestratorType = string;

// @public
export interface PaginatedOperationalizationClustersList {
    nextLink?: string;
    value?: OperationalizationCluster[];
}

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
export interface ResourceOperation {
    display?: ResourceOperationDisplay;
    name?: string;
    origin?: string;
}

// @public
export interface ResourceOperationDisplay {
    description?: string;
    operation?: string;
    provider?: string;
    resource?: string;
}

// @public
export interface ServiceAuthConfiguration {
    primaryAuthKeyHash: string;
    secondaryAuthKeyHash: string;
}

// @public
export interface ServicePrincipalProperties {
    clientId: string;
    secret: string;
}

// @public
export interface SslConfiguration {
    cert?: string;
    cname?: string;
    key?: string;
    status?: Status;
}

// @public
export type Status = string;

// @public
export interface StorageAccountCredentials {
    readonly primaryKey?: string;
    readonly resourceId?: string;
    readonly secondaryKey?: string;
}

// @public
export interface StorageAccountProperties {
    resourceId?: string;
}

// @public
export interface SystemService {
    readonly publicIpAddress?: string;
    systemServiceType: SystemServiceType;
    readonly version?: string;
}

// @public
export type SystemServiceType = string;

// @public
export type UpdatesAvailable = string;

// @public
export interface UpdateSystemServicesResponse {
    readonly updateCompletedOn?: Date;
    readonly updateStartedOn?: Date;
    readonly updateStatus?: OperationStatus;
}

// (No @packageDocumentation comment for this package)

```