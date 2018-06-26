//Promise 
/* ways to wait for information(things to finish happening), witout blocking the thread
Unlike callbacks, we can do other things while waiting for a promise.

Three states of promises:
-Pending: doing other things while waiting
-Resolved: information recieved and ready to be used
-Rejected: promise failed to retrieve information*/

let amIGood = false;

let canIHaveGift = new Promise(
    function (resolve, reject){
        if(amIGood){
            var gift = 'toy';
            resolve(gift);
        } else {
            reject('you were not good.')
        }
    }
)


var present = function () {
    canIHaveGift
    .then(() => console.log('promise resolved'))
    .catch(() => console.log('damn, rejected.'))
}
present();