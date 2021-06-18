import { Route } from '@angular/compiler/src/core';
import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './GuardDemo/dashboard/dashboard.component';
import { GuardDemoGuard } from './GuardDemo/guard-demo.guard';
import { LoginComponent } from './GuardDemo/login/login.component';
import { LogoutComponent } from './GuardDemo/logout/logout.component';
import { PostModule } from './ModuleDemos/post/post.module';
import { AboutHomeComponent } from './RoutingDemos/about-home/about-home.component';
import { AboutItemComponent } from './RoutingDemos/about-item/about-item.component';
import { AboutComponent } from './RoutingDemos/about/about.component';
import { About1Component } from './RoutingDemos/GuardExample/about1/about1.component';
import { Contact1Component } from './RoutingDemos/GuardExample/contact1/contact1.component';
import { Home1Component } from './RoutingDemos/GuardExample/home1/home1.component';
import { LoginGuardGuard } from './RoutingDemos/GuardExample/login-guard.guard';
import { PostsComponent } from './RoutingDemos/GuardExample/posts/posts.component';
import { HomeComponent } from './RoutingDemos/home/home.component';
import { MessageComponent } from './RoutingDemos/message/message.component';
import { PhotosComponent } from './RoutingDemos/photos/photos.component';
import { ContactComponent } from './RoutingDemos/RoutingSimpleExam/contact/contact.component';
import { ErrorComponent } from './RoutingDemos/RoutingSimpleExam/error/error.component';
import { ProductNameDetailsComponent } from './RoutingDemos/RoutingSimpleExam/product-name-details/product-name-details.component';
import { ProductComponent } from './RoutingDemos/RoutingSimpleExam/product/product.component';
import { FormComponent } from './SpringAngularwithRouting/form/form.component';
import { UserServiceComponent } from './SpringAngularwithRouting/user-service/user-service.component';
import { HomeComponentM } from './ModuleDemos/home/home.componentM';
import { DashComponent } from './LazyBindingDemos/dash/dash.component';
import { ProfileComponent } from './LazyBindingDemos/profile/profile.component';
import { AttendanceComponent } from './LazyBindingDemos/attendance/attendance.component';

import { PageNotFoundComponent } from './LazyBindingDemos/page-not-found/page-not-found.component';
import { AddTutorialComponent } from './SpringAngularCurd2/add-tutorial/add-tutorial.component';
import { TutorailsListComponent } from './SpringAngularCurd2/tutorails-list/tutorails-list.component';
import { TutorialDetailsComponent } from './SpringAngularCurd2/tutorial-details/tutorial-details.component';
import { EmployeeListComponent } from './EmployeeSpringAngularCrud/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './EmployeeSpringAngularCrud/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './EmployeeSpringAngularCrud/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './EmployeeSpringAngularCrud/employee-details/employee-details.component';





// const routes: Routes = [
//   {
//     path: '', component: HomeComponent
//   },
//   { path: 'welcome', component: MessageComponent },
//   {
//     path: 'about', component: AboutComponent,
//     children: [{
//       path: '', component: AboutHomeComponent
//     },
//     {
//       path: 'item/:id', component: AboutItemComponent
//     }]

//   },
//   { path: 'photos', component: PhotosComponent }



// ];

// const routes: Routes=[
//   {path:'Home',component:HomeComponent},
//   {path:'contact',component:ContactComponent},
//   {path:'details',component:ProductComponent},
//   {path:'detail/:productId',component:ProductNameDetailsComponent},
//   {path:'',redirectTo:'./Home',pathMatch:'full'},
//   {path:'**',component:ErrorComponent}
// ]

// const routes:Routes=[
//   {path:'Home',canActivate:[LoginGuardGuard],component:Home1Component},
//   {path:'About',component:About1Component},
//   {path:'Contact',component:Contact1Component},
//   {path:'Contact/:id',component:Contact1Component},
//   {path:'Post',component:PostsComponent},
//   {path:'',redirectTo:'./Home',pathMatch:'full'}
  
// ]

// const routes: Routes = [
//   { path: 'users', component: UserServiceComponent },
//   { path: 'adduser', component:  FormComponent}
// ];

// const routes:Routes=[
//   {path:'Home',component:HomeComponent},
//   {path:'Dashboard',canActivate:[GuardDemoGuard],component:DashboardComponent},
//   {path:'Login',component:LoginComponent},
//   {path:'Logout',component:LogoutComponent},

// ]

// const routes:Routes=[
//   {path:"",component:HomeComponentM},
//   {path:"posts",loadChildren:() =>import('../app/ModuleDemos/post/post.module').then(m =>m.PostModule) },
//   {path:"king",loadChildren:() =>import('../app/ModuleDemos/king/king.module').then(m=>m.KingModule)}
// ]

// const routes:Routes=[
//   {path:'dashboard',component:DashComponent},
//   {path:'profile',component:ProfileComponent},
//   {path:'attendance',component:AttendanceComponent},
//   {path:'leaves',loadChildren: () => import('../app/LazyBindingDemos/leaves/leaves.module').then(m => m.LeavesModule) },
//   {path:'',redirectTo:'dashboard',pathMatch:'full'},
//   {path:'**',component:PageNotFoundComponent}
// ]

// const routes:Routes=[
//   {path:'add',component:AddTutorialComponent},
//   {path:'tutorials',component:TutorailsListComponent},
//   {path:'tutorials/:id',component:TutorialDetailsComponent},
//   {path:'',redirectTo:'tutorials',pathMatch:'full'}
// ]

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

