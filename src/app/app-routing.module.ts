import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialeventsComponent } from './specialevents/specialevents.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path : "",
    redirectTo : "events",
    pathMatch : "full"
  },
  {
    path : "events",
    component : EventsComponent
  },
  {
    path : "specialEvents",
    component : SpecialeventsComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "createEvents",
    component : CreateComponent,
    canActivate : [AuthGuard]
  },
  {
    path : "**",
    component : EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
