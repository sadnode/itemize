import { Body, Controller, Param, Put } from '@nestjs/common';
import { UpdateItemDto } from 'src/items/dto/update-item.dto';
import { UpdateItemService } from './updateItem.service';

@Controller('items')
export class UpdateItemController {
  constructor(private readonly updateItem: UpdateItemService) {}

  @Put(':id')
  public async handle(
    @Param('id') id: string,
    @Body() updateItemDto: UpdateItemDto,
  ): Promise<void> {
    this.updateItem.execute(id, updateItemDto);
  }
}
