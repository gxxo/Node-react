if(process.env.NODE_ENV === 'production'){
    module.exports = requires('./prod');
} else {
    module.exports = require('./dev');
}

