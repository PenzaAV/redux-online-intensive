// Reducer
import { profileReducer } from "../reducer";
import { profileActions } from "../actions";

describe("auth reducer", () => {
    test("should return initial state by default", () => {
        expect(profileReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "token": "",
}
`);
    });
    test("should handle FILL_PROFILE action", () => {
        expect(profileReducer(void 0, profileActions.fillProfile(__.userProfile)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "token": "TEST_TOKEN",
  "avatar": "TEST_AVATAR",
}
`);
    });
    test("should handle UPDATE_AVATAR action", () => {
        expect(profileReducer(void 0, profileActions.updateAvatar(__.url)))
            .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "token": "",
  "avatar": "https://www.url.com",
}
`);
    });
    test("should handle CLEAR_PROFILE action", () => {
        expect(
            profileReducer(void 0, profileActions.clearProfile())
        ).toMatchInlineSnapshot(`Immutable.Map {}`);
    });
});
