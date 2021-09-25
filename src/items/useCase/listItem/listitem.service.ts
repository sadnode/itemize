import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ListItemService {
  constructor(
    @InjectRepository(Item) private readonly itemsRepository: Repository<Item>,
  ) {}
  private readonly logger = new Logger(ListItemService.name);

  public async execute(page = 0): Promise<Item[]> {
    const items = this.itemsRepository.find({
      take: 5,
      skip: page * 5,
    });

    return items;
  }
}
