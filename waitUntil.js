function waitUntil(event, callback, opts) {
    let listener = module.globals.listener.addEventListener(
        event,
        function (...args) {
            listener.cancel();
            callback.apply(null, args);
        },
        opts,
    );
}

module.globals.listener.waitUntil = waitUntil;

module.exports = { waitUntil };
