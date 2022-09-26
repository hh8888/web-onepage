

var nft={};


nft.connect = async function(){
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    console.log(accounts);
    if(accounts[0] != null){
        //x.hide(x.get('button.connect'));
        x.get('button.connect').innerText = accounts[0];
        x.show(x.get('button.mint'));
    }
    return accounts;
}