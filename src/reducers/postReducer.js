import { LIKE_POST, UPDATE_POSTS_LIST } from "../utils/consts";

export const posts = (statePosts = [], action) => {
    switch (action.type) {
        case UPDATE_POSTS_LIST:
            return statePosts.concat(action.posts);

        case LIKE_POST:
            return statePosts.map(post => {
                if (post.id === action.id) {
                    return Object.assign({}, post, {
                        likes: post.likes + 1
                    });
                }

                return post;
            });

        default:
            return statePosts;
    }
}


