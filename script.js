let optionsCont = document.querySelector('.options-cont');
let optionsFlag = true;

// true -> show tool else false

optionsCont.addEventListener("click", (e)=>{
    optionsFlag = !optionsFlag
    let iconElem = optionsCont.children[0];

    if(optionsFlag)
    {
        openTools();
    }
    else
    closeTools();

})

function openTools(){
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-times");
    iconElem.classList.add("fa-bars");
}

function closeTools()
{
    let iconElem = optionsCont.children[0];
    iconElem.classList.remove("fa-bars");
    iconElem.classList.add("fa-times");
}