import path from "path";

const resolveRoot = (...segments) =>
  path.resolve(import.meta.dirname, "..", "..", ...segments);

export default resolveRoot;
