/*  -INFORMATION-
	Subject:	Backgrounds
	Effect:		This script adds the following backgrounds: "Continental Nobility"
                                                            "Mageborn"
                                                            "Devoted Missionary"
                                                            "Survivor"
                                                            "Treasure Seeker"

    			This is taken from Dungeons of Drakkenheim (https://ghostfiregaming.com/dungeons-of-drakkenheim/)
				These backgrounds are made by The Dungeon Dudes - Monty Martin & Kelly McLaughlin

	Code by:	/u/lizrdgizrd
	Date:		2022-09-02 (sheet v13.1.1)
	Please support the creators of this content: The Dungeon Dudes  https://www.youtube.com/c/DungeonDudes
                                                 Ghostfire Gaming   https://ghostfiregaming.com/
*/

var iFileName = "Drakkenheim_backgrounds.js";
RequiredSheetVersion(13);
// Drakkenheim_backgrounds.js

// Define the source
SourceList["DODr"] = {
	name : "Dungeons of Drakkenheim [backgrounds]",
	abbreviation : "DODr",
	group : "Ghostfire Gaming",
	url : "https://ghostfiregaming.com/dungeons-of-drakkenheim/",
	date : "2022/09/02"
};

// Add the backgrounds
BackgroundList["continental nobility"] = {
	regExpSearch : /^(?=.*continental)(?=.*nobility).*$/i,
	name : "Continental Nobility",
	source : [["DODr", 244]],
	prerequisite : "Any class except sorcerer, warlock, or wizard",
	prereqeval : function(v) { return ((classes.known.sorcerer ? true : false) && (classes.known.warlock ? true : false) && (classes.known.wizard ? true : false) !== true);},
    skillstxt : "Choose two from Persuasion, Athletics, History, or Intimidation",
    gold : 25,
	equipleft : [
		["Thieves' Tools", "", 1],
		["Family crest signet ring or brooch", "", ""],
        ["Fake identification", "", ""],
        ["Weighted dice", "", ""],
        ["Deck of cards", "", ""]
	],
	equipright : [
		["Cape in house colors", "", ""],
		["Set of fine clothes", "", 6],
        ["Pouch of coins", "", 1]
	],
	feature : "Noble Confidence",
	trait : [
		"I consider myself a renowned monster slayer, and like to remind everyone of the many accomplishments I hold to my name.",
		"I keep family traditions close. Honour and family are amongst the most important things in the world, and I cherish them.",
		"I miss the comforts of my home. This city is dirty and smells terrible.",
		"I believe in the good in people, and I hope to find a peaceful resolution to our problems. A diplomatic approach is something Westemär greatly needs.",
		"As a noble, I have a responsibility to protect those who cannot protect themselves.",
		"It is highly important that I look my best and maintain my regal demeanor in all situations. My reputation must go untarnished.",
		"I may be of noble birth, but have lived life on the road for some time. I am more than willing to share what I have with others, as I am no better or worse than anyone else.",
		"There is no challenge I can't face. I heard about the horrors and monsters of this world, and I am what they fear the most."
	],
	ideal : [
		["Respect",
			"Respect. I am a respected member of my family, and I expect what remains of Drakkenheim's nobility and royal line to acknowledge my standing. (Lawful)"
		],
		["Responsibility",
			"Responsibility. It is my responsibility as a representative of my noble line to remain cordial, and diplomatic in dealings with the various high ranking members of Drakkenheim’s society. (Good)"
		],
		["Privacy",
			"Privacy. I do not wish for my nobility to come up. It may be best if the people of Drakkenheim do not know who I am. At least for now. (Any)"
		],
		["Duty",
			"Duty. It is my duty to aid the people of Drakkenheim. As a noble I was connected to this city, and it is what is expected of me. (Good)"
		],
		["Glory",
			"Glory. I must claim my victories and prove myself in battle. (Any)"
		],
		["Family",
			"Family. Blood is thicker than water and I will fight to defend my family's honour. (Good)"
		]
	],
	bond : [
		"1 I must prove myself as a great warrior for my house and my people.",
		"My family was once bound to the royal family of Westemär, I must ensure we remain bound to whoever takes the throne.",
		"My family's fortune was lost. Drakkenheim may be our last chance to get it back.",
		"My family was betrayed by one of the royal houses, and I plan to make sure any that remain of that name are brought to justice	and my family takes its place where it belongs.",
		"I am destined to rule, as my ancestors before me have.",
		"I have been sent unwillingly on a diplomatic mission to Drakkenheim. I am to gain political standing in these crumbling ruins."
	],
	flaw : [
		"I boast about my own triumphs, and belittle the accomplishments of others.",
		"Bound by honor, I can never back down from a challenge, nor can I let those who undervalue my name go unchallenged.",
		"I do not like getting my hands dirty. Other people must do the heavy lifting, not me.",
		"I like to flaunt my wealth, and I spare no expense.",
		"I'm never wrong. Even if I was, I would never admit it.",
		"I was forced to lead, but I am very far out of my depth and desperately hoping people do not catch on that I don't know what I am doing here."
	],
	extra : [
		"Defining Event",
		"Troll slayer",
		"Witnessed family die in civil war",
		"Defended castle",
		"Previous expedition failed",
		"Enemies of von Kessel",
		"Left family when they joined Silver Order",
        "Small council noble line",
        "Drakkenheim destruction ruined family"
	],
	languageProfs : ["Two of your choice", 2],
	lifestyle : "comfortable"
};
BackgroundList["mageborn"] = {
	regExpSearch : /mageborn/i,
	name : "Mageborn",
	source : [["DODr", 245]],
	prerequisite : "Must be a bard, sorcerer, warlock, or wizard",
	prereqeval : function(v) { return (classes.known.bard ? true : false) || (classes.known.sorcerer ? true : false) || (classes.known.warlock ? true : false) || (classes.known.wizard ? true : false);},
    skillstxt : "Choose two from Arcana, Deception, Investigation, Perception",
    gold : 25,
	equipright : [
		["Gnarled wooden wand", "", ""],
		["Duster jacket", "", ""],
        ["Component satchel", "", ""],
		["Amulet or trinket", "", ""]
	],
	feature : "Bookworm",
	trait : [
		"I idolize one of the archmages of the Academy and hope to prove myself to them in time.",
		"Nothing will get between me and my goals. When people say something I care about is impossible, I prove them wrong.",
		"I am confident in my powers, and do not fear the horrors of Drakkenheim, for I can bend reality.",
		"I am constantly reading books. The more knowledge I can obtain, the more I can outwit friends and foes alike.",
		"I am a mage for hire and am not afraid to use my magic to get my hands dirty. A lot of people will pay top coin for a skillset like mine.",
		"I am a sucker for a good mystery and pride myself in my ability to solve them.",
		"Everyone is always so serious - we all die in the end, might as well enjoy the ride.",
		"I always push myself to be the best at whatever it is I set out to do."
	],
	ideal : [
		["Respect",
			"Respect. My powers are a blessing and a curse, and I work diligently to show people not to fear magic. (Good)"
		],
		["Knowledge",
			"Knowledge. I left the Academy on good terms to work at one of the many historical institutes of the world, hoping that my love for books and history would be of use. (Any)"
		],
		["Love",
			"Love. I left the Academy due to love, and I plan to keep my promise to that love. (Good)"
		],
		["Forgiveness",
			"Forgiveness. I must undo the mistakes of my past by proving myself to those I care about most. (Good)"
		],
		["Power",
			"Power. Delerium is power, and I must learn all I can about its origins and properties if I am to harness that power. (Chaotic)"
		],
		["Independence",
			"Independence. I stand alone from the Academy for a reason. I do not wish to be on their bad side, but I do not wish to be on their good side either. (Neutral)"
		]
	],
	bond : [
		"It is my duty to protect the Amethyst Academy.",
		"My life's work in the study of delerium caused my expulsion. I must continue that research to prove its value.",
		"The mysteries of my past and my power are tied to the meteor. I need answers.",
		"My terrible mistake was covered up by my mentor in the Academy. I owe them my life.",
		"My nightmares have guided me to Drakkenheim. I must investigate these visions.",
		"I come from a long line of wizards, my exit from the Academy was highly upsetting to them and I need to earn my way back into their favour, even if it means risking my life in Drakkenheim."
	],
	flaw : [
		"I walk straight into danger. What's the worst that could happen?",
		"I believe my plan is always far superior to everyone else's.",
		"I am distracted by possibilities of gaining knowledge or power, regardless of the cost or danger.",
		"I overcomplicate most situations with small details and over analyzing simple things.",
		"I get angry quickly, and cause more harm than good with my magic when I get mad.",
		"I can't get enough delerium. I want the power for myself."
	],
	extra : [
		"Mageborn Quirk",
		"Different Colored Eyes",
		"Voice echoes and wind blows",
		"Eyes glow octarine",
		"Hear magical entities",
		"Talk to myself loudly",
		"Magic nightmares and visions",
        "Speak to beings from other planes",
        "Disappearing birthmark"
	],
	toolProfs : ["Calligraphers' Supplies or Alchemists' Supplies", 1],
	languageProfs : ["Draconic or Elven", 1],
	lifestyle : "comfortable"
};
BackgroundList["devoted missionary"] = {
	regExpSearch : /^(?=.*devoted)(?=.*missionary).*$/i,
	name : "Devoted Missionary",
	source : [["DODr", 246]],
    skillstxt : "Choose two from History, Religion, Arcana, Nature",
	equipright : [
		["Set of pale robes", "", ""],
		["Small chip of delirium", "", ""],
        ["Walking stick", "", ""],
        ["Amulet with a god's symbol", "", ""],
        ["Small book of religious text", "", ""]
	],
	feature : "Guided by Faith",
	trait : [
		"I empathize with those who do not follow the path of light. Creatures of all types can be brought back to the path of righteousness and are often suffering and in great pain.",
		"I believe in the words of my religion and quote its texts and scriptures as often as I can.",
		"I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
		"I have spent my life in a temple or church. Rough living wears on me quickly.",
		"I believe very strongly that everything will turn out okay, and nothing can shake my positive attitude.",
		"My faith kept me distant from others. I have very little experience with the world outside the church/temple/shrine.",
		"I have extremely strict etiquette and manners for interactions and tasks, and I refuse to stray from them.",
		"I am working on my thesis of religious ongoings in the world and excitedly discuss the nuances of these ideas with anyone and everyone."
	],
	ideal : [
		["Logic",
			"Logic. Emotions must not cloud our judgement on what is right or true. (Lawful)"
		],
		["Self",
			"Self. My religious journey is that of discovering myself. If I can obtain that, there is nothing left to know. (Any)"
		],
		["Charity",
			"Charity. I will always help those in need, no matter the cost. (Good)"
		],
		["Faith",
			"Faith. The path laid out before me is determined by the divine entity I worship. I will follow its signs and patterns to fulfil my purpose. (Lawful)"
		],
		["Power",
			"Power. The gods have granted me divine powers and I must use them to make those who do not worship as strongly as I see the divine light and understand that I am the one true speaker of my faith. (Chaotic)"
		],
		["Peace",
			"Peace. I do not like to be part of conflicts, rather a neutral voice of reason to all sides. (Neutral)"
		]
	],
	bond : [
		"Nothing is more important than my church and what it represents.",
		"I joined my religion to hide from a past I would rather forget.",
		"The path to enlightenment is unending. I must stay the course.",
		"I will die if it means doing right by my religious beliefs.",
		"Everything I do is for the good of the common people.",
		"I seek to preserve the ancient texts and artefact of my religion."
	],
	flaw : [
		"I judge others harshly and believe my path to be the one true path.",
		"I believe in the words of my religion so strongly that I follow them without question.",
		"The goal I have set for myself is my destiny, and I can not act against it or abandon it for any reason.",
		"My religion was meant to keep the dark thoughts at bay, but I find myself losing that battle and a blood thirst grows within me.",
		"This is my first taste of life outside my religion, and I enjoy its pleasures a little too much.",
		"The gods and my faith have determined that I am always correct as I speak on their behalf. There is no question in my mind that I speak the ultimate truths and any who do not agree are misguided fools."
	],
	extra : [
		"Missionary Life",
		"Self-enlightenment quest",
		"Lit candles ritual",
		"Vow of silence",
		"Caretaker of relics",
		"Pilgrim of divine light",
		"Guided to failth by angels",
        "Broken vows of faith",
        "Prove myself worthy regardless"
	],
	languageProfs : ["Any two of your choice", 2],
	lifestyle : "comfortable"
};
BackgroundList["survivor"] = {
	regExpSearch : /survivor/i,
	name : "Survivor",
	source : [["DODr", 249]],
    skillstxt : "Two of the following: Perception, Survival, Stealth, Athletics",
	equipleft : [
		["Climber's kit", "", 12],
		["Shovel", "", 5],
		["Pair of thick gloves", "", ""]
	],
	equipright : [
		["Cook's Utensils", "", 8],
		["Cloak with a hood", "", ""],
	],
	feature : "Makeshift Meals",
	trait : [
		"I believe that I am destined for greatness, and nothing can convince me otherwise.",
		"I always have a plan or plot to outwit my foes. It may not always be good, but it's almost always overly complex.",
		"I love to flaunt my wealth and showcase the things I have bought with it.",
		"I pay no mind to the risks of a situation. I always bet on myself and my abilities and it's gotten me this far. Never tell me the odds.",
		"I have a quip, allegory, or joke for almost any situation.",
		"I lie about anything and everything. I lie for almost no reason at all, sometimes just to see if I can fool the people around me.",
		"I use flattery and honeyed words to get what I want.",
		"I can't help it if valuable objects lying around end up in my pockets. It's for safe keeping."
	],
	ideal : [
		["Independent",
			"Independent. No one tells me what to do. I make my own rules, and my own luck. (Chaotic)"
		],
		["Fair",
			"Fair. I do not take anything from anyone who couldn't afford to lose it. I am a treasure hunter, not a thief. (Lawful)"
		],
		["Family",
			"Family. I care about material possessions and wealth, but not as much as I care about my friends and family. (Good)"
		],
		["Aspiration",
			"Aspiration. Wealth is power. Wealth means you will be remembered. In this world making a name for yourself is as simple as acquiring enough gold to buy your way to victory. I intend to be remembered. (Any)"
		],
		["Danger",
			"Danger. Every great discovery requires risk. The greater the risk, the greater the reward. It's the thrill of the hunt that I live for. (Any)"
		],
		["Dignity",
			"Dignity. The dead and their prized belongings deserve more than to waste away in the ruins. They deserve to be found, remembered, and taken care of. (Lawful)"
		]
	],
	bond : [
		"My desire for wealth is out of a need to protect my family.",
		"Something important to me was stolen. I've longed to get it back ever since.",
		"I'm wanted for my many crimes and hope that where I am going, the law will not follow.",
		"I made mistakes in my past that cost me the life of someone I loved. I will not let that happen again.",
		"I plan to be the greatest thief or most cunning explorer of all time.",
		"This is my last job, the big one. After this I hope to settle down with my wealth, maybe start a family."
	],
	flaw : [
		"My entire identity is layers of falsities presented to hide my true self, for I am not a good person. I've never told the truth for as long as I can remember and it's too late now to stop.",
		"Every situation, every person, is only as valuable to me as what I can gain from them. I'm not afraid to pull strings to bend luck in my favour.",
		"I jump to defensive measures as soon as someone catches me in a lie, or tries to call me out for anything.",
		"I take what I want, and I want it all.",
		"I like to show my skills, talk big, and take big risks in the hopes of impressing everyone watching.",
		"I know for a fact I am the smartest person in the room, and if people are suggesting anything otherwise they are terribly mistaken."
	],
	extra : [
		"Treasure Hunter's Secrets",
		"Cryptic lost treasure map",
		"Double headed coin",
		"Magnifying spyglass",
		"Secret compartment ring",
		"Left boot hidden dagger",
		"Compass that doesn't point north",
        "Collection of exotic coins",
        "Former partner turned rival"
	],
	toolProfs : ["Cook's utensils, one other set of artisan's tools", 2],
	lifestyle : "comfortable"
};
BackgroundList["treasure seeker"] = {
	regExpSearch : /^(?=.*treasure)(?=.*seeker).*$/i,
	name : "Treasure Seeker",
	source : [["DODr", 248]],
	skills : ["Investigation"],
    skillstxt : "Investigation and choose one from Stealth, Insight, or Perception",
	equipleft : [
		["Thieves' Tools", "", 1],
		["Signet ring of a fake lord", "", ""],
        ["Fake identification", "", ""],
        ["Weighted dice", "", ""],
        ["Deck of cards", "", ""]
	],
	equipright : [
		["Set of dark clothes", "", 6],
        ["Hood with face covering", "", ""]
	],
	feature : "Detail-Oriented",
	trait : [
		"I always have an exit strategy in mind if things go poorly.",
		"You can't survive in this grim city without a good sense of humor, but I have a taste for gallows humor.",
		"I try to work in the thin grey area between the squabbling factions, squeezing under their radar when possible. The less I am seen, the better.",
		"If you spot danger, it is best to avoid it, that’s how you survive.",
		"Drakkenheim is a dangerous place. But I can navigate it with my eyes closed. No one else I’ve ever met is as good as I am.",
		"In order to survive the monsters of Drakkenheim, one must be a monster of Drakkenheim.",
		"Take everything you can from the dead, take it from the living if you can. If you are to survive, you must take any opportunity to scavenge.",
		"I will never give up until I reclaim what I lost in these ruins."
	],
	ideal : [
		["Self-Reliance",
			"Self-Reliance. I won't risk my life for others. Everyone must fend for themselves -- better you than me. (Evil)"
		],
		["Bravery",
			"Bravery. I find the thrill of surviving the monsters and magics of Drakkenheim exhilarating and thrive on the chaos. (Chaotic)"
		],
		["Safety",
			"Safety. Whatever I can do to keep myself fed and keep a safe place to rest is good in my books. (Any)"
		],
		["Helpful",
			"Helpful. People need all the help they can get in the city, and I know I can provide it. (Good)"
		],
		["Hope",
			"Hope. I believe there is something worth saving here, we must hold on to the idea of a better future. (Good)"
		],
		["Responsibility",
			"Responsibility. I lived here before the meteor, I'll live here long after. I must protect my home and do what I can to make it livable again. (Lawful)"
		]
	],
	bond : [
		"I had family in these ruins. I know not what became of them, but I must find out.",
		"This city is my home, and I will fight for what's left of it until the very end.",
		"I'll do any dirty work in the city if it means a hot meal, a warm bed, or some good company.",
		"I've spent so long in these ruins, its the outside world that terrifies me now.",
		"Why haven't I left Drakkenheim? Have you seen how much gold there is to be made here?",
		"I am bound to the throne of Drakkenheim, and fight to see it one day reclaimed."
	],
	flaw : [
		"Any meal could be my last. I'll eat just about anything. I do what I must to survive.",
		"I don't like being outside the Haze of the city for too long, I've gotten used to it.",
		"I am convinced my family is alive in the city somewhere. I hear their voices call to me at night.",
		"I don't trust anyone easily. I'll sleep with one eye open even around my companions, for Drakkenheim makes monsters of us all.",
		"The years spent here have turned me to a vice, I very much rely on that vice to get me through my days.",
		"I hear voices constantly. Sometimes I get distracted with conversations with people who are not there."
	],
	extra : [
		"Marks of Survival",
		"Converse out loud alone",
		"Eat disgusting things",
		"Scarred body",
		"Missing finger",
		"Look at locket before sleep",
		"Monster souvenirs",
        "Can sleep anywhere",
        "Recite names of lost"
	],
	toolProfs : ["Thieves' Tools", "Cartographer's Tools"],
	lifestyle : "comfortable"
};

