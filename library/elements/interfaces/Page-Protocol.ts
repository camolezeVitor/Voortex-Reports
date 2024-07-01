import { PageSize } from "../types/Page-Sizes";
import { Element } from "./Element-Protocol";

export interface Page extends Element {
    pageSize: PageSize;
    style?: Partial<CSSStyleDeclaration>;
}