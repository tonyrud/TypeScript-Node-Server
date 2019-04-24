const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('email', (data: any) => {
    // do database, register, emailing stuff
    console.log('email event:', data);
});

export { eventEmitter };
