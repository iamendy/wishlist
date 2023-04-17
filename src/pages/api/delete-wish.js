import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { wishId } = JSON.parse(req.body);

    try {
      await prisma.wishlist.delete({
        where: {
          id: wishId,
        },
      });
      res.status(200).json({ message: "deleted" });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
