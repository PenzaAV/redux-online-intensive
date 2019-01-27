import { SHOW_NEXT_PHOTOS, SHOW_SELECTED_PHOTOS, SHOW_PREV_PHOTOS } from './types';

export const showNextPhoto = () => {
    return {
        type: SHOW_NEXT_PHOTOS,
    };
};

export const showPrevPhoto = () => {
    return {
        type: SHOW_PREV_PHOTOS,
    };
};

export const showSelectedPhoto = (photoIndex) => {
    return {
        type:    SHOW_SELECTED_PHOTOS,
        payload: photoIndex,
    };
};
