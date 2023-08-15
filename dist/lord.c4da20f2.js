// Epq7sxGNSA8UNnyAp_yM;
const BASE_URL = "https://the-one-api.dev/v2";
const END_POINT = "/character";
function getCharacter() {
    const optins = new URLSearchParams({
        limit: 30,
        page: 1
    });
    fetch(`${BASE_URL}${END_POINT}?${optins}`).then((response)=>console.log(response));
}

//# sourceMappingURL=lord.c4da20f2.js.map
