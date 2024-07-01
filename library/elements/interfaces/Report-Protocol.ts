import { Element } from "./Element-Protocol";

export interface Report {
    name: string | String | Symbol;
    canDownload?: boolean;
    presetStyles?: unknown; //Later i will change this
    content: Array<Element>;
}