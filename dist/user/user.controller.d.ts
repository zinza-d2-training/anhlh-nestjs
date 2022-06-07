import { User } from './type';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './update_user.dto';
export declare class UserController {
    private readonly UserService;
    constructor(UserService: UserService);
    list(): Promise<User[]>;
    remove(id: string): Promise<import("./user.entity").default>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.entity").default>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
