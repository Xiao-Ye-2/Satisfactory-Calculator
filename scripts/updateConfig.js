const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const util = require("util");
const execPromise = util.promisify(exec);

const yamlDir = path.join(__dirname, "..", "data");
const configDir = path.join(__dirname, "..", "src", "config");

exec("python scripts/recipeValidator.py", (error, stdout, stderr) => {
  if (error) {
    console.error(`验证错误: ${error}`);
    return;
  }
  console.log(`验证输出: ${stdout}`);

  if (stderr) {
    console.error(`验证错误: ${stderr}`);
    return;
  }

  ["products.yaml", "recipes.yaml", "machines.yaml"].forEach((file) => {
    const yamlPath = path.join(yamlDir, file);
    const jsonPath = path.join(configDir, file.replace(".yaml", ".json"));

    try {
      const yamlContent = fs.readFileSync(yamlPath, "utf8");
      const jsonContent = yaml.load(yamlContent);
      fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
      console.log(`已更新 ${jsonPath}`);
    } catch (err) {
      console.error(`处理 ${file} 时出错:`, err);
    }
  });
});

async function updateTranslations(items, recipes, machines) {
  const enTranslations = {};
  const zhTranslations = {};

  const enDefaultPath = path.join(__dirname, "../src/locales/en/default.json");
  const zhDefaultPath = path.join(__dirname, "../src/locales/zh/default.json");

  const enDefault = JSON.parse(fs.readFileSync(enDefaultPath, "utf8"));
  const zhDefault = JSON.parse(fs.readFileSync(zhDefaultPath, "utf8"));

  // Add translations for items, recipes, and machines
  items.forEach((item) => {
    enTranslations[item.id] = item.name;
  });

  recipes.forEach((recipe) => {
    enTranslations[recipe.id] = recipe.name;
  });

  machines.forEach((machine) => {
    enTranslations[machine.id] = machine.name;
  });

  // Override with default translations
  const finalEnTranslations = { ...enTranslations, ...enDefault };

  const enPath = path.join(__dirname, "../src/locales/en/final.json");
  const zhPath = path.join(__dirname, "../src/locales/zh/final.json");

  fs.writeFileSync(enPath, JSON.stringify(finalEnTranslations, null, 2));

  // Use translate.py to generate Chinese translations
  try {
    await execPromise(
      `python ${path.join(__dirname, "translate.py")} ${enPath} ${zhPath}`,
    );
    console.log("Translation files have been updated");
    const generatedZhTranslations = JSON.parse(fs.readFileSync(zhPath, "utf8"));
    // Override with default Chinese translations
    const finalZhTranslations = {
      ...generatedZhTranslations,
      ...zhDefault,
    };

    // Write the final Chinese translations back to the file
    fs.writeFileSync(zhPath, JSON.stringify(finalZhTranslations, null, 2));

    console.log("Chinese translations have been updated with defaults");
  } catch (error) {
    console.error("Error during translation:", error);
  }
}

async function loadYamlFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    return yaml.load(fileContents);
  } catch (error) {
    console.error(`Error loading YAML file ${filePath}:`, error);
    throw error;
  }
}

async function main() {
  try {
    const items = await loadYamlFile("../data/products.yaml");
    const recipes = await loadYamlFile("../data/recipes.yaml");
    const machines = await loadYamlFile("../data/machines.yaml");

    await updateTranslations(items, recipes, machines);

    console.log(
      "Configuration and translation files have been successfully updated",
    );
  } catch (error) {
    console.error("Error updating configuration:", error);
  }
}

main();
