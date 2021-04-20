import { IsNotEmpty, IsNumber } from 'class-validator';

export class TrackDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  ordinal: number;
}
