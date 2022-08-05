import {v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Al-Fatiha",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/001.mp3",
            color: ["#EB4A4B", "#5C5250"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Al-Baqara",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/002.mp3",
            color: ["#EB4A4B", "#5C5250"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Aal-Imran",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/003.mp3",
            color: ["#3DBBA3", "#E64732"],
            id: uuidv4(),
            active: false
        },
        {
            name: "An-Nisaa",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/004.mp3",
            color: ["#3DBBA3", "#E64732"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Al-Ma'ida",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/005.mp3",
            color: ["#2B3434", "#8E4D2A"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Al-An'am",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/006.mp3",
            color: ["#84BEA1", "#615279"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Al-A'raf",
            cover: "https://ia902508.us.archive.org/30/items/cover_202208/cover.JPG",
            artist: "Syaikh Misyari Rasyid Alafasy",
            audio: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/007.mp3",
            color: ["#0C2224", "#422016"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default chillHop;