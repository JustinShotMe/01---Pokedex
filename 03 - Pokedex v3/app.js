// https://github.com/Tatohead/Console-Iconset/tree/main/Console

function loopPokemon(z, y) {
    for (let x = z; x <= y; x++) {

        fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
            .then(res => res.json())
            .then(pokeData => {

                // create Span for Pokemon, set class, & append to PokemonList
                var pokeSpan = document.createElement('span')
                pokeSpan.setAttribute('class', 'pokemonFlex', 'id', 'pokemonFlex')
                document.getElementById('pokemonList').appendChild(pokeSpan)

                // create P for Pokemon Name, set class, append it to PokeSpan
                var pokemonName = document.createElement('p')
                pokemonName.setAttribute('class', 'pokemonName')

                // correcting the names from PokeApi
                switch (true) { // if theres no hyphen or includes the name don't change the name
                    case (!((pokeData.name).includes('-'))):
                    case ((pokeData.name).includes('ho-oh')):
                    case (((pokeData.name).includes('porygon'))):
                    case ((pokeData.name).includes('type-null')):
                    case ((pokeData.name).includes('jangmo')):
                    case ((pokeData.name).includes('hakamo')):
                    case ((pokeData.name).includes('kommo')):
                        var pokeName = pokeData.name
                        break;
                    // if name includes below name, then replace hyphen with space
                    case ((pokeData.name).includes('tapu')):
                    case ((pokeData.name).includes('rime')):
                    case ((pokeData.name).includes('mime')):
                        var pokeName = (pokeData.name).replace('-', ' ')
                        break;
                    // split all others at the hyphen in the name, return first element
                    default: var pokeName = (pokeData.name).split('-', 1)[0]
                }
                // append pokeName into the PokeSpan
                pokemonName.innerHTML = pokeName
                pokeSpan.appendChild(pokemonName)

                // create P element for pokemon Number
                var pokemonNumber = document.createElement('p')
                pokemonNumber.setAttribute('class', 'pokemonNumber')
                // create img element for pokeomon image
                var pokemonImage = document.createElement('img')
                pokemonImage.setAttribute('class', 'pokemonImage')

                // logic to make sure there are the right amount of zeros for the image url
                switch (true) {
                    case (pokeData.id < 10):
                        pokemonNumber.innerHTML = String('00').concat(pokeData.id);
                        pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/00${x}.png`)
                        break;
                    case ((pokeData.id >= 10) && (pokeData.id <= 99)):
                        pokemonNumber.innerHTML = String('0').concat(pokeData.id);
                        pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/0${x}.png`)
                        break;
                    case (pokeData.id >= 100):
                        pokemonNumber.innerHTML = pokeData.id
                        pokemonImage.setAttribute('src', `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${x}.png`)
                        break;
                }
                // append pokemonNumber into pokeSpan
                pokeSpan.appendChild(pokemonNumber)
                // trying to create a light circle element behind the pokemon
                // var pokemonNumber = document.create 'pokeCircle')
                // pokeSpan.appendChild(pokeCircle)

                // append the image into the span
                pokeSpan.appendChild(pokemonImage)
                // create span container to hold the pokemonTypes
                var pokemonType = document.createElement('span')
                pokemonType.setAttribute('class', 'pokemonType')

                // get types, then append types into html
                for (pokeTypes of pokeData.types) {
                    var typeElement = document.createElement('p');
                    typeElement.innerHTML = pokeTypes.type.name
                    typeElement.setAttribute('class', String('pill background-color-').concat(pokeTypes.type.name))
                    pokemonType.appendChild(typeElement)
                }
                pokeSpan.appendChild(pokemonType)

                //  determine the first child inner HTML, then make the box shadow
                // a color corresponding to the pokemon's first color
                // console.log(pokemonType.firstChild.innerHTML)
                // pokeSpan.addEventListener("mouseenter", (event) => {
                //     // highlight the mouseenter target
                //     if (pokemonType.firstChild.innerHTML == 'grass') {
                //         event.target.style["boxShadow"] = "#9bcc50 0px 19px 38px, #9bcc50 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'poison') {
                //         event.target.style["boxShadow"] = "#b97fc9 0px 19px 38px, #b97fc9 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'fire') {
                //         event.target.style["boxShadow"] = "#fd7d24 0px 19px 38px, #fd7d24 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'water') {
                //         event.target.style["boxShadow"] = "#4592c4 0px 19px 38px, #4592c4 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'bug') {
                //         event.target.style["boxShadow"] = "#729f3f 0px 19px 38px, #729f3f 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'normal') {
                //         event.target.style["boxShadow"] = "#a4acaf 0px 19px 38px, #a4acaf 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'rock') {
                //         event.target.style["boxShadow"] = "#ab9842 0px 19px 38px, #ab9842 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'flying') {
                //         event.target.style["boxShadow"] = "#3dc7ef 0px 19px 38px, #3dc7ef 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'ground') {
                //         event.target.style["boxShadow"] = "#ab9842 0px 19px 38px, #f7de3f 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'psychic') {
                //         event.target.style["boxShadow"] = "#f366b9 0px 19px 38px, #f366b9 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'electric') {
                //         event.target.style["boxShadow"] = "#eed535 0px 19px 38px, #eed535 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'ice') {
                //         event.target.style["boxShadow"] = "#51c4e7 0px 19px 38px, #51c4e7 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'ghost') {
                //         event.target.style["boxShadow"] = "#7b62a3 0px 19px 38px, #7b62a3 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'fighting') {
                //         event.target.style["boxShadow"] = "#d56723 0px 19px 38px, #d56723 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'fairy') {
                //         event.target.style["boxShadow"] = "#fdb9e9 0px 19px 38px, #fdb9e9 0px 15px 12px";
                //     } if (pokemonType.firstChild.innerHTML == 'dragon') {
                //         // event.target.style["boxShadow"] = "#f16e57 0px 19px 38px, #f16e57 0px 15px 12px";
                //         // event.target.style["boxShadow"] = "#f16e57 0px 19px 38px, #53a4cf 0px -15px 10px";
                //         event.target.style["boxShadow"] = "0 19px 12px 0.2em #f16e57, 0 15px 20px 0.8em #53a4cf";
                //     } if (pokemonType.firstChild.innerHTML == 'dark') {
                //         event.target.style["boxShadow"] = "#707070 0px 19px 38px, #707070 0px 15px 12px";
                //     }
                // }, false);
                // // reset the box
                // pokeSpan.addEventListener("mouseleave", (event) => {
                //     event.target.style["boxShadow"] = "";
                // }, false);


                // // create the pokemon's consoles' span

                var pokemonConsoles = document.createElement('span')
                pokemonConsoles.setAttribute('class', 'pokemonConsoles', 'id', 'pokemonConsoles')

                var consoleImage = document.createElement('img')
                consoleImage.setAttribute('class', 'pokemonConsoleImage')

                switch (true) {
                    case (pokeData.id <= 151): // apply gameboy OG icon to gen 1 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gb.png')
                        break;
                    case ((pokeData.id >= 152) && (pokeData.id <= 251)): // apply gameboy color icon to gen 2 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GB/gbc9.png')
                        break;
                    case ((pokeData.id >= 252) && (pokeData.id <= 386)): // apply gameboy advance icon to gen 3 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/GBA/Gameboy%20Sp4.png')
                        break;
                    case ((pokeData.id >= 387) && (pokeData.id <= 649)): // apply nintendo DS icon to gen 4 and 5pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/NDS/NDS2.png')
                        break;
                    case ((pokeData.id >= 650) && (pokeData.id <= 721)): // apply 3DS icon to gen 6 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png')
                        break;
                    case ((pokeData.id >= 722) && (pokeData.id <= 809)): // apply 3DS & switch icon to gen 7 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/3DS/3DS.png')
                        var consoleImage2 = document.createElement('img')
                        consoleImage2.setAttribute('class', 'pokemonConsoleImage')
                        consoleImage2.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png')
                        break;
                    case ((pokeData.id >= 810) && (pokeData.id <= 905)): // apply switch icon to gen 8 pokemon
                        consoleImage.setAttribute('src', 'https://raw.githubusercontent.com/Tatohead/Console-Iconset/main/Console/Nintendo/Switch/Switch.png')
                        break;
                }
                // append the console icon to the pokemonConsoles span
                pokemonConsoles.appendChild(consoleImage)
                // only apply second icon if it exists
                if (consoleImage2) { pokemonConsoles.appendChild(consoleImage2) }
                // append the pokemonConsoles span to the pokeSpan
                pokeSpan.appendChild(pokemonConsoles)
            })
    }

}