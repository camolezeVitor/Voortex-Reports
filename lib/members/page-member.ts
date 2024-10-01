import { Member } from "../proto/member";
import { MemberWithoutId } from "../proto/member-without-id";

export type PageProps = MemberWithoutId & {};

export class PageMember implements Member {
    id: string = "PAGE";
    children: Array<Member>;
    styleSheet?: Partial<CSSStyleDeclaration> | undefined;

    constructor (props: PageProps) {
        this.children = props.children;
        this.styleSheet = props.styleSheet;
    }
}