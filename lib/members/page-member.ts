import { Member } from "../proto/member";
import { NonIdMember } from "../proto/non-id-member";

export type PageProps = NonIdMember & {};

export class PageMember implements Member {
    id: string = "PAGE";
    children: Array<Member>;
    styleSheet?: Partial<CSSStyleDeclaration> | undefined;

    constructor (props: PageProps) {
        this.children = props.children;
        this.styleSheet = props.styleSheet;
    }
}