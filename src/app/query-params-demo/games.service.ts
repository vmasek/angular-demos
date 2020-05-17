import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { GameSingle } from '../../api/models';
import { GamesAPIClient } from '../../api/services/games';
import { StoreSubject } from '../../store-subject';

interface Response {
  count: number;
  results: GameSingle[];
}

@Injectable({ providedIn: 'root' })
export class GamesService {
  constructor(private games: GamesAPIClient) {}

  private $games = new BehaviorSubject<GameSingle[]>([]);

  readonly games$ = this.$games.asObservable();

  private $metadata = new StoreSubject<{
    loading: boolean;
    total?: number;
    page: number;
    pageSize?: number;
    ordering?: string;
  }>({ loading: false, page: 1 });

  readonly metadata$ = this.$metadata
    .asObservable()
    .pipe(tap(params => console.log('$metadata', params)));

  fetchGames(params: {
    ordering?: string;
    page: number;
    pageSize: number;
  }): void {
    this.$metadata.publish(previousValue => ({
      ...previousValue,
      ...params,
      loading: true,
    }));

    this.games
      .list(params)
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
