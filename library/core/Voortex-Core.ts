import { ReportImplementation } from "../elements/classes/Report-Element";
import { Report } from "../elements/interfaces/Report-Protocol";
import { ReportProps } from "../elements/types/props/Report-Props";
import * as Elements from "./modules/Elements-Module";
import * as Props from "./modules/Props-Module";
import * as Protocols from "./modules/Protocols-Module";

export function createReport(props: ReportProps): Report {
    return new ReportImplementation(props);
}

export function Page(props: Props.PageProps): Protocols.Element {
    return new Elements.PageElementImplementation(props);
}

export function Paragraph(props: Props.ParagraphProps): Protocols.Element {
    return new Elements.ParagraphElementImplementation(props);
}

export function Section(props: Props.SectionProps): Protocols.Element {
    return new Elements.SectionElementImplementation(props);
}