import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/reducers/reducer';
import { AppComponent } from './app.component';
import { DemoCounterComponent } from 'src/demoCounter/demoCounter.component';
import { TodoComponenet } from './todo/todo.component';

@NgModule({
  imports: [
     BrowserModule, 
     StoreModule.forRoot({count:counterReducer}),
    ],
  declarations: [AppComponent,DemoCounterComponent,TodoComponenet],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/