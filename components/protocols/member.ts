import { EventEmitter } from "@angular/core";
import { TwoCoordinatesElement } from "../types/two-coordinates-element";

export interface MemberComponentProtocol {

    content: any;
    size: TwoCoordinatesElement;
    position: TwoCoordinatesElement;
    father: MemberComponentProtocol;
    validationInfos: any;
    nextEmmiter: EventEmitter<any>;

    renderTest(): void;
    storeInfo(): void;
    validate(): void;
    break(): void;
    emitSlice(): void;
    renderChildren(): void;
    next(): void;

}