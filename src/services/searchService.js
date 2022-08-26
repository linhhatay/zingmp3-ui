import { FAKE_API_SEARCH } from '~/shared/apiSearch';

export const search = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FAKE_API_SEARCH);
        }, 350);
    });
};
