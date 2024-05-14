N = 200

triplets = []

for(let i = 0; i < N; i++) {
    triplets.push("A" + i + "," + "B" + i + "," + "C" + i)
}

triplets.push("A7,B4,B3")
triplets.push("A9,B6,B8")
triplets.push("A11,B9,B10")
triplets.push("A11,B9,A10")

const defaultDataset = triplets;