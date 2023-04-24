import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  {
    path: "user-list",
    loadChildren: () => import('src/app/components/user-list/user-list.module').then((m) => m.UserListModule)
  },
  { path: '**', redirectTo: 'user-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
