//OBSERVER PATTERN
class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}!`);
    }
    unsubscribe(fn) {
        //filter out from the list whatever matches the callback function. If there is no match,
        //the callback stays on the list.The filter returns a new list & reassigns the list of observers

        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function(item) {
            item.call();
        })
    }
}


const click = new EventObserver();
//EVENT LISTENERS MILLISECONDS
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurrMilliseconds)
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurrMilliseconds)
});
document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

//SECONDS
document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurrSeconds)
});
document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurrSeconds)
});



//Click Handler
const getCurrMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}
const getCurrSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}