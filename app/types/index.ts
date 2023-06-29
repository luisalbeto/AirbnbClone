import { Listing, Reservation, User } from "@prisma/client";


export type Safelisting = Omit<
    Listing,
    "createdAt"
> & {
    createdAt: string; 
}

export type safeReservation = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "lisitng"
    > & {
        createdAt: string;
        startDate: string;
        endDate: string;
        listing: Safelisting;
    }


export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & { 
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
}