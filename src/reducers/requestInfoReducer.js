import { REQUEST_START, REQUEST_SUCCESSFUL, REQUEST_ERROR } from "../utils/consts";

export const requestInfo = (stateRequestInfo = {}, action) => {
    switch (action.type) {
        case REQUEST_SUCCESSFUL:
            return Object.assign({}, stateRequestInfo, {
                isFetching: false,
            });
        case REQUEST_START:
            return Object.assign({}, stateRequestInfo, {
                isFetching: true,
            });
        case REQUEST_ERROR:
            return Object.assign({}, stateRequestInfo, {
                requestError: true,
                isFetching: false,
                status: action.status,
                errorMessage: action.errorMessage
            });

        default:
            return stateRequestInfo;
    }
}