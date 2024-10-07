import type { NextApiRequest, NextApiResponse } from "next";
import { Translate } from "@google-cloud/translate/build/src/v2";

const translate = new Translate({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { text, targetLanguage } = req.body;

    try {
      const [translation] = await translate.translate(text, targetLanguage);
      res.status(200).json({ translation });
    } catch (error) {
      console.error("Translation error:", error);
      res.status(500).json({ error: "Translation failed" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
