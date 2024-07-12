import { createReport } from "./library/core/Voortex-Core";

let pessoas: Array<{nome: string, cpf: string}> = []

export const REPORT = createReport({
    name: "Relatorio com lista de Pessoas",
    content: [

    ]
});