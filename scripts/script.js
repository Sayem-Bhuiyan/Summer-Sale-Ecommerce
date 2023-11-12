
// calculate product price to set Entry
function CalculateProcuctPrice(itemNameId, itemPriceId){
    const itemName = getItemNameById(itemNameId);
    setItemToEntryBox('set-entry', itemName)
    const itemPrice = getItemPriceById(itemPriceId);
    setItemPriceToTotal('total-price', itemPrice);
    setItemPriceToTotal('total', itemPrice);
    checkEnablePurchaseButton('total')
}


// set the discount price
function setDiscountPrice(){
    const totalPrice = getItemPriceById('total-price');
    const discountPrice = getItemPriceById('discount');
    const total = getItemPriceById('total');
    if(totalPrice >= 200){
        const discount = totalPrice * (20/100); 
        const discountTwoDecimal = discount.toFixed(2) 
        document.getElementById('discount').innerText = discountTwoDecimal;
        
        const newTotalPrice = totalPrice - discount;
        document.getElementById('total').innerText = newTotalPrice;
    }
}


// go home button
function goHomeButton(){
    document.getElementById('set-entry').innerHTML = ``;
    document.getElementById('total-price').innerText = 0;
    document.getElementById('discount').innerText = 0;
    document.getElementById('total').innerText = 0;
}