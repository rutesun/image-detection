
import * as request from "request-promise";

export default class HttpClient {
  public get(uri: string, options = {}) {
    let _opt = {
      method: 'GET',
      uri: uri,
    }
    return request(_opt)
  }

  public post(uri: string, body = {}, options = {}): Promise<any> {
    let _opt = {
      method: 'POST',
      uri: uri,
      json: true
    }
    _opt = Object.assign(_opt, {body: body});
    _opt = Object.assign(_opt, options);
  
    return request(_opt)
  }
}