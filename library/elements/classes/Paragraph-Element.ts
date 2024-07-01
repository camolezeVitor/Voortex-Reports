import { Element } from "../interfaces/Element-Protocol";
import { Paragraph } from "../interfaces/Paragraph-Protocol";
import { ParagraphProps } from "../types/props/Paragraph-Props";
import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";

export class ParagraphElementImplementation implements Paragraph, Element {
    id: string = "paragraph";
    position: Position;
    size: Size;
    
    content: String;
    styles: Partial<CSSStyleDeclaration>;

    constructor (paragraphProps: ParagraphProps) {
        Object.keys(paragraphProps).forEach(
            k => this[k as keyof ParagraphElementImplementation] = paragraphProps[k]
        );
    }
    
    setElementDefaultProperties(element: unknown): void {
    }

}