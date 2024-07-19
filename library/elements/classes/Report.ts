import { ReportElement } from "@voortex-modules";
import { ReportProps } from "../types/props/Report-Props";

export class ReportImplementation implements ReportProps {
    name!: string | String | Symbol;
    canDownload: boolean = true;
    presetStyles?: unknown;
    content!: Array<ReportElement>;

    constructor (reportProps: ReportProps) {
        Object.keys(reportProps).forEach(k =>
            (this[k as keyof ReportImplementation] as any) = reportProps[k as keyof ReportProps]
        )
    }
}