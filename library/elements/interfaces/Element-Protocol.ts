import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";

export interface Element {
    id: string;
    position: Position;
    size: Size;
    content: unknown | Array<Element> | Element;

    setElementDefaultProperties(element: unknown): void;
}