// Add the background variants
AddBackgroundVariant("continental nobility", "last of the line", {
	regExpSearch : /^(?=.*last)(?=.*line).*$/i,
	name : "Last of the Line",
	source : [["DODr", 249]],
    toNotesPage : [{
        name : "Last of the Line",
        note : "In the years following the destruction of Drakkenheim, calamity and misfortune wracked your house leaving you the sole surviving heir. Penniless and without land, you have come to Drakkenheim to rebuild your family’s legacy.",
    }]
});
AddBackgroundVariant("mageborn", "malfeasant mage", {
	regExpSearch : /^(?=.*malfeasant)(?=.*mage).*$/i,
	name : "Malfeasant Mage",
	source : [["DODr", 246]],
    toNotesPage : [{
        name : "Malfeasant Mage",
        note : "You were expelled from the Amethyst Academy for some trespass, real or imagined, or perhaps you were never taken in by them and learned magic on your own. Common folk are often mistrustful of spellcasters who do not wear the Amethyst Academy colours, so you may need to hide your identity and abilities, especially from the Amethyst Academy and the Knights of the Silver Order.",
    }]
});
AddBackgroundVariant("devoted missionary", "stargazer", {
	regExpSearch : /stargazer/i,
	name : "Stargazer",
	source : [["DODr", 247]],
    toNotesPage : [{
        name : "Stargazer",
        note : "You witnessed the meteor 15 years ago. Whether you believe it to be destiny, a magical or divine calling, or just curiosity of the secrets that need to be unearthed, you are drawn to the crater. You believe that the crater holds some answers to the questions you seek, and that somewhere in Drakkenheim lies a truth beyond your comprehension. Your pilgrimage to Drakkenheim may have taken you weeks, months or even years but you had to come - something called you here and you must discover its origin.",
    }]
});
AddBackgroundVariant("survivor", "veteran of the civil war", {
	regExpSearch : /^(?=.*veteran)(?=.*civil).*$/i,
	name : "Veteran of the Civil War",
	source : [["DODr", 248]],
    toNotesPage : [{
        name : "Veteran of the Civil War",
        note : "You survived the civil war that ravaged Westemär, either as a soldier or fleeing refugee. The war took something from you and changed you. It may be that you had to do things that went against your morals, or perhaps you lost friends and family in the bloodshed. Regardless, you walked away with scars that will not easily heal.",
	}]
});
AddBackgroundVariant("treasure seeker", "soldier of fortune", {
	regExpSearch : /^(?=.*soldier)(?=.*fortune).*$/i,
	name : "Soldier of Fortune",
	source : [["DODr", 249]],
    toNotesPage : [{
        name : "Soldier of Fortune",
        note : "Rather than seeking your fortune from finding treasure, you seek yours by hunting down the brigands, outlaws, and monsters that now hide in Drakkenheim. You often take up dangerous bounties and follow wanted posters as long as the price is right. Danger is second nature to you and the horrors of the city are nothing compared to the thrill of the hunt, and the coin it can gain you.",
    }]
});

