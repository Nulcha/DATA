let textOne = document.querySelector("#id1");
let textTwo = document.querySelector("#id2");
let content = document.querySelector(".content");
let info = JSON.parse(localStorage.getItem("info")) || [];

// Sahifani yuklaganda ma'lumotlarni ko'rsatish
function displayContent() {
    content.innerHTML = info.map(item => `<p>${item.tex} - ${item.tex2}</p>`).join("");
}

// Ma'lumot qo'shish funksiyasi
function inContent() {
    let tex = textOne.value.trim();
    let tex2 = textTwo.value.trim();

    if (tex && tex2 && !info.some(i => i.tex === tex && i.tex2 === tex2)) { // Dublikat tekshiruvi
        info.push({ tex, tex2 });

        localStorage.setItem("info", JSON.stringify(info)); // LocalStorage-ga saqlash
        displayContent(); // Ma'lumotlarni yangilash
    } else {
        alert("Bu ma'lumot allaqachon mavjud yoki bo'sh!");
    }

    textOne.value = "";
    textTwo.value = "";
}

displayContent(); // Sahifani yuklaganda ma'lumotlarni ko'rsatish
