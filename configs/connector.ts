import { Type } from "@angular/core"

type ConnectorType = Array<{id: string, component: Type<any>}>

export const COMPONENT_TO_LIB_CONNECTOR: ConnectorType = [];