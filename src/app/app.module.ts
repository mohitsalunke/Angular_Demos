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

@NgModule({
  declarations: [
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
    EmployeeServiseComponent
  ],
  imports: [FormsModule,ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
