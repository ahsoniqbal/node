import EventEmmitter from 'events';

export default class Service extends EventEmmitter {
    request() {
        const res = {
            code: 404,
            send: function (r) {
                console.log(r);
            }
        }
        this.emit('fetch', { url: 'google.com' }, res);

    }
}
