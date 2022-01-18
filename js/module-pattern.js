//BASIC MODULE STRUCTURE OR IIFE

// (function() {
//     //DECLARE PRIVATE VARS & FUNCTIONS
//
//
//    return {
//        //DECLARE PUBLIC VARS & FUNCTIONS
//    }
//
// })();


//STANDARD MODULE PATTERN
//         const UICtrl = (function() {
//             let text = 'Hello World';
//
//             const changeText = function() {
//                 const element = document.querySelector('h1');
//                 element.textContent = text;
//             }
//
//
//             return {
//                 callChangeText: function() {
//                     changeText();
//                     console.log(text);
//                 }
//             }
//         })();
//
//         UICtrl.callChangeText();


//REVEALING MODULE PATTERN
//         const ItemCtrl = (function() {
//             let data = [];
//
//             function add(item) {
//                data.push(item);
//                 console.log('Item added....');
//             }
//
//             function get(id) {
//                 return data.find(item => {
//                     return item.id === id;
//                 })
//             }
//
//             return {
//                 add: add,
//                 get: get
//             }
//         })();
//
//         ItemCtrl.add({id:1, name:'Matthew'})
//         console.log(ItemCtrl.get(1)
//         );

//SINGLETON PATTERN
//         const Singleton = (function() {
//            let instance;
//
//            function createInstance() {
//                const object = new Object('Object Instance!');
//                return object;
//            }
//
//            return {
//                getInstance: function() {
//                    if(!instance) {
//                        instance = createInstance();
//                    }
//                    return instance;
//                }
//            }
//         })();
//
//         const instanceA = Singleton.getInstance();
//         console.log(instanceA);

//FACTORY PATTERNS
//         function MemberFactory() {
//             this.createMember = function(name, type) {
//                 let member;
//
//                 if(type === 'basic') {
//                     member = new BasicMembership(name);
//                 } else if(type === 'standard') {
//                     member = new StandardMembership(name);
//                 } else if(type === 'premium') {
//                     member = new PremiumMembership(name);
//                 }
//                 member.type = type;
//
//                 member.define = function() {
//                     console.log(`${this.name} (${this.type}): ${this.cost}`)
//                 }
//                 return member;
//             }
//         }
//
//         const BasicMembership = function(name) {
//             this.name = name;
//             this.cost = '$5';
//         }
//         const StandardMembership = function(name) {
//             this.name = name;
//             this.cost = '$10';
//         }
//         const PremiumMembership = function(name) {
//             this.name = name;
//             this.cost = '$25';
//         }
//
//         const members = [];
//         const factory = new MemberFactory();
//
//         members.push(factory.createMember('John Smith', 'basic'));
//         members.push(factory.createMember('Jake Ladd', 'standard'));
//         members.push(factory.createMember('George Tudor', 'basic'));
//         members.push(factory.createMember('Matthew Baker', 'premium'));
//         members.push(factory.createMember('OJ Hill', 'standard'));
//         members.push(factory.createMember('Shelby Davis', 'premium'));
//
//
//
//
//          console.log(members);
//
//         members.forEach(function(member) {
//            member.define();
//         });


        //OBSERVER PATTERN
    // function EventObserver() {
    //     this.observers = [];
    // }
    //
    // EventObserver.prototype = {
    //     subscribe: function(fn) {
    //         this.observers.push(fn);
    //         console.log(`You are now subscribed to ${fn.name}!`);
    //     },
    //     unsubscribe: function(fn) {
    //         //filter out from the list whatever matches the callback function. If there is no match,
    //         //the callback stays on the list.The filter returns a new list & reassigns the list of observers
    //
    //         this.observers = this.observers.filter(function(item) {
    //             if(item !== fn) {
    //                 return item;
    //             }
    //         });
    //         console.log(`You are now unsubscribed from ${fn.name}`);
    //     },
    //     fire: function() {
    //         this.observers.forEach(function(item) {
    //             item.call();
    //         })
    //     }
    //
    // }
    //
    // const click = new EventObserver();
    //  //EVENT LISTENERS MILLISECONDS
    // document.querySelector('.sub-ms').addEventListener('click', function() {
    //     click.subscribe(getCurrMilliseconds)
    // });
    // document.querySelector('.unsub-ms').addEventListener('click', function() {
    //     click.unsubscribe(getCurrMilliseconds)
    // });
    // document.querySelector('.fire').addEventListener('click', function() {
    //     click.fire();
    // });
    //
    // //SECONDS
    // document.querySelector('.sub-s').addEventListener('click', function() {
    //     click.subscribe(getCurrSeconds)
    // });
    // document.querySelector('.unsub-s').addEventListener('click', function() {
    //     click.unsubscribe(getCurrSeconds)
    // });
    //
    //
    //
    // //Click Handler
    // const getCurrMilliseconds = function() {
    //     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
    // }
    // const getCurrSeconds = function() {
    //     console.log(`Current Seconds: ${new Date().getSeconds()}`)
    // }


//Mediator Pattern
const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
       this.chatroom.send(message, this, to)
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; //list of users
    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                //SINGLE USER MESSAGE
                to.receive(message, from);
            } else {
                //MASS MESSAGE
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}
const joe = new User('Joe');
const george = new User('George');
const matthew = new User('Matthew');
const oj = new User('OJ');

const chatroom = new Chatroom();

chatroom.register(joe);
chatroom.register(george);
chatroom.register(matthew);
chatroom.register(oj);

joe.send('Hello george', george);
oj.send('Hey Matt, can you tutor me this afternoon?', matthew);
matthew.send('Anyone else need tutoring this afternoon?');