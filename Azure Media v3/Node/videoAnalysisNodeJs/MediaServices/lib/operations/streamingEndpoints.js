/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpointListResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _list(resourceGroupName, accountName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpointListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpoint} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 404) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}


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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpoint} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _create(resourceGroupName, accountName, streamingEndpointName, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Send request
  this.beginCreate(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, parsedResult, httpRequest, response) => {
    if (err) return callback(err);

    let initialResult = new msRest.HttpOperationResponse();
    initialResult.request = httpRequest;
    initialResult.response = response;
    initialResult.body = response.body;
    client.getLongRunningOperationResult(initialResult, options, (err, pollingResult) => {
      if (err) return callback(err);

      // Create Result
      let result = null;

      httpRequest = pollingResult.request;
      response = pollingResult.response;
      let responseBody = pollingResult.body;
      if (responseBody === '') responseBody = null;

      // Deserialize Response
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }

      return callback(null, result, httpRequest, response);
    });
  });
}


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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpoint} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _update(resourceGroupName, accountName, streamingEndpointName, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Send request
  this.beginUpdate(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, parsedResult, httpRequest, response) => {
    if (err) return callback(err);

    let initialResult = new msRest.HttpOperationResponse();
    initialResult.request = httpRequest;
    initialResult.response = response;
    initialResult.body = response.body;
    client.getLongRunningOperationResult(initialResult, options, (err, pollingResult) => {
      if (err) return callback(err);

      // Create Result
      let result = null;

      httpRequest = pollingResult.request;
      response = pollingResult.response;
      let responseBody = pollingResult.body;
      if (responseBody === '') responseBody = null;

      // Deserialize Response
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }

      return callback(null, result, httpRequest, response);
    });
  });
}


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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _deleteMethod(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Send request
  this.beginDeleteMethod(resourceGroupName, accountName, streamingEndpointName, options, (err, parsedResult, httpRequest, response) => {
    if (err) return callback(err);

    let initialResult = new msRest.HttpOperationResponse();
    initialResult.request = httpRequest;
    initialResult.response = response;
    initialResult.body = response.body;
    client.getLongRunningOperationResult(initialResult, options, (err, pollingResult) => {
      if (err) return callback(err);

      // Create Result
      let result = null;

      httpRequest = pollingResult.request;
      response = pollingResult.response;
      let responseBody = pollingResult.body;
      if (responseBody === '') responseBody = null;

      // Deserialize Response

      return callback(null, result, httpRequest, response);
    });
  });
}


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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _start(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Send request
  this.beginStart(resourceGroupName, accountName, streamingEndpointName, options, (err, parsedResult, httpRequest, response) => {
    if (err) return callback(err);

    let initialResult = new msRest.HttpOperationResponse();
    initialResult.request = httpRequest;
    initialResult.response = response;
    initialResult.body = response.body;
    client.getLongRunningOperationResult(initialResult, options, (err, pollingResult) => {
      if (err) return callback(err);

      // Create Result
      let result = null;

      httpRequest = pollingResult.request;
      response = pollingResult.response;
      let responseBody = pollingResult.body;
      if (responseBody === '') responseBody = null;

      // Deserialize Response

      return callback(null, result, httpRequest, response);
    });
  });
}


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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _stop(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Send request
  this.beginStop(resourceGroupName, accountName, streamingEndpointName, options, (err, parsedResult, httpRequest, response) => {
    if (err) return callback(err);

    let initialResult = new msRest.HttpOperationResponse();
    initialResult.request = httpRequest;
    initialResult.response = response;
    initialResult.body = response.body;
    client.getLongRunningOperationResult(initialResult, options, (err, pollingResult) => {
      if (err) return callback(err);

      // Create Result
      let result = null;

      httpRequest = pollingResult.request;
      response = pollingResult.response;
      let responseBody = pollingResult.body;
      if (responseBody === '') responseBody = null;

      // Deserialize Response

      return callback(null, result, httpRequest, response);
    });
  });
}


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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _scale(resourceGroupName, accountName, streamingEndpointName, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }

  if (!callback) {
    throw new Error('callback cannot be null.');
  }

  // Send request
  this.beginScale(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, parsedResult, httpRequest, response) => {
    if (err) return callback(err);

    let initialResult = new msRest.HttpOperationResponse();
    initialResult.request = httpRequest;
    initialResult.response = response;
    initialResult.body = response.body;
    client.getLongRunningOperationResult(initialResult, options, (err, pollingResult) => {
      if (err) return callback(err);

      // Create Result
      let result = null;

      httpRequest = pollingResult.request;
      response = pollingResult.response;
      let responseBody = pollingResult.body;
      if (responseBody === '') responseBody = null;

      // Deserialize Response

      return callback(null, result, httpRequest, response);
    });
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpoint} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _beginCreate(resourceGroupName, accountName, streamingEndpointName, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let autoStart = (options && options.autoStart !== undefined) ? options.autoStart : undefined;
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (autoStart !== null && autoStart !== undefined && typeof autoStart !== 'boolean') {
      throw new Error('autoStart must be of type boolean.');
    }
    if (parameters === null || parameters === undefined) {
      throw new Error('parameters cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (autoStart !== null && autoStart !== undefined) {
    queryParameters.push('autoStart=' + encodeURIComponent(autoStart.toString()));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PUT';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (parameters !== null && parameters !== undefined) {
      let requestModelMapper = new client.models['StreamingEndpoint']().mapper();
      requestModel = client.serialize(requestModelMapper, parameters, 'parameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(parameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 202) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError1 = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpoint} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _beginUpdate(resourceGroupName, accountName, streamingEndpointName, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (parameters === null || parameters === undefined) {
      throw new Error('parameters cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'PATCH';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (parameters !== null && parameters !== undefined) {
      let requestModelMapper = new client.models['StreamingEndpoint']().mapper();
      requestModel = client.serialize(requestModelMapper, parameters, 'parameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(parameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }
    // Deserialize Response
    if (statusCode === 202) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpoint']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError1 = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError1.request = msRest.stripRequest(httpRequest);
        deserializationError1.response = msRest.stripResponse(response);
        return callback(deserializationError1);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _beginDeleteMethod(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'DELETE';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 202 && statusCode !== 204) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _beginStart(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}/start';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _beginStop(resourceGroupName, accountName, streamingEndpointName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}/stop';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _beginScale(resourceGroupName, accountName, streamingEndpointName, parameters, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
      throw new Error('accountName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName === null || streamingEndpointName === undefined || typeof streamingEndpointName.valueOf() !== 'string') {
      throw new Error('streamingEndpointName cannot be null or undefined and it must be of type string.');
    }
    if (streamingEndpointName !== null && streamingEndpointName !== undefined) {
      if (streamingEndpointName.length > 24)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MaxLength": 24');
      }
      if (streamingEndpointName.length < 1)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "MinLength": 1');
      }
      if (streamingEndpointName.match(/^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/) === null)
      {
        throw new Error('"streamingEndpointName" should satisfy the constraint - "Pattern": /^[a-zA-Z0-9]+(-*[a-zA-Z0-9])*$/');
      }
    }
    if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
      throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
    }
    if (parameters === null || parameters === undefined) {
      throw new Error('parameters cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaservices/{accountName}/streamingEndpoints/{streamingEndpointName}/scale';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{accountName}', encodeURIComponent(accountName));
  requestUrl = requestUrl.replace('{streamingEndpointName}', encodeURIComponent(streamingEndpointName));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(this.client.apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (parameters !== null && parameters !== undefined) {
      let requestModelMapper = new client.models['StreamingEntityScaleUnit']().mapper();
      requestModel = client.serialize(requestModelMapper, parameters, 'parameters');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(parameters, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

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
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link StreamingEndpointListResult} for more
 *                      information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listNext(nextPageLink, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (nextPageLink === null || nextPageLink === undefined || typeof nextPageLink.valueOf() !== 'string') {
      throw new Error('nextPageLink cannot be null or undefined and it must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let requestUrl = '{nextLink}';
  requestUrl = requestUrl.replace('{nextLink}', nextPageLink);

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ApiError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['StreamingEndpointListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a StreamingEndpoints. */
class StreamingEndpoints {
  /**
   * Create a StreamingEndpoints.
   * @param {AzureMediaServices} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._list = _list;
    this._get = _get;
    this._create = _create;
    this._update = _update;
    this._deleteMethod = _deleteMethod;
    this._start = _start;
    this._stop = _stop;
    this._scale = _scale;
    this._beginCreate = _beginCreate;
    this._beginUpdate = _beginUpdate;
    this._beginDeleteMethod = _beginDeleteMethod;
    this._beginStart = _beginStart;
    this._beginStop = _beginStop;
    this._beginScale = _beginScale;
    this._listNext = _listNext;
  }

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
   * @reject {Error} - The error object.
   */
  listWithHttpOperationResponse(resourceGroupName, accountName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._list(resourceGroupName, accountName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpointListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpointListResult} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  list(resourceGroupName, accountName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._list(resourceGroupName, accountName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._list(resourceGroupName, accountName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  getWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._get(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpoint} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpoint} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._get(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._get(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  createWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._create(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpoint} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpoint} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  create(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._create(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._create(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  updateWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._update(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpoint} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpoint} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  update(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._update(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._update(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  deleteMethodWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._deleteMethod(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  deleteMethod(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._deleteMethod(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._deleteMethod(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  startWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._start(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  start(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._start(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._start(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  stopWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._stop(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  stop(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._stop(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._stop(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  scaleWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._scale(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  scale(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._scale(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._scale(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  beginCreateWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._beginCreate(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpoint} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpoint} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  beginCreate(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._beginCreate(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._beginCreate(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  beginUpdateWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._beginUpdate(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpoint} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpoint} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  beginUpdate(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._beginUpdate(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._beginUpdate(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  beginDeleteMethodWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._beginDeleteMethod(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  beginDeleteMethod(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._beginDeleteMethod(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._beginDeleteMethod(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  beginStartWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._beginStart(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  beginStart(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._beginStart(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._beginStart(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  beginStopWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._beginStop(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  beginStop(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._beginStop(resourceGroupName, accountName, streamingEndpointName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._beginStop(resourceGroupName, accountName, streamingEndpointName, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  beginScaleWithHttpOperationResponse(resourceGroupName, accountName, streamingEndpointName, parameters, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._beginScale(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  beginScale(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._beginScale(resourceGroupName, accountName, streamingEndpointName, parameters, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._beginScale(resourceGroupName, accountName, streamingEndpointName, parameters, options, optionalCallback);
    }
  }

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
   * @reject {Error} - The error object.
   */
  listNextWithHttpOperationResponse(nextPageLink, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listNext(nextPageLink, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

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
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {StreamingEndpointListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link StreamingEndpointListResult} for more
   *                      information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listNext(nextPageLink, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listNext(nextPageLink, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listNext(nextPageLink, options, optionalCallback);
    }
  }

}

module.exports = StreamingEndpoints;
