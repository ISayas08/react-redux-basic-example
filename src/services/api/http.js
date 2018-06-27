import superagent from 'superagent';
import { JSON_PLACEHOLDER_URL } from "./../../utils/consts";

const URL = JSON_PLACEHOLDER_URL;
let instance;

class Http {

    constructor() {
        if (!instance) {
            instance = this
        }

        this.url = URL;

        return instance;
    }

    makeGetPetition(endpoint, withCredentials = false) {
        return withCredentials ?
            superagent.get(`${this.url}/${endpoint}`).withCredentials() :
            superagent.get(`${this.url}/${endpoint}`);
    }

    makePostPetition(endpoint, body, withCredentials = false) {
        return withCredentials ?
            superagent.post(`${this.url}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body)
                .withCredentials() :
            superagent.post(`${this.url}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body);
    }

    makePutPetition(endpoint, body, withCredentials = false) {
        return withCredentials ?
            superagent.put(`${this.url}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body)
                .withCredentials() :
            superagent.put(`${this.url}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body);
    }

    makeDeletePetition(endpoint, withCredentials = false) {
        return withCredentials ?
            superagent.del(`${this.url}/${endpoint}`).withCredentials() :
            superagent.del(`${this.url}/${endpoint}`);
    }

    getBasicAtachPetition(endpoint, withCredentials = false) {
        return withCredentials ?
            superagent.post(`${this.url}/${endpoint}`).withCredentials() :
            superagent.post(`${this.url}/${endpoint}`).withCredentials();
    }
}

export const _http = new Http();