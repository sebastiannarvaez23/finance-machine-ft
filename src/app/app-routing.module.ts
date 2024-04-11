import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './machine/pages/home/home-page.component';
import { IncomePageComponent } from './machine/pages/income/income-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'income', component: IncomePageComponent },
  //{ path: '', redirectTo: '/componente1', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
