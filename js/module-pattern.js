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
function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'basic') {
            member = new BasicMembership(name);
        } else if(type === 'standard') {
            member = new StandardMembership(name);
        } else if(type === 'premium') {
            member = new PremiumMembership(name);
        }
        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member;
    }
}

const BasicMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}
const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$10';
}
const PremiumMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Smith', 'basic'));
members.push(factory.createMember('Jake Ladd', 'standard'));
members.push(factory.createMember('George Tudor', 'basic'));
members.push(factory.createMember('Matthew Baker', 'premium'));
members.push(factory.createMember('OJ Hill', 'standard'));
members.push(factory.createMember('Shelby Davis', 'premium'));




 console.log(members);

members.forEach(function(member) {
   member.define();
})