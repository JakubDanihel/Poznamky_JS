//tlacidlo pridania novej poznamky
const addBtn = document.getElementById("addBtn");

//pridanie novej poznamky po klknuti na tlacidlo
addBtn.addEventListener("click", () => {
    pridajPoznamku();
});

//funkcia pre vytvorenie novej poznamky
function pridajPoznamku() {
    const poznamky = document.createElement("div");
    poznamky.classList.add("poznamky");

    //vlozenie kodu pre vytvorenie poznamky
    poznamky.innerHTML =` 
        <div class="poznamky">
        <div class="nastroje">
            <button class = "deleteBtn"><i class="fa-solid fa-trash-can"></i></button>
            <button class = "editBtn"><i class="fa-solid fa-pen-to-square"></i></button>
        </div>
        <div class="main hidden">

        </div>
        <textarea></textarea>
        </div>
    `;

    //tlacidla pre pracu s poznamkami
    const editBtn = poznamky.querySelector(".editBtn");
    const deleteBtn = poznamky.querySelector(".deleteBtn");


    //miesto pre main
    const main = poznamky.querySelector(".main");

    //text area
    const textArea = poznamky.querySelector("textarea");
    
    //prehadzovanie medzi skrytym a nie
    editBtn.addEventListener("click", () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    //vymazanie poznamky
    deleteBtn.addEventListener("click", () => {
        poznamky.remove();
    });

    //premenenie textu z textArea na obraz v html
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
    });

    document.body.appendChild(poznamky);
};






/*

*/