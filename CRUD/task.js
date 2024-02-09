num=0
function inc(){
     document.getElementById("head1").innerHTML=num=num+1
}
function dec(){
    if (num==0) {
        num=0;
    document.getElementById("head1").innerHTML=num
    } else {
        document.getElementById("head1").innerHTML=num=num-1

    }
}
