import { BehaviorSubject } from 'rxjs';

export class StoreSubject<T> extends BehaviorSubject<T> {
  constructor(value: T) {
    super(value);
  }

  publish(modifier: (state: T) => T): void {
    this.next(modifier(super.value));
  }
}
