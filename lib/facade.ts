import { createReport } from "./factory/report.factory";
import { ReportProps } from "./members/report-member";

export const Report = (reportProps: ReportProps) => {
    return createReport(reportProps);
}