// Add the backgrounds features that are not in the SRD
BackgroundFeatureList["noble confidence"] = {
	description : "During a short rest you can give an inspiring pep talk to a number of allies equal to your proficiency bonus. Once in the next 8 hours, each of those allies can roll 1d4 and add it to the result of a single attack roll, ability check, or saving throw.",
	source : [["DODr", 244]]
};
BackgroundFeatureList["bookworm"] = {
	description : "Once per day after you finish a long rest, you can spend one hour to create a spell scroll. You need only paper and ink to do so, and the level of the spell you can create equals one half your proficiency bonus (rounded down) or lower. The scroll you create must be a spell you know or have prepared.",
	source : [["DODr", 245]]
};
BackgroundFeatureList["guided by faith"] = {
	description : "A number of times per day equal to your proficiency bonus, you may ask the Game Master to reveal the DC of any ability check you make before rolling the dice. You may then decide whether or not you wish to attempt the roll. Missionary Life",
	source : [["DODr", 246]]
};
BackgroundFeatureList["makeshift meals"] = {
	description : "You know how to purify food and rations found in the ruins. When you take a short rest, you prepare a meal for a number of creatures equal to your proficiency bonus. Creatures who consume the food regain hit points equal to your level. Once they do, they can’t regain hit points from another one of your meals until they finish a long rest.",
	source : [["DODr", 247]]
};
BackgroundFeatureList["detail-oriented"] = {
	description : "You double your proficiency bonus when making any ability check to search the ruins of Drakkenheim.",
	source : [["DODr", 248]]
};
