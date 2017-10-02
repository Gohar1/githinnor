import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewlistComponent } from "./newlist/newlist.component";
import { List1Component } from "./list1/list1.component";

const router :Routes=[
    {path: "dashboard", component: DashboardComponent},
    

    {path: "newlist", component: NewlistComponent},

    {path: "post", component: List1Component},
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

export const declaration=[
    DashboardComponent,
    AppComponent,
    NewlistComponent,
    List1Component
]