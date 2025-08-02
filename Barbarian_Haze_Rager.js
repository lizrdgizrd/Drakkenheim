/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds the Path of the Haze Rager, a Barbarian subclass from Sebastien Crow's Guide to Drakenheim available at https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-hardcover-book/
	Code by:	lizrdgizrd
	Date:		2025-08-01 (sheet v13)
*/
var iFileName = "Barbarian_Haze_Rager.js";

RequiredSheetVersion("13.2.0");

SourceList["SCGtD"] = {
    name: "Barbarian - Path of the Haze Rager",
    abbreviation: "PHR",
    group: "Ghostfire Gaming",
    date: "2025/08/01",
    url: "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-hardcover-book/"
};

AddSubClass("barbarian", "path of the haze rager", {
    regExpSearch: /^(?=.*rager)(?=.*haze)(?=.*barbarian).*$/i,
    subname: "Path of the Haze Rager",
    source: [["PHR", 1]],
    features: {
        // 3rd-level features
        "subclassfeature3": {
            name: "Contaminated Fury",
            source: [["PHR", 1]],
            minlevel: 3,
            description: "\n   While raging, once per turn, add 1d8 necrotic damage to a hit with melee attack" +
                         "\n   Take contamination level(s), add 2d8 necrotic per cont. level to melee attack",
            calcChanges : {
                atkCalc : [
                    function (fields, v, output) {
                        if (!v.isSpell && !v.isDC && classes.known.barbarian) {
                            var n = classes.known.barbarian.level;
                            var DmgBonus = n < 10 ? 1 : n < 14 ? 2 : 3;
                            if ((/\brage\b/i).test(v.WeaponTextName)){
                                if ((/\d+d8\b/i).test(output.die)) {
                                    var aMatch = output.die.match(/(\d+)d8\b/i);
                                    output.die = output.die.replace(aMatch[0], Number(aMatch[1]) + DmgBonus + "d8");
                                } else {
                                    output.die += "+" + DmgBonus + "d8";
                                }
                            }
                        }
                    },
                    "I deal +1d8 damage with my weapon attacks. This increasess with +1d8 at 10th and 14th level.",
                ]
            },
        },
        "subclassfeature3.1" : {
            name: "Inured to Corruption",
            source: [["PHR", 1]],
            minlevel: 3,
            description: "\n   Material spell components not needed when removing contamination (if only effect)" +
                         "\n   No exhaustion gained either from contamination removal",
        },
        // 6th-level feature
        "subclassfeature6": {
            name: "Octarine Blood",
            source: [["PHR", 1]],
            minlevel: 6,
            description: "\n   Gain resistance to necrotic, poison, psychic, and radiant damage. HP max can't be reduced",
            dmgres: [["Necrotic", "Necro. (in rage)"], ["Poison", "Pois. {in rage)"], ["Psychic", "Psych. (in rage)"]],
            savetxt: { text : ["Res. to Radiant in rage"] },
        },
        "subclassfeature6.1": {
            name: "Already a Monster",
            source: [["PHR", 1]],
            minlevel: 6,
            description: "\n   When raging, ignore symptoms of contamination levels except Monsterous Transformation" +
                         "\n   When suffering a mutation, roll twice and choose which to gain",
        },
        // 10th-level feature
        "subclassfeature10": {
            name: "Voices In Your Head",
            source: [["PHR", 1]],
            minlevel: 10,
            description: "\n   Once/day cast contact other plane spell, on failed int. save, gain cont. level not driven mad.",
            spellcastingBonus : [{
                name : "Contact Other Plane",
                spells : ["contact other plane"],
                selection : ["contact other plane"],
                firstcol : 8
            }],
            usages : [1],
            recovery : "dawn",
            action : [["action", "Contact Other Plane"]]
        },
        // 14th-level feature
        "subclassfeature14": {
            name: "One with the Mists",
            source: [["PHR", 1]],
            minlevel: 14,
            description: "\n   Cast gaseous form on yourself, prof bonus times per LR",
            spellcastingBonus : [{
                name : "Gaseous Form",
                spells : ["gaseous form"],
                selection : ["gaseous form"],
                firstcol : 8
            }],
            usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
            recovery : "long rest",
            action : [["action", "Gaseous Form"]]
        },
        "subclassfeature14.1": {
            name: "Breath of the Haze",
            source: [["SCGtD", 150]],
            minlevel: 14,
            description: "\n   When you enter your rage, mists swirl about you in a 15-foot-radius sphere centered on you, which moves with you. The area " +
                         "is lightly obscured. Creatures who begin their turn in the mists make an Int. ST. Save DC equals 8 + prof. bonus + Con. modifier. " +
                         "A failed saving throw takes 3d8 psychic damage and speed is halved. Cannot take reactions until the start of their next turn. " +
                         "you designate any number of creatures you can see to be unaffected.",
        }
    }
});