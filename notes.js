console.log('notes.js started');

const fs = require('fs');

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }catch (e){
        return [];
    }
};


 var addNotes = (title, body) => {
     var notes = fetchNotes();
     var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};


var add = (a,b) =>{
    return a+b;
}

 var removeNotes = (title) => {
    //fetching the nodes
    var notes = fetchNotes();
// filter the nodes , remove the one with title arguments
    var filteredNotes = notes.filter((note) => note.title !== title);
    // saving the nodes
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};
var getallNotes = () => {
  return fetchNotes();


};
var readNotes = () => {
   var note = fetchNotes();

};
var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

var getNotes = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes [0];
};


module.exports = {
    add,
    addNotes,
    removeNotes,
    getallNotes,
    readNotes,
    fetchNotes,
    getNotes,
    logNote
}
