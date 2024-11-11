const fs = require('fs').promises;
const showMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, this is a message from the promise!");
      
    }, 2000);
});


showMessage.then(async (messages) => {
    console.log(messages);

    try {
        await fs.writeFile('messages.txt', messages);
        console.log('Message has been written to messages.txt');
    } catch (error) {
        console.log('Error writing file:', error);
    }
}).catch((error) => {
    console.log("Error:", error);
});

