const getRandomId = (min =0, max = 500000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString().padStart(6, "0");
};

function today(){
    let d = new Date();
    let day = d.getDate().toString().padStart(2,"0");
    let month = (d.getMonth()+1).toString().padStart(2,"0");
    let year = d.getFullYear();
    let today = `${day}/${month}/${year}`;
    return today;
}

function createTd(inputText, alignToRight = false, isAmount = false){
    let td = document.createElement("td");
    let text = document.createTextNode(inputText);
    if(alignToRight){ td.classList.add('text-end')}
    else{ td.classList.add('text-center') }
    if(isAmount){ td.classList.add('amount') }
    td.append(text);
    return td;
}

function calculateTotal(){
    let amounts = document.querySelectorAll('.amount');
    let total = 0;
    if(amounts.length){
        amounts.forEach(amount => total += Number(amount.innerText))
    }
    return total;
}

// function showEmptyRow(){
//     rows.innerHTML += "<tr><td colspan='5' class='text-center'>There is no row</td></tr>";
// }



let invoiceNo = document.querySelector('#invoiceNo');
invoiceNo.innerText = getRandomId();

let showDate = document.querySelector('#showDate');
showDate.innerText = today();

let cashierId = document.querySelector('#cashierId');
cashierId.innerText = getRandomId();


let addNewRow = document.getElementById('addNewRow');
let inputProductInfo = document.getElementById('inputProductInfo');
let inputPrice = document.getElementById('inputPrice');
let inputQty = document.getElementById('inputQty');
let rows = document.querySelector('#rows');
let rowNo = 1;
let totalAmount = document.getElementById('totalAmount');
let emptyTable = document.getElementById('emptyTable');

addNewRow.addEventListener('submit',function (e){

    // if(rows.childNodes.length === 1 && rows.childNodes[0]){
    //     showEmptyRow();
    // }

    e.preventDefault();
    let productInfo = inputProductInfo.value;
    let price = inputPrice.valueAsNumber;
    let qty = inputQty.valueAsNumber;
    let amount = qty * price;
    console.log(productInfo,price,qty, amount);

    let tr = document.createElement("tr");
    tr.append(createTd(rowNo++,true))
    tr.append(createTd(productInfo))
    tr.append(createTd(qty,true))
    tr.append(createTd(price,true))
    tr.append(createTd(amount,true, true))
    rows.append(tr);

    this.reset();

    totalAmount.innerText = calculateTotal();
    emptyTable.style.display="none";

})