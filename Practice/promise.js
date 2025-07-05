// const p1 = new Promise((resolve, reject) => {
//     const isTrue = true;

//     if(isTrue)
//     {
//         resolve();
//     }
//     reject();
// })
// .then(() => (console.log('Resolved')))
// .catch(()=>console.log("Rejected"))
// .finally(()=>console.log('OK'));

// const p2 = new Promise((accepted, rejected) => {
//     setTimeout(() => {
//         console.log("Resolved");
//         accepted();
//     },2000);
// })
// .then(() => console.log("Resolved"));

// console.log("Print 1");

const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve('Done');
    }, 2000);
    rejected('Not Done');
})

async function Yes() {
    try{
        const response = await promise;
        console.log(response);
    }
    catch(err)
    {
        console.log(err);
    }
}
Yes();
console.log("Next");