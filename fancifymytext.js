function bigger() 
{
    alert('Hello, world!');
    document.getElementById("Bigger").style.fontSize = "2em";
}

function toggleButton()
{
    const textArea = document.getElementById("Bigger");
    if (document.getElementById("FancyShmancy").checked) 
        {
            textArea.classList.add("fancyshmancy");
            alert("FancyShmancy!");
        } 
    else if (document.getElementById("BoringBetty").checked) 
        {
            textArea.classList.remove("fancyshmancy");
            textArea.style.fontWeight = "normal";
            alert("BoringBetty!");
        }
}

function moo()
{
    const textArea = document.getElementById("Bigger");
    var str = textArea.value.toUpperCase();
    var parts = str.split(".");
    for (let i = 0; i < parts.length - 1; i++) 
    {
        parts[i] += "-Moo";
    }
    textArea.value = parts.join(".");
}