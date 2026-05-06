import {Prisma} from '@prisma/client';
import {prisma} from '../config/prisma';

export const adminRepository = {
  findByEmail: (email: string) =>
    prisma.admin.findUnique({where: {email: email.toLowerCase()}}),

  findByEmailOrUsername: (identifier: string) =>
    prisma.admin.findFirst({
      where: {
        OR: [{email: identifier.toLowerCase()}, {username: identifier}]
      }
    }),

  findById: (id: string) => prisma.admin.findUnique({where: {id}}),

  create: (data: Prisma.AdminCreateInput) => prisma.admin.create({data})
};
