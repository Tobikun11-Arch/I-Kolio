import {Prisma} from '@prisma/client';
import {prisma} from '../config/prisma';

export const userRepository = {
  findByEmail: (email: string) =>
    prisma.user.findUnique({where: {email: email.toLowerCase()}}),

  findById: (id: string) => prisma.user.findUnique({where: {id}}),

  listAll: () => prisma.user.findMany(),

  create: (data: Prisma.UserCreateInput) => prisma.user.create({data}),

  updateProfile: (userId: string, data: Prisma.UserUpdateInput) =>
    prisma.user.update({where: {id: userId}, data}),

  setVerificationCode: (email: string, code: string, expiry: Date) =>
    prisma.user.update({
      where: {email: email.toLowerCase()},
      data: {verificationCode: code, verificationExpiry: expiry}
    }),

  clearVerificationCode: (email: string) =>
    prisma.user.update({
      where: {email: email.toLowerCase()},
      data: {verificationCode: null, verificationExpiry: null}
    }),

  markVerified: (email: string) =>
    prisma.user.update({
      where: {email: email.toLowerCase()},
      data: {isVerified: true, verificationCode: null, verificationExpiry: null}
    })
};
