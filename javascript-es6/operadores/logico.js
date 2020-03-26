// AND &&
exp1 && exp2

var a1 = true && true; //retorna true
var a2 = true && false; //retorna false
var a3 = false && true; //retorna false
var a4 = false && (3 == 4); //retorna true
var a5 = "Gato" && "Cão"; //retorna Cão
var a6 = false && "Gato"; //retorna false
var a7 = "Gato" && false; //retorna false

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);

//OU ||
exp1 || exp2

var o1 = true || true; //retorna true
var o2 = false || true; //retorna true
var o3 = true || false; //retorna true
var o4 = false || (3 == 4); //retorna false
var o5 = "Gato" || "Cão"; //retorna Gato
var o6 = false || "Gato"; //retorna Gato
var o7 = "Gato" || false; //retorna Gato

console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);
console.log(o5);
console.log(o6);
console.log(o7);

//NOT !
!exp1
var n1 = !true; //retorna false
var n2 = !false; //retorna true
var n3 = !"Gato"; //retorna false (a string preenchida é true)

//true
" "
"preenchida"
1
['teste']

//false
""
0
[]