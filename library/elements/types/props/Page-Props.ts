import { ReportElement } from "../../interfaces/Element-Protocol"
import { PageSize } from "../utils/Page-Sizes"

export type PageProps = {
    pageSize: PageSize
    content: Array<ReportElement>
    style?: Partial<CSSStyleDeclaration>
}