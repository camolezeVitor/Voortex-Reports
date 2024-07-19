import * as Elements from "./modules/Elements-Module";
import * as Props from "./modules/Props-Module";

export function createReport(props: Props.ReportProps): Elements.ReportImplementation {
    return new Elements.ReportImplementation(props);
}

export function Page(props: Props.PageProps): Elements.PageImplementation {
    return new Elements.PageImplementation(props);
}

export function Paragraph(props: Props.ParagraphProps): Elements.ParagraphImplementation {
    return new Elements.ParagraphImplementation(props);
}