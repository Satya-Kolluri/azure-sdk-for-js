/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Alerts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Alert,
  AlertsListNextOptionalParams,
  AlertsListOptionalParams,
  AlertsListByResourceGroupNextOptionalParams,
  AlertsListByResourceGroupOptionalParams,
  AlertsListSubscriptionLevelByRegionNextOptionalParams,
  AlertsListSubscriptionLevelByRegionOptionalParams,
  AlertsListResourceGroupLevelByRegionNextOptionalParams,
  AlertsListResourceGroupLevelByRegionOptionalParams,
  AlertsListResponse,
  AlertsListByResourceGroupResponse,
  AlertsListSubscriptionLevelByRegionResponse,
  AlertsListResourceGroupLevelByRegionResponse,
  AlertsGetSubscriptionLevelOptionalParams,
  AlertsGetSubscriptionLevelResponse,
  AlertsGetResourceGroupLevelOptionalParams,
  AlertsGetResourceGroupLevelResponse,
  AlertsUpdateSubscriptionLevelStateToDismissOptionalParams,
  AlertsUpdateSubscriptionLevelStateToResolveOptionalParams,
  AlertsUpdateSubscriptionLevelStateToActivateOptionalParams,
  AlertsUpdateResourceGroupLevelStateToResolveOptionalParams,
  AlertsUpdateResourceGroupLevelStateToDismissOptionalParams,
  AlertsUpdateResourceGroupLevelStateToActivateOptionalParams,
  AlertSimulatorRequestBody,
  AlertsSimulateOptionalParams,
  AlertsListNextResponse,
  AlertsListByResourceGroupNextResponse,
  AlertsListSubscriptionLevelByRegionNextResponse,
  AlertsListResourceGroupLevelByRegionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Alerts operations. */
