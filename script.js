function displayParameters() {
    // Get the URL parameters
    const params = new URLSearchParams(window.location.search);
    
    // Prepare an object to hold parameter values
    const data = {
        title: params.get('title'),
        author: params.get('author'),
        desc: params.get('desc'),
        shelf: params.get('shelf'),
        genre: params.get('genre'),
        borrowed:params.get('borrow')
    };

    // Get the output container
    if(data.title)
    {
        let div= document.querySelector("#title")
        div.innerHTML=`<strong>${div.innerHTML+data.title}</strong>`
    }

    if(data.author)
    {
        div= document.querySelector("#author")
        div.innerHTML=`<strong>${div.innerHTML+data.author}</strong>`
    }

    if(data.desc)
    {
        div= document.querySelector("#description")
        div.innerHTML=`<strong>${div.innerHTML+data.desc}</strong>`
    }

    if(data.genre)
    {
        div= document.querySelector("#genre")
        div.innerHTML=`<strong>${div.innerHTML+data.genre}</strong>`
    }

    if(data.shelf)
    {
        div= document.querySelector("#shelf")
        div.innerHTML=`<strong>${div.innerHTML+data.shelf}</strong>`
    }

    return data;
}

function generateWikiLink(data)
{
    let wikistring=data.title;

    let splitstr=wikistring.toLowerCase().split(' ');

    for(let i=0;i<splitstr.length; i++)
        splitstr[i]=splitstr[i].charAt(0).toUpperCase()+splitstr[i].substring(1);

    wikistring=splitstr.join('_');

    wikistring="https://en.wikipedia.org/wiki/"+wikistring

    console.log(wikistring)

    document.querySelector(".wiki-button").setAttribute("href",wikistring);

}

function showMap(data)
{
  if(data.shelf){
    document.querySelector('.image .shelf').innerHTML+=data.shelf;
  }   
  else{
    document.querySelector('.image .icon div').innerHTML+="none";
  }
}


function borrow(data)
{
    document.querySelector(".response").setAttribute('style','visibility:visible')
    if(data.borrowed=="true")
    {
        
        document.querySelector(".response").innerHTML="This book is already borrowed:(..<br>please wait for few days"
    }
    else
    {
         document.querySelector(".response").innerHTML="Enjoy reading:)..<br>please return within a week"
    }
        // document.querySelector(".response").innerHTML="This book is already borrowed:(..<br>please wait for few days"
}


// Call the function to display parameters on page load
const data =displayParameters()
generateWikiLink(data)
showMap(data);
