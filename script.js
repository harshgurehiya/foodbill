// var name, email;
document.getElementById('name').addEventListener("keyup",function(){
	// name = this.value;
document.getElementById("name2").innerHTML=this.value;	
});

document.getElementById('email').addEventListener("keyup",function(){
	// email = document.getElementById("email").value;
document.getElementById("email2").innerHTML=this.value;	
});

var Rice_price=50, Chicken_price=250, Biryani_price=100, Roti_price=10, Paneer_price=100;
var Rice_q=0, Chicken_q=0, Biryani_q=0, Roti_q=0, Paneer_q=0;
var RicePriceShow="", ChickenPriceShow="", BiryaniPriceShow="", RotiPriceShow="", PaneerPriceShow="";

document.getElementById("Rice").addEventListener("keyup",function(){
	if (this.value==""||this.value==0){
		RicePriceShow ="";
		Rice_q=0;
		showBill()

	}else{
		Rice_q = this.value;
		RicePriceShow = "<tr><td>Rice</td><td>Rs."+Rice_price+"</td><td>"+Rice_q+"</td><td>"+Rice_price+"X"+Rice_q+" = "+Rice_price*Rice_q+"</td></tr>"
		showBill()
	}	
});

document.getElementById("Chicken").addEventListener("keyup",function(){
	if (this.value==""||this.value==0){
		ChickenPriceShow ="";
		Chicken_q=0;
		showBill()

	}else{
		Chicken_q = this.value;
		ChickenPriceShow = "<tr><td>Chicken</td><td>Rs."+Chicken_price+"</td><td>"+Chicken_q+"</td><td>"+Chicken_price+"X"+Chicken_q+" = "+Chicken_price*Chicken_q+"</td></tr>"
		showBill()
	}	
});

document.getElementById("Biryani").addEventListener("keyup",function(){
	if (this.value==""||this.value==0){
		BiryaniPriceShow ="";
		Biryani_q=0;
		showBill()

	}else{
		Biryani_q = this.value;
		BiryaniPriceShow = "<tr><td>Biryani</td><td>Rs."+Biryani_price+"</td><td>"+Biryani_q+"</td><td>"+Biryani_price+"X"+Biryani_q+" = "+Biryani_price*Biryani_q+"</td></tr>"
		showBill()
	}	
});

document.getElementById("Roti").addEventListener("keyup",function(){
	if (this.value==""||this.value==0){
		RotiPriceShow ="";
		Roti_q=0;
		showBill()

	}else{
		Roti_q = this.value;
		RotiPriceShow = "<tr><td>Roti</td><td>Rs."+Roti_price+"</td><td>"+Roti_q+"</td><td>"+Roti_price+"X"+Roti_q+" = "+Roti_price*Roti_q+"</td></tr>"
		showBill()
	}	
});

document.getElementById("Paneer").addEventListener("keyup",function(){
	if (this.value==""||this.value==0){
		PaneerPriceShow ="";
		Paneer_q=0;
		showBill()

	}else{
		Paneer_q = this.value;
		PaneerPriceShow = "<tr><td>Paneer</td><td>Rs."+Paneer_price+"</td><td>"+Paneer_q+"</td><td>"+Paneer_price+"X"+Paneer_q+" = "+Paneer_price*Paneer_q+"</td></tr>"
		showBill()
	}	
});


function showBill(){
	document.getElementById("BillStatement").innerHTML=RicePriceShow+ChickenPriceShow+BiryaniPriceShow+RotiPriceShow+PaneerPriceShow;
	document.getElementById("amount").innerHTML=Rice_price*Rice_q+Chicken_price*Chicken_q+Biryani_price*Biryani_q+Roti_price*Roti_q+Paneer_price*Paneer_q;
}