export class AlertsImpl implements Alerts {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class Alerts class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * List all the alerts that are associated with the subscription
   * @param options The options parameters.
   */
  public list(
    options?: AlertsListOptionalParams
  ): PagedAsyncIterableIterator<Alert> {
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
    options?: AlertsListOptionalParams
  ): AsyncIterableIterator<Alert[]> {
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
    options?: AlertsListOptionalParams
  ): AsyncIterableIterator<Alert> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all the alerts that are associated with the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: AlertsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<Alert> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: AlertsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Alert[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: AlertsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<Alert> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the alerts that are associated with the subscription that are stored in a specific location
   * @param options The options parameters.
   */
  public listSubscriptionLevelByRegion(
    options?: AlertsListSubscriptionLevelByRegionOptionalParams
  ): PagedAsyncIterableIterator<Alert> {
    const iter = this.listSubscriptionLevelByRegionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSubscriptionLevelByRegionPagingPage(options);
      }
    };
  }

  private async *listSubscriptionLevelByRegionPagingPage(
    options?: AlertsListSubscriptionLevelByRegionOptionalParams
  ): AsyncIterableIterator<Alert[]> {
    let result = await this._listSubscriptionLevelByRegion(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listSubscriptionLevelByRegionNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listSubscriptionLevelByRegionPagingAll(
    options?: AlertsListSubscriptionLevelByRegionOptionalParams
  ): AsyncIterableIterator<Alert> {
    for await (const page of this.listSubscriptionLevelByRegionPagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listResourceGroupLevelByRegion(
    resourceGroupName: string,
    options?: AlertsListResourceGroupLevelByRegionOptionalParams
  ): PagedAsyncIterableIterator<Alert> {
    const iter = this.listResourceGroupLevelByRegionPagingAll(
      resourceGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listResourceGroupLevelByRegionPagingPage(
          resourceGroupName,
          options
        );
      }
    };
  }

  private async *listResourceGroupLevelByRegionPagingPage(
    resourceGroupName: string,
    options?: AlertsListResourceGroupLevelByRegionOptionalParams
  ): AsyncIterableIterator<Alert[]> {
    let result = await this._listResourceGroupLevelByRegion(
      resourceGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listResourceGroupLevelByRegionNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listResourceGroupLevelByRegionPagingAll(
    resourceGroupName: string,
    options?: AlertsListResourceGroupLevelByRegionOptionalParams
  ): AsyncIterableIterator<Alert> {
    for await (const page of this.listResourceGroupLevelByRegionPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List all the alerts that are associated with the subscription
   * @param options The options parameters.
   */
  private _list(
    options?: AlertsListOptionalParams
  ): Promise<AlertsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * List all the alerts that are associated with the resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: AlertsListByResourceGroupOptionalParams
  ): Promise<AlertsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * List all the alerts that are associated with the subscription that are stored in a specific location
   * @param options The options parameters.
   */
  private _listSubscriptionLevelByRegion(
    options?: AlertsListSubscriptionLevelByRegionOptionalParams
  ): Promise<AlertsListSubscriptionLevelByRegionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listSubscriptionLevelByRegionOperationSpec
    );
  }

  /**
   * List all the alerts that are associated with the resource group that are stored in a specific
   * location
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listResourceGroupLevelByRegion(
    resourceGroupName: string,
    options?: AlertsListResourceGroupLevelByRegionOptionalParams
  ): Promise<AlertsListResourceGroupLevelByRegionResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listResourceGroupLevelByRegionOperationSpec
    );
  }

  /**
   * Get an alert that is associated with a subscription
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  getSubscriptionLevel(
    alertName: string,
    options?: AlertsGetSubscriptionLevelOptionalParams
  ): Promise<AlertsGetSubscriptionLevelResponse> {
    return this.client.sendOperationRequest(
      { alertName, options },
      getSubscriptionLevelOperationSpec
    );
  }

  /**
   * Get an alert that is associated a resource group or a resource in a resource group
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  getResourceGroupLevel(
    alertName: string,
    resourceGroupName: string,
    options?: AlertsGetResourceGroupLevelOptionalParams
  ): Promise<AlertsGetResourceGroupLevelResponse> {
    return this.client.sendOperationRequest(
      { alertName, resourceGroupName, options },
      getResourceGroupLevelOperationSpec
    );
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToDismiss(
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToDismissOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertName, options },
      updateSubscriptionLevelStateToDismissOperationSpec
    );
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToResolve(
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToResolveOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertName, options },
      updateSubscriptionLevelStateToResolveOperationSpec
    );
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param options The options parameters.
   */
  updateSubscriptionLevelStateToActivate(
    alertName: string,
    options?: AlertsUpdateSubscriptionLevelStateToActivateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertName, options },
      updateSubscriptionLevelStateToActivateOperationSpec
    );
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToResolve(
    alertName: string,
    resourceGroupName: string,
    options?: AlertsUpdateResourceGroupLevelStateToResolveOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertName, resourceGroupName, options },
      updateResourceGroupLevelStateToResolveOperationSpec
    );
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToDismiss(
    alertName: string,
    resourceGroupName: string,
    options?: AlertsUpdateResourceGroupLevelStateToDismissOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertName, resourceGroupName, options },
      updateResourceGroupLevelStateToDismissOperationSpec
    );
  }

  /**
   * Update the alert's state
   * @param alertName Name of the alert object
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  updateResourceGroupLevelStateToActivate(
    alertName: string,
    resourceGroupName: string,
    options?: AlertsUpdateResourceGroupLevelStateToActivateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { alertName, resourceGroupName, options },
      updateResourceGroupLevelStateToActivateOperationSpec
    );
  }

  /**
   * Simulate security alerts
   * @param alertSimulatorRequestBody Alert Simulator Request Properties
   * @param options The options parameters.
   */
  async beginSimulate(
    alertSimulatorRequestBody: AlertSimulatorRequestBody,
    options?: AlertsSimulateOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { alertSimulatorRequestBody, options },
      simulateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "original-uri"
    });
  }

  /**
   * Simulate security alerts
   * @param alertSimulatorRequestBody Alert Simulator Request Properties
   * @param options The options parameters.
   */
  async beginSimulateAndWait(
    alertSimulatorRequestBody: AlertSimulatorRequestBody,
    options?: AlertsSimulateOptionalParams
  ): Promise<void> {
    const poller = await this.beginSimulate(alertSimulatorRequestBody, options);
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: AlertsListNextOptionalParams
  ): Promise<AlertsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AlertsListByResourceGroupNextOptionalParams
  ): Promise<AlertsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListSubscriptionLevelByRegionNext
   * @param nextLink The nextLink from the previous successful call to the ListSubscriptionLevelByRegion
   *                 method.
   * @param options The options parameters.
   */
  private _listSubscriptionLevelByRegionNext(
    nextLink: string,
    options?: AlertsListSubscriptionLevelByRegionNextOptionalParams
  ): Promise<AlertsListSubscriptionLevelByRegionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listSubscriptionLevelByRegionNextOperationSpec
    );
  }

  /**
   * ListResourceGroupLevelByRegionNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListResourceGroupLevelByRegion
   *                 method.
   * @param options The options parameters.
   */
  private _listResourceGroupLevelByRegionNext(
    resourceGroupName: string,
    nextLink: string,
    options?: AlertsListResourceGroupLevelByRegionNextOptionalParams
  ): Promise<AlertsListResourceGroupLevelByRegionNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listResourceGroupLevelByRegionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSubscriptionLevelByRegionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listResourceGroupLevelByRegionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSubscriptionLevelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getResourceGroupLevelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Alert
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSubscriptionLevelStateToDismissOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSubscriptionLevelStateToResolveOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/resolve",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSubscriptionLevelStateToActivateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/activate",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResourceGroupLevelStateToResolveOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/resolve",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResourceGroupLevelStateToDismissOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/dismiss",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResourceGroupLevelStateToActivateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/alerts/{alertName}/activate",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.alertName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const simulateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/alerts/default/simulate",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.alertSimulatorRequestBody,
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listSubscriptionLevelByRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listResourceGroupLevelByRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AlertList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion13],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
