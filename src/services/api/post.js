import { _http } from "./http";

let instance;

class Posts {

    constructor() {
        if (!instance) {
            instance = this
        }

        this.endpoint = 'posts';

        return instance;
    }

    getAll() {
        return _http.makeGetPetition(this.endpoint);
    }
}

export const _post = new Posts();