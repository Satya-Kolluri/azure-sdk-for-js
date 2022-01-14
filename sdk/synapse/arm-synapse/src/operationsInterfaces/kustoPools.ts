/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  SkuDescription,
  KustoPoolsListSkusOptionalParams,
  AzureResourceSku,
  KustoPoolsListSkusByResourceOptionalParams,
  LanguageExtension,
  KustoPoolsListLanguageExtensionsOptionalParams,
  FollowerDatabaseDefinition,
  KustoPoolsListFollowerDatabasesOptionalParams,
  KustoPoolCheckNameRequest,
  KustoPoolsCheckNameAvailabilityOptionalParams,
  KustoPoolsCheckNameAvailabilityResponse,
  KustoPoolsListByWorkspaceOptionalParams,
  KustoPoolsListByWorkspaceResponse,
  KustoPoolsGetOptionalParams,
  KustoPoolsGetResponse,
  KustoPool,
  KustoPoolsCreateOrUpdateOptionalParams,
  KustoPoolsCreateOrUpdateResponse,
  KustoPoolUpdate,
  KustoPoolsUpdateOptionalParams,
  KustoPoolsUpdateResponse,
  KustoPoolsDeleteOptionalParams,
  KustoPoolsStopOptionalParams,
  KustoPoolsStartOptionalParams,
  LanguageExtensionsList,
  KustoPoolsAddLanguageExtensionsOptionalParams,
  KustoPoolsRemoveLanguageExtensionsOptionalParams,
  KustoPoolsDetachFollowerDatabasesOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KustoPools. */
