import { ReportElement } from "../../interfaces/Element-Protocol";

export type ReportProps = {
    name: string | String | Symbol;
    content: Array<ReportElement>;
    canDownload?: boolean;
    presetStyles?: unknown;
};