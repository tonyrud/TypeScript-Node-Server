import { User } from './../types/User';

export const UserModel = {
    create: (user: User) => {
        return {
            ...user,
            _id: 'mock-user-id',
        };
    },
};
