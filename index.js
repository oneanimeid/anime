import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyALE-ek0P4_dEKioxPAdNeEVkXkZq-teEY",
  authDomain: "oneanime-cc892.firebaseapp.com",
  databaseURL: "https://oneanime-cc892-default-rtdb.firebaseio.com",
  projectId: "oneanime-cc892",
  storageBucket: "oneanime-cc892.appspot.com",
  messagingSenderId: "238220128240",
  appId: "1:238220128240:web:a6e9f02911cede575d7735",
  measurementId: "G-LZ2MRJHLRG"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Referensi ke database dan pengambilan data
const animeListRef = ref(db, 'anime/');
onValue(animeListRef, (snapshot) => {
  const animeList = document.getElementById('animeList');
  animeList.innerHTML = ''; // Kosongkan daftar sebelum menambahkan

  snapshot.forEach(childSnapshot => {
    const anime = childSnapshot.val();
    const animeItem = document.createElement('div');
    animeItem.className = 'anime-item';

    // Buat elemen gambar dan set link
    const img = document.createElement('img');
    img.src = anime.thumbnail;
    img.alt = anime.title;
    img.onclick = () => window.location.href = anime.link;

    // Buat elemen rating
    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = `⭐ ${anime.rating}`;

    // Buat elemen judul
    const title = document.createElement('p');
    title.textContent = anime.title;

    // Gabungkan elemen
    animeItem.appendChild(img);
    animeItem.appendChild(rating);
    animeItem.appendChild(title);
    animeList.appendChild(animeItem);
  });
});

    
        const now = new Date();
        const hour = now.getHours();
        let greeting;

        if (hour >= 3 && hour < 11) {
            greeting = "Selamat Pagi";
        } else if (hour >= 11 && hour < 15) {
            greeting = "Selamat Siang";
        } else if (hour >= 15 && hour < 19) {
            greeting = "Selamat Sore";
        } else {
            greeting = "Selamat Malam";
        }

        document.getElementById("greeting").innerText = greeting;
  