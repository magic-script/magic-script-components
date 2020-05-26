import * as PropertyMappers from "../src/property-mappers";

PropertyMappers.allUndefined = jest.fn();

describe("PropertyMappers", () => {
  describe("getPropertyValue", () => {
    describe("if style is defined", () => {
      test("should return style based on provided name", () => {
        const properties = { style: { styleName: "styleNameValue" } };
        const result = PropertyMappers.getPropertyValue(
          properties,
          "styleName"
        );
        expect(result).toEqual("styleNameValue");
      });
    });
  });

  describe("mapBoundsSize", () => { 
    describe("when all values undefined", () => {
      test("should return undefined", () => {
        PropertyMappers.allUndefined.mockReturnValueOnce(undefined);
        const result = PropertyMappers.mapBoundsSize({});
        expect(result).toEqual(undefined);
      });
    });
  });

  describe("mapFontParameters", () => { 
    describe("when all values undefined", () => {
      test("should return undefined", () => {
        PropertyMappers.allUndefined.mockReturnValueOnce(undefined);
        const result = PropertyMappers.mapFontParameters({});
        expect(result).toEqual(undefined);
      });
    });
  });

  describe("mapProgressColor", () => { 
    describe("when all values undefined", () => {
      test("should return undefined", () => {
        PropertyMappers.allUndefined.mockReturnValueOnce(undefined);
        const result = PropertyMappers.mapProgressColor({});
        expect(result).toEqual(undefined);
      });
    });
  });
});
