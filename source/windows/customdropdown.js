import { gearSlots } from "../constants.js";
import { makeOneFromClassActive, makeOneFromClassDisabled, makeOneFromClassVisible, makeAllFromClassHidden, makeAllEnabled, makeAllFromClassInactive } from "./styling.js";

export function slotsDropdown()
{
    const slots = Object.assign(gearSlots);
    const parent = document.getElementById("slots");
    const butcher = document.createElement("div");
    butcher.style.display = "flex";
    const shut = Object.values(slots);
    for (let x = 0; x <= shut.length; x++)
    {
        if (shut[x])
        {
            const z = Object.assign(shut[x])
            
            const example2 = document.createElement("div");
            example2.id = z[0] + 1;
            example2.classList.add("dropdown","hidden");
            butcher.appendChild(example2);
            example2.style.position = "absolute";
            example2.style.left = 16 + x*40 + "px";
            example2.style.top = "53px";
            parent.appendChild(butcher);
            
            document.getElementById(z[0]).onclick = function()
            {
                if (document.getElementById(z[0]+1).childElementCount !== 0)
                {
                    makeOneFromClassDisabled("custom-button2", z[0]);
                    makeOneFromClassVisible("dropdown", z[0]+1);
                    document.getElementById(z[0]).classList.remove("active");
                    makeAllFromClassInactive("custom-button2");
                }
                else
                {
                    makeOneFromClassActive("custom-button2", z[0]);
                    makeAllFromClassHidden("dropdown");
                    makeAllEnabled("custom-button2");
                }
            }

            const e = z[1];
            if(e.length != 0)
            {
                for (let y = 0; y < e.length; y++)
                {
                    const example3 = document.createElement("button");
                    const realId = e[y].toString().replace(",1","")
                    example3.id = realId;
                    example3.className = "dropdownoption";
                    let image = new Image(undefined,undefined);
                    image.classList.add("slotsIcon");
                    image.src = "assets/textures/gui/empty_" + realId + "_slot.svg";
                    example3.appendChild(image);
                    example3.onclick = function()
                    {
                        const why = example3.firstChild;
                        const copied = why.cloneNode(true);
                        document.getElementById(z[0]).removeChild(document.getElementById(z[0]).firstChild);
                        document.getElementById(z[0]).appendChild(copied);
                        document.getElementById(z[0]).disabled = false;
                        document.getElementById(z[0]+1).classList.replace("visible","hidden");
                        makeOneFromClassActive("custom-button2", z[0]);
                    }
                    example2.appendChild(example3);
                }
            }
        }
    }
}