export interface KustoPools {
  /**
   * Lists eligible SKUs for Kusto Pool resource.
   * @param options The options parameters.
   */
  listSkus(
    options?: KustoPoolsListSkusOptionalParams
  ): PagedAsyncIterableIterator<SkuDescription>;
  /**
   * Returns the SKUs available for the provided resource.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listSkusByResource(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsListSkusByResourceOptionalParams
  ): PagedAsyncIterableIterator<AzureResourceSku>;
  /**
   * Returns a list of language extensions that can run within KQL queries.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listLanguageExtensions(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsListLanguageExtensionsOptionalParams
  ): PagedAsyncIterableIterator<LanguageExtension>;
  /**
   * Returns a list of databases that are owned by this Kusto Pool and were followed by another Kusto
   * Pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listFollowerDatabases(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsListFollowerDatabasesOptionalParams
  ): PagedAsyncIterableIterator<FollowerDatabaseDefinition>;
  /**
   * Checks that the kusto pool name is valid and is not already in use.
   * @param location The name of Azure region.
   * @param kustoPoolName The name of the cluster.
   * @param options The options parameters.
   */
  checkNameAvailability(
    location: string,
    kustoPoolName: KustoPoolCheckNameRequest,
    options?: KustoPoolsCheckNameAvailabilityOptionalParams
  ): Promise<KustoPoolsCheckNameAvailabilityResponse>;
  /**
   * List all Kusto pools
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: KustoPoolsListByWorkspaceOptionalParams
  ): Promise<KustoPoolsListByWorkspaceResponse>;
  /**
   * Gets a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  get(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsGetOptionalParams
  ): Promise<KustoPoolsGetResponse>;
  /**
   * Create or update a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kustoPoolName The name of the Kusto pool.
   * @param parameters The Kusto pool parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    workspaceName: string,
    resourceGroupName: string,
    kustoPoolName: string,
    parameters: KustoPool,
    options?: KustoPoolsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<KustoPoolsCreateOrUpdateResponse>,
      KustoPoolsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kustoPoolName The name of the Kusto pool.
   * @param parameters The Kusto pool parameters supplied to the CreateOrUpdate operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    workspaceName: string,
    resourceGroupName: string,
    kustoPoolName: string,
    parameters: KustoPool,
    options?: KustoPoolsCreateOrUpdateOptionalParams
  ): Promise<KustoPoolsCreateOrUpdateResponse>;
  /**
   * Update a Kusto Kusto Pool.
   * @param workspaceName The name of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kustoPoolName The name of the Kusto pool.
   * @param parameters The Kusto pool parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdate(
    workspaceName: string,
    resourceGroupName: string,
    kustoPoolName: string,
    parameters: KustoPoolUpdate,
    options?: KustoPoolsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<KustoPoolsUpdateResponse>,
      KustoPoolsUpdateResponse
    >
  >;
  /**
   * Update a Kusto Kusto Pool.
   * @param workspaceName The name of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kustoPoolName The name of the Kusto pool.
   * @param parameters The Kusto pool parameters supplied to the Update operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    workspaceName: string,
    resourceGroupName: string,
    kustoPoolName: string,
    parameters: KustoPoolUpdate,
    options?: KustoPoolsUpdateOptionalParams
  ): Promise<KustoPoolsUpdateResponse>;
  /**
   * Deletes a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kustoPoolName The name of the Kusto pool.
   * @param options The options parameters.
   */
  beginDelete(
    workspaceName: string,
    resourceGroupName: string,
    kustoPoolName: string,
    options?: KustoPoolsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Deletes a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kustoPoolName The name of the Kusto pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    workspaceName: string,
    resourceGroupName: string,
    kustoPoolName: string,
    options?: KustoPoolsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Stops a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginStop(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsStopOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Stops a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginStopAndWait(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsStopOptionalParams
  ): Promise<void>;
  /**
   * Starts a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginStart(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsStartOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Starts a Kusto pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  beginStartAndWait(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    options?: KustoPoolsStartOptionalParams
  ): Promise<void>;
  /**
   * Add a list of language extensions that can run within KQL queries.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param languageExtensionsToAdd The language extensions to add.
   * @param options The options parameters.
   */
  beginAddLanguageExtensions(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    languageExtensionsToAdd: LanguageExtensionsList,
    options?: KustoPoolsAddLanguageExtensionsOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Add a list of language extensions that can run within KQL queries.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param languageExtensionsToAdd The language extensions to add.
   * @param options The options parameters.
   */
  beginAddLanguageExtensionsAndWait(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    languageExtensionsToAdd: LanguageExtensionsList,
    options?: KustoPoolsAddLanguageExtensionsOptionalParams
  ): Promise<void>;
  /**
   * Remove a list of language extensions that can run within KQL queries.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param languageExtensionsToRemove The language extensions to remove.
   * @param options The options parameters.
   */
  beginRemoveLanguageExtensions(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    languageExtensionsToRemove: LanguageExtensionsList,
    options?: KustoPoolsRemoveLanguageExtensionsOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Remove a list of language extensions that can run within KQL queries.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param languageExtensionsToRemove The language extensions to remove.
   * @param options The options parameters.
   */
  beginRemoveLanguageExtensionsAndWait(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    languageExtensionsToRemove: LanguageExtensionsList,
    options?: KustoPoolsRemoveLanguageExtensionsOptionalParams
  ): Promise<void>;
  /**
   * Detaches all followers of a database owned by this Kusto Pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param followerDatabaseToRemove The follower databases properties to remove.
   * @param options The options parameters.
   */
  beginDetachFollowerDatabases(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    followerDatabaseToRemove: FollowerDatabaseDefinition,
    options?: KustoPoolsDetachFollowerDatabasesOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Detaches all followers of a database owned by this Kusto Pool.
   * @param workspaceName The name of the workspace.
   * @param kustoPoolName The name of the Kusto pool.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param followerDatabaseToRemove The follower databases properties to remove.
   * @param options The options parameters.
   */
  beginDetachFollowerDatabasesAndWait(
    workspaceName: string,
    kustoPoolName: string,
    resourceGroupName: string,
    followerDatabaseToRemove: FollowerDatabaseDefinition,
    options?: KustoPoolsDetachFollowerDatabasesOptionalParams
  ): Promise<void>;
}