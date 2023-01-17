export async function getCoordinates(setFirstTime) {
    setFirstTime(false)
    navigator.geolocation.getCurrentPosition(async (position) => {
        let datos = {
            method: "post",
            body: JSON.stringify({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }),
            mode: "cors",
            headers: { "Access-Control-Allow-Origin": "*", "Content-type": "application/json" },
        };
        fetch("http://localhost:3001/addLocation", datos)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    });
}