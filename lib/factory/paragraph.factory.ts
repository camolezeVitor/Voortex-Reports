import { ParagraphMember, ParagraphProps } from "../members/paragraph-member";

export const createParagraph = (paragraphProps: ParagraphProps) => {
    return new ParagraphMember(paragraphProps);
}