// export function loadFile(filePath) 
// {
//     var result = null;
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.open("GET", filePath, false);
//     xmlhttp.send();
//     if (xmlhttp.status==200) 
//         {
//             result = xmlhttp.responseText;
//         }
//     return result;
// }

export function loadFile(url) 
{
    let data = fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response body as JSON
    })
    .then(data => {
        console.log(data);
        return data; // The parsed JSON object
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });
    return data;
}

// async function fetchFileContent(url) {
//     try {
//         // Await the fetch response
//         const response = await fetch(url);
//         // Await the parsing of the response
//         const data = await response.json(); // or .text(), .blob() etc.
//         return data; // Return the data
//     } catch (error) {
//         console.error('Error fetching file:', error);
//         throw error;
//     }
// }

async function processFile(url) 
{
    try {
        const fileData = await fetchFileContent(url);
        return fileData.then;
    } catch (error) {
        // Handle errors from fetchFileContent
    }
}

// export async function loadFile(url)
// {
//     fetchFileContent(url);
//     processFile(url);
// }