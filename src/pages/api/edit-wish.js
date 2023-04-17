import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { wishId, title, link } = JSON.parse(req.body);

    try {
      const updatedWish = await prisma.wishlist.update({
        where: {
          id: wishId,
        },
        data: {
          title,
          link,
        },
      });
      res.status(200).json({ updatedWish });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
