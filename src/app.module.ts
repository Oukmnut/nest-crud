import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_crud_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // ❗ Disable this
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
    }),
    ProductsModule,
  ],
})
export class AppModule {}
