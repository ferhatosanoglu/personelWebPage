import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/utils';

@Component({
  selector: 'app-client-header',
  templateUrl: './client-header.component.html',
  styleUrls: ['./client-header.component.scss']
})
export class ClientHeaderComponent implements OnInit {

  constructor(
    private _languageService: LanguageService
  ) { }

  lang: string =
    this._languageService.getLanguage() == 'en'
      ? 'us'
      : this._languageService.getLanguage() || 'tr';

  setLang(lang: string) {
    this.lang = lang == 'en' ? 'us' : lang;
    this._languageService.setLanguage(lang);
  }
  ngOnInit(): void { };

}
