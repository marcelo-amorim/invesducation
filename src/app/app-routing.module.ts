import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // {
  //   path: 'inside',
  //   loadChildren: './pages/inside/inside.module#InsidePageModule',
  //   canActivate: [AuthGuardService]
  // },
  {
    path: 'guide',
    loadChildren: './pages/guide/guide.module#GuidePageModule',
    canActivate: [AuthGuardService]
  },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' , canActivate: [AuthGuardService]},
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' , canActivate: [AuthGuardService]},
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' , canActivate: [AuthGuardService]},
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' , canActivate: [AuthGuardService]},
  { path: 'new-profile', loadChildren: './pages/new-profile/new-profile.module#NewProfilePageModule', canActivate: [AuthGuardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
