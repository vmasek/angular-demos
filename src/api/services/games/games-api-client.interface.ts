/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpOptions } from '../../types';

import * as models from '../../models';
export interface GamesAPIClientInterface {
  /**
   * Arguments object for method `list`.
   */
  listParams?: {
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
    /** Search query. */
    search?: string;
    /** Filter by parent platforms, for example: `1,2,3`. */
    parentPlatforms?: string;
    /** Filter by platforms, for example: `4,5`. */
    platforms?: string;
    /** Filter by stores, for example: `5,6`. */
    stores?: string;
    /** Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`. */
    developers?: string;
    /** Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`. */
    publishers?: string;
    /** Filter by genres, for example: `4,51` or `action,indie`. */
    genres?: string;
    /** Filter by tags, for example: `31,7` or `singleplayer,multiplayer`. */
    tags?: string;
    /** Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`. */
    creators?: string;
    /** Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`. */
    dates?: string;
    /** Filter by platforms count, for example: `1`. */
    platformsCount?: number;
    /** Exclude games from a particular collection, for example: `123`. */
    excludeCollection?: number;
    /** Exclude additions. */
    excludeAdditions?: boolean;
    /** Exclude games which have additions. */
    excludeParents?: boolean;
    /** Exclude games which included in a game series. */
    excludeGameSeries?: boolean;
    /** Available fields: `name`, `released`, `added`, `created`, `rating`. You can reverse the sort order adding a hyphen, for example: `-released`. */
    ordering?: string;
  };

