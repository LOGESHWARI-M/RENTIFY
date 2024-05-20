const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://logeshwarim2911:OvlxanZnAoR03IJE@rentify.uganitx.mongodb.net/?retryWrites=true&w=majority&appName=rentify', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected successfully');
});
