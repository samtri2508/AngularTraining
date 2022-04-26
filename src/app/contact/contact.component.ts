import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public formGroup : FormGroup;
  @Output() public setTotal : EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder , private login: LoginService) {
    this.formGroup = this.fb.group({
      first: [''],
      second: ['']
    })
   }

  ngOnInit(): void {
    this.login.getData().subscribe(x => console.log(x));
  }

  public onSubmit(): void {
    const user = "user";
    localStorage.setItem('user', user)
    this.login.checkLogin(this.formGroup.value).subscribe(x => console.log(x));
    this.setTotal.emit(this.formGroup.value);
  }

}
