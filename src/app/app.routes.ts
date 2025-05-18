import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AngularPhotoProjectComponent } from './portfolio/angular-photo-project/angular-photo-project.component';
import { LandingPage1Component } from './portfolio/landing-page1/landing-page1.component';
import { LandingPage2Component } from './portfolio/landing-page2/landing-page2.component';
import { LandingPage3Component } from './portfolio/landing-page3/landing-page3.component';
import { LandingPage4Component } from './portfolio/landing-page4/landing-page4.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'angular-photo-project', component:AngularPhotoProjectComponent  },
  { path: 'angular-landingpage1', component:LandingPage1Component},
  { path: 'angular-landingpage2', component:LandingPage2Component},
  { path: 'angular-landingpage3', component:LandingPage3Component},
  { path: 'angular-landingpage4', component:LandingPage4Component},
  { path: 'contact', component: ContactComponent }
];
