/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, description) {
    const nft = {
        name: name,
        artist: artist,
        description: description
    };
    nftCollection.push(nft);
}

// Step 3: Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT ${i + 1}:`);
        console.log(`  Name: ${nftCollection[i].name}`);
        console.log(`  Artist: ${nftCollection[i].artist}`);
        console.log(`  Description: ${nftCollection[i].description}`);
    }
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line
mintNFT("Digital Artwork #1", "John Doe", "A beautiful piece of digital art.");
mintNFT("Digital Artwork #2", "Jane Smith", "A stunning abstract creation.");
mintNFT("Digital Artwork #3", "Alice Johnson", "A mesmerizing landscape.");

console.log("List of all NFTs:");
listNFTs();

console.log(`Total Supply: ${getTotalSupply()}`);nftScript.js;



