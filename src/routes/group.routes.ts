
import { Router } from "express";
import { prisma } from "../prisma/client";


const router = Router();

/// affiche les groups

router.get("/", async (req, res) => {
  try {
    const groups = await prisma.group.findMany({
      include: {
        members: true,
        messages: true,
       
        admin: true,   
      },
    });
    res.json(groups);
  } catch (error) {
    res.status(500).json({ error: "Failed to find groups" });
  }
});

///creer groupe

router.post("/", async (req, res) => {
  try {
    const { name, description, photoGroup, adminId, isPrivate} = req.body;
    const newGroup = await prisma.group.create({
      data: {
        name,
        description,
        photoGroup,
        adminId,
        isPrivate,
       
      },
    });
    res.json(newGroup);
  }catch (error) {
  console.log("CREATE GROUP ERROR:", error);
  res.status(500).json({
    error: "Failed to create group",
    details: error,
  });
} 
});

router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const groupId = await prisma.group.findUnique({
      where: { id },
      include: {
        members: true,
        messages: true,
        description: true,
        admin: true,
      },
    });

    res.json(groupId);
  } catch (error) {
    res.status(500).json({ error: "Failed to find group by id" });
  }
});

//edit group

router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, description, photoGroup, adminId, isPrivate } = req.body;

    const updatedGroup = await prisma.group.update({
      where: { id },
      data: {
        name,
        description,
        photoGroup,
        adminId,
        isPrivate,
      },
    });

    res.json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: "Failed to update group" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);     
    await prisma.group.delete({
      where: { id },
      
     
    });
    res.json({ message: "Group deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete group" });
  }   });          

//modifier group

export default router;
