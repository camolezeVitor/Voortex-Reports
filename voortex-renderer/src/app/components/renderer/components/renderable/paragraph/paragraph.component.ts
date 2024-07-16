import { AfterContentInit, Component } from "@angular/core";
import { ParagraphElementImplementation } from "@voortex-modules";
import { RenderableComponentImplementation } from "../base/base.component";

@Component({
    selector: "app-paragraph",
    templateUrl: "paragraph.component.html",
})
export class ParagraphComponent extends RenderableComponentImplementation implements AfterContentInit {
    shownText: string | null = null;

    ngAfterContentInit(): void {
        this.shownText = this.content?.content as string;
        this.setValidationFunction(this.validateParagraph);
    }

    //Validation

    validateParagraph() {
        // Esse this as any é um caso interessante, como o TS salva essa função aqui 
        // no escopo do objeto, ao chamar THIS acaba chamando o objeto e não essa implementação em
        // componente, por isso tem que se settar como o objeto
        let paragraph: ParagraphElementImplementation = (this as any);

        const checkIfTheresEverythingForValidation = (): boolean => {
            if (!(
                paragraph.size && paragraph.position &&
                paragraph.fatherPosition && paragraph.fatherSize
            )) {
                console.error("Not all content set for validation in " + paragraph.id);
                return false;
            }
            return true;
        }

        if (!checkIfTheresEverythingForValidation()) return false;

        const validateIfIsNecessaryBreakingText = () => {
            if (paragraph.position.y + paragraph.size.ySize > paragraph.fatherPosition!.y + paragraph.fatherSize!.ySize) {
                return true;
            }
            return false;
        }
        
        if (!validateIfIsNecessaryBreakingText()) return false;

        console.log("É necessário quebrar o texto!");
        
        return true;
    }
}