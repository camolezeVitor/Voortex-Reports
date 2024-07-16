import { NgModule } from "@angular/core";
import { PageComponent } from "./renderable/page/page.component";
import { SelectorComponent } from "./selector/selector.component";

@NgModule({
    declarations: [
        SelectorComponent,
        PageComponent
    ],
    exports: [
        SelectorComponent
    ]
})
export class ComponentsModule {}