import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ballGameComponent } from './game/ballGame.component';
import { mainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/main',
  },
  {
    path: 'ballGame',
    component: ballGameComponent,
  },
  {
    path: 'main',
    component: mainComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ballGameComponent,
    mainComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
