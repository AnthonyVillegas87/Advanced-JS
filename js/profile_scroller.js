"use strict"
const data = [
    {
        name: 'Matthew Baker',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Samantha Foster',
        age: 33,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Davie Crockett',
        age: 40,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn, MA',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    }
];

const profiles = profileIterator(data);
//call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>

    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `;
} else {
    window.location.reload();
}

}
//Iterator function
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ?
                {value: profiles[nextIndex++], done: false} :
                {done: true}
        }
    };
}