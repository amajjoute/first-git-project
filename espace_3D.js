const p1 = {x1 : 7, y1 : 2, z1 : 3}

const p2 = {x2 : 3, y2 : 5, z2 : 8}

let distance = Math.sqrt(Math.pow(p2.x2 - p1.x1, 2) + Math.pow(p2.y2 - p1.y1, 2) + Math.pow(p2.z2 - p1.z1, 2));

console.log(`La distance entre les deux points : ${distance.toFixed(2)}`);
