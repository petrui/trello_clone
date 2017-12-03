import fetch from 'isomorphic-fetch';

const DEFAULT_HEADERS = { 'Content-Type': 'application/json' };

export const postWithParams = (url, params) => (
  ajax(url, 'POST', DEFAULT_HEADERS, JSON.stringify(params))
);

export const putWithParams = (url, params) => (
  ajax(url, 'PUT', DEFAULT_HEADERS, JSON.stringify(params))
);

export const deleteWithUrl = url => (
  ajax(url, 'DELETE', DEFAULT_HEADERS)
);

export const getWithParams = (url, params = {}) => {
  const paramString = queryParams(params);
  return ajax(`${url}?${paramString}`, 'GET', DEFAULT_HEADERS);
};

const ajax = (url, type, headers, body = null) => {
  const fetchParams = {
    method: type,
    headers,
  };
  if (body) {
    Object.assign(fetchParams, { body });
  }
  return fetch(url, fetchParams)
    .then(checkStatus);
};

const checkStatus = (response) => {
  if (!response.ok) {
    throw response;
  }
  return response.json();
};


const queryParams = (params) => {
  const paramsString = [];
  for (const key in params) {
    paramsString.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
  }
  return paramsString.join('&');
};
