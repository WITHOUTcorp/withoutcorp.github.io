var startButton = document
  .querySelector("#openScript")
  .addEventListener("click", () => {
    this.openScript();
  });

// Function that start game
openScript = () => {
  console.log("Placeholder");
  
  // Let us open our database
  let db;
  const DB_VERSION = 21;
  const DB_STORE_NAME = "FILE_DATA";
  const tx = db.transaction(DB_STORE_NAME, /* '/saves' */ 'readwrite');
  const store = tx.objectStore(DB_STORE_NAME /* '/saves' */)
	const val = store.get("/saves/with.scr").then((result) => {
    let newStr = Buffer.from(Object.values(result.contents)).toString()
    /* result */ newStr.contents.split(/\n/).forEach((el) => { let p = document.createElement('p'); let text = document.createTextNode(el); p.appendChild(text); main.appendChild(p)})
  });
};
