import { Component } from '@angular/core';
import { Element, Report } from "@voortex-modules";
import { REPORT } from "../../../example";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public report!: Report;

  constructor () {
    this.report = REPORT;
    setTimeout(() => {
      this.report.content.forEach(pageElement => {
        console.group(pageElement.id);
        (pageElement.content as Array<Element>).forEach(element => {
          element!.validationFunction!();
        })
        console.groupEnd();
      })
    }, 5000);
  }
}
