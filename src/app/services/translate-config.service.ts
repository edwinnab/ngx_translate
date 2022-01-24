import { Injectable } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translateService: TranslateService) {
    this.translateService.use('en'); //sets the default language translation file
  }
  //allows the option of choosing different languages
  changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
