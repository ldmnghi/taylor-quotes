//SWITCH THEME FUNCTION
const setTheme = theme => document.documentElement.className = theme;

//COPY FUNCTION
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

//LOAD JS FUNCTION
function loadJSAsync(url) {
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

//REMOVE JS FUNCTION
function removejscssfile(filename, filetype){
  var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
  var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
  var allsuspects=document.getElementsByTagName(targetelement)
  for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
  if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
      allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
  }
}

//RANDOMIZER FUNCTION 
const getNewQuote = async () =>
{
    var url="https://taylorswiftapi.onrender.com/get-all/?album=midnights";    
    const response=await fetch(url);
    console.log(typeof response);

    const allQuotes = await response.json();
    console.log(allQuotes)
    
    const indx = Math.floor(Math.random()*allQuotes.length);

    console.log(indx)
    console.log(allQuotes[indx])

    const quote=document.getElementById("lyric");
    const song=document.getElementById("songName");
    const album=document.getElementById("albumName");
    const tweetButton=document.getElementById("tweet");
    
    const lyric=allQuotes[indx].quote;
    const songName=allQuotes[indx].song;
    const albumName=allQuotes[indx].album;
    
    quote.innerHTML=lyric;
    song.innerHTML=" — "+songName;
    album.innerHTML=", "+albumName;


if (songName=="Snow On The Beach")
  {setTheme('midnightstheme');
  loadJSAsync('/p5.js');}

else if(songName=="Shake It Off")
    {setTheme('shakeitofftheme')}

else if(songName=="Blank Space")
    {setTheme('blankspacetheme')}

else if(songName=="Bad Blood")
    {setTheme('badbloodtheme')}

else if(songName=="Look What You Made Me Do")
    {setTheme('lookwhatyoumademedotheme')}

else if(songName=="22")
    {setTheme('twentytwotheme')}

else if(songName=="Love Story")
    {setTheme('lovestorytheme')}

else if(songName=="You Belong With Me")
    {setTheme('youbelongwithmetheme')}

else if(songName=="Anti-Hero")
    {setTheme('antiherotheme')}

else if(songName=="Cardigan")
    {setTheme('cardigantheme')}
    
else if(songName=="Lavender Haze")
    {setTheme('lavenderhazetheme')}

else{
    
    if(albumName=="Taylor Swift")
    {setTheme('taylorswifttheme')}

    if(albumName=="Fearless")
    {setTheme('fearlesstheme')}

    if(albumName=="Speak Now")
    {setTheme('speaknowtheme')}

    if(albumName=="Red")
    {setTheme('redtheme')}

    if(albumName=="1989")
    {setTheme('eightyninetheme')}

    if(albumName=="Reputation")
    {setTheme('reputationtheme')}

    if(albumName=="Lover")
    {setTheme('lovertheme')}

    if(albumName=="Folklore")
    {setTheme('folkloretheme')}

    if(albumName=="Evermore")
    {setTheme('evermoretheme')}

    if(albumName=="Midnights")
    {setTheme('midnightstheme')}
}
    
    tweetButton.href="https://twitter.com/intent/tweet?text="+"“"+lyric+"”"+" — "+songName+", "+albumName;
}

getNewQuote();

//ADD SNOWFLAKES
let snowflakes = []; // array to hold snowflake objects
    
var canvas;

function windowResized() {
  console.log('resized');
  resizeCanvas (windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  fill(240);
  noStroke();
}

function draw() {

    background(220, 10);
    clear();

  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
