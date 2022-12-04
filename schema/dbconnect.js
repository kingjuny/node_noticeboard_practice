const mongoose = require('mongoose');

const connect = () => {
    
    mongoose
        .connect('mongodb+srv://hyeonjun:000525@node.r7ndpju.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            ignoreUndefined: true
        })
        .catch(err => console.log(err));
};

mongoose.connection.on('error', err => {
    console.error('몽고디비 연결 에러입니다.', err);
});

module.exports = connect;