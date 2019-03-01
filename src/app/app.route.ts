import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CompletedProjectComponent } from "./projects/components/completed-project/completed-project.component";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'completed-project',
        component: CompletedProjectComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export const RouteModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });