import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
    
})
export class StudentsComponent {
    reactiveForm: FormGroup;
    email: string;
    password: string;

    constructor(
        private fb: FormBuilder
    ) {
        this.reactiveForm = this.fb.group({

            'email': [null, Validators.required],
            'password': [null, Validators.required]


        })

    }
    
    submitForm(info) {

        this.email = info.email;
        this.password = info.password;

        console.log(info);
    }

}



