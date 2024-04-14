import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './machine/pages/home/home-page.component';
import { PaymentPageComponent } from './machine/pages/payment/payment-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'payment', component: PaymentPageComponent },
  //{ path: '', redirectTo: '/componente1', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
