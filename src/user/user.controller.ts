import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // 주소: http://localhost:3000/user
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 유저 생성 요청 받기 (POST)
  @Post()
  async create(@Body() body: { email: string; name?: string }) {
    // 본문(Body)에서 email과 name을 꺼내서 서비스로 넘깁니다.
    return this.userService.createUser(body);
  }

  // 모든 유저 조회 요청 받기 (GET)
  @Get()
  async findAll() {
    return this.userService.findAllUsers();
  }
}
