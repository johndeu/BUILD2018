/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as moment from 'moment';
import * as models from '../models';


/**
 * @class
 * Operations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface Operations {


    /**
     * @summary List Operations
     *
     * Lists all the Media Services operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationCollection>>;

    /**
     * @summary List Operations
     *
     * Lists all the Media Services operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationCollection>;
    list(callback: ServiceCallback<models.OperationCollection>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationCollection>): void;


    /**
     * @summary List Operations
     *
     * Lists all the Media Services operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationCollection>>;

    /**
     * @summary List Operations
     *
     * Lists all the Media Services operations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.OperationCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationCollection>): void;
}

/**
 * @class
 * Mediaservices
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface Mediaservices {


    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the resource group
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<MediaServiceCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MediaServiceCollection>>;

    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the resource group
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {MediaServiceCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {MediaServiceCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link MediaServiceCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MediaServiceCollection>;
    list(resourceGroupName: string, callback: ServiceCallback<models.MediaServiceCollection>): void;
    list(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MediaServiceCollection>): void;


    /**
     * @summary Get a Media Services account
     *
     * Get the details of a Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<MediaService>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MediaService>>;

    /**
     * @summary Get a Media Services account
     *
     * Get the details of a Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {MediaService} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {MediaService} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link MediaService} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MediaService>;
    get(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.MediaService>): void;
    get(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MediaService>): void;


    /**
     * @summary Create or update a Media Services account
     *
     * Creates or updates a Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {array} [parameters.storageAccounts] The storage accounts for this
     * resource.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<MediaService>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: models.MediaService, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MediaService>>;

    /**
     * @summary Create or update a Media Services account
     *
     * Creates or updates a Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {array} [parameters.storageAccounts] The storage accounts for this
     * resource.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {MediaService} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {MediaService} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link MediaService} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, parameters: models.MediaService, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MediaService>;
    createOrUpdate(resourceGroupName: string, accountName: string, parameters: models.MediaService, callback: ServiceCallback<models.MediaService>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, parameters: models.MediaService, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MediaService>): void;


    /**
     * @summary Delete a Media Services account.
     *
     * Deletes a Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete a Media Services account.
     *
     * Deletes a Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary Update a Media Services account
     *
     * Updates an existing Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {array} [parameters.storageAccounts] The storage accounts for this
     * resource.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<MediaService>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: models.MediaService, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MediaService>>;

    /**
     * @summary Update a Media Services account
     *
     * Updates an existing Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {array} [parameters.storageAccounts] The storage accounts for this
     * resource.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {MediaService} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {MediaService} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link MediaService} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, parameters: models.MediaService, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MediaService>;
    update(resourceGroupName: string, accountName: string, parameters: models.MediaService, callback: ServiceCallback<models.MediaService>): void;
    update(resourceGroupName: string, accountName: string, parameters: models.MediaService, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MediaService>): void;


    /**
     * @summary Synchronizes Storage Account Keys
     *
     * Synchronizes storage account keys for a storage account associated with the
     * Media Service account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.id] The ID of the storage account resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    syncStorageKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, parameters: models.SyncStorageKeysInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Synchronizes Storage Account Keys
     *
     * Synchronizes storage account keys for a storage account associated with the
     * Media Service account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.id] The ID of the storage account resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    syncStorageKeys(resourceGroupName: string, accountName: string, parameters: models.SyncStorageKeysInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    syncStorageKeys(resourceGroupName: string, accountName: string, parameters: models.SyncStorageKeysInput, callback: ServiceCallback<void>): void;
    syncStorageKeys(resourceGroupName: string, accountName: string, parameters: models.SyncStorageKeysInput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<SubscriptionMediaServiceCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SubscriptionMediaServiceCollection>>;

    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {SubscriptionMediaServiceCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {SubscriptionMediaServiceCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link SubscriptionMediaServiceCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscription(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.SubscriptionMediaServiceCollection>;
    listBySubscription(callback: ServiceCallback<models.SubscriptionMediaServiceCollection>): void;
    listBySubscription(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SubscriptionMediaServiceCollection>): void;


    /**
     * @summary Get a Media Services account
     *
     * Get the details of a Media Services account
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<SubscriptionMediaService>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getBySubscriptionWithHttpOperationResponse(accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SubscriptionMediaService>>;

    /**
     * @summary Get a Media Services account
     *
     * Get the details of a Media Services account
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {SubscriptionMediaService} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {SubscriptionMediaService} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link SubscriptionMediaService} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getBySubscription(accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.SubscriptionMediaService>;
    getBySubscription(accountName: string, callback: ServiceCallback<models.SubscriptionMediaService>): void;
    getBySubscription(accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SubscriptionMediaService>): void;


    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the resource group
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<MediaServiceCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.MediaServiceCollection>>;

    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the resource group
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {MediaServiceCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {MediaServiceCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link MediaServiceCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.MediaServiceCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.MediaServiceCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.MediaServiceCollection>): void;


    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<SubscriptionMediaServiceCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.SubscriptionMediaServiceCollection>>;

    /**
     * @summary List Media Services accounts
     *
     * List Media Services accounts in the subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {SubscriptionMediaServiceCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {SubscriptionMediaServiceCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link SubscriptionMediaServiceCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscriptionNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.SubscriptionMediaServiceCollection>;
    listBySubscriptionNext(nextPageLink: string, callback: ServiceCallback<models.SubscriptionMediaServiceCollection>): void;
    listBySubscriptionNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SubscriptionMediaServiceCollection>): void;
}

/**
 * @class
 * Providers
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface Providers {


    /**
     * @summary Check Name Availability
     *
     * Checks whether the Media Service resource name is available.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.name] The account name.
     *
     * @param {string} [parameters.type] The account type. For a Media Services
     * account, this should be 'MediaServices'.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<EntityNameAvailabilityCheckOutput>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    checkNameAvailabilityWithHttpOperationResponse(parameters: models.CheckNameAvailabilityInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.EntityNameAvailabilityCheckOutput>>;

    /**
     * @summary Check Name Availability
     *
     * Checks whether the Media Service resource name is available.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.name] The account name.
     *
     * @param {string} [parameters.type] The account type. For a Media Services
     * account, this should be 'MediaServices'.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {EntityNameAvailabilityCheckOutput} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {EntityNameAvailabilityCheckOutput} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link EntityNameAvailabilityCheckOutput} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    checkNameAvailability(parameters: models.CheckNameAvailabilityInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.EntityNameAvailabilityCheckOutput>;
    checkNameAvailability(parameters: models.CheckNameAvailabilityInput, callback: ServiceCallback<models.EntityNameAvailabilityCheckOutput>): void;
    checkNameAvailability(parameters: models.CheckNameAvailabilityInput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EntityNameAvailabilityCheckOutput>): void;
}

/**
 * @class
 * Assets
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface Assets {


    /**
     * @summary List Assets
     *
     * List Assets in the Media Services account with optional filtering and
     * ordering
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AssetCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AssetCollection>>;

    /**
     * @summary List Assets
     *
     * List Assets in the Media Services account with optional filtering and
     * ordering
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AssetCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AssetCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AssetCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.AssetCollection>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.AssetCollection>): void;
    list(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AssetCollection>): void;


    /**
     * @summary Get an Asset
     *
     * Get the details of an Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Asset>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, assetName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Asset>>;

    /**
     * @summary Get an Asset
     *
     * Get the details of an Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Asset} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Asset} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Asset} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, assetName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Asset>;
    get(resourceGroupName: string, accountName: string, assetName: string, callback: ServiceCallback<models.Asset>): void;
    get(resourceGroupName: string, accountName: string, assetName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Asset>): void;


    /**
     * @summary Create or update an Asset
     *
     * Creates or updates an Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.alternateId] The alternate ID of the Asset.
     *
     * @param {string} [parameters.description] The Asset description.
     *
     * @param {string} [parameters.container] The name of the asset blob container.
     *
     * @param {string} [parameters.storageAccountId] The ARM resource ID of the
     * Azure Storage account containing the Asset.
     *
     * @param {string} [parameters.storageEncryptionFormat] The Asset encryption
     * format. One of None, MediaStorageEncryption, StaticCommonEncryption or
     * StaticEnvelopeEncryption. Possible values include: 'None',
     * 'MediaStorageClientEncryption', 'StaticCommonEncryption',
     * 'StaticEnvelopeEncryption'
     *
     * @param {string} [parameters.storageEncryptionKey] The Base64 encoded key for
     * the Asset storage encryption.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Asset>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Asset>>;

    /**
     * @summary Create or update an Asset
     *
     * Creates or updates an Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.alternateId] The alternate ID of the Asset.
     *
     * @param {string} [parameters.description] The Asset description.
     *
     * @param {string} [parameters.container] The name of the asset blob container.
     *
     * @param {string} [parameters.storageAccountId] The ARM resource ID of the
     * Azure Storage account containing the Asset.
     *
     * @param {string} [parameters.storageEncryptionFormat] The Asset encryption
     * format. One of None, MediaStorageEncryption, StaticCommonEncryption or
     * StaticEnvelopeEncryption. Possible values include: 'None',
     * 'MediaStorageClientEncryption', 'StaticCommonEncryption',
     * 'StaticEnvelopeEncryption'
     *
     * @param {string} [parameters.storageEncryptionKey] The Base64 encoded key for
     * the Asset storage encryption.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Asset} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Asset} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Asset} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Asset>;
    createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, callback: ServiceCallback<models.Asset>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Asset>): void;


    /**
     * @summary Delete an Asset.
     *
     * Deletes an Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, assetName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete an Asset.
     *
     * Deletes an Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, assetName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, assetName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, assetName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary Update an Asset
     *
     * Updates an existing Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.alternateId] The alternate ID of the Asset.
     *
     * @param {string} [parameters.description] The Asset description.
     *
     * @param {string} [parameters.container] The name of the asset blob container.
     *
     * @param {string} [parameters.storageAccountId] The ARM resource ID of the
     * Azure Storage account containing the Asset.
     *
     * @param {string} [parameters.storageEncryptionFormat] The Asset encryption
     * format. One of None, MediaStorageEncryption, StaticCommonEncryption or
     * StaticEnvelopeEncryption. Possible values include: 'None',
     * 'MediaStorageClientEncryption', 'StaticCommonEncryption',
     * 'StaticEnvelopeEncryption'
     *
     * @param {string} [parameters.storageEncryptionKey] The Base64 encoded key for
     * the Asset storage encryption.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Asset>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Asset>>;

    /**
     * @summary Update an Asset
     *
     * Updates an existing Asset in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.alternateId] The alternate ID of the Asset.
     *
     * @param {string} [parameters.description] The Asset description.
     *
     * @param {string} [parameters.container] The name of the asset blob container.
     *
     * @param {string} [parameters.storageAccountId] The ARM resource ID of the
     * Azure Storage account containing the Asset.
     *
     * @param {string} [parameters.storageEncryptionFormat] The Asset encryption
     * format. One of None, MediaStorageEncryption, StaticCommonEncryption or
     * StaticEnvelopeEncryption. Possible values include: 'None',
     * 'MediaStorageClientEncryption', 'StaticCommonEncryption',
     * 'StaticEnvelopeEncryption'
     *
     * @param {string} [parameters.storageEncryptionKey] The Base64 encoded key for
     * the Asset storage encryption.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Asset} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Asset} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Asset} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Asset>;
    update(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, callback: ServiceCallback<models.Asset>): void;
    update(resourceGroupName: string, accountName: string, assetName: string, parameters: models.Asset, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Asset>): void;


    /**
     * @summary List the Asset URLs
     *
     * Lists the Asset SAS URLs used for uploading and downloading Asset content
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.permissions] The permissions to set on the SAS
     * URL. Possible values include: 'Read', 'ReadWrite', 'ReadWriteDelete'
     *
     * @param {date} [parameters.expiryTime] The SAS URL expiry time.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AssetContainerSas>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listContainerSasWithHttpOperationResponse(resourceGroupName: string, accountName: string, assetName: string, parameters: models.ListContainerSasInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AssetContainerSas>>;

    /**
     * @summary List the Asset URLs
     *
     * Lists the Asset SAS URLs used for uploading and downloading Asset content
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.permissions] The permissions to set on the SAS
     * URL. Possible values include: 'Read', 'ReadWrite', 'ReadWriteDelete'
     *
     * @param {date} [parameters.expiryTime] The SAS URL expiry time.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AssetContainerSas} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AssetContainerSas} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AssetContainerSas} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listContainerSas(resourceGroupName: string, accountName: string, assetName: string, parameters: models.ListContainerSasInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AssetContainerSas>;
    listContainerSas(resourceGroupName: string, accountName: string, assetName: string, parameters: models.ListContainerSasInput, callback: ServiceCallback<models.AssetContainerSas>): void;
    listContainerSas(resourceGroupName: string, accountName: string, assetName: string, parameters: models.ListContainerSasInput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AssetContainerSas>): void;


    /**
     * @summary Gets the Asset storage key
     *
     * Gets the Asset storage encryption keys used to decrypt content created by
     * version 2 of the Media Services API
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AssetStorageEncryptionKey>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getEncryptionKeyWithHttpOperationResponse(resourceGroupName: string, accountName: string, assetName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AssetStorageEncryptionKey>>;

    /**
     * @summary Gets the Asset storage key
     *
     * Gets the Asset storage encryption keys used to decrypt content created by
     * version 2 of the Media Services API
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} assetName The Asset name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AssetStorageEncryptionKey} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AssetStorageEncryptionKey} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AssetStorageEncryptionKey} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getEncryptionKey(resourceGroupName: string, accountName: string, assetName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AssetStorageEncryptionKey>;
    getEncryptionKey(resourceGroupName: string, accountName: string, assetName: string, callback: ServiceCallback<models.AssetStorageEncryptionKey>): void;
    getEncryptionKey(resourceGroupName: string, accountName: string, assetName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AssetStorageEncryptionKey>): void;


    /**
     * @summary List Assets
     *
     * List Assets in the Media Services account with optional filtering and
     * ordering
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AssetCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AssetCollection>>;

    /**
     * @summary List Assets
     *
     * List Assets in the Media Services account with optional filtering and
     * ordering
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AssetCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AssetCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AssetCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AssetCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.AssetCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AssetCollection>): void;
}

/**
 * @class
 * ContentKeyPolicies
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface ContentKeyPolicies {


    /**
     * @summary List Content Key Policies
     *
     * Lists the Content Key Policies in the account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ContentKeyPolicyCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ContentKeyPolicyCollection>>;

    /**
     * @summary List Content Key Policies
     *
     * Lists the Content Key Policies in the account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ContentKeyPolicyCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ContentKeyPolicyCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ContentKeyPolicyCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.ContentKeyPolicyCollection>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.ContentKeyPolicyCollection>): void;
    list(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentKeyPolicyCollection>): void;


    /**
     * @summary Get a Content Key Policy
     *
     * Get the details of a Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ContentKeyPolicy>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ContentKeyPolicy>>;

    /**
     * @summary Get a Content Key Policy
     *
     * Get the details of a Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ContentKeyPolicy} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ContentKeyPolicy} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ContentKeyPolicy} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ContentKeyPolicy>;
    get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, callback: ServiceCallback<models.ContentKeyPolicy>): void;
    get(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentKeyPolicy>): void;


    /**
     * @summary Create or update an Content Key Policy
     *
     * Create or update a Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] A description for the Policy.
     *
     * @param {array} parameters.options The Key Policy options.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ContentKeyPolicy>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ContentKeyPolicy>>;

    /**
     * @summary Create or update an Content Key Policy
     *
     * Create or update a Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] A description for the Policy.
     *
     * @param {array} parameters.options The Key Policy options.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ContentKeyPolicy} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ContentKeyPolicy} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ContentKeyPolicy} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ContentKeyPolicy>;
    createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, callback: ServiceCallback<models.ContentKeyPolicy>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentKeyPolicy>): void;


    /**
     * @summary Delete a Content Key Policy
     *
     * Deletes a Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete a Content Key Policy
     *
     * Deletes a Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary Update a Content Key Policy
     *
     * Updates an existing Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] A description for the Policy.
     *
     * @param {array} parameters.options The Key Policy options.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ContentKeyPolicy>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ContentKeyPolicy>>;

    /**
     * @summary Update a Content Key Policy
     *
     * Updates an existing Content Key Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] A description for the Policy.
     *
     * @param {array} parameters.options The Key Policy options.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ContentKeyPolicy} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ContentKeyPolicy} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ContentKeyPolicy} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ContentKeyPolicy>;
    update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, callback: ServiceCallback<models.ContentKeyPolicy>): void;
    update(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, parameters: models.ContentKeyPolicy, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentKeyPolicy>): void;


    /**
     * @summary Get a Content Key Policy with secrets
     *
     * Get a Content Key Policy including secret values
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ContentKeyPolicyProperties>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getPolicyPropertiesWithSecretsWithHttpOperationResponse(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ContentKeyPolicyProperties>>;

    /**
     * @summary Get a Content Key Policy with secrets
     *
     * Get a Content Key Policy including secret values
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} contentKeyPolicyName The Content Key Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ContentKeyPolicyProperties} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ContentKeyPolicyProperties} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ContentKeyPolicyProperties} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ContentKeyPolicyProperties>;
    getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, callback: ServiceCallback<models.ContentKeyPolicyProperties>): void;
    getPolicyPropertiesWithSecrets(resourceGroupName: string, accountName: string, contentKeyPolicyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentKeyPolicyProperties>): void;


    /**
     * @summary List Content Key Policies
     *
     * Lists the Content Key Policies in the account
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ContentKeyPolicyCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ContentKeyPolicyCollection>>;

    /**
     * @summary List Content Key Policies
     *
     * Lists the Content Key Policies in the account
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ContentKeyPolicyCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ContentKeyPolicyCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ContentKeyPolicyCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ContentKeyPolicyCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.ContentKeyPolicyCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentKeyPolicyCollection>): void;
}

/**
 * @class
 * Transforms
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface Transforms {


    /**
     * @summary List Transforms
     *
     * Lists the Transforms in the account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {number} [options.skip] Specifies a non-negative integer n that
     * excludes the first n items of the queried collection from the result. The
     * service returns items starting at position n+1.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<TransformCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, skip? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TransformCollection>>;

    /**
     * @summary List Transforms
     *
     * Lists the Transforms in the account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {number} [options.skip] Specifies a non-negative integer n that
     * excludes the first n items of the queried collection from the result. The
     * service returns items starting at position n+1.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {TransformCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {TransformCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link TransformCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, skip? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.TransformCollection>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.TransformCollection>): void;
    list(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, skip? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TransformCollection>): void;


    /**
     * @summary Get Transform
     *
     * Gets a Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Transform>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Transform>>;

    /**
     * @summary Get Transform
     *
     * Gets a Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Transform} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Transform} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Transform} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, transformName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Transform>;
    get(resourceGroupName: string, accountName: string, transformName: string, callback: ServiceCallback<models.Transform>): void;
    get(resourceGroupName: string, accountName: string, transformName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Transform>): void;


    /**
     * @summary Create or Update Transform
     *
     * Creates or updates a new Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] Customer supplied description of
     * the transform.
     *
     * @param {array} parameters.outputs The outputs for the Transform.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Transform>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Transform>>;

    /**
     * @summary Create or Update Transform
     *
     * Creates or updates a new Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] Customer supplied description of
     * the transform.
     *
     * @param {array} parameters.outputs The outputs for the Transform.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Transform} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Transform} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Transform} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Transform>;
    createOrUpdate(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, callback: ServiceCallback<models.Transform>): void;
    createOrUpdate(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Transform>): void;


    /**
     * @summary Delete Transform
     *
     * Deletes a Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete Transform
     *
     * Deletes a Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, transformName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, transformName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, transformName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary Update Transform
     *
     * Updates a Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] Customer supplied description of
     * the transform.
     *
     * @param {array} parameters.outputs The outputs for the Transform.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Transform>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Transform>>;

    /**
     * @summary Update Transform
     *
     * Updates a Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] Customer supplied description of
     * the transform.
     *
     * @param {array} parameters.outputs The outputs for the Transform.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Transform} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Transform} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Transform} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Transform>;
    update(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, callback: ServiceCallback<models.Transform>): void;
    update(resourceGroupName: string, accountName: string, transformName: string, parameters: models.Transform, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Transform>): void;


    /**
     * @summary List Transforms
     *
     * Lists the Transforms in the account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<TransformCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TransformCollection>>;

    /**
     * @summary List Transforms
     *
     * Lists the Transforms in the account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {TransformCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {TransformCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link TransformCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.TransformCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.TransformCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TransformCollection>): void;
}

/**
 * @class
 * Jobs
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface Jobs {


    /**
     * @summary List Jobs
     *
     * Lists all of the Jobs for the Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {number} [options.skip] Specifies a non-negative integer n that
     * excludes the first n items of the queried collection from the result. The
     * service returns items starting at position n+1.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<JobCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, options?: { filter? : string, top? : number, skip? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.JobCollection>>;

    /**
     * @summary List Jobs
     *
     * Lists all of the Jobs for the Transform.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {number} [options.skip] Specifies a non-negative integer n that
     * excludes the first n items of the queried collection from the result. The
     * service returns items starting at position n+1.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {JobCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {JobCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link JobCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, transformName: string, options?: { filter? : string, top? : number, skip? : number, customHeaders? : { [headerName: string]: string; } }): Promise<models.JobCollection>;
    list(resourceGroupName: string, accountName: string, transformName: string, callback: ServiceCallback<models.JobCollection>): void;
    list(resourceGroupName: string, accountName: string, transformName: string, options: { filter? : string, top? : number, skip? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobCollection>): void;


    /**
     * @summary Get Job
     *
     * Gets a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Job>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Job>>;

    /**
     * @summary Get Job
     *
     * Gets a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Job} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Job} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Job} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Job>;
    get(resourceGroupName: string, accountName: string, transformName: string, jobName: string, callback: ServiceCallback<models.Job>): void;
    get(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Job>): void;


    /**
     * @summary Create Job
     *
     * Creates a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] The customer supplied description
     * of the Job.
     *
     * @param {object} parameters.input The inputs for the Job.
     *
     * @param {string} [parameters.input.label] Customer provided label of the
     * JobInput.
     *
     * @param {string} parameters.input.odatatype Polymorphic Discriminator
     *
     * @param {array} parameters.outputs The outputs for the Job.
     *
     * @param {string} [parameters.priority] Priority with which the job should be
     * processed.  Higher priority jobs are processed before lower priority jobs if
     * there is resource contention. If not set, the default is normal. Possible
     * values include: 'Low', 'Normal', 'High'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<Job>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, jobName: string, parameters: models.Job, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.Job>>;

    /**
     * @summary Create Job
     *
     * Creates a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.description] The customer supplied description
     * of the Job.
     *
     * @param {object} parameters.input The inputs for the Job.
     *
     * @param {string} [parameters.input.label] Customer provided label of the
     * JobInput.
     *
     * @param {string} parameters.input.odatatype Polymorphic Discriminator
     *
     * @param {array} parameters.outputs The outputs for the Job.
     *
     * @param {string} [parameters.priority] Priority with which the job should be
     * processed.  Higher priority jobs are processed before lower priority jobs if
     * there is resource contention. If not set, the default is normal. Possible
     * values include: 'Low', 'Normal', 'High'
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {Job} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {Job} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link Job} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, transformName: string, jobName: string, parameters: models.Job, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.Job>;
    create(resourceGroupName: string, accountName: string, transformName: string, jobName: string, parameters: models.Job, callback: ServiceCallback<models.Job>): void;
    create(resourceGroupName: string, accountName: string, transformName: string, jobName: string, parameters: models.Job, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Job>): void;


    /**
     * @summary Delete Job
     *
     * Deletes a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete Job
     *
     * Deletes a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, transformName: string, jobName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary Cancel Job
     *
     * Cancel a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    cancelJobWithHttpOperationResponse(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Cancel Job
     *
     * Cancel a Job.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} transformName The Transform name.
     *
     * @param {string} jobName The Job name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    cancelJob(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    cancelJob(resourceGroupName: string, accountName: string, transformName: string, jobName: string, callback: ServiceCallback<void>): void;
    cancelJob(resourceGroupName: string, accountName: string, transformName: string, jobName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary List Jobs
     *
     * Lists all of the Jobs for the Transform.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<JobCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.JobCollection>>;

    /**
     * @summary List Jobs
     *
     * Lists all of the Jobs for the Transform.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {JobCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {JobCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link JobCollection} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.JobCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.JobCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobCollection>): void;
}

/**
 * @class
 * StreamingPolicies
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface StreamingPolicies {


    /**
     * @summary List Streaming Policies
     *
     * Lists the Streaming Policies in the account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingPolicyCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingPolicyCollection>>;

    /**
     * @summary List Streaming Policies
     *
     * Lists the Streaming Policies in the account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingPolicyCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingPolicyCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingPolicyCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingPolicyCollection>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.StreamingPolicyCollection>): void;
    list(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingPolicyCollection>): void;


    /**
     * @summary Get a Streaming Policy
     *
     * Get the details of a Streaming Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingPolicyName The Streaming Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingPolicy>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingPolicy>>;

    /**
     * @summary Get a Streaming Policy
     *
     * Get the details of a Streaming Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingPolicyName The Streaming Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingPolicy} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingPolicy} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingPolicy} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingPolicy>;
    get(resourceGroupName: string, accountName: string, streamingPolicyName: string, callback: ServiceCallback<models.StreamingPolicy>): void;
    get(resourceGroupName: string, accountName: string, streamingPolicyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingPolicy>): void;


    /**
     * @summary Create a Streaming Policy
     *
     * Create a Streaming Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingPolicyName The Streaming Policy name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.defaultContentKeyPolicyName] Default ContentKey
     * used by current Streaming Policy
     *
     * @param {object} [parameters.envelopeEncryption] Configuration of
     * EnvelopeEncryption
     *
     * @param {object} [parameters.envelopeEncryption.enabledProtocols]
     * Representing supported protocols
     *
     * @param {array} [parameters.envelopeEncryption.clearTracks] Representing
     * which tracks should not be encrypted
     *
     * @param {object} [parameters.envelopeEncryption.contentKeys] Representing
     * default content key for each encryption scheme and separate content keys for
     * specific tracks
     *
     * @param {string}
     * [parameters.envelopeEncryption.customLicenseAcquisitionUrlTemplate] The
     * template for a customer service to deliver keys to end users.  Not needed if
     * using the built in Key Delivery service.
     *
     * @param {object} [parameters.commonEncryptionCenc] Configuration of
     * CommonEncryptionCenc
     *
     * @param {object} [parameters.commonEncryptionCenc.enabledProtocols]
     * Representing supported protocols
     *
     * @param {array} [parameters.commonEncryptionCenc.clearTracks] Representing
     * which tracks should not be encrypted
     *
     * @param {object} [parameters.commonEncryptionCenc.contentKeys] Representing
     * default content key for each encryption scheme and separate content keys for
     * specific tracks
     *
     * @param {object} [parameters.commonEncryptionCenc.drm] Represents
     * configuration specific to Dynamic Encryption using the scheme defined in
     * ISO/IEC 23001-7 (also known as MPEG Common Encryption) using the 'cbcs'
     * scheme.
     *
     * @param {object} [parameters.commonEncryptionCenc.drm.playReady] PlayReady
     * configurations
     *
     * @param {object} [parameters.commonEncryptionCenc.drm.widevine] Widevine
     * configurations
     *
     * @param {object} [parameters.commonEncryptionCbcs] Configuration of
     * CommonEncryptionCbcs
     *
     * @param {object} [parameters.commonEncryptionCbcs.enabledProtocols]
     * Representing supported protocols
     *
     * @param {array} [parameters.commonEncryptionCbcs.clearTracks] Representing
     * which tracks should not be encrypted
     *
     * @param {object} [parameters.commonEncryptionCbcs.contentKeys] Representing
     * default content key for each encryption scheme and separate content keys for
     * specific tracks
     *
     * @param {object} [parameters.commonEncryptionCbcs.contentKeys.defaultKey]
     * Default content key for an encryption scheme
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.contentKeys.defaultKey.label] Label can be
     * used to specify Content Key when creating Stremaing Locator
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.contentKeys.defaultKey.policyName] Policy
     * used by Default Key
     *
     * @param {array}
     * [parameters.commonEncryptionCbcs.contentKeys.keyToTrackMappings]
     * Representing tracks needs sepearete content key
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm] Configuration of DRMs
     * for current encryption scheme
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm.fairPlay] Fairplay
     * configurations
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.fairPlay.customLicenseAcquisitionUrlTemplate]
     * The template for a customer service to deliver keys to end users.  Not
     * needed if using the built in Key Delivery service.
     *
     * @param {boolean}
     * parameters.commonEncryptionCbcs.drm.fairPlay.allowPersistentLicense All
     * license to be persistent or not
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm.playReady] PlayReady
     * configurations
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.playReady.customLicenseAcquisitionUrlTemplate]
     * The template for a customer service to deliver keys to end users.  Not
     * needed if using the built in Key Delivery service.
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.playReady.playReadyCustomAttributes]
     * Custom attributes for PlayReady
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm.widevine] Widevine
     * configurations
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.widevine.customLicenseAcquisitionUrlTemplate]
     * The template for a customer service to deliver keys to end users.  Not
     * needed if using the built in Key Delivery service.
     *
     * @param {object} [parameters.noEncryption] Configuations of NoEncryption
     *
     * @param {object} [parameters.noEncryption.enabledProtocols] Representing
     * supported protocols
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.download Enable
     * Download protocol or not
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.dash Enable Dash
     * protocol or not
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.hls Enable Hls
     * protocol or not
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.smoothStreaming
     * Enable SmoothStreaming protocol or not
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingPolicy>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: models.StreamingPolicy, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingPolicy>>;

    /**
     * @summary Create a Streaming Policy
     *
     * Create a Streaming Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingPolicyName The Streaming Policy name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.defaultContentKeyPolicyName] Default ContentKey
     * used by current Streaming Policy
     *
     * @param {object} [parameters.envelopeEncryption] Configuration of
     * EnvelopeEncryption
     *
     * @param {object} [parameters.envelopeEncryption.enabledProtocols]
     * Representing supported protocols
     *
     * @param {array} [parameters.envelopeEncryption.clearTracks] Representing
     * which tracks should not be encrypted
     *
     * @param {object} [parameters.envelopeEncryption.contentKeys] Representing
     * default content key for each encryption scheme and separate content keys for
     * specific tracks
     *
     * @param {string}
     * [parameters.envelopeEncryption.customLicenseAcquisitionUrlTemplate] The
     * template for a customer service to deliver keys to end users.  Not needed if
     * using the built in Key Delivery service.
     *
     * @param {object} [parameters.commonEncryptionCenc] Configuration of
     * CommonEncryptionCenc
     *
     * @param {object} [parameters.commonEncryptionCenc.enabledProtocols]
     * Representing supported protocols
     *
     * @param {array} [parameters.commonEncryptionCenc.clearTracks] Representing
     * which tracks should not be encrypted
     *
     * @param {object} [parameters.commonEncryptionCenc.contentKeys] Representing
     * default content key for each encryption scheme and separate content keys for
     * specific tracks
     *
     * @param {object} [parameters.commonEncryptionCenc.drm] Represents
     * configuration specific to Dynamic Encryption using the scheme defined in
     * ISO/IEC 23001-7 (also known as MPEG Common Encryption) using the 'cbcs'
     * scheme.
     *
     * @param {object} [parameters.commonEncryptionCenc.drm.playReady] PlayReady
     * configurations
     *
     * @param {object} [parameters.commonEncryptionCenc.drm.widevine] Widevine
     * configurations
     *
     * @param {object} [parameters.commonEncryptionCbcs] Configuration of
     * CommonEncryptionCbcs
     *
     * @param {object} [parameters.commonEncryptionCbcs.enabledProtocols]
     * Representing supported protocols
     *
     * @param {array} [parameters.commonEncryptionCbcs.clearTracks] Representing
     * which tracks should not be encrypted
     *
     * @param {object} [parameters.commonEncryptionCbcs.contentKeys] Representing
     * default content key for each encryption scheme and separate content keys for
     * specific tracks
     *
     * @param {object} [parameters.commonEncryptionCbcs.contentKeys.defaultKey]
     * Default content key for an encryption scheme
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.contentKeys.defaultKey.label] Label can be
     * used to specify Content Key when creating Stremaing Locator
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.contentKeys.defaultKey.policyName] Policy
     * used by Default Key
     *
     * @param {array}
     * [parameters.commonEncryptionCbcs.contentKeys.keyToTrackMappings]
     * Representing tracks needs sepearete content key
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm] Configuration of DRMs
     * for current encryption scheme
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm.fairPlay] Fairplay
     * configurations
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.fairPlay.customLicenseAcquisitionUrlTemplate]
     * The template for a customer service to deliver keys to end users.  Not
     * needed if using the built in Key Delivery service.
     *
     * @param {boolean}
     * parameters.commonEncryptionCbcs.drm.fairPlay.allowPersistentLicense All
     * license to be persistent or not
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm.playReady] PlayReady
     * configurations
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.playReady.customLicenseAcquisitionUrlTemplate]
     * The template for a customer service to deliver keys to end users.  Not
     * needed if using the built in Key Delivery service.
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.playReady.playReadyCustomAttributes]
     * Custom attributes for PlayReady
     *
     * @param {object} [parameters.commonEncryptionCbcs.drm.widevine] Widevine
     * configurations
     *
     * @param {string}
     * [parameters.commonEncryptionCbcs.drm.widevine.customLicenseAcquisitionUrlTemplate]
     * The template for a customer service to deliver keys to end users.  Not
     * needed if using the built in Key Delivery service.
     *
     * @param {object} [parameters.noEncryption] Configuations of NoEncryption
     *
     * @param {object} [parameters.noEncryption.enabledProtocols] Representing
     * supported protocols
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.download Enable
     * Download protocol or not
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.dash Enable Dash
     * protocol or not
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.hls Enable Hls
     * protocol or not
     *
     * @param {boolean} parameters.noEncryption.enabledProtocols.smoothStreaming
     * Enable SmoothStreaming protocol or not
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingPolicy} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingPolicy} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingPolicy} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: models.StreamingPolicy, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingPolicy>;
    create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: models.StreamingPolicy, callback: ServiceCallback<models.StreamingPolicy>): void;
    create(resourceGroupName: string, accountName: string, streamingPolicyName: string, parameters: models.StreamingPolicy, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingPolicy>): void;


    /**
     * @summary Delete a Streaming Policy
     *
     * Deletes a Streaming Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingPolicyName The Streaming Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete a Streaming Policy
     *
     * Deletes a Streaming Policy in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingPolicyName The Streaming Policy name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, streamingPolicyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary List Streaming Policies
     *
     * Lists the Streaming Policies in the account
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingPolicyCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingPolicyCollection>>;

    /**
     * @summary List Streaming Policies
     *
     * Lists the Streaming Policies in the account
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingPolicyCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingPolicyCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingPolicyCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingPolicyCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.StreamingPolicyCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingPolicyCollection>): void;
}

/**
 * @class
 * StreamingLocators
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface StreamingLocators {


    /**
     * @summary List Streaming Locators
     *
     * Lists the Streaming Locators in the account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingLocatorCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingLocatorCollection>>;

    /**
     * @summary List Streaming Locators
     *
     * Lists the Streaming Locators in the account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {string} [options.filter] Restricts the set of items returned.
     *
     * @param {number} [options.top] Specifies a non-negative integer n that limits
     * the number of items returned from a collection. The service returns the
     * number of available items up to but not greater than the specified value n.
     *
     * @param {string} [options.orderby] Specifies the the key by which the result
     * collection should be ordered.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingLocatorCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingLocatorCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingLocatorCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingLocatorCollection>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.StreamingLocatorCollection>): void;
    list(resourceGroupName: string, accountName: string, options: { filter? : string, top? : number, orderby? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingLocatorCollection>): void;


    /**
     * @summary Get a Streaming Locator
     *
     * Get the details of a Streaming Locator in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingLocator>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingLocator>>;

    /**
     * @summary Get a Streaming Locator
     *
     * Get the details of a Streaming Locator in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingLocator} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingLocator} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingLocator} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingLocator>;
    get(resourceGroupName: string, accountName: string, streamingLocatorName: string, callback: ServiceCallback<models.StreamingLocator>): void;
    get(resourceGroupName: string, accountName: string, streamingLocatorName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingLocator>): void;


    /**
     * @summary Create a Streaming Locator
     *
     * Create a Streaming Locator in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.assetName] Asset Name
     *
     * @param {date} [parameters.startTime] StartTime of Streaming Locator
     *
     * @param {date} [parameters.endTime] EndTime of Streaming Locator
     *
     * @param {uuid} [parameters.streamingLocatorId] StreamingLocatorId of
     * Streaming Locator
     *
     * @param {string} [parameters.streamingPolicyName] Streaming Policy name used
     * by this Streaming Locator
     *
     * @param {string} [parameters.defaultContentKeyPolicyName] Default
     * ContentKeyPolicy used by this Streaming Locator
     *
     * @param {array} [parameters.contentKeys] ContentKeys used by this Streaming
     * Locator
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingLocator>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingLocatorName: string, parameters: models.StreamingLocator, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingLocator>>;

    /**
     * @summary Create a Streaming Locator
     *
     * Create a Streaming Locator in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} parameters The request parameters
     *
     * @param {string} [parameters.assetName] Asset Name
     *
     * @param {date} [parameters.startTime] StartTime of Streaming Locator
     *
     * @param {date} [parameters.endTime] EndTime of Streaming Locator
     *
     * @param {uuid} [parameters.streamingLocatorId] StreamingLocatorId of
     * Streaming Locator
     *
     * @param {string} [parameters.streamingPolicyName] Streaming Policy name used
     * by this Streaming Locator
     *
     * @param {string} [parameters.defaultContentKeyPolicyName] Default
     * ContentKeyPolicy used by this Streaming Locator
     *
     * @param {array} [parameters.contentKeys] ContentKeys used by this Streaming
     * Locator
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingLocator} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingLocator} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingLocator} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, streamingLocatorName: string, parameters: models.StreamingLocator, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingLocator>;
    create(resourceGroupName: string, accountName: string, streamingLocatorName: string, parameters: models.StreamingLocator, callback: ServiceCallback<models.StreamingLocator>): void;
    create(resourceGroupName: string, accountName: string, streamingLocatorName: string, parameters: models.StreamingLocator, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingLocator>): void;


    /**
     * @summary Delete a Streaming Locator
     *
     * Deletes a Streaming Locator in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * @summary Delete a Streaming Locator
     *
     * Deletes a Streaming Locator in the Media Services account
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, streamingLocatorName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, streamingLocatorName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * @summary List Content Keys
     *
     * List Content Keys used by this Streaming Locator
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ListContentKeysResponse>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listContentKeysWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListContentKeysResponse>>;

    /**
     * @summary List Content Keys
     *
     * List Content Keys used by this Streaming Locator
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ListContentKeysResponse} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ListContentKeysResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ListContentKeysResponse} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listContentKeys(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ListContentKeysResponse>;
    listContentKeys(resourceGroupName: string, accountName: string, streamingLocatorName: string, callback: ServiceCallback<models.ListContentKeysResponse>): void;
    listContentKeys(resourceGroupName: string, accountName: string, streamingLocatorName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListContentKeysResponse>): void;


    /**
     * @summary List Paths
     *
     * List Paths supported by this Streaming Locator
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<ListPathsResponse>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listPathsWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ListPathsResponse>>;

    /**
     * @summary List Paths
     *
     * List Paths supported by this Streaming Locator
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingLocatorName The Streaming Locator name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {ListPathsResponse} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {ListPathsResponse} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link ListPathsResponse} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listPaths(resourceGroupName: string, accountName: string, streamingLocatorName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ListPathsResponse>;
    listPaths(resourceGroupName: string, accountName: string, streamingLocatorName: string, callback: ServiceCallback<models.ListPathsResponse>): void;
    listPaths(resourceGroupName: string, accountName: string, streamingLocatorName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ListPathsResponse>): void;


    /**
     * @summary List Streaming Locators
     *
     * Lists the Streaming Locators in the account
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingLocatorCollection>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingLocatorCollection>>;

    /**
     * @summary List Streaming Locators
     *
     * Lists the Streaming Locators in the account
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingLocatorCollection} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingLocatorCollection} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingLocatorCollection} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingLocatorCollection>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.StreamingLocatorCollection>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingLocatorCollection>): void;
}

/**
 * @class
 * LiveEvents
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface LiveEvents {


    /**
     * Lists the Live Events in the account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEventListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEventListResult>>;

    /**
     * Lists the Live Events in the account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEventListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEventListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEventListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEventListResult>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.LiveEventListResult>): void;
    list(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEventListResult>): void;


    /**
     * Gets a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEvent>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEvent>>;

    /**
     * Gets a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEvent} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEvent} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEvent} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEvent>;
    get(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<models.LiveEvent>): void;
    get(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEvent>): void;


    /**
     * Creates a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEvent>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEvent>>;

    /**
     * Creates a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEvent} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEvent} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEvent} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEvent>;
    create(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, callback: ServiceCallback<models.LiveEvent>): void;
    create(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEvent>): void;


    /**
     * Updates a existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEvent>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEvent>>;

    /**
     * Updates a existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEvent} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEvent} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEvent} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEvent>;
    update(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, callback: ServiceCallback<models.LiveEvent>): void;
    update(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEvent>): void;


    /**
     * Deletes a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Starts an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Starts an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    start(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    start(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<void>): void;
    start(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Stops an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters LiveEvent stop parameters
     *
     * @param {boolean} [parameters.removeOutputsOnStop] The flag indicates if
     * remove LiveOutputs on Stop.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    stopWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Stops an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters LiveEvent stop parameters
     *
     * @param {boolean} [parameters.removeOutputsOnStop] The flag indicates if
     * remove LiveOutputs on Stop.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    stop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    stop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, callback: ServiceCallback<void>): void;
    stop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Resets an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    resetWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Resets an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    reset(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    reset(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<void>): void;
    reset(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Creates a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEvent>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEvent>>;

    /**
     * Creates a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEvent} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEvent} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEvent} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEvent>;
    beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, callback: ServiceCallback<models.LiveEvent>): void;
    beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEvent>): void;


    /**
     * Updates a existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEvent>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEvent>>;

    /**
     * Updates a existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters Live Event properties needed for creation.
     *
     * @param {string} [parameters.description] The Live Event description.
     *
     * @param {object} [parameters.input] The Live Event input.
     *
     * @param {string} [parameters.input.streamingProtocol] The streaming protocol
     * for the Live Event. Possible values include: 'FragmentedMP4', 'RTMP',
     * 'RTPMPEG2TS'
     *
     * @param {string} [parameters.input.keyFrameIntervalDuration] ISO 8601
     * timespan duration of the key frame interval duration.
     *
     * @param {string} [parameters.input.accessToken] The access token.
     *
     * @param {array} [parameters.input.endpoints] The input endpoints for the Live
     * Event.
     *
     * @param {object} [parameters.preview] The Live Event preview.
     *
     * @param {array} [parameters.preview.endpoints] The endpoints for preview.
     *
     * @param {object} [parameters.preview.accessControl] The access control for
     * LiveEvent preview.
     *
     * @param {object} [parameters.preview.accessControl.ip] The IP access control
     * properties.
     *
     * @param {array} [parameters.preview.accessControl.ip.allow] The IP allow
     * list.
     *
     * @param {string} [parameters.preview.previewLocator] The preview locator
     * Guid.
     *
     * @param {string} [parameters.preview.streamingPolicyName] The name of
     * streaming policy used for LiveEvent preview
     *
     * @param {object} [parameters.encoding] The Live Event encoding.
     *
     * @param {string} [parameters.encoding.encodingType] The encoding type for
     * Live Event. Possible values include: 'None', 'Basic'
     *
     * @param {string} [parameters.encoding.presetName] The encoding preset name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The Live Event access
     * policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {boolean} [parameters.vanityUrl] The Live Event vanity URL flag.
     *
     * @param {array} [parameters.streamOptions] The stream options.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEvent} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEvent} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEvent} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEvent>;
    beginUpdate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, callback: ServiceCallback<models.LiveEvent>): void;
    beginUpdate(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEvent, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEvent>): void;


    /**
     * Deletes a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes a Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Starts an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Starts an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginStart(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginStart(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<void>): void;
    beginStart(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Stops an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters LiveEvent stop parameters
     *
     * @param {boolean} [parameters.removeOutputsOnStop] The flag indicates if
     * remove LiveOutputs on Stop.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginStopWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Stops an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} parameters LiveEvent stop parameters
     *
     * @param {boolean} [parameters.removeOutputsOnStop] The flag indicates if
     * remove LiveOutputs on Stop.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginStop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginStop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, callback: ServiceCallback<void>): void;
    beginStop(resourceGroupName: string, accountName: string, liveEventName: string, parameters: models.LiveEventActionInput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Resets an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginResetWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Resets an existing Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginReset(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginReset(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<void>): void;
    beginReset(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Lists the Live Events in the account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveEventListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveEventListResult>>;

    /**
     * Lists the Live Events in the account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveEventListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveEventListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveEventListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveEventListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.LiveEventListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveEventListResult>): void;
}

/**
 * @class
 * LiveOutputs
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface LiveOutputs {


    /**
     * Lists the Live Outputs in the Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveOutputListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveOutputListResult>>;

    /**
     * Lists the Live Outputs in the Live Event.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveOutputListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveOutputListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveOutputListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, liveEventName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveOutputListResult>;
    list(resourceGroupName: string, accountName: string, liveEventName: string, callback: ServiceCallback<models.LiveOutputListResult>): void;
    list(resourceGroupName: string, accountName: string, liveEventName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveOutputListResult>): void;


    /**
     * Gets a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveOutput>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveOutput>>;

    /**
     * Gets a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveOutput} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveOutput} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveOutput} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveOutput>;
    get(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, callback: ServiceCallback<models.LiveOutput>): void;
    get(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveOutput>): void;


    /**
     * Creates a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} parameters Live Output properties needed for creation.
     *
     * @param {string} [parameters.description] The description of the Live Output.
     *
     * @param {string} [parameters.assetName] The asset name.
     *
     * @param {moment.duration} [parameters.archiveWindowLength] ISO 8601 timespan
     * duration of the archive window length. This is duration that customer want
     * to retain the recorded content.
     *
     * @param {string} [parameters.manifestName] The manifest file name.
     *
     * @param {object} [parameters.hls] The HLS configuration.
     *
     * @param {number} [parameters.hls.fragmentsPerTsSegment] The amount of
     * fragments per HTTP Live Streaming (HLS) segment.
     *
     * @param {number} [parameters.outputSnapTime] The output snapshot time.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveOutput>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveOutput>>;

    /**
     * Creates a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} parameters Live Output properties needed for creation.
     *
     * @param {string} [parameters.description] The description of the Live Output.
     *
     * @param {string} [parameters.assetName] The asset name.
     *
     * @param {moment.duration} [parameters.archiveWindowLength] ISO 8601 timespan
     * duration of the archive window length. This is duration that customer want
     * to retain the recorded content.
     *
     * @param {string} [parameters.manifestName] The manifest file name.
     *
     * @param {object} [parameters.hls] The HLS configuration.
     *
     * @param {number} [parameters.hls.fragmentsPerTsSegment] The amount of
     * fragments per HTTP Live Streaming (HLS) segment.
     *
     * @param {number} [parameters.outputSnapTime] The output snapshot time.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveOutput} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveOutput} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveOutput} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveOutput>;
    create(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, callback: ServiceCallback<models.LiveOutput>): void;
    create(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveOutput>): void;


    /**
     * Deletes a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Creates a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} parameters Live Output properties needed for creation.
     *
     * @param {string} [parameters.description] The description of the Live Output.
     *
     * @param {string} [parameters.assetName] The asset name.
     *
     * @param {moment.duration} [parameters.archiveWindowLength] ISO 8601 timespan
     * duration of the archive window length. This is duration that customer want
     * to retain the recorded content.
     *
     * @param {string} [parameters.manifestName] The manifest file name.
     *
     * @param {object} [parameters.hls] The HLS configuration.
     *
     * @param {number} [parameters.hls.fragmentsPerTsSegment] The amount of
     * fragments per HTTP Live Streaming (HLS) segment.
     *
     * @param {number} [parameters.outputSnapTime] The output snapshot time.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveOutput>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveOutput>>;

    /**
     * Creates a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} parameters Live Output properties needed for creation.
     *
     * @param {string} [parameters.description] The description of the Live Output.
     *
     * @param {string} [parameters.assetName] The asset name.
     *
     * @param {moment.duration} [parameters.archiveWindowLength] ISO 8601 timespan
     * duration of the archive window length. This is duration that customer want
     * to retain the recorded content.
     *
     * @param {string} [parameters.manifestName] The manifest file name.
     *
     * @param {object} [parameters.hls] The HLS configuration.
     *
     * @param {number} [parameters.hls.fragmentsPerTsSegment] The amount of
     * fragments per HTTP Live Streaming (HLS) segment.
     *
     * @param {number} [parameters.outputSnapTime] The output snapshot time.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveOutput} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveOutput} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveOutput} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveOutput>;
    beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, callback: ServiceCallback<models.LiveOutput>): void;
    beginCreate(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, parameters: models.LiveOutput, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveOutput>): void;


    /**
     * Deletes a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes a Live Output.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} liveEventName The name of the Live Event.
     *
     * @param {string} liveOutputName The name of the Live Output.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, liveEventName: string, liveOutputName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Lists the Live Outputs in the Live Event.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<LiveOutputListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.LiveOutputListResult>>;

    /**
     * Lists the Live Outputs in the Live Event.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {LiveOutputListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {LiveOutputListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link LiveOutputListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.LiveOutputListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.LiveOutputListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LiveOutputListResult>): void;
}

/**
 * @class
 * StreamingEndpoints
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AzureMediaServices.
 */
