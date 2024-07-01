import { Element } from "../interfaces/Element-Protocol";
import { Page } from "../interfaces/Page-Protocol";
import { PageSize } from "../types/Page-Sizes";
import { PageProps } from "../types/props/Page-Props";
import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";
 
class PageElementImplementation implements Page, Element {
    id: string = "page";
    position: Position;
    size: Size;

    content: Array<Element>;
    style?: Partial<CSSStyleDeclaration>;
    pageSize: PageSize;

    constructor(pageProps: PageProps) {
        Object.keys(pageProps).forEach(
            k => this[k as keyof PageElementImplementation] = pageProps[k]
        );
    }

    setElementDefaultProperties(element: unknown) {
        
    }
}