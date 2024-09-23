import { ReportImpl } from "./report";
import { ReportProtocol } from "./report-protocol";

export const Report = (props: ReportProtocol) => {
    return new ReportImpl(props);
}