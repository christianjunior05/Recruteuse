import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { FormBuilder, FormControl, FormGroup,  ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-admin',
  templateUrl: './connexion-admin.component.html',
  styleUrls: ['./connexion-admin.component.css']
})
export class ConnexionAdminComponent implements OnInit {
  postUrl: string = '';
  storage: any;
  admin: any;
  reactiveForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  public getJsonValue: any;

  constructor(private http : HttpClient,private router: Router) {  this.admin= JSON.parse(localStorage.getItem('data'));}

  ngOnInit(): void {
  }
  postMethod() {
    
    let myFormData = new FormData();
    
    myFormData.append('email', this.reactiveForm.value.email);
    myFormData.append('password', this.reactiveForm.value.password);

    return this.http.post(this.postUrl, myFormData).subscribe(
      (response : any) =>{
        const admin= response.msg[0];
        localStorage.setItem("data",JSON.stringify(admin));
         
        
      },
      
      (error) => console.log(error)
    );
  }
  
  onSubmit() {
    console.log('resulat', this.reactiveForm.value);
    this.postMethod();
    this.router.navigate(['/dashboard-admin']);
  }

}
