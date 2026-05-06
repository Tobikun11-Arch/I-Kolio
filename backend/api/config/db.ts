import {prisma} from './prisma';

export async function connectDb() {
  await prisma.$connect();
}
