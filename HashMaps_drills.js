const HashMap = require('./HashMap');
const HashMapChain = require('./HashMapChain');
const Hashmap_Chain = require('./HashMapChain');

MAX_LOAD_RATIO = 0.5;
SIZE_RATIO = 3;


//LOTR Function
function main() {
    const lotr = new HashMap();

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");

    console.log("LOTR", lotr); //length is 9, there are collisions in the data under "Hobbit" and "Maiar" 
    console.log(lotr.get("Maiar"));  // Sauron, we currently don't have code to resolve collisions
    console.log(lotr.get("Hobbit")); // Frodo, same reason as above- no code to resolve collisions ATM 
    console.log(lotr._capacity); // 24, initial capacity 8 x size ratio 3 = 24.
}

main();

//Function intentionally makes a collision and will overwrite previous data values on any duplicate keys the function finds. 
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

//Remove Duplicates
function removeDuplicates(string) {
    const map = new Map();

    let newString = "";

    string.split("").forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, "");
            newString += letter;
        }
    });
    return newString;
}

console.log(removeDuplicates("moogle"));
console.log(removeDuplicates("cookie"));
console.log(removeDuplicates("the quick brown fox jumps over the fence."));

//Palindrome Permutation
function palindromes(string) {
    const palinMap = new HashMap();

    let total = 0;

    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        try {
            let value = palinMap.get(character);
            value++;
            palinMap.set(character,value);
        }
        catch(error) {
            palinMap.set(character, 1);
        }
    }

    for (let i = 0; i < string.length; i++) {
        let checker = palinMap.get(string[i]);

        if (checker === 1) {
            total++
        }
    }

    if (total > 1) {
        return false;
    }
    return true;
}

console.log(palindromes("acecarr"));
console.log(palindromes('north'));

//Anagram Grouping
function anagram(array) {
   let words = new Map();

   for (let i = 0; i < array.length; i++) {
       let current = array[i].split('').sort().join('');

       console.log(current);

       if (!words.has(current)) {
           words.set(current, [array[i]]);
       }
       else {
           words.get(current).push(array[i]);
       }
   }

   const values = words.values();
   return Array.from(values);
}

console.log(anagram(['east','cars', 'acre', 'arcs', 'teas', 'eats', 'race']));

//Separate Chaining
function separateChain() {
    const lotr = new Hashmap_Chain();

    
}