import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsRoute} from "./settings.route";
import {RouterModule} from "@angular/router";
import {SettingsComponent} from "./settings.component";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoute),
    TranslateModule
  ]
})
export class SettingsModule { }
