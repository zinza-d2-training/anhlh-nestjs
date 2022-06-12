import { HttpException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './user-register.dto';
import District from 'src/entities/District';
import Province from 'src/entities/Province';
import Ward from 'src/entities/Ward';
import { UpdateUserDto } from './UpdateUserDto.dto';

@Injectable()
export class UserRegisterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Ward)
    private readonly wardRepository: Repository<Ward>,
    @InjectRepository(District)
    private readonly districtRepository: Repository<District>,
    @InjectRepository(Province)
    private readonly provinceRepository: Repository<Province>,
  ) {}

  async registerUser(body: UserRegisterDto) {
    const {
      email,
      password,
      ward,
      district,
      province,
      identity_card_number,
      gender,
      fullname,
    } = body;
    const hasUser = await this.userRepository.findOne({ email });
    const saltRounds = 10;
    if (hasUser) {
      return 'user already exists';
    }
    const hasProvince = await this.provinceRepository.findOne({
      where: { name: province },
    });
    if (!hasProvince) {
      return new HttpException('This province is not available', 404);
    }
    const hasDistrict = await this.districtRepository
      .createQueryBuilder('district')
      .where('district.province_id= :provinceId', {
        provinceId: hasProvince.id,
      })
      .andWhere('district.name = :name', { name: district })
      .getOne();
    if (!hasDistrict) {
      return new HttpException('This District is not available', 404);
    }
    const hasWard = await this.wardRepository
      .createQueryBuilder('ward')
      .where('ward.district_id= :districtId', { districtId: hasDistrict.id })
      .andWhere('ward.name = :name', { name: ward })
      .getOne();
    if (!hasWard) {
      return new HttpException('This Ward is not available', 404);
    }
    const hashPass = await bcrypt.hashSync(password, saltRounds);
    const user = await this.userRepository.save({
      email,
      password: hashPass,
      fullname,
      province,
      district,
      ward,
      gender,
      identity_card_number,
      role: 'user',
    });
    return user;
  }
  async updateUser(id: number, body: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where: { id } });
    Object.assign(user, body);
    return await this.userRepository.save(user);
  }
}
