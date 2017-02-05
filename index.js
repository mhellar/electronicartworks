var bart = require('bart').createClient({ "interval": 3000 });

bart.on('dbrk', function(estimates) {
    console.log(estimates);
});