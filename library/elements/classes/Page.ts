import { ReportElement } from "../interfaces/Element-Protocol";
import { PageProps } from "../types/props/Page-Props";
import { PageSize } from "../types/utils/Page-Sizes";

export class PageImplementation implements ReportElement {
    id: string = "PG";
    pageSize!: PageSize;
    styles?: Partial<CSSStyleDeclaration> | undefined;
    content!: Array<ReportElement>;

    constructor (reportProps: PageProps) {
        Object.keys(reportProps).forEach(k =>
            (this[k as keyof PageImplementation] as any) = reportProps[k as keyof PageProps]
        )
    }
}