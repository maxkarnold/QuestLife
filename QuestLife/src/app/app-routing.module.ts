import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerComponent } from './tracker/tracker.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: TrackerComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: '**', component: TrackerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
