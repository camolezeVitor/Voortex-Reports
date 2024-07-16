import { Element } from "../interfaces/Element-Protocol";
import { Paragraph } from "../interfaces/Paragraph-Protocol";
import { ParagraphProps } from "../types/props/Paragraph-Props";
import { Position } from "../types/shared/Position";
import { Size } from "../types/shared/Size";

type ParagraphSpecs = {
    fontSize: number;
}

export class ParagraphElementImplementation implements Paragraph, Element {
    id: string = "paragraph";
    position!: Position;
    size!: Size;
    paragraphSpecs!: ParagraphSpecs;
    fatherSize?: Size | undefined;

    content!: String;
    styles?: Partial<CSSStyleDeclaration>;

    constructor (paragraphProps: ParagraphProps | string) {
        if (typeof paragraphProps == 'string') {
            this.content = paragraphProps;
        } else {
            Object.keys(paragraphProps).forEach(
                k => (this[k as keyof ParagraphElementImplementation] as any) = paragraphProps[k as keyof ParagraphProps]
            );
        }
    }

    removeAnyCharactersInProperties(value: string): string {
        return value.replace(RegExp(/[A-z]/g), '');
    }
    
    setElementDefaultProperties(element: any): void {
        const getParentOffset = () => {
            const { offsetWidth, offsetHeight } = element.parentElement.parentElement;
            return { offsetWidth, offsetHeight };
        };
        const { offsetHeight: fatherOffsetHeight, offsetWidth: fatherOffsetWidth} = getParentOffset();

        const computedStyle = getComputedStyle(element);
        const { offsetWidth, offsetHeight } = element;

        let specs: ParagraphSpecs = {
            fontSize: Number(this.removeAnyCharactersInProperties(computedStyle.getPropertyValue("font-size")))
        }
        this.fatherSize = { xSize: fatherOffsetWidth, ySize: fatherOffsetHeight };
        this.size = { xSize: offsetWidth, ySize: offsetHeight };
        this.paragraphSpecs = specs;
    }

}