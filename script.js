// write your JS code here


let price=5.99;
let quantity=0;
function increase(){
	quantity++;
	let quant= document.querySelector("#quantity").innerHTML =`${quantity}`;

let totalAmount=document.querySelector(".blue");
totalAmount.innerHTML=`${quantity*price}`;
}

function decrease(){
	if( quantity>0){
	quantity--;
	let quant= document.querySelector("#quantity").innerHTML =`${quantity}`;
	}
	else{
		quantity=0;
	}

let totalAmount=document.querySelector(".blue");
totalAmount.innerHTML=`${quantity*price}`;
}

