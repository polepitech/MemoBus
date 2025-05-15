-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "Nom" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Aller" TEXT NOT NULL,
    "Aller_Horraire" TEXT NOT NULL,
    "Retour" TEXT NOT NULL DEFAULT 'No',
    "Retour_Horraire" TEXT NOT NULL DEFAULT 'No',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
