import { Member } from "../proto/member";
import { MemberWithoutId } from "../proto/member-without-id";

export type ParagraphProps = MemberWithoutId & {};

export class ParagraphMember implements Member {
    id: string = "PARAGRAPH";
    children: string;
    styleSheet?: Partial<CSSStyleDeclaration> | undefined;

    constructor(paragraphProps: ParagraphProps) {
        this.children = paragraphProps.children;
        this.styleSheet = paragraphProps.styleSheet;
    }
}