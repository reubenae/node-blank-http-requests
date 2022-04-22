import * as axios from "axios";
import {blank, getEstimatedAgeFromName} from "./blank";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

describe("blank", () => {
    it("returns length of input", () => {
        const input = "2-9 c: ccccccccc";
        const answer = blank(input);
        expect(blank(["1", "2"])).toEqual(2);
    });

    it("check mocking works", async () => {
        axios.get.mockResolvedValue({ data: "toto" });
        const response = await getEstimatedAgeFromName('test');
        expect(response).toEqual("toto");
    })
});