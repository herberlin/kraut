function showAll() {
    document.querySelector(".done").innerText="Fertig!";
    document.querySelectorAll("div").forEach(el => el.classList.remove("hide"));  
    document.querySelector(".show-all").classList.add("hide");
    document.querySelector(".reload").classList.remove("hide");

}

function showNextQuestion() {
    const all = document.querySelectorAll(".row:not(.hide)");
    console.debug("Noch: " + all.length);
    if (all.length > 0) {
        const next = Math.round(Math.random()*all.length);
        all[next].querySelector(".question").classList.remove("hide");
        document.querySelector(".done").innerText="Noch " + all.length;
    } else {
        showAll();
    }
}

document.querySelectorAll(".row .question").forEach(el=> {
    el.classList.add("hide");
    el.addEventListener("click", q => {
        q.currentTarget.parentNode.querySelector(".answer").classList.remove("hide");
    });
});
document.querySelectorAll(".row .answer").forEach(el=> {
    el.classList.add("hide"); 
    el.addEventListener("click", e => {
        e.currentTarget.parentNode.classList.add("hide");
        showNextQuestion();
    });
});
showNextQuestion(); 