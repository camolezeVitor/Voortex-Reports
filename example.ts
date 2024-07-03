import { Page, Paragraph, createReport } from "./library/core/Voortex-Core";

export const REPORT = createReport({
    name: "Saúde de Luiz Ricardo Begosso",
    content: [
        Page({pageSize: "A4",
            content: [
                Paragraph({content: "Teste"})
            ]
        })
    ]
});