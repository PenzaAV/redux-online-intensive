// Core
import { put, apply } from "redux-saga/effects";

// Instruments
import { api } from "../../../../REST";
import { uiActions } from "../../../ui/actions";
import { profileActions } from '../../../profile/actions';

export function* updatePassword ({ payload:passwordData}) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.profile.updateProfile, [ passwordData ]);
        const { data: updatedProfile, message } = yield apply(response, response.json);
        console.log(data);
        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(profileActions.fillProfile(updatedProfile));
    } catch (error) {
        yield put(uiActions.emitError(error, "updateProfile worker"));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
