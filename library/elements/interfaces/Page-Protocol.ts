import { PageSize } from "../types/Page-Sizes";

export interface Page {
    pageSize: PageSize;
    style?: Partial<CSSStyleDeclaration>;
}