import { Body, Controller, Post } from '@nestjs/common';
import { CreateReleaseDto } from './dtos/create-release.dto';

@Controller('release')
export class ReleaseController {
  @Post()
  create(@Body() release: CreateReleaseDto) {
    return release;
  }
}
