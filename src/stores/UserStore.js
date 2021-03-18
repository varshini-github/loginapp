import { extendObservable } from 'mobx';

class USerStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            username: ''
        })
    }
}

export default new USerStore();