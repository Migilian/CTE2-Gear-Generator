import { colorMap } from "../constants.js"

export function fontColor(id, color)
{
    document.getElementById(id).style.color = colorMap.minecraft.get(color);
}

export function makeOneFromClassVisible(className, id)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let z = 0; z <= eArray.length; z++)
    {
        if (eArray[z])
        {
            if (eArray[z].id == id)
            {
                document.getElementById(id).classList.replace("hidden","visible");
            }
            else
            {
                document.getElementById(eArray[z].id).classList.replace("visible","hidden");
            }
        }
    }
}

export function makeAllFromClassHidden(className)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let z = 0; z <= eArray.length; z++)
    {
        if (eArray[z])
        {
            document.getElementById(eArray[z].id).classList.replace("visible","hidden");
        }
    }
}

export function makeIdVisible(id)
{
    document.getElementById(id).classList.remove("hidden");
}

export function addClassToOneOf(addition, id, className)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let z = 0; z <= eArray.length; z++)
    {
        if (eArray[z])
        {
            if (eArray[z].id == id)
            {
                document.getElementById(id).classList.add(addition);
            }
            else
            {
                document.getElementById(eArray[z].id).classList.remove(addition)
            }
        }
    }
}

export function makeOneFromClassDisabled(className, id)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let z = 0; z <= eArray.length; z++)
    {
        if (eArray[z])
        {
            if (eArray[z].id == id)
            {
                document.getElementById(id).disabled = true;
            }
            else
            {
                document.getElementById(eArray[z].id).disabled = false;
            }
        }
    }
}

export function makeAllEnabled(className)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let z = 0; z <= eArray.length; z++)
    {
        if (eArray[z])
        {
            // console.log(document.getElementById(eArray[z]).id);
                document.getElementById(eArray[z].id).disabled = false;
        }
    }
}

export function makeOneFromClassActive(className, id)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let a = 0; a <= eArray.length; a++)
    {
        if (eArray[a])
        {
            if (eArray[a].id == id)
            {
                document.getElementById(id).classList.add("active");
            }
            else
            {
                document.getElementById(eArray[a].id).classList.remove("active");
            }
        }
    }
}

export function makeAllFromClassInactive(className)
{
    const element = document.getElementsByClassName(className);
    const eArray = Array.from(element);
    for (let a = 0; a <= eArray.length; a++)
    {
        if (eArray[a])
        {
                document.getElementById(eArray[a].id).classList.remove("active");
        }
    }
}

export function makeAllVisible(className)
{
    const list = document.getElementsByClassName(className);
    const cluas = Array.from(list);
    for (let z = 0; z <= cluas.length; z++)
    {
        if (cluas[z])
        {
            cluas[z].classList.remove("hidden");
        }
    }
}

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});