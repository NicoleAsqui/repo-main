import { IsDateString, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { ProductInterface } from "../interfaces/product.interface";

export class ProductDTO implements ProductInterface {
    @IsNotEmpty({ message: "The product ID is required." })
    id: string;
    
    @MinLength(6, { message: "The name must be at least 6 characters long." })
    @MaxLength(100, { message: "The name can be up to 100 characters long." })
    name: string;
    
    @MinLength(10, { message: "The description must be at least 10 characters long." })
    @MaxLength(200, { message: "The description can be up to 200 characters long." })
    description: string;
    
    @IsNotEmpty({ message: "The product logo is required." })
    logo: string;
    
    @IsDateString({}, { message: "The release date must be a valid date string." })
    date_release: Date;
    
    @IsDateString({}, { message: "The revision date must be a valid date string." })
    date_revision: Date;

    constructor(id: string, name: string, description: string, logo: string, date_release: Date, date_revision: Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.logo = logo;
        this.date_release = date_release;
        this.date_revision = date_revision;
    }
}
