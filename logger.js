import EventEmitter from 'events';

const url = 'http//mylogger.io/log';

class Log extends EventEmitter{
    log(msg) {
        console.log(msg);
        //http request
        this.emit('logMsg', {id: 1, url: url});
    }
}

export { Log };
