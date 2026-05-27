import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.game.createMany({
    data: [
      {
        name: "Cyber Racing",
        description: "A fast futuristic racing game in neon cities.",
        genre: "Racing",
        platform: "PC",
        shopLink: "https://store.example.com/cyber-racing",
        releaseDate: new Date("2024-06-01"),
        producer: "NeoSpeed Studios",
        photoGame:
          "https://res.cloudinary.com/dwzu86xf5/image/upload/v1774455245/my-app/dgbqifqiinwxvyzqhxlg.jpg",
        studio: "Future Wheels",
        rating: 4.8,
        trailerUrl: "https://example.com/trailer/cyber-racing",
        status: "available",
        language: "English",
        popularity: 1200,
        price: 29.99,
        istrending: true,
      },

      {
        name: "Shadow Arena",
        description: "Multiplayer battle arena with dark warriors.",
        genre: "Action",
        platform: "PlayStation 5",
        shopLink: "https://store.example.com/shadow-arena",
        releaseDate: new Date("2023-11-15"),
        producer: "DarkVision",
        photoGame: "https://picsum.photos/seed/shadow/400/600",
        studio: "Arena Studio",
        rating: 4.5,
        trailerUrl: "https://example.com/trailer/shadow-arena",
        status: "available",
        language: "English",
        popularity: 2100,
        price: 49.99,
        istrending: true,
      },
    ],
  });

  console.log("🎮 2 games inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
