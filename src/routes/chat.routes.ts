import { Router } from "express";
import { prisma } from "../prisma/client";

const router = Router();

// affiche les chat d'un groupe
router.get("/group/:groupId", async (req, res) => {
  const { groupId } = req.params;   
    try {   
    const chats = await prisma.chat.findMany({
      where: {  },
    });
    res.json(chats);
    }
    catch (error) {
    console.error(`Error fetching chats for group with id ${groupId}:`, error);
    res.status(500).json({ error: "An error occurred while fetching chats." });
    }
});

// crée un chat dans un groupe
router.post("/group/:groupId", async (req, res) => {
  const { groupId } = req.params;   
    const { senderId, message } = req.body;
    try {
    const newChat = await prisma.chat.create({
      data: {
        groupId: parseInt(groupId),
        senderId: parseInt(senderId),
        message,
        },
    });
    res.status(201).json(newChat);
    }
    catch (error) {
    console.error(`Error creating chat for group with id ${groupId}:`, error);
    res.status(500).json({ error: "An error occurred while creating the chat." });
    }
});

//edit un chat
router.put("/:chatId", async (req, res) => {
  const { chatId } = req.params;
    const { message } = req.body;   
    try {   
    const updatedChat = await prisma.chat.update({
      where: { id: parseInt(chatId) },
      data: { message },    
    });
    res.json(updatedChat);
    }
    catch (error) {
    console.error(`Error updating chat with id ${chatId}:`, error);
    res.status(500).json({ error: "An error occurred while updating the chat." });            
    }
}
);

export default router;
