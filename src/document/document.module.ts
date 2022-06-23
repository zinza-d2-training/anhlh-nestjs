import { Module } from '@nestjs/common';
import Document from '../entities/document';
import { DocumentService } from './document.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentController } from './document.controller';
import { jwtConstants } from 'src/utils/constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([Document]),
  ],
  providers: [DocumentService],
  controllers: [DocumentController],
})
export class DocumentModule {}
