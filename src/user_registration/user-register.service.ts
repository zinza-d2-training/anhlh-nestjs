import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import { UserRegisterDto } from './user-register.dto';
import District from 'src/entities/District';
import Province from 'src/entities/Province';
import Ward from 'src/entities/Ward';

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
    const { email, password, ward, district, province } = body;
    const hasUser = await this.userRepository.findOne({ email });
    const saltRounds = 10;
    if (hasUser) {
      return 'user already exists';
    }
    const isWard = await this.wardRepository.findOne({ where: { ward } });

    const isDistrict = await this.districtRepository.findOne({
      where: { district },
    });
    const isProvince = await this.provinceRepository.findOne({
      where: { province },
    });

    const hashPass = await bcrypt.hashSync(password, saltRounds);
    const user = await this.userRepository.create({
      email,
      password: hashPass,
    });
    return user;
  }
}
