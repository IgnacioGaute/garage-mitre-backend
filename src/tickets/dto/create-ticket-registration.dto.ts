import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class CreateTicketRegistrationDto {

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsString()
    @IsOptional()
    entryDay: string

    @IsString()
    @IsOptional()
    departureDay: string

    @IsString()
    @IsNotEmpty()
    entryTime: string

    @IsString()
    @IsNotEmpty()
    departureTime: string

    @IsString()
    @IsOptional()
    @Matches(/^\d{4}-\d{2}-\d{2}$/)
    dateNow: Date
}
