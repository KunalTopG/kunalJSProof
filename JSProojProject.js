let nftarr = [];
function mintNFT(name,age,position,club){
    let nftobj = { Name:name,
    Age:age,
    Position:position,
    Club:club
    };
    nftarr.push(nftobj);
}
function listNFTs(){
    for(let i=0;i<nftarr.length;i++)
        {
            console.log("\nName:"+nftarr[i].Name);
            console.log("\nAge:"+nftarr[i].Age);
            console.log("\nPosition:"+nftarr[i].Position);
            console.log("\nClub:"+nftarr[i].Club);
        }
}
function getTotalSupply(){
    console.log(nftarr.length );
}
mintNFT("Cristiano Ronaldo",39,"Striker","Real Madrid");
mintNFT("Lionel Messi",36,"Attacking Midfielder","Barcelona");
mintNFT("Sergio Ramos",38,"Defender","Real Madrid");

listNFTs();
getTotalSupply();
