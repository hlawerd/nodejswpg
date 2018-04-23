let message     = 'Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator\'s fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.';

/* let copy = message.slice(0, 314);
let copy2 = message.slice(315,696); */

console.log('message in UPPERCASE\n\n' +message.toUpperCase()+ '\n\nmessage in LOWERCASE\n\n'  +message.toLowerCase()+ '\n\n'
+'message in UPPERCASE as selected\n\n' +message.slice(0, 315).toUpperCase()+ '\n\n'
+'message in LOWERCASE as selected\n\n' +message.slice(315,696).toLowerCase()+ '\n\n'
+'message in CONCATED\n\n' +message.slice(0, 315).concat(message.slice(315,696))+ '\n\n'
+`The message has \"${message.length}\" characters long`);
