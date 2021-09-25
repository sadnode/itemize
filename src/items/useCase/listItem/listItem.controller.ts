import { Controller, Get, Query } from '@nestjs/common';
import { Item } from 'src/items/entities/item.entity';
import { ListItemService } from './listitem.service';

@Controller('items')
export class ListItemController {
  constructor(private readonly listItems: ListItemService) {}

  @Get()
  public async handle(@Query('page') page: string): Promise<Item[]> {
    return this.listItems.execute(Number(page));
  }
}
