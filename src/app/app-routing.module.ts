import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'vote-submit', loadChildren: './vote-submit/vote-submit.module#VoteSubmitPageModule' },
  { path: 'vote-show', loadChildren: './vote-show/vote-show.module#VoteShowPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'electioninfo/:id/:name', loadChildren: './pages/electioninfo/electioninfo.module#ElectioninfoPageModule' },
  { path: 'candidateinfo/:id', loadChildren: './pages/candidateinfo/candidateinfo.module#CandidateinfoPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
