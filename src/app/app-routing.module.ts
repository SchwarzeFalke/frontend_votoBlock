import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'vote-submit', loadChildren: './vote-submit/vote-submit.module#VoteSubmitPageModule' },
  { path: 'resultsview', loadChildren: './resultsview/resultsview.module#ResultsviewPageModule' },
  { path: 'presidentialelectionview/:id', loadChildren: './presidentialelectionview/presidentialelectionview.module#PresidentialelectionviewPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
