// pasizymiu elementus

const nenumeruotas = document.getElementById("ul_list");
console.log(nenumeruotas);

const numeruotas = document.getElementById("ol_list");
console.log(numeruotas);

const mygtukas = document.querySelector("button");
console.log(mygtukas);


function createList(){
    // pasitikrinu ar gaunu userio ivestas reiksmes
    console.log(nenumeruotas.value, numeruotas.value)
    //idedu ul ir idedu li item
    const manoNenumeruotasListas = document.createElement("ul")
    document.body.appendChild(manoNenumeruotasListas)
    for(let index = 0; index < nenumeruotas.value; index++){
        const manoNenumeruotasLisItem = document.createElement("li");
        manoNenumeruotasLisItem.innerText = "list item"
        manoNenumeruotasListas.appendChild(manoNenumeruotasLisItem);
        
        // idedu ol ir li item
        const ol_list = document.createElement("ol")
        manoNenumeruotasLisItem.appendChild(ol_list);
        for(let index = 0; index < numeruotas.value; index++){
            const li_item = document.createElement("li");
            li_item.innerText = "list item"
            ol_list.appendChild(li_item)

        }

    }

}

mygtukas.addEventListener("click", createList)

