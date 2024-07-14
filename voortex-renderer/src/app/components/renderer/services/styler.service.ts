import { Injectable } from "@angular/core";
import { RenderableComponentImplementation } from "../components/renderable/base/base.component";

@Injectable({
    providedIn: "root"
})
export class StylerService {
    
    public styleComponent(component: RenderableComponentImplementation, style: Partial<CSSStyleDeclaration>) {
        if (!style.display) {
            this.setDisplayPropertyOnBlock(component);
        }

        Object.keys(style).forEach(key => component.nativeElement['style'][key] = style[key as keyof Partial<CSSStyleDeclaration>]);
        console.log(component);
    }

    private setDisplayPropertyOnBlock(component: RenderableComponentImplementation) {
        component.nativeElement['style']['display'] = "block";
    }
}