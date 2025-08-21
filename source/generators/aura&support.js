import { loadFile } from "../windows/loading.js";
import { makeOneFromClassDisabled, makeOneFromClassActive } from "../windows/styling.js";

const mmorpg_skill_gem = {
    "id":undefined,
    "type":undefined,
    "perc":undefined,
    "rar":undefined,
    "links":1
};

const changedSupp = Object.assign(mmorpg_skill_gem);
changedSupp.id = document.getElementById("gear-gen").innerHTML;
changedSupp.perc = document.getElementById("jewel-gen").innerHTML;
changedSupp.rar = document.getElementById("map-gen").innerHTML;

// export function actualSupportGem() 
// {
//     if (document.getElementById("supp-gener").classList.contains("visible"))
//     {
//         changedSupp.type = "SUPPORT";
//     }
//     else
//     {
//         changedSupp.type = "AURA";
//     }
//     return "{mmorpg_skill_gem:'" + JSON.stringify(changedSupp) + "'}";
// }

// Create slots for Supports and Augments

function makeSuppAndAuraSlots(target)
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
            let auraOrSupport = json[target];
            for (let tip in auraOrSupport)
            {
                const type = document.createElement("button");
                type.classList.add(`${target}Slot`);
                type.id = tip + target[0].capitalize() + target.toString().slice(1);
                type.style.padding = 0;
                type.style.margin = "1px";
                type.style.objectFit = "cover";
                const image = new Image(undefined, undefined);
                image.src = `assets/textures/items/skill_gems/${target}/${tip}.svg`;
                type.appendChild(image);
                typeSelection.appendChild(type);
                type.onclick = function ()
                {
                    makeOneFromClassActive(target + "Slot", tip + target[0].capitalize() + target.toString().slice(1));
                    makeOneFromClassDisabled(target + "Slot" ,tip + target[0].capitalize() + target.toString().slice(1));
                    changedSupp.id = auraOrSupport[tip].id;
                }
            }
        });
}

// Stat selection for Augments and Supports

function handleSupportStatSelection(target)
{
    const parent = document.getElementById(target);
    const selectionMenu = document.createElement("div");
    selectionMenu.id = "selectionMenu";
    selectionMenu.style.display = "flex";
    selectionMenu.style.flexDirection = "row";
    selectionMenu.style.height = "fit-content";
    selectionMenu.style.paddingTop = 'var(--defaultPadding)';
    selectionMenu.style.paddingLeft = 'var(--defaultPadding)';

    parent.appendChild(selectionMenu);

    const desc = document.createElement("p");
    if (target == "aura")
    {
        desc.innerHTML = "Choose an " + target.replace("-", " ").capitalize() + " Effect: ";
    }
    else
    {
        desc.innerHTML = "Choose a " + target.replace("-", " ").capitalize() + " Gem Effect: ";
    }
    desc.style.margin = 0;
    desc.style.color = 'var(--defaultGreen)';

    selectionMenu.appendChild(desc);

    const selection = document.createElement("select");
    selection.id = target + "-selection";
    selectionMenu.appendChild(selection);
}

// Combine all Support and Augment functions into one

export function handleSuppAndAuraGenerator(supp, aura)
{
    makeSuppAndAuraSlots(supp);
    makeSuppAndAuraSlots(aura);
    handleSupportStatSelection(supp);
    handleSupportStatSelection(aura);
}

// /give Migilian mmorpg:skill_gems/support/int{mmorpg_skill_gem:'{"id":"effect_duration","type":"SUPPORT","perc":100,"rar":"mythic","links":1}'} 1
// /give Migilian mmorpg:skill_gems/aura/str{mmorpg_skill_gem:'{"id":"fire_damage","type":"AURA","perc":100,"rar":"mythic","links":1}'} 1
// /give Migilian mmorpg:jewel/str{mmorpg_jewel: '{"uniq":{"t":6,"id":"","perc":0},"cor":[{"p":100,"id":"jewel_corrupt_despair_immunity","rar":"rare","ty":"chaos_stat"},{"p":100,"id":"jewel_corrupt_weak_immunity","rar":"rare","ty":"chaos_stat"}],"affixes":[{"p":100,"id":"chaos_jewel_res","rar":"mythic","ty":"jewel"},{"p":100,"id":"of_the_mountain","rar":"mythic","ty":"jewel"},{"p":100,"id":"jewel_critdmg","rar":"mythic","ty":"jewel"},{"p":100,"id":"jewel_hp","rar":"mythic","ty":"jewel"}],"auraStats":[],"style":"str","lvl":100,"rar":"mythic"}'} 1