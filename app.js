console.log('app.js started');



const fs = require('fs');
const _ = require('lodash');
const  yargs = require('yargs');

const notes = require('./notes.js');
// console.log(`Sum:`,notes.add(9,-2));

var argv = yargs.argv;
var command = argv._[0];
console.log('Yargs  argv',argv);
console.log('Command',command);


if(command ==='add'){
  var note = notes.addNotes(argv.title,argv.body);
  if (note) {
      console.log('Note Created');
        notes.logNote(note);
  }else {
      console.log('note title is already taken')
  }
}
else if(command === 'list') {
   var allNotes = notes.getallNotes();
   console.log(`printing ${allNotes.length} note(s)`)
    allNotes.forEach((note) => notes.logNote(note));
}else if(command === 'read'){
  var note = notes.getNotes(argv.title);
  if (note){
      console.log('Note Found');
      notes.logNote(note);
  }else {
      console.log('Note not found');
  }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNotes(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found' ;
    console.log(message);
}else if (command ==='fetch'){
    notes.fetchNotes();
}