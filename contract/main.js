async function main(){
const provider = new ethers.providers.Web3Provider(window.ethereum);

const signer = provider.getSigner();
await provider.send("eth_requestAccounts",[]);
const contract = new ethers.Contract(contractAddress, contractABI, provider);
const contractWithSigner = contract.connect(signer);

viewVote();
checkResult();

// setInterval(function(){
// viewVote();
// checkResult();
// },2000);

$('#happy').click(function(){
    contractWithSigner.IsHappy();
})
$('#sad').click(function(){
    contractWithSigner.IsSad();
})
$('#neutral').click(function(){
    contractWithSigner.IsNeutral();
})

async function viewVote(){
const voteCount = await contract.viewVote();
$('#Happy').text(`${voteCount[0]}`);
$('#Sad').text(`${voteCount[1]}`);
$('#Neutral').text(`${voteCount[2]}`);
}

async function checkResult(){
    const voteStatus = await contract.checkResult();
    if(voteStatus[0] == true){
        $("#status").text("happy");
    }

    if(voteStatus[1] == true){
        $("#status").text("sad");
    }

    if(voteStatus[2] == true){
        $("#status").text("neutral");
    }

return voteStatus;
}
}
main();