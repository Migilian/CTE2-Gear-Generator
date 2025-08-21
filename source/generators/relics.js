import { makeOneFromClassActive, makeOneFromClassDisabled } from "../windows/styling.js";
import { loadFile } from "../windows/loading.js";

function makeRelicSlots(target)
{
    const parent = document.getElementById(target);
    const typeSelection = document.createElement("div");
    typeSelection.id = "typeSelection";
    typeSelection.style.display = "flex";
    typeSelection.style.flexDirection = "row";
    typeSelection.style.width = "100%";
    typeSelection.style.padding = "0.5rem 0 0 0.5rem";

    parent.appendChild(typeSelection);

    fetch("data/1.0.7/base_gear_pieces/gems.json").then(response => response.json()).then(json => 
        {
            let relic = json.relic;
            for (let tip in relic)
            {
                const type = document.createElement("button");
                type.classList.add(`${target}Slot`);
                type.id = tip + target[0].capitalize() + target.toString().slice(1);
                type.style.padding = 0;
                type.style.margin = "1px";
                type.style.objectFit = "cover";
                const image = new Image(undefined, undefined);
                image.src = `assets/textures/items/relics/${tip}.svg`;
                type.appendChild(image);
                typeSelection.appendChild(type);
                type.onclick = function ()
                {
                    makeOneFromClassActive(target + "Slot", tip + target[0].capitalize() + target.toString().slice(1));
                    makeOneFromClassDisabled(target + "Slot" ,tip + target[0].capitalize() + target.toString().slice(1));
                }
            }
        });
}

export function handleRelicGenerator(target)
{
    makeRelicSlots(target);
}