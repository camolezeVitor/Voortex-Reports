import { Component } from '@angular/core';
import { Report } from "@voortex-modules";
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
  }
}
