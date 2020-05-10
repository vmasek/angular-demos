/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import {
  GamesAPIClient,
  USE_DOMAIN,
  USE_HTTP_OPTIONS,
} from './games-api-client.service';

export { GamesAPIClient } from './games-api-client.service';
export { GamesAPIClientInterface } from './games-api-client.interface';

/**
 * provided options, headers and params will be used as default for each request
 */
export interface DefaultHttpOptions {
  headers?: { [key: string]: string };
  params?: { [key: string]: string };
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface GamesAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class GamesAPIClientModule {
  /**
   * Use this method in your root module to provide the GamesAPIClientModule
   *
   * If you are not providing
   * @param { GamesAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: GamesAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: GamesAPIClientModule,
      providers: [
        ...(config.domain != null
          ? [{ provide: USE_DOMAIN, useValue: config.domain }]
          : []),
        ...(config.httpOptions
          ? [{ provide: USE_HTTP_OPTIONS, useValue: config.httpOptions }]
          : []),
        GamesAPIClient,
      ],
    };
  }
}
