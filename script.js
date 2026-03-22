<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Text To Word</title></head><body><p>import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";</p>
<p>&nbsp;</p>
<p>const firebaseConfig = {// Import the functions you need from the SDKs you need</p>
<p>import { initializeApp } from "firebase/app";</p>
<p>// TODO: Add SDKs for Firebase products that you want to use</p>
<p>// https://firebase.google.com/docs/web/setup#available-libraries</p>
<p>&nbsp;</p>
<p>// Your web app's Firebase configuration</p>
<p>const firebaseConfig = {</p>
<p>&nbsp; apiKey: "AIzaSyDvd3f3JvoHEdnw46HNMHm13DZ392FL4NM",</p>
<p>&nbsp; authDomain: "free-stock-images-9e7a0.firebaseapp.com",</p>
<p>&nbsp; projectId: "free-stock-images-9e7a0",</p>
<p>&nbsp; storageBucket: "free-stock-images-9e7a0.firebasestorage.app",</p>
<p>&nbsp; messagingSenderId: "927985896075",</p>
<p>&nbsp; appId: "1:927985896075:web:1c298e8c38e6dae1c0228e"</p>
<p>};</p>
<p>&nbsp;</p>
<p>const API_KEY="PEXELS_API_KEY"; AsAeHbkwF90qcWmKQnnnKC0VaAo43qobVoZSSbrlRinzRfDOTLjDoJMD</p>
<p>&nbsp;</p>
<p>window.searchImages=function(){</p>
<p>&nbsp;</p>
<p>let query=document.getElementById("search").value;</p>
<p>&nbsp;</p>
<p>fetch(`https://api.pexels.com/v1/search?query=${query}&amp;per_page=12`,{</p>
<p>headers:{Authorization:API_KEY}</p>
<p>})</p>
<p>.then(res=&gt;res.json())</p>
<p>.then(data=&gt;{</p>
<p>&nbsp;</p>
<p>let images="";</p>
<p>&nbsp;</p>
<p>data.photos.forEach(photo=&gt;{</p>
<p>&nbsp;</p>
<p>images+=`</p>
<p>&lt;a href="${photo.src.original}" target="_blank"&gt;</p>
<p>&lt;img src="${photo.src.medium}"&gt;</p>
<p>&lt;/a&gt;</p>
<p>`;</p>
<p>&nbsp;</p>
<p>});</p>
<p>&nbsp;</p>
<p>document.getElementById("images").innerHTML=images;</p>
<p>&nbsp;</p>
<p>});</p>
<p>&nbsp;</p>
<p>}</p></body></html>