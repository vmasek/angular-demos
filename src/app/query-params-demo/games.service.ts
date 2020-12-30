import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { GameSingle } from '../../api/models';
import { GamesAPIClient } from '../../api/services/games';
import { StoreSubject } from '../../store-subject';

interface Response {
  count: number;
  results: GameSingle[];
}

export interface Metadata {
  loading: boolean;
  total?: number;
  page: number;
  pageSize?: number;
  ordering?: string;
  genres?: string;
}

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private games: GamesAPIClient) {}

  private $games = new BehaviorSubject<GameSingle[]>([]);

  readonly games$ = this.$games.asObservable().pipe(shareReplay());

  private $metadata = new StoreSubject<Metadata>({ loading: false, page: 1 });

  readonly metadata$: Observable<Metadata> = this.$metadata
    .asObservable()
    .pipe(shareReplay());

  fetchGames(params: {
    ordering?: string;
    genres?: string;
    page: number;
    pageSize: number;
  }): void {
    this.$metadata.publish(previousValue => ({
      ...previousValue,
      ...params,
      loading: true,
    }));

    this.games
      .list({
        ...params,
      })
      .pipe(catchError(() => ({ count: 0 } as any)))
      .subscribe(({ results, count }: Response) => {
        this.$games.next(results);
        this.$metadata.publish(previousValue => ({
          ...previousValue,
          ...params,
          total: count,
          loading: false,
        }));
      });
  }
}
