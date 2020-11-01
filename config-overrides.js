import { injectBabelPlugin } from "react-app-rewired";

const rootImportConfig = [
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSuffix: "src",
  },
];

export default injectBabelPlugin(rootImportConfig);
