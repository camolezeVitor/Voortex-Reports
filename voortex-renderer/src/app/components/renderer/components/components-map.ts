import { Type } from "@angular/core";
import { PageComponent } from "./page/page.component";

/**
 * @author camolezeVitor
 * 
 * this file "components-map.ts" is used for mapping every single implementation
 * on the voortex lib, for applying a component to be used on the renderer
 * 
 * for using it, you can add your own components in the voortex-renderer/configs
 */


const componentMap: Map<string, Type<any>> = new Map<string, Type<any>>();

// PAGE COMPONENT
componentMap.set("page", PageComponent);


export { componentMap as VoortexComponentsMap };

