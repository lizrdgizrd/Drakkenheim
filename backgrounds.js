var iFileName = "Drakkenheim_backgrounds.js";
RequiredSheetVersion(13);
// Drakkenheim_backgrounds.js
// This file adds the backgrounds from Dungeons of Drakkenheim

// Define the source
SourceList["DODr"] = {
	name : "Dungeons of Drakkenheim [backgrounds]",
	abbreviation : "DODr",
	group : "Adventure Books",
	url : "https://ghostfiregaming.com/dungeons-of-drakkenheim/",
	date : "2022/09/02"
};

// Add the backgrounds that are not in the SRD
BackgroundList["treasure seeker"] = {
	regExpSearch : /^(?=.*treasure)(?=.*seeker).*$/i,
	name : "Treasure Seeker",
	source : [["DODr", 248]],
	skills : ["Investigation"],
    skillstxt : "Choose one from Stealth, Insight, or Perception",
	equipleft : [
		["Thieves' Tools", "", 1],
		["Signet ring of a fake lord", "", ""]
        ["Fake identification", "", ""]
        ["Weighted dice", "", ""]
        ["Deck of cards", "", ""]
	],
	equipright : [
		["Set of dark clothes", "", 6],
        ["Hood with face covering", "", ""]
	],
	feature : "Detail-Oriented",
	trait : [
		"I fall in and out of love easily, and am always pursuing someone.",
		"I have a joke for every occasion, especially occasions where humor is inappropriate.",
		"Flattery is my preferred trick for getting what I want.",
		"I'm a born gambler who can't resist taking a risk for a potential payoff.",
		"I lie about almost everything, even when there's no good reason to.",
		"Sarcasm and insults are my weapons of choice.",
		"I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
		"I pocket anything I see that might have some value."
	],
	ideal : [
		["Independence",
			"Independence: I am a free spirit \u2015 no one tells me what to do. (Chaotic)"
		],
		["Fairness",
			"Fairness: I never target people who can't afford to lose a few coins. (Lawful)"
		],
		["Charity",
			"Charity: I distribute the money I acquire to the people who really need it. (Good)"
		],
		["Creativity",
			"Creativity: I never run the same con twice. (Chaotic)"
		],
		["Friendship",
			"Friendship: Material goods come and go. Bonds of friendship last forever. (Good)"
		],
		["Aspiration",
			"Aspiration: I'm determined to make something of myself. (Any)"
		]
	],
	bond : [
		"I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
		"I owe everything to my mentor \u2015 a horrible person who's probably rotting in jail somewhere.",
		"Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
		"I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
		"A powerful person killed someone I love. Someday soon, I'll have my revenge.",
		"I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself."
	],
	flaw : [
		"I can't resist a pretty face.",
		"I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
		"I'm convinced that no one could ever fool me the way I fool others.",
		"I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
		"I can't resist swindling people who are more powerful than me.",
		"I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough."
	],
	extra : [
		"Select a Favorite Scheme",
		"Cheat at games of chance",
		"Shave coins, forge documents",
		"User/manipulator",
		"Change identity",
		"Sleight-of-hand cons",
		"Sell junk as expensive necessities"
	],
	toolProfs : ["Thieves' Tools", "Cartographer's Tools"],
	lifestyle : "comfortable"
};

// Add the background variants
AddBackgroundVariant("treasure seeker", "soldier of fortune", {
	regExpSearch : /^(?=.*soldier)(?=.*of)(?=.*fortune).*$/i,
	name : "Soldier of Fortune",
	source : [["DODr", 249]],
    toNotesPage : [{
        name : "Soldier of Fortune",
        note : "Rather than seeking your fortune from finding treasure, you seek yours by hunting down the brigands, outlaws, and monsters that now hide in Drakkenheim. You often take up dangerous bounties and follow wanted posters as long as the price is right. Danger is second nature to you and the horrors of the city are nothing compared to the thrill of the hunt, and the coin it can gain you.",
    }]
});

// Add the backgrounds features that are not in the SRD
BackgroundFeatureList["detail-oriented"] = {
	description : "You double your proficiency bonus when making any ability check to search the ruins of Drakkenheim.",
	source : [["DODr", 128]]
};