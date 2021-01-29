let btncalc = document.getElementById('btn')

btncalc.addEventListener('click',function(){
    
    let billam = document.getElementById('bill_amount').value;
    let tipp = document.getElementById('tip_percentage').value;
    let tipamount = document.getElementById('tip_amount').value = billam/tipp;
    let total = document.getElementById('total_bill').value = parseFloat(billam) +parseFloat(tipamount);

})