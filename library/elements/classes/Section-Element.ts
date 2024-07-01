import { Element } from "../interfaces/Element-Protocol";
import { Section } from "../interfaces/Section-Protocol";
import { SectionProps } from "../types/props/Section-Props";
import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";

export class SectionElementImplementation implements Section, Element {
    id: string;
    position: Position;
    size: Size;

    content: Array<Element>;
    styles?: Partial<CSSStyleDeclaration>;

    constructor(sectionProps: SectionProps) {
        Object.keys(sectionProps).forEach(k =>
            this[k as keyof SectionElementImplementation] = sectionProps[k]
        )
    }

    setElementDefaultProperties(element: unknown): void {
    }
}