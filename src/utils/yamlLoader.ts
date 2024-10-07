import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export const loadYAMLFile = (fileName: string) => {
  const filePath = path.join(process.cwd(), "src/data/yaml", fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  return yaml.load(fileContents);
};
