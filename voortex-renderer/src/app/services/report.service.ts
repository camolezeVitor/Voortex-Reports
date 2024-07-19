import { Injectable, signal } from "@angular/core";
import { RenderableReport } from "../elements/report-model";

@Injectable({
    providedIn: "root"
})
export class ReportService {
    public report = signal<null | RenderableReport>(null);
}