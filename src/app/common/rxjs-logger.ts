import { Observable } from 'rxjs';

export const log = <T>(tag?: string) => <Tb extends T>(source: Observable<Tb>): Observable<Tb> =>
  new Observable<Tb>(observer =>
    source.subscribe(
      next => {
        console.group(tag);
        console.log(next);
        console.groupEnd();
        observer.next(next);
      },
      error => {
        console.error('[rxjs - ERROR] ', tag, ' - ', error);
        observer.error(error);
      },
      () => {
        console.log(`%c${tag} observer completed`, 'color: green');
        observer.complete();
      },
    )
  );