export interface StreamingEndpoints {


    /**
     * Lists the StreamingEndpoints in the account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpointListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpointListResult>>;

    /**
     * Lists the StreamingEndpoints in the account.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpointListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpointListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpointListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(resourceGroupName: string, accountName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpointListResult>;
    list(resourceGroupName: string, accountName: string, callback: ServiceCallback<models.StreamingEndpointListResult>): void;
    list(resourceGroupName: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpointListResult>): void;


    /**
     * Gets a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpoint>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpoint>>;

    /**
     * Gets a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpoint} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpoint} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpoint} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpoint>;
    get(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<models.StreamingEndpoint>): void;
    get(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpoint>): void;


    /**
     * Creates a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpoint>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpoint>>;

    /**
     * Creates a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpoint} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpoint} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpoint} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    create(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpoint>;
    create(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, callback: ServiceCallback<models.StreamingEndpoint>): void;
    create(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpoint>): void;


    /**
     * Updates a existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpoint>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpoint>>;

    /**
     * Updates a existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpoint} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpoint} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpoint} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpoint>;
    update(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, callback: ServiceCallback<models.StreamingEndpoint>): void;
    update(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpoint>): void;


    /**
     * Deletes a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<void>): void;
    deleteMethod(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Starts an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    startWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Starts an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    start(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    start(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<void>): void;
    start(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Stops an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    stopWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Stops an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    stop(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    stop(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<void>): void;
    stop(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Scales an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint scale parameters
     *
     * @param {number} [parameters.scaleUnit] ScaleUnit The scale unit number of
     * the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    scaleWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Scales an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint scale parameters
     *
     * @param {number} [parameters.scaleUnit] ScaleUnit The scale unit number of
     * the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    scale(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    scale(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, callback: ServiceCallback<void>): void;
    scale(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Creates a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpoint>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginCreateWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpoint>>;

    /**
     * Creates a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {boolean} [options.autoStart] The flag indicates if auto start the
     * Live Event.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpoint} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpoint} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpoint} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginCreate(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpoint>;
    beginCreate(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, callback: ServiceCallback<models.StreamingEndpoint>): void;
    beginCreate(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options: { autoStart? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpoint>): void;


    /**
     * Updates a existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpoint>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginUpdateWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpoint>>;

    /**
     * Updates a existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint properties needed for creation.
     *
     * @param {string} [parameters.description] The StreamingEndpoint description.
     *
     * @param {number} [parameters.scaleUnits] The number of scale units.
     *
     * @param {string} [parameters.availabilitySetName] AvailabilitySet name
     *
     * @param {object} [parameters.accessControl] The access control definition of
     * the StreamingEndpoint.
     *
     * @param {object} [parameters.accessControl.akamai] The access control of
     * Akamai
     *
     * @param {array}
     * [parameters.accessControl.akamai.akamaiSignatureHeaderAuthenticationKeyList]
     * authentication key list
     *
     * @param {object} [parameters.accessControl.ip] The IP access control of the
     * StreamingEndpoint.
     *
     * @param {array} [parameters.accessControl.ip.allow] The IP allow list.
     *
     * @param {number} [parameters.maxCacheAge] Max cache age
     *
     * @param {array} [parameters.customHostNames] The custom host names of the
     * StreamingEndpoint
     *
     * @param {boolean} [parameters.cdnEnabled] The CDN enabled flag.
     *
     * @param {string} [parameters.cdnProvider] The CDN provider name.
     *
     * @param {string} [parameters.cdnProfile] The CDN profile name.
     *
     * @param {object} [parameters.crossSiteAccessPolicies] The StreamingEndpoint
     * access policies.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.clientAccessPolicy] The
     * content of clientaccesspolicy.xml used by Silverlight.
     *
     * @param {string} [parameters.crossSiteAccessPolicies.crossDomainPolicy] The
     * content of crossdomain.xml used by Silverlight.
     *
     * @param {object} [parameters.tags] Resource tags.
     *
     * @param {string} [parameters.location] The Azure Region of the resource.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpoint} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpoint} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpoint} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginUpdate(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpoint>;
    beginUpdate(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, callback: ServiceCallback<models.StreamingEndpoint>): void;
    beginUpdate(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEndpoint, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpoint>): void;


    /**
     * Deletes a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginDeleteMethodWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Deletes a StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginDeleteMethod(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginDeleteMethod(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<void>): void;
    beginDeleteMethod(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Starts an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginStartWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Starts an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginStart(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginStart(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<void>): void;
    beginStart(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Stops an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginStopWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Stops an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginStop(resourceGroupName: string, accountName: string, streamingEndpointName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginStop(resourceGroupName: string, accountName: string, streamingEndpointName: string, callback: ServiceCallback<void>): void;
    beginStop(resourceGroupName: string, accountName: string, streamingEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Scales an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint scale parameters
     *
     * @param {number} [parameters.scaleUnit] ScaleUnit The scale unit number of
     * the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    beginScaleWithHttpOperationResponse(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Scales an existing StreamingEndpoint.
     *
     * @param {string} resourceGroupName The name of the resource group within the
     * Azure subscription.
     *
     * @param {string} accountName The Media Services account name.
     *
     * @param {string} streamingEndpointName The name of the StreamingEndpoint.
     *
     * @param {object} parameters StreamingEndpoint scale parameters
     *
     * @param {number} [parameters.scaleUnit] ScaleUnit The scale unit number of
     * the StreamingEndpoint.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    beginScale(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    beginScale(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, callback: ServiceCallback<void>): void;
    beginScale(resourceGroupName: string, accountName: string, streamingEndpointName: string, parameters: models.StreamingEntityScaleUnit, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Lists the StreamingEndpoints in the account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<StreamingEndpointListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.StreamingEndpointListResult>>;

    /**
     * Lists the StreamingEndpoints in the account.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {StreamingEndpointListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {StreamingEndpointListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link StreamingEndpointListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.StreamingEndpointListResult>;
    listNext(nextPageLink: string, callback: ServiceCallback<models.StreamingEndpointListResult>): void;
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.StreamingEndpointListResult>): void;
}
