"use strict";

import * as async from "async";
import * as request from "request";
import environment from "../environment";
import HttpClient from './httpClient';

import { default as RequestModel } from '../models/request'

export default class Vision {
  private _endpoint: string;
  private _apiKey: string;
  private _httpClient: HttpClient;

  constructor() {
    this._endpoint = environment.getApiEndpoint();
    this._apiKey = environment.getApiKey();

    this._httpClient = new HttpClient();
  }

  public detectByUri(uris: string[], types: string[]) {
    let body = {
      "requests": uris.map((uri) => new RequestModel(uri, types, 10)),
    };
    
    console.debug(`Request body = ${body}`);   
    return this._httpClient.post(`${this._endpoint}?key=${this._apiKey}`, body);
  }
}

