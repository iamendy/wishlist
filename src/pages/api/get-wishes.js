import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { user } = req.query;

    try {
      const list = await prisma.wishlist.findMany({
        where: {
          userId: parseInt(user),
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json({ list });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
