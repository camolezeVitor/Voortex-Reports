import { createReport, Page } from "./library/core/Voortex-Core";

let pessoas: Array<{nome: string, cpf: string}> = []

export const REPORT = createReport({
    name: "Relatorio com lista de Pessoas",
    content: [
        Page({pageSize: "A4", 
            style: {
                backgroundColor: "red",
            },
            content: [ 

            ]
        })
    ]
});