let valores = [5, 2, 7, 8, 3, 1, 4, 6]
valores.sort();
valores.push(9);
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}   

