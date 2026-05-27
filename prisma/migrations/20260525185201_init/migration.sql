-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "genre" TEXT,
    "platform" TEXT,
    "shopLink" TEXT,
    "releaseDate" TIMESTAMP(3),
    "producer" TEXT,
    "photoGame" TEXT,
    "studio" TEXT,
    "rating" DOUBLE PRECISION,
    "trailerUrl" TEXT,
    "status" TEXT DEFAULT 'available',
    "language" TEXT,
    "popularity" INTEGER NOT NULL DEFAULT 0,
    "price" DOUBLE PRECISION,
    "istrending" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
