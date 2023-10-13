import { Module } from '@nestjs/common';
import { PlaceholderController } from './placeholder.controller';
import { PlaceholderService } from './placeholder.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [PlaceholderController],
  providers: [PlaceholderService, JwtService],
})
export class PlaceholderModule {}
