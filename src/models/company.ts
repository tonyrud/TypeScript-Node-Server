import { User } from './../types/User';

export const CompanyModel = {
    create: (user: User) => {
        return {
            owner: user._id,
            companyTaxId: '12345',
        };
    },
};
