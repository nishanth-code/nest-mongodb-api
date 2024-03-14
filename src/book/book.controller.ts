import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('book')
export class BookController {
    constructor(private bookService:BookService){}

    @Get()
    async getAllBooks(): Promise<Book[]>{
        return this.bookService.findAll()
    }

    @Post()
    async createBook(@Body()book ):Promise<Book>{
        return this.bookService.create(book)

    }
    @Get(':id')
    async getbook(@Param('id')id:string): Promise<Book>{
        return this.bookService.findOne(id)
    }

    @Put(":id")
    async updatebook(@Param('id')id:string,@Body()book):Promise<Book>{
        return this.bookService.updateByid(id,book)

    }
    @Delete(":id")
    async deleteBook(@Param('id')id:string):Promise<Book>{
        return this.bookService.delete(id)
    }
}
