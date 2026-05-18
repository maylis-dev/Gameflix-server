import { Router } from "express";
import { prisma } from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = Router();

// Route pour l'inscription d'un utilisateur
router.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ error: "Username, email and password are required" });
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must be at least 8 characters long and contain at least one letter and one number",
      });
      return;
    }

    //verification de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
      return;
    }

    const foundUser = await prisma.user.findUnique({
      where: { email },
    });

    if (foundUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
      return;
    }

    res.json(newUser); // Return the created user object
  } catch (error) {
    console.log("SIGNUP ERROR:", error);
    res.status(500).json({
      error: "Failed to signup user",
      details: error,
    });
  }
});

// Route pour la connexion d'un utilisateur
router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const foundUser = await prisma.user.findUnique({
      where: { email },
    });
    if (!foundUser || foundUser.password !== password) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      foundUser.password,
    );

    // If the password is incorrect, return an error response
    if (!isPasswordCorrect) {
      return res.status(400).json({
        errorMessage: "Password not correct!",
      });
    }

    //!si le user oubli le mot de passe on peut lui envoyer un email pour le reinitialiser (a implementer plus tard)
    
    
    
    
    const payload = {
      id: foundUser.id,
      email: foundUser.email,
      username: foundUser.username,
    };

    //create token
    const authToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "7h",
      algorithm: "HS256",
    });

    res.status(200);

    res.json({
      message: "Login successful",
      payload: payload,
      authToken: authToken,
    });



  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({
      error: "Failed to login",
      details: error,
    });
  }
});

//delete user by id
router.delete("/delete/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.user.delete({
      where: { id },
    });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("DELETE USER ERROR:", error);
    res.status(500).json({
      error: "Failed to delete user",
      details: error,
    });
  }
});

router.put("/update/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const { username, email, password } = req.body;
    const updatedUser = await prisma.user.update({
      where: { id },

      data: {
        username,
        email,
        password,
      },
    });
    res.json(updatedUser);
  } catch (error) {
    console.log("UPDATE USER ERROR:", error);
    res.status(500).json({
      error: "Failed to update user",
      details: error,
    });
  }
});

//get update by id  permet de recuperer les infos d'un user pour les afficher dans le formulaire de modification


//!verify token




export default router;
