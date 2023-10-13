import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { Placeholder } from './placeholder.entity';
import { catchMessage } from '../../service/catchMessage';
import { PlaceholderService } from './placeholder.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';

@ApiTags('Placeholder')
@Controller('placeholder')
export class PlaceholderController {
  constructor(private readonly service: PlaceholderService) {}

  @Get()
  async findAll(): Promise<Placeholder[]> {
    let result = [] as Placeholder[];
    try {
      result = await this.service.findAll();
    } catch (error) {
      console.log(await catchMessage(error));
    }
    return result;
  }

  @Get('/:id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<Placeholder> {
    let result = {} as Placeholder;
    try {
      result = await this.service.findOne(id);
    } catch (error) {
      console.log(await catchMessage(error));
    }
    return result;
  }
}
