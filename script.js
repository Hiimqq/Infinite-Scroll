//Unsplash API
const count = 10;
const apiKey = 'cecnitqg5Wrty7JogzYPnfHaaPE5JiXIHHEaGBjV-HA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get photos from Unsplash API 
async function getPhotos () {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        //catch error here
    }
}

// on load
getPhotos();