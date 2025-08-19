/** @type {{minecraft: Map<string, string>, rarities: Map<string, string>}} */
export const colorMap = {
    minecraft: new Map([
        ["black", "#000000"],
        ["dark_blue", "#0000AA"],
        ["dark_green", "#00AA00"],
        ["dark_aqua", "#00AAAA"],
        ["dark_red", "#AA0000"],
        ["dark_purple", "#AA00AA"],
        ["gold", "#FFAA00"],
        ["gray", "#AAAAAA"],
        ["dark_gray", "#555555"],
        ["blue", "#5555FF"],
        ["green", "#55FF55"],
        ["aqua", "#55FFFF"],
        ["red", "#FF5555"],
        ["light_purple", "#FF55FF"],
        ["yellow", "#FFFF55"],
        ["white", "#FFFFFF"],
    ]),
    rarities: new Map([
        ["common","#AAAAAA"],
        ["uncommon","#55FF55"],
        ["rare", "#55FFFF"],
        ["epic", "#FF55FF"],
        ["legendary", "#FFAA00"],
        ["mythic", "#AA00AA"],
        ["runeword", "#FFFF55"],
        ["unique", "#FF5555"],
    ])
};

export const gearSlots = new Object([
    ["weapon",
        new Object([
        ["sword", 1], 
        ["axe", 1], 
        ["hammer", 1], 
        ["dagger", 1], 
        ["staff", 1],
        ["spear", 1], 
        ["bow", 1], 
        ["crossbow", 1], 
        ["scythe", 1], 
        ["gauntlet", 1], 
        ["greatsword", 1]
    ])],
    ["offhand",
    new Object([
        ["shield", 1], 
        ["tome", 1], 
        ["totem", 1]
    ])],
    ["helmet",
    new Object([
        ["cloth_helmet", 1], 
        ["plate_helmet", 1], 
        ["leather_helmet", 1], 
        ["vest_helmet", 1], 
        ["chainmail_helmet", 1], 
        ["brigandine_helmet", 1]
    ])],
    ["chest",
    new Object([
        ["cloth_chest", 1], 
        ["plate_chest", 1], 
        ["leather_chest", 1], 
        ["vest_chest", 1], 
        ["chainmail_chest", 1], 
        ["brigandine_chest", 1]
    ])],
    ["pants",
    new Object([
        ["cloth_pants", 1], 
        ["plate_pants", 1], 
        ["leather_pants", 1], 
        ["vest_pants", 1], 
        ["chainmail_pants", 1], 
        ["brigandine_pants", 1]
    ])],
    ["boots",
    new Object([
        ["cloth_boots", 1], 
        ["plate_boots", 1], 
        ["leather_boots", 1], 
        ["vest_boots", 1], 
        ["chainmail_boots", 1], 
        ["brigandine_boots", 1]
    ])],
    ["necklace", new Object([])],
    ["ring", new Object([])],
    ["codex", new Object([])],
    ["elytra", new Object([])],
    ["head", new Object([])]
]);

export const giveCommand = "/give @p ";