import axios from "axios";
async function getComponyList() {
    const apiUrl = "https://5f7335deb63868001615f557.mockapi.io/list";
    const { data } = await axios(apiUrl);
    return data;
}
export { getComponyList };