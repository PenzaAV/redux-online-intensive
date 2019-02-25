// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMesasge = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMesasge,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const users = [
    {
        id:        "test_user_1_id",
        firstName: "test_user_1_first_name",
        lastName:  "test_user_1_last_name",
        avatar:    "test_user_1_avatar_url",
    },
    {
        id:        "test_user_2_id",
        firstName: "test_user_2_first_name",
        lastName:  "test_user_2_last_name",
        avatar:    "test_user_2_avatar_url",
    },
    {
        id:        "test_user_3_id",
        firstName: "test_user_3_first_name",
        lastName:  "test_user_3_last_name",
        avatar:    "test_user_3_avatar_url",
    }
];

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    users,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
