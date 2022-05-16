updatebaskettotal();

document.getElementById("removeitems").addEventListener("click", emptybasket);
var btns = document.getElementsByClassName('addtobasket');
for (var i = 0; i < btns.length; i++) {
	 btns[i].addEventListener('click', function() {addtobasket(this);});
}

function addtobasket(elem) {
	var sibs = [];
    var getitemprice;
    var getitemName;
    var basket = [];
     var stringbasket;
	 
	  while(elem = elem.previousSibling) {
		if (elem.nodeType === 3) continue; 
        if(elem.className == "price"){
            getitemprice = elem.innerText;
        }
		 if (elem.className == "itemname") {
            getitemName = elem.innerText;
        }
        sibs.push(elem);
    }
	
	 var item = {
        itemname : getitemName,
        itemprice : getitemprice
    };
	
	var stringitem = JSON.stringify(item);
	
	if(!sessionStorage.getItem('basket')){
		
	basket.push(stringitem);
	stringbasket = JSON.stringify(basket);
	sessionStorage.setItem('basket', stringbasket);
	addedToBasket(getitemName);
        updateBasketTotal();
	}
	
	else { 
		basket = JSON.parse(sessionStorage.getItem('basket'));
		   basket.push(stringitem);
		   stringbasket = JSON.stringify(basket);
		   sessionStorage.setItem('basket', stringbasket);
        addedToBasket(getitemName);
        updatebasketTotal();
	}
}

function updatebasketTotal(){
    //init
    var total = 0;
    var price = 0;
    var items = 0;
    var itemname = "";
    var basketcard = "";
    if(sessionStorage.getItem('basket')) {
		var basket = JSON.parse(sessionStorage.getItem('basket'));
		items = basket.length;
		for (var i = 0; i < items; i++){
			var x = JSON.parse(basket[i]);
			price = parseFloat(x.price.split('£')[1]);
			itemname = x.itemname;
			basketcard += "<tr><td>" + itemname + "</td><td>£" + price.toFixed(2) + "</td></tr>";
			total += price;
		}
	}
	document.getElementById("total").innerHTML = total.toFixed(2);
	document.getElementById("basketcard").innerHTML = basketcard;
	document.getElementById("productquantity").innerHTML = items;
}

function addedTobasket(pname) {
  var message = pname + " was added to the basket";
  var alerts = document.getElementById("alerts");
  alerts.innerHTML = message;
  if(!alerts.classList.contains("message")){
     alerts.classList.add("message");
  }
}

function emptybasket() {
	if(sessionStorage.getItem('basket')){
        sessionStorage.removeItem('basket');
        updatebasketTotal();
      //clear message and remove class style
      var notifications = document.getElementById("notifications");
      alerts.innerHTML = "";
      if(alerts.classList.contains("text")){
          alerts.classList.remove("text");
      }
    }
}

function checkoutNow() {
	let confirmAction = confirm("Proceed to Checkout?");
	
	if (confirmAction) {
	  document.getElementById('checkoutDiv').style.display = "block";
	} else {
	  alert("Continue Shopping");
	}
}