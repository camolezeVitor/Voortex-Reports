import { Element } from "./Element-Protocol";

export interface Section {
    styles: Partial<CSSStyleDeclaration>;
    content: Array<Element>;
}