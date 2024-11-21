import fs from "fs";
import resolveRoot from "../resolveRoot.js";
import createModel from "./createModel.js";
import createUI from "./createUI.js";
import createPublicApi from "./createPublicApi.js";

const createTemplate = async (layer, sliceName) => {
  const slicePath = resolveRoot("src", layer, sliceName);

  try {
    console.log(slicePath, ' slicePath')
    await fs.mkdir(slicePath, { recursive: true });
  } catch (e) {
    console.log(`не удалось создать директорию для слайса${sliceName}`);
  }

  // await createModel(layer, sliceName);
  // await createUI(layer, sliceName);
  // await createPublicApi(layer, sliceName);
};

export default createTemplate;
