class Product {
    constructor(productId,proName,proPrice){
        this.productId = productId;
        this.proName = proName;
        this.proPrice = proPrice;
    }

    applyGST($gst){
        this.proFinalPrice = this.proPrice + (this.proPrice * $gst) / 100; 
    }

    displayProductInfo(){
       
        let output = document.getElementById("output");
        
        output.innerHTML += " </br></b1>Product ID  = " + this.productId;
        output.innerHTML += " </br></b1>Product Name  = " + this.proName;
        output.innerHTML += " </br></b1>Product Price without GST  = " + this.proPrice;
        output.innerHTML += '</br> Product Final Price with GST = ' + this.proFinalPrice;
    }

}

let product1 = new Product(1001,"T-shirt1",500);
product1.applyGST(18);
product1.displayProductInfo();
