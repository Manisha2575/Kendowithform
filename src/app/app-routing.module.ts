import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from "./students/students.component";
import { TeachersComponent } from "./teachers/teachers.component";
import { DescriptionComponent } from "./description/description.component";
import { AboutComponent } from "./about/about.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";


const routes: Routes = [
    {path:'students',component:StudentsComponent},
    {path:'teachers',component:TeachersComponent},
    {path:'description',component:DescriptionComponent},
    {path:'about',component:AboutComponent},
    {path:'studentdetails', component:StudentdetailsComponent},
    {path:'**',component:PagenotfoundComponent}

   



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule {

}