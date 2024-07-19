import { ReportElement } from "../interfaces/Element-Protocol";
import { ParagraphProps } from "../types/props/Paragraph-Props";

export class ParagraphImplementation implements ReportElement {
    id: string = "PA";
    styles?: Partial<CSSStyleDeclaration> | undefined;
    content!: string | String;

    constructor (reportProps: ParagraphProps) {
        Object.keys(reportProps).forEach(k =>
            (this[k as keyof ParagraphImplementation] as any) = reportProps[k as keyof ParagraphProps]
        )
    }
}