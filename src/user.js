'use strict';

class User {
    constructor(username, email) {
        this.email = email;
        this.username = username;
    }

    async ayncStuff (timeout) {
        console.log('asyncStuff begin')
        let i = await this.doAsync(timeout)
        console.log('gotcha doAsync response')

        return i
    }

    async doAsync(timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('asyncStuff done')
                resolve(this.email);
            }, timeout)
        })
    }
}
exports.user = User;