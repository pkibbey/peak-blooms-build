import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText, Output } from "ai";

async function main() {
  const lmstudio = createOpenAICompatible({
    name: "lmstudio",
    baseURL: process.env.LM_STUDIO_URL || "http://127.0.0.1:1234/v1",
  });
  const prompt = `Convert the following commit summary into a DayMetadata JSON object for date 2025-11-22.

Commit summary:
- Add UI button component and utility functions (Phineas Kibbey)
- Initial commit from Create Next App

Constraints:
- Return a single JSON object only (no explanation)
- title should be concise (3-6 words) and derived from the commits
- tasks should be an array of 1-3 actionable one-sentence descriptions
- skillsUsed should be short tags (e.g., Authentication, Testing)
- impact should be a short sentence describing why the work matters (optional)
- theme should be one of: foundation, core-features, data-architecture, performance-quality
- screenshot should be /screenshots/2025-11-22.png
- date should be 2025-11-22
`;

  try {
    const res = await generateText({
      model: lmstudio("llama-3.2-1b"),
      prompt,
      temperature: 0.2,
      maxRetries: 0,
    });
    console.log("Result text:\n", res.text);
  } catch (err) {
    console.error("Error:", err?.message || err);
    try {
      if (err?.response)
        console.error("Response:", JSON.stringify(err.response, null, 2));
    } catch (e) {}
    try {
      if (err?.body) console.error("Body:", err.body);
    } catch (e) {}
  }
}

main().catch(console.error);
