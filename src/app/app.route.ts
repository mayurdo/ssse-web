import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CompletedProjectComponent } from "./projects/components/completed-project/completed-project.component";
import { CompanyOverviewComponent } from "./about-us/company-overview/company-overview.component";
import { VisionMissionComponent } from "./about-us/vision-mission/vision-mission.component";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    // About Us
    {
        path: 'company-overview',
        component: CompanyOverviewComponent
    },
    {
        path: 'vision-mission',
        component: VisionMissionComponent
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