import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("pr-list");
      const athletesCollection = await db
        .collection("athletes")
        .find({})
        .toArray();
      res.status(200).json(athletesCollection);
    } catch (error) {
      console.error("Failed to fetch athletes:", error);
      res.status(500).json({ error: "Failed to fetch athletes" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
