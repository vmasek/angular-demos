import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator/paginator';
import { MatSort } from '@angular/material/sort';
import { Sort } from '@angular/material/sort/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, map, tap } from 'rxjs/operators';
import { GameSingle } from '../../api/models';
import { GamesService } from './games.service';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-query-params-demo',
  templateUrl: './query-params-demo.component.html',
  styleUrls: ['./query-params-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryParamsDemoComponent {
  displayedColumns: string[] = [
    'image',
    'name',
    'genres',
    'rating',
    'metacritic',
    'released',
    'playtime',
  ];

  viewMode$ = this.route.queryParams.pipe(map(params => params.viewMode));

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private readonly route: ActivatedRoute,
    public readonly games: GamesService,
    public readonly router: Router,
  ) {
    this.route.queryParams
      .pipe(
        tap(params => console.log('route', params)),
        debounceTime(100),
        tap(({ page, pageSize, ordering, genres }) => {
          this.games.fetchGames({
            pageSize: pageSize || PAGE_SIZE,
            page: page || 1,
            ...(genres && { genres }),
            ...(ordering && { ordering }),
          });
        }),
      )
      .subscribe();
  }

  trackByFn(_: number, { slug, name }: GameSingle): string {
    // tslint:disable-next-line:no-non-null-assertion
    return slug || name!;
  }

  doSort({ active, direction }: Sort): void {
    this.router.navigate([], {
      queryParams: {
        page: undefined,
        ordering:
          active && direction
            ? direction === 'asc'
              ? active
              : `-${active}`
            : undefined,
      },
      queryParamsHandling: 'merge',
    });
  }

  changePage({ pageIndex, previousPageIndex, pageSize }: PageEvent): void {
    this.router.navigate([], {
      queryParams: {
        page: pageIndex === previousPageIndex ? 1 : pageIndex + 1,
        pageSize,
      },
      queryParamsHandling: 'merge',
    });
  }
}
