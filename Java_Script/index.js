function print(firstName , secondName)
{
    console.log(`Hello ${firstName} ${secondName}`);
}
print("Venkat" , "Kavi");

function billing(name , price)
{
    let shipping = 5.85;
    console.log(`Hi ${name} Thank you for shopping with us, 
    product Price  : ${price} 
    Shipping price : ${shipping}
    Total Price    : ${price + shipping}
    `);
}
billing("VenkatKavi" , 85);

// Searching a String
console.log("Types of finding Strings technique");

const cuteCouples = "VenkatKavi";
console.log("This is includes technique");
console.log(cuteCouples.includes("VenkatKavi"));
console.log("This is startsWith technique");
console.log(cuteCouples.startsWith("Ve"));
console.log("This is endsWith technique");
console.log(cuteCouples.endsWith("vi"));
console.log("This is Search technique");
console.log(cuteCouples.search("v"));

// Sets
let books = new Set();
books.add("VK0");
books.add("VK1").add("VK2");
console.log(books);
console.log(books.size);
console.log("VK2" , books.has("VK2"));
books.delete("VK2");
console.log(books);

// Spread Operator
console.log("This is Spread Operator");
const dayTime = {
    breakfest : "Milk",
    lunch : "Juice"
};

const nightTime = "Vegetables";

const packing = {
    ...dayTime,
    nightTime
};
console.log(packing);

// .repeat()

let cuteKavi = {
    orru(times){
        console.log("orru".repeat(times));
    },
    purru(times){
        console.log("purru".repeat(times));
    },
    jollu(times){
        console.log("jollu".repeat(times));
    }

};

cuteKavi.orru(8);
cuteKavi.purru(5);
cuteKavi.jollu(85);

fetch("https://api.open-notify.org/astros.json").then((res) => res.json).then(console.log);

// Async and Await
console.log("This is Async and Await");

const delay = (seconds) => 
new Promise(
    (resolves) =>
     setTimeout(resolves , seconds * 1000)
 );

const countToFive = async () => {
    console.log("Zero seconds");
    await delay(1);
    console.log("one seconds");
    await delay(2);
    console.log("second seconds");
    await delay(3);
    console.log("three seconds");
};
countToFive();