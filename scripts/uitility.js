// get product name using function
function getItemNameById(itemId){
    const itemElement= document.getElementById(itemId);
    const itemName = itemElement.innerText;
    return itemName;
}
// set item name to entry box
function setItemToEntryBox(id, itemName){
    const entryBox = document.getElementById(id);
    const count = entryBox.childElementCount;
    const p = document.createElement('p');
    p.classList = ('text-xl font-medium py-1')
    p.innerHTML = `
    ${count + 1}. ${itemName} `

    entryBox.appendChild(p);
}
// get the product price using function
function getItemPriceById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementPrice = parseFloat(elementText);
    return elementPrice;
}
// setItemPrice using function
function setItemPriceToTotal(id, newPrice){
    const previousTotalPriceElement = document.getElementById(id);
    const previousTotalPriceText = previousTotalPriceElement.innerText;
    const previousTotalPrice = parseFloat(previousTotalPriceText);
    const total = previousTotalPrice + newPrice;
    previousTotalPriceElement.innerText = total;

}
// check the purchase button is enable or not
function checkEnablePurchaseButton(id){
    const totalPrice = getItemPriceById(id);
    const purchaseButton = document.getElementById('purchase-btn')
    if(totalPrice > 1){
        purchaseButton.removeAttribute('disabled');
    }
}
// get the cuppon code
document.getElementById('cuppon-input').addEventListener('keyup', function(event){
    const cupponCode = event.target.value;
    const discountApplyButton = document.getElementById('discount-apply-btn')
    if(cupponCode === 'SELL200'){
        discountApplyButton.removeAttribute('disabled')
    }
    else{
        discountApplyButton.setAttribute('disabled', true)
    }
})