  /**
   * Get a list of games.
   * Response generated for [ 200 ] HTTP response code.
   */
  list(
    args?: GamesAPIClientInterface['listParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  list(
    args?: GamesAPIClientInterface['listParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  list(
    args?: GamesAPIClientInterface['listParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `sitemapRead`.
   */
  sitemapReadParams?: {
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get The Sitemap Games list.
   * Response generated for [ 200 ] HTTP response code.
   */
  sitemapRead(
    args?: GamesAPIClientInterface['sitemapReadParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  sitemapRead(
    args?: GamesAPIClientInterface['sitemapReadParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  sitemapRead(
    args?: GamesAPIClientInterface['sitemapReadParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `additionsList`.
   */
  additionsListParams?: {
    gamePk: string;
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.
   * Response generated for [ 200 ] HTTP response code.
   */
  additionsList(
    args: Exclude<GamesAPIClientInterface['additionsListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  additionsList(
    args: Exclude<GamesAPIClientInterface['additionsListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  additionsList(
    args: Exclude<GamesAPIClientInterface['additionsListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `developmentTeamList`.
   */
  developmentTeamListParams?: {
    gamePk: string;
    /** Which field to use when ordering the results. */
    ordering?: string;
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get a list of individual creators that were part of the development team.
   * Response generated for [ 200 ] HTTP response code.
   */
  developmentTeamList(
    args: Exclude<
      GamesAPIClientInterface['developmentTeamListParams'],
      undefined
    >,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  developmentTeamList(
    args: Exclude<
      GamesAPIClientInterface['developmentTeamListParams'],
      undefined
    >,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  developmentTeamList(
    args: Exclude<
      GamesAPIClientInterface['developmentTeamListParams'],
      undefined
    >,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `gameSeriesList`.
   */
  gameSeriesListParams?: {
    gamePk: string;
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get a list of games that are part of the same series.
   * Response generated for [ 200 ] HTTP response code.
   */
  gameSeriesList(
    args: Exclude<GamesAPIClientInterface['gameSeriesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  gameSeriesList(
    args: Exclude<GamesAPIClientInterface['gameSeriesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  gameSeriesList(
    args: Exclude<GamesAPIClientInterface['gameSeriesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `parentGamesList`.
   */
  parentGamesListParams?: {
    gamePk: string;
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get a list of parent games for DLC's and editions.
   * Response generated for [ 200 ] HTTP response code.
   */
  parentGamesList(
    args: Exclude<GamesAPIClientInterface['parentGamesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  parentGamesList(
    args: Exclude<GamesAPIClientInterface['parentGamesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  parentGamesList(
    args: Exclude<GamesAPIClientInterface['parentGamesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `screenshotsList`.
   */
  screenshotsListParams?: {
    gamePk: string;
    /** Which field to use when ordering the results. */
    ordering?: string;
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get screenshots for the game.
   * Response generated for [ 200 ] HTTP response code.
   */
  screenshotsList(
    args: Exclude<GamesAPIClientInterface['screenshotsListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  screenshotsList(
    args: Exclude<GamesAPIClientInterface['screenshotsListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  screenshotsList(
    args: Exclude<GamesAPIClientInterface['screenshotsListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `storesList`.
   */
  storesListParams?: {
    gamePk: string;
    /** Which field to use when ordering the results. */
    ordering?: string;
    /** A page number within the paginated result set. */
    page?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  /**
   * Get links to the stores that sell the game.
   * Response generated for [ 200 ] HTTP response code.
   */
  storesList(
    args: Exclude<GamesAPIClientInterface['storesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<object>;
  storesList(
    args: Exclude<GamesAPIClientInterface['storesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<object>>;
  storesList(
    args: Exclude<GamesAPIClientInterface['storesListParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<object>>;

  /**
   * Arguments object for method `read`.
   */
  readParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get details of the game.
   * Response generated for [ 200 ] HTTP response code.
   */
  read(
    args: Exclude<GamesAPIClientInterface['readParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.GameSingle>;
  read(
    args: Exclude<GamesAPIClientInterface['readParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.GameSingle>>;
  read(
    args: Exclude<GamesAPIClientInterface['readParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.GameSingle>>;

  /**
   * Arguments object for method `achievementsRead`.
   */
  achievementsReadParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get a list of game achievements.
   * Response generated for [ 200 ] HTTP response code.
   */
  achievementsRead(
    args: Exclude<GamesAPIClientInterface['achievementsReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.ParentAchievement>;
  achievementsRead(
    args: Exclude<GamesAPIClientInterface['achievementsReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.ParentAchievement>>;
  achievementsRead(
    args: Exclude<GamesAPIClientInterface['achievementsReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.ParentAchievement>>;

  /**
   * Arguments object for method `moviesRead`.
   */
  moviesReadParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get a list of game trailers.
   * Response generated for [ 200 ] HTTP response code.
   */
  moviesRead(
    args: Exclude<GamesAPIClientInterface['moviesReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Movie>;
  moviesRead(
    args: Exclude<GamesAPIClientInterface['moviesReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Movie>>;
  moviesRead(
    args: Exclude<GamesAPIClientInterface['moviesReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Movie>>;

  /**
   * Arguments object for method `redditRead`.
   */
  redditReadParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get a list of most recent posts from the game's subreddit.
   * Response generated for [ 200 ] HTTP response code.
   */
  redditRead(
    args: Exclude<GamesAPIClientInterface['redditReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Reddit>;
  redditRead(
    args: Exclude<GamesAPIClientInterface['redditReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Reddit>>;
  redditRead(
    args: Exclude<GamesAPIClientInterface['redditReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Reddit>>;

  /**
   * Arguments object for method `suggestedRead`.
   */
  suggestedReadParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get a list of visually similar games.
   * Response generated for [ 200 ] HTTP response code.
   */
  suggestedRead(
    args: Exclude<GamesAPIClientInterface['suggestedReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.GameSingle>;
  suggestedRead(
    args: Exclude<GamesAPIClientInterface['suggestedReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.GameSingle>>;
  suggestedRead(
    args: Exclude<GamesAPIClientInterface['suggestedReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.GameSingle>>;

  /**
   * Arguments object for method `twitchRead`.
   */
  twitchReadParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get streams on Twitch associated with the game .
   * Response generated for [ 200 ] HTTP response code.
   */
  twitchRead(
    args: Exclude<GamesAPIClientInterface['twitchReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Twitch>;
  twitchRead(
    args: Exclude<GamesAPIClientInterface['twitchReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Twitch>>;
  twitchRead(
    args: Exclude<GamesAPIClientInterface['twitchReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Twitch>>;

  /**
   * Arguments object for method `youtubeRead`.
   */
  youtubeReadParams?: {
    /** An ID or a slug identifying this Game. */
    id: string;
  };

  /**
   * Get videos from YouTube associated with the game.
   * Response generated for [ 200 ] HTTP response code.
   */
  youtubeRead(
    args: Exclude<GamesAPIClientInterface['youtubeReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Youtube>;
  youtubeRead(
    args: Exclude<GamesAPIClientInterface['youtubeReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Youtube>>;
  youtubeRead(
    args: Exclude<GamesAPIClientInterface['youtubeReadParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Youtube>>;
}
