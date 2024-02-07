import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'income',
        //component: IncomePageComponent
    },
    {
        path: 'expense',
        //component: ExpensePageComponent
    },
    {
        path: 'settings',
        //component: SettingsPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MachineRouterModule { }