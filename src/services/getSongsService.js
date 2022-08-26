import { FAKE_API_SONG } from '~/shared/apiSong';

const getSongs = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FAKE_API_SONG);
        }, 250);
    });
};

export default { getSongs };
