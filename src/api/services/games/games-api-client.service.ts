/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, GamesAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>(
  'GamesAPIClient_USE_DOMAIN',
);
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>(
  'GamesAPIClient_USE_HTTP_OPTIONS',
);

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GamesAPIClient implements GamesAPIClientInterface {
  readonly options: APIHttpOptions;

  readonly domain: string = `https://api.rawg.io/api`;

  constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(
        options && options.headers ? options.headers : {},
      ),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress
        ? { reportProgress: options.reportProgress }
        : {}),
      ...(options && options.withCredentials
        ? { withCredentials: options.withCredentials }
        : {}),
    };
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  list(
    args: {
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
      search?: string; // (optional) Search query.
      parentPlatforms?: string; // (optional) Filter by parent platforms, for example: `1,2,3`.
      platforms?: string; // (optional) Filter by platforms, for example: `4,5`.
      stores?: string; // (optional) Filter by stores, for example: `5,6`.
      developers?: string; // (optional) Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.
      publishers?: string; // (optional) Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.
      genres?: string; // (optional) Filter by genres, for example: `4,51` or `action,indie`.
      tags?: string; // (optional) Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.
      creators?: string; // (optional) Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.
      dates?: string; // (optional) Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.
      platformsCount?: number; // (optional) Filter by platforms count, for example: `1`.
      excludeCollection?: number; // (optional) Exclude games from a particular collection, for example: `123`.
      excludeAdditions?: boolean; // (optional) Exclude additions.
      excludeParents?: boolean; // (optional) Exclude games which have additions.
      excludeGameSeries?: boolean; // (optional) Exclude games which included in a game series.
      ordering?: string; // (optional) Available fields: `name`, `released`, `added`, `created`, `rating`. You can reverse the sort order adding a hyphen, for example: `-released`.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    if ('search' in args) {
      options.params = options.params.set('search', String(args.search));
    }
    if ('parentPlatforms' in args) {
      options.params = options.params.set(
        'parent_platforms',
        String(args.parentPlatforms),
      );
    }
    if ('platforms' in args) {
      options.params = options.params.set('platforms', String(args.platforms));
    }
    if ('stores' in args) {
      options.params = options.params.set('stores', String(args.stores));
    }
    if ('developers' in args) {
      options.params = options.params.set(
        'developers',
        String(args.developers),
      );
    }
    if ('publishers' in args) {
      options.params = options.params.set(
        'publishers',
        String(args.publishers),
      );
    }
    if ('genres' in args) {
      options.params = options.params.set('genres', String(args.genres));
    }
    if ('tags' in args) {
      options.params = options.params.set('tags', String(args.tags));
    }
    if ('creators' in args) {
      options.params = options.params.set('creators', String(args.creators));
    }
    if ('dates' in args) {
      options.params = options.params.set('dates', String(args.dates));
    }
    if ('platformsCount' in args) {
      options.params = options.params.set(
        'platforms_count',
        String(args.platformsCount),
      );
    }
    if ('excludeCollection' in args) {
      options.params = options.params.set(
        'exclude_collection',
        String(args.excludeCollection),
      );
    }
    if ('excludeAdditions' in args) {
      options.params = options.params.set(
        'exclude_additions',
        String(args.excludeAdditions),
      );
    }
    if ('excludeParents' in args) {
      options.params = options.params.set(
        'exclude_parents',
        String(args.excludeParents),
      );
    }
    if ('excludeGameSeries' in args) {
      options.params = options.params.set(
        'exclude_game_series',
        String(args.excludeGameSeries),
      );
    }
    if ('ordering' in args) {
      options.params = options.params.set('ordering', String(args.ordering));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  sitemapRead(
    args: {
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/sitemap`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  additionsList(
    args: {
      gamePk: string;
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/${args.gamePk}/additions`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  developmentTeamList(
    args: {
      gamePk: string;
      ordering?: string; // (optional) Which field to use when ordering the results.
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/${args.gamePk}/development-team`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('ordering' in args) {
      options.params = options.params.set('ordering', String(args.ordering));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  gameSeriesList(
    args: {
      gamePk: string;
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/${args.gamePk}/game-series`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  parentGamesList(
    args: {
      gamePk: string;
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/${args.gamePk}/parent-games`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  screenshotsList(
    args: {
      gamePk: string;
      ordering?: string; // (optional) Which field to use when ordering the results.
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/${args.gamePk}/screenshots`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('ordering' in args) {
      options.params = options.params.set('ordering', String(args.ordering));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  storesList(
    args: {
      gamePk: string;
      ordering?: string; // (optional) Which field to use when ordering the results.
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object> {
    const path = `/games/${args.gamePk}/stores`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('ordering' in args) {
      options.params = options.params.set('ordering', String(args.ordering));
    }
    if ('page' in args) {
      options.params = options.params.set('page', String(args.page));
    }
    if ('pageSize' in args) {
      options.params = options.params.set('page_size', String(args.pageSize));
    }
    return this.sendRequest<object>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  read(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.GameSingle> {
    const path = `/games/${args.id}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GameSingle>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  achievementsRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.ParentAchievement> {
    const path = `/games/${args.id}/achievements`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.ParentAchievement>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  moviesRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Movie> {
    const path = `/games/${args.id}/movies`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Movie>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  redditRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Reddit> {
    const path = `/games/${args.id}/reddit`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Reddit>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  suggestedRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.GameSingle> {
    const path = `/games/${args.id}/suggested`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.GameSingle>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  twitchRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Twitch> {
    const path = `/games/${args.id}/twitch`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Twitch>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  youtubeRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Youtube> {
    const path = `/games/${args.id}/youtube`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    return this.sendRequest<models.Youtube>('GET', path, options);
  }

  private sendRequest<T>(
    method: string,
    path: string,
    options: HttpOptions,
    body?: any,
  ): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
