//Load event listeners for keystrokes
function loadKeys() {
    var player=document.getElementById('player');
    document.addEventListener("keydown",(event) => {
        console.log(event.code);
        switch(event.code) {
            case 'KeyW':
                console.log(player.style.top);
                player.style.top=parseInt(player.style.top.match('[-+][0-9]+')[0])-10+'px';
                console.log(player.style.top);
                //void player.offsetWidth; //This triggers a DOM reflow to update the position
                break;
        }
    });
}
function loadStock() {
    let stock;
    console.log("loading stock");
    fetch('../data/stock.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    
    //console.log(JSON.stringify(stock));
}
function showItems(stock) {
    console.log("Showing items");
}
function purchaseItem() {
    console.log("purchasing");
}
function sellItem() {
    console.log("selling");
}
function shopDialog(message) {
    console.log("saying "+message);
}

//START HERE!!!
function init() {
    loadStock();
    loadKeys();
}
init();