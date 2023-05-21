import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';

import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(
    request:Request
    ) {
    const CurrentUser = await getCurrentUser();

    if(!CurrentUser) {
        return NextResponse.error();

    }

    const body = await request.json();

    const{
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guesCount,
        location,
        price
    } = body;

    const listing = await prisma.listing.create({
        data: {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guesCount,
        locationValue: location.value,
        price:parseInt(price,10),
        userId: CurrentUser.id

        }
    });

    return NextResponse.json(listing);


    
}