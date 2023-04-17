

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