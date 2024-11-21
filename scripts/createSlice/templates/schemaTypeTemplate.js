import firstCharUpperCase from "../firstCharUpperCase.js";

const schemaTypeTemplate = (
  sliceName
) => `export interface ${firstCharUpperCase(sliceName)}Schema {
    
}`;

export default schemaTypeTemplate;
