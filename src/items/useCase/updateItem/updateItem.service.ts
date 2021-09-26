import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateItemDto } from 'src/items/dto/update-item.dto';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';

export class UpdateItemService {
  constructor(
    @InjectRepository(Item) private readonly itemsRepository: Repository<Item>,
  ) {}

  public async execute(
    id: string,
    updateItemDto: UpdateItemDto,
  ): Promise<void> {
    const item: Item = await this.itemsRepository.findOne({ id });

    if (!item) {
      throw new NotFoundException(`Ìtem #${id} not found`);
    }

    const updatedItem = {
      id: item.id,
      ...updateItemDto,
    };

    await this.itemsRepository.save(updatedItem);
  }
}
