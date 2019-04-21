import { UserModel } from '../models/user';
import { CompanyModel } from '../models/company';
import { User } from './../types/User';

export default class UserService {
    public static async Signup(user: User) {
        const userRecord = await UserModel.create(user);
        const companyRecord = await CompanyModel.create(userRecord); // needs userRecord to have the database id

        return { user: userRecord, company: companyRecord };
    }
}
