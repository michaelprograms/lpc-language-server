import { DriverType } from "../backend/LpcConfig";
import { getParser } from "./test-utils";

describe("Test", () => {
    beforeAll(() => {});

    it("Should pass", () => {
        expect(1).toBe(1);
    });

    it("Should parse LDMud syntax", () => {
        const parser = getParser("ldmud.c", DriverType.LDMud);

        const tree = parser.program();
        expect(tree).toBeDefined();
        expect(tree.children.length).toBeGreaterThan(0);
    });

    it("Should parse FluffOS syntax", () => {
        const parser = getParser("fluffos.c", DriverType.FluffOS);

        const tree = parser.program();
        expect(tree).toBeDefined();
        expect(tree.children.length).toBeGreaterThan(0);
    });
});
