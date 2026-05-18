import { Router } from "express";
import { prisma } from "../prisma/client";

const router = Router();

//afiche tous les places
router.get("/", async (req, res) => {
  try {
    const places = await prisma.place.findMany();
    res.json(places);
  }
    catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ error: "An error occurred while fetching places." });
  }
});

//afiche un place par id    
router.get("/:id", async (req, res) => {
  const { id } = req.params;
    try {
    const place = await prisma.place.findUnique({
      where: { id: parseInt(id) },
    });
    if (place) {
      res.json(place);
    }
        else {  
        res.status(404).json({ error: "Place not found." });
    }
    }
    catch (error) {
    console.error(`Error fetching place with id ${id}:`, error);
    res.status(500).json({ error: "An error occurred while fetching the place." });
    }
});

export default router;