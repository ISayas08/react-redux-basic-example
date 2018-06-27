import { REQUEST_ERROR, REQUEST_START, REQUEST_SUCCESSFUL } from "../utils/consts";
import { _post } from "../services";
import { create_UpdatePostList_Action } from "./postAction";

export const create_RequestError_Action = (status, errorMessage) => ({
    type: REQUEST_ERROR,
    status,
    errorMessage
});

export const create_RequestStart_Action = () => ({
    type: REQUEST_START
});

export const create_RequestSuccessful_Action = () => ({
    type: REQUEST_SUCCESSFUL
});

export const create_getPost_Action = () => {
    return (dispatch) => {
        //We inform the request started.
        dispatch(create_RequestStart_Action());

        return _post.getAll().end((err, res) => {
            if (!err) {
                dispatch(create_RequestSuccessful_Action());
                dispatch(create_UpdatePostList_Action(res.body));
            } else {
                dispatch(create_RequestError_Action(err.status, err.message));
            }
        });
    }
}
