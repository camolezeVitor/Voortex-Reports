import { NgModule } from "@angular/core";
import { SelectorComponent } from "./selector/selector.component";

@NgModule({
    declarations: [
        SelectorComponent
    ],
    exports: [
        SelectorComponent
    ]
})
export class ComponentsModule {}