import {ofType} from "redux-observable";
import {switchMap} from "rxjs/operators";

import {empty} from "rxjs";

import {APP_ACTION} from "./constants";

const appEpic = action$ =>
    action$.pipe(
        ofType(APP_ACTION),
        switchMap(({payload}) => empty())
    );

export default function AppEpics(action$) {
    return appEpic(action$);
}
