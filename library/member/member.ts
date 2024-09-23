import { Position } from "../types/position";
import { Size } from "../types/size";

export interface Member {
    id: string;
    size: Size;
    position: Position;
    content: any;
    style: Partial<CSSStyleDeclaration>;
}