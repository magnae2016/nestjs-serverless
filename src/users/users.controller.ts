import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import {
  CreateUserDto,
  TokenIdDto,
  UserLoginDto,
  VerifyEmailDto,
} from "./dto/create-user.dto";
import { UserInfo } from "./UserInfo";

@Controller("users")
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto);
  }

  @Post("/email-verify")
  async verifyEmail(@Query() dto: VerifyEmailDto, @Body() body: TokenIdDto): Promise<string> {
    console.log(dto);
    console.log(body);
    return;
  }

  @Post("/login")
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto);
    return;
  }

  @Get("/:id")
  async getUserInfo(@Param("id") userId: string): Promise<UserInfo> {
    console.log(userId);
    return;
  }
}
