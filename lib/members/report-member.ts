import { Member } from "../proto/member";
import { MemberWithoutId } from "../proto/member-without-id";

export type ReportProps = MemberWithoutId & {
    name: string;
    downloadable?: boolean;
    presetStyles?: Map<string, Partial<CSSStyleDeclaration>>
};

export class ReportMember implements Member {
    id: string = "REPORT";
    name: string;
    children: Array<Member>;
    styleSheet?: Partial<CSSStyleDeclaration>;
    downloadable?: boolean;
    presetStyles?: Map<string, Partial<CSSStyleDeclaration>>

    constructor(props: ReportProps) {
        this.children = props.children;
        this.styleSheet = props.styleSheet;
        this.name = props.name;
        this.downloadable = true || props.downloadable;
        this.presetStyles = props.presetStyles;
    }
}