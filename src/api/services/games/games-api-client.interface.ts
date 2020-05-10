/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface GamesAPIClientInterface {
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
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  sitemapRead(
    args: {
      page?: number; // (optional) A page number within the paginated result set.
      pageSize?: number; // (optional) Number of results to return per page.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<object>;

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
  ): Observable<object>;

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
  ): Observable<object>;

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
  ): Observable<object>;

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
  ): Observable<object>;

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
  ): Observable<object>;

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
  ): Observable<object>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  read(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.GameSingle>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  achievementsRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.ParentAchievement>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  moviesRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Movie>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  redditRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Reddit>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  suggestedRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.GameSingle>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  twitchRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Twitch>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  youtubeRead(
    args: {
      id: string; // An ID or a slug identifying this Game.
    },
    requestHttpOptions?: HttpOptions,
  ): Observable<models.Youtube>;
}
