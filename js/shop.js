//Load event listeners for keystrokes
function loadKeys(player) {
    document.addEventListener("keydown",(event) => {
        console.log(event.code);
        switch(event.code) {
            case 'KeyW':
                console.log(player.style.top);
                player.style.top=parseInt(player.style.top.match('[-+]?[0-9]+')[0])-10+'px';
                console.log(player.style.top);
                break;
            case 'KeyS':
                console.log(player.style.top);
                player.style.top=parseInt(player.style.top.match('[-+]?[0-9]+')[0])+10+'px';
                console.log(player.style.top);
                break;
            case 'KeyA':
                console.log(player.style.left);
                player.style.left=parseInt(player.style.left.match('[-+]?[0-9]+')[0])-10+'px';
                console.log(player.style.left);
                break;
            case 'KeyD':
                console.log(player.style.left);
                player.style.left=parseInt(player.style.left.match('[-+]?[0-9]+')[0])+10+'px';
                console.log(player.style.left);
                break;
        }
    });
}
function loadStock() {
    let stock;
    console.log("loading stock");
    fetch('./data/stock.json')
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
function init(player) {
    player.style.top="-200";
    player.style.left="450";
    loadStock();
    loadKeys(player);
}
var player=document.getElementById('player');;
init(player);