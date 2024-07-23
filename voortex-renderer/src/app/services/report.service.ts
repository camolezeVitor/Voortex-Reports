import { Injectable, signal } from "@angular/core";
import { RenderableReportElement } from "../elements/base/renderable-element-protocol";
import { RenderableReport } from "../elements/report-model";

@Injectable({
    providedIn: "root"
})
export class ReportService {
    public report = signal<null | RenderableReport>(null);

    constructor() {
    }

    //ACCESS ELEMENT ===========================================
    accessElementByPath(path: string) {
        const pathParts = path.split("-");
        return this.findRecursively(this.report()!, pathParts);
    }

    private findRecursively(element: RenderableReportElement | RenderableReport, pathway: Array<string>, previousElementPath?: string): RenderableReportElement | RenderableReport | void {
        
        if (pathway.length == 0) return element;

        if (typeof element.content != "object") return element;

        let currentPath = pathway[0];
        if(previousElementPath) {
            pathway = pathway.slice(1);
            currentPath = previousElementPath.concat("-"+pathway[0]);
        }

        const nextElement = ((element.content as Map<string, RenderableReportElement>).get(currentPath) as any);

        if (!nextElement) return element;

        return this.findRecursively(nextElement(), pathway, currentPath);
    }
    //ACCESS ELEMENT ===========================================
}