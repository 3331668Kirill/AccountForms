


export function chunkArray(rawTTN:Array<string | number | null >, chunk_size:number){
    let index = 0;
    let arrayLength = rawTTN.length;
    let tempArray = [];
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = rawTTN.slice(index, index+chunk_size);

        tempArray.push(myChunk);
    }
    return tempArray;
}