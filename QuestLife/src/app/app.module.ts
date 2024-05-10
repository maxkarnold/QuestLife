import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/environment'
import { AttributeService } from './attribute.service';
import { OverviewComponent } from './overview/overview.component';
import { TrackerComponent } from './tracker/tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    TrackerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AttributeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
