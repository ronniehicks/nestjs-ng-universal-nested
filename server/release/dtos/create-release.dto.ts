import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { TrackDto } from './track.dto';

export class CreateReleaseDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => TrackDto)
  track?: TrackDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => TrackDto)
  tracks?: TrackDto[];
}
