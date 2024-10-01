import { createPage } from "./factory/page.factory";
import { createParagraph } from "./factory/paragraph.factory";
import { createReport } from "./factory/report.factory";
import { PageProps } from "./members/page-member";
import { ParagraphProps } from "./members/paragraph-member";
import { ReportProps } from "./members/report-member";

export const Report = (reportProps: ReportProps) => {
    return createReport(reportProps);
}

export const Page = (pageProps: PageProps) => {
    return createPage(pageProps);
}

export const Paragraph = (paragraphProps: ParagraphProps) => {
    return createParagraph(paragraphProps);
}