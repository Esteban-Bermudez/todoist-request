function sendRequest() {
    // Set up request parameters
    const searchParams = new URLSearchParams(window.location.search);
    const apitoken = searchParams.get('apitoken') || 0;
    const taskid = searchParams.get('id') || 0;
    
    const url = `https://api.todoist.com/rest/v2/tasks/${taskid}/close`;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apitoken}`
        },
        body: JSON.stringify()
    };

    // Send request and handle response
    fetch(url, options)
        .then(response => {
            if (response.status === 204) {
                // If response status is 204, there is no content to parse
                return "Response 204";
            } else {
                // Otherwise, parse the response as JSON
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
            document.getElementById("response").innerText = JSON.stringify(data);
        })
        .catch(error => {
            console.error("Error:", error);
        });

    setTimeout(function () {
        window.close();
    }, 6000);
}