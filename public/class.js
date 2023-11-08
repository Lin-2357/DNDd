import {artificer} from '/artificer.js';

const barbarian = {
	"class": [
		{
			"name": "Barbarian",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 12
			},
			"proficiency": [
				"str",
				"con"
			],
			"startingProficiencies": {
				"armor": [
					"light",
					"medium",
					"{@item shield|phb|shields}"
				],
				"weapons": [
					"simple",
					"martial"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"animal handling",
								"athletics",
								"intimidation",
								"nature",
								"perception",
								"survival"
							],
							"count": 2
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) a {@item greataxe|phb} or (b) any {@filter martial melee weapon|items|source=phb|category=basic|type=martial weapon;melee weapon=u~u~sand}",
					"(a) two {@item handaxe|phb|handaxes} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"An {@item explorer's pack|phb}, and four {@item javelin|phb|javelins}"
				],
				"goldAlternative": "{@dice 2d4 × 10|2d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"greataxe|phb"
						],
						"b": [
							{
								"equipmentType": "weaponMartialMelee"
							}
						]
					},
					{
						"a": [
							{
								"item": "handaxe|phb",
								"quantity": 2
							}
						],
						"b": [
							{
								"equipmentType": "weaponSimple"
							}
						]
					},
					{
						"_": [
							"explorer's pack|phb",
							{
								"item": "javelin|phb",
								"quantity": 4
							}
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"str": 13
				},
				"proficienciesGained": {
					"armor": [
						"{@item shield|phb|shields}"
					],
					"weapons": [
						"simple",
						"martial"
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"Rages",
						"Rage Damage"
					],
					"rows": [
						[
							"2",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"2",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"3",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"3",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"3",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"4",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"4",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"4",
							{
								"type": "bonus",
								"value": 2
							}
						],
						[
							"4",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"4",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"4",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"5",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"5",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"5",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"5",
							{
								"type": "bonus",
								"value": 3
							}
						],
						[
							"5",
							{
								"type": "bonus",
								"value": 4
							}
						],
						[
							"6",
							{
								"type": "bonus",
								"value": 4
							}
						],
						[
							"6",
							{
								"type": "bonus",
								"value": 4
							}
						],
						[
							"6",
							{
								"type": "bonus",
								"value": 4
							}
						],
						[
							"Unlimited",
							{
								"type": "bonus",
								"value": 4
							}
						]
					]
				}
			],
			"classFeatures": [
				"Rage|Barbarian||1",
				"Unarmored Defense|Barbarian||1",
				"Danger Sense|Barbarian||2",
				"Survival Instincts|Barbarian||2|UAClassFeatureVariants",
				"Reckless Attack|Barbarian||2",
				{
					"classFeature": "Primal Path|Barbarian||3",
					"gainSubclassFeature": true
				},
				"Primal Knowledge|Barbarian||3|TCE",
				"Ability Score Improvement|Barbarian||4",
				"Proficiency Versatility|Barbarian||4|UAClassFeatureVariants",
				"Extra Attack|Barbarian||5",
				"Fast Movement|Barbarian||5",
				"Instinctive Pounce|Barbarian||5|UAClassFeatureVariants",
				{
					"classFeature": "Path Feature|Barbarian||6",
					"gainSubclassFeature": true
				},
				"Feral Instinct|Barbarian||7",
				"Instinctive Pounce|Barbarian||7|TCE",
				"Ability Score Improvement|Barbarian||8",
				"Proficiency Versatility|Barbarian||8|UAClassFeatureVariants",
				"Brutal Critical (1 die)|Barbarian||9",
				{
					"classFeature": "Path feature|Barbarian||10",
					"gainSubclassFeature": true
				},
				"Relentless Rage|Barbarian||11",
				"Ability Score Improvement|Barbarian||12",
				"Proficiency Versatility|Barbarian||12|UAClassFeatureVariants",
				"Brutal Critical (2 dice)|Barbarian||13",
				{
					"classFeature": "Path feature|Barbarian||14",
					"gainSubclassFeature": true
				},
				"Persistent Rage|Barbarian||15",
				"Ability Score Improvement|Barbarian||16",
				"Proficiency Versatility|Barbarian||16|UAClassFeatureVariants",
				"Brutal Critical (3 dice)|Barbarian||17",
				"Indomitable Might|Barbarian||18",
				"Ability Score Improvement|Barbarian||19",
				"Proficiency Versatility|Barbarian||19|UAClassFeatureVariants",
				"Primal Champion|Barbarian||20"
			],
			"subclassTitle": "Primal Path",
			"fluff": [
				{
					"name": "Barbarian",
					"type": "section",
					"entries": [
						"A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people's elk herd.",
						"A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals.",
						"Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another.",
						"These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea.",
						"For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
						{
							"type": "entries",
							"name": "Primal Instinct",
							"entries": [
								"People of towns and cities take pride in how their civilized ways set them apart from animals, as if denying one's own nature was a mark of superiority. To a barbarian, though, civilization is no virtue, but a sign of weakness. The strong embrace their animal nature\u2014keen instincts, primal physicality, and ferocious rage. Barbarians are uncomfortable when hedged in by walls and crowds. They thrive in the wilds of their homelands: the tundra, jungle, or grasslands where their tribes live and hunt.",
								"Barbarians come alive in the chaos of combat. They can enter a berserk state where rage takes over, giving them superhuman strength and resilience. A barbarian can draw on this reservoir of fury only a few times without resting, but those few rages are usually sufficient to defeat whatever threats arise."
							]
						},
						{
							"type": "entries",
							"name": "A Life of Danger",
							"entries": [
								"Not every member of the tribes deemed \"barbarians\" by scions of civilized society has the barbarian class. A true barbarian among these people is as uncommon as a skilled fighter in a town, and he or she plays a similar role as a protector of the people and a leader in times of war. Life in the wild places of the world is fraught with peril: rival tribes, deadly weather, and terrifying monsters. Barbarians charge headlong into that danger so that their people don't have to.",
								"Their courage in the face of danger makes barbarians perfectly suited for adventuring. Wandering is often a way of life for their native tribes, and the rootless life of the adventurer is little hardship for a barbarian. Some barbarians miss the close-knit family structures of the tribe, but eventually find them replaced by the bonds formed among the members of their adventuring parties."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Barbarian",
							"entries": [
								"When creating a barbarian character, think about where your character comes from and his or her place in the world. Talk with your DM about an appropriate origin for your barbarian. Did you come from a distant land, making you a stranger in the area of the campaign? Or is the campaign set in a rough-and-tumble frontier where barbarians are common?",
								"What led you to take up the adventuring life? Were you lured to settled lands by the promise of riches? Did you join forces with soldiers of those lands to face a shared threat? Did monsters or an invading horde drive you out of your homeland, making you a rootless refugee? Perhaps you were a prisoner of war, brought in chains to \"civilized\" lands and only now able to win your freedom. Or you might have been cast out from your people because of a crime you committed, a taboo you violated, or a coup that removed you from a position of authority.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a barbarian quickly by following these suggestions. First, put your highest ability score in Strength, followed by Constitution. Second, choose the {@background outlander} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 46
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"I have witnessed the indomitable performance of barbarians on the field of battle, and it makes me wonder what force lies at the heart of their rage."
							],
							"by": "Seret, archwizard"
						},
						"The anger felt by a normal person resembles the rage of a barbarian in the same way that a gentle breeze is akin to a furious thunderstorm. The barbarian's driving force comes from a place that transcends mere emotion, making its manifestation all the more terrible. Whether the impetus for the fury comes entirely from within or from forging a link with a spirit animal, a raging barbarian becomes able to perform supernatural feats of strength and endurance. The outburst is temporary, but while it lasts, it takes over body and mind, driving the barbarian on despite peril and injury, until the last enemy falls.",
						"It can be tempting to play a barbarian character that is a straightforward application of the classic archetype\u2014a brute, and usually a dimwitted one at that, who rushes in where others fear to tread. But not all the barbarians in the world are cut from that cloth, so you can certainly put your own spin on things. Either way, consider adding some flourishes to make your barbarian stand out from all others; see the following sections for some ideas.",
						{
							"type": "entries",
							"name": "Personal Totems",
							"entries": [
								"Barbarians tend to travel light, carrying little in the way of personal effects or other unnecessary gear. The few possessions they do carry often include small items that have special significance. A personal totem is significant because it has a mystical origin or is tied to an important moment in the character's life\u2014perhaps a remembrance from the barbarian's past or a harbinger of what lies ahead.",
								"A personal totem of this sort might be associated with a barbarian's spirit animal, or might actually be the totem object for the animal, but such a connection is not essential. One who has a bear totem spirit, for instance, could still carry an eagle's feather as a personal totem.",
								"Consider creating one or more personal totems for your character\u2014objects that hold a special link to your character's past or future. Think about how a totem might affect your character's actions.",
								{
									"type": "table",
									"caption": "Personal Totems",
									"colLabels": [
										"{@dice d6}",
										"Totem"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											{
												"type": "cell",
												"roll": {
													"exact": 1
												}
											},
											"A tuft of fur from a solitary wolf that you befriended during a hunt"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Three eagle feathers given to you by a wise shaman, who told you they would play a role in determining your fate"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A necklace made from the claws of a young cave bear that you slew singlehandedly as a child"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"A small leather pouch holding three stones that represent your ancestors"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A few small bones from the first beast you killed, tied together with colored wool"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"An egg-sized stone in the shape of your spirit animal that appeared one day in your belt pouch"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Tattoos",
							"entries": [
								"The members of many barbarian clans decorate their bodies with tattoos, each of which represents a significant moment in the life of the bearer or the bearer's ancestors, or which symbolizes a feeling or an attitude. As with personal totems, a barbarian's tattoos might or might not be related to an animal spirit.",
								"Each tattoo a barbarian displays contributes to that individual's identity. If your character wears tattoos, what do they look like, and what do they represent?",
								{
									"type": "table",
									"caption": "Tattoos",
									"colLabels": [
										"{@dice d6}",
										"Tattoo"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											{
												"type": "cell",
												"roll": {
													"exact": 1
												}
											},
											"The wings of an eagle are spread wide across your upper back."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Etched on the backs of your hands are the paws of a cave bear."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"The symbols of your clan are displayed in viny patterns along your arms."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"The antlers of an elk are inked across your back."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Images of your spirit animal are tattooed along your weapon arm and hand."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"The eyes of a wolf are marked on your back to help you see and ward off evil spirits."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Superstitions",
							"entries": [
								"Barbarians vary widely in how they understand life. Some follow gods and look for guidance from those deities in the cycles of nature and the animals they encounter. These barbarians believe that spirits inhabit the plants and animals of the world, and the barbarians look to them for omens and power.",
								"Other barbarians trust only in the blood that runs in their veins and the steel they hold in their hands. They have no use for the invisible world, instead relying on their senses to hunt and survive like the wild beasts they emulate.",
								"Both of these attitudes can give rise to superstitions. These beliefs are often passed down within a family or shared among the members of a clan or a hunting group.",
								"If your barbarian character has any superstitions, were they ingrained in you by your family, or are they the result of personal experience?",
								{
									"type": "table",
									"caption": "Superstition",
									"colLabels": [
										"{@dice d6}",
										"Superstition"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											{
												"type": "cell",
												"roll": {
													"exact": 1
												}
											},
											"If you disturb the bones of the dead, you inherit all the troubles that plagued them in life."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Never trust a wizard. They're all devils in disguise, especially the friendly ones."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Dwarves have lost their spirits, and are almost like the undead. That's why they live underground."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Magical things bring trouble. Never sleep with a magic object within ten feet of you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"When you walk through a graveyard, be sure to wear silver, or a ghost might jump into your body."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"If an elf looks you in the eyes, she's trying to read your thoughts."
										]
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 8
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Path of the Berserker",
			"shortName": "Berserker",
			"source": "PHB",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 49,
			"srd": true,
			"subclassFeatures": [
				"Path of the Berserker|Barbarian||Berserker||3",
				"Mindless Rage|Barbarian||Berserker||6",
				"Intimidating Presence|Barbarian||Berserker||10",
				"Retaliation|Barbarian||Berserker||14"
			]
		},
		{
			"name": "Path of the Totem Warrior",
			"shortName": "Totem Warrior",
			"source": "PHB",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 50,
			"additionalSpells": [
				{
					"innate": {
						"3": {
							"ritual": [
								"beast sense",
								"speak with animals"
							]
						},
						"10": {
							"ritual": [
								"commune with nature"
							]
						}
					}
				}
			],
			"subclassFeatures": [
				"Path of the Totem Warrior|Barbarian||Totem Warrior||3",
				"Aspect of the Beast|Barbarian||Totem Warrior||6",
				"Spirit Walker|Barbarian||Totem Warrior||10",
				"Totemic Attunement|Barbarian||Totem Warrior||14"
			]
		},
		{
			"name": "Path of the Battlerager",
			"shortName": "Battlerager",
			"source": "SCAG",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 121,
			"subclassFeatures": [
				"Path of the Battlerager|Barbarian||Battlerager|SCAG|3",
				"Reckless Abandon|Barbarian||Battlerager|SCAG|6",
				"Battlerager Charge|Barbarian||Battlerager|SCAG|10",
				"Spiked Retribution|Barbarian||Battlerager|SCAG|14"
			]
		},
		{
			"name": "Path of the Ancestral Guardian (UA)",
			"shortName": "Ancestral Guardian (UA)",
			"source": "UABarbarianPrimalPaths",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Path of the Ancestral Guardian|Barbarian||Ancestral Guardian (UA)|UABarbarianPrimalPaths|3",
				"Ancestral Shield|Barbarian||Ancestral Guardian (UA)|UABarbarianPrimalPaths|6",
				"Consult the Spirits|Barbarian||Ancestral Guardian (UA)|UABarbarianPrimalPaths|10",
				"Vengeful Ancestors|Barbarian||Ancestral Guardian (UA)|UABarbarianPrimalPaths|14"
			]
		},
		{
			"name": "Path of the Storm Herald (UA)",
			"shortName": "Storm Herald (UA)",
			"source": "UABarbarianPrimalPaths",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Path of the Storm Herald|Barbarian||Storm Herald (UA)|UABarbarianPrimalPaths|3",
				"Storm Soul|Barbarian||Storm Herald (UA)|UABarbarianPrimalPaths|6",
				"Shield of the Storm|Barbarian||Storm Herald (UA)|UABarbarianPrimalPaths|10",
				"Raging Storm|Barbarian||Storm Herald (UA)|UABarbarianPrimalPaths|14"
			]
		},
		{
			"name": "Path of the Zealot (UA)",
			"shortName": "Zealot (UA)",
			"source": "UABarbarianPrimalPaths",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Path of the Zealot|Barbarian||Zealot (UA)|UABarbarianPrimalPaths|3",
				"Zealous Focus|Barbarian||Zealot (UA)|UABarbarianPrimalPaths|6",
				"Zealous Presence|Barbarian||Zealot (UA)|UABarbarianPrimalPaths|10",
				"Rage Beyond Death|Barbarian||Zealot (UA)|UABarbarianPrimalPaths|14"
			]
		},
		{
			"name": "Path of the Ancestral Guardian v2 (UA)",
			"shortName": "Ancestral Guardian v2 (UA)",
			"source": "UARevisedSubclasses",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"spellcastingAbility": "wis",
			"subclassFeatures": [
				"Path of the Ancestral Guardian v2|Barbarian||Ancestral Guardian v2 (UA)|UARevisedSubclasses|3",
				"Ancestral Shield|Barbarian||Ancestral Guardian v2 (UA)|UARevisedSubclasses|6",
				"Consult the Spirits|Barbarian||Ancestral Guardian v2 (UA)|UARevisedSubclasses|10",
				"Vengeful Ancestors|Barbarian||Ancestral Guardian v2 (UA)|UARevisedSubclasses|14"
			]
		},
		{
			"name": "Path of the Ancestral Guardian",
			"shortName": "Ancestral Guardian",
			"source": "XGE",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 9,
			"spellcastingAbility": "wis",
			"additionalSpells": [
				{
					"innate": {
						"10": [
							"augury",
							"clairvoyance"
						]
					}
				}
			],
			"subclassFeatures": [
				"Path of the Ancestral Guardian|Barbarian||Ancestral Guardian|XGE|3",
				"Spirit Shield|Barbarian||Ancestral Guardian|XGE|6",
				"Consult the Spirits|Barbarian||Ancestral Guardian|XGE|10",
				"Vengeful Ancestors|Barbarian||Ancestral Guardian|XGE|14"
			]
		},
		{
			"name": "Path of the Storm Herald",
			"shortName": "Storm Herald",
			"source": "XGE",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 10,
			"subclassFeatures": [
				"Path of the Storm Herald|Barbarian||Storm Herald|XGE|3",
				"Storm Soul|Barbarian||Storm Herald|XGE|6",
				"Shielding Storm|Barbarian||Storm Herald|XGE|10",
				"Raging Storm|Barbarian||Storm Herald|XGE|14"
			]
		},
		{
			"name": "Path of the Zealot",
			"shortName": "Zealot",
			"source": "XGE",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 11,
			"subclassFeatures": [
				"Path of the Zealot|Barbarian||Zealot|XGE|3",
				"Fanatical Focus|Barbarian||Zealot|XGE|6",
				"Zealous Presence|Barbarian||Zealot|XGE|10",
				"Rage beyond Death|Barbarian||Zealot|XGE|14"
			]
		},
		{
			"name": "Path of the Wild Soul (UA)",
			"shortName": "Wild Soul (UA)",
			"source": "UABarbarianAndMonk",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Path of the Wild Soul|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|3",
				"Magic Reserves|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|6",
				"Arcane Rebuke|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|10",
				"Chaotic Fury|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|14",
				"Improved Magic Reserves|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|14"
			]
		},
		{
			"name": "Path of the Beast (UA)",
			"shortName": "Beast (UA)",
			"source": "UA2020SubclassesPt1",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Path of the Beast|Barbarian||Beast (UA)|UA2020SubclassesPt1|3",
				"Bestial Soul|Barbarian||Beast (UA)|UA2020SubclassesPt1|6",
				"Infectious Fury|Barbarian||Beast (UA)|UA2020SubclassesPt1|10",
				"Call the Hunt|Barbarian||Beast (UA)|UA2020SubclassesPt1|14"
			]
		},
		{
			"name": "Path of the Beast",
			"shortName": "Beast",
			"source": "TCE",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 24,
			"subclassFeatures": [
				"Path of the Beast|Barbarian||Beast|TCE|3",
				"Bestial Soul|Barbarian||Beast|TCE|6",
				"Infectious Fury|Barbarian||Beast|TCE|10",
				"Call the Hunt|Barbarian||Beast|TCE|14"
			]
		},
		{
			"name": "Path of Wild Magic",
			"shortName": "Wild Magic",
			"source": "TCE",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 25,
			"subclassFeatures": [
				"Path of Wild Magic|Barbarian||Wild Magic|TCE|3",
				"Bolstering Magic|Barbarian||Wild Magic|TCE|6",
				"Unstable Backlash|Barbarian||Wild Magic|TCE|10",
				"Controlled Surge|Barbarian||Wild Magic|TCE|14"
			]
		},
		{
			"name": "Path of the Giant (UA)",
			"shortName": "Giant (UA)",
			"source": "UA2022GiantOptions",
			"className": "Barbarian",
			"classSource": "PHB",
			"page": 1,
			"subclassFeatures": [
				"Path of the Giant|Barbarian||Giant (UA)|UA2022GiantOptions|3",
				"Elemental Cleaver|Barbarian||Giant (UA)|UA2022GiantOptions|6",
				"Mighty Impel|Barbarian||Giant (UA)|UA2022GiantOptions|10",
				"Demiurgic Colossus|Barbarian||Giant (UA)|UA2022GiantOptions|14"
			]
		}
	],
	"classFeature": [
		{
			"name": "Rage",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.",
				"While raging, you gain the following benefits if you aren't wearing heavy armor:",
				{
					"type": "list",
					"items": [
						"You have advantage on Strength checks and Strength saving throws.",
						"When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
						"You have resistance to bludgeoning, piercing, and slashing damage."
					]
				},
				"If you are able to cast spells, you can't cast them or concentrate on them while raging.",
				"Your rage lasts for 1 minute. It ends early if you are knocked {@condition unconscious} or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
				"Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
			]
		},
		{
			"name": "Unarmored Defense",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
			]
		},
		{
			"name": "Danger Sense",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be {@condition blinded}, {@condition deafened}, or {@condition incapacitated}."
			]
		},
		{
			"name": "Reckless Attack",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
			]
		},
		{
			"name": "Survival Instincts",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level barbarian feature (replaces Danger Sense)}",
				"You become proficient in your choice of two of the following skills: {@skill Animal Handling}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, or {@skill Survival}.",
				"Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
			]
		},
		{
			"name": "Primal Knowledge",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level barbarian {@variantrule optional class features|tce|optional feature}}",
				"When you reach 3rd level and again at 10th level, you gain proficiency in one skill of your choice from the list of skills available to barbarians at 1st level."
			]
		},
		{
			"name": "Primal Path",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, you choose a path that shapes the nature of your rage from the list of available paths. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Extra Attack",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Fast Movement",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor."
			]
		},
		{
			"name": "Instinctive Pounce",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 5,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 5th-level barbarian feature (replaces Fast Movement)}",
				"When a creature ends its turn within 15 feet of you, you can use your reaction to move up to half your speed to a space closer to the creature. This movement doesn't provoke opportunity attacks."
			]
		},
		{
			"name": "Path Feature",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature from your Primal Path."
			]
		},
		{
			"name": "Feral Instinct",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
				"Additionally, if you are {@quickref Surprise|PHB|3|0|surprised} at the beginning of combat and aren't {@condition incapacitated}, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
			]
		},
		{
			"name": "Instinctive Pounce",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 7,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 7th-level barbarian {@variantrule optional class features|tce|optional feature}}",
				"As part of the bonus action you take to enter your rage, you can move up to half your speed."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Brutal Critical (1 die)",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 9,
			"entries": [
				"Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
				"This increases to two additional dice at 13th level and three additional dice at 17th level."
			]
		},
		{
			"name": "Path feature",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you gain a feature from your Primal Path."
			]
		},
		{
			"name": "Relentless Rage",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
				"Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 12,
			"entries": [
				"When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Brutal Critical (2 dice)",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 13,
			"entries": [
				"At 13th level, you can roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack.",
				"This increases to three additional dice at 17th level."
			]
		},
		{
			"name": "Path feature",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature from your Primal Path."
			]
		},
		{
			"name": "Persistent Rage",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"Beginning at 15th level, your rage is so fierce that it ends early only if you fall {@condition unconscious} or if you choose to end it."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 16,
			"entries": [
				"When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Brutal Critical (3 dice)",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you can roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack."
			]
		},
		{
			"name": "Indomitable Might",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 19,
			"entries": [
				"When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 19,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 19th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Primal Champion",
			"source": "PHB",
			"page": 46,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Path of the Berserker",
			"source": "PHB",
			"page": 49,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Berserker",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"For some barbarians, rage is a means to an end\u2014that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Frenzy|Barbarian||Berserker||3"
				}
			]
		},
		{
			"name": "Frenzy",
			"source": "PHB",
			"page": 49,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Berserker",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of {@condition exhaustion}."
			]
		},
		{
			"name": "Mindless Rage",
			"source": "PHB",
			"page": 49,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Berserker",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, you can't be {@condition charmed} or {@condition frightened} while raging. If you are {@condition charmed} or {@condition frightened} when you enter your rage, the effect is suspended for the duration of the rage."
			]
		},
		{
			"name": "Intimidating Presence",
			"source": "PHB",
			"page": 49,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Berserker",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be {@condition frightened} of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the {@condition frightened} creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
				"If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
			]
		},
		{
			"name": "Retaliation",
			"source": "PHB",
			"page": 49,
			"srd": true,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Berserker",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature."
			]
		},
		{
			"name": "Bear",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment."
			]
		},
		{
			"name": "Eagle",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the {@action Dash} action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease."
			]
		},
		{
			"name": "Path of the Totem Warrior",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
				"Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spirit Seeker|Barbarian||Totem Warrior||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Totem Spirit|Barbarian||Totem Warrior||3"
				}
			]
		},
		{
			"name": "Wolf",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters."
			]
		},
		{
			"name": "Spirit Seeker",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the {@spell beast sense} and {@spell speak with animals} spells, but only as rituals, as described in {@book chapter 10|PHB|10|rituals}."
			]
		},
		{
			"name": "Totem Spirit",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object\u2014an amulet or similar adornment\u2014that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
				"Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Bear|Barbarian||Totem Warrior||3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Eagle|Barbarian||Totem Warrior||3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Elk|Barbarian|SCAG|Totem Warrior||3|SCAG"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Tiger|Barbarian|SCAG|Totem Warrior||3|SCAG"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Wolf|Barbarian||Totem Warrior||3"
						}
					]
				}
			]
		},
		{
			"name": "Bear",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 6,
			"entries": [
				"You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects."
			]
		},
		{
			"name": "Eagle",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 6,
			"entries": [
				"You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks."
			]
		},
		{
			"name": "Wolf",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 6,
			"entries": [
				"You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
			]
		},
		{
			"name": "Aspect of the Beast",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Bear|Barbarian||Totem Warrior||6"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Eagle|Barbarian||Totem Warrior||6"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Elk|Barbarian|SCAG|Totem Warrior||6|SCAG"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Tiger|Barbarian|SCAG|Totem Warrior||6|SCAG"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Wolf|Barbarian||Totem Warrior||6"
						}
					]
				}
			]
		},
		{
			"name": "Spirit Walker",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you can cast the {@spell commune with nature} spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek."
			]
		},
		{
			"name": "Bear",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 14,
			"entries": [
				"While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be {@condition frightened}."
			]
		},
		{
			"name": "Eagle",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 14,
			"entries": [
				"While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft."
			]
		},
		{
			"name": "Wolf",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 14,
			"entries": [
				"While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature {@condition prone} when you hit it with melee weapon attack."
			]
		},
		{
			"name": "Totemic Attunement",
			"source": "PHB",
			"page": 50,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Bear|Barbarian||Totem Warrior||14"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Eagle|Barbarian||Totem Warrior||14"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Elk|Barbarian|SCAG|Totem Warrior||14|SCAG"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Tiger|Barbarian|SCAG|Totem Warrior||14|SCAG"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Wolf|Barbarian||Totem Warrior||14"
						}
					]
				}
			]
		},
		{
			"name": "Path of the Battlerager",
			"source": "SCAG",
			"page": 121,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Battlerager",
			"subclassSource": "SCAG",
			"level": 3,
			"entries": [
				"Known as Kuldjargh (literally \"axe idiot\") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, {@item spiked armor|scag} and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Restriction\u2014Dwarves Only|Barbarian||Battlerager|SCAG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Battlerager Armor|Barbarian||Battlerager|SCAG|3"
				}
			]
		},
		{
			"name": "Battlerager Armor",
			"source": "SCAG",
			"page": 121,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Battlerager",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this path at 3rd level, you gain the ability to use {@item spiked armor|scag} as a weapon.",
				"While you are wearing {@item spiked armor|scag} and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes at a target within 5 feet of you. If the attack hits, the spikes deal {@damage 1d4} piercing damage. You use your Strength modifier for the attack and damage rolls.",
				"Additionally, when you use the {@action Attack} action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds."
			]
		},
		{
			"name": "Restriction\u2014Dwarves Only",
			"source": "SCAG",
			"page": 121,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Battlerager",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.",
				"Your DM can lift this restriction to better suit the campaign. The restriction exists for the Forgotten Realms. It might not apply to your DM's setting or your DM's version of the Realms."
			]
		},
		{
			"name": "Reckless Abandon",
			"source": "SCAG",
			"page": 121,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Battlerager",
			"subclassSource": "SCAG",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends."
			]
		},
		{
			"name": "Battlerager Charge",
			"source": "SCAG",
			"page": 121,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Battlerager",
			"subclassSource": "SCAG",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you can take the {@action Dash} action as a bonus action while you are raging."
			]
		},
		{
			"name": "Spiked Retribution",
			"source": "SCAG",
			"page": 121,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Battlerager",
			"subclassSource": "SCAG",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't {@condition incapacitated}, and are wearing {@item spiked armor|scag}."
			]
		},
		{
			"name": "Path of the Beast",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Barbarians who walk the Path of the Beast draw their rage from a bestial spark burning within their souls. That beast bursts forth in the throes of rage, physically transforming the barbarian.",
				"Such a barbarian might be inhabited by a primal spirit or be descended from shape-shifters. You can choose the origin of your feral might or determine it by rolling on the Origin of the Beast table.",
				{
					"type": "table",
					"caption": "Origin of the Beast",
					"colLabels": [
						"d4",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"One of your parents is a lycanthrope, and you've inherited some of their curse."
						],
						[
							"2",
							"You are descended from an archdruid and inherited the ability to partially change shape."
						],
						[
							"3",
							"A fey spirit gifted you with the ability to adopt different bestial aspects."
						],
						[
							"4",
							"An ancient animal spirit dwells within you, allowing you to walk this path."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Form of the Beast|Barbarian||Beast|TCE|3"
				}
			]
		},
		{
			"name": "Form of the Beast",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Path of the Beast feature}",
				"When you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.",
				"You choose the weapon's form each time you rage:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Bite",
							"entry": "Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals {@damage 1d8} piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit."
						},
						{
							"type": "item",
							"name": "Claws",
							"entry": "Each of your hands transforms into a claw, which you can use as a weapon if it's empty. It deals {@damage 1d6} slashing damage on a hit. Once on each of your turns when you attack with a claw using the {@action Attack} action, you can make one additional claw attack as part of the same action."
						},
						{
							"type": "item",
							"name": "Tail",
							"entry": "You grow a lashing, spiny tail, which deals {@damage 1d8} piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a {@dice d8}, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you."
						}
					]
				}
			]
		},
		{
			"name": "Bestial Soul",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Path of the Beast feature}",
				"The feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
				"You can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish your next short or long rest:",
				{
					"type": "list",
					"items": [
						"You gain a swimming speed equal to your walking speed, and you can breathe underwater.",
						"You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
						"When you jump, you can make a Strength ({@skill Athletics}) check and extend your jump by a number of feet equal to the check's total. You can make this special check only once per turn."
					]
				}
			]
		},
		{
			"name": "Infectious Fury",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Path of the Beast feature}",
				"When you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):",
				{
					"type": "list",
					"items": [
						"The target must use its reaction to make a melee attack against another creature of your choice that you can see.",
						"The target takes {@damage 2d12} psychic damage."
					]
				},
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Call the Hunt",
			"source": "TCE",
			"page": 24,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Path of the Beast feature}",
				"The beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature).",
				"You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can each use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a {@dice d6} and gain a bonus to the damage equal to the number rolled.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Path of Wild Magic",
			"source": "TCE",
			"page": 25,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Magic",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Many places in the multiverse abound with beauty, intense emotion, and rampant magic; the Feywild, the Upper Planes, and other realms of supernatural power radiate with such forces and can profoundly influence people. As folk of deep feeling, barbarians are especially susceptible to these wild influences, with some barbarians being transformed by the magic. These magic-suffused barbarians walk the Path of Wild Magic. Elf, tiefling, aasimar, and genasi barbarians often seek this path, eager to manifest the otherworldly magic of their ancestors.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Magic Awareness|Barbarian||Wild Magic|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wild Surge|Barbarian||Wild Magic|TCE|3"
				}
			]
		},
		{
			"name": "Magic Awareness",
			"source": "TCE",
			"page": 25,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Magic",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Path of Wild Magic feature}",
				"As an action, you can open your awareness to the presence of concentrated magic. Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn't behind total cover. When you sense a spell, you learn which school of magic it belongs to.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Wild Surge",
			"source": "TCE",
			"page": 25,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Magic",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Path of Wild Magic feature}",
				"The magical energy roiling inside you sometimes erupts from you. When you enter your rage, roll on the Wild Magic table to determine the magical effect produced.",
				"If the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
				{
					"type": "table",
					"caption": "Wild Magic",
					"colLabels": [
						"d8",
						"Magical Effect"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Shadowy tendrils lash around you. Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take {@damage 1d12} necrotic damage. You also gain {@dice 1d12} temporary hit points."
						],
						[
							"2",
							"You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action."
						],
						[
							"3",
							"An intangible spirit, which looks like a {@creature flumph} or a {@creature pixie} (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take {@damage 1d6} force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action."
						],
						[
							"4",
							"Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn."
						],
						[
							"5",
							"Whenever a creature hits you with an attack roll before your rage ends, that creature takes {@damage 1d6} force damage, as magic lashes out in retribution."
						],
						[
							"6",
							"Until your rage ends, you are surrounded by multi colored, protective lights; you gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus."
						],
						[
							"7",
							"Flowers and vines temporarily grow around you. Until your rage ends, the ground within 15 feet of you is {@quickref difficult terrain||3} for your enemies."
						],
						[
							"8",
							"A bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take {@damage 1d6} radiant damage and be {@condition blinded} until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action."
						]
					],
					"data": {
						"tableInclude": true
					}
				}
			]
		},
		{
			"name": "Bolstering Magic",
			"source": "TCE",
			"page": 25,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Magic",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Path of Wild Magic feature}",
				"You can harness your wild magic to bolster yourself or a companion. As an action, you can touch one creature (which can be yourself) and confer one of the following benefits of your choice to that creature:",
				{
					"type": "list",
					"items": [
						"For 10 minutes, the creature can roll a {@dice d3} whenever making an attack roll or an ability check and add the number rolled to the {@dice d20} roll.",
						"Roll a {@dice d3}. The creature regains one expended spell slot, the level of which equals the number rolled or lower (the creature's choice). Once a creature receives this benefit, that creature can't receive it again until after a long rest."
					]
				},
				"You can take this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Unstable Backlash",
			"source": "TCE",
			"page": 25,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Magic",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Path of Wild Magic feature}",
				"When you are imperiled during your rage, the magic within you can lash out; immediately after you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately produce the effect rolled. This effect replaces your current Wild Magic effect."
			]
		},
		{
			"name": "Controlled Surge",
			"source": "TCE",
			"page": 25,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Magic",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Path of Wild Magic feature}",
				"Whenever you roll on the Wild Magic table, you can roll the die twice and choose which of the two effects to unleash. If you roll the same number on both dice, you can ignore the number and choose any effect on the table."
			]
		},
		{
			"name": "Path of the Beast",
			"source": "UA2020SubclassesPt1",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"entries": [
				"Barbarians who walk the Path of Beast draw their rage from a bestial spark burning within their souls. That beast howls to be released and bursts forth in the throes of rage.",
				"Those who tread this path might be inhabited by a primal spirit or descended from shapeshifters. You can choose the origin of your feral might or determine it randomly by rolling on the Origin of the Beast table.",
				{
					"type": "table",
					"caption": "Origin of the Beast",
					"colLabels": [
						"d4",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"One of your parents is a lycanthrope, and you've inherited some of the curse."
						],
						[
							"2",
							"You are descended from a legendary druid, a fact manifested by your ability to partially change shape."
						],
						[
							"3",
							"A fey spirit gifted you with the ability to adopt different bestial aspects."
						],
						[
							"4",
							"An ancient animal spirit dwells within you, allowing you to walk this path."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Form of the Beast|Barbarian||Beast (UA)|UA2020SubclassesPt1|3"
				}
			]
		},
		{
			"name": "Form of the Beast",
			"source": "UA2020SubclassesPt1",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Path of the Beast feature}",
				"When you enter your rage, you can transform, revealing the bestial power within you. Until your rage ends, you manifest a natural melee weapon, choosing one of the following options each time you rage:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Bite",
							"entry": "Your mouth transforms into a bestial snout or great mandibles (your choice). Your bite deals {@damage 1d8} piercing damage on a hit. Once on each of your turns when you damage a creature with your bite, you regain a number of hit points equal to your Constitution modifier (minimum of 1 hit point)."
						},
						{
							"type": "item",
							"name": "Claws",
							"entry": "Your hands transform into claws, which deal {@damage 1d6} slashing damage on a hit. When you take the {@action Attack} action on your turn and make an attack with your claws, you can make one additional attack using your claws as part of the same action."
						},
						{
							"type": "item",
							"name": "Tail",
							"entry": "You grow a lashing, spiny tail, which deals {@damage 1d12} piercing damage on a hit and has the reach property."
						}
					]
				}
			]
		},
		{
			"name": "Bestial Soul",
			"source": "UA2020SubclassesPt1",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Path of the Beast feature}",
				"The feral spirit within you grows in power, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
				"You can also call on the feral spirit to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish a short or long rest:",
				{
					"type": "list",
					"items": [
						"You gain a swimming speed equal to your walking speed, and you can breathe underwater.",
						"You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
						"When you jump, you can make a Strength ({@skill Athletics}) check and extend your jump by a number of feet equal to the check's total. You can make this special check only once per turn."
					]
				}
			]
		},
		{
			"name": "Infectious Fury",
			"source": "UA2020SubclassesPt1",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Path of the Beast feature}",
				"When you hit a creature with your natural weapons while you are raging, the spirit within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):",
				{
					"type": "list",
					"items": [
						"The target must use its reaction to make a melee attack against another creature of your choice that you can see.",
						"Target takes {@damage 2d12} psychic damage."
					]
				},
				"You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Call the Hunt",
			"source": "UA2020SubclassesPt1",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Beast (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Path of the Beast feature}",
				"The beast within grows so powerful that you can spread its ferocity to your allies. When you enter your rage, you can choose a number of willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). Until your rage ends, the chosen creatures gain the Reckless {@action Attack} feature and you have advantage on saving throws against being {@condition frightened}. You also gain 5 temporary hit points for each creature that accepts the benefit. You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Giant Power",
			"source": "UA2022GiantOptions",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Giant (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 3,
			"entries": [
				"{@i 3rd-Level Path of the Giant Feature}",
				"When you choose this path, you learn to speak, read, and write Giant or one other language of your choice if you already know Giant. Additionally, you learn either the druidcraft or {@spell thaumaturgy} cantrip (your choice). Wisdom is your spellcasting ability for this spell."
			]
		},
		{
			"name": "Giant's Havoc",
			"source": "UA2022GiantOptions",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Giant (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 3,
			"entries": [
				"{@i 3rd-Level Path of the Giant Feature}",
				"Your rages pull strength from the primal might of giants, transforming you into a hulking force of destruction. While raging, you gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Crushing Hurl",
							"entries": [
								"When you make a successful ranged attack with a thrown weapon using Strength, you can add your Rage Damage bonus to the attack's damage roll."
							]
						},
						{
							"type": "item",
							"name": "Giant Stature",
							"entries": [
								"Your reach increases by 5 feet, and if you are smaller than Large, you become Large, along with anything you are wearing. If there isn't enough room for you to become Large, your size doesn't change."
							]
						}
					]
				}
			]
		},
		{
			"name": "Path of the Giant",
			"source": "UA2022GiantOptions",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Giant (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 3,
			"entries": [
				"Barbarians who walk the Path of the Giant draw strength from the primal forces that are the Giants and their elemental ilk. Their rages surge with elemental power and cause these barbarians to grow in size, transforming them into avatars of primordial might.",
				"During their rage, a barbarian may take after a legendary storm giant, hair turning white and eyes crackling with lightning. Others adopt the monstrous features of apocalyptic titans, rending the world around them so that it may be made anew.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Giant Power|Barbarian||Giant (UA)|UA2022GiantOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Giant's Havoc|Barbarian||Giant (UA)|UA2022GiantOptions|3"
				}
			]
		},
		{
			"name": "Elemental Cleaver",
			"source": "UA2022GiantOptions",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Giant (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-Level Path of the Giant Feature}",
				"Your bond with the elemental might of giants and their ilk grows, and you learn to infuse weapons with primordial energy.",
				"When you enter your rage, you can infuse one weapon of your choice that you are holding with one of the following damage types: acid, cold, fire, thunder, or lightning. While you wield the infused weapon during your rage, the weapon's damage type changes to the chosen type, it deals an extra {@damage 1d6} damage of the chosen type when it hits, and it gains the thrown property, with a normal range of 20 feet and a long range of 60 feet. If you throw the weapon, it reappears in your hand the instant after it hits or misses a target. The infused weapon's benefits are suppressed while a creature other than you wields it.",
				"While raging and holding the infused weapon, you can use a bonus action to change the infused weapon's current damage type to a different one from the above damage types."
			]
		},
		{
			"name": "Mighty Impel",
			"source": "UA2022GiantOptions",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Giant (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-Level Path of the Giant Feature}",
				"Your connection to giant strength now allows you to hurl both allies and enemies on the battlefield. As a bonus action while raging, you can choose one Medium or smaller creature within your reach and move it to an unoccupied space you can see within 30 feet of yourself. An unwilling creature must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier) to avoid the effect.",
				"If, at the end of this movement, the thrown creature isn't on a surface or liquid that can support it, the creature falls, taking damage as normal and landing {@condition prone}."
			]
		},
		{
			"name": "Demiurgic Colossus",
			"source": "UA2022GiantOptions",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Giant (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-Level Path of the Giant Feature}",
				"The primordial power of your rage intensifies. When you rage, your reach now increases by 10 feet, your size can increase to Huge, and you can now use your Mighty Impel to move creatures that are Large or smaller.",
				"In addition, the extra damage dealt by your Elemental Cleaver feature increases to {@dice 2d6}."
			]
		},
		{
			"name": "Path of the Wild Soul",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 3,
			"entries": [
				"The realm of the Feywild abounds with beauty, unpredictable emotion, and rampant magic. A barbarian exposed to this realm feels emotions powerfully and magic saturates their body.",
				"When a barbarian who follows this path rages, it is a bellowing roar for freedom, an explosion of expression, manifesting in unpredictable ways.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Lingering Magic|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wild Surge|Barbarian||Wild Soul (UA)|UABarbarianAndMonk|3"
				}
			]
		},
		{
			"name": "Lingering Magic",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your body reacts to the presence of magic. You can cast the {@spell detect magic} spell without using a spell slot or components. Constitution is your spellcasting ability for this spell. You faintly glow a color corresponding to the school of magic you detect (you choose the colors).",
				"You can use this feature a number of times equal to your Constitution modifier (minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Wild Surge",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, magic erupts from you as you rage. When you enter your rage, roll on the Wild Surge table to determine the magical effect produced.",
				"If the wild surge requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
				{
					"type": "table",
					"caption": "Wild Surge",
					"colLabels": [
						"d8",
						"Effect"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							1,
							"Necrotic energy bursts from you. Each creature within 30 feet of you takes {@damage 1d10} necrotic damage, and you gain temporary hit points equal to the sum of the necrotic damage dealt to the creatures."
						],
						[
							2,
							"You teleport up to 20 feet to an unoccupied space you can see. Until your rage ends, you can activate this effect again on each of your turns as a bonus action."
						],
						[
							3,
							"You conjure {@dice 1d4} intangible spirits that look like {@creature flumph||flumphs} in unoccupied spaces within 30 feet of you. Each spirit immediately flies 30 feet in a random direction. At the end of your turn, all spirits explode and each creature within 5 feet of one or more of them must succeed on a Dexterity saving throw or take {@damage 2d8} force damage."
						],
						[
							4,
							"Arcane energy enshrouds you. Until your rage ends, you gain a +2 bonus to AC, and whenever a creature within 10 feet of you hits you with an attack, that creature takes force damage equal to your Constitution modifier."
						],
						[
							5,
							"Plant life temporarily grows around you: until your rage ends, the ground within 10 feet of you is {@quickref difficult terrain||3}."
						],
						[
							6,
							"Arcane energy taps into the minds of those around you. Each creature within 30 feet of you must succeed on a Wisdom saving throw or you see a glimpse of the creature's thoughts, learning how it plans to attack you. As a result, the creature has disadvantage on attack rolls against you until the start of your next turn."
						],
						[
							7,
							"Shadows weave around a weapon of your choice you are holding. Until your rage ends, your weapon deals psychic damage instead of its bludgeoning, slashing, or piercing damage, and it gains the light and thrown properties with a normal range of 20 feet and a long range of 60 feet. If you drop the weapon or throw it, the weapon dissipates and reappears in your hand at the end of your turn."
						],
						[
							8,
							"A beam of brilliant light lances from your chest in a 5-foot-wide, 60-foot-long line. Each creature in the line must succeed on a Constitution saving throw or take {@damage 2d8} radiant damage and be {@condition blinded} until the start of your next turn."
						]
					]
				}
			]
		},
		{
			"name": "Magic Reserves",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you can channel the magic surging inside you into other creatures. As an action, you can touch a creature and roll a {@dice d4}. The creature recovers an expended spell slot of a level equal to the number rolled. If the creature you touch can't recover a spell slot of that level, the creature instead gains temporary hit points equal to five times the number rolled.",
				"You take force damage equal to five times the number rolled.",
				"When you reach 14th level in this class, you increase the die to a {@dice d6}."
			]
		},
		{
			"name": "Arcane Rebuke",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, the magic crackling within your soul lashes out. When a creature forces you to make a saving throw while you are raging, you can use your reaction to deal {@damage 3d6} force damage to that creature."
			]
		},
		{
			"name": "Chaotic Fury",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you become a wellspring of wild magic while you are raging. As a bonus action, you can reroll on the Wild Surge table, replacing your current effect with the new one."
			]
		},
		{
			"name": "Improved Magic Reserves",
			"source": "UABarbarianAndMonk",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Wild Soul (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you increase your magic reserves die to a {@dice d6}."
			]
		},
		{
			"name": "Path of the Ancestral Guardian",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"entries": [
				"Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger on in the world as mighty spirits who can guide and protect the living. When barbarians who follow this path rage, they cross the barrier into the spirit world and call on these guardian spirits for aid.",
				"Barbarians who draw on their ancestral guardians fight to protect their tribes and their allies. With the spirits' help, they can hinder their foes even as they strike powerful blows against them.",
				"In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell epic sagas of victories against terrible monsters and other fearsome rivals.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ancestral Protectors|Barbarian||Ancestral Guardian (UA)|UABarbarianPrimalPaths|3"
				}
			]
		},
		{
			"name": "Ancestral Protectors",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this path at 3rd level, spectral warriors appear when you rage. These warriors distract a foe you designate and hinder its attempts to evade you. While you're raging, you can use a bonus action on your turn to choose one creature you can see within 5 feet of you. Until the start of your next turn or until your rage ends, the chosen creature has disadvantage on any attack roll that doesn't target you, and if the creature takes the {@action Disengage} action within 5 feet of you, its speed is halved until the end of its turn."
			]
		},
		{
			"name": "Ancestral Shield",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the guardian spirits that aid you can provide protection for your allies. If you are raging and an ally you can see within 30 feet of you takes bludgeoning, piercing, or slashing damage, you can use your reaction to transfer your resistance to those damage types to the ally. The resistance applies to the incoming damage. Until the start of your next turn, the ally keeps the resistance and you lack it, unless you also have it from a source other than rage."
			]
		},
		{
			"name": "Consult the Spirits",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain the ability to consult with your ancestral spirits. Right before you make an Intelligence or a Wisdom check, you can give yourself advantage on the check. You can use this feature three times, and you regain expended uses when you finish a long rest."
			]
		},
		{
			"name": "Vengeful Ancestors",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your ancestral spirits grow powerful enough to strike your foes. When you or an ally you can see within 30 feet of you is damaged by a melee attack while you're raging, you can use your reaction to cause the attacker to take {@damage 2d8} force damage from the spirits."
			]
		},
		{
			"name": "Path of the Storm Herald",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"entries": [
				"Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them. When in a fury, a barbarian of this path taps into nature to create powerful, magical effects.",
				"Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect the natural realm. Other storm heralds hone their craft in elite lodges founded in regions wracked by storms, in the frozen reaches at the world's end, or deep in the hottest deserts.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Storm of Fury|Barbarian||Storm Herald (UA)|UABarbarianPrimalPaths|3"
				}
			]
		},
		{
			"name": "Storm of Fury",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"header": 1,
			"entries": [
				"When you select this path at 3rd level, choose one of the following options: desert, sea, or tundra. The environment you choose shapes the nature of the storm you conjure when you rage. While raging, you emanate an aura in a 10-foot radius. The effects of this aura depend on your chosen environment.",
				{
					"type": "entries",
					"name": "Desert",
					"entries": [
						"Any enemy that ends its turn in your aura takes fire damage equal to 2 + your barbarian level divided by 4."
					]
				},
				{
					"type": "entries",
					"name": "Sea",
					"entries": [
						"At the end of each of your turns, you can choose a creature in your aura other than yourself. The target must make a Dexterity saving throw against a DC equal to 8 + your proficiency bonus + your Constitution modifier. The target takes {@damage 2d6} lightning damage on a failed save, and half as much damage on a successful one. This damage increases to {@dice 3d6} at 10th level and to {@dice 4d6} at 15th level."
					]
				},
				{
					"type": "entries",
					"name": "Tundra",
					"entries": [
						"Any enemy that ends its turn in your aura takes cold damage equal to 2 + your barbarian level divided by 4."
					]
				}
			]
		},
		{
			"name": "Storm Soul",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your link to the power of the storm grants you additional abilities based on the environment you chose at 3rd level.",
				{
					"type": "entries",
					"name": "Desert",
					"entries": [
						"You gain resistance to fire damage and don't suffer the effects of extreme heat."
					]
				},
				{
					"type": "entries",
					"name": "Sea",
					"entries": [
						"You gain resistance to lightning damage and can breathe underwater."
					]
				},
				{
					"type": "entries",
					"name": "Tundra",
					"entries": [
						"Tundra. You gain resistance to cold damage and don't suffer the effects of extreme cold."
					]
				}
			]
		},
		{
			"name": "Shield of the Storm",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn to use your mastery of the storm to protect your allies. While you are raging, allies within your aura gain the benefits of your Storm Soul feature."
			]
		},
		{
			"name": "Raging Storm",
			"source": "UABarbarianPrimalPaths",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the power of the storm you channel grows mightier.",
				{
					"type": "entries",
					"name": "Desert",
					"entries": [
						"The ground around you becomes like shifting sand. Any enemy that attempts to move more than 5 feet per turn on the ground while in your aura must make a Strength saving throw (DC 8 + your proficiency bonus + your Constitution modifier). On a failed save, the creature's speed drops to 0 until the start of its next turn."
					]
				},
				{
					"type": "entries",
					"name": "Sea",
					"entries": [
						"Roaring winds tear through the area around you. Any creature in your aura that you hit with an attack must make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked {@condition prone}."
					]
				},
				{
					"type": "entries",
					"name": "Tundra",
					"entries": [
						"The air around you coldly slows your foes. The area within your aura is {@quickref difficult terrain||3} for your enemies."
					]
				}
			]
		},
		{
			"name": "Path of the Zealot",
			"source": "UABarbarianPrimalPaths",
			"page": 2,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"entries": [
				"Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots\u2014warriors who channel their rage into powerful displays of divine power.",
				"A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divine Fury|Barbarian||Zealot (UA)|UABarbarianPrimalPaths|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warrior of the Gods|Barbarian||Zealot (UA)|UABarbarianPrimalPaths|3"
				}
			]
		},
		{
			"name": "Divine Fury",
			"source": "UABarbarianPrimalPaths",
			"page": 2,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this path at 3rd level, you can channel divine fury when you start to rage. If you do so, you become cloaked in an aura of divine power until the rage ends. At the end of each of your turns for that duration, each creature within 5 feet of you takes damage equal to {@dice 1d6} + half your barbarian level. The damage is necrotic or radiant; you choose the type of damage when you gain this feature."
			]
		},
		{
			"name": "Warrior of the Gods",
			"source": "UABarbarianPrimalPaths",
			"page": 2,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your soul is marked for endless battle. If a spell would have the sole effect of restoring you to life (but not undeath), the caster does not need material components to cast the spell on you."
			]
		},
		{
			"name": "Zealous Focus",
			"source": "UABarbarianPrimalPaths",
			"page": 2,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, the divine power that fuels your rage can shield you from harm. If you fail a saving throw while raging, you can instead succeed on that saving throw as a reaction. However, doing so immediately ends your rage, and you can't rage again until you finish a short or long rest."
			]
		},
		{
			"name": "Zealous Presence",
			"source": "UABarbarianPrimalPaths",
			"page": 2,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn to channel divine power to inspire zealotry in others. As an action, you howl in fury and unleash a battle cry infused with divine energy. Every ally within 60 feet of you gains advantage on attack rolls and saving throws until the start of your next turn.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Rage Beyond Death",
			"source": "UABarbarianPrimalPaths",
			"page": 2,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot (UA)",
			"subclassSource": "UABarbarianPrimalPaths",
			"level": 14,
			"header": 2,
			"entries": [
				"Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.",
				"While raging, having 0 hit points doesn't knock you {@condition unconscious}. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don't die until your rage ends."
			]
		},
		{
			"name": "Path of the Ancestral Guardian v2",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"entries": [
				"Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger on in the world as mighty spirits who can guide and protect the living. When barbarians who follow this path rage, they cross the barrier into the spirit world and call on these guardian spirits for aid.",
				"Barbarians who draw on their ancestral guardians fight to protect their tribes and their allies. With the spirits' help, they can hinder their foes even as they strike powerful blows against them.",
				"In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell epic sagas of victories against terrible monsters and other fearsome rivals.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ancestral Protectors|Barbarian||Ancestral Guardian v2 (UA)|UARevisedSubclasses|3"
				}
			]
		},
		{
			"name": "Ancestral Protectors",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this path at 3rd level, spectral warriors appear when you rage. These warriors distract a foe you designate and hinder its attempts to evade you. While you're raging, the first creature you hit with an attack on your turn becomes the target of these warriors. Until the start of your next turn or until your rage ends, that target has disadvantage on any attack roll that doesn't target you, and creatures other than you have resistance to the damage of the creature's attacks."
			]
		},
		{
			"name": "Ancestral Shield",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the guardian spirits that aid you can provide protection for your allies. If you are raging and a creature you can see within 30 feet of you takes damage, you can use your reaction and reduce that damage by {@dice 2d8}. When you reach certain levels in this class, you can reduce the damage by more: by {@dice 3d8} at 10th level and by {@dice 4d8} at 14th level."
			]
		},
		{
			"name": "Consult the Spirits",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain the ability to consult with your ancestral spirits and use them to scout far-off lands. When you do so, you cast the {@spell clairvoyance} spell, without needing a spell slot. Rather than creating a spherical sensor, the spell invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for the spell. After you cast the spell in this way, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "Vengeful Ancestors",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your ancestral spirits grow powerful enough to strike foes that dare harm those that you protect. When you use your Spirit Shield Ability to protect a creature damaged by an attack, the attacker takes the same amount of damage that the Spirit Shield protects."
			]
		},
		{
			"name": "Path of the Ancestral Guardian",
			"source": "XGE",
			"page": 9,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid.",
				"Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ancestral Protectors|Barbarian||Ancestral Guardian|XGE|3"
				}
			]
		},
		{
			"name": "Ancestral Protectors",
			"source": "XGE",
			"page": 9,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends."
			]
		},
		{
			"name": "Spirit Shield",
			"source": "XGE",
			"page": 9,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by {@dice 2d6}.",
				"When you reach certain levels in this class, you can reduce the damage by more: by {@dice 3d6} at 10th level and by {@dice 4d6} at 14th level."
			]
		},
		{
			"name": "Consult the Spirits",
			"source": "XGE",
			"page": 9,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the {@spell augury} or {@spell clairvoyance} spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of {@spell clairvoyance} invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.",
				"After you cast either spell in this way, you can't use this feature again until you finish a short or long rest."
			]
		},
		{
			"name": "Vengeful Ancestors",
			"source": "XGE",
			"page": 9,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Ancestral Guardian",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents."
			]
		},
		{
			"name": "Path of the Storm Herald",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"All barbarians harbor a fury within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn to transform that rage into a mantle of primal magic, which swirls around them. When in a fury, a barbarian of this path taps into the forces of nature to create powerful magical effects.",
				"Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect nature. Other storm heralds hone their craft in lodges in regions wracked by storms, in the frozen reaches at the world's end, or deep in the hottest deserts.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Storm Aura|Barbarian||Storm Herald|XGE|3"
				}
			]
		},
		{
			"name": "Storm Aura",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover.",
				"Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura's effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class.",
				"If your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Desert|Barbarian|XGE|Storm Herald|XGE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Sea|Barbarian|XGE|Storm Herald|XGE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Tundra|Barbarian|XGE|Storm Herald|XGE|3"
						}
					]
				}
			]
		},
		{
			"name": "Storm Soul",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, the storm grants you benefits even when your aura isn't active. The benefits are based on the environment you chose for your Storm Aura.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Desert|Barbarian|XGE|Storm Herald|XGE|6"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Sea|Barbarian|XGE|Storm Herald|XGE|6"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Tundra|Barbarian|XGE|Storm Herald|XGE|6"
						}
					]
				}
			]
		},
		{
			"name": "Shielding Storm",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura."
			]
		},
		{
			"name": "Raging Storm",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Desert|Barbarian|XGE|Storm Herald|XGE|14"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Sea|Barbarian|XGE|Storm Herald|XGE|14"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Tundra|Barbarian|XGE|Storm Herald|XGE|14"
						}
					]
				}
			]
		},
		{
			"name": "Path of the Zealot",
			"source": "XGE",
			"page": 11,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots\u2014warriors who channel their rage into powerful displays of divine power.",
				"A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divine Fury|Barbarian||Zealot|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warrior of the Gods|Barbarian||Zealot|XGE|3"
				}
			]
		},
		{
			"name": "Divine Fury",
			"source": "XGE",
			"page": 11,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this path at 3rd level, you can channel divine fury into your weapon strikes. While you're raging, the first creature you hit on each of your turns with a weapon attack takes extra damage equal to {@dice 1d6} + half your barbarian level. The extra damage is necrotic or radiant; you choose the type of damage when you gain this feature."
			]
		},
		{
			"name": "Warrior of the Gods",
			"source": "XGE",
			"page": 11,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your soul is marked for endless battle. If a spell, such as {@spell raise dead}, has the sole effect of restoring you to life (but not undeath), the caster doesn't need material components to cast the spell on you."
			]
		},
		{
			"name": "Fanatical Focus",
			"source": "XGE",
			"page": 11,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, the divine power that fuels your rage can protect you. If you fail a saving throw while you're raging, you can reroll it, and you must use the new roll. You can use this ability only once per rage."
			]
		},
		{
			"name": "Zealous Presence",
			"source": "XGE",
			"page": 11,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn to channel divine power to inspire zealotry in others. As a bonus action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you that can hear you gain advantage on attack rolls and saving throws until the start of your next turn.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Rage beyond Death",
			"source": "XGE",
			"page": 11,
			"className": "Barbarian",
			"classSource": "PHB",
			"subclassShortName": "Zealot",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.",
				"While you're raging, having 0 hit points doesn't knock you {@condition unconscious}. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don't die until your rage ends, and you die then only if you still have 0 hit points."
			]
		},
		{
			"name": "Elk",
			"source": "SCAG",
			"page": 122,
			"className": "Barbarian",
			"classSource": "SCAG",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift."
			]
		},
		{
			"name": "Tiger",
			"source": "SCAG",
			"page": 122,
			"className": "Barbarian",
			"classSource": "SCAG",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps."
			]
		},
		{
			"name": "Elk",
			"source": "SCAG",
			"page": 122,
			"className": "Barbarian",
			"classSource": "SCAG",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 6,
			"entries": [
				"Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not {@condition incapacitated}. The elk spirit helps you roam far and fast."
			]
		},
		{
			"name": "Tiger",
			"source": "SCAG",
			"page": 122,
			"className": "Barbarian",
			"classSource": "SCAG",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 6,
			"entries": [
				"You gain proficiency in two skills from the following list: {@skill Athletics}, {@skill Acrobatics}, {@skill Stealth}, and {@skill Survival}. The cat spirit hones your survival instincts."
			]
		},
		{
			"name": "Elk",
			"source": "SCAG",
			"page": 122,
			"className": "Barbarian",
			"classSource": "SCAG",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 14,
			"entries": [
				"While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked {@condition prone} and take bludgeoning damage equal to {@dice 1d12} + your Strength modifier."
			]
		},
		{
			"name": "Tiger",
			"source": "SCAG",
			"page": 122,
			"className": "Barbarian",
			"classSource": "SCAG",
			"subclassShortName": "Totem Warrior",
			"subclassSource": "PHB",
			"level": 14,
			"entries": [
				"While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it."
			]
		},
		{
			"name": "Desert",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."
			]
		},
		{
			"name": "Sea",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes {@damage 1d6} lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to {@dice 2d6} at 10th level, {@dice 3d6} at 15th level, and {@dice 4d6} at 20th level."
			]
		},
		{
			"name": "Tundra",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."
			]
		},
		{
			"name": "Desert",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 6,
			"entries": [
				"You gain resistance to fire damage, and you don't suffer the effects of extreme heat, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch a flammable object that isn't being worn or carried by anyone else and set it on fire."
			]
		},
		{
			"name": "Sea",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 6,
			"entries": [
				"You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet."
			]
		},
		{
			"name": "Tundra",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 6,
			"entries": [
				"You gain resistance to cold damage, and you don't suffer the effects of extreme cold, as described in the Dungeon Master's Guide. Moreover, as an action, you can touch water and turn a 5-foot cube of it into ice, which melts after 1 minute. This action fails if a creature is in the cube."
			]
		},
		{
			"name": "Desert",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 14,
			"entries": [
				"Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your barbarian level."
			]
		},
		{
			"name": "Sea",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 14,
			"entries": [
				"When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked {@condition prone}, as if struck by a wave."
			]
		},
		{
			"name": "Tundra",
			"source": "XGE",
			"page": 10,
			"className": "Barbarian",
			"classSource": "XGE",
			"subclassShortName": "Storm Herald",
			"subclassSource": "XGE",
			"level": 14,
			"entries": [
				"Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it."
			]
		}
	]
}


