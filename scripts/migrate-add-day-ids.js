import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const filePath = path.resolve(
  process.cwd(),
  "src/components/dates-metadata.ts",
);
const dryRun = process.argv.includes("--dry-run");

async function run() {
  const original = await fs.readFile(filePath, "utf8");

  const daysBlockRegex =
    /(export const daysMetadata: DayMetadata\[\] = \[)([\s\S]*?)(\];\n)/;
  const match = original.match(daysBlockRegex);

  if (!match) {
    console.error("Could not find daysMetadata block in file. Aborting.");
    process.exit(1);
  }

  const prefix = match[1];
  const block = match[2];
  const suffix = match[3];

  let replacements = 0;
  const newBlock = block.replace(/id:\s*(?:"|')(.*?)(?:"|')/g, () => {
    replacements++;
    return `id: "${uuidv4()}"`;
  });

  if (replacements === 0) {
    console.log("No id fields found in daysMetadata to replace.");
    return;
  }

  const updated = original.replace(
    daysBlockRegex,
    `${prefix}${newBlock}${suffix}`,
  );

  if (dryRun) {
    console.log("--dry-run enabled. The file will NOT be modified.");
    console.log("Replacements to be made:", replacements);

    // Show a small diff-like preview of the first few replacements
    const beforeIds = Array.from(block.matchAll(/id:\s*(?:"|')(.*?)(?:"|')/g))
      .slice(0, 10)
      .map((m) => m[1]);
    const afterIds = Array.from(newBlock.matchAll(/id:\s*(?:"|')(.*?)(?:"|')/g))
      .slice(0, 10)
      .map((m) => m[1]);

    console.log("Preview (first 10):");
    for (let i = 0; i < beforeIds.length; i++) {
      console.log(`- ${beforeIds[i]} -> ${afterIds[i]}`);
    }

    return;
  }

  await fs.writeFile(filePath, updated, "utf8");
  console.log(`Replaced ${replacements} id(s) in ${filePath}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
