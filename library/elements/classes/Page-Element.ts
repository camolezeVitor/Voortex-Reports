import { Element } from "../interfaces/Element-Protocol";
import { Page } from "../interfaces/Page-Protocol";
import { PageSize } from "../types/Page-Sizes";
import { Position } from "../types/Position";
import { Size } from "../types/Size";

type PageProps = Page;

class PageElementImplementation implements Element, Page {
    id: string = "page";
    position: Position;
    size: Size;

    style?: Partial<CSSStyleDeclaration>;
    pageSize: PageSize;

    constructor(pageProps) {

    }

    setElementDefaultProperties(element: unknown) {
        
    }
}