import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RenderablePageComponent } from "./page/page.component";
import { RenderableParagraphComponent } from "./paragraph/paragraph.component";
import { RenderNodeComponent } from "./render-node/render-node.component";

@NgModule({
    declarations: [
        RenderNodeComponent,

        RenderableParagraphComponent,
        RenderablePageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RenderNodeComponent,

        RenderableParagraphComponent,
        RenderablePageComponent
    ]
})
export class RenderableComponentsModule {}