import { RenderableReportElement } from "../../elements/base/renderable-element-protocol";

const convertToRenderableComponent = (renderableElement: RenderableReportElement) => {
    const elementId = renderableElement.id;

    switch (elementId) {
        case "PG": 
            return;
        case "PA": 
            return;
        default:
            throw Error(`Trying to render [${elementId}], but there is no "${elementId}" implemented in "renderable-component-list.ts"`);
    }
} 