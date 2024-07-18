import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { ParagraphElementImplementation } from "@voortex-modules";
import { RenderableComponentImplementation } from "../base/base.component";

@Component({
    selector: "app-paragraph",
    templateUrl: "paragraph.component.html",
})
export class ParagraphComponent extends RenderableComponentImplementation implements AfterContentInit, AfterViewInit {
    shownText: string | null = null;
    @ViewChild("test") testDiv!: ElementRef;

    ngAfterContentInit(): void {
        this.shownText = this.content?.content as string;
        this.setValidationFunction(this.validateParagraph);
    }

    ngAfterViewInit(): void {
        (this.content as ParagraphElementImplementation).lineHeigth = this.testDiv.nativeElement.offsetHeight;
        this.testDiv.nativeElement.remove();
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

        //Font -> Times new Roman
        //FontSize -> 16

        console.group("Validation");
        //Utilizado para saber o Tamanho em Y restante para a folha branca
        const remainingFatherSpace = paragraph.fatherSize!.ySize - (paragraph.position.y - paragraph.fatherPosition!.y);
        console.log(remainingFatherSpace); // 512
        const mediumCharHeight = 1.2 * paragraph.paragraphSpecs.fontSize;
        const mediumCharWidth = 0.6 * paragraph.paragraphSpecs.fontSize; 
        const quantityOfCharsInALine = paragraph.size.xSize/mediumCharWidth;
        console.log("mediumCharHeight", mediumCharHeight); //19.2
        console.log("mediumCharWidth", mediumCharWidth); //9.6
        console.log("quantityOfCharsInALine", quantityOfCharsInALine); //82.708...
        console.log("quantidade de linhas restantes permitidas", remainingFatherSpace/mediumCharHeight); // 26.614583333333336

        console.groupEnd();
        return true;
    }
}