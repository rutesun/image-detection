"use strict";

/**
 * Environment 관리 class
 * Singleton
 * TODO: process environment 뿐만이 아닌 yaml 파일 parsing 까지
 */
class Environment {
  private static _instance:Environment = new Environment();
  
     private _port:any = null;
     private _apiKey: any = null;
     private _dbEndpoint: string = null;
     private _apiEndpoint: string = null;
  
     constructor() {
         if(Environment._instance){
             throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
         }
         let _self = this;
         _self._port = process.env.PORT || 8080;  
         _self._dbEndpoint = process.env.DB_ENDPOINT || "mongodb://localhost/vision";
         
         Environment._instance = _self;
         
     }
  
     public static getInstance():Environment {
         return Environment._instance;
     }

     public getPort(): any {
       return this._port;
     }

     public getApiKey(): any {
       return this._apiKey;
     }

     public getApiEndpoint(): string {
       return this._apiEndpoint;
     }

     public getDbEndpoint(): string {
        return this._dbEndpoint
     }
}

export default Environment.getInstance();