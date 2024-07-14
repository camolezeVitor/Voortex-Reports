import { Size } from "@voortex-modules";

export const getPageSize = (pageSize: string): Size => {
    switch(pageSize) {
        case "A0":
            return { xSize: 841, ySize: 1189 };
        case "A1":
            return { xSize: 594, ySize: 841 };
        case "A2":
            return { xSize: 420, ySize: 594 };
        case "A3":
            return { xSize: 297, ySize: 420 };
        case "A4":
            return { xSize: 210, ySize: 297 };
        case "A5":
            return { xSize: 148, ySize: 210 };
        case "A6":
            return { xSize: 105, ySize: 148 };
        case "A7":
            return { xSize: 74, ySize: 105 };
        case "A8":
            return { xSize: 52, ySize: 74 };
        case "A9":
            return { xSize: 37, ySize: 52 };
        case "A10":
            return { xSize: 26, ySize: 37 };
        default:
            return { xSize: 0, ySize: 0 };
    }
}