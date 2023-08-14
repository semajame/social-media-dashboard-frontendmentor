const objects = [{
        icon: "images/icon-facebook.svg",
        numbers: {
            number: 1987,
            k: "" 
        },
        today: 12,
        word: "Followers",
        arrow: "images/icon-up.svg",
        name: "@nathanf",
        color: "hsl(208, 92%, 53%)"
    },
    
    {
        icon: "images/icon-twitter.svg",
        numbers: {
            number: 1044,
            k: "" 
        },
        today: 99,
        word: "Followers",
        arrow: "images/icon-up.svg",
        name: "@nathanf",
        color: "hsl(203, 89%, 53%)"
    },
    
    {
        icon: "images/icon-instagram.svg",
        numbers: {
            number: 11,
            k: "k" 
        },
        today: 1099,
        word: "Followers",
        arrow: "images/icon-up.svg",
        name: "@realnathanf",
        gradient: "linear-gradient(270deg, rgba(223,73,150,1) 36%, rgba(253,196,104,1) 100%);"
    },

    {
        icon: "images/icon-youtube.svg",
        numbers: {
            number: 8239,
            k: "" 
        },
        today: 144,
        word: "Subscribers",
        arrow: "images/icon-down.svg",
        name: "Nathan F.",
        color: "hsl(348, 97%, 39%)",
        downcolor: "hsl(356, 69%, 56%)"
}]


let objectsHTML = ``;
let objects2HTML = ``;

objects.forEach((objects) =>{
    objectsHTML += `
    
    <div class="main-content active" style= "border-top:3px solid;
    border-image: ${objects.gradient};
    border-image-slice: 1;
    border-color: ${objects.color}">
        <div class="main-header">
            <img src="${objects.icon}" alt="Icon">
            <span class="active">${objects.name}</span>
        </div>
        <div class="main-middle">
            <h2 class="active">
                ${objects.numbers.number} 
                ${objects.numbers.k} 
            </h2>
            <span>${objects.word}</span>
        </div>
        <div class="main-bottom">
            <img src="${objects.arrow}" alt="Up Icon">
            <span style="color: ${objects.downcolor}">${objects.today} Today</span>
        </div>
    </div>
    
    `
})

const objects2 = [{
    views: "Page Views",
    image: "images/icon-facebook.svg",
    numbers: {
        number: 87,
        k: ""
    },
    arrow: "images/icon-up.svg",
    today: 3
},
{
    views: "Likes",
    image: "images/icon-facebook.svg",
    numbers: {
        number: 52,
        k: ""
    },
    arrow: "images/icon-down.svg",
    downcolor: "hsl(356, 69%, 56%)",
    today: 2
},
{
    views: "Likes",
    image: "images/icon-instagram.svg",
    numbers: {
        number: 5462,
        k: ""
    },
    arrow: "images/icon-up.svg",
    today: 2257
},
{
    views: "Profile Views",
    image: "images/icon-instagram.svg",
    numbers: {
        number: 52,
        k: "k"
    },
    arrow: "images/icon-up.svg",
    today: 1375
},
{
    views: "Retweets",
    image: "images/icon-twitter.svg",
    numbers: {
        number: 117,
        k: ""
    },
    arrow: "images/icon-up.svg",
    today: 303
},
{
    views: "Likes",
    image: "images/icon-twitter.svg",
    numbers: {
        number: 507,
        k: ""
    },
    arrow: "images/icon-up.svg",
    today: 553
},
{
    views: "Likes",
    image: "images/icon-youtube.svg",
    numbers: {
        number: 107,
        k: ""
    },
    downcolor: "hsl(356, 69%, 56%)",
    arrow: "images/icon-down.svg",
    today: 19
},
{
    views: "Total Views",
    image: "images/icon-youtube.svg",
    numbers: {
        number: 1407,
        k: ""
    },
    downcolor: "hsl(356, 69%, 56%)",
    arrow: "images/icon-down.svg",
    today: 12


}]

objects2.forEach((objects2)=>{
    objects2HTML += `
    
    <div class="grid-content active">
        <div class="grid-header">
            <span class="active">${objects2.views}</span>
            <img src="${objects2.image}" alt="Icon">
        </div>
        <div class="grid-middle">
            <span class="views active">${objects2.numbers.number}
            ${objects2.numbers.k}
            </span>
            <div class="grid-number">
                <img src="${objects2.arrow}" alt="Image">
                <span style="color: ${objects2.downcolor}">
                ${objects2.today}%</span>
            </div>
        </div>
    </div>
    
    `
})

const content = document.querySelector('.main-flexbox').innerHTML = objectsHTML;

const gridcontent = document.querySelector('.main-grid').innerHTML = objects2HTML;
