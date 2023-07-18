//Load event listeners for keystrokes
function loadKeys(player) {
    document.addEventListener("keydown",(event) => {
        console.log(event.code);
        switch(event.code) {
            case 'KeyW':
                console.log(player.style.top);
                player.style.top=parseInt(player.style.top.match('[-+]?[0-9]+')[0])-10+'px';
                console.log(player.style.top);
                //check if player is next to counter -450x330 - -450x610
                var left=parseInt(player.style.left.match('[-+]?[0-9]+')[0]);
                var top=parseInt(player.style.top.match('[-+]?[0-9]+')[0]);
                if (top=-450 && (left>330 && left<=610)) {
                    console.log(top+'|'+left);
                    shop();
                }
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
            case "Enter":
                if (document.getElementById('shopMessage').style.display=='block') {
                    document.getElementById('shopMessage').style.display='none';
                    showItems("x");
                }
        }
    });
}
function shop() {
    shopDialog("Welcome to my shop! Feel free to browse goods.");
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
    var shopItemsDiv=document.getElementById("shopItems");
    shopItemsDiv.innerHTML="<div>1</div><div>2</div><div>3</div>"
    shopItemsDiv.style.display="flex";

}
function purchaseItem() {
    console.log("purchasing");
}
function sellItem() {
    console.log("selling");
}
function shopDialog(message) {
    let shopMessage=document.getElementById("shopMessage");
    shopMessage.innerHTML=message;
    shopMessage.style.display='block';
    console.log("saying "+message);
}
//shop playbook
//  Greet (message,enter past)
//  show items
//  select item
//  select quantity
//  purchase or cancel
//  leave
//  goodbye messsage
//
//START HERE!!!
function init(player) {
    player.style.top="-200";
    player.style.left="450";
    loadStock();
    loadKeys(player);
}
var player=document.getElementById('player');;
init(player);