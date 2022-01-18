const pageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }
    this.change = function(state) {
        currentState = state;
    }
};

//Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
     <div class="jumbotron">
        <h1 class="display-3">Hello World!</h1>
        <p class="lead">Wolverine (birth name: James Howlett;[1] alias: Logan and Weapon X) is a fictional character appearing in American comic books published by Marvel Comics, mostly in association with the X-Men. He is a mutant who possesses animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand. 
        Wolverine has been depicted variously as a member of the X-Men, X-Force, Alpha Flight, Fantastic Four, and the Avengers.</p>
        <hr class="my-4">
        <p>The character appeared in the last panel of The Incredible Hulk #180 before having a larger role in #181 (cover-dated November 1974). 
        He was created by Marvel editor-in-chief Roy Thomas,[2] writer Len Wein,[3] and Marvel art director John Romita Sr. Romita designed the character's costume, but the character was first drawn for publication by Herb Trimpe. Wolverine then joined a revamped version of the superhero team the X-Men, where eventually writer Chris Claremont and artist-writer John Byrne would play significant roles in the character's development. Artist Frank Miller collaborated with Claremont and helped revise the character with a four-part eponymous limited series from September to December 1982, which debuted Wolverine's catchphrase, 
        "I'm the best there is at what I do, but what I do best isn't very nice."</p>
        <p class="lead">
            <a href="#" class="btn btn-outline-primary btn-lg" role="button">Learn More</a>
        </p>
      
    </div>   
    
    `;
};

//ABOUT STATE
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About';
    document.querySelector('#content').innerHTML = `
        <p>Early life
Wolverine was born as James Howlett in northern Alberta, Canada, (approximately near Cold Lake) during the late 19th century, purportedly to rich farm owners John and Elizabeth Howlett,[29] though he is actually the illegitimate son of the Howletts' groundskeeper, Thomas Logan.[30] 
After Thomas is thrown off the Howletts' property for an attempted rape perpetrated by his other son, named simply Dog, he returns to the Howlett manor and kills John Howlett. 
In retaliation, young James kills Thomas with bone claws that emerge from the back of his hands, as his mutation manifests.[31] He flees with his childhood companion, Rose, and grows into manhood on a mining colony in the Yukon, adopting the name "Logan".[32] 
When Logan accidentally kills Rose with his claws, he flees the colony and lives in the wilderness among wolves,[33] until he is captured and placed in a circus.[34] Saul Creed, brother of Victor Creed, frees Logan, but after he betrays Logan and Clara Creed to Nathaniel Essex, Logan drowns Creed in Essex's potion.[35] Logan returns to civilization, residing with the Blackfoot people. Following the death of his Blackfoot lover, Silver Fox, at the hands of Victor Creed, now known as Sabretooth,[36] he is ushered into the Canadian military during World War I. Logan spends time in Madripoor before settling in Japan, where he marries Itsu and has a son, Daken. Logan is unaware of his son for many years.

World War II
During World War II, Logan teams up with Captain America[37] and continues a career as a mercenary. 
He serves with the 1st Canadian Parachute Battalion[38] during D-Day, and later with the CIA before being recruited by Team X, a black ops unit.

Weapon X Program
As a member of Team X, Logan is given false memory implants. 
Eventually breaking free of this mental control, he joins the Canadian Defense Ministry. 
Logan is subsequently kidnapped by the Weapon X program, where he remains captive and experimented on, until he escapes.[39] 
It is during his imprisonment by Weapon X that he has adamantium forcibly fused onto his bones. James and Heather Hudson help him recover his humanity following his escape, and Logan begins work as an intelligence operative for the Canadian government's Department H. 
He becomes Wolverine, one of Canada's first superheroes. In his first mission, he is dispatched to stop the destruction caused by a brawl between the Hulk and the Wendigo.[40]</p>
    `;
};

//Contact State
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
    <form>
       <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" placeholder="Enter name">
    </div> 
    <div class="form-group">
          <label>Email Address</label>
          <input type="text" class="form-control" placeholder="Enter email">
    </div> 
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    `;
};

//INSTANTIATE PAGESTATE
const page = new pageState();

//INIT HOME STATE
page.init();

//UI VARS
const home = document.getElementById('home')
        about = document.getElementById('about')
        contact = document.getElementById('contact');

//Home Listener
home.addEventListener('click', (e) => {
    page.change(new homeState);

    e.preventDefault();
})

//About Listener
about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
})

//Contact Listener
contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
})