const wizard = {
	"_meta": {
		"dependencies": {
			"subclass": [
				"generic"
			]
		}
	},
	"class": [
		{
			"name": "Wizard",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"hd": {
				"number": 1,
				"faces": 6
			},
			"proficiency": [
				"int",
				"wis"
			],
			"spellcastingAbility": "int",
			"casterProgression": "full",
			"preparedSpells": "<$level$> + <$int_mod$>",
			"cantripProgression": [
				3,
				3,
				3,
				4,
				4,
				4,
				4,
				4,
				4,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5
			],
			"spellsKnownProgressionFixed": [
				6,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2
			],
			"spellsKnownProgressionFixedAllowLowerLevel": true,
			"startingProficiencies": {
				"weapons": [
					"{@item dagger|phb|daggers}",
					"{@item dart|phb|darts}",
					"{@item sling|phb|slings}",
					"{@item quarterstaff|phb|quarterstaffs}",
					"{@item light crossbow|phb|light crossbows}"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"arcana",
								"history",
								"insight",
								"investigation",
								"medicine",
								"religion"
							],
							"count": 2
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) a {@item quarterstaff|phb} or (b) a {@item dagger|phb}",
					"(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
					"(a) a {@item scholar's pack|phb} or (b) an {@item explorer's pack|phb}",
					"A {@item spellbook|phb}"
				],
				"goldAlternative": "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"quarterstaff|phb"
						],
						"b": [
							"dagger|phb"
						]
					},
					{
						"a": [
							"component pouch|phb"
						],
						"b": [
							"arcane focus|phb"
						]
					},
					{
						"a": [
							"scholar's pack|phb"
						],
						"b": [
							"explorer's pack|phb"
						]
					},
					{
						"_": [
							"spellbook|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"int": 13
				}
			},
			"classTableGroups":[
				{
					"colLabels": [
						"Cantrips Known",
						"1st spell slot",
						"2nd spell slot",
						"3rd spell slot",
						"4th spell slot",
						"5th spell slot",
						"6th spell slot",
						"7th spell slot",
						"9th spell slot",
						"9th spell slot",
					],
					"rows": [
						[
							3,
							2,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						],
						[
							3,
							3,
							0,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						],
						[
							3,
							4,
							2,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						],
						[
							4,
							4,
							3,
							0,
							0,
							0,
							0,
							0,
							0,
							0
						],
						[
							4,
							4,
							3,
							2,
							0,
							0,
							0,
							0,
							0,
							0
						],
						[
							4,
							4,
							3,
							3,
							0,
							0,
							0,
							0,
							0,
							0
						],
						[
							4,
							4,
							3,
							3,
							1,
							0,
							0,
							0,
							0,
							0
						],
						[
							4,
							4,
							3,
							3,
							2,
							0,
							0,
							0,
							0,
							0
						],
						[
							4,
							4,
							3,
							3,
							3,
							1,
							0,
							0,
							0,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							0,
							0,
							0,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							0,
							0,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							0,
							0,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							1,
							0,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							1,
							0,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							1,
							1,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							1,
							1,
							0
						],
						[
							5,
							4,
							3,
							3,
							3,
							2,
							1,
							1,
							1,
							1
						],
						[
							5,
							4,
							3,
							3,
							3,
							3,
							1,
							1,
							1,
							1
						],
						[
							5,
							4,
							3,
							3,
							3,
							3,
							2,
							1,
							1,
							1
						],
						[
							5,
							4,
							3,
							3,
							3,
							3,
							2,
							2,
							1,
							1
						]
					]
				}
			],
			"classFeatures": [
				"Arcane Recovery|Wizard||1",
				"Spellcasting|Wizard||1",
				"Cantrip Versatility|Wizard||1|UAClassFeatureVariants",
				{
					"classFeature": "Arcane Tradition|Wizard||2",
					"gainSubclassFeature": true
				},
				"Cantrip Formulas|Wizard||3|TCE",
				"Ability Score Improvement|Wizard||4",
				"Proficiency Versatility|Wizard||4|UAClassFeatureVariants",
				{
					"classFeature": "Arcane Tradition feature|Wizard||6",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Wizard||8",
				"Proficiency Versatility|Wizard||8|UAClassFeatureVariants",
				{
					"classFeature": "Arcane Tradition feature|Wizard||10",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Wizard||12",
				"Proficiency Versatility|Wizard||12|UAClassFeatureVariants",
				{
					"classFeature": "Arcane Tradition feature|Wizard||14",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Wizard||16",
				"Proficiency Versatility|Wizard||16|UAClassFeatureVariants",
				"Spell Mastery|Wizard||18",
				"Ability Score Improvement|Wizard||19",
				"Proficiency Versatility|Wizard||19|UAClassFeatureVariants",
				"Signature Spells|Wizard||20"
			],
			"subclassTitle": "Arcane Tradition",
			"fluff": [
				{
					"name": "Wizard",
					"type": "section",
					"entries": [
						"Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers.",
						"Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond.",
						"Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left.",
						"Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
						{
							"type": "entries",
							"name": "Scholars of the Arcane",
							"entries": [
								"Wild and enigmatic, varied in form and function, the power of magic draws students who seek to master its mysteries. Some aspire to become like the gods, shaping reality itself. Though the casting of a typical spell requires merely the utterance of a few strange words, fleeting gestures, and sometimes a pinch or clump of exotic materials, these surface components barely hint at the expertise attained after years of apprenticeship and countless hours of study.",
								"Wizards live and die by their spells. Everything else is secondary. They learn new spells as they experiment and grow in experience. They can also learn them from other wizards, from ancient tomes or inscriptions, and from ancient creatures (such as the fey) that are steeped in magic."
							]
						},
						{
							"type": "entries",
							"name": "The Lure of Knowledge",
							"entries": [
								"Wizards' lives are seldom mundane. The closest a wizard is likely to come to an ordinary life is working as a sage or lecturer in a library or university, teaching others the secrets of the multiverse. Other wizards sell their services as diviners, serve in military forces, or pursue lives of crime or domination.",
								"But the lure of knowledge and power calls even the most unadventurous wizards out of the safety of their libraries and laboratories and into crumbling ruins and lost cities. Most wizards believe that their counterparts in ancient civilizations knew secrets of magic that have been lost to the ages, and discovering those secrets could unlock the path to a power greater than any magic available in the present age."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Wizard",
							"entries": [
								"Creating a wizard character demands a backstory dominated by at least one extraordinary event. How did your character first come into contact with magic? How did you discover you had an aptitude for it? Do you have a natural talent, or did you simply study hard and practice incessantly? Did you encounter a magical creature or an ancient tome that taught you the basics of magic?",
								"What drew you forth from your life of study? Did your first taste of magical knowledge leave you hungry for more? Have you received word of a secret repository of knowledge not yet plundered by any other wizard? Perhaps you're simply eager to put your newfound magical skills to the test in the face of danger.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a wizard quickly by following these suggestions. First, Intelligence should be your highest ability score, followed by Constitution or Dexterity. If you plan to join the School of Enchantment, make Charisma your next-best score. Second, choose the {@background sage} background. Third, choose the {@spell mage hand}, {@spell light}, and {@spell ray of frost} cantrips, along with the following 1st-level spells for your spellbook: {@spell burning hands}, {@spell charm person}, {@spell feather fall}, {@spell mage armor}, {@spell magic missile}, and {@spell sleep}."
									]
								}
							]
						}
					],
					"page": 112,
					"source": "PHB"
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"Wizardry requires understanding. The knowledge of how and why magic works, and our efforts to broaden that understanding, have brought about the key advances in civilization over the centuries."
							],
							"by": "Gimble the illusionist"
						},
						"Only a select few people in the world are wielders of magic. Of all those, wizards stand at the pinnacle of the craft. Even the least of them can manipulate forces that flout the laws of nature, and the most accomplished among them can cast spells with world-shaking effects.",
						"The price that wizards pay for their mastery is that most valuable of commodities: time. It takes years of study, instruction, and experimentation to learn how to harness magical energy and carry spells around in one's own mind. For adventuring wizards and other spellcasters who aspire to the highest echelons of the profession, the studying never ends, nor does the quest for knowledge and power.",
						"If you're playing a wizard, take advantage of the opportunity to make your character more than just a stereotypical spell-slinger. Use the advice that follows to add some intriguing details to how your wizard interacts with the world.",
						{
							"type": "entries",
							"name": "Spellbook",
							"entries": [
								"Your wizard character's most prized possession\u2014your spellbook\u2014might be an innocuous-looking volume whose covers show no hint of what's inside. Or you might display some flair, as many wizards do, by carrying a spellbook of an unusual sort. If you don't own such an item already, one of your goals might be to find a spellbook that sets you apart by its appearance or its means of manufacture.",
								{
									"type": "table",
									"caption": "Spellbooks",
									"colLabels": [
										"{@dice d6}",
										"Spellbook"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											{
												"type": "cell",
												"roll": {
													"exact": 1
												}
											},
											"A tome with pages that are thin sheets of metal, spells etched into them with acid"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Long straps of leather on which spells are written, wrapped around a staff for ease of transport"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A battered tome filled with pictographs that only you can understand"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Small stones inscribed with spells and kept in a cloth bag"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A scorched book, ravaged by dragon fire, with the script of your spells barely visible on its pages"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"A tome full of black pages whose writing is visible only in dim light or darkness"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Ambition",
							"entries": [
								"Few aspiring wizards undertake the study of magic without some personal goal in mind. Many wizards use their spells as a tool to produce a tangible benefit, in material goods or in status, for themselves or their companions. For others, the theoretical aspect of magic might have a strong appeal, pushing those wizards to seek out knowledge that supports new theories of the arcane or confirms old ones.",
								"Beyond the obvious, why does your wizard character study magic, and what do you want to achieve? If you haven't given these questions much thought, you can do so now, and the answers you come up with will likely affect how your future unfolds.",
								{
									"type": "table",
									"caption": "Ambitions",
									"colLabels": [
										"{@dice d6}",
										"Ambition"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											{
												"type": "cell",
												"roll": {
													"exact": 1
												}
											},
											"You will prove that the gods aren't as powerful as folk believe."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Immortality is the end goal of your studies."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"If you can fully understand magic, you can unlock its use for all and usher in an era of equality."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Magic is a dangerous tool. You use it to protect what you treasure."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Arcane power must be taken away from those who would abuse it."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You will become the greatest wizard the world has seen in generations."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Eccentricity",
							"entries": [
								"Endless hours of solitary study and research can have a negative effect on anyone's social skills. Wizards, who are a breed apart to begin with, are no exception. An odd mannerism or two is not necessarily a drawback, though; an eccentricity of this sort is usually harmless and could provide a source of amusement or serve as a calling card of sorts.",
								"If your character has an eccentricity, is it a physical tic or a mental one? Are you well known in some circles because of it? Do you fight to overcome it, or do you embrace this minor claim to fame of yours?",
								{
									"type": "table",
									"caption": "Eccentricities",
									"colLabels": [
										"{@dice d6}",
										"Eccentricity"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											{
												"type": "cell",
												"roll": {
													"exact": 1
												}
											},
											"You have the habit of tapping your foot incessantly, which often annoys those around you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your memory is quite good, but you have no trouble pretending to be absentminded when it suits your purposes."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"You never enter a room without looking to see what's hanging from the ceiling."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your most prized possession is a dead worm that you keep inside a potion vial."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"When you want people to leave you alone, you start talking to yourself. That usually does the trick."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Your fashion sense and grooming, or more accurately lack thereof, sometimes cause others to assume you are a beggar."
										]
									]
								}
							]
						}
					],
					"page": 58,
					"source": "XGE"
				}
			]
		}
	],
	"subclass": [
		{
			"name": "School of Abjuration",
			"shortName": "Abjuration",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 115,
			"subclassFeatures": [
				"School of Abjuration|Wizard||Abjuration||2",
				"Projected Ward|Wizard||Abjuration||6",
				"Improved Abjuration|Wizard||Abjuration||10",
				"Spell Resistance|Wizard||Abjuration||14"
			]
		},
		{
			"name": "School of Conjuration",
			"shortName": "Conjuration",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 116,
			"subclassFeatures": [
				"School of Conjuration|Wizard||Conjuration||2",
				"Benign Transposition|Wizard||Conjuration||6",
				"Focused Conjuration|Wizard||Conjuration||10",
				"Durable Summons|Wizard||Conjuration||14"
			]
		},
		{
			"name": "School of Divination",
			"shortName": "Divination",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 116,
			"subclassFeatures": [
				"School of Divination|Wizard||Divination||2",
				"Expert Divination|Wizard||Divination||6",
				"The Third Eye|Wizard||Divination||10",
				"Greater Portent|Wizard||Divination||14"
			]
		},
		{
			"name": "School of Enchantment",
			"shortName": "Enchantment",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 117,
			"subclassFeatures": [
				"School of Enchantment|Wizard||Enchantment||2",
				"Instinctive Charm|Wizard||Enchantment||6",
				"Split Enchantment|Wizard||Enchantment||10",
				"Alter Memories|Wizard||Enchantment||14"
			]
		},
		{
			"name": "School of Evocation",
			"shortName": "Evocation",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"subclassFeatures": [
				"School of Evocation|Wizard||Evocation||2",
				"Potent Cantrip|Wizard||Evocation||6",
				"Empowered Evocation|Wizard||Evocation||10",
				"Overchannel|Wizard||Evocation||14"
			]
		},
		{
			"name": "School of Illusion",
			"shortName": "Illusion",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 118,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"minor illusion#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"School of Illusion|Wizard||Illusion||2",
				"Malleable Illusions|Wizard||Illusion||6",
				"Illusory Self|Wizard||Illusion||10",
				"Illusory Reality|Wizard||Illusion||14"
			]
		},
		{
			"name": "School of Necromancy",
			"shortName": "Necromancy",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 118,
			"subclassFeatures": [
				"School of Necromancy|Wizard||Necromancy||2",
				"Undead Thralls|Wizard||Necromancy||6",
				"Inured to Undeath|Wizard||Necromancy||10",
				"Command Undead|Wizard||Necromancy||14"
			]
		},
		{
			"name": "School of Transmutation",
			"shortName": "Transmutation",
			"source": "PHB",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 119,
			"subclassFeatures": [
				"School of Transmutation|Wizard||Transmutation||2",
				"Transmuter's Stone|Wizard||Transmutation||6",
				"Shapechanger|Wizard||Transmutation||10",
				"Master Transmuter|Wizard||Transmutation||14"
			]
		},
		{
			"name": "Artificer (UA)",
			"shortName": "Artificer (UA)",
			"source": "UAEberron",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 3,
			"subclassFeatures": [
				"Artificer|Wizard||Artificer (UA)|UAEberron|2",
				"Infuse Weapons and Armor|Wizard||Artificer (UA)|UAEberron|6",
				"Superior Artificer|Wizard||Artificer (UA)|UAEberron|10",
				"Master Artificer|Wizard||Artificer (UA)|UAEberron|14"
			]
		},
		{
			"name": "Technomancy (UA)",
			"shortName": "Technomancy (UA)",
			"source": "UAModernMagic",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 3,
			"subclassFeatures": [
				"Technomancy|Wizard||Technomancy (UA)|UAModernMagic|2",
				"Program Spell|Wizard||Technomancy (UA)|UAModernMagic|6",
				"Online Casting|Wizard||Technomancy (UA)|UAModernMagic|10",
				"Chained Device|Wizard||Technomancy (UA)|UAModernMagic|14"
			]
		},
		{
			"name": "Lore Mastery (UA)",
			"shortName": "Lore Mastery (UA)",
			"source": "UAWarlockAndWizard",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 5,
			"subclassFeatures": [
				"Lore Mastery|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|2",
				"Alchemical Casting|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|6",
				"Prodigious Memory|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|10",
				"Master of Magic|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|14"
			]
		},
		{
			"name": "Theurgy (UA)",
			"shortName": "Theurgy (UA)",
			"source": "UAWizardRevisited",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 1,
			"subclassFeatures": [
				"Theurgy|Wizard||Theurgy (UA)|UAWizardRevisited|2",
				"Arcane Acolyte|Wizard||Theurgy (UA)|UAWizardRevisited|6",
				"Arcane Priest|Wizard||Theurgy (UA)|UAWizardRevisited|10",
				"Arcane High Priest|Wizard||Theurgy (UA)|UAWizardRevisited|14"
			]
		},
		{
			"name": "War Magic (UA)",
			"shortName": "War (UA)",
			"source": "UAWizardRevisited",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"War Magic|Wizard||War (UA)|UAWizardRevisited|2",
				"Power Surge|Wizard||War (UA)|UAWizardRevisited|6",
				"Durable Magic|Wizard||War (UA)|UAWizardRevisited|10",
				"Durable Magic|Wizard||War (UA)|UAWizardRevisited|14"
			]
		},
		{
			"name": "War Magic",
			"shortName": "War",
			"source": "XGE",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 59,
			"subclassFeatures": [
				"War Magic|Wizard||War|XGE|2",
				"Power Surge|Wizard||War|XGE|6",
				"Durable Magic|Wizard||War|XGE|10",
				"Deflecting Shroud|Wizard||War|XGE|14"
			]
		},
		{
			"name": "School of Invention (UA)",
			"shortName": "Invention (UA)",
			"source": "UAThreeSubclasses",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 2,
			"subclassFeatures": [
				"School of Invention|Wizard||Invention (UA)|UAThreeSubclasses|2",
				"Alchemical Casting|Wizard||Invention (UA)|UAThreeSubclasses|6",
				"Prodigious Inspiration|Wizard||Invention (UA)|UAThreeSubclasses|10",
				"Controlled Chaos|Wizard||Invention (UA)|UAThreeSubclasses|14"
			]
		},
		{
			"name": "Onomancy (UA)",
			"shortName": "Onomancy (UA)",
			"source": "UAClericDruidWizard",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 4,
			"additionalSpells": [
				{
					"prepared": {
						"2": [
							"bane",
							"bless"
						]
					}
				}
			],
			"optionalfeatureProgression": [
				{
					"name": "Onomancy Resonant",
					"featureType": [
						"OR"
					],
					"progression": {
						"6": 2,
						"10": 2
					}
				}
			],
			"subclassFeatures": [
				"Onomancy|Wizard||Onomancy (UA)|UAClericDruidWizard|2",
				"Resonant Utterance|Wizard||Onomancy (UA)|UAClericDruidWizard|6",
				"Inexorable Pronouncement|Wizard||Onomancy (UA)|UAClericDruidWizard|10",
				"Relentless Naming|Wizard||Onomancy (UA)|UAClericDruidWizard|14"
			]
		},
		{
			"name": "Psionics (UA)",
			"shortName": "Psionics (UA)",
			"source": "UAFighterRogueWizard",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 3,
			"additionalSpells": [
				{
					"known": {
						"2": {
							"_": [
								{
									"choose": {
										"from": [
											"friends#c",
											"mage hand#c",
											"message#c"
										]
									}
								}
							]
						},
						"10": {
							"daily": {
								"1e": [
									{
										"choose": {
											"from": [
												"dominate person",
												"scrying",
												"telekinesis"
											]
										}
									}
								]
							}
						}
					}
				}
			],
			"subclassFeatures": [
				"Psionics|Wizard||Psionics (UA)|UAFighterRogueWizard|2",
				"Thought Form|Wizard||Psionics (UA)|UAFighterRogueWizard|6",
				"Mental Discipline|Wizard||Psionics (UA)|UAFighterRogueWizard|10",
				"Empowered Psionics|Wizard||Psionics (UA)|UAFighterRogueWizard|10",
				"Thought Travel|Wizard||Psionics (UA)|UAFighterRogueWizard|14"
			]
		},
		{
			"name": "Chronurgy Magic",
			"shortName": "Chronurgy",
			"source": "EGW",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 184,
			"additionalSpells": [
				{
					"expanded": {
						"1": [
							{
								"all": "source=EGW"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"Chronurgy Magic|Wizard||Chronurgy|EGW|2",
				"Momentary Stasis|Wizard||Chronurgy|EGW|6",
				"Arcane Abeyance|Wizard||Chronurgy|EGW|10",
				"Convergent Future|Wizard||Chronurgy|EGW|14"
			]
		},
		{
			"name": "Graviturgy Magic",
			"shortName": "Graviturgy",
			"source": "EGW",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 185,
			"additionalSpells": [
				{
					"expanded": {
						"1": [
							{
								"all": "source=EGW"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"Graviturgy Magic|Wizard||Graviturgy|EGW|2",
				"Gravity Well|Wizard||Graviturgy|EGW|6",
				"Violent Attraction|Wizard||Graviturgy|EGW|10",
				"Event Horizon|Wizard||Graviturgy|EGW|14"
			]
		},
		{
			"name": "Order of Scribes (UA)",
			"shortName": "Scribes (UA)",
			"source": "UA2020SubclassesRevisited",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"subclassFeatures": [
				"Order of Scribes|Wizard||Scribes (UA)|UA2020SubclassesRevisited|2",
				"Master Scrivener|Wizard||Scribes (UA)|UA2020SubclassesRevisited|6",
				"Manifest Mind|Wizard||Scribes (UA)|UA2020SubclassesRevisited|10",
				"One with the Word|Wizard||Scribes (UA)|UA2020SubclassesRevisited|14"
			]
		},
		{
			"name": "Bladesinging",
			"shortName": "Bladesinging",
			"source": "TCE",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"subclassFeatures": [
				"Bladesinging|Wizard||Bladesinging|TCE|2",
				"Extra Attack|Wizard||Bladesinging|TCE|6",
				"Song of Defense|Wizard||Bladesinging|TCE|10",
				"Song of Victory|Wizard||Bladesinging|TCE|14"
			]
		},
		{
			"name": "Order of Scribes",
			"shortName": "Scribes",
			"source": "TCE",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 77,
			"subclassFeatures": [
				"Order of Scribes|Wizard||Scribes|TCE|2",
				"Manifest Mind|Wizard||Scribes|TCE|6",
				"Master Scrivener|Wizard||Scribes|TCE|10",
				"One with the Word|Wizard||Scribes|TCE|14"
			]
		},
		{
			"name": "Mage of Lorehold (UA)",
			"shortName": "Lorehold (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Wizard",
			"classSource": "PHB",
			"_copy": {
				"name": "Mage of Lorehold (UA)",
				"shortName": "Lorehold (UA)",
				"source": "UA2021MagesOfStrixhaven",
				"className": "Generic",
				"classSource": "Generic",
				"_preserve": {
					"page": true
				}
			}
		},
		{
			"name": "Mage of Prismari (UA)",
			"shortName": "Prismari (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Wizard",
			"classSource": "PHB",
			"_copy": {
				"name": "Mage of Prismari (UA)",
				"shortName": "Prismari (UA)",
				"source": "UA2021MagesOfStrixhaven",
				"className": "Generic",
				"classSource": "Generic",
				"_preserve": {
					"page": true
				}
			}
		},
		{
			"name": "Mage of Quandrix (UA)",
			"shortName": "Quandrix (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Wizard",
			"classSource": "PHB",
			"_copy": {
				"name": "Mage of Quandrix (UA)",
				"shortName": "Quandrix (UA)",
				"source": "UA2021MagesOfStrixhaven",
				"className": "Generic",
				"classSource": "Generic",
				"_preserve": {
					"page": true
				}
			}
		},
		{
			"name": "Mage of Silverquill (UA)",
			"shortName": "Silverquill (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Wizard",
			"classSource": "PHB",
			"_copy": {
				"name": "Mage of Silverquill (UA)",
				"shortName": "Silverquill (UA)",
				"source": "UA2021MagesOfStrixhaven",
				"className": "Generic",
				"classSource": "Generic",
				"_preserve": {
					"page": true
				}
			}
		},
		{
			"name": "Runecrafter (UA)",
			"shortName": "Runecrafter (UA)",
			"source": "UA2022GiantOptions",
			"className": "Wizard",
			"classSource": "PHB",
			"page": 3,
			"subclassFeatures": [
				"Runecrafter|Wizard||Runecrafter (UA)|UA2022GiantOptions|2",
				"Sigils of Warding|Wizard||Runecrafter (UA)|UA2022GiantOptions|6",
				"Rune Maven|Wizard||Runecrafter (UA)|UA2022GiantOptions|10",
				"Engraved Enmity|Wizard||Runecrafter (UA)|UA2022GiantOptions|14"
			]
		}
	],
	"classFeature": [
		{
			"name": "Arcane Recovery",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
				"For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots.",
				"You can recover either a 2nd-level spell slot or two 1st-level spell slots."
			]
		},
		{
			"name": "Cantrip Versatility",
			"source": "UAClassFeatureVariants",
			"page": 12,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level wizard feature (enhances Spellcasting)}",
				"Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the wizard spell list."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter wizard spell list|spells|class=wizard}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table."
					]
				},
				{
					"type": "entries",
					"name": "Spellbook",
					"entries": [
						"At 1st level, you have a spellbook containing six 1st-level {@filter wizard spells|spells|class=wizard} of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind."
					]
				},
				{
					"type": "entries",
					"name": "Preparing and Casting Spells",
					"entries": [
						"The Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell {@spell magic missile}, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Intelligence is your spellcasting ability for your wizard spells, since you learn your wizard spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
						{
							"type": "abilityDc",
							"name": "Spell",
							"attributes": [
								"int"
							]
						},
						{
							"type": "abilityAttackMod",
							"name": "Spell",
							"attributes": [
								"int"
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Ritual Casting",
					"entries": [
						"You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Focus",
					"entries": [
						"You can use an {@item arcane focus|phb} as a spellcasting focus for your wizard spells."
					]
				},
				{
					"type": "entries",
					"name": "Learning Spells of 1st Level and Higher",
					"entries": [
						"Each time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see \"Your Spellbook\")."
					]
				},
				{
					"type": "inset",
					"name": "Your Spellbook",
					"entries": [
						"The spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard's chest, for example, or in a dusty tome in an ancient library.",
						"A spellbook doesn't contain cantrips.",
						{
							"type": "entries",
							"entries": [
								{
									"type": "entries",
									"name": "Copying a Spell into the Book",
									"entries": [
										"When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.",
										"Copying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.",
										"For each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.",
										{
											"type": "entries",
											"name": "Copying from a Spell Scroll",
											"source": "DMG",
											"page": 139,
											"entries": [
												"A wizard spell on a spell scroll can be copied just as spells in spellbooks can be copied. When you copy a spell from a spell scroll, you must succeed on an Intelligence ({@skill Arcana}) check with a DC equal to 10 + the spell's level. If the check succeeds, the spell is successfully copied. Whether the check succeeds or fails, the spell scroll is destroyed."
											]
										}
									]
								}
							]
						},
						{
							"type": "entries",
							"entries": [
								{
									"type": "entries",
									"name": "Replacing the Book",
									"entries": [
										"You can copy a spell from your own spellbook into another book\u2014for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.",
										"If you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place."
									]
								}
							]
						},
						{
							"type": "entries",
							"entries": [
								{
									"type": "entries",
									"name": "The Book's Appearance",
									"entries": [
										"Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Arcane Tradition",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"When you reach 2nd level, you choose an arcane tradition from the list of available traditions, shaping your practice of magic. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
			]
		},
		{
			"name": "Cantrip Formulas",
			"source": "TCE",
			"page": 75,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level wizard {@variantrule optional class features|tce|optional feature}}",
				"You have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Arcane Tradition feature",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature granted by your Arcane Tradition."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Arcane Tradition feature",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you gain a feature granted by your Arcane Tradition."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 12,
			"entries": [
				"When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Arcane Tradition feature",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature granted by your Arcane Tradition."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 16,
			"entries": [
				"When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Spell Mastery",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
				"By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 19,
			"entries": [
				"When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 19,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 19th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Signature Spells",
			"source": "PHB",
			"page": 112,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
				"If you want to cast either spell at a higher level, you must expend a spell slot as normal."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Chronurgy Magic",
			"source": "EGW",
			"page": 184,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Chronurgy",
			"subclassSource": "EGW",
			"level": 2,
			"entries": [
				"Focusing on the manipulation of time, those who follow the Chronurgy tradition learn to alter the pace of reality to their liking. Using the ramping of anticipatory dunamis energy, these mages can bend the flow of time as adroitly as a skilled musician plays an instrument, lending themselves and their allies an advantage in the blink of an eye.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Chronal Shift|Wizard||Chronurgy|EGW|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Temporal Awareness|Wizard||Chronurgy|EGW|2"
				}
			]
		},
		{
			"name": "Chronal Shift",
			"source": "EGW",
			"page": 184,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Chronurgy",
			"subclassSource": "EGW",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Chronurgy Magic feature}",
				"You can magically exert limited control over the flow of time around a creature. As a reaction, after you or a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can force the creature to reroll. You make this decision after you see whether the roll succeeds or fails. The target must use the result of the second roll.",
				"You can use this ability twice, and you regain any expended uses when you finish a long rest."
			]
		},
		{
			"name": "Temporal Awareness",
			"source": "EGW",
			"page": 184,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Chronurgy",
			"subclassSource": "EGW",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Chronurgy Magic feature}",
				"You can add your Intelligence modifier to your initiative rolls."
			]
		},
		{
			"name": "Momentary Stasis",
			"source": "EGW",
			"page": 184,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Chronurgy",
			"subclassSource": "EGW",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Chronurgy Magic feature}",
				"As an action, you can magically force a Large or smaller creature you can see within 60 feet of you to make a Constitution saving throw against your spell save DC. Unless the saving throw is a success, the creature is encased in a field of magical energy until the end of your next turn or until the creature takes any damage. While encased in this way, the creature is {@condition incapacitated} and has a speed of 0.",
				"You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Arcane Abeyance",
			"source": "EGW",
			"page": 184,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Chronurgy",
			"subclassSource": "EGW",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Chronurgy Magic feature}",
				"When you cast a spell using a spell slot of 4th level or lower, you can condense the spell's magic into a mote. The spell is frozen in time at the moment of casting and held within a gray bead for 1 hour. This bead is a Tiny object with AC 15 and 1 hit point, and it is immune to poison and psychic damage. When the duration ends, or if the bead is destroyed, it vanishes in a flash of light, and the spell is lost.",
				"A creature holding the bead can use its action to release the spell within, whereupon the bead disappears. The spell uses your spell attack bonus and save DC, and the spell treats the creature who released it as the caster for all other purposes.",
				"Once you create a bead with this feature, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "Convergent Future",
			"source": "EGW",
			"page": 184,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Chronurgy",
			"subclassSource": "EGW",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Chronurgy Magic feature}",
				"You can peer through possible futures and magically pull one of them into events around you, ensuring a particular outcome. When you or a creature you can see within 60 feet of you makes an attack roll, an ability check, or a saving throw, you can use your reaction to ignore the die roll and decide whether the number rolled is the minimum needed to succeed or one less than that number (your choice).",
				"When you use this feature, you gain one level of {@condition exhaustion}. Only by finishing a long rest can you remove a level of {@condition exhaustion} gained in this way."
			]
		},
		{
			"name": "Graviturgy Magic",
			"source": "EGW",
			"page": 185,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Graviturgy",
			"subclassSource": "EGW",
			"level": 2,
			"entries": [
				"Understanding and mastering the forces that draw bodies of matter together or drive them apart, the students of the Graviturgy arcane tradition learn to further bend and manipulate the violent energy of gravity to their benefit, and the terrible detriment of their enemies.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Adjust Density|Wizard||Graviturgy|EGW|2"
				}
			]
		},
		{
			"name": "Adjust Density",
			"source": "EGW",
			"page": 185,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Graviturgy",
			"subclassSource": "EGW",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Graviturgy Magic feature}",
				"As an action, you can magically alter the weight of one object or creature you can see within 30 feet of you. The object or creature must be Large or smaller. The target's weight is halved or doubled for up to 1 minute or until your {@status concentration} ends (as if you were {@status concentration||concentrating} on a spell).",
				"While the weight of a creature is halved by this effect, the creature's speed increases by 10 feet, it can jump twice as far as normal, and it has disadvantage on Strength checks and Strength saving throws. While the weight of a creature is doubled by this effect, the creature's speed is reduced by 10 feet, and it has advantage on Strength checks and Strength saving throws.",
				"Upon reaching 10th level in this class, you can target an object or a creature that is Huge or smaller."
			]
		},
		{
			"name": "Gravity Well",
			"source": "EGW",
			"page": 185,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Graviturgy",
			"subclassSource": "EGW",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Graviturgy Magic feature}",
				"You've learned how to manipulate gravity around a living being: whenever you cast a spell on a creature, you can move the target 5 feet to an unoccupied space of your choice if the target is willing to move, the spell hits it with an attack, or it fails a saving throw against the spell."
			]
		},
		{
			"name": "Violent Attraction",
			"source": "EGW",
			"page": 185,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Graviturgy",
			"subclassSource": "EGW",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Graviturgy Magic feature}",
				"When another creature that you can see within 60 feet of you hits with a weapon attack, you can use your reaction to increase the attack's velocity, causing the attack's target to take an extra {@damage 1d10} damage of the weapon's type.",
				"Alternatively, if a creature within 60 feet of you takes damage from a fall, you can use your reaction to increase the fall's damage by {@dice 2d10}.",
				"You can use this feature a number of times equal to your Intelligence modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Event Horizon",
			"source": "EGW",
			"page": 185,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Graviturgy",
			"subclassSource": "EGW",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Graviturgy Magic feature}",
				"As an action, you can magically emit a powerful field of gravitational energy that tugs at other creatures for up to 1 minute or until your {@status concentration} ends (as if you were {@status concentration||concentrating} on a spell). For the duration, whenever a creature hostile to you starts its turn within 30 feet of you, it must make a Strength saving throw against your spell save DC. On a failed save, it takes {@damage 2d10} force damage, and its speed is reduced to 0 until the start of its next turn. On a successful save, it takes half as much damage, and every foot it moves this turn costs 2 extra feet of movement.",
				"Once you use this feature, you can't do so again until you finish a long rest or until you expend a spell slot of 3rd level or higher on it."
			]
		},
		{
			"name": "School of Abjuration",
			"source": "PHB",
			"page": 115,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Abjuration",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.",
				"Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Abjuration Savant|Wizard||Abjuration||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Ward|Wizard||Abjuration||2"
				}
			]
		},
		{
			"name": "Abjuration Savant",
			"source": "PHB",
			"page": 115,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Abjuration",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved."
			]
		},
		{
			"name": "Arcane Ward",
			"source": "PHB",
			"page": 115,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Abjuration",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can weave magic around yourself for protection. When you cast an {@filter abjuration spell of 1st level or higher|spells|school=A|level=!0}, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has a hit point maximum equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.",
				"While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an {@filter abjuration spell of 1st level or higher|spells|school=A|level=!0}, the ward regains a number of hit points equal to twice the level of the spell.",
				"Once you create the ward, you can't create it again until you finish a long rest."
			]
		},
		{
			"name": "Projected Ward",
			"source": "PHB",
			"page": 115,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Abjuration",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage."
			]
		},
		{
			"name": "Improved Abjuration",
			"source": "PHB",
			"page": 115,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Abjuration",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in {@spell counterspell} and {@spell dispel magic}), you add your proficiency bonus to that ability check."
			]
		},
		{
			"name": "Spell Resistance",
			"source": "PHB",
			"page": 115,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Abjuration",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you have advantage on saving throws against spells.",
				"Furthermore, you have resistance against the damage of spells."
			]
		},
		{
			"name": "School of Conjuration",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Conjuration",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Conjuration Savant|Wizard||Conjuration||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Minor Conjuration|Wizard||Conjuration||2"
				}
			]
		},
		{
			"name": "Conjuration Savant",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Conjuration",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved."
			]
		},
		{
			"name": "Minor Conjuration",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Conjuration",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.",
				"The object disappears after 1 hour, when you use this feature again, if it takes any damage, or if it deals any damage."
			]
		},
		{
			"name": "Benign Transposition",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Conjuration",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.",
				"Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher."
			]
		},
		{
			"name": "Focused Conjuration",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Conjuration",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, while you are {@status concentration||concentrating} on a conjuration spell, your {@status concentration} can't be broken as a result of taking damage."
			]
		},
		{
			"name": "Durable Summons",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Conjuration",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points."
			]
		},
		{
			"name": "School of Divination",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Divination",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divination Savant|Wizard||Divination||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Portent|Wizard||Divination||2"
				}
			]
		},
		{
			"name": "Divination Savant",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Divination",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved."
			]
		},
		{
			"name": "Portent",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Divination",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two {@dice d20}s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
				"Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls."
			]
		},
		{
			"name": "Expert Divination",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Divination",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a {@filter divination spell of 2nd level or higher|spells|school=D} using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
			]
		},
		{
			"name": "The Third Eye",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Divination",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are {@condition incapacitated} or you take a short or long rest. You can't use the feature again until you finish a rest.",
				{
					"type": "options",
					"entries": [
						{
							"type": "entries",
							"name": "Darkvision",
							"entries": [
								"You gain {@sense darkvision} out to a range of 60 feet."
							]
						},
						{
							"type": "entries",
							"name": "Ethereal Sight",
							"entries": [
								"You can see into the Ethereal Plane within 60 feet of you."
							]
						},
						{
							"type": "entries",
							"name": "Greater Comprehension",
							"entries": [
								"You can read any language."
							]
						},
						{
							"type": "entries",
							"name": "See Invisibility",
							"entries": [
								"You can see {@condition invisible} creatures and objects within 10 feet of you that are within line of sight."
							]
						}
					]
				}
			]
		},
		{
			"name": "Greater Portent",
			"source": "PHB",
			"page": 116,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Divination",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three {@dice d20}s for your Portent feature, rather than two."
			]
		},
		{
			"name": "School of Enchantment",
			"source": "PHB",
			"page": 117,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Enchantment",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Enchantment Savant|Wizard||Enchantment||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hypnotic Gaze|Wizard||Enchantment||2"
				}
			]
		},
		{
			"name": "Enchantment Savant",
			"source": "PHB",
			"page": 117,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Enchantment",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved."
			]
		},
		{
			"name": "Hypnotic Gaze",
			"source": "PHB",
			"page": 117,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Enchantment",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be {@condition charmed} by you until the end of your next turn. The {@condition charmed} creature's speed drops to 0, and the creature is {@condition incapacitated} and visibly dazed.",
				"On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.",
				"Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest."
			]
		},
		{
			"name": "Instinctive Charm",
			"source": "PHB",
			"page": 117,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Enchantment",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest.",
				"You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be {@condition charmed} are immune to this effect."
			]
		},
		{
			"name": "Split Enchantment",
			"source": "PHB",
			"page": 117,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Enchantment",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature."
			]
		},
		{
			"name": "Alter Memories",
			"source": "PHB",
			"page": 117,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Enchantment",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being {@condition charmed}.",
				"Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent {@condition charmed}. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum of 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell."
			]
		},
		{
			"name": "School of Evocation",
			"source": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Evocation",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Evocation Savant|Wizard||Evocation||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Sculpt Spells|Wizard||Evocation||2"
				}
			]
		},
		{
			"name": "Evocation Savant",
			"source": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Evocation",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
			]
		},
		{
			"name": "Sculpt Spells",
			"source": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Evocation",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
			]
		},
		{
			"name": "Potent Cantrip",
			"source": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Evocation",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
			]
		},
		{
			"name": "Empowered Evocation",
			"source": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Evocation",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
			]
		},
		{
			"name": "Overchannel",
			"source": "PHB",
			"page": 117,
			"srd": true,
			"basicRules": true,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Evocation",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th-level that deals damage, you can deal maximum damage with that spell.",
				"The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take {@damage 2d12} necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by {@dice 1d12}. This damage ignores resistance and immunity."
			]
		},
		{
			"name": "School of Illusion",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Illusion",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists\u2014including many gnome wizards\u2014are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Illusion Savant|Wizard||Illusion||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Improved Minor Illusion|Wizard||Illusion||2"
				}
			]
		},
		{
			"name": "Illusion Savant",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Illusion",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved."
			]
		},
		{
			"name": "Improved Minor Illusion",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Illusion",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"When you choose this school at 2nd level, you learn the {@spell minor illusion} cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.",
				"When you cast {@spell minor illusion}, you can create both a sound and an image with a single casting of the spell."
			]
		},
		{
			"name": "Malleable Illusions",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Illusion",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion."
			]
		},
		{
			"name": "Illusory Self",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Illusion",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Illusory Reality",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Illusion",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semireality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.",
				"The object can't deal damage or otherwise directly harm anyone."
			]
		},
		{
			"name": "School of Necromancy",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Necromancy",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.",
				"Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Necromancy Savant|Wizard||Necromancy||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Grim Harvest|Wizard||Necromancy||2"
				}
			]
		},
		{
			"name": "Grim Harvest",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Necromancy",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the {@filter School of Necromancy|spells|school=N}. You don't gain this benefit for killing constructs or undead."
			]
		},
		{
			"name": "Necromancy Savant",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Necromancy",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved."
			]
		},
		{
			"name": "Undead Thralls",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Necromancy",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you add the {@spell animate dead} spell to your spellbook if it is not there already. When you cast {@spell animate dead}, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.",
				"Whenever you create an undead using a necromancy spell, it has additional benefits:",
				{
					"type": "list",
					"items": [
						"The creature's hit point maximum is increased by an amount equal to your wizard level.",
						"The creature adds your proficiency bonus to its weapon damage rolls."
					]
				}
			]
		},
		{
			"name": "Inured to Undeath",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Necromancy",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects."
			]
		},
		{
			"name": "Command Undead",
			"source": "PHB",
			"page": 118,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Necromancy",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.",
				"Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free."
			]
		},
		{
			"name": "School of Transmutation",
			"source": "PHB",
			"page": 119,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Transmutation",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.",
				"Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Transmutation Savant|Wizard||Transmutation||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Minor Alchemy|Wizard||Transmutation||2"
				}
			]
		},
		{
			"name": "Minor Alchemy",
			"source": "PHB",
			"page": 119,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Transmutation",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell), the material reverts to its original substance."
			]
		},
		{
			"name": "Transmutation Savant",
			"source": "PHB",
			"page": 119,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Transmutation",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved."
			]
		},
		{
			"name": "Transmuter's Stone",
			"source": "PHB",
			"page": 119,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Transmutation",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:",
				{
					"type": "list",
					"items": [
						"Darkvision out to a range of 60 feet, as described in chapter 8.",
						"An increase to speed of 10 feet while the creature is unencumbered.",
						"Proficiency in Constitution saving throws.",
						"Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)."
					]
				},
				"Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.",
				"If you create a new transmuter's stone, the previous one ceases to function."
			]
		},
		{
			"name": "Shapechanger",
			"source": "PHB",
			"page": 119,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Transmutation",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you add the {@spell polymorph} spell to your spellbook, if it is not there already. You can cast {@spell polymorph} without expending a spell slot. When you do so, you can target only yourself and transform into a {@filter beast whose challenge rating is 1 or lower|bestiary|challenge rating=[&0;&1]|type=beast|miscellaneous=!swarm}.",
				"Once you cast {@spell polymorph} in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot."
			]
		},
		{
			"name": "Master Transmuter",
			"source": "PHB",
			"page": 119,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Transmutation",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.",
				{
					"type": "options",
					"entries": [
						{
							"type": "entries",
							"name": "Major Transformation",
							"entries": [
								"You can transmute one nonmagical object\u2014no larger than a 5-foot cube\u2014into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it."
							]
						},
						{
							"type": "entries",
							"name": "Panacea",
							"entries": [
								"You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points."
							]
						},
						{
							"type": "entries",
							"name": "Restore Life",
							"entries": [
								"You cast the {@spell raise dead} spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook."
							]
						},
						{
							"type": "entries",
							"name": "Restore Youth",
							"entries": [
								"You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by {@dice 3d10} years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan."
							]
						}
					]
				}
			]
		},
		{
			"name": "Bladesinging",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 2,
			"entries": [
				"Bladesingers master a tradition of wizardry that incorporates swordplay and dance. Originally created by elves, this tradition has been adopted by non-elf practitioners, who honor and expand on the elven ways.",
				"In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense. Many who have observed a bladesinger at work remember the display as one of the more beautiful experiences in their life, a glorious dance accompanied by a singing blade.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Training in War and Song (Bladesinging)|Wizard||Bladesinging|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bladesong|Wizard||Bladesinging|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bladesinger Styles|Wizard||Bladesinging|TCE|2"
				}
			]
		},
		{
			"name": "Bladesinger Styles",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"type": "inset",
			"entries": [
				"From its inception as a martial and magical art, Bladesinging has been tied to the sword, more specifically the longsword. Yet many generations of study gave rise to various styles of Bladesinging based on the melee weapon employed. The techniques of these styles are passed from master to students in small schools, some of which have a building dedicated to instruction. Even the newest styles are hundreds of years old, but are still taught by their original creators due to the long lives of elves. Most schools of Bladesinging are in Evermeet or Evereska. One was started in Myth Drannor, but the city's destruction has scattered those students who survived.",
				"Styles of Bladesinging are broadly categorized based on the type of weapon employed, and each is associated with a category of animal. Within that style are specializations named after specific animal types, based on the types of spells employed, the techniques of the master, and the particular weapon used. Bladesingers who apprentice to a master typically get a tattoo of their chosen style's animal. Some bladesingers learn multiple styles and bear many tattoos, wearing a warning on their skin of their deadly skills.",
				{
					"type": "entries",
					"name": "Cat",
					"entries": [
						"Styles that employ a sword belong to this family. The lion style, the eldest, trains practitioners in the use of the longsword and doesn't favor any particular type of spells. Leopard style focuses on the shortsword and spells of illusion and stealth. Red tiger, a style just three centuries old, has its bladesingers using the scimitar in a whirling dance of defense from which they launch into sudden leaps and attacks."
					]
				},
				{
					"type": "entries",
					"name": "Bird",
					"entries": [
						"Styles that focus on the use of a hafted weapon, such as an axe or hammer, have been grouped together as bird styles, yet they vary wildly. All relatively new styles, they use weapons not typically favored by elves. Eagle-style bladesingers use small handaxes, and many maneuvers in the style focus on fluid ways to throw the weapon and draw a new one. Raven style uses a war pick, and spells associated with it grant the bladesinger more agility in combat."
					]
				},
				{
					"type": "entries",
					"name": "Snake",
					"entries": [
						"Practitioners of these styles use a flail, chain, or whip. Viper style uses a whip, despite its inelegance as a weapon, and has almost as long a history as the lion style. Its masters punctuate their bladesong with a stunningly rapid rhythm of whip cracks, which can keep many foes at bay and allow the bladesinger space to cast the cruel spells of poison and disease favored by the style."
					]
				}
			]
		},
		{
			"name": "Bladesong",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can invoke a secret elven magic called the Bladesong, provided you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.",
				"You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are {@condition incapacitated}, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss Bladesong at any time you choose (no action required).",
				"While your bladesong is active, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1).",
						"Your walking speed increases by 10 feet.",
						"You have advantage on Dexterity ({@skill Acrobatics}) checks.",
						"You gain a bonus to any Constitution saving throws you make to maintain {@status concentration} on a spell. The bonus equals your Intelligence modifier (minimum of +1)."
					]
				},
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Training in War and Song (Bladesinging)",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice.",
				"You also gain proficiency in the {@skill Performance} skill if you don't already have it."
			]
		},
		{
			"name": "Extra Attack",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn. Moreover, you can cast one of your cantrips in place of one of those attacks."
			]
		},
		{
			"name": "Song of Defense",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you can direct your magic to absorb damage while your bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell's slot level."
			]
		},
		{
			"name": "Song of Victory",
			"source": "TCE",
			"page": 76,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 141
				}
			],
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Bladesinging",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active."
			]
		},
		{
			"name": "Order of Scribes",
			"source": "TCE",
			"page": 77,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes",
			"subclassSource": "TCE",
			"level": 2,
			"entries": [
				"Magic of the book-that's what many folk call wizardry. The name is apt, given how much time wizards spend poring over tomes and penning theories about the nature of magic. It's rare to see wizards traveling without books and scrolls sprouting from their bags, and a wizard would go to great lengths to plumb an archive of ancient knowledge.",
				"Among wizards, the Order of Scribes is the most bookish. It takes many forms in different worlds, but its primary mission is the same everywhere: recording magical discoveries so that wizardry can flourish. And while all wizards value spellbooks, a wizard in the Order of Scribes magically awakens their book, turning it into a trusted companion. All wizards study books, but a wizardly scribe talks to theirs!",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wizardly Quill|Wizard||Scribes|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Awakened Spellbook|Wizard||Scribes|TCE|2"
				}
			]
		},
		{
			"name": "Awakened Spellbook",
			"source": "TCE",
			"page": 77,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Order of Scribes feature}",
				"Using specially prepared inks and ancient incantations passed down by your wizardly order, you have awakened an arcane sentience within your spellbook.",
				"While you are holding the book, it grants you the following benefits:",
				{
					"type": "list",
					"items": [
						"You can use the book as a spellcasting focus for your wizard spells.",
						"When you cast a wizard spell with a spell slot, you can temporarily replace its damage type with a type that appears in another spell in your spellbook, which magically alters the spell's formula for this casting only. The latter spell must be of the same level as the spell slot you expend.",
						"When you cast a wizard spell as a ritual, you can use the spell's normal casting time, rather than adding 10 minutes to it. Once you use this benefit, you can't do so again until you finish a long rest."
					]
				},
				"If necessary, you can replace the book over the course of a short rest by using your Wizardly Quill to write arcane sigils in a blank book or a magic spellbook to which you're attuned. At the end of the rest, your spellbook's consciousness is summoned into the new book, which the consciousness transforms into your spellbook, along with all its spells. If the previous book still existed somewhere, all the spells vanish from its pages."
			]
		},
		{
			"name": "Wizardly Quill",
			"source": "TCE",
			"page": 77,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Order of Scribes feature}",
				"As a bonus action, you can magically create a Tiny quill in your free hand. The magic quill has the following properties:",
				{
					"type": "list",
					"items": [
						"The quill doesn't require ink. When you write with it, it produces ink in a color of your choice on the writing surface.",
						"The time you must spend to copy a spell into your spellbook equals 2 minutes per spell level if you use the quill for the transcription.",
						"You can erase anything you write with the quill if you wave the feather over the text as a bonus action, provided the text is within 5 feet of you."
					]
				},
				"This quill disappears if you create another one or if you die."
			]
		},
		{
			"name": "Manifest Mind",
			"source": "TCE",
			"page": 78,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Order of Scribes feature}",
				"You can conjure forth the mind of your Awakened Spellbook. As a bonus action while the book is on your person, you can cause the mind to manifest as a Tiny spectral object, hovering in an unoccupied space of your choice within 60 feet of you. The spectral mind is intangible and doesn't occupy its space, and it sheds dim light in a 10-foot radius. It looks like a ghostly tome, a cascade of text, or a scholar from the past (your choice).",
				"While manifested, the spectral mind can hear and see, and it has {@sense darkvision} with a range of 60 feet. The mind can telepathically share with you what it sees and hears (no action required).",
				"Whenever you cast a wizard spell on your turn, you can cast it as if you were in the spectral mind's space, instead of your own, using its senses. You can do so a number of times per day equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"As a bonus action, you can cause the spectral mind to hover up to 30 feet to an unoccupied space that you or it can see. It can pass through creatures but not objects.",
				"The spectral mind stops manifesting if it is ever more than 300 feet away from you, if someone casts {@spell dispel magic} on it, if the Awakened Spellbook is destroyed, if you die, or if you dismiss the spectral mind as a bonus action.",
				"Once you conjure the mind, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to conjure it again."
			]
		},
		{
			"name": "Master Scrivener",
			"source": "TCE",
			"page": 78,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Order of Scribes feature}",
				"Whenever you finish a long rest, you can create one magic scroll by touching your Wizardly Quill to a blank piece of paper or parchment and causing one spell from your Awakened Spellbook to be copied onto the scroll. The spellbook must be within 5 feet of you when you make the scroll.",
				"The chosen spell must be of 1st or 2nd level and must have a casting time of 1 action. Once in the scroll, the spell's power is enhanced, counting as one level higher than normal. You can cast the spell from the scroll by reading it as an action. The scroll is unintelligible to anyone else, and the spell vanishes from the scroll when you cast it or when you finish your next long rest.",
				"You are also adept at crafting spell scrolls, which are described in the treasure chapter of the Dungeon Master's Guide. The gold and time you must spend to make such a scroll are halved if you use your Wizardly Quill."
			]
		},
		{
			"name": "One with the Word",
			"source": "TCE",
			"page": 78,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Order of Scribes feature}",
				"Your connection to your Awakened Spellbook has become so profound that your soul has become entwined with it. While the book is on your person, you have advantage on all Intelligence ({@skill Arcana}) checks, as the spellbook helps you remember magical lore.",
				"Moreover, if you take damage while your spellbook's mind is manifested, you can prevent all of that damage to you by using your reaction to dismiss the spectral mind, using its magic to save yourself. Then roll {@dice 3d6}. The spellbook temporarily loses spells of your choice that have a combined spell level equal to that roll or higher. For example, if the roll's total is 9, spells vanish from the book that have a combined level of at least 9, which could mean one 9th-level spell, three 3rd-level spells, or some other combination. If there aren't enough spells in the book to cover this cost, you drop to 0 hit points.",
				"Until you finish {@dice 1d6} long rests, you are incapable of casting the lost spells, even if you find them on a scroll or in another spellbook. After you finish the required number of rests, the spells reappear in the spellbook.",
				"Once you use this reaction, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Order of Scribes",
			"source": "UA2020SubclassesRevisited",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 2,
			"entries": [
				"Magic of the book\u2014that's what many spellcasters call wizardry. The name is apt, given how much time wizards spend poring over their spellbooks, penning theories about the nature of magic, and exploring the farthest recesses of libraries. It's rare to see a wizard traveling without books and scrolls sprouting from their bags, and a wizard would go to great lengths to plumb an archive of ancient knowledge.",
				"Among wizards, the Order of Scribes is the most bookish. It takes many forms in different worlds, but its primary mission is the same everywhere: recording magical discoveries in tomes and scrolls so that wizardry can flourish. And while every wizard values their spellbook, a scribe in the Order of Scribes dedicates themself to magically awakening their book, turning it into a trusted companion. All wizards study their spellbooks, but a wizardly scribe talks to theirs!",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wizardly Quill|Wizard||Scribes (UA)|UA2020SubclassesRevisited|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Awakened Spellbook|Wizard||Scribes (UA)|UA2020SubclassesRevisited|2"
				}
			]
		},
		{
			"name": "Awakened Spellbook",
			"source": "UA2020SubclassesRevisited",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Order of Scribes feature}",
				"Using specially prepared inks and ancient incantations passed down by your wizardly order, you have awakened an arcane sentience within your spellbook.",
				"While you are holding the book, it grants you the following benefits:",
				{
					"type": "list",
					"items": [
						"You can use the book as a spellcasting focus for your wizard spells.",
						"When you cast a wizard spell with a spell slot, you can temporarily replace its damage type with the damage type of another spell in your spellbook, as your spellbook magically alters the spell's formula for this casting.",
						"When you cast a wizard spell as a ritual, you can use the spell's normal casting time, rather than adding 10 minutes to it. Once you use this benefit, you can't do so again until you finish a long rest."
					]
				},
				"If necessary, you can replace the book over the course of a short rest by using your Wizardly Quill to write arcane sigils in a blank book or a magic spellbook to which you're attuned. At the end of the rest, your spellbook's consciousness is summoned into the new book, which the consciousness transforms into your spellbook, along with all its spells. If the previous book still existed somewhere, all the spells vanish from its pages."
			]
		},
		{
			"name": "Wizardly Quill",
			"source": "UA2020SubclassesRevisited",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Order of Scribes feature}",
				"As a bonus action, you can magically create a Tiny quill in your free hand. The magic quill has the following properties:",
				{
					"type": "list",
					"items": [
						"The quill doesn't require ink. When you write with it, it produces ink in a color of your choice on the writing surface.",
						"The gold and time you must spend to copy a spell into your spellbook are halved if you use the quill for the transcription.",
						"You can erase anything you write with the quill if you wave the feather over the text as a bonus action, provided the text is within 5 feet of you."
					]
				},
				"This quill disappears if you create another one or if you die."
			]
		},
		{
			"name": "Master Scrivener",
			"source": "UA2020SubclassesRevisited",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Order of Scribes feature}",
				"Whenever you finish a long rest, you can create one magic scroll by touching your Wizardly Quill to a blank piece of paper or parchment and causing one spell from your Awakened Spellbook to be copied onto the scroll. The spellbook must be within 5 feet of you when you make the scroll.",
				"The chosen spell must be of 1st or 2nd level and must have a casting time of 1 action. Once in the scroll, the spell's power is enhanced, counting as one level higher than normal. You can cast the spell from the scroll by reading it as an action. The scroll is unintelligible to anyone else, and the spell vanishes from the scroll when you cast it or when you finish your next long rest.",
				"You are also adept at crafting spell scrolls, which are described in chapter 7 of the Dungeon Master's Guide. The gold and time you must spend to make such a scroll are halved if you use your Wizardly Quill."
			]
		},
		{
			"name": "Manifest Mind",
			"source": "UA2020SubclassesRevisited",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Order of Scribes feature}",
				"You are now able to conjure forth the mind of your Awakened Spellbook. As a bonus action while the book is on your person, you can cause the mind to manifest as a Tiny spectral construct, hovering in an unoccupied space of your choice within 60 feet of you. This presence is intangible and doesn't occupy its space, and it sheds dim light in a 10-foot radius. It looks like a ghostly tome, a cascade of text, or a scholar from the past (your choice). The spectral mind has a number of hit points equal to your wizard level plus your Intelligence modifier, and it uses your Armor Class and saving throw modifiers.",
				"While manifested, the spectral mind can hear and see, and it has {@sense darkvision} with a range of 60 feet. As an action, you can hear and see using the its senses, instead of your own, until your {@status concentration} ends (as if {@status concentration||concentrating} on a spell).",
				"Whenever you cast a wizard spell on your turn, you can cast it as if you were in the spectral mind's space, instead of your own, using its senses. You can do so a number of times per day equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"As a bonus action, you can cause the spectral mind to hover up to 30 feet to an unoccupied space that you or it can see. It can pass through creatures but not objects. The spectral mind stops manifesting if it is ever more than 300 feet away from you, if it drops to 0 hit points, if you die, or if you dismiss it as a bonus action."
			]
		},
		{
			"name": "One with the Word",
			"source": "UA2020SubclassesRevisited",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Scribes (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Order of Scribes feature}",
				"Your connection to your Awakened Spellbook has become so profound that your soul has become entwined with it. While you are holding the book and its spectral mind is manifest, you can take an action to cause the two of you to teleport, swapping places. You can teleport in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"Moreover, if you die but at least one spell remains in your Awakened Spellbook, you can return to life 1 minute later within 5 feet of the book. You revive with 1 hit point. Then roll {@dice 3d6}. The book loses spells of your choice that have a combined spell level equal to that roll or higher. For example, if the roll's total is 9, spells vanish from the book that have a combined level of at least 9, which could mean one 9th-level spell, three 3rd-level spells, or some other combination.",
				"Thereafter, you are incapable of casting the lost spells, even if you find them on a scroll or in another spellbook. The only way to restore your ability to cast one of the lost spells is through the {@spell wish} spell, which can restore one spell to the book per casting."
			]
		},
		{
			"name": "Runecrafter",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Runecrafter (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 2,
			"entries": [
				"Runecrafter wizards enhance their spellcasting through the ancient power of runes. Though the tradition originated with the giant rune casters of old, runecraft magic has expanded to encompass countless languages and practitioners across different worlds.",
				"For many runecrafters, the runes they wield are as every bit unique and personal as their spellbook. Some strive to honor the practice's origins among the giants, engraving their runes on decorative stones that adorn their spellcasting implements, while others messily scribble their runes on scraps of paper.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Runes of Understanding|Wizard||Runecrafter (UA)|UA2022GiantOptions|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Runic Empowerment|Wizard||Runecrafter (UA)|UA2022GiantOptions|2"
				}
			]
		},
		{
			"name": "Runes of Understanding",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Runecrafter (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-Level Runecrafter Feature}",
				"Your study of runecraft has unlocked the ability to decode runes and languages, regardless of their origin; you always have comprehend languages prepared, you can cast it without expending a spell slot, and the spell doesn't count against the number of spells you have prepared."
			]
		},
		{
			"name": "Runic Empowerment",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Runecrafter (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-Level Runecrafter Feature}",
				"When you choose this subclass, you learn how to amplify your magic through the application of various runes. Your knowledge of these runes is stored in your spellbook, though you determine the runes' cosmetic appearance. For example, your runes could be engraved into the cover of your spellbook, glowing whenever you cast a spell, or you could work the shape and meaning of the runes directly into a spell's somatic and verbal components. When you cast a spell using a spell slot, you can invoke one of the following runes:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Life Rune",
							"entries": [
								"When you invoke this rune, choose one creature you can see within 30 feet of you (you can choose yourself). The chosen creature gains temporary hit points equal to 5 times the level of the spell slot expended."
							]
						},
						{
							"type": "item",
							"name": "War Rune",
							"entries": [
								"When you invoke this rune, choose one creature you can see within 30 feet of you. Until the end of your next turn, attack rolls that target the chosen creature gain a bonus equal to half the level of the spell slot expended (rounded up, minimum of +1)."
							]
						},
						{
							"type": "item",
							"name": "Wind Rune",
							"entries": [
								"When you invoke this rune, your speed increases by a number of feet equal to 5 times the level of the spell slot expended, and your movement doesn't provoke opportunity attacks. These benefits last until the start of your next turn."
							]
						}
					]
				},
				"You can invoke no more than one rune per spell. You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Sigils of Warding",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Runecrafter (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-Level Runecrafter Feature}",
				"You can call on a rune of protection to guard yourself against threats. When you fail a Strength, Dexterity, or Constitution saving throw, you can use your reaction to expend one use of your Runic Empowerment and succeed on the saving throw instead."
			]
		},
		{
			"name": "Rune Maven",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Runecrafter (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-Level Runecrafter Feature}",
				"Your understanding of runecraft has grown immensely. Whenever you use your Arcane Recovery feature, you also regain a number of your expended uses of Runic Empowerment. The number of uses you regain can be no more than half your Intelligence modifier, rounded up (minimum of 1)."
			]
		},
		{
			"name": "Engraved Enmity",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Runecrafter (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-Level Runecrafter Feature}",
				"You have mastered the art of wielding your runes directly against your foes. As a bonus action, you can target one creature you can see within 60 feet of yourself. The creature must succeed on a Wisdom saving throw against your spell save DC or be magically marked by an enmity rune.",
				"The enmity rune appears as a faintly glowing mote of energy that hovers over the marked creature, which suffers the following effects:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Runecraft's Bane",
							"entries": [
								"The creature has disadvantage on saving throws made against spells you cast."
							]
						},
						{
							"type": "item",
							"name": "Unveiled Enemy",
							"entries": [
								"The radiance of the glowing rune makes the creature visible if it's {@condition invisible}, and the creature can't become {@condition invisible} while the rune persists."
							]
						},
						{
							"type": "item",
							"name": "Woeful Curse",
							"entries": [
								"When you mark the creature, and as a bonus action on subsequent turns for the duration, you can invoke the enmity rune to curse the creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack roll, the target also takes {@damage 1d8} force damage, and the curse ends."
							]
						}
					]
				},
				"The enmity rune lasts for 1 minute or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). Once you have marked a creature in this way, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again."
			]
		},
		{
			"name": "Onomancy",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"entries": [
				"Practitioners of magic well know the power of names, but wizards who follow the tradition of Onomancy use their magic to manipulate the words that encompass existence. Onomancers expand their study into language itself, searching for threads of magical significance that weave through names. Something that is named stands out in the multiverse, distinct from the tapestry of creation all around it.",
				"That distinction creates power that onomancers seek to tap. By speaking a target's true name, the wizard's spells slip between the cracks of the target's defenses, conforming to its essential nature through the power of its name. To protect themselves, wizards who follow this tradition often hide their true names, typically by adopting monikers and pseudonyms.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "True Names|Wizard||Onomancy (UA)|UAClericDruidWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Wizard||Onomancy (UA)|UAClericDruidWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Extract Name|Wizard||Onomancy (UA)|UAClericDruidWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fateful Naming|Wizard||Onomancy (UA)|UAClericDruidWizard|2"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Onomancy feature}",
				"You learn one language of your choice and gain proficiency with {@item calligrapher's supplies|phb}."
			]
		},
		{
			"name": "Extract Name",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Onomancy feature}",
				"You can magically compel a creature to divulge its true name. As a bonus action, you target one creature you can see within 60 feet of you. The target must make a Wisdom saving throw against your spell save DC. On a successful save, you discern that this magic failed, and you can't use this feature on the target again. On a failed save, the target is {@condition charmed} by you until the end of your next turn, and you mentally learn the {@condition charmed} target's name or the fact that the target lacks a name.",
				"You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Fateful Naming",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Onomancy feature}",
				"You can bend magic to assist or hinder creatures through the power of their true names, and even use those names as an anchor to affect others around them. The {@spell bane} and {@spell bless} spells are wizard spells for you, and you add them to your spellbook. You always have them prepared, yet they don't count against the number of spells you can prepare.",
				"You can cast either spell without expending a spell slot if you speak the true name of one target of the spell as part of casting it. You can cast the spells in this way a number of times equal to your Intelligence modifier (a minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "True Names",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 1,
			"type": "inset",
			"entries": [
				"Onomancy, or naming magic, is a method of spellcasting that uses a creature's true name to enhance a spell's effects. A true name is the name by which a self-aware creature identifies itself. This name might be the name a person was given at birth, or one a person chose or earned later in life. Whatever a name's origin, the simplest way for you to know your true name is to think truthfully about yourself and then think, \"My name is...\" Your true name is how you finish that sentence.",
				"You can try to hide your true name by using a pseudonym, but you must be wary not to inhabit that false name too deeply. If a false name comes to be the best expression of who you are, it becomes your true name. Changing one's true name is never a quick choice; it's something that happens over time as a name becomes the creature's truth.",
				"As a quick guide, a creature has a true name if it understands at least one language or it has an alignment."
			]
		},
		{
			"name": "Resonant Options",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"Here are your options when choosing a Resonant:",
				{
					"type": "options",
					"style": "list-hang-notitle",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Absorption|UAClericDruidWizard"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Devastation|UAClericDruidWizard"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Dissolution|UAClericDruidWizard"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Nullification|UAClericDruidWizard"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Puppetry|UAClericDruidWizard"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Sympathy|UAClericDruidWizard"
						}
					]
				}
			]
		},
		{
			"name": "Resonant Utterance",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Onomancy feature}",
				"You learn words of power called Resonants, which allow you to tailor your spells through the use of a target's true name.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Resonants Known|Wizard||Onomancy (UA)|UAClericDruidWizard|6"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Using a Resonant|Wizard||Onomancy (UA)|UAClericDruidWizard|6"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Resonant Options|Wizard||Onomancy (UA)|UAClericDruidWizard|6"
				}
			]
		},
		{
			"name": "Resonants Known",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"When you gain this feature, you learn two Resonants of your choice, which are detailed in the \"Resonant Options\" section. Each time you gain a level in this class, you can replace one resonant you know with a different one."
			]
		},
		{
			"name": "Using a Resonant",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"You can use one Resonant when you cast a wizard spell with a spell slot and speak the true name of one creature targeted by the spell. Speaking the name is part of casting the spell. You can use Resonants a number of times equal to half of your wizard level (round down), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Inexorable Pronouncement",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Onomancy feature}",
				"You learn two new Resonant s of your choice from your Resonant Utterance feature."
			]
		},
		{
			"name": "Relentless Naming",
			"source": "UAClericDruidWizard",
			"page": 4,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Onomancy (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Onomancy feature}",
				"You have learned how to bypass a named creature's defenses against certain types of damage. When you cast a spell that deals damage to a creature whose true name you speak as part of casting the spell, you can cause the spell to deal force or psychic damage to the creature, instead of the spell's normal damage type."
			]
		},
		{
			"name": "Artificer",
			"source": "UAEberron",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Artificer (UA)",
			"subclassSource": "UAEberron",
			"level": 2,
			"entries": [
				"Artificers are a key part of the world of Eberron. They illustrate the evolution of magic from a wild, unpredictable force to one that is becoming available to the masses. Magic items are part of everyday life in the Five Nations of Khorvaire; with an artificer in your party, they become part of every adventuring expedition.",
				"The artificer was a separate class in prior editions of the Eberron setting, a melee combatant who specialized in mystically enhanced arms and armor. The fifth edition rules treat the artificer as a new wizard tradition that focuses on mystical invention, which you can choose starting at 2nd level.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Infuse Potions|Wizard||Artificer (UA)|UAEberron|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Infuse Scrolls|Wizard||Artificer (UA)|UAEberron|2"
				}
			]
		},
		{
			"name": "Infuse Potions",
			"source": "UAEberron",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Artificer (UA)",
			"subclassSource": "UAEberron",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can produce magic potions. You spend 10 minutes focusing your magic on a vial of mundane water and expend a spell slot to transform it into a potion. Once you have expended a spell slot to create a potion, you cannot regain that slot until the potion is consumed or after 1 week, at which time the potion loses its effectiveness. You can create up to three potions at a time; creating a fourth potion causes the oldest currently active one to immediately lose its potency. If that potion has been consumed, its effects immediately end.",
				"The spell slot you expend determines the type of potion you can create.",
				{
					"type": "table",
					"caption": "Infuse Potions",
					"colLabels": [
						"Spell Slot",
						"Potion Created"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"Climbing, growth, or healing"
						],
						[
							"2nd",
							"Mind reading or greater healing"
						],
						[
							"3rd",
							"Invisibility, superior healing, or water breathing"
						],
						[
							"4th",
							"Resistance"
						]
					]
				}
			]
		},
		{
			"name": "Infuse Scrolls",
			"source": "UAEberron",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Artificer (UA)",
			"subclassSource": "UAEberron",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you can also tap into your reserves of magical energy to create spell scrolls. You can use your Arcane Recovery ability to create a scroll instead of regaining expended spell slots.",
				"You must finish a short rest, then spend 10 minutes with parchment, quill, and ink to create a spell scroll containing one spell chosen from those you know. Subtract the spell's level from the total levels worth of slots you regain using Arcane Recovery. This reduction to your Arcane Recovery applies until you use the scroll and then finish a long rest."
			]
		},
		{
			"name": "Infuse Weapons and Armor",
			"source": "UAEberron",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Artificer (UA)",
			"subclassSource": "UAEberron",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, you can produce magic weapons and armor. You spend 10 minutes focusing your magic on a mundane weapon, suit of armor, shield, or bundle of twenty pieces of ammunition, and expend a spell slot to infuse it with magical energy. The magic item retains its enhancement for 8 hours or until used (in the case of magic ammunition). You can infuse only one item at a time; if you infuse a second one, the first immediately loses its potency. Once you have expended a spell slot to create such an item, you cannot regain that slot until the item becomes nonmagical.",
				"The spell slot you expend determines the type of weapon, armor, or shield you can create.",
				{
					"type": "table",
					"caption": "Infuse Weapons and Armor",
					"colLabels": [
						"Spell Level",
						"Item Created"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"2nd",
							"+1 ammunition (20 pieces)"
						],
						[
							"3rd",
							"+1 weapon or +1 shield"
						],
						[
							"4th",
							"+1 armor"
						],
						[
							"5th",
							"+2 weapon or +2 ammunition (20 pieces)"
						],
						[
							"6th",
							"+2 armor"
						]
					]
				}
			]
		},
		{
			"name": "Superior Artificer",
			"source": "UAEberron",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Artificer (UA)",
			"subclassSource": "UAEberron",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you can create a second magic weapon, suit of armor, shield, or bundle of ammunition using your Infuse Weapons and Armor ability. Attempting to infuse a third item causes the oldest one to immediately lose its potency.",
				"You can also create one additional potion or scroll using Infuse Potions or Infuse Scrolls."
			]
		},
		{
			"name": "Master Artificer",
			"source": "UAEberron",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Artificer (UA)",
			"subclassSource": "UAEberron",
			"level": 14,
			"header": 2,
			"entries": [
				"On reaching 14th level, your mastery of arcane magic allows you to produce a variety of magic items. You can create a single item chosen from Magic Item Tables A and B in chapter 7 of the Dungeon Master's Guide (shown below). It takes you 1 week to produce such an item, and you must rest for 1 month before using this ability to craft another item.",
				{
					"type": "table",
					"caption": "Magic Item Table A",
					"colLabels": [
						"d100",
						"Magic Item"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"01-50",
							"Potion of healing"
						],
						[
							"51-60",
							"Spell scroll (cantrip)"
						],
						[
							"61-70",
							"Potion of climbing"
						],
						[
							"71-90",
							"Spell scroll (1st level)"
						],
						[
							"91-94",
							"Spell scroll (2nd level)"
						],
						[
							"95-98",
							"Potion of greater healing"
						],
						[
							"99",
							"Bag of holding"
						],
						[
							"00",
							"Driftglobe"
						]
					]
				},
				{
					"type": "table",
					"caption": "Magic Item Table B",
					"colLabels": [
						"d100",
						"Magic Item"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"01-15",
							"Potion of greater healing"
						],
						[
							"16-22",
							"Potion of fire breath"
						],
						[
							"23-29",
							"Potion of resistance"
						],
						[
							"30-34",
							"Ammunition +1"
						],
						[
							"35-39",
							"Potion of animal friendship"
						],
						[
							"40-44",
							"Potion of hill giant strength"
						],
						[
							"45-49",
							"Potion of growth"
						],
						[
							"50-54",
							"Potion of water breathing"
						],
						[
							"55-59",
							"Spell scroll (2nd level)"
						],
						[
							"60-64",
							"Spell scroll (3rd level)"
						],
						[
							"65-67",
							"Bag of holding"
						],
						[
							"68-70",
							"Keoghtom's ointment"
						],
						[
							"71-73",
							"Oil of slipperiness"
						],
						[
							"74-75",
							"Dust of disappearance"
						],
						[
							"76-77",
							"Dust of dryness"
						],
						[
							"78-79",
							"Dust of sneezing and choking"
						],
						[
							"80-81",
							"Elemental gem"
						],
						[
							"82-83",
							"Philter of love"
						],
						[
							"84",
							"Alchemy jug"
						],
						[
							"85",
							"Cap of water breathing"
						],
						[
							"86",
							"Cloak of the manta ray"
						],
						[
							"87",
							"Driftglobe"
						],
						[
							"88",
							"Goggles of night"
						],
						[
							"89",
							"Helm of comprehending languages"
						],
						[
							"90",
							"Immovable rod"
						],
						[
							"91",
							"Lantern of revealing"
						],
						[
							"92",
							"Mariner's armor"
						],
						[
							"93",
							"Mithral armor"
						],
						[
							"94",
							"Potion of poison"
						],
						[
							"95",
							"Ring of swimming"
						],
						[
							"96",
							"Robe of useful items"
						],
						[
							"97",
							"Rope of climbing"
						],
						[
							"98",
							"Saddle of the cavalier"
						],
						[
							"99",
							"Wand of magic detection"
						],
						[
							"00",
							"Wand of secret"
						]
					]
				}
			]
		},
		{
			"name": "Psionics",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 2,
			"entries": [
				"Wizards study magical power in all its forms, including the magic of psionics. Those wizards who follow the tradition of Psionics hone the magical potential of their own minds. Sometimes called psionicists or mentalists, these wizards interact with the multiverse through the lens of their psionic aptitude and awareness.",
				"Psionicists channel their magic by focusing their minds. By doing so they can transcend their physical bodies, adopting forms of pure thought, casting spells psionically to bypass the need for components, and perceiving the world with a broader range of senses.",
				"As a member of the Psionics tradition, you might have awoken your psionic potential through the strain of your esoteric studies, or perhaps you joined a scholarly order dedicated to unlocking the magic of the mind.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Focus|Wizard||Psionics (UA)|UAFighterRogueWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Devotion|Wizard||Psionics (UA)|UAFighterRogueWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Your Psionic Focus|Wizard||Psionics (UA)|UAFighterRogueWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Spells|Wizard||Psionics (UA)|UAFighterRogueWizard|2"
				}
			]
		},
		{
			"name": "Psionic Devotion",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Psionics feature}",
				"Your study of psionics begins to unleash your mind's potential. When you gain this feature, choose one of the following cantrips: {@spell friends}, {@spell mage hand}, or {@spell message}. You learn that cantrip if you don't already know it, and it doesn't count against the number of wizard cantrips you know. While your psionic focus is on your person, you can cast the chosen cantrip as a bonus action, requiring no components, and with the modification listed below:",
				{
					"type": "entries",
					"name": "Friends",
					"entries": [
						"When the spell ends, the target doesn't become hostile to you."
					]
				},
				{
					"type": "entries",
					"name": "Mage Hand",
					"entries": [
						"You can make the hand {@condition invisible} when you cast the spell, and controlling the spell is a bonus action for you."
					]
				},
				{
					"type": "entries",
					"name": "Message",
					"entries": [
						"You don't need to point toward the target or whisper your message out loud."
					]
				}
			]
		},
		{
			"name": "Psionic Focus",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Psionics feature}",
				"You have learned to channel psionic energy through a special object: a psionic focus. You gain the object with this feature (see the \"Your Psionic Focus\" sidebar for how you might have acquired the item).",
				"While your psionic focus is on your person, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"The object is a spellcasting focus for you.",
						"When you roll psychic or force damage for any of your wizard spells, you can reroll any of those damage dice that rolls a 1, but you must use the new roll."
					]
				},
				"If your psionic focus is lost, you can magically recreate it by meditating for 1 hour during a short or long rest, at the end of which the focus appears in your hand."
			]
		},
		{
			"name": "Psionic Spells",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 2,
			"header": 1,
			"type": "inset",
			"entries": [
				"Spell selection is part of what defines a wizard and their individual fields of expertise. When creating your Psionics wizard, consider spells that are thematically appropriate for that tradition. Psionics as a theme generally includes spells that do the following:",
				{
					"type": "list",
					"items": [
						"contact or manipulate minds",
						"allow the caster to perceive distant locations or planes",
						"alter perception",
						"move objects and creatures",
						"teleport",
						"deal psychic or force damage"
					]
				}
			]
		},
		{
			"name": "Your Psionic Focus",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 2,
			"header": 1,
			"type": "inset",
			"entries": [
				"Every member of the Psionics tradition has a story about how their psionic focus came into their life. Consider how you found yours and what form it takes.",
				"The event that brought your psionic focus to you probably holds personal significance. Did your master give it to you upon the completion of your apprenticeship? Was it awarded to you when you graduated from your academy of wizardry? Did it call to you in a jeweler's shop? Was it associated with the moment when your psionic powers first manifested? One morning, did you wake up with it humming under your pillow?",
				"The form your psionic focus takes is also yours to define, likely being a reflection of how your magic came into being, a symbol of your own psyche, or an item you use to focus your thoughts. It is a handheld object that has special meaning to you, but that can't be a weapon or magic item. Perhaps it's a childhood memento, the skull of an alien creature, a crystal that makes you feel a certain way, a coin that only lands on its edge, a firescarred planchette, or any other enigmatic personal relic.",
				"However the object arrived and whatever form it takes, your psionic focus is now yours, and you decide how to handle it. Will you mount it on a wand or staff? Would you prefer to wear it on a necklace or circlet? Have you embedded it into the cover of your spellbook? Wherever you put it, you can now channel your magic through it, and it is a sign of your membership in the revered tradition of psionic wizardry."
			]
		},
		{
			"name": "Thought Form",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Psionics feature}",
				"While you are carrying your psionic focus, you can use a bonus action to magically transform your body into pure psionic energy. The transformation lasts for 10 minutes, until you use a bonus action to assume your normal form, or until you are {@condition incapacitated} or die.",
				"While in thought form, you are a figure of luminous psychic energy, with your psionic focus hovering within. Your form can appear as anything you wish, but it is obviously magical, is the same size as you, and sheds dim light in a 5-foot-radius. Any other equipment you are wearing or carrying transforms with you and melds into your thought form. You also gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Psionic Spellcasting",
							"entry": "When you cast a spell while in thought form, you can cast the spell psionically. If you do so, the spell doesn't require verbal, somatic, or material components that lack a gold cost."
						},
						{
							"type": "item",
							"name": "Psychic Resilience",
							"entry": "You gain resistance to psychic damage and to bludgeoning, piercing, and slashing damage from nonmagical attacks."
						}
					]
				},
				"You can transform using this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Empowered Psionics",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Psionics feature}",
				"When you deal psychic or force damage with a wizard spell, you can add your Intelligence modifier to the damage against one of the spell's targets."
			]
		},
		{
			"name": "Mental Discipline",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Psionics feature}",
				"Your mind's power expands to greater heights. When you gain this feature, choose one of the following spells: {@spell dominate person}, {@spell scrying}, or {@spell telekinesis}. You can add the spell to your spellbook, and you can cast it without components.",
				"You can also cast the chosen spell once without expending a spell slot. After you do so, you regain the ability to cast the spell without a slot when you finish a long rest."
			]
		},
		{
			"name": "Thought Travel",
			"source": "UAFighterRogueWizard",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Psionics (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Psionics feature}",
				"While using your Thought Form, you have a flying speed equal to your walking speed and can hover, and you can move through other creatures and objects as if they were {@quickref difficult terrain||3}.",
				"You take {@damage 1d10} force damage if you end your turn inside an object. If you return to your normal form while inside an object, you are shunted to the nearest unoccupied space, and you take {@damage 1d10} force damage for every 5 feet traveled."
			]
		},
		{
			"name": "Technomancy",
			"source": "UAModernMagic",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Technomancy (UA)",
			"subclassSource": "UAModernMagic",
			"level": 2,
			"entries": [
				"Unlike the more common arcane traditions based around the schools of magic, the tradition of Technomancy does not focus on a singular type of spellcraft or magical energy. Rather, students of Technomancy concern themselves with how their spells interact with modern technology.",
				"Technomancers can make use of technology as both a conduit and a storage space for magic. In a campaign using the optional rules for magic item creation (see the Dungeon Master's Guide), a technomancer might craft disposable electronic devices and smartphone apps in lieu of potions and scrolls.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Wizard||Technomancy (UA)|UAModernMagic|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Technological Savant|Wizard||Technomancy (UA)|UAModernMagic|2"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAModernMagic",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Technomancy (UA)",
			"subclassSource": "UAModernMagic",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this arcane tradition at 2nd level, you gain proficiency with sidearms and hacking tools."
			]
		},
		{
			"name": "Technological Savant",
			"source": "UAModernMagic",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Technomancy (UA)",
			"subclassSource": "UAModernMagic",
			"level": 2,
			"header": 1,
			"entries": [
				"Also at 2nd level, you trade out your spellbook for a specially attuned storage device of your choosing, capable of recording magical data. The computing power of this device must be equal to or greater than a tablet computer. Only one storage device can be attuned to you at any given time. Spells can be copied into this device at half the cost of copying spells into a spellbook."
			]
		},
		{
			"name": "Program Spell",
			"source": "UAModernMagic",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Technomancy (UA)",
			"subclassSource": "UAModernMagic",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you can insert a spell within an electronic device of your choosing, so that by touching a key or flicking a switch using an action, the spell activates. All variables of the spell are set at the time of casting. The computing power of this device must be equal to or greater than a mobile phone.",
				"A programmed spell remains placed in its device for 48 hours, and is gone once it is discharged. You can use this feature to place a programmed spell in only one device at a time, and a device can hold only one programmed spell. Only you can activate the programmed spell in the device. If the device is destroyed, the programmed spell is lost.",
				"A {@status concentration} spell placed in a device cannot be activated while you are {@status concentration||concentrating} on another spell. Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Online Casting",
			"source": "UAModernMagic",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Technomancy (UA)",
			"subclassSource": "UAModernMagic",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you can cast spells through networked electronic devices, including cameras, mobile phones, and computers. For example, if a creature is under the observation of a security camera and you can see the video feed from that camera on a computer, you can cast a spell into the computer and out through the security camera to target that creature.",
				"If the spell requires the caster to be seen, the target must see you or a live image of you. If the spell requires the caster to be heard, the target must be able to hear you or a live audio transmission of you. The spell's range is determined using the distance from you to your device, and then from the target to its device. You must be able to see or otherwise determine the location of the target. This feature can be used to cast only spells that target specific creatures. Spells that affect an area are not subject to online casting.",
				"This feature can be used a number of times per day equal to your Intelligence modifier (minimum of once)."
			]
		},
		{
			"name": "Chained Device",
			"source": "UAModernMagic",
			"page": 3,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Technomancy (UA)",
			"subclassSource": "UAModernMagic",
			"level": 14,
			"header": 2,
			"entries": [
				"By 14th level, you have learned to imprint vestiges of your consciousness on electronic devices with significant computing power. When you cast a {@status concentration} spell, you can use a device whose computing power is equal to or greater than a tablet computer to maintain {@status concentration} of the spell on your behalf. The device must be held or worn by you to maintain this effect. If the device is destroyed, taken from you, dropped, or turned off, the {@status concentration} ends. Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "School of Invention",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"entries": [
				"The School of Invention claims credit for inventing the other schools of magic\u2014a claim other wizards find absurd. Wizards of this school push magic to its limits. They stretch the known laws of arcane power and strive to reveal important truths about the nature of the multiverse.",
				"Adherents of this school believe that innovation is best served through experimentation. They have a reputation for acting first, thinking second. Most wizards are scholars who have mastered their craft through careful study, rigorous practice, and endless hours of repetition. These wizards would rather throw spells together and see what happens.",
				"Many wizards of this tradition are gnomes, alchemists, or both, and they take pride in the magic-infused armor they don. The armor not only provides protection, but it is also designed to help the wizard channel magic in unpredictable ways.",
				"Wizards of this tradition are regarded as savants to their faces, but wizards of other traditions often think of them as lunatics.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Inventor|Wizard||Invention (UA)|UAThreeSubclasses|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcanomechanical Armor|Wizard||Invention (UA)|UAThreeSubclasses|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Reckless Casting|Wizard||Invention (UA)|UAThreeSubclasses|2"
				}
			]
		},
		{
			"name": "Arcanomechanical Armor",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"header": 1,
			"entries": [
				"Innovation is a dangerous practice, at least as far as members of this school practice it. As a shield against this risk, you have developed a suit of arcane armor.",
				"Starting at 2nd level, you gain proficiency with light armor and gain a suit of arcanomechanical armor\u2014a magic item that only you can attune to. While you are attuned to it and wearing it, it grants you resistance to force damage.",
				"The armor is light armor and provides an AC of 12 + your Dexterity modifier. It weighs 8 pounds.",
				"You can create a new suit of it at the end of a long rest by touching a nonmagical suit of studded leather armor, which magically transforms it. Doing so removes the magic from your previous arcanomechanical armor, turning it in to nonmagical studded leather."
			]
		},
		{
			"name": "Reckless Casting",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can attempt to cast a spell you don't have prepared. When you use this ability, you use your action and choose one of the following options:",
				{
					"type": "list",
					"items": [
						"Roll on the Reckless Casting table for cantrips and cast the resulting spell as part of this action.",
						"Expend a spell slot and roll twice on the Reckless Casting table for its level, or the 5th-level table if the slot is 6th level or higher. Pick which of the two results you want to use and cast the resulting spell as part of this action."
					]
				},
				"If the spell you cast isn't a wizard spell, it is nonetheless a wizard spell for you when you cast it with this feature.",
				{
					"type": "table",
					"caption": "Reckless Casting",
					"colLabels": [
						"d10",
						"Cantrip"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@spell acid splash}"
						],
						[
							"2",
							"{@spell chill touch}"
						],
						[
							"3",
							"{@spell fire bolt}"
						],
						[
							"4",
							"{@spell light}"
						],
						[
							"5",
							"{@spell poison spray}"
						],
						[
							"6",
							"{@spell ray of frost}"
						],
						[
							"7",
							"{@spell shocking grasp}"
						],
						[
							"8",
							"{@spell sacred flame}"
						],
						[
							"9",
							"{@spell thorn whip}"
						],
						[
							"10",
							"Roll twice and cast each cantrip, but if you roll another 10 on either die, you cast nothing, wasting your action."
						]
					]
				},
				{
					"type": "table",
					"colLabels": [
						"d10",
						"1st-Level Spell"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@spell burning hands}"
						],
						[
							"2",
							"{@spell chromatic orb}"
						],
						[
							"3",
							"{@spell color spray}"
						],
						[
							"4",
							"{@spell faerie fire}"
						],
						[
							"5",
							"{@spell false life}"
						],
						[
							"6",
							"{@spell fog cloud}"
						],
						[
							"7",
							"{@spell jump}"
						],
						[
							"8",
							"{@spell magic missile}"
						],
						[
							"9",
							"{@spell thunderwave}"
						],
						[
							"10",
							"Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action but not the spell slot."
						]
					]
				},
				{
					"type": "table",
					"colLabels": [
						"d10",
						"2nd-Level Spell"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@spell blur}"
						],
						[
							"2",
							"{@spell darkness}"
						],
						[
							"3",
							"{@spell enlarge/reduce}"
						],
						[
							"4",
							"{@spell gust of wind}"
						],
						[
							"5",
							"{@spell invisibility}"
						],
						[
							"6",
							"{@spell levitate}"
						],
						[
							"7",
							"{@spell Melf's acid arrow}"
						],
						[
							"8",
							"{@spell scorching ray}"
						],
						[
							"9",
							"{@spell shatter}"
						],
						[
							"10",
							"Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action but not the spell slot."
						]
					]
				},
				{
					"type": "table",
					"colLabels": [
						"d10",
						"3rd-Level Spell"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@spell blink}"
						],
						[
							"2",
							"{@spell fear}"
						],
						[
							"3",
							"{@spell feign death}"
						],
						[
							"4",
							"{@spell fireball}"
						],
						[
							"5",
							"{@spell fly}"
						],
						[
							"6",
							"{@spell gaseous form}"
						],
						[
							"7",
							"{@spell lightning bolt}"
						],
						[
							"8",
							"{@spell sleet storm}"
						],
						[
							"9",
							"{@spell stinking cloud}"
						],
						[
							"10",
							"Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action but not the spell slot."
						]
					]
				},
				{
					"type": "table",
					"colLabels": [
						"d10",
						"4th-Level Spell"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@spell blight}"
						],
						[
							"2",
							"{@spell confusion}"
						],
						[
							"3",
							"{@spell Evard's black tentacles}"
						],
						[
							"4",
							"{@spell fire shield}"
						],
						[
							"5",
							"{@spell greater invisibility}"
						],
						[
							"6",
							"{@spell ice storm}"
						],
						[
							"7",
							"{@spell phantasmal killer}"
						],
						[
							"8",
							"{@spell stoneskin}"
						],
						[
							"9",
							"{@spell wall of fire}"
						],
						[
							"10",
							"Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action but not the spell slot."
						]
					]
				},
				{
					"type": "table",
					"colLabels": [
						"d10",
						"5th-Level Spell"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@spell cloudkill}"
						],
						[
							"2",
							"{@spell cone of cold}"
						],
						[
							"3",
							"{@spell destructive wave}"
						],
						[
							"4",
							"{@spell flame strike}"
						],
						[
							"5",
							"{@spell hold monster}"
						],
						[
							"6",
							"{@spell insect plague}"
						],
						[
							"7",
							"{@spell mass cure wounds}"
						],
						[
							"8",
							"{@spell wall of force}"
						],
						[
							"9",
							"{@spell wall of stone}"
						],
						[
							"10",
							"Roll twice and cast each spell, but if you roll another 10 on either die, you cast nothing, wasting your action but not the spell slot."
						]
					]
				}
			]
		},
		{
			"name": "Tools of the Inventor",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain proficiency with two tools of your choice."
			]
		},
		{
			"name": "Alchemical Casting",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you learn to channel magic through your arcanomechanical armor to augment spells in a variety of ways. When you cast a spell while wearing that armor and attuned to it, you can expend one additional spell slot of 1st or 2nd level to alter the spell. The effect depends on the spell slot you expend.",
				"A 1st-level slot allows you to manipulate the spell's energy. When you cast a spell that deals acid, cold, fire, lightning, or thunder damage, you can substitute that damage type for another one from that list.",
				"A 2nd-level slot increases the spell's raw force. If you roll damage for the spell when you cast it, increase that damage by {@damage 2d10} force damage against one of the spell's targets (your choice) this turn."
			]
		},
		{
			"name": "Prodigious Inspiration",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you have attained a greater mastery of spell preparation. As a bonus action, you can replace one spell you have prepared with another spell from your spellbook. You can't use this ability again until you finish a short or long rest."
			]
		},
		{
			"name": "Controlled Chaos",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Invention (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your ability to improvise magic grows stronger. Whenever you roll on a Reckless Casting table for a spell other than a cantrip, you can roll on the table that is one level higher than the expended spell slot."
			]
		},
		{
			"name": "Lore Mastery",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 2,
			"entries": [
				"Lore Mastery is an arcane tradition fixated on understanding the underlying mechanics of magic. It is the most academic of all arcane traditions. The promise of uncovering new knowledge or proving (or discrediting) a theory of magic is usually required to rouse its practitioners from their laboratories, academies, and archives to pursue a life of adventure.",
				"Known as savants, followers of this tradition are a bookish lot who see beauty and mystery in the application of magic. The results of a spell are less interesting to them than the process that creates it. Some savants take a haughty attitude toward those who follow a tradition focused on a single school of magic, seeing them as provincial and lacking the sophistication needed to master true magic. Other savants are generous teachers, countering ignorance and deception with deep knowledge and good humor.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Lore Master|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spell Secrets|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Altering Spells|Wizard||Lore Mastery (UA)|UAWarlockAndWizard|2"
				}
			]
		},
		{
			"name": "Altering Spells",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"While the Spell Secrets feature offers increased versatility, at the table its effects can be difficult to spot by the other players. If you're playing a savant, take a moment to describe how you alter your spells. Think of a signature change your character is particularly proud of. Be inventive, and make the game more fun for everyone by playing up the sudden, unexpected tricks you character can employ. For example, a {@spell fireball} transformed to require a Strength save might become a sphere of burning rock that shatters and slams into its target. A {@spell charm person} that requires a Constitution save might take the form of a vaporous narcotic that alters the target's mood."
			]
		},
		{
			"name": "Lore Master",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you become a compendium of knowledge on a vast array of topics. Your proficiency bonus is doubled for any ability check you make that uses the {@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion} skill if you are proficient in that skill.",
				"In addition, your analytical abilities are so well-honed that your initiative in combat can be driven by mental agility, rather than physical agility. When you roll initiative, it is either an Intelligence check or a Dexterity check for you (your choice)."
			]
		},
		{
			"name": "Spell Secrets",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you master the first in a series of arcane secrets uncovered by your extensive studies.",
				"When you cast a spell with a spell slot and the spell deals acid, cold, fire, force, lightning, necrotic, radiant, or thunder damage, you can substitute that damage type with one other type from that list (you can change only one damage type per casting of a spell). You replace one energy type for another by altering the spell's formula as you cast it.",
				"When you cast a spell with a spell slot and the spell requires a saving throw, you can change the saving throw from one ability score to another of your choice. Once you change a saving throw in this way, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "Alchemical Casting",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you learn to augment spells in a variety of ways. When you cast a spell with a spell slot, you can expend one additional spell slot to augment its effects for this casting, mixing the raw stuff of magic into your spell to amplify it. The effect depends on the spell slot you expend.",
				"An additional 1st-level spell slot can increase the spell's raw force. If you roll damage for the spell when you cast it, increase the damage against every target by {@damage 2d10} force damage. If the spell can deal damage on more than one turn, it deals this extra force damage only on the turn you cast the spell.",
				"An additional 2nd-level spell slot can increase the spell's range. If the spell's range is at least 30 feet, it becomes 1 mile.",
				"An additional 3rd-level spell slot can increase the spell's potency. Increase the spell's save DC by 2."
			]
		},
		{
			"name": "Prodigious Memory",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you have attained a greater mastery of spell preparation. As a bonus action, you can replace one spell you have prepared with another spell from your spellbook. You can't use this feature again until you finish a short or long rest."
			]
		},
		{
			"name": "Master of Magic",
			"source": "UAWarlockAndWizard",
			"page": 5,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Lore Mastery (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your knowledge of magic allows you to duplicate almost any spell. As a bonus action, you can call to mind the ability to cast one spell of your choice from any class's spell list. The spell must be of a level for which you have spell slots, you mustn't have it prepared, and you follow the normal rules for casting it, including expending a spell slot. If the spell isn't a wizard spell, it counts as a wizard spell when you cast it. The ability to cast the spell vanishes from your mind when you cast it or when the current turn ends.",
				"You can't use this feature again until you finish a long rest."
			]
		},
		{
			"name": "Theurgy",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"entries": [
				"A number of deities claim arcane magic as their domain, for magic is as much a part of the fabric of the cosmos as wind, fire, lightning, and all other primal forces. Just as there are deities of the sea and gods of warfare, the arcane arts feature their own divine patrons.",
				"Such deities often have clerics, but many gods of magic bid their followers to take up the study of wizardry. These religious magic-users follow the arcane tradition of Theurgy, and are commonly known as theurgists. Such spellcasters are as dedicated and scholarly as any other wizard, but they blend their arcane study with religious devotion.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divine Inspiration|Wizard||Theurgy (UA)|UAWizardRevisited|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Initiate|Wizard||Theurgy (UA)|UAWizardRevisited|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Arcana|Wizard||Theurgy (UA)|UAWizardRevisited|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Arcana: Divine Arcana|Wizard||Theurgy (UA)|UAWizardRevisited|2"
				}
			]
		},
		{
			"name": "Arcane Initiate",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"Beginning when you select this tradition at 2nd level, whenever you gain a wizard level, you can replace one of the wizard spells you add to your spellbook with a cleric domain spell for your chosen domain. The spell must be of a level for which you have spell slots.",
				"If you add all of your domain spells to your spellbook, you can subsequently add any spell from the cleric spell list instead. The spell must still be of a level for which you have spell slots.",
				"Any cleric spell you gain from this feature is considered a wizard spell for you, but other wizards can't copy cleric spells from your spellbook into their own spellbooks."
			]
		},
		{
			"name": "Channel Arcana",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain the ability to channel arcane energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Divine Arcana and the Channel Divinity option granted at 2nd level by your chosen domain. You employ that Channel Divinity option by using your Channel Arcana ability.",
				"When you use your Channel Arcana, you choose which effect to create. You must then finish a short or long rest to use your Channel Arcana again.",
				"Some Channel Arcana effects require saving throws. When you use such an effect, the save DC equals your wizard spell save DC.",
				"Beginning at 6th level, you can use your Channel Arcana twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.",
				"If you gain additional Channel Divinity options from your domain, you can employ them by using your Channel Arcana feature."
			]
		},
		{
			"name": "Channel Arcana: Divine Arcana",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"As a bonus action, you speak a prayer to control the flow of magic around you. The next spell you cast gains a +2 bonus to any attack roll you make for it or to its saving throw DC, as appropriate."
			]
		},
		{
			"name": "Divine Inspiration",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"When you choose this tradition at 2nd level, choose a domain from your chosen deity's list of eligible domains (see appendix B, \"Gods of the Multiverse,\" in the Player's Handbook for examples). The Knowledge and Light domains are especially appropriate choices for a theurgist."
			]
		},
		{
			"name": "Arcane Acolyte",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain your chosen domain's 1st-level benefits. However, you do not gain any weapon or armor proficiencies from the domain."
			]
		},
		{
			"name": "Arcane Priest",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain your chosen domain's 6th-level benefits. Your faith and your understanding of magic allow you to delve into your god's secrets."
			]
		},
		{
			"name": "Arcane High Priest",
			"source": "UAWizardRevisited",
			"page": 1,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "Theurgy (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain your chosen domain's 17th-level benefits. Your academic nature and understanding of magic and doctrine allow you to master this ability sooner than a cleric of your domain."
			]
		},
		{
			"name": "War Magic",
			"source": "UAWizardRevisited",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"entries": [
				"A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration. It teaches techniques that empower a caster's spells, while also providing methods for a wizard to bolster their own defenses.",
				"Followers of this tradition are known as war mages. They see their magic as both a weapon and armor, a resource superior to any flimsy piece of steel. War mages strike fast in battle, using their spells to seize tactical control of a situation. Their spells strike hard, while their defensive skills foil their opponents' attempts to counterattack.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Deflection|Wizard||War (UA)|UAWizardRevisited|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tactical Wit|Wizard||War (UA)|UAWizardRevisited|2"
				}
			]
		},
		{
			"name": "Arcane Deflection",
			"source": "UAWizardRevisited",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or fail a Constitution saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.",
				"When you use this feature, you can't cast spells other than cantrips until the end of your next turn."
			]
		},
		{
			"name": "Tactical Wit",
			"source": "UAWizardRevisited",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, your ability to quickly assess tactical situations allows you to act quickly in battle. You gain a bonus to your initiative rolls equal to your Intelligence modifier."
			]
		},
		{
			"name": "Power Surge",
			"source": "UAWizardRevisited",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can empower your spells that unleash harm on groups of foes. When you force multiple creatures to make saving throws against the damage of one of your spells, you can increase the spell's damage by rolling two more of its damage dice. This increase occurs only on the turn you cast the spell.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Durable Magic",
			"source": "UAWizardRevisited",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, the magic you channel helps ward off harm. While you maintain {@status concentration} on a spell, you have a +2 bonus to AC and all saving throws."
			]
		},
		{
			"name": "Durable Magic",
			"source": "UAWizardRevisited",
			"page": 2,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War (UA)",
			"subclassSource": "UAWizardRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, magical energy arcs from you; each creature of your choice within 10 feet of you takes force damage equal to half your wizard level."
			]
		},
		{
			"name": "War Magic",
			"source": "XGE",
			"page": 59,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "XGE",
			"level": 2,
			"entries": [
				"A variety of arcane colleges specialize in training wizards for war. The tradition of War Magic blends principles of evocation and abjuration, rather than specializing in either of those schools. It teaches techniques that empower a caster's spells, while also providing methods for wizards to bolster their own defenses.",
				"Followers of this tradition are known as war mages. They see their magic as both a weapon and armor, a resource superior to any piece of steel. War mages act fast in battle, using their spells to seize tactical control of a situation. Their spells strike hard, while their defensive skills foil their opponents' attempts to counterattack. War mages are also adept at turning other spellcasters' magical energy against them.",
				"In great battles, a war mage often works with evokers, abjurers, and other types of wizards. Evokers, in particular, sometimes tease war mages for splitting their attention between offense and defense. A war mage's typical response: \"What good is being able to throw a mighty {@spell fireball} if I die before I can cast it?\"",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Deflection|Wizard||War|XGE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tactical Wit|Wizard||War|XGE|2"
				}
			]
		},
		{
			"name": "Arcane Deflection",
			"source": "XGE",
			"page": 59,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "XGE",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you have learned to weave your magic to fortify yourself against harm. When you are hit by an attack or you fail a saving throw, you can use your reaction to gain a +2 bonus to your AC against that attack or a +4 bonus to that saving throw.",
				"When you use this feature, you can't cast spells other than cantrips until the end of your next turn."
			]
		},
		{
			"name": "Tactical Wit",
			"source": "XGE",
			"page": 59,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "XGE",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, your keen ability to assess tactical situations allows you to act quickly in battle. You can give yourself a bonus to your initiative rolls equal to your Intelligence modifier."
			]
		},
		{
			"name": "Power Surge",
			"source": "XGE",
			"page": 59,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can store magical energy within yourself to later empower your damaging spells. In its stored form, this energy is called a power surge.",
				"You can store a maximum number of power surges equal to your Intelligence modifier (minimum of one). Whenever you finish a long rest, your number of power surges resets to one. Whenever you successfully end a spell with {@spell dispel magic} or {@spell counterspell}, you gain one power surge, as you steal magic from the spell you foiled. If you end a short rest with no power surges, you gain one power surge.",
				"Once per turn when you deal damage to a creature or object with a wizard spell, you can spend one power surge to deal extra force damage to that target. The extra damage equals half your wizard level."
			]
		},
		{
			"name": "Durable Magic",
			"source": "XGE",
			"page": 59,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, the magic you channel helps ward off harm. While you maintain {@status concentration} on a spell, you have a +2 bonus to AC and all saving throws."
			]
		},
		{
			"name": "Deflecting Shroud",
			"source": "XGE",
			"page": 59,
			"className": "Wizard",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your Arcane Deflection becomes infused with deadly magic. When you use your Arcane Deflection feature, you can cause magical energy to arc from you. Up to three creatures of your choice that you can see within 60 feet of you each take force damage equal to half your wizard level."
			]
		}
	]
}



const classes = {
    "list": ["artificer", "barbarian", "wizard"],
	"artificer": artificer['class'][0],
    "barbarian": barbarian['class'][0],
    "wizard": wizard['class'][0]
}

export {
    classes
}