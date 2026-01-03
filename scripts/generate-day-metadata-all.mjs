import { exec as _exec } from "child_process";
import fs from "fs/promises";
import { promisify } from "util";

const exec = promisify(_exec);

async function main() {
  const dir = "commits-by-date";
  let files;
  try {
    files = await fs.readdir(dir);
  } catch (err) {
    console.error(`Failed to read directory ${dir}:`, err.message || err);
    process.exit(1);
  }

  files = files.filter((f) => f.endsWith(".json")).sort();
  if (files.length === 0) {
    console.log("No commit files found in commits-by-date/");
    return;
  }

  let totalAdded = 0;
  let totalUpdated = 0;
  let processed = 0;
  const failures = [];

  for (const file of files) {
    const filePath = `${dir}/${file}`;
    process.stdout.write(`Processing ${file}... `);
    try {
      const { stdout, stderr } = await exec(
        `node scripts/generate-day-metadata.mjs ${filePath}`,
      );
      // capture the summary line
      const match = stdout.match(
        /Wrote (\d+) added, (\d+) updated entries to .*$/m,
      );
      if (match) {
        const added = parseInt(match[1], 10);
        const updated = parseInt(match[2], 10);
        totalAdded += added;
        totalUpdated += updated;
        processed++;
        process.stdout.write(`OK (added ${added}, updated ${updated})\n`);
      } else {
        // If no match, print whole stdout for debugging and mark failure
        process.stdout.write(`Unexpected output\n`);
        console.error(stdout);
        if (stderr) console.error(stderr);
        failures.push({ file, reason: "Unexpected output" });
      }
    } catch (err) {
      process.stdout.write(`Failed\n`);
      console.error(`Error processing ${file}:`, err.message || err);
      failures.push({ file, reason: err.message || err });
    }
  }

  console.log("---");
  console.log(`Files processed: ${processed}/${files.length}`);
  console.log(`Total added: ${totalAdded}`);
  console.log(`Total updated: ${totalUpdated}`);
  if (failures.length) {
    console.log(`Failures: ${failures.length}`);
    for (const f of failures) {
      console.log(` - ${f.file}: ${f.reason}`);
    }
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
