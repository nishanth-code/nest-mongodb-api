import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum category {
    ADVENTURE ='adventure',
    CLASSICS = 'classic',
    ACTION="action"

}
@Schema({
    timestamps: true
})



export class Book{
    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    author:string;

    @Prop()
    price:number;
    @Prop()
    category:category


}

export const BookSchema = SchemaFactory.createForClass(Book)