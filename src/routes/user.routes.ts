import { Router } from "express";
import { prisma } from "../prisma/client";

const router = Router();

/// affiche les users
router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({        

    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to find users" });
  }});

///creer user       
router.post("/", async (req, res) => {
  try {
    const { name, email, password, photo } = req.body;} 
    catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }});

router.get("/:id", async (req, res) => {
    try {
    const id = parseInt(req.params.id);

    } catch (error) {
    res.status(500).json({ error: "Failed to find user" });
        
    }});

    export default router;