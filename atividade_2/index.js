let rs =require("readline-sync")

let mascara = rs.question("Voce esta usando mascara quando precisa sair de casa ( sim ou nao) ?")
let maos = rs.question("Voce esta lavando as maos frequentemente ?")

if(mascara === "sim" || maos === "sim"){
console.log("Parabens com atitudes assim iremos vencer o covid19")
} else {
    console. log("Poxa que triste assim voce nao esta ajudando a combater o covid19,por favor se cuide.")
}
