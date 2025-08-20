import { colorMap } from "./source/constants.js";
import { fontColor,makeAllVisible,makeOneFromClassDisabled, makeOneFromClassVisible, makeAllEnabled, makeAllFromClassHidden, makeIdVisible } from "./source/windows/styling.js";
import { handleSuppAndAuraGenerator } from "./source/generators/aura&support.js";
import { slotsDropdown } from "./source/windows/customdropdown.js";
import { handleJewelGenerator } from "./source/generators/jewels.js";
import { handleRelicGenerator } from "./source/generators/relics.js";

slotsDropdown();
handleSuppAndAuraGenerator("support", "aura");
handleJewelGenerator("jewel");
handleRelicGenerator("relic");
document.getElementById("gear-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "gear");
    makeOneFromClassDisabled("custom-button","gear-gen");
    document.getElementById("slots").classList.add("active");
    document.getElementById("generators-tab").classList.add("active");
    document.getElementById("preview").classList.add("active");
    document.getElementById("preview1").classList.remove("active");
}

document.getElementById("jewel-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "jewel");
    makeOneFromClassDisabled("custom-button","jewel-gen");
    document.getElementById("slots").classList.remove("active");
    document.getElementById("generators-tab").classList.remove("active");
    document.getElementById("preview").classList.remove("active");
    document.getElementById("preview1").classList.remove("active");
    makeAllEnabled("custom-button2");
    makeAllFromClassHidden("dropdown");
}
document.getElementById("augment-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "aura");
    makeOneFromClassDisabled("custom-button","augment-gen");
    document.getElementById("slots").classList.remove("active");
    document.getElementById("generators-tab").classList.remove("active");
    document.getElementById("preview").classList.remove("active");
    document.getElementById("preview1").classList.remove("active");
    makeAllEnabled("custom-button2");
    makeAllFromClassHidden("dropdown");
}
document.getElementById("supp-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "support");
    makeOneFromClassDisabled("custom-button","supp-gen");
    document.getElementById("slots").classList.remove("active");
    document.getElementById("generators-tab").classList.remove("active");
    document.getElementById("preview").classList.remove("active");
    document.getElementById("preview1").classList.remove("active");
    makeAllEnabled("custom-button2");
    makeAllFromClassHidden("dropdown");
}
document.getElementById("relic-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "relic");
    makeOneFromClassDisabled("custom-button","relic-gen");
    document.getElementById("slots").classList.remove("active");
    document.getElementById("generators-tab").classList.remove("active");
    document.getElementById("preview").classList.remove("active");
    document.getElementById("preview1").classList.remove("active");
    makeAllEnabled("custom-button2");
    makeAllFromClassHidden("dropdown");
}
document.getElementById("map-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "map");
    makeOneFromClassDisabled("custom-button","map-gen");
    document.getElementById("slots").classList.remove("active");
    document.getElementById("generators-tab").classList.remove("active");
    document.getElementById("preview").classList.remove("active");
    document.getElementById("preview1").classList.remove("active");
    makeAllEnabled("custom-button2");
    makeAllFromClassHidden("dropdown");
}

document.getElementById("level").oninput = function(event)
{
    document.getElementById("level-label").innerHTML = event.target.value;
}

window.onload = async () => 
{  

}