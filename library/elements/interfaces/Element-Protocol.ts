import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";

export interface Element {
    id: string;
    position: Position;
    size: Size;

    setElementDefaultProperties(element: unknown): void;
}