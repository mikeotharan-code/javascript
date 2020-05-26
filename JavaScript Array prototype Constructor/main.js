Array.prototype.myUcase = function(){
    var i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

function upperCase(){
    var names = ["Mike ", "Bruno ", "Osorio ", "Otharan"];
    names.myUcase();
    document.getElementById("demo").innerHTML = names;
}