import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DpsHeaderComponent } from './shared/components/dps-header/dps-header.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, DpsHeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app-19';

  translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
