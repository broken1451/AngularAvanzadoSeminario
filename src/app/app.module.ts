import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnPushComponent } from './components/on-push/on-push.component';
import { DetachComponent } from './components/detach/detach.component';
import { ReattachComponent } from './components/reattach/reattach.component';
import { NgZoneComponent } from './components/ng-zone/ng-zone.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    DetachComponent,
    ReattachComponent,
    NgZoneComponent,
    AsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
