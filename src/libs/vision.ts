"use strict";

import * as async from "async";
import * as request from "request";
import environment from "../environment";
import HttpClient from './httpClient';

export default class Vision {
  private _endpoint: string;
  private _apiKey: string;
  private _httpClient: HttpClient;

  constructor() {
    // this._endpoint = environment.getApiEndpoint();
    // this._apiKey = environment.getApiKey();
    this._endpoint = "https://vision.googleapis.com/v1/images:annotate"
    this._apiKey = "AIzaSyCrjebqItVNaUp1d0Ai9eGVA6zMH8OH8r8"

    this._httpClient = new HttpClient();
  }

  public async detectByUri(uri: string) {
    let body = {
      "requests": [
        {
          "image": {
            "source": {
              "imageUri": uri
            }
          },
          "features": [
            {
              "type": "LABEL_DETECTION",
              "maxResults": 20
            }
          ]
        }
      ]
    }
    
    try {
      let res = await this._httpClient.post(`${this._endpoint}?key=${this._apiKey}`, body)
      return res;
    } catch (err) {
      throw err;
    }
  }

  public async detectByRaw(raw: any) {

  }
}

