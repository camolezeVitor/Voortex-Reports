import { PageSize } from "../types/Page-Sizes";
import { Element } from "./Element-Protocol";

export interface Page {
    pageSize: PageSize;
    content: Array<Element>;
    style?: Partial<CSSStyleDeclaration>;
}