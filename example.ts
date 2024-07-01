import { Page, Paragraph, createReport } from "./library/core/Voortex-Core";

let report = createReport({
    name: "Example Report",
    content: [
        Page({pageSize: "A4",
            content: [
                Paragraph({content: "Teste"})
            ]
        })
    ]
});