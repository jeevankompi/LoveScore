function calculateLove() {
    var name1 = document.getElementById("name1").value.trim();
    var name2 = document.getElementById("name2").value.trim();
    
    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names.";
        return;
    }
    
    var loveScore = Math.floor(Math.random() * 101); 
    document.getElementById("result").innerText = name1 + " ❤️ " + name2 + " Love Score: " + loveScore + "%";
    
  
    document.getElementById("love-bar").style.width = loveScore + "%";
    
    
    var message = "";
    if (loveScore < 30) message = "Oh no! Maybe try again? 😢";
    else if (loveScore < 60) message = "There's potential! Keep going! 😊";
    else message = "It's a perfect match! ❤️🔥";
    document.getElementById("compatibility-message").innerText = message;
    
   
    var shipName = name1.substring(0, name1.length / 2) + name2.substring(name2.length / 2);
    document.getElementById("ship-name").innerText = "Your Ship Name: " + shipName;
    
    
    var loveQuotes = [
        "Love is not about how much you say 'I love you,' but how much you prove that it's true.",
        "The best thing to hold onto in life is each other.",
        "Love is composed of a single soul inhabiting two bodies.",
        "A successful marriage requires falling in love many times, always with the same person."
    ];
    var randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    document.getElementById("love-quote").innerText = "Love Quote: " + randomQuote;
    
    
    document.getElementById("reset-btn").style.display = "block";
}

function resetForm() {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("love-bar").style.width = "0%";
    document.getElementById("compatibility-message").innerText = "";
    document.getElementById("ship-name").innerText = "";
    document.getElementById("love-quote").innerText = "";
    document.getElementById("reset-btn").style.display = "none";
}
