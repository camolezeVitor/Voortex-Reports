import { signal, WritableSignal } from "@angular/core";
import { ReportImplementation } from "@voortex-modules";
import { ReportState } from "../states/report-state";
import { RenderableReportElement } from "./base/renderable-element-protocol";
import { ReportElementFactory } from "./factory/element-strategy-factory";

export class RenderableReport {
    name!: string | String | Symbol;
    canDownload!: boolean;
    presetStyle!: unknown;
    reportState!: ReportState;
    content: Map<string, WritableSignal<RenderableReportElement>> = new Map<string, WritableSignal<RenderableReportElement>>();

    constructor(report: ReportImplementation) {
        this.name = report.name;
        this.canDownload = report.canDownload || true;
        this.presetStyle = report.presetStyles || null;
        this.reportState = ReportState.RENDERING;
        report.content.forEach((element, _) => {
            const path: string = `${element.id}[${_}]`;
            this.content.set(path, signal(ReportElementFactory.convertToRenderable(element, this, path)))
        });
    }
}