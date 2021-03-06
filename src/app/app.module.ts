import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RouteModule } from './app.route';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CompletedProjectComponent } from './projects/components/completed-project/completed-project.component';
import { CompanyOverviewComponent } from './about-us/company-overview/company-overview.component';
import { VisionMissionComponent } from './about-us/vision-mission/vision-mission.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BoardOfDirectorsComponent } from './about-us/board-of-directors/board-of-directors.component';
import { OwlModule } from 'ngx-owl-carousel';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    CompletedProjectComponent,
    CompanyOverviewComponent,
    VisionMissionComponent,
    ContactUsComponent,
    BoardOfDirectorsComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
