function toggleTheme(value) {

    var sheets = document
        .getElementsByTagName('link');

    sheets[0].href = value;

}

const getNewQuote = async () =>
{
    
    var url="https://taylorswiftapi.onrender.com/get-all";    

    
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

    if(albumName=="Taylor Swift")
    {toggleTheme('taylorswift.css')}

    if(albumName=="Fearless")
    {toggleTheme('fearless.css')}

    if(albumName=="Speak Now")
    {toggleTheme('speaknow.css')}

    if(albumName=="Red")
    {toggleTheme('red.css')}

    if(albumName=="1989")
    {toggleTheme('1989.css')}

    if(albumName=="Reputation")
    {toggleTheme('reputation.css')}

    if(albumName=="Lover")
    {toggleTheme('lover.css')}

    if(albumName=="Folklore")
    {toggleTheme('folklore.css')}

    if(albumName=="Evermore")
    {toggleTheme('evermore.css')}

    if(albumName=="Midnights")
    {toggleTheme('midnights.css')}
    
    tweetButton.href="https://twitter.com/intent/tweet?text="+"“"+lyric+"”"+" — "+songName+", "+albumName;
}

getNewQuote();

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

