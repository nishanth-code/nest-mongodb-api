import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { updateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel:mongoose.Model<Book>,
    ){}

    async findAll():Promise<Book[]>{
        const books = await this.bookModel.find()
        return books
    }
    async create(book:CreateBookDto):Promise<Book>{
        const res = await this.bookModel.create(book)
        return res

    }
    async findOne(id:string):Promise<Book>{
        const res = await this.bookModel.findById(id)
        if (!res){
            throw new NotFoundException()
        }
        return res

    }
    async updateByid(id:string,book:updateBookDto):Promise<Book>{
        return await this.bookModel.findByIdAndUpdate(id,book,{new:true,runValidators:true})
    }
    async delete(id:string):Promise<Book>{
        return await this.bookModel.findByIdAndDelete(id)
    }
}