import { User } from "@prisma/client";

export type safeUser = Omit<
    User,
    "createAt" | "updateAt" | "emailVerified"
> & { 
    createAt: string;
    updateAt: string;
    emailVerified: string | null;
}