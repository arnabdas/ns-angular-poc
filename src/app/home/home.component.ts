import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoginEventData } from '../lib/ns-fb/login-event-data';
import { NavigationService } from "../services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private ref: ChangeDetectorRef, private navigationService: NavigationService) {
    // have to init after facebook sdk inited
    // setTimeout(() => {
    //     this.init();
    // }, 100);
  }

  ngOnInit(): void {
  }

  onLogin(eventData: LoginEventData) {
    if (eventData.error) {
        alert("Error during login: " + eventData.error);
    } else {
        appSettings.setString("access_token", eventData.loginResponse.token);
        this.navigationService.go(['items']);
    }
  }
}
