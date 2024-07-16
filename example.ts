import { createReport, Page, Paragraph } from "./library/core/Voortex-Core";

let pessoas: Array<{nome: string, cpf: string}> = []

export const REPORT = createReport({
    name: "Relatorio com lista de Pessoas",
    content: [
        Page({pageSize: "A4", 
            content: [ 
                Paragraph({
                    style: {
                        fontSize: "22px",
                        padding: "20px"
                    },
                    content: "Lorem ipsum dolor sit amet, consectetur"
                }),
                Paragraph("Paragrafo teste contendo diversas coisas interessantes que contem mais de um tamanho desejado, Paragrafo teste contendo diversas coisas interessantes que contem mais de um tamanho desejado, Paragrafo teste contendo diversas coisas interessantes que contem mais de um tamanho desejado, Paragrafo teste contendo diversas coisas interessantes que contem mais de um tamanho desejado, Paragrafo teste contendo diversas coisas interessantes que contem mais de um tamanho desejado, Paragrafo teste contendo diversas coisas interessantes que contem mais de um tamanho desejado, ")
            ],
        }),
    ]
});