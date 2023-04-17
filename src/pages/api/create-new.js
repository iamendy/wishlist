import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, titleLink, userId } = JSON.parse(req.body);

    try {
      const wish = await prisma.wishlist.create({
        data: {
          title,
          link: titleLink,
          userId: parseInt(userId),
        },
      });
      res.status(200).json({ wish });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
