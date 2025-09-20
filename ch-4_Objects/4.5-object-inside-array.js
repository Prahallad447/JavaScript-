// Object inside array
let blockList = [{Username : "john",reason:"Abusive Contact"}, {Username : "sam",reason:"Spam"}]
console.log(blockList)

for(let i=0;i<blockList.length;i++){
    console.log(`${blockList[i].Username} Blocked due to this reason ${blockList.reason} as reason`);

}