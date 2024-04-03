
document.getElementById("ShortenButton").addEventListener("click",OnClick);

function OnClick() {

    console.log("Clicked!")
    ShortenUrl()

}

const input = document.getElementById("NewUrlInput");
input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        const urlInput = input.value; // Get the value from the input field
        fetch("http://[2a00:a041:21e1:a600::1001]:1337/path", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Action: "Get", url: urlInput }) // Assuming "Get" is the action type
        })
        .then(response => response.json())
        .then(data => {
            // Assuming the response contains the shortened URL
            const shortenedUrl = data.data;
            console.log(shortenedUrl);
            // Open the shortened URL in a new window
            window.open(shortenedUrl);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occur during the fetch request
        });
    }
});


function ShortenUrl() {
    const urlInput = document.getElementById("OldUrlInput").value;
    
    fetch("http://[2a00:a041:21e1:a600::1001]:1337/path", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Action: "Set", url: urlInput })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response data as needed
        document.getElementById("ShortenedURL").textContent = data.data
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle any errors that occur during the fetch request
    });
}
