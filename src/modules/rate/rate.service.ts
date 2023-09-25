import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rate } from './entities/rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RateService {
  constructor(
    @InjectRepository(Rate)
    private ratesRepository: Repository<Rate>,
  ) {}

  async create(createRateDto: CreateRateDto) {
    // handle if the rate name is already exists
    const name = await this.ratesRepository.findOneBy({
      name: createRateDto.name,
    });
    if (name) throw new NotFoundException(`Rate ${createRateDto.name} exists`);

    return await this.ratesRepository.save(createRateDto);
  }

  async findAll() {
    return await this.ratesRepository.find();
  }

  async findOne(id: number) {
    return await this.ratesRepository.findOneBy({ id: id });
  }

  async update(id: number, updateRateDto: UpdateRateDto) {
    // handle if the rate id is not exists
    const rate = await this.ratesRepository.findOneBy({ id: id });
    if (!rate) throw new NotFoundException(`Rate #${id} not found`);
    // handle if the rate name is already exists
    const name = await this.ratesRepository.findOneBy({
      name: updateRateDto.name,
    });
    if (name && name.id != id)
      throw new NotFoundException(`Rate ${updateRateDto.name} already exists`);

    await this.ratesRepository.update(id, updateRateDto); 
    return await this.ratesRepository.findOneBy({ id: id }); 
  }

  async remove(id: number) {
    const rate = await this.ratesRepository.findOneBy({ id: id });
    if (!rate) throw new NotFoundException(`Rate #${id} not found`);
    await this.ratesRepository.delete(id);
    return true;
  }
}
