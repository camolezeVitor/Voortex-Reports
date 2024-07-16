import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";

export interface Element {
    id: string;
    position: Position;
    size: Size;
    fatherSize?: Size;
    content: unknown | Array<Element> | Element;
    validationFunction?: Function | null;

    setElementDefaultProperties(element: unknown): void;
}