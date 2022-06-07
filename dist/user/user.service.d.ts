import User from './user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './update_user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(email: string): Promise<void>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    createUser(user: User): Promise<User>;
    remove(id: number): Promise<User>;
}
