import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; // 경로 확인 필요 (상위 폴더에 있다면 ../)
import { User, Prisma } from '../../generated/prisma/client'; // Prisma가 만들어준 타입 활용

@Injectable()
export class UserService {
  // PrismaService를 주입받습니다.
  constructor(private prisma: PrismaService) {}

  // 1. 유저 생성 (Create)
  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // 2. 모든 유저 조회 (Read)
  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
