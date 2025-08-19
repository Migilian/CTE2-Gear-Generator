import { colorMap } from "./source/constants.js";
import { fontColor,makeAllVisible,makeIdDisabled, makeOneFromClassVisible, makeAllEnabled, makeAllFromClassHidden, makeIdVisible } from "./source/windows/styling.js";
import { handleSuppAndAuraGenerator } from "./source/generators/aura&support.js";
import { slotsDropdown } from "./source/windows/customdropdown.js";

slotsDropdown();
handleSuppAndAuraGenerator("support", "aura");
document.getElementById("gear-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "gear");
    makeIdDisabled("custom-button","gear-gen");
    document.getElementById("slots").classList.add("active");
    document.getElementById("generators-tab").classList.add("active");
    document.getElementById("preview").classList.add("active");
    document.getElementById("preview1").classList.remove("active");
}

document.getElementById("jewel-gen").onclick = function()
{
    makeOneFromClassVisible("generator", "jewel");
    makeIdDisabled("custom-button","jewel-gen");
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
    makeIdDisabled("custom-button","augment-gen");
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
    makeIdDisabled("custom-button","supp-gen");
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
    makeIdDisabled("custom-button","relic-gen");
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
    makeIdDisabled("custom-button","map-gen");
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