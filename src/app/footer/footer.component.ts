import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscribeForm = this.formBuilder.group({
    email: ''
  });

  year:any = new Date().getFullYear();

  constructor(private toast:NgToastService, private formBuilder: UntypedFormBuilder,) {}

  ngOnInit(): void {
  }

  emailSubscription(item:any):void {
    if (item.classList.contains('ng-valid')) {
      this.toast.success({detail:"Success!", summary:"Your email has been added to our mail list", duration:3000});
      item.value = '';
    } else {
      this.toast.error({detail:"Error!", summary:"Please enter a valid email address", duration:3000});
    }
  }

}
