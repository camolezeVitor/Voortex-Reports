import { ReportMember, ReportProps } from "../members/report-member";

export const createReport = (report: ReportProps) => {
    return new ReportMember(report);
}