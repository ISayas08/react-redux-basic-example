import { LIKE_POST, UPDATE_POSTS_LIST } from "../utils/consts";

export const create_LikePost_Action = (id) => ({
    type: LIKE_POST,
    id
});

export const create_UpdatePostList_Action = (posts) => ({
    type: UPDATE_POSTS_LIST,
    posts
});

