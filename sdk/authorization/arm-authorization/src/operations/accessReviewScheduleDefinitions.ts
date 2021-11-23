/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { AccessReviewScheduleDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AuthorizationManagementClient } from "../authorizationManagementClient";
import {
  AccessReviewScheduleDefinition,
  AccessReviewScheduleDefinitionsListNextOptionalParams,
  AccessReviewScheduleDefinitionsListOptionalParams,
  AccessReviewScheduleDefinitionsListResponse,
  AccessReviewScheduleDefinitionsGetByIdOptionalParams,
  AccessReviewScheduleDefinitionsGetByIdResponse,
  AccessReviewScheduleDefinitionsDeleteByIdOptionalParams,
  AccessReviewScheduleDefinitionProperties,
  AccessReviewScheduleDefinitionsCreateOrUpdateByIdOptionalParams,
  AccessReviewScheduleDefinitionsCreateOrUpdateByIdResponse,
  AccessReviewScheduleDefinitionsStopOptionalParams,
  AccessReviewScheduleDefinitionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AccessReviewScheduleDefinitions operations. */
export class AccessReviewScheduleDefinitionsImpl
  implements AccessReviewScheduleDefinitions {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class AccessReviewScheduleDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review schedule definitions
   * @param options The options parameters.
   */
  public list(
    options?: AccessReviewScheduleDefinitionsListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewScheduleDefinition> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: AccessReviewScheduleDefinitionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewScheduleDefinition[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: AccessReviewScheduleDefinitionsListOptionalParams
  ): AsyncIterableIterator<AccessReviewScheduleDefinition> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get access review schedule definitions
   * @param options The options parameters.
   */
  private _list(
    options?: AccessReviewScheduleDefinitionsListOptionalParams
  ): Promise<AccessReviewScheduleDefinitionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get single access review definition
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  getById(
    scheduleDefinitionId: string,
    options?: AccessReviewScheduleDefinitionsGetByIdOptionalParams
  ): Promise<AccessReviewScheduleDefinitionsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, options },
      getByIdOperationSpec
    );
  }

  /**
   * Delete access review schedule definition
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  deleteById(
    scheduleDefinitionId: string,
    options?: AccessReviewScheduleDefinitionsDeleteByIdOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, options },
      deleteByIdOperationSpec
    );
  }

  /**
   * Create or Update access review schedule definition.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param properties Access review schedule definition properties.
   * @param options The options parameters.
   */
  createOrUpdateById(
    scheduleDefinitionId: string,
    properties: AccessReviewScheduleDefinitionProperties,
    options?: AccessReviewScheduleDefinitionsCreateOrUpdateByIdOptionalParams
  ): Promise<AccessReviewScheduleDefinitionsCreateOrUpdateByIdResponse> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, properties, options },
      createOrUpdateByIdOperationSpec
    );
  }

  /**
   * Stop access review definition
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param options The options parameters.
   */
  stop(
    scheduleDefinitionId: string,
    options?: AccessReviewScheduleDefinitionsStopOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scheduleDefinitionId, options },
      stopOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AccessReviewScheduleDefinitionsListNextOptionalParams
  ): Promise<AccessReviewScheduleDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewScheduleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewScheduleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateByIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewScheduleDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/stop",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.scheduleDefinitionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewScheduleDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};