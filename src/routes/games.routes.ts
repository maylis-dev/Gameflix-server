import { Router } from "express";
import { prisma } from "../prisma/client";

const router = Router();

// affiche les jeux
router.get("/", async (req, res) => {
  try {
    const games = await prisma.game.findMany();
    res.json(games);
  } catch (error) {
    console.log("GET GAMES ERROR:", error);
    res.status(500).json({
      error: "Failed to fetch games",
    });
  }
});

// affiche les détails d'un jeu
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const game = await prisma.game.findUnique({
      where: { id: parseInt(id) },
    });
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({
        error: "Game not found",
      });
    }
  } catch (error) {
    console.log("GET GAME ERROR:", error);
    res.status(500).json({
      error: "Failed to fetch game",
    });
  }
});

export default router;
