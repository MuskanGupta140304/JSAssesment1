/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
The metadata values will be passed to the function as parameters. When the NFT is ready, 
you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

        // Step 1: Create a variable to hold a number of NFTs
        let nftCollection = [];

        // Step 2: Create the mintNFT function
        function mintNFT(name, artist, description) {
        let nft = {
        name: name,
        artist: artist,
        description: description
        };
        nftCollection.push(nft);
        }

        // Step 3: Create the listNFTs function
        function listNFTs() {
        nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Artist: ${nft.artist}`);
        console.log(`  Description: ${nft.description}`);
        });
        }

        // Step 4: Create the getTotalSupply function
        function getTotalSupply() {
        return nftCollection.length;
        }

        // Mint some NFTs
        mintNFT("Digital Artwork #1", "Muskan", "A beautiful piece of digital art.");
        mintNFT("Digital Artwork #2", "Jatin", "A stunning abstract creation.");
        mintNFT("Digital Artwork #3", "Aliya", "A mesmerizing landscape.");

        // List all NFTs
        console.log("List of all NFTs:");
        listNFTs();

        // Print the total supply of NFTs
        console.log(`Total Supply: ${getTotalSupply()}`);
