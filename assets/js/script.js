let gunlukler = JSON.parse(localStorage.getItem("Gunlukler")) || [];
function saveGunlukler(){
    localStorage.setItem("Gunlukler", JSON.stringify(gunlukler));
}
function gunlukEkle(){
    const tarih = prompt("Tarihi gir (Yıl-Ay-Gün):");
    if (!tarih){
        alert("Geçerli bir tarih girmedin.");
        return nextAction();
    }
    const metin = prompt("Günlüğünü yaz:");
    if (!metin) {
        alert("Geçerli bir metin girmedin.");
        return nextAction();
    }
    gunlukler.push({ tarih, metin });
    saveGunlukler();
    alert("Günlük Eklendi.");
    return nextAction();
}
function gunlukleriListele(){
    if (gunlukler.length === 0){
        alert("Henüz bir günlük eklemedin.");
    } else {
        const liste = gunlukler.map((gunluk, i) => `${i + 1}. Tarih: ${gunluk.tarih}\nMetin: ${gunluk.metin}`).join("\n");
        alert(`Günlüklerin:\n\n${liste}`);
    }
    return nextAction();
}
function nextAction(){
    const value = prompt("Başka bir işlem yapmak ister misin? (e/h)").toLowerCase();
    if (value === "e") {
        return mainMenu();
    } else if (value === "h") {
        alert("Güle güle...");
    } else {
        alert("Geçersiz seçim yaptın.");
        return nextAction();
    }
}
function mainMenu(){
    const value = prompt(`Bir işlem seç:\n1- Günlükleri listele\n2- Yeni günlük ekle\n3- Çıkış yap`);
    if (value === "1"){
        return gunlukleriListele();
    }
    else if (value === "2"){
        return gunlukEkle();
    }
    else if (value === "3"){
        alert("Güle güle...");
    }
    else{
        alert("Geçersiz seçim yaptınız.");
        return mainMenu();
    }
}
mainMenu();