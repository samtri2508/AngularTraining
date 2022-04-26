import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './helper/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
