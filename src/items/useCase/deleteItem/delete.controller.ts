import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteItemService } from './deleteItem.service';

@Controller('items')
export class DeleteItemController {
  constructor(private readonly deleteItemService: DeleteItemService) {}

  @Delete(':id')
  public async handle(@Param('id') id: string) {
    return this.deleteItemService.execute(id);
  }
}
