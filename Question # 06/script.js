// function to sort the following array of objects by title value.Sample object: 
// var library = [{author: 'Bill Gates', title:'The Road Ahead', LibraryID: 1254}, {author: 'Steve Jobs',
// title: 'Walter Isaacson', libraryID: 4264},{author: 'Suzanne Collins', title:
// 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];



var library = [
    {author: 'Bill Gates', title:'The Road Ahead', LibraryID: 1254},
    {author: 'Steve Jobs',title: 'Walter Isaacson', libraryID: 4264},
    {author: 'Suzanne Collins',title:'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}];

     function comparison(bookOne, bookTwo) {
       if (bookOne.title < bookTwo.title){
        return -1;
       }
       if (bookOne.title > bookTwo.title){
        return 1;
       }
    return 0;
     } 
     console.log(library.sort(comparison));