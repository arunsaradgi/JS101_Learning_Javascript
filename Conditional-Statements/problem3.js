let purchase=4000;
let minPurchase=3999;

if(purchase>=minPurchase){
  let discount=purchase*0.1;
  let newBill=purchase-discount
  console.log(newBill);
}else {
  console.log("Not eligible");
}