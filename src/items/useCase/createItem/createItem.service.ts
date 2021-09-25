import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from '../../dto/create-item.dto';

@Injectable()
export class CreateItemService {
  constructor(
    @InjectRepository(Item) private readonly itemsRepository: Repository<Item>,
  ) {}
  private readonly logger = new Logger(CreateItemService.name);

  public async execute(createItemDto: CreateItemDto): Promise<Item> {
    const item = this.itemsRepository.save(createItemDto);

    return item;
  }
}
