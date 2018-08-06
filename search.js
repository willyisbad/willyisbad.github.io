String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
        case "-y":
            query = query.substr(3);
            window.location =
            "https://www.youtube.com/results?search_query=" +
            query.replaceChars(" ", "+");
            break;

	    case "-w":
	        query = query.substr(3);
	        window.location = 
		    "http://www.wolframalpha.com/input/?i=" + 
		    query.replaceChars("+", "%2B");
		    break;
            
        case "-m":
		    query=query.substr(3);
		    window.location = 
			"https://forum.mobilism.org/search.php?keywords=" + 
            query.replaceChars(" ", "+") + "&fid[]=398&sr=topics&sf=titleonly";
            break;
            
        case "-n":
            query = query.substr(3);
            window.location =
            "https://nyaa.si/?f=0&c=0_0&s=seeders&o=desc&q=" +
            query.replaceChars(" ", "+");
        break;

        case "-i":
            query = query.substr(3);
            window.location =
            "https://www.google.com/search?tbm=isch&q=-site%3Apinterest.com+" +
            query.replaceChars(" ", "+");
        break;

        case "-h":
            query = query.substr(3);
            window.location =
            "https://nhentai.net/g/" +
            query.replaceChars(" ", "+");
        break;

        default:
            window.location="https://www.google.com/#q=" +
                query.replaceChars(" ", "+");
    }
}
 
window.onload = function(){
    // search
    searchinput = document.getElementById("searchbox");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
 
    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");
 
        }
 
//
// To add a new search provider, paste the following between the last "break;" and "default:" (Line 39 & 40)
//
//         case "-a":
//          query = query.substr(3);
//          window.location =
//             "https://en.website.com/" +
//             query.replaceChars(" ", "%20");
//          break;
//
// -a on ln68 should be replaced with a "-letter" of your choice. You can also change it to !a, .a, /a etc.
// https://en.website.com/ on ln70 should be replaced with the search page of the website. To find this, make a few searches on your website. 
//Try to identify where your search is in the URL. If you're not sure, post in the thread and someone should help you out
//
// You can use the above two to modify an existing rule
//
// If you wish to change the number of characters in a "case", you need to change the line below, changing query.substr() to n+1, n being the number of characters.
// This ensures that when you search for something, the whole of your idenfier and the space between the identifier and query are removed.