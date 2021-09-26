import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteItemService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  public async execute(id: string): Promise<void> {
    const item = await this.itemRepository.findOne({ id });

    if (!item) {
      throw new BadRequestException(`Item #${id} not found`);
    }

    await this.itemRepository.remove(item);
  }
}
