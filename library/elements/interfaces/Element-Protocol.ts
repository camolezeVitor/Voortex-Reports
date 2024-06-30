import { Position } from "../types/Position";
import { Size } from "../types/Size";

export interface Element {
    id: string;
    position: Position;
    size: Size;

    setElementDefaultProperties(element: unknown);
}