import { ReportProtocol } from "./report-protocol";
import { Member } from "../../member/member";

export class ReportImpl implements ReportProtocol, Member {

    id: string;
    name: string;
    isDownloadable: boolean;
    memberStylesheet: Map<string, Map<string, Partial<CSSStyleDeclaration>>>;

    constructor(
        props: ReportProtocol,
    ) {
        this.id = "REPORT",
        this.name = props.name;
        this.isDownloadable = props.isDownloadable;
        this.memberStylesheet = props.memberStylesheet;
    }
}