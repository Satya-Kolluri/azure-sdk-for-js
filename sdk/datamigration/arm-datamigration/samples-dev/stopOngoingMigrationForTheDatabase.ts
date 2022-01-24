/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Stop ongoing migration for the database.
 *
 * @summary Stop ongoing migration for the database.
 * x-ms-original-file: specification/datamigration/resource-manager/Microsoft.DataMigration/preview/2021-10-30-preview/examples/SqlVmCancelDatabaseMigration.json
 */
import {
  MigrationOperationInput,
  DataMigrationManagementClient
} from "@azure/arm-datamigration";
import { DefaultAzureCredential } from "@azure/identity";

async function stopOngoingMigrationForTheDatabase() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "testrg";
  const sqlVirtualMachineName = "testvm";
  const targetDbName = "db1";
  const parameters: MigrationOperationInput = {
    migrationOperationId: "4124fe90-d1b6-4b50-b4d9-46d02381f59a"
  };
  const credential = new DefaultAzureCredential();
  const client = new DataMigrationManagementClient(credential, subscriptionId);
  const result = await client.databaseMigrationsSqlVm.beginCancelAndWait(
    resourceGroupName,
    sqlVirtualMachineName,
    targetDbName,
    parameters
  );
  console.log(result);
}

stopOngoingMigrationForTheDatabase().catch(console.error);