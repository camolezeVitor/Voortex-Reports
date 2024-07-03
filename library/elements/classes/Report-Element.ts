import { Element } from "../interfaces/Element-Protocol";
import { Report } from "../interfaces/Report-Protocol";
import { ReportProps } from "../types/props/Report-Props";

export class ReportImplementation implements Report {
    name!: string | String | Symbol;
    canDownload: boolean = true;
    presetStyles?: unknown;
    content!: Array<Element>;

    constructor (reportProps: ReportProps) {
        Object.keys(reportProps).forEach(k =>
            (this[k as keyof ReportImplementation] as any) = reportProps[k as keyof ReportProps]
        )
    }
}