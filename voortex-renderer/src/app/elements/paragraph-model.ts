import { ParagraphImplementation } from "@voortex-modules";
import { ReportElementState } from "../states/report-element.state";
import { RenderableReportElement } from "./base/renderable-element-protocol";
import { ElementSpecs } from "./base/specs-type";

export class RenderableParagraph implements RenderableReportElement {
    renderedElementUuid!: string;
    elementState!: ReportElementState;
    elementSpecs!: ElementSpecs;
    id!: string;
    styles?: Partial<CSSStyleDeclaration> | undefined;
    content?: string | String;
    fatherElement!: RenderableReportElement;
    path!: string;

    constructor(paragraph: ParagraphImplementation, fatherElement: RenderableReportElement, path: string) {
        this.renderedElementUuid = crypto.randomUUID();
        this.elementState = ReportElementState.RENDER_TEST;
        this.styles = paragraph.styles;
        this.id = paragraph.id
        this.content = paragraph.content;
        this.fatherElement = fatherElement;
        this.path = path;
    }

}