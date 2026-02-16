import { searchContent } from "@/data/searchIndex";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const query = typeof req.query.q === "string" ? req.query.q : "";
  const results = searchContent(query).slice(0, 25);

  return res.status(200).json({
    query,
    count: results.length,
    results,
  });
}
