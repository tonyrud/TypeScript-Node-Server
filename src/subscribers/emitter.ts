const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('register', (data: any) => {
    // do database, register, emailing stuff
    console.log('running register:', data);
});

export { eventEmitter };
