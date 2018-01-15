let oSearchIpt = document.querySelector('#search-ipt');
oSearchIpt.onkeyup = function(e){
    if(e.keyCode == 13){
        alert(this.value);
    }
};
