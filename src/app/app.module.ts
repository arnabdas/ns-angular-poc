import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import * as application from 'tns-core-modules/application';
import { NativeScriptFacebookModule } from './lib/ns-fb/nativescript-facebook-module';
import { init } from './lib/ns-fb/login-manager.android';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { HomeComponent } from './home/home.component';

application.on(application.launchEvent, function (args) {
  init("505516837245335");
});

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFacebookModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, HomeComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
