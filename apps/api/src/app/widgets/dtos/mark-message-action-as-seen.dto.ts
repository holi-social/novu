import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MessageActionStatusEnum } from '@novu/shared';
import { IsDefined, IsOptional, IsString } from 'class-validator';

export class MarkMessageActionAsSeenDto {
  @ApiProperty({
    enum: MessageActionStatusEnum,
    description: 'Message action status',
  })
  @IsString()
  @IsDefined()
  status: MessageActionStatusEnum;

  @ApiPropertyOptional({
    description: 'Message action payload',
  })
  @IsOptional()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}
