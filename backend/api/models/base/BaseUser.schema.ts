export type BaseUserModel = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  username: string | null;
  isVerified: boolean;
  verificationCode: string | null;
  verificationExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
};
