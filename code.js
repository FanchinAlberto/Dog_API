BindCategories();

function BindCategories(){
    fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then(data => 
        {
            for(var i = 0; i<data.message.length; i++){
                let option = document.createElement('option');
                option.textContent = data.message[i];
                option.value = data.message[i];
                document.getElementById("selectCategory").appendChild(option);
            }
        }
        );
}

function showImages(){
    document.getElementById("imageShow").innerHTML = "";
    var select = document.getElementById('selectCategory');
    var value = select.options[select.selectedIndex].value;
    for(let i = 0; i < 5; i++){
        fetch(`https://dog.ceo/api/breed/${value}/images/random`)
        .then(response => response.json())
            .then(data =>
                {
                    document.getElementById("imageShow").innerHTML += `<img src="${data.message}">`;
                }
            )

    }
}


