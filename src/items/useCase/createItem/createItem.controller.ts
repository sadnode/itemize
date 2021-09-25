import { Body, Controller, Post } from '@nestjs/common';
import { CreateItemDto } from '../../dto/create-item.dto';
import { CreateItemService } from './createItem.service';

@Controller('items')
export class CreateItemController {
  constructor(private readonly createItemsService: CreateItemService) {}

  @Post()
  public async handle(@Body() createItemDto: CreateItemDto) {
    return this.createItemsService.execute(createItemDto);
  }
}
