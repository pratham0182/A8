import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicComponent } from './music.component';
import { NewmusicsComponent } from './newmusics/newmusics.component'

const routes: Routes = [
  { path: '', component: MusicComponent },
  { path:'newmusic',component:NewmusicsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
