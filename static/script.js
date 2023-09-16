if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        // Handle the user's location data here
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }, function(error) {
        // Handle errors, such as user denying permission
        console.error(`Error getting location: ${error.message}`);
    });
}
