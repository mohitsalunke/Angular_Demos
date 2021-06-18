import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyinfoComponent } from './myinfo.component';
import { MycalculatorComponent } from './mycalculator.component';
import { MyLoginComponent } from './my-login.component';
import { RegistrationComponent } from './registration.component';
import { StudentComponent } from './student.component';
import { EmployeeComponent } from './employee.component';
import { TestifComponent } from './DirectiveDemos/testif/testif.component';
import { TestForComponent } from './DirectiveDemos/test-for/test-for.component';
import { CURDDemoComponent } from './DirectiveDemos/curddemo/curddemo.component';
import { StudentCRUDComponent } from './DirectiveDemos/student-crud/student-crud.component';
import { EmployeeCRUDComponent } from './DirectiveDemos/employee-crud/employee-crud.component';
import { TestSwitchComponent } from './DirectiveDemos/test-switch/test-switch.component';
import { TestNgstyleComponent } from './DirectiveDemos/test-ngstyle/test-ngstyle.component';
import { DatabindingDemosComponent } from './DirectiveDemos/databinding-demos/databinding-demos.component';
import { MsgComponentComponent } from './DirectiveDemos/msg-component/msg-component.component';
import { PipeDemosComponent } from './DirectiveDemos/pipe-demos/pipe-demos.component';
import { DesignationPipePipe } from './DirectiveDemos/designation-pipe.pipe';
import { ExpoentialStrengthPipe } from './DirectiveDemos/expoential-strength.pipe';
import { MyfilterPipe } from './DirectiveDemos/myfilter.pipe';
import { ProductPipeComponent } from './DirectiveDemos/product-pipe/product-pipe.component';
import { MyProductPipePipe } from './DirectiveDemos/my-product-pipe.pipe';
import { ProductPipeDynamicComponent } from './DirectiveDemos/product-pipe-dynamic/product-pipe-dynamic.component';
import { ParentDemoComponent } from './InputOutputDecorater/parent-demo/parent-demo.component';
import { ChildDemoComponent } from './InputOutputDecorater/child-demo/child-demo.component';
import { ContactComponent } from './FormsDemos/contact/contact.component';
import { ContactformComponent } from './FormsDemos/contactform/contactform.component';
import { AddParentComponent } from './InputOutputDecorater/add-parent/add-parent.component';
import { AddChildComponent } from './InputOutputDecorater/add-child/add-child.component';
import { LifecyclemethodsComponent } from './LifeCycleDemo/lifecyclemethods/lifecyclemethods.component';
import { ReactiveRegistrationFormComponent } from './FormsDemos/reactive-registration-form/reactive-registration-form.component';
import { ReactiveContactFormComponent } from './FormsDemos/reactive-contact-form/reactive-contact-form.component';
import { StudentFormComponent } from './FormsDemos/student-form/student-form.component';
import { CallServiceComponent } from './ServiceDemos/call-service/call-service.component';
import { EmployeeServiseComponent } from './ServiceDemos/employee-servise/employee-servise.component';
import { StudentComponentComponent } from './ServiceDemos/student-component/student-component.component';
import { CustomerComponentComponent } from './ServiceDemos/customer-component/customer-component.component';
import { ObservableDemoComponent } from './ObservableDemos/observable-demo/observable-demo.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpSimpleComponent } from './AscyncHttpServiceDemo/http-simple/http-simple.component';
import { ServiceUsingHttpClientComponent } from './AscyncHttpServiceDemo/service-using-http-client/service-using-http-client.component';
import { RectiveValidationFormComponent } from './FormsDemos/rective-validation-form/rective-validation-form.component';
import { UserComponent } from './SpringAngularRestCrud/user/user.component';
import { HomeComponent } from './RoutingDemos/home/home.component';
import { MessageComponent } from './RoutingDemos/message/message.component';
import { AboutComponent } from './RoutingDemos/about/about.component';
import { PhotosComponent } from './RoutingDemos/photos/photos.component';
import { AboutHomeComponent } from './RoutingDemos/about-home/about-home.component';
import { AboutItemComponent } from './RoutingDemos/about-item/about-item.component';
import { ProductComponent } from './RoutingDemos/RoutingSimpleExam/product/product.component';
import { ErrorComponent } from './RoutingDemos/RoutingSimpleExam/error/error.component';
import { ProductNameDetailsComponent } from './RoutingDemos/RoutingSimpleExam/product-name-details/product-name-details.component';
import { Home1Component } from './RoutingDemos/GuardExample/home1/home1.component';
import { About1Component } from './RoutingDemos/GuardExample/about1/about1.component';
import { Contact1Component } from './RoutingDemos/GuardExample/contact1/contact1.component';
import { PostsComponent } from './RoutingDemos/GuardExample/posts/posts.component';
import { UserServiceComponent } from './SpringAngularwithRouting/user-service/user-service.component';
import { FormComponent } from './SpringAngularwithRouting/form/form.component';
import { UserServiceService } from './SpringAngularwithRouting/user-service.service';
import { LoginComponent } from './GuardDemo/login/login.component';
import { LogoutComponent } from './GuardDemo/logout/logout.component';
import { DashboardComponent } from './GuardDemo/dashboard/dashboard.component';
import { GuardDemoGuard } from './GuardDemo/guard-demo.guard';
import { HomeComponentM } from './ModuleDemos/home/home.componentM';
import { DashComponent } from './LazyBindingDemos/dash/dash.component';
import { AttendanceComponent } from './LazyBindingDemos/attendance/attendance.component';
//import { LeavesComponent } from './LazyBindingDemos/leaves/leaves.component';
import { ProfileComponent } from './LazyBindingDemos/profile/profile.component';
import { PageNotFoundComponent } from './LazyBindingDemos/page-not-found/page-not-found.component';
import { UploadFilesComponent } from './ImageUploadingSpring/components/upload-files/upload-files.component';
import { AddTutorialComponent } from './SpringAngularCurd2/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './SpringAngularCurd2/tutorial-details/tutorial-details.component';
import { TutorailsListComponent } from './SpringAngularCurd2/tutorails-list/tutorails-list.component';
import { TutorialService } from './SpringAngularCurd2/tutorial.service';
import { FormBuilderComponent } from './FormBuilder/form-builder/form-builder.component';
import { LoginFormBuilderComponent } from './FormBuilder/login-form-builder/login-form-builder.component';
import { FormArrayComponent } from './FormArrayDemos/form-array/form-array.component';
import { TicketsFormComponent } from './FormArrayDemos/tickets-form/tickets-form.component';
import { SelectFormComponent } from './FormArrayDemos/select-form/select-form.component';
import { CreateEmployeeComponent } from './EmployeeSpringAngularCrud/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './EmployeeSpringAngularCrud/employee-details/employee-details.component';
import { EmployeeListComponent } from './EmployeeSpringAngularCrud/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './EmployeeSpringAngularCrud/update-employee/update-employee.component';

