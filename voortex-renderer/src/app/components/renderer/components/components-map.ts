import { Type } from "@angular/core";
import * as VOORTEXElements from "@voortex-modules";
import { PageComponent } from "./page/page.component";

/**
 * @author camolezeVitor
 * 
 * this file "components-map.ts" is used for mapping every single implementation
 * on the voortex lib, for applying a component to be used on the renderer
 */

const componentMap: Map<unknown, Type<any>> = new Map<unknown, Type<any>>();

// PAGE COMPONENT
componentMap.set(VOORTEXElements.PageElementImplementation, PageComponent);



export { componentMap as VoortexComponentsMap };
