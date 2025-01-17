import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { decrement, increment, reset } from "src/app/state/actions/actions";

@Component({
    selector:'app-demoCounter',
    templateUrl:'./demoCounter.component.html'
})

export class DemoCounterComponent{
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}