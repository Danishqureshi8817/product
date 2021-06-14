function product(){
    var pn=prod.options[prod.selectedIndex].text
    var pp=prod.options[prod.selectedIndex].value
    pname.innerHTML="&#10148"+"Device Name:"+pn
    pprice.innerHTML="&#10148"+"Price:"+pp
    img.src=pn+".jpg"  
}

function amount(){
    var pp=prod.options[prod.selectedIndex].value
    amt.innerHTML="&#10148"+"Total Amount:"+pp*qtny.value
    demand.innerHTML="&#10148"+"Quantity:"+qtny.value
}

function offer(){
    var on=ofr.options[ofr.selectedIndex].text
    var op=ofr.options[ofr.selectedIndex].value
    ofer.innerHTML="&#10148"+"Offer:-"+on
    tage.innerHTML="&#10148"+"Discount:"+op+"%"
}

function namt(){
    var pp=prod.options[prod.selectedIndex].value
    var nt=qtny.value*pp
    var od=ofr.options[ofr.selectedIndex].value
    var dis=nt*od/100
    var at=nt-dis
    netamt.innerHTML="&#10148"+"NET-AMOUNT:"+at
}

