import { Routes } from "@angular/router";
import { HomeComponent } from "./home";
import { DetailsComponent } from "./details";

const routeConfig:Routes=[
    {
        path:'',
        component:HomeComponent,
        title:"HomePage"
    },
    {
        path:"details/:id",
        component:DetailsComponent,
        title:" Details Page "
    }
];

export default routeConfig;

