import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamDto {
  @IsOptional()
  @IsInt()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Type(() => Number)
  id?: number;
}
