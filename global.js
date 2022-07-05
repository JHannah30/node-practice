// Global object

// 'global' doesn't need to be defined (such as 'window'), however this is the object that these functions belong to

global.setTimeout(() => {
    console.log(`in the timeout`);
}, 3000)

// global object doesn't contain some things that the window object does, such as 'document'