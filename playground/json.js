//Auther: Abhinish

const fs = require('fs');

var orignalNote = {
    title : 'Some title',
    body : 'Some body'
};
//converting the object to string
var orignalNoteString = JSON.stringify(orignalNote);
fs.writeFileSync('notes.json',orignalNoteString);

var notesString = fs.readFileSync('notes.json');
var notes = JSON.parse(notesString);
console.log(typeof notes);
console.log(notes);