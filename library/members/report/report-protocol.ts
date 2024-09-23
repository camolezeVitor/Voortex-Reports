export interface ReportProtocol {
    name: string;
    isDownloadable: boolean;
    memberStylesheet: Map<string, Map<string, Partial<CSSStyleDeclaration>>>
}