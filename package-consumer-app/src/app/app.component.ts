import { Component } from '@angular/core';
import { LinkedPackage } from 'linked-package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
    const p = new LinkedPackage();
    // yes, that's a TS error from invalid type param.
    // the linked package is reading the .d.ts correctly.
    // p.test(2);
    p.test('from app component in consumer app');
  }
}