// import { ApplyComponent } from './LazyBindingDemos/leaves/apply/apply.component';
// import { BalanceComponent } from './LazyBindingDemos/leaves/balance/balance.component';
// import { Page404leaveComponent } from './LazyBindingDemos/leaves/page404leave/page404leave.component';
// import { CasualComponent } from './LazyBindingDemos/leaves/balance/casual/casual.component';
// import { EarnedComponent } from './LazyBindingDemos/leaves/balance/earned/earned.component';
// import { Page404balanceComponent } from './LazyBindingDemos/leaves/balance/page404balance/page404balance.component';



@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    MyinfoComponent,
    MycalculatorComponent,
    MyLoginComponent,
    RegistrationComponent,
    StudentComponent,
    EmployeeComponent,
    TestifComponent,
    TestForComponent,
    CURDDemoComponent,
    StudentCRUDComponent,
    EmployeeCRUDComponent,
    TestSwitchComponent,
    TestNgstyleComponent,
    DatabindingDemosComponent,
    MsgComponentComponent,
    PipeDemosComponent,
    DesignationPipePipe,
    ExpoentialStrengthPipe,
    MyfilterPipe,
    ProductPipeComponent,
    MyProductPipePipe,
    ProductPipeDynamicComponent,
    ParentDemoComponent,
    ChildDemoComponent,
    ContactComponent,
    ContactformComponent,
    AddParentComponent,
    AddChildComponent,
    LifecyclemethodsComponent,
    ReactiveRegistrationFormComponent,
    ReactiveContactFormComponent,
    StudentFormComponent,
    CallServiceComponent,
    EmployeeServiseComponent,
    StudentComponentComponent,
    CustomerComponentComponent,
    ObservableDemoComponent,
    HttpSimpleComponent,
    ServiceUsingHttpClientComponent,
    RectiveValidationFormComponent,
    HomeComponent,
    MessageComponent,
    AboutComponent,
    PhotosComponent,
    AboutHomeComponent,
    AboutItemComponent,
    ProductComponent,
    ErrorComponent,
    ProductNameDetailsComponent,
    Home1Component,
    About1Component,
    Contact1Component,
    PostsComponent,
    UserServiceComponent,
    FormComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    HomeComponentM,
    DashComponent,
    AttendanceComponent,
    
    ProfileComponent,
    PageNotFoundComponent,
    UploadFilesComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorailsListComponent,
    FormBuilderComponent,
    LoginFormBuilderComponent,
    FormArrayComponent,
    TicketsFormComponent,
    SelectFormComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    
    // ApplyComponent,
    // BalanceComponent,
    // Page404leaveComponent,
    // CasualComponent,
    // EarnedComponent,
    // Page404balanceComponent,
    
    
  ],
  imports: [FormsModule,ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [TutorialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
