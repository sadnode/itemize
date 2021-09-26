import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';
import { CreateItemController } from './useCase/createItem/createItem.controller';
import { CreateItemService } from './useCase/createItem/createItem.service';
import { DeleteItemController } from './useCase/DeleteItem/delete.controller';
import { DeleteItemService } from './useCase/DeleteItem/deleteItem.service';
import { ListItemController } from './useCase/listItem/listItem.controller';
import { ListItemService } from './useCase/listItem/listitem.service';
import { UpdateItemController } from './useCase/updateItem/updateItem.controller';
import { UpdateItemService } from './useCase/updateItem/updateItem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [
    CreateItemController,
    ListItemController,
    DeleteItemController,
    UpdateItemController,
  ],
  providers: [
    CreateItemService,
    ListItemService,
    DeleteItemService,
    UpdateItemService,
  ],
})
export class ItemsModule {}
