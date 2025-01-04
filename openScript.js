var startButton = document
  .querySelector("#openScript")
  .addEventListener("click", () => {
    this.openScript();
  });

// Function that start game
openScript = () => {
  console.log("Game is starting");
  let db;
  
  // Let us open our database
  const DBOpenRequest = window.indexedDB.open("/saves/with.scr");
};
