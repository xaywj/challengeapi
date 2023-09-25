import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  NotAcceptableException,
} from '@nestjs/common';
import { RateService } from './rate.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Post()
  create(@Req() req: any, @Body() createRateDto: CreateRateDto) {
    // admin only
    if (req.role != 'admin')
      throw new NotAcceptableException('You are not allowed to do this action');
    return this.rateService.create(createRateDto);
  }

  @Get()
  findAll() {
    return this.rateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rateService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updateRateDto: UpdateRateDto,
  ) {
    // admin only
    if (req.role != 'admin')
      throw new NotAcceptableException('You are not allowed to do this action');
    return this.rateService.update(+id, updateRateDto);
  }

  @Delete(':id')
  remove(@Req() req:any, @Param('id') id: string) {
    // admin only
    if (req.role != 'admin')
      throw new NotAcceptableException('You are not allowed to do this action');
    return this.rateService.remove(+id);
  }
}
