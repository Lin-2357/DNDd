const artificer =
{
	"class": [
		{
			"name": "Artificer",
			"source": "UAArtificer",
			"page": 1,
			"isReprinted": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"con",
				"int"
			],
			"spellcastingAbility": "int",
			"casterProgression": "1/3",
			"spellsKnownProgression": [
				0,
				0,
				3,
				4,
				4,
				4,
				5,
				6,
				6,
				7,
				8,
				8,
				9,
				10,
				10,
				11,
				11,
				11,
				12,
				13
			],
			"startingProficiencies": {
				"armor": [
					"light",
					"medium"
				],
				"weapons": [
					"simple"
				],
				"tools": [
					"{@item Thieves' tools|PHB}",
					"{@item tinker's tools|PHB}",
					"one type of {@item artisan's tools|PHB} of your choice"
				],
				"toolProficiencies": [
					{
						"thieves' tools": true,
						"tinker's tools": true,
						"anyArtisansTool": 1
					}
				],
				"skills": [
					{
						"choose": {
							"from": [
								"arcana",
								"deception",
								"history",
								"investigation",
								"medicine",
								"nature",
								"religion",
								"sleight of hand"
							],
							"count": 2
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) a {@item handaxe|phb} and a {@item light hammer|phb} or (b) any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}",
					"a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
					"(a) {@item scale mail|phb} or (b) {@item studded leather armor|phb}",
					"{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"
				],
				"defaultData": [
					{
						"a": [
							"handaxe|phb",
							"light hammer|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimple",
								"quantity": 2
							}
						]
					},
					{
						"_": [
							"light crossbow|phb",
							"crossbow bolts (20)|phb"
						]
					},
					{
						"a": [
							"scale mail|phb"
						],
						"b": [
							"studded leather armor|phb"
						]
					},
					{
						"_": [
							"thieves' tools|phb",
							"dungeoneer's pack|phb"
						]
					}
				]
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Spells Known|spells|class=artificer (uaa)}"
					],
					"rows": [
						[
							0
						],
						[
							0
						],
						[
							3
						],
						[
							4
						],
						[
							4
						],
						[
							4
						],
						[
							5
						],
						[
							6
						],
						[
							6
						],
						[
							7
						],
						[
							8
						],
						[
							8
						],
						[
							9
						],
						[
							10
						],
						[
							10
						],
						[
							11
						],
						[
							11
						],
						[
							11
						],
						[
							12
						],
						[
							13
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Artificer (UAA)}",
						"{@filter 2nd|spells|level=2|class=Artificer (UAA)}",
						"{@filter 3rd|spells|level=3|class=Artificer (UAA)}",
						"{@filter 4th|spells|level=4|class=Artificer (UAA)}"
					],
					"rowsSpellProgression": [
						[
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0
						],
						[
							2,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0
						],
						[
							4,
							2,
							0,
							0
						],
						[
							4,
							2,
							0,
							0
						],
						[
							4,
							2,
							0,
							0
						],
						[
							4,
							3,
							0,
							0
						],
						[
							4,
							3,
							0,
							0
						],
						[
							4,
							3,
							0,
							0
						],
						[
							4,
							3,
							2,
							0
						],
						[
							4,
							3,
							2,
							0
						],
						[
							4,
							3,
							2,
							0
						],
						[
							4,
							3,
							3,
							0
						],
						[
							4,
							3,
							3,
							0
						],
						[
							4,
							3,
							3,
							0
						],
						[
							4,
							3,
							3,
							1
						],
						[
							4,
							3,
							3,
							1
						]
					]
				}
			],
			"classFeatures": [
				{
					"classFeature": "Artificer Specialist|Artificer|UAArtificer|1",
					"gainSubclassFeature": true
				},
				"Magic Item Analysis|Artificer|UAArtificer|1",
				"Tool Expertise|Artificer|UAArtificer|2",
				"Wondrous Invention|Artificer|UAArtificer|2",
				{
					"classFeature": "Masterwork Feature|Artificer|UAArtificer|3",
					"gainSubclassFeature": true
				},
				"Spellcasting|Artificer|UAArtificer|3",
				"Infuse Magic|Artificer|UAArtificer|4",
				"Ability Score Improvement|Artificer|UAArtificer|4",
				"Proficiency Versatility|Artificer|UAArtificer|4|UAClassFeatureVariants",
				"Superior Attunement|Artificer|UAArtificer|5",
				"Wondrous Invention|Artificer|UAArtificer|5",
				"Mechanical Servant|Artificer|UAArtificer|6",
				"Ability Score Improvement|Artificer|UAArtificer|8",
				"Proficiency Versatility|Artificer|UAArtificer|8|UAClassFeatureVariants",
				{
					"classFeature": "Masterwork Feature|Artificer|UAArtificer|9",
					"gainSubclassFeature": true
				},
				"Wondrous Invention|Artificer|UAArtificer|10",
				"Ability Score Improvement|Artificer|UAArtificer|12",
				"Proficiency Versatility|Artificer|UAArtificer|12|UAClassFeatureVariants",
				{
					"classFeature": "Masterwork Feature|Artificer|UAArtificer|14",
					"gainSubclassFeature": true
				},
				"Superior Attunement|Artificer|UAArtificer|15",
				"Wondrous Invention|Artificer|UAArtificer|15",
				"Ability Score Improvement|Artificer|UAArtificer|16",
				"Proficiency Versatility|Artificer|UAArtificer|16|UAClassFeatureVariants",
				{
					"classFeature": "Masterwork Feature|Artificer|UAArtificer|17",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Artificer|UAArtificer|18",
				"Proficiency Versatility|Artificer|UAArtificer|18|UAClassFeatureVariants",
				"Soul of Artifice|Artificer|UAArtificer|20"
			],
			"subclassTitle": "Artificer Specialist"
		},
		{
			"name": "Artificer (Revisited)",
			"source": "UAArtificerRevisited",
			"page": 1,
			"isReprinted": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"con",
				"int"
			],
			"spellcastingAbility": "int",
			"casterProgression": "artificer",
			"preparedSpells": "<$level$> / 2 + <$int_mod$>",
			"cantripProgression": [
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				3,
				3,
				3,
				3,
				4,
				4,
				4,
				4,
				4,
				4,
				4
			],
			"optionalfeatureProgression": [
				{
					"name": "Infusions",
					"featureType": [
						"AI"
					],
					"progression": [
						0,
						3,
						3,
						4,
						4,
						4,
						5,
						5,
						5,
						5,
						6,
						6,
						6,
						6,
						7,
						7,
						7,
						7,
						8,
						8
					]
				}
			],
			"startingProficiencies": {
				"armor": [
					"light",
					"medium",
					"{@item shield|phb|shields}"
				],
				"weapons": [
					"simple",
					"{@item hand crossbow|phb|hand crossbows}",
					"{@item heavy crossbow|phb|heavy crossbows}",
					{
						"proficiency": "firearms",
						"optional": true
					}
				],
				"tools": [
					"{@item thieves' tools|PHB}",
					"{@item tinker's tools|PHB}",
					"one type of {@item artisan's tools|PHB} of your choice"
				],
				"toolProficiencies": [
					{
						"thieves' tools": true,
						"tinker's tools": true,
						"anyArtisansTool": 1
					}
				],
				"skills": [
					{
						"choose": {
							"from": [
								"arcana",
								"history",
								"investigation",
								"medicine",
								"nature",
								"perception",
								"sleight of hand"
							],
							"count": 2
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon}",
					"a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
					"(a) {@item studded leather armor|phb} or (b) {@item scale mail|phb}",
					"{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"_": [
							{
								"equipmentType": "weaponSimple",
								"quantity": 2
							}
						]
					},
					{
						"_": [
							"light crossbow|phb",
							"crossbow bolts (20)|phb"
						]
					},
					{
						"a": [
							"studded leather armor|phb"
						],
						"b": [
							"scale mail|phb"
						]
					},
					{
						"_": [
							"thieves' tools|phb",
							"dungeoneer's pack|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"int": 13
				},
				"proficienciesGained": {
					"armor": [
						"light",
						"medium",
						"{@item shield|phb|shields}"
					],
					"tools": [
						"{@item thieves' tools|PHB}",
						"{@item tinker's tools|PHB}"
					],
					"toolProficiencies": [
						{
							"thieves' tools": true,
							"tinker's tools": true
						}
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Infusions Known|optionalfeatures|feature type=ai|source=UAArtificerRevisited}",
						"Infused Items",
						"{@filter Cantrips Known|spells|level=0|class=artificer revisited (uaar)}"
					],
					"rows": [
						[
							0,
							0,
							2
						],
						[
							3,
							2,
							2
						],
						[
							3,
							2,
							2
						],
						[
							4,
							2,
							2
						],
						[
							4,
							2,
							2
						],
						[
							4,
							3,
							2
						],
						[
							5,
							3,
							2
						],
						[
							5,
							3,
							2
						],
						[
							5,
							3,
							2
						],
						[
							5,
							3,
							3
						],
						[
							6,
							4,
							3
						],
						[
							6,
							4,
							3
						],
						[
							6,
							4,
							3
						],
						[
							6,
							4,
							4
						],
						[
							7,
							4,
							4
						],
						[
							7,
							5,
							4
						],
						[
							7,
							5,
							4
						],
						[
							7,
							5,
							4
						],
						[
							8,
							5,
							4
						],
						[
							8,
							5,
							4
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Artificer Revisited (UAAR)}",
						"{@filter 2nd|spells|level=2|class=Artificer Revisited (UAAR)}",
						"{@filter 3rd|spells|level=3|class=Artificer Revisited (UAAR)}",
						"{@filter 4th|spells|level=4|class=Artificer Revisited (UAAR)}",
						"{@filter 5th|spells|level=5|class=Artificer Revisited (UAAR)}"
					],
					"rowsSpellProgression": [
						[
							2,
							0,
							0,
							0,
							0
						],
						[
							2,
							0,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0,
							0
						],
						[
							4,
							2,
							0,
							0,
							0
						],
						[
							4,
							2,
							0,
							0,
							0
						],
						[
							4,
							3,
							0,
							0,
							0
						],
						[
							4,
							3,
							0,
							0,
							0
						],
						[
							4,
							3,
							2,
							0,
							0
						],
						[
							4,
							3,
							2,
							0,
							0
						],
						[
							4,
							3,
							3,
							0,
							0
						],
						[
							4,
							3,
							3,
							0,
							0
						],
						[
							4,
							3,
							3,
							1,
							0
						],
						[
							4,
							3,
							3,
							1,
							0
						],
						[
							4,
							3,
							3,
							2,
							0
						],
						[
							4,
							3,
							3,
							2,
							0
						],
						[
							4,
							3,
							3,
							3,
							1
						],
						[
							4,
							3,
							3,
							3,
							1
						],
						[
							4,
							3,
							3,
							3,
							2
						],
						[
							4,
							3,
							3,
							3,
							2
						]
					]
				}
			],
			"classFeatures": [
				"Magical Tinkering|Artificer (Revisited)|UAArtificerRevisited|1",
				"Spellcasting|Artificer (Revisited)|UAArtificerRevisited|1",
				"Infuse Item|Artificer (Revisited)|UAArtificerRevisited|2",
				{
					"classFeature": "Artificer Specialist|Artificer (Revisited)|UAArtificerRevisited|3",
					"gainSubclassFeature": true
				},
				"Tool Expertise|Artificer (Revisited)|UAArtificerRevisited|3",
				"Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|4",
				"Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|4|UAClassFeatureVariants",
				"Arcane Armament|Artificer (Revisited)|UAArtificerRevisited|5",
				{
					"classFeature": "Artificer Specialist Feature|Artificer (Revisited)|UAArtificerRevisited|6",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|8",
				"Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|8|UAClassFeatureVariants",
				"The Right Cantrip for the Job|Artificer (Revisited)|UAArtificerRevisited|10",
				"Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|12",
				"Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|12|UAClassFeatureVariants",
				{
					"classFeature": "Artificer Specialist Feature|Artificer (Revisited)|UAArtificerRevisited|14",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|16",
				"Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|16|UAClassFeatureVariants",
				"Spell-Storing Item|Artificer (Revisited)|UAArtificerRevisited|18",
				"Ability Score Improvement|Artificer (Revisited)|UAArtificerRevisited|19",
				"Proficiency Versatility|Artificer (Revisited)|UAArtificerRevisited|19|UAClassFeatureVariants",
				"Soul of Artifice|Artificer (Revisited)|UAArtificerRevisited|20"
			],
			"subclassTitle": "Artificer Specialist",
			"fluff": [
				{
					"name": "Artificer",
					"page": 1,
					"source": "UAArtificerRevisited",
					"type": "section",
					"entries": [
						"Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting temporary and permanent magical objects. To cast a spell, an artificer could use {@item alchemist's supplies|PHB} to create a potent elixir, {@item calligrapher's supplies|PHB} to inscribe a sigil of power on an ally's armor, or {@item tinker's tools|PHB} to craft a temporary charm. The magic of artificers is tied to their tools and their talents.",
						{
							"type": "entries",
							"name": "Arcane Science",
							"entries": [
								"In the world of Eberron, arcane magic has been harnessed as a form of science and deployed throughout society. Artificers reflect this development. Their knowledge of magical devices, and their ability to infuse mundane items with magical energy, allows the grand magical projects of Eberron to continue running. During the Last War, artificers were marshaled on a massive scale. Many lives were saved because of the inventions of brave artificers, but also countless lives were lost because of the mass destruction that artificers' creations unleashed."
							]
						},
						{
							"type": "entries",
							"name": "Seekers of New Lore",
							"entries": [
								"Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make a mark must find something fresh, rather than uncover someone else's work.",
								"This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and populated regions have long since been explored. Thus, artificers take to the edge of civilization in hopes of making the next great discovery in arcane research."
							]
						},
						{
							"type": "entries",
							"name": "Creating an Artificer",
							"entries": [
								"When creating an artificer character, think about your character's background and drive for adventure. Does the character have a rival? What is the character's relationship with the artisan or artificer who taught the basics of the craft? Talk to your DM about the role played by artificers in the campaign, and what sort of organizations and NPCs you might have ties to.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make an artificer quickly by following these suggestions. First, put your highest ability score in Intelligence, followed by Constitution or Dexterity. Second, choose the {@background guild artisan} background."
									]
								}
							]
						},
						{
							"type": "inset",
							"name": "Artificers in Other Worlds",
							"entries": [
								"Eberron is the world most associated with artificers, yet the class can be found throughout the multiverse. In the Forgotten Realms, for example, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the World of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational. In the City of Sigil, artificers share discoveries from throughout the cosmos, and one in particular\u2014the gnome inventor named Vi\u2014runs a multiverse-spanning business from there. In the worldcity Ravnica, the Izzet League trains numerous artificers, the destructiveness of whom is unparalleled in other worlds, except by the tinker gnomes of Krynn."
							]
						},
						{
							"type": "inset",
							"name": "Optional Rule: Firearm Proficiency",
							"entries": [
								"The creation and operation of gunpowder weapons have been discovered in various corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in the Dungeon Master's Guide (p. 267) and your artificer has been exposed to the operation of such weapons, your artificer is proficient with them."
							]
						},
						{
							"type": "inset",
							"name": "Optional Rule: Multiclassing",
							"entries": [
								"If your group uses the optional rule on multiclassing in the Player's Handbook (p. 163), here's what you need to know if you choose artificer as one of your classes.",
								{
									"type": "entries",
									"name": "Ability Score Minimum",
									"entries": [
										"As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class."
									]
								},
								{
									"type": "entries",
									"name": "Proficiencies Gained",
									"entries": [
										"If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}."
									]
								},
								{
									"type": "entries",
									"name": "Extra Attack",
									"entries": [
										"The Arcane Armament feature doesn't give you an additional attack if you also have the Extra Attack feature."
									]
								},
								{
									"type": "entries",
									"name": "Spell Slots",
									"entries": [
										"Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Artificer",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"con",
				"int"
			],
			"spellcastingAbility": "int",
			"casterProgression": "artificer",
			"preparedSpells": "<$level$> / 2 + <$int_mod$>",
			"cantripProgression": [
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				3,
				3,
				3,
				3,
				4,
				4,
				4,
				4,
				4,
				4,
				4
			],
			"optionalfeatureProgression": [
				{
					"name": "Infusions",
					"featureType": [
						"AI"
					],
					"progression": [
						0,
						4,
						4,
						4,
						4,
						6,
						6,
						6,
						6,
						8,
						8,
						8,
						8,
						10,
						10,
						10,
						10,
						12,
						12,
						12
					]
				}
			],
			"startingProficiencies": {
				"armor": [
					"light",
					"medium",
					"{@item shield|phb|shields}"
				],
				"weapons": [
					"simple",
					{
						"proficiency": "firearms",
						"optional": true
					}
				],
				"tools": [
					"{@item thieves' tools|PHB}",
					"{@item tinker's tools|PHB}",
					"one type of {@item artisan's tools|PHB} of your choice"
				],
				"toolProficiencies": [
					{
						"thieves' tools": true,
						"tinker's tools": true,
						"anyArtisansTool": 1
					}
				],
				"skills": [
					{
						"choose": {
							"from": [
								"arcana",
								"history",
								"investigation",
								"medicine",
								"nature",
								"perception",
								"sleight of hand"
							],
							"count": 2
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"any two {@filter simple weapons|items|source=phb|category=basic|type=simple weapon} of your choice",
					"a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts}",
					"(a) {@item studded leather armor|phb} or (b) {@item scale mail|phb}",
					"{@item thieves' tools|phb} and a {@item dungeoneer's pack|phb}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"_": [
							{
								"equipmentType": "weaponSimple",
								"quantity": 2
							}
						]
					},
					{
						"_": [
							"light crossbow|phb",
							"crossbow bolts (20)|phb"
						]
					},
					{
						"a": [
							"studded leather armor|phb"
						],
						"b": [
							"scale mail|phb"
						]
					},
					{
						"_": [
							"thieves' tools|phb",
							"dungeoneer's pack|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"int": 13
				},
				"proficienciesGained": {
					"armor": [
						"light",
						"medium",
						"{@item shield|phb|shields}"
					],
					"tools": [
						"{@item thieves' tools|PHB}",
						"{@item tinker's tools|PHB}"
					],
					"toolProficiencies": [
						{
							"thieves' tools": true,
							"tinker's tools": true
						}
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Infusions Known|optionalfeatures|feature type=ai|source=TCE}",
						"Infused Items",
						"{@filter Cantrips Known|spells|level=0|class=artificer}"
					],
					"rows": [
						[
							0,
							0,
							2
						],
						[
							4,
							2,
							2
						],
						[
							4,
							2,
							2
						],
						[
							4,
							2,
							2
						],
						[
							4,
							2,
							2
						],
						[
							6,
							3,
							2
						],
						[
							6,
							3,
							2
						],
						[
							6,
							3,
							2
						],
						[
							6,
							3,
							2
						],
						[
							8,
							4,
							3
						],
						[
							8,
							4,
							3
						],
						[
							8,
							4,
							3
						],
						[
							8,
							4,
							3
						],
						[
							10,
							5,
							4
						],
						[
							10,
							5,
							4
						],
						[
							10,
							5,
							4
						],
						[
							10,
							5,
							4
						],
						[
							12,
							6,
							4
						],
						[
							12,
							6,
							4
						],
						[
							12,
							6,
							4
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Artificer}",
						"{@filter 2nd|spells|level=2|class=Artificer}",
						"{@filter 3rd|spells|level=3|class=Artificer}",
						"{@filter 4th|spells|level=4|class=Artificer}",
						"{@filter 5th|spells|level=5|class=Artificer}"
					],
					"rowsSpellProgression": [
						[
							2,
							0,
							0,
							0,
							0
						],
						[
							2,
							0,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0,
							0
						],
						[
							4,
							2,
							0,
							0,
							0
						],
						[
							4,
							2,
							0,
							0,
							0
						],
						[
							4,
							3,
							0,
							0,
							0
						],
						[
							4,
							3,
							0,
							0,
							0
						],
						[
							4,
							3,
							2,
							0,
							0
						],
						[
							4,
							3,
							2,
							0,
							0
						],
						[
							4,
							3,
							3,
							0,
							0
						],
						[
							4,
							3,
							3,
							0,
							0
						],
						[
							4,
							3,
							3,
							1,
							0
						],
						[
							4,
							3,
							3,
							1,
							0
						],
						[
							4,
							3,
							3,
							2,
							0
						],
						[
							4,
							3,
							3,
							2,
							0
						],
						[
							4,
							3,
							3,
							3,
							1
						],
						[
							4,
							3,
							3,
							3,
							1
						],
						[
							4,
							3,
							3,
							3,
							2
						],
						[
							4,
							3,
							3,
							3,
							2
						]
					]
				}
			],
			"classFeatures": [
				"Optional Rule: Firearm Proficiency|Artificer|TCE|1",
				"Magical Tinkering|Artificer|TCE|1",
				"Spellcasting|Artificer|TCE|1",
				"Infuse Item|Artificer|TCE|2",
				{
					"classFeature": "Artificer Specialist|Artificer|TCE|3",
					"gainSubclassFeature": true
				},
				"The Right Tool for the Job|Artificer|TCE|3",
				"Ability Score Improvement|Artificer|TCE|4",
				"Proficiency Versatility|Artificer|TCE|4|UAClassFeatureVariants",
				{
					"classFeature": "Artificer Specialist Feature|Artificer|TCE|5",
					"gainSubclassFeature": true
				},
				"Tool Expertise|Artificer|TCE|6",
				"Flash of Genius|Artificer|TCE|7",
				"Ability Score Improvement|Artificer|TCE|8",
				"Proficiency Versatility|Artificer|TCE|8|UAClassFeatureVariants",
				{
					"classFeature": "Artificer Specialist Feature|Artificer|TCE|9",
					"gainSubclassFeature": true
				},
				"Magic Item Adept|Artificer|TCE|10",
				"Spell-Storing Item|Artificer|TCE|11",
				"Ability Score Improvement|Artificer|TCE|12",
				"Proficiency Versatility|Artificer|TCE|12|UAClassFeatureVariants",
				"Magic Item Savant|Artificer|TCE|14",
				{
					"classFeature": "Artificer Specialist Feature|Artificer|TCE|15",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Artificer|TCE|16",
				"Proficiency Versatility|Artificer|TCE|16|UAClassFeatureVariants",
				"Magic Item Master|Artificer|TCE|18",
				"Ability Score Improvement|Artificer|TCE|19",
				"Proficiency Versatility|Artificer|TCE|19|UAClassFeatureVariants",
				"Soul of Artifice|Artificer|TCE|20"
			],
			"subclassTitle": "Artificer Specialist",
			"fluff": [
				{
					"name": "Artificer",
					"type": "section",
					"entries": [
						"Masters of invention, artificers use ingenuity and magic to unlock extraordinary capabilities in objects. They see magic as a complex system waiting to be decoded and then harnessed in their spells and inventions. You can find everything you need to play one of these inventors in the next few sections. Artificers use a variety of tools to channel their arcane power. To cast a spell, an artificer might use alchemist's supplies to create a potent elixir, calligrapher's supplies to inscribe a sigil of power, or tinker's tools to craft a temporary charm. The magic of artificers is tied to their tools and their talents, and few other characters can produce the right tool for a job as well as an artificer.",
						{
							"type": "entries",
							"entries": [
								{
									"type": "entries",
									"name": "Artificers in Many Worlds",
									"entries": [
										"Throughout the D&D multiverse, artificers create inventions and magic items of peace and war. Many lives have been brightened or saved because of the work of kind artificers, but countless lives have also been lost because of the mass destruction unleashed by certain artificers' creations.",
										"In the Forgotten Realms, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the world of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational.",
										"Artificers in the City of Sigil share discoveries from throughout the multiverse, and from there, the gnome artificer Vi runs a cosmos-spanning business that hires adventurers to fix problems that others deem unfixable. In Vi's home world, Eberron, magic is harnessed as a form of science and deployed throughout society, largely as a result of the wondrous ingenuity of artificers."
									]
								},
								{
									"type": "entries",
									"name": "Creating an Artificer",
									"entries": [
										"To create an artificer, consult the subsections which give you hit points, proficiencies, and starting equipment. Then look at the Artificer table to see which features you get at each level. The descriptions of those features appear below."
									]
								},
								{
									"type": "quote",
									"entries": [
										"Artificers invent cutting-edge problems, then try to solve them-loudly and often with collateral damage."
									],
									"by": "Tasha"
								},
								{
									"type": "entries",
									"name": "Multiclassing and the Artificer",
									"entries": [
										"If your group uses the optional rule on multiclassing in the {@book Player's Handbook|PHB}, here's what you need to know if you choose artificer as one of your classes.",
										{
											"type": "entries",
											"name": "Ability Score Minimum",
											"entries": [
												"As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer."
											]
										},
										{
											"type": "entries",
											"name": "Proficiencies Gained",
											"entries": [
												"If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}."
											]
										},
										{
											"type": "entries",
											"name": "Spell Slots",
											"entries": [
												"Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots."
											]
										}
									]
								}
							]
						}
					],
					"source": "TCE"
				},
				{
					"name": "Artificer",
					"type": "section",
					"entries": [
						"Masters of unlocking magic in everyday objects, artificers are supreme inventors. They see magic as a complex system waiting to be decoded and controlled. Artificers use tools to channel arcane power, crafting magical objects. To cast a spell, an artificer could use {@item alchemist's supplies|PHB} to create a potent elixir, {@item calligrapher's supplies|PHB} to inscribe a sigil of power on an ally's armor, or {@item tinker's tools|PHB} to craft a temporary charm. The magic of artificers is tied to their tools and their talents.",
						{
							"type": "entries",
							"name": "Arcane Science",
							"entries": [
								"In the world of Eberron, arcane magic has been harnessed as a form of science and deployed throughout society. Artificers reflect this development. Their knowledge of magical devices, and their ability to infuse mundane items with magic, allows Eberron's most miraculous projects to continue.",
								"During the Last War, artificers were marshaled on a massive scale. Many lives were saved because of the inventions of brave artificers, but countless lives were also lost because of the mass destruction unleashed by their creations."
							]
						},
						{
							"type": "entries",
							"name": "Seekers of New Lore",
							"entries": [
								"Nothing excites an artificer quite like uncovering a new metal or discovering a source of elemental energy. In artificer circles, new inventions and strange discoveries create the most excitement. Artificers who wish to make their mark must innovate, creating something fresh, rather than iterating on familiar designs.",
								"This drive for novelty pushes artificers to become adventurers. Eberron's main travel routes and populated regions have long since been explored. Thus, artificers seek the frontiers of civilization in hopes of making the next great discovery in arcane research."
							]
						},
						{
							"type": "entries",
							"name": "Creating an Artificer",
							"entries": [
								"When creating an artificer, think about your character's relationship with the artisan who taught them their craft. Does the character have a rival? Talk to your DM about the role played by artificers in the campaign and the sort of organizations you might have ties to.",
								{
									"type": "inset",
									"name": "Artificers in Other Worlds",
									"entries": [
										"Eberron is the world most associated with artificers, yet the class can be found throughout the D&D multiverse. In the Forgotten Realms, for example, the island of Lantan is home to many artificers, and in the world of Dragonlance, tinker gnomes are often members of this class. The strange technologies in the Barrier Peaks of the World of Greyhawk have inspired some folk to walk the path of the artificer, and in Mystara, various nations employ artificers to keep airships and other wondrous devices operational. In the City of Sigil, artificers share discoveries from throughout the cosmos, and one in particular\u2014the gnome inventor Vi\u2014has run a multiverse-spanning business from there since leaving the world of her birth, Eberron. In the world-city Ravnica, the Izzet League trains numerous artificers, the destructiveness of whom is unparalleled in other worlds\u2014except, perhaps, by the tinker gnomes of Krynn."
									]
								},
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make an artificer quickly by following these suggestions. First, put your highest ability score in Intelligence, followed by Constitution or Dexterity. Second, choose the {@background guild artisan} background."
									]
								},
								{
									"type": "entries",
									"name": "Optional Rule: Multiclassing",
									"entries": [
										"If your group uses the optional rule on multiclassing in the {@book Player's Handbook|PHB}, here's what you need to know if you choose artificer as one of your classes.",
										{
											"type": "entries",
											"name": "Ability Score Minimum",
											"entries": [
												"As a multiclass character, you must have at least an Intelligence score of 13 to take a level in this class, or to take a level in another class if you are already an artificer."
											]
										},
										{
											"type": "entries",
											"name": "Proficiencies Gained",
											"entries": [
												"If artificer isn't your initial class, here are the proficiencies you gain when you take your first level as an artificer: light armor, medium armor, shields, {@item thieves' tools|PHB}, {@item tinker's tools|PHB}."
											]
										},
										{
											"type": "entries",
											"name": "Spell Slots",
											"entries": [
												"Add half your levels (rounded up) in the artificer class to the appropriate levels from other classes to determine your available spell slots."
											]
										}
									]
								}
							]
						}
					],
					"source": "ERLW",
					"page": 54
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Alchemist",
			"shortName": "Alchemist",
			"source": "UAArtificer",
			"className": "Artificer",
			"classSource": "UAArtificer",
			"page": 5,
			"optionalfeatureProgression": [
				{
					"name": "Alchemical Formula",
					"featureType": [
						"AF"
					],
					"progression": {
						"1": 3,
						"3": 1,
						"9": 1,
						"14": 1,
						"17": 1
					}
				}
			],
			"subclassFeatures": [
				"Alchemist|Artificer|UAArtificer|Alchemist|UAArtificer|1",
				"Extra Alchemical Formula|Artificer|UAArtificer|Alchemist|UAArtificer|3",
				"Extra Alchemical Formula|Artificer|UAArtificer|Alchemist|UAArtificer|9",
				"Extra Alchemical Formula|Artificer|UAArtificer|Alchemist|UAArtificer|14",
				"Extra Alchemical Formula|Artificer|UAArtificer|Alchemist|UAArtificer|17"
			]
		},
		{
			"name": "Gunsmith",
			"shortName": "Gunsmith",
			"source": "UAArtificer",
			"className": "Artificer",
			"classSource": "UAArtificer",
			"page": 6,
			"subclassFeatures": [
				"Gunsmith|Artificer|UAArtificer|Gunsmith|UAArtificer|1",
				"Thunder Monger|Artificer|UAArtificer|Gunsmith|UAArtificer|3",
				"Blast Wave|Artificer|UAArtificer|Gunsmith|UAArtificer|9",
				"Piercing Round|Artificer|UAArtificer|Gunsmith|UAArtificer|14",
				"Explosive Round|Artificer|UAArtificer|Gunsmith|UAArtificer|17"
			]
		},
		{
			"name": "Alchemist",
			"shortName": "Alchemist",
			"source": "UAArtificerRevisited",
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"page": 6,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"purify food and drink",
							"ray of sickness"
						],
						"5": [
							"Melf's acid arrow",
							"web"
						],
						"9": [
							"create food and water",
							"stinking cloud"
						],
						"13": [
							"blight",
							"death ward"
						],
						"17": [
							"cloudkill",
							"raise dead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Alchemist|Artificer (Revisited)|UAArtificerRevisited|Alchemist|UAArtificerRevisited|3",
				"Alchemical Mastery|Artificer (Revisited)|UAArtificerRevisited|Alchemist|UAArtificerRevisited|6",
				"Chemical Savant|Artificer (Revisited)|UAArtificerRevisited|Alchemist|UAArtificerRevisited|14"
			]
		},
		{
			"name": "Archivist",
			"shortName": "Archivist",
			"source": "UAArtificerRevisited",
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"page": 7,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"comprehend languages",
							"dissonant whispers"
						],
						"5": [
							"detect thoughts",
							"locate object"
						],
						"9": [
							"hypnotic pattern",
							"tongues"
						],
						"13": [
							"locate creature",
							"phantasmal killer"
						],
						"17": [
							"legend lore",
							"modify memory"
						]
					}
				}
			],
			"subclassFeatures": [
				"Archivist|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|3",
				"Mind Network|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|6",
				"Pure Information|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|14"
			]
		},
		{
			"name": "Artillerist",
			"shortName": "Artillerist",
			"source": "UAArtificerRevisited",
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"page": 9,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"shield",
							"thunderwave"
						],
						"5": [
							"scorching ray",
							"shatter"
						],
						"9": [
							"fireball",
							"wind wall"
						],
						"13": [
							"ice storm",
							"wall of fire"
						],
						"17": [
							"cone of cold",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Artillerist|Artificer (Revisited)|UAArtificerRevisited|Artillerist|UAArtificerRevisited|3",
				"Wand Prototype|Artificer (Revisited)|UAArtificerRevisited|Artillerist|UAArtificerRevisited|6",
				"Fortified Position|Artificer (Revisited)|UAArtificerRevisited|Artillerist|UAArtificerRevisited|14"
			]
		},
		{
			"name": "Battle Smith",
			"shortName": "Battle Smith",
			"source": "UAArtificerRevisited",
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"page": 11,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"heroism",
							"searing smite"
						],
						"5": [
							"branding smite",
							"warding bond"
						],
						"9": [
							"aura of vitality",
							"blinding smite"
						],
						"13": [
							"aura of purity",
							"staggering smite"
						],
						"17": [
							"banishing smite",
							"mass cure wounds"
						]
					}
				}
			],
			"subclassFeatures": [
				"Battle Smith|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|3",
				"Arcane Jolt|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|6",
				"Improved Defender|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|14"
			]
		},
		{
			"name": "Armorer (UA)",
			"shortName": "Armorer (UA)",
			"source": "UA2020SubclassesPt3",
			"className": "Artificer",
			"classSource": "TCE",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"magic missile",
							"shield"
						],
						"5": [
							"mirror image",
							"shatter"
						],
						"9": [
							"hypnotic pattern",
							"lightning bolt"
						],
						"13": [
							"fire shield",
							"greater invisibility"
						],
						"17": [
							"passwall",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Armorer|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|3",
				"Extra Attack|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|5",
				"Armor Modifications|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|9",
				"Perfected Armor|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|15"
			]
		},
		{
			"name": "Alchemist",
			"shortName": "Alchemist",
			"source": "TCE",
			"className": "Artificer",
			"classSource": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"healing word",
							"ray of sickness"
						],
						"5": [
							"flaming sphere",
							"melf's acid arrow"
						],
						"9": [
							"gaseous form",
							"mass healing word"
						],
						"13": [
							"blight",
							"death ward"
						],
						"17": [
							"cloudkill",
							"raise dead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Alchemist|Artificer|TCE|Alchemist|TCE|3",
				"Alchemical Savant|Artificer|TCE|Alchemist|TCE|5",
				"Restorative Reagents|Artificer|TCE|Alchemist|TCE|9",
				"Chemical Mastery|Artificer|TCE|Alchemist|TCE|15"
			]
		},
		{
			"name": "Armorer",
			"shortName": "Armorer",
			"source": "TCE",
			"className": "Artificer",
			"classSource": "TCE",
			"page": 15,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"magic missile",
							"thunderwave"
						],
						"5": [
							"mirror image",
							"shatter"
						],
						"9": [
							"hypnotic pattern",
							"lightning bolt"
						],
						"13": [
							"fire shield",
							"greater invisibility"
						],
						"17": [
							"passwall",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Armorer|Artificer|TCE|Armorer|TCE|3",
				"Extra Attack|Artificer|TCE|Armorer|TCE|5",
				"Armor Modifications|Artificer|TCE|Armorer|TCE|9",
				"Perfected Armor|Artificer|TCE|Armorer|TCE|15"
			]
		},
		{
			"name": "Artillerist",
			"shortName": "Artillerist",
			"source": "TCE",
			"className": "Artificer",
			"classSource": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"shield",
							"thunderwave"
						],
						"5": [
							"scorching ray",
							"shatter"
						],
						"9": [
							"fireball",
							"wind wall"
						],
						"13": [
							"ice storm",
							"wall of fire"
						],
						"17": [
							"cone of cold",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Artillerist|Artificer|TCE|Artillerist|TCE|3",
				"Arcane Firearm|Artificer|TCE|Artillerist|TCE|5",
				"Explosive Cannon|Artificer|TCE|Artillerist|TCE|9",
				"Fortified Position|Artificer|TCE|Artillerist|TCE|15"
			]
		},
		{
			"name": "Battle Smith",
			"shortName": "Battle Smith",
			"source": "TCE",
			"className": "Artificer",
			"classSource": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"heroism",
							"shield"
						],
						"5": [
							"branding smite",
							"warding bond"
						],
						"9": [
							"aura of vitality",
							"conjure barrage"
						],
						"13": [
							"aura of purity",
							"fire shield"
						],
						"17": [
							"banishing smite",
							"mass cure wounds"
						]
					}
				}
			],
			"subclassFeatures": [
				"Battle Smith|Artificer|TCE|Battle Smith|TCE|3",
				"Extra Attack|Artificer|TCE|Battle Smith|TCE|5",
				"Arcane Jolt|Artificer|TCE|Battle Smith|TCE|9",
				"Improved Defender|Artificer|TCE|Battle Smith|TCE|15"
			]
		}
	],
	"classFeature": [
		{
			"name": "Magical Tinkering",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 1,
			"entries": [
				"At 1st level, you learn how to invest a spark of magic into mundane objects. To use this ability, you must have {@item thieves' tools|PHB} or {@item artisan's tools|PHB} in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:",
				{
					"type": "list",
					"items": [
						"The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
						"Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
						"The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.",
						"A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like."
					]
				},
				"The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.",
				"You can bestow magic on multiple objects, touching one object each time you use this feature, though a single object can only bear one property at a time. The maximum number of objects you can affect with this feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies."
			]
		},
		{
			"name": "Optional Rule: Firearm Proficiency",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 1,
			"entries": [
				"The secrets of creating and operating gunpowder weapons have been discovered in various corners of the D&D multiverse. If your Dungeon Master uses the rules on firearms in {@book chapter 9|DMG|9|Firearms} of the {@book Dungeon Master's Guide|DMG} and your artificer has been exposed to the operation of such weapons, your artificer is proficient with them."
			]
		},
		{
			"name": "Spellcasting",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 1,
			"entries": [
				"You have studied the workings of magic and how to channel it through objects. As a result, you have gained the ability to cast spells. To observers, you don't appear to be casting spells in a conventional way; you look as if you're producing wonders using mundane items or outlandish inventions.",
				{
					"type": "entries",
					"name": "Tools Required",
					"entries": [
						"You produce your artificer spell effects through your tools. You must have a spellcasting focus\u2014specifically {@item thieves' tools|phb} or some kind of {@item artisan's tools|phb|artisan's tool}\u2014in hand when you cast any spell with this Spellcasting feature (meaning the spell has an 'M' component when you cast it). You must be proficient with the tool to use it in this way. See {@book chapter 5|PHB|4}, \"Equipment,\" in the {@book Player's Handbook|PHB} for descriptions of these tools.",
						"After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus.",
						{
							"type": "inset",
							"name": "The Magic of Artifice",
							"entries": [
								"As an artificer, you use tools when you cast your spells. When describing your spellcasting, think about how you're using a tool to perform the spell effect. If you cast {@spell cure wounds} using {@item alchemist's supplies|PHB}, you could be quickly producing a salve. If you cast it using {@item tinker's tools|PHB}, you might have a miniature mechanical spider that binds wounds. When you cast {@spell poison spray}, you could fling foul chemicals or use a wand that spits venom. The effect of the spell is the same as for a spellcaster of any other class, but your method of spellcasting is special.",
								"The same principle applies when you prepare your spells. As an artificer, you don't study a spellbook or pray to prepare your spells. Instead, you work with your tools and create the specialized items you'll use to produce your effects. If you replace {@spell cure wounds} with {@spell heat metal}, you might be altering the device you use to heal\u2014perhaps modifying a tool so that it channels heat instead of healing energy.",
								"Such details don't limit you in any way or provide you with any benefit beyond the spell's effects. You don't have to justify how you're using tools to cast a spell. But describing your spellcasting creatively is a fun way to distinguish yourself from other spellcasters."
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Cantrips (0-Level Spells)",
					"entries": [
						"At 1st level, you know two cantrips of your choice from the {@filter artificer spell list|spells|level=0|class=Artificer}. At higher levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips Known column of the Artificer table.",
						"When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list."
					]
				},
				{
					"type": "entries",
					"name": "Preparing and Casting Spells",
					"entries": [
						"The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of artificer spells that are available for you to cast, choosing from the {@filter artificer spell list|spells|class=Artificer}. When you do so, choose a number of artificer spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell {@spell cure wounds}, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.",
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
						"You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared."
					]
				}
			]
		},
		{
			"name": "Infuse Item",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 2,
			"entries": [
				"At 2nd level, you gain the ability to imbue mundane items with certain magical infusions. The magic items you create with this feature are effectively prototypes of permanent items.",
				{
					"type": "refClassFeature",
					"classFeature": "Infusions Known|Artificer|TCE|2"
				},
				{
					"type": "inset",
					"name": "Artificer Infusions",
					"entries": [
						"Artificers have invented numerous magical infusions, extraordinary processes that rapidly create magic items. To many, artificers seem like wonderworkers, accomplishing in hours what others need weeks to complete.",
						"The description of each of the following infusions details the type of item that can receive it, along with whether the resulting magic item requires attunement.",
						"Some infusions specify a minimum artificer level. You can't learn such an infusion until you are at least that level.",
						"Unless an infusion's description says otherwise, you can't learn an infusion more than once."
					]
				},
				{
					"type": "entries",
					"name": "Infusing an Item",
					"entries": [
						"Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see \"Attunement\" in chapter 7 of the {@book Dungeon Master's Guide|DMG}).",
						"Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days have passed equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you give up your knowledge of the infusion for another one.",
						"You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. Moreover, no object can bear more than one of your infusions at a time. If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies.",
						"If an infusion ends on an item that contains other things, like a bag of holding, its contents harmlessly appear in and around its space."
					]
				}
			]
		},
		{
			"name": "Infusions Known",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"When you gain this feature, pick four artificer infusions to learn, choosing from the \"{@filter Artificer Infusions|optionalfeatures|feature type=ai|source=TCE}\" section at the end of the class's description. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.",
				"Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one."
			]
		},
		{
			"name": "Artificer Specialist",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 3,
			"entries": [
				"At 3rd level, you choose the type of specialist you are, each of which is detailed at the end of the class's description. Your choice grants you features at 5th level and again at 9th and 15th level."
			]
		},
		{
			"name": "The Right Tool for the Job",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 3,
			"entries": [
				"At 3rd level, you learn how to produce exactly the tool you need: with {@item thieves' tools|PHB} or {@item artisan's tools|PHB} in hand, you can magically create one set of {@item artisan's tools|PHB} in an unoccupied space within 5 feet of you. This creation requires 1 hour of uninterrupted work, which can coincide with a short or long rest. Though the product of magic, the tools are nonmagical, and they vanish when you use this feature again."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
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
			"className": "Artificer",
			"classSource": "TCE",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Artificer Specialist Feature",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 5,
			"entries": [
				"At 5th level, you gain a feature granted by your Artificer Specialist choice."
			]
		},
		{
			"name": "Tool Expertise",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 6,
			"entries": [
				"Starting at 6th level, your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool."
			]
		},
		{
			"name": "Flash of Genius",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 7,
			"entries": [
				"Starting at 7th level, you gain the ability to come up with solutions under pressure. When you or another creature you can see within 30 feet of you makes an ability check or a saving throw, you can use your reaction to add your Intelligence modifier to the roll.",
				"You can use this feature a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
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
			"className": "Artificer",
			"classSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Artificer Specialist Feature",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 9,
			"entries": [
				"At 9th level, you gain a feature granted by your Artificer Specialist choice."
			]
		},
		{
			"name": "Magic Item Adept",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 10,
			"entries": [
				"When you reach 10th level, you achieve a profound understanding of how to use and make magic items:",
				{
					"type": "list",
					"items": [
						"You can attune to up to four magic items at once.",
						"If you craft a magic item with a rarity of common or uncommon, it takes you a quarter of the normal time, and it costs you half as much of the usual gold."
					]
				}
			]
		},
		{
			"name": "Spell-Storing Item",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 11,
			"entries": [
				"At 11th level, you learn how to store a spell in an object. Whenever you finish a long rest, you can touch one {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} or one item that you can use as a spellcasting focus, and you store a spell in it, choosing a 1st- or 2nd-level spell from the {@filter artificer spell list|spells|class=Artificer|cast time=action|level=1;2} that requires 1 action to cast (you needn't have it prepared).",
				"While holding the object, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier. If the spell requires {@status concentration}, the creature must concentrate. The spell stays in the object until it's been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again to store a spell in an object."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
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
			"className": "Artificer",
			"classSource": "TCE",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Magic Item Savant",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 14,
			"entries": [
				"At 14th level, your skill with magic items deepens more:",
				{
					"type": "list",
					"items": [
						"You can attune to up to five magic items at once.",
						"You ignore all class, race, spell, and level requirements on attuning to or using a magic item."
					]
				}
			]
		},
		{
			"name": "Artificer Specialist Feature",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 15,
			"entries": [
				"At 15th level, you gain a feature granted by your Artificer Specialist choice."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
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
			"className": "Artificer",
			"classSource": "TCE",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Magic Item Master",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 18,
			"entries": [
				"Starting at 18th level, you can attune to up to six magic items at once."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
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
			"className": "Artificer",
			"classSource": "TCE",
			"level": 19,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 19th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Soul of Artifice",
			"source": "TCE",
			"page": 9,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 54
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"level": 20,
			"entries": [
				"At 20th level, you develop a mystical connection to your magic items, which you can draw on for protection:",
				{
					"type": "list",
					"items": [
						"You gain a +1 bonus to all saving throws per magic item you are currently attuned to.",
						"If you're reduced to 0 hit points but not killed outright, you can use your reaction to end one of your artificer infusions, causing you to drop to 1 hit point instead of 0."
					]
				}
			]
		},
		{
			"name": "Artificer Specialist",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 1,
			"entries": [
				"At 1st level, you choose the type of Artificer Specialist you are from the list of available specialisations. Your choice grants you features at 1st level and again at 3rd, 9th, 14th, and 17th level."
			]
		},
		{
			"name": "Magic Item Analysis",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 1,
			"entries": [
				"Starting at 1st level, your understanding of magic items allows you to analyze and understand their secrets. You know the artificer spells {@spell detect magic} and {@spell identify}, and you can cast them as rituals. You don't need to provide a material component when casting {@spell identify} with this class feature."
			]
		},
		{
			"name": "Tool Expertise",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 2,
			"entries": [
				"Starting at 2nd level, your proficiency bonus is doubled for any ability check you make that uses any of the tool proficiencies you gain from this class."
			]
		},
		{
			"name": "Wondrous Invention",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 2,
			"entries": [
				"At 2nd level, you gain the use of a magic item that you have crafted. Choose the item from the list of 2nd-level items below. Crafting an item is a difficult task. When you gain a magic item from this feature, it reflects long hours of study, tinkering, and experimentation that allowed you to finally complete the item. You are assumed to work on this item in your leisure time and to finish it when you level up. You complete another item of your choice when you reach certain levels in this class: 5th, 10th, 15th, and 20th level. The item you choose must be on the list for your current artificer level or a lower level. These magic items are detailed in the Dungeon Master's Guide.",
				{
					"type": "entries",
					"name": "2nd Level",
					"entries": [
						"{@item Bag of holding}, {@item cap of water breathing}, {@item driftglobe}, {@item goggles of night}, {@item sending stones}"
					]
				},
				{
					"type": "entries",
					"name": "5th Level",
					"entries": [
						"{@item Alchemy jug}, {@item helm of comprehending languages}, {@item lantern of revealing}, {@item ring of swimming}, {@item robe of useful items}, {@item rope of climbing}, {@item wand of magic detection}, {@item wand of secrets}"
					]
				},
				{
					"type": "entries",
					"name": "10th Level",
					"entries": [
						"{@item Bag of beans}, {@item chime of opening}, {@item decanter of endless water}, {@item eyes of minute seeing}, {@item folding boat}, {@item Heward's handy haversack}"
					]
				},
				{
					"type": "entries",
					"name": "15th Level",
					"entries": [
						"{@item Boots of striding and springing}, {@item bracers of archery}, {@item brooch of shielding}, {@item broom of flying}, {@item hat of disguise}, {@item slippers of spider climbing}"
					]
				},
				{
					"type": "entries",
					"name": "20th Level",
					"entries": [
						"{@item Eyes of the eagle}, {@item gem of brightness}, {@item gloves of missile snaring}, {@item gloves of swimming and climbing}, {@item ring of jumping}, {@item ring of mind shielding}, {@item wings of flying}"
					]
				}
			]
		},
		{
			"name": "Masterwork Feature",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 3,
			"entries": [
				"At 3rd level, you gain a feature from your Artificer Specialist."
			]
		},
		{
			"name": "Spellcasting",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 3,
			"entries": [
				"As part of your study of magic, you gain the ability to cast spells at 3rd level. The spells you learn are limited in scope, primarily concerned with modifying creatures and objects or creating items.",
				{
					"type": "entries",
					"name": "Spell Slots",
					"entries": [
						"The Artificer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest."
					]
				},
				{
					"type": "entries",
					"name": "Spells Known of 1st Level and Higher",
					"entries": [
						"You know three 1st-level spells of your choice from the artificer spell list (which appears at the end of this document). The Spells Known column of the Artificer table shows when you learn more artificer spells of your choice from this feature. Each of these spells must be of a level for which you have spell slots on the Artificer table. Additionally, when you gain a level in this class, you can choose one of the artificer spells you know from this feature and replace it with another spell from the artificer spell list. The new spell must also be of a level for which you have spell slots on the Artificer table."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.",
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
					"name": "Spellcasting Focus",
					"entries": [
						"You can use an {@item arcane focus|phb} as a spellcasting focus for your artificer spells. See chapter 5, \"Equipment,\" in the Player's Handbook for various arcane focus options."
					]
				}
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 4,
			"entries": [
				"When you reach 4th, 8th, 12th, 16th, and 18th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature."
			]
		},
		{
			"name": "Infuse Magic",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 4,
			"entries": [
				"Starting at 4th level, you gain the ability to channel your artificer spells into objects for later use. When you cast an artificer spell with a casting time of 1 action, you can increase its casting time to 1 minute. If you do so and hold a nonmagical item throughout the casting, you expend a spell slot, but none of the spell's effects occur. Instead, the spell transfers into that item for later use if the item doesn't already contain a spell from this feature.",
				"Any creature holding the item thereafter can use an action to activate the spell if the creature has an Intelligence score of at least 6. The spell is cast using your spellcasting ability, targeting the creature that activates the item. If the spell targets more than one creature, the creature that activates the item selects the additional targets. If the spell has an area of effect, it is centered on the item. If the spell's range is self, it targets the creature that activates the item.",
				"When you infuse a spell in this way, it must be used within 8 hours. After that time, its magic fades and is wasted. You can have a limited number of infused spells at the same time. The number equals your Intelligence modifier."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Superior Attunement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 5,
			"entries": [
				"At 5th level, your superior understanding of magic items allows you to master their use. You can now attune to up to four, rather than three, magic items at a time. At 15th level, this limit increases to five magic items."
			]
		},
		{
			"name": "Wondrous Invention",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 5,
			"entries": [
				"At 5th level, you craft another item from your Wondrous Invention feature."
			]
		},
		{
			"name": "Mechanical Servant",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 6,
			"entries": [
				"At 6th level, your research and mastery of your craft allow you to produce a mechanical servant. The servant is a construct that obeys your commands without hesitation and functions in combat to protect you. Though magic fuels its creation, the servant is not magical itself. You are assumed to have been working on the servant for quite some time, finally finishing it during a short or long rest after you reach 6th level.",
				"Select a Large beast with a challenge rating of 2 or less. The servant uses that beast's game statistics, but it can look however you like, as long as its form is appropriate for its statistics. It has the following modifications:",
				{
					"type": "list",
					"items": [
						"It is a construct instead of a beast.",
						"It can't be {@condition charmed}.",
						"It is immune to poison damage and the {@condition poisoned} condition.",
						"It gains {@sense darkvision} with a range of 60 feet if it doesn't have it already.",
						"It understands the languages you can speak when you create it, but it can't speak.",
						"If you are the target of a melee attack and the servant is within 5 feet of the attacker, you can use your reaction to command the servant to respond, using its reaction to make a melee attack against the attacker."
					]
				},
				"The servant obeys your orders to the best of its ability. In combat, it rolls its own initiative and acts on its own.",
				"If the servant is killed, it can be returned to life via normal means, such as with the {@spell revivify} spell. In addition, over the course of a long rest, you can repair a slain servant if you have access to its body. It returns to life with 1 hit point at the end of the rest. If the servant is beyond recovery, you can build a new one with one week of work (eight hours each day) and 1,000 gp of raw materials."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 8,
			"entries": [
				"At 8th level, you gain another Ability Score Improvement."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Masterwork Feature",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 9,
			"entries": [
				"At 9th level, you gain a feature from your Artificer Specialist."
			]
		},
		{
			"name": "Wondrous Invention",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 10,
			"entries": [
				"At 10th level, you craft another item from your Wondrous Invention feature."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 12,
			"entries": [
				"At 12th level, you gain another Ability Score Improvement."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Masterwork Feature",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature from your Artificer Specialist."
			]
		},
		{
			"name": "Superior Attunement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 15,
			"entries": [
				"Starting at 15th level, you can attune to up to five magic items."
			]
		},
		{
			"name": "Wondrous Invention",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 15,
			"entries": [
				"At 15th level, you craft another item from your Wondrous Invention feature."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 16,
			"entries": [
				"At 16th level, you gain another Ability Score Improvement."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Masterwork Feature",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 17,
			"entries": [
				"At 17th level, you gain a feature from your Artificer Specialist."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 18,
			"entries": [
				"At 18th level, you gain another Ability Score Improvement."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 18,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 18th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Soul of Artifice",
			"source": "UAArtificer",
			"page": 1,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"level": 20,
			"entries": [
				"At 20th level, your understanding of magic items is unmatched, allowing you to mingle your soul with items linked to you. You can attune to up to six magic items at once. In addition, you gain a +1 bonus to all saving throws per magic item you are currently attuned to."
			]
		},
		{
			"name": "Magical Tinkering",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 1,
			"entries": [
				"At 1st level, you learn how to invest a spark of magic in objects that would otherwise be mundane. To use this ability, you must have {@item thieves' tools|PHB}, {@item tinker's tools|PHB}, or other {@item artisan's tools|PHB} in hand. You then touch a Tiny nonmagical object as an action and give it one of the following magical properties of your choice:",
				{
					"type": "list",
					"items": [
						"The object sheds bright light in a 5-foot radius and dim light for an additional 5 feet.",
						"Whenever tapped by a creature, the object emits a recorded message that can be heard up to 10 feet away. You utter the message when you bestow this property on the object, and the recording can be no more than 6 seconds long.",
						"The object continuously emits your choice of an odor or a nonverbal sound (wind, waves, chirping, or the like). The chosen phenomenon is perceivable up to 10 feet away.",
						"A static visual effect appears on one of the object's surfaces. This effect can be a picture, up to 25 words of text, lines and shapes, or a mixture of these elements, as you like."
					]
				},
				"The chosen property lasts indefinitely. As an action, you can touch the object and end the property early.",
				"You can give the magic of this feature to multiple objects, touching one object each time you use the feature, and a single object can bear only one of the properties at a time. The maximum number of objects you can affect with the feature at one time is equal to your Intelligence modifier (minimum of one object). If you try to exceed your maximum, the oldest property immediately ends, and then the new property applies."
			]
		},
		{
			"name": "Spellcasting",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 1,
			"entries": [
				"You have studied the workings of magic, how to channel it through objects, and how to awaken it within them. As a result, you have gained a limited ability to cast spells. To observers, you don't appear to be casting spells in a conventional way; you look as if you're producing wonders through various items.",
				{
					"type": "entries",
					"name": "Tools Required",
					"entries": [
						"You produce your artificer spell effects through your tools. You must have a spellcasting focus\u2014specifically {@item thieves' tools|phb} or some kind of artisan's tool\u2014in hand when you cast any spell with this Spellcasting feature. You must be proficient with the tool to use it in this way. See chapter 5, \"{@book Equipment|phb|5|tools},\" in the Player's Handbook for descriptions of these tools.",
						"After you gain the Infuse Item feature at 2nd level, you can also use any item bearing one of your infusions as a spellcasting focus."
					]
				},
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"At 1st level, you know two cantrips of your choice from the {@filter artificer spell list|spells|class=artificer (uaar)}. At higher levels, you learn additional artificer cantrips of your choice, as shown in the Cantrips Known column of the Artificer table.",
						"When you gain a level in this class, you can replace one of the artificer cantrips you know with another cantrip from the artificer spell list."
					]
				},
				{
					"type": "entries",
					"name": "Preparing and Casting Spells",
					"entries": [
						"The Artificer table shows how many spell slots you have to cast your artificer spells. To cast one of your artificer spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of artificer spells that are available for you to cast, choosing from the {@filter artificer spell list|spells|class=artificer (uaar)}. When you do so, choose a number of artificer spells equal to your Intelligence modifier + half your artificer level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 5th-level artificer, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell {@spell cure wounds}, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of artificer spells requires time spent in tinkering with your spellcasting focuses: at least 1 minute per spell level for each spell on your list."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Intelligence is your spellcasting ability for your artificer spells; your understanding of the theory behind magic allows you to wield these spells with superior skill. You use your Intelligence whenever an artificer spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for an artificer spell you cast and when making an attack roll with one.",
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
						"You can cast an artificer spell as a ritual if that spell has the ritual tag and you have the spell prepared."
					]
				},
				{
					"type": "inset",
					"name": "The Magic of Artifice",
					"entries": [
						"As an artificer, you use tools when you cast your spells. When describing your spellcasting, think about how you're using a tool to perform the spell effect. If you cast {@spell cure wounds} using {@item alchemist's supplies|PHB}, you could be quickly producing a salve. If you cast it using {@item tinker's tools|phb}, you might have a miniature mechanical spider that binds wounds. When you cast {@spell poison spray}, you could fling foul chemicals or use a wand that spits venom. The effect of the spell is the same as for a spellcaster of any other class, but your method of spellcasting is special.",
						"The same principle applies when you prepare your spells. As an artificer, you don't study a spellbook or pray to prepare your spells. Instead, you work with your tools and create the specialized items you'll use to produce your effects. If you replace {@spell cure wounds} with {@spell shocking grasp}, you might be breaking down the device you used to heal and creating an offensive item in its place\u2014perhaps a gauntlet that lets you channel a surge of energy.",
						"Such details don't limit you in any way or provide you with any benefit. You don't have to justify how you're using tools to cast a spell. But describing your spellcasting creatively is a fun way to distinguish yourself from other spellcasters."
					]
				}
			]
		},
		{
			"name": "Infuse Item",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 2,
			"entries": [
				"At 2nd level, you gain the ability to imbue mundane items with certain magical infusions. The magic items you create with this feature are effectively prototypes of permanent items.",
				{
					"type": "entries",
					"name": "Infusions Known",
					"entries": [
						"When you gain this feature, pick three artificer infusions to learn, choosing from the \"{@filter Artificer Infusions|optionalfeatures|feature type=ai|source=UAArtificerRevisited}\" section at the end of the class's description. You learn additional infusions of your choice when you reach certain levels in this class, as shown in the Infusions Known column of the Artificer table.",
						"Whenever you gain a level in this class, you can replace one of the artificer infusions you learned with a new one."
					]
				},
				{
					"type": "entries",
					"name": "Infusing an Item",
					"entries": [
						"Whenever you finish a long rest, you can touch a nonmagical object and imbue it with one of your artificer infusions, turning it into a magic item. An infusion works on only certain kinds of objects, as specified in the infusion's description. If the item requires attunement, you can attune yourself to it the instant you infuse the item, or you can forgo attunement so that someone else can attune to the item. If you decide to attune to the item later, you must do so using the normal process for attunement (see \"{@book Attunement|dmg|7|attunement}\" in the Dungeon Master's Guide, page 136).",
						"Your infusion remains in an item indefinitely, but when you die, the infusion vanishes after a number of days have passed equal to your Intelligence modifier (minimum of 1 day). The infusion also vanishes if you give up your knowledge of the infusion for another one.",
						"You can infuse more than one nonmagical object at the end of a long rest; the maximum number of objects appears in the Infused Items column of the Artificer table. You must touch each of the objects, and each of your infusions can be in only one object at a time. If you try to exceed your maximum number of infusions, the oldest infusion immediately ends, and then the new infusion applies."
					]
				},
				{
					"type": "inset",
					"name": "Artificer Infusions",
					"entries": [
						"Artificers have invented numerous magical infusions that rapidly create magic items. To the untrained, artificers seem like wonderworkers, accomplishing in hours what others need weeks to complete.",
						"The description of each infusion tells you the type of item that can receive it. The description also tells you if the resulting magic item requires attunement.",
						"Some infusions specify a minimum artificer level. You can't learn such an infusion until you are at least that level.",
						"Unless an infusion's description says otherwise, you can't learn the infusion more than once.",
						"See the {@filter Class Feature Options page|optionalfeatures|feature type=ai|source=UAArtificerRevisited} for the full list of infusions."
					]
				}
			]
		},
		{
			"name": "Artificer Specialist",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 3,
			"entries": [
				"At 3rd level, you choose the type of specialist you are: Alchemist, Archivist, or Artillerist, or Battle Smith, each of which is detailed at the end of the class's description. Your choice grants you features at 3rd level and again at 6th and 14th level.",
				{
					"type": "inset",
					"name": "Variant: Crafting",
					"entries": [
						"An artificer subclass makes you more efficient at crafting certain items. The feature you get from your subclass works whether you're using the crafting rules in the {@book Player's Handbook|phb|8|crafting}, {@book Dungeon Master's Guide|dmg|6|crafting a magic item}, or {@book Xanathar's Guide to Everything|xge|2|crafting an item}."
					]
				}
			]
		},
		{
			"name": "Tool Expertise",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 3,
			"entries": [
				"Starting at 3rd level, your proficiency bonus is doubled for any ability check you make that uses your proficiency with a tool."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
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
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Arcane Armament",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 5,
			"entries": [
				"Starting at 5th level, you can attack twice, rather than once, whenever you take the {@action Attack} action on your turn, but one of the attacks must be made with a magic weapon, the magic of which you use to propel the attack."
			]
		},
		{
			"name": "Artificer Specialist Feature",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature granted by your Artificer Specialist choice."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
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
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "The Right Cantrip for the Job",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 10,
			"entries": [
				"At 10th level, you gain the ability to make sure you have the right magical tool for a job. Whenever you finish a short or long rest, you can replace one of the artificer cantrips you know with another cantrip from the {@filter artificer spell list|spells|class=artificer (uaar)}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
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
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Artificer Specialist Feature",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature granted by your Artificer Specialist choice."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
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
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Spell-Storing Item",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 18,
			"entries": [
				"When you reach 18th level, you learn how to store a spell in an object for repeated use. Whenever you finish a long rest, you can touch one {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} or an item that you can use as a spellcasting focus and store a spell in it, choosing one 1st- or 2nd-level spell from the {@filter artificer spell list|spells|class=artificer (uaar)|cast time=action|level=1;2} that requires 1 action to cast (you don't need to have the spell prepared). With the object in hand, a creature can take an action to produce the spell's effect from it, using your spellcasting ability modifier.",
				"The spell stays in the object until it has been used a number of times equal to twice your Intelligence modifier (minimum of twice) or until you use this feature again."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
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
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 19,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 19th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Soul of Artifice",
			"source": "UAArtificerRevisited",
			"page": 1,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"level": 20,
			"entries": [
				"At 20th level, your understanding of magic items is unmatched, allowing you to mingle your soul with items linked to you. You can attune to up to six magic items at once. In addition, you gain a +1 bonus to all saving throws per magic item you are currently attuned to."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Alchemist",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"An Alchemist is an expert at combining reagents to produce mystical effects. Alchemists use their creations to give life and to leech it away. Alchemy is the oldest of artificer traditions, and its versatility has long been valued during times of war and peace.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tool Proficiency|Artificer|TCE|Alchemist|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Alchemist Spells|Artificer|TCE|Alchemist|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Experimental Elixir|Artificer|TCE|Alchemist|TCE|3"
				}
			]
		},
		{
			"name": "Alchemist Spells",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Alchemist Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell healing word}, {@spell ray of sickness}"
						],
						[
							"5th",
							"{@spell flaming sphere}, {@spell Melf's acid arrow}"
						],
						[
							"9th",
							"{@spell gaseous form}, {@spell mass healing word}"
						],
						[
							"13th",
							"{@spell blight}, {@spell death ward}"
						],
						[
							"17th",
							"{@spell cloudkill}, {@spell raise dead}"
						]
					]
				}
			]
		},
		{
			"name": "Experimental Elixir",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"Beginning at 3rd level, whenever you finish a long rest, you can magically produce an {@i experimental elixir} in an empty flask you touch. Roll on the Experimental Elixir table for the elixir's effect, which is triggered when someone drinks the elixir. As an action, a creature can drink the elixir or administer it to an {@condition incapacitated} creature.",
				"Creating an {@i experimental elixir} requires you to have {@item alchemist's supplies|PHB} on your person, and any elixir you create with this feature lasts until it is drunk or until the end of your next long rest.",
				"When you reach certain levels in this class, you can make more elixirs at the end of a long rest: two at 6th level and three at 15th level. Roll for each elixir's effect separately. Each elixir requires its own flask.",
				"You can create additional {@i experimental elixirs} by expending a spell slot of 1st level or higher for each one. When you do so, you use your action to create the elixir in an empty flask you touch, and you choose the elixir's effect from the Experimental Elixir table.",
				{
					"type": "table",
					"caption": "Experimental Elixir",
					"colLabels": [
						"d6",
						"Effect"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"{@b Healing}. The drinker regains a number of hit points equal to {@dice 2d4} + your Intelligence modifier."
						],
						[
							"2",
							"{@b Swiftness}. The drinker's walking speed increases by 10 feet for 1 hour."
						],
						[
							"3",
							"{@b Resilience}. The drinker gains a +1 bonus to AC for 10 minutes."
						],
						[
							"4",
							"{@b Boldness}. The drinker can roll a {@dice d4} and add the number rolled to every attack roll and saving throw they make for the next minute."
						],
						[
							"5",
							"{@b Flight}. The drinker gains a flying speed of 10 feet for 10 minutes."
						],
						[
							"6",
							"{@b Transformation}. The drinker's body is transformed as if by the {@spell alter self} spell. The drinker determines the transformation caused by the spell, the effects of which last for 10 minutes."
						]
					]
				}
			]
		},
		{
			"name": "Tool Proficiency",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you adopt this specialization at 3rd level, you gain proficiency with {@item alchemist's supplies|PHB}. If you already have this proficiency, you gain proficiency with one other type of {@item artisan's tools|PHB} of your choice."
			]
		},
		{
			"name": "Alchemical Savant",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 5,
			"header": 2,
			"entries": [
				"At 5th level, you develop masterful command of magical chemicals, enhancing the healing and damage you create through them. Whenever you cast a spell using your {@item alchemist's supplies|PHB} as the spellcasting focus, you gain a bonus to one roll of the spell. That roll must restore hit points or be a damage roll that deals acid, fire, necrotic, or poison damage, and the bonus equals your Intelligence modifier (minimum of +1)."
			]
		},
		{
			"name": "Restorative Reagents",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, you can incorporate restorative reagents into some of your works:",
				{
					"type": "list",
					"items": [
						"Whenever a creature drinks an {@i experimental elixir} you created, the creature gains temporary hit points equal to {@dice 2d6} + your Intelligence modifier (minimum of 1 temporary hit point).",
						"You can cast {@spell lesser restoration} without expending a spell slot and without preparing the spell, provided you use {@item alchemist's supplies|PHB} as the spellcasting focus. You can do so a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest."
					]
				}
			]
		},
		{
			"name": "Chemical Mastery",
			"source": "TCE",
			"page": 14,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 58
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Alchemist",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"By 15th level, you have been exposed to so many chemicals that they pose little risk to you, and you can use them to quickly end certain ailments:",
				{
					"type": "list",
					"items": [
						"You gain resistance to acid damage and poison damage, and you are immune to the {@condition poisoned} condition.",
						"You can cast {@spell greater restoration} and {@spell heal} without expending a spell slot, without preparing the spell, and without material components, provided you use {@item alchemist's supplies|PHB} as the spellcasting focus. Once you cast either spell with this feature, you can't cast that spell with it again until you finish a long rest."
					]
				}
			]
		},
		{
			"name": "Armorer",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"An artificer who specializes as an Armorer modifies armor to function almost like a second skin. The armor is enhanced to hone the artificer's magic, unleash potent attacks, and generate a formidable defense. The artificer bonds with this armor, becoming one with it even as they experiment with it and refine its magical capabilities.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Trade|Artificer|TCE|Armorer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Armorer Spells|Artificer|TCE|Armorer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Armor|Artificer|TCE|Armorer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Armor Model|Artificer|TCE|Armorer|TCE|3"
				}
			]
		},
		{
			"name": "Dampening Field",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"type": "item",
			"entries": [
				"You have advantage on Dexterity ({@skill Stealth}) checks. If the armor normally imposes disadvantage on such checks, the advantage and disadvantage cancel each other, as normal."
			]
		},
		{
			"name": "Defensive Field",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"type": "item",
			"entries": [
				"As a bonus action, you can gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Lightning Launcher",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"type": "item",
			"entries": [
				"A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals {@damage 1d6} lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra {@damage 1d6} lightning damage to that target."
			]
		},
		{
			"name": "Powered Steps",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"type": "item",
			"entries": [
				"Your walking speed increases by 5 feet."
			]
		},
		{
			"name": "Thunder Gauntlets",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"type": "item",
			"entries": [
				"Each of the armor's gauntlets counts as a simple melee weapon while you aren't holding anything in it, and it deals {@damage 1d8} thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else."
			]
		},
		{
			"name": "Arcane Armor",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"Your metallurgical pursuits have led to you making armor a conduit for your magic. As an action, you can turn a suit of armor you are wearing into Arcane Armor, provided you have {@item smith's tools|PHB} in hand.",
				"You gain the following benefits while wearing this armor:",
				{
					"type": "list",
					"items": [
						"If the armor normally has a Strength requirement, the arcane armor lacks this requirement for you.",
						"You can use the arcane armor as a spellcasting focus for your artificer spells.",
						"The armor attaches to you and can't be removed against your will. It also expands to cover your entire body, although you can retract or deploy the helmet as a bonus action. The armor replaces any missing limbs, functioning identically to a limb it replaces.",
						"You can doff or don the armor as an action. The armor continues to be Arcane Armor until you don another suit of armor or you die."
					]
				}
			]
		},
		{
			"name": "Armor Model",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"You can customize your Arcane Armor. When you do so, choose one of the following armor models: Guardian or Infiltrator. The model you choose gives you special benefits while you wear it.",
				"Each model includes a special weapon. When you attack with that weapon, you can add your Intelligence modifier, instead of Strength or Dexterity, to the attack and damage rolls.",
				"You can change the armor's model whenever you finish a short or long rest, provided you have {@item smith's tools|PHB} in hand.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Guardian",
							"entries": [
								"You design your armor to be in the front line of conflict. It has the following features:",
								{
									"type": "list",
									"style": "list-hang-notitle",
									"items": [
										{
											"type": "refSubclassFeature",
											"subclassFeature": "Thunder Gauntlets|Artificer|TCE|Armorer|TCE|3"
										},
										{
											"type": "refSubclassFeature",
											"subclassFeature": "Defensive Field|Artificer|TCE|Armorer|TCE|3"
										}
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Infiltrator",
							"entries": [
								"You customize your armor for subtle undertakings. It has the following features:",
								{
									"type": "list",
									"style": "list-hang-notitle",
									"items": [
										{
											"type": "refSubclassFeature",
											"subclassFeature": "Lightning Launcher|Artificer|TCE|Armorer|TCE|3"
										},
										{
											"type": "refSubclassFeature",
											"subclassFeature": "Powered Steps|Artificer|TCE|Armorer|TCE|3"
										},
										{
											"type": "refSubclassFeature",
											"subclassFeature": "Dampening Field|Artificer|TCE|Armorer|TCE|3"
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Armorer Spells",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"You always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Armorer Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell magic missile}, {@spell thunderwave}"
						],
						[
							"5th",
							"{@spell mirror image}, {@spell shatter}"
						],
						[
							"9th",
							"{@spell hypnotic pattern}, {@spell lightning bolt}"
						],
						[
							"13th",
							"{@spell fire shield}, {@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell passwall}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Tools of the Trade",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"You gain proficiency with heavy armor. You also gain proficiency with {@item smith's tools|PHB}. If you already have this tool proficiency, you gain proficiency with one other type of {@item artisan's tools|PHB} of your choice."
			]
		},
		{
			"name": "Extra Attack",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 5,
			"header": 2,
			"entries": [
				"{@i 5th-level Armorer feature}",
				"You can attack twice, rather than once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Armor Modifications",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Armorer feature}",
				"You learn how to use your artificer infusions to specially modify your Arcane Armor. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, helmet, and the armor's special weapon. Each of those items can bear one of your infusions, and the infusions transfer over if you change your armor's model with the Armor Model feature. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your Arcane Armor."
			]
		},
		{
			"name": "Perfected Armor",
			"source": "TCE",
			"page": 15,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Armorer feature}",
				"Your Arcane Armor gains additional benefits based on its model, as shown below.",
				{
					"type": "entries",
					"name": "Guardian",
					"entries": [
						"When a Huge or smaller creature you can see ends its turn within 30 feet of you, you can use your reaction to magically force it to make a Strength saving throw against your spell save DC. On a failed save, you pull the creature up to 25 feet directly to an unoccupied space. If you pull the target to a space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.",
						"You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest."
					]
				},
				{
					"type": "entries",
					"name": "Infiltrator",
					"entries": [
						"Any creature that takes lightning damage from your Lightning Launcher glimmers with magical light until the start of your next turn. The glimmering creature sheds dim light in a 5-foot radius, and it has disadvantage on attack rolls against you, as the light jolts it if it attacks you. In addition, the next attack roll against it has advantage, and if that attack hits, the target takes an extra {@damage 1d6} lightning damage."
					]
				}
			]
		},
		{
			"name": "Artillerist",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"An Artillerist specializes in using magic to hurl energy, projectiles, and explosions on a battlefield. This destructive power was valued by all the armies of the Last War. Now that the war is over, some members of this specialization have sought to build a more peaceful world by using their powers to fight the resurgence of strife in Khorvaire.",
				"The gnome artificer Vi, an unlikely yet key member of House Cannith's warforged project, has been especially vocal about making things right: \"It's about time we fixed things instead of blowing them all to hell.\"",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tool Proficiency|Artificer|TCE|Artillerist|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Artillerist Spells|Artificer|TCE|Artillerist|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eldritch Cannon|Artificer|TCE|Artillerist|TCE|3"
				}
			]
		},
		{
			"name": "Artillerist Spells",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Artillerist Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Artillerist Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell shield}, {@spell thunderwave}"
						],
						[
							"5th",
							"{@spell scorching ray}, {@spell shatter}"
						],
						[
							"9th",
							"{@spell fireball}, {@spell wind wall}"
						],
						[
							"13th",
							"{@spell ice storm}, {@spell wall of fire}"
						],
						[
							"17th",
							"{@spell cone of cold}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Eldritch Cannon",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn how to create a magical cannon. Using {@item woodcarver's tools|PHB} or {@item smith's tools|PHB}, you can take an action to magically create a Small or Tiny eldritch cannon in an unoccupied space on a horizontal surface within 5 feet of you. A Small eldritch cannon occupies its space, and a Tiny one can be held in one hand.",
				"Once you create a cannon, you can't do so again until you finish a long rest or until you expend a spell slot of 1st level or higher. You can have only one cannon at a time and can't create one while your cannon is present.",
				"The cannon is a magical object. Regardless of size, the cannon has an AC of 18 and a number of hit points equal to five times your artificer level. It is immune to poison damage and psychic damage, and all conditions. If it is forced to make an ability check or a saving throw, treat all its ability scores as 10 (+0). If the {@spell mending} spell is cast on it, it regains {@dice 2d6} hit points. It disappears if it is reduced to 0 hit points or after 1 hour. You can dismiss it early as an action.",
				"When you create the cannon, you determine its appearance and whether it has legs. You also decide which type it is, choosing from the options on the Eldritch Cannons table. On each of your turns, you can take a bonus action to cause the cannon to activate if you are within 60 feet of it. As part of the same bonus action, you can direct the cannon to walk or climb up to 15 feet to an unoccupied space, provided it has legs.",
				{
					"type": "table",
					"caption": "Eldritch Cannons",
					"colLabels": [
						"Cannon",
						"Activation"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"Flamethrower",
							"The cannon exhales fire in an adjacent 15-foot cone that you designate. Each creature in that area must make a Dexterity saving throw against your spell save DC, taking {@damage 2d8} fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
						],
						[
							"Force Ballista",
							"Make a ranged spell attack, originating from the cannon, at one creature or object within 120 feet of it. On a hit, the target takes {@damage 2d8} force damage, and if the target is a creature, it is pushed up to 5 feet away from the cannon."
						],
						[
							"Protector",
							"The cannon emits a burst of positive energy that grants itself and each creature of your choice within 10 feet of it a number of temporary hit points equal to {@damage 1d8} + your Intelligence modifier (minimum of +1)."
						]
					]
				}
			]
		},
		{
			"name": "Tool Proficiency",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you adopt this specialization at 3rd level, you gain proficiency with {@item woodcarver's tools|PHB}. If you already have this proficiency, you gain proficiency with one other type of {@item artisan's tools|PHB} of your choice."
			]
		},
		{
			"name": "Arcane Firearm",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 5,
			"header": 2,
			"entries": [
				"At 5th level, you know how to turn a wand, staff, or rod into an arcane firearm, a conduit for your destructive spells. When you finish a long rest, you can use {@item woodcarver's tools|PHB} to carve special sigils into a wand, staff, or rod and thereby turn it into your arcane firearm. The sigils disappear from the object if you later carve them on a different item. The sigils otherwise last indefinitely.",
				"You can use your arcane firearm as a spellcasting focus for your artificer spells. When you cast an artificer spell through the firearm, roll a {@damage d8}, and you gain a bonus to one of the spell's damage rolls equal to the number rolled."
			]
		},
		{
			"name": "Explosive Cannon",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, every eldritch cannon you create is more destructive:",
				{
					"type": "list",
					"items": [
						"The cannon's damage rolls all increase by {@damage 1d8}.",
						"As an action, you can command the cannon to detonate if you are within 60 feet of it. Doing so destroys the cannon and forces each creature within 20 feet of it to make a Dexterity saving throw against your spell save DC, taking {@damage 3d8} force damage on a failed save or half as much damage on a successful one."
					]
				}
			]
		},
		{
			"name": "Fortified Position",
			"source": "TCE",
			"page": 17,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 59
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Artillerist",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you're a master at forming well-defended emplacements using Eldritch Cannon:",
				{
					"type": "list",
					"items": [
						"You and your allies have half cover while within 10 feet of a cannon you create with Eldritch Cannon, as a result of a shimmering field of magical protection that the cannon emits.",
						"You can now have two cannons at the same time. You can create two with the same action (but not the same spell slot), and you can activate both of them with the same bonus action. You determine whether the cannons are identical to each other or different. You can't create a third cannon while you have two."
					]
				}
			]
		},
		{
			"name": "Battle Smith",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Armies require protection, and someone has to put things back together if defenses fail. A combination of protector and medic, a Battle Smith is an expert at defending others and repairing both material and personnel. To aid in their work, Battle Smiths are usually accompanied by a steel defender, a protective companion of their own creation. Many soldiers tell stories of nearly dying before being saved by a Battle Smith and a steel defender.",
				"Battle Smiths played a key role in House Cannith's work on battle constructs and the original warforged, and after the Last War, these artificers led efforts to aid those who were injured in the war's horrific battles.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tool Proficiency|Artificer|TCE|Battle Smith|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Battle Smith Spells|Artificer|TCE|Battle Smith|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Battle Ready|Artificer|TCE|Battle Smith|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Steel Defender|Artificer|TCE|Battle Smith|TCE|3"
				}
			]
		},
		{
			"name": "Battle Ready",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you reach 3rd level, your combat training and your experiments with magic have paid off in two ways:",
				{
					"type": "list",
					"items": [
						"You gain proficiency with martial weapons.",
						"When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity modifier, for the attack and damage rolls."
					]
				}
			]
		},
		{
			"name": "Battle Smith Spells",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Battle Smith Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell heroism}, {@spell shield}"
						],
						[
							"5th",
							"{@spell branding smite}, {@spell warding bond}"
						],
						[
							"9th",
							"{@spell aura of vitality}, {@spell conjure barrage}"
						],
						[
							"13th",
							"{@spell aura of purity}, {@spell fire shield}"
						],
						[
							"17th",
							"{@spell banishing smite}, {@spell mass cure wounds}"
						]
					]
				}
			]
		},
		{
			"name": "Steel Defender",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"By 3rd level, your tinkering has borne you a faithful companion, a {@creature steel defender|tce}. It is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the steel defender stat block, which uses your proficiency bonus (PB) in several places. You determine the creature's appearance and whether it has two legs or four; your choice has no effect on its game statistics.",
				"In combat, the defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the defender can take any action of its choice, not just {@action Dodge}.",
				"If the {@spell mending} spell is cast on it, it regains {@dice 2d6} hit points. If it has died within the last hour, you can use your {@item smith's tools|PHB} as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The steel defender returns to life after 1 minute with all its hit points restored.",
				"At the end of a long rest, you can create a new steel defender if you have your {@item smith's tools|PHB} with you. If you already have a steel defender from this feature, the first one immediately perishes. The defender also perishes if you die."
			]
		},
		{
			"name": "Tool Proficiency",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you adopt this specialization at 3rd level, you gain proficiency with {@item smith's tools|PHB}. If you already have this proficiency, you gain proficiency with one other type of {@item artisan's tools|PHB} of your choice."
			]
		},
		{
			"name": "Extra Attack",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 5,
			"header": 2,
			"entries": [
				"Starting at 5th level, you can attack twice, rather than once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Arcane Jolt",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 9,
			"header": 2,
			"entries": [
				"At 9th level, you learn new ways to channel arcane energy to harm or heal. When either you hit a target with a magic weapon attack or your steel defender hits a target, you can channel magical energy through the strike to create one of the following effects:",
				{
					"type": "list",
					"items": [
						"The target takes an extra {@damage 2d6} force damage.",
						"Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring {@dice 2d6} hit points to it."
					]
				},
				"You can use this energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Improved Defender",
			"source": "TCE",
			"page": 18,
			"otherSources": [
				{
					"source": "ERLW",
					"page": 60
				}
			],
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Battle Smith",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your Arcane Jolt and steel defender become more powerful:",
				{
					"type": "list",
					"items": [
						"The extra damage and the healing of your Arcane Jolt both increase to {@damage 4d6}.",
						"Your steel defender gains a +2 bonus to Armor Class.",
						"Whenever your steel defender uses its Deflect Attack, the attacker takes force damage equal to {@damage 1d4} + your Intelligence modifier."
					]
				}
			]
		},
		{
			"name": "Armorer",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"entries": [
				"An artificer who specializes as an Armorer modifies armor to function almost like a second skin. The armor is enhanced to hone the artificer's magic, unleash potent attacks, and generate a formidable defense. The artificer bonds with this armor, becoming one with it even as they experiment with it and refine its magical capabilities.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Trade|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Armorer Spells|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Power Armor|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Armor Model|Artificer|TCE|Armorer (UA)|UA2020SubclassesPt3|3"
				}
			]
		},
		{
			"name": "Armor Model",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"You can customize your power armor. When you do so, choose one of the following armor models: guardian or infiltrator. The model you choose gives you special benefits while you wear it.",
				"Each model includes a special weapon. When you attack with that weapon, you can use your Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls.",
				"You can change your power armor's model whenever you finish a short or long rest, provided you have {@item smith's tools|PHB} in hand.",
				{
					"type": "entries",
					"name": "Guardian",
					"entries": [
						"You design your armor to be in the frontline of conflict. It has the following features:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Thunder Gauntlets",
									"entry": "Your armored fists each count as a simple melee weapon, and each deals {@damage 1d8} thunder damage on a hit. A creature hit by the gauntlet has disadvantage on attack rolls against targets other than you until the start of your next turn, as the armor magically emits a distracting pulse when the creature attacks someone else."
								},
								{
									"type": "item",
									"name": "Defensive Field",
									"entry": "You gain a bonus action that you can use on each of your turns to gain temporary hit points equal to your level in this class, replacing any temporary hit points you already have. You lose these temporary hit points if you doff the armor."
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Infiltrator",
					"entries": [
						"You customize your armor for subtle undertakings. It has the following features:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Lightning Launcher",
									"entry": "A gemlike node appears on one of your armored fists or on the chest (your choice). It counts as a simple ranged weapon, with a normal range of 90 feet and a long range of 300 feet, and it deals {@damage 1d6} lightning damage on a hit. Once on each of your turns when you hit a creature with it, you can deal an extra {@damage 1d6} lightning damage to that target."
								},
								{
									"type": "item",
									"name": "Powered Steps",
									"entry": "Your walking speed increases by 5 feet."
								},
								{
									"type": "item",
									"name": "Second Skin",
									"entry": "The armor's weight is negligible, and it becomes formfitting and wearable under clothing. If the armor normally imposes disadvantage on Dexterity ({@skill Stealth}) checks, the power armor doesn't."
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Armorer Spells",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"You always have certain spells prepared after you reach particular levels in this class, as shown in the Armorer Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Armorer Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell magic missile}, {@spell shield}"
						],
						[
							"5th",
							"{@spell mirror image}, {@spell shatter}"
						],
						[
							"9th",
							"{@spell hypnotic pattern}, {@spell lightning bolt}"
						],
						[
							"13th",
							"{@spell fire shield}, {@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell passwall}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Power Armor",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"Your metallurgical pursuits have led to you making armor a conduit for your artificer magic. As an action, you can turn a suit of heavy armor you are wearing into power armor, provided you have {@item smith's tools|PHB} in hand.",
				"You gain the following benefits while wearing the power armor:",
				{
					"type": "list",
					"items": [
						"If the armor normally has a Strength requirement, the power armor lacks this requirement for you.",
						"You can use the power armor as a spellcasting focus for your artificer spells.",
						"The power armor attaches to you and can't be removed against your will. It also expands to cover your entire body, and it replaces any missing limbs, functioning identically to a body part it is replacing."
					]
				},
				"The armor continues to be power armor until you doff it, you don another suit of armor, or you die."
			]
		},
		{
			"name": "Tools of the Trade",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Armorer feature}",
				"You gain proficiency with heavy armor. You also gain proficiency with {@item smith's tools|PHB}. If you already have this tool proficiency, you gain proficiency with one other type of {@item artisan's tools|PHB} of your choice."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 5,
			"header": 2,
			"entries": [
				"{@i 5th-level Armorer feature}",
				"You can attack twice, rather than once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Armor Modifications",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Armorer feature}",
				"You learn how to use your artificer infusions to specially modify the armor enhanced by your Power Armor feature. That armor now counts as separate items for the purposes of your Infuse Items feature: armor (the chest piece), boots, bracers, and a weapon. Each of those items can bear one of your infusions. In addition, the maximum number of items you can infuse at once increases by 2, but those extra items must be part of your power armor."
			]
		},
		{
			"name": "Perfected Armor",
			"source": "UA2020SubclassesPt3",
			"page": 1,
			"className": "Artificer",
			"classSource": "TCE",
			"subclassShortName": "Armorer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Armorer feature}",
				"Your power armor gains additional benefits based on its model, as shown below.",
				{
					"type": "entries",
					"name": "Guardian",
					"entries": [
						"Tinkering with your armor's energy system leads you to discover a powerful pulling force. When a creature you can see ends its turn within 30 feet of you, you can use your reaction to force the creature to succeed on a Strength saving throw against your spell save DC or be pulled up to 30 feet toward you to an unoccupied space. If you pull the target to space within 5 feet of you, you can make a melee weapon attack against it as part of this reaction.",
						"You can use this reaction a number of times equal to your Intelligence modifier (minimum of once). You regain all expended uses of it when you finish a long rest."
					]
				},
				{
					"type": "entries",
					"name": "Infiltrator",
					"entries": [
						"Any creature that takes lightning damage from your Lightning Launcher glimmers with light until the start of your next turn. The glimmering creature sheds dim light in a 5 foot radius, and the next attack roll against it by a creature other than you has advantage. If that attack hits, it deals an extra {@damage 1d6} lightning damage."
					]
				}
			]
		},
		{
			"name": "Alchemist",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 1,
			"entries": [
				"An alchemist is an expert at combining exotic reagents to produce a variety of materials, from healing draughts that can mend a wound in moments to clinging goo that slows creatures down.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Alchemist's Satchel|Artificer|UAArtificer|Alchemist|UAArtificer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Alchemical Formula|Artificer|UAArtificer|Alchemist|UAArtificer|1"
				}
			]
		},
		{
			"name": "Alchemical Formula",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn three Alchemical Formula options: Alchemical Fire, Alchemical Acid, and one other option of your choice. You learn an additional formula of your choice at 3rd, 9th, 14th, and 17th levels.",
				"To use any of these options, your Alchemist's Satchel must be within reach.",
				"If an Alchemical Formula option requires a saving throw, the DC is 8 + your proficiency bonus + your Intelligence modifier.",
				{
					"type": "options",
					"count": 3,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Alchemical Fire|UAArtificer"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Alchemical Acid|UAArtificer"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Healing Draught|UAArtificer"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Smoke Stick|UAArtificer"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Swift Step Draught|UAArtificer"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Tanglefoot|UAArtificer"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Thunderstone|UAArtificer"
						}
					]
				}
			]
		},
		{
			"name": "Alchemist's Satchel",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you craft an Alchemist's Satchel, a bag of reagents that you use to create a variety of concoctions. The bag and its contents are both magical, and this magic allows you to pull out exactly the right materials you need for your Alchemical Formula options, described below. After you use one of those options, the bag reclaims the materials.",
				"If you lose this satchel, you can create a new one over the course of three days of work (eight hours each day) by expending 100 gp worth of leather, glass, and other raw materials."
			]
		},
		{
			"name": "Extra Alchemical Formula",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 3,
			"header": 2,
			"entries": [
				"At 3rd level, you learn an additional Alchemical Formula."
			]
		},
		{
			"name": "Extra Alchemical Formula",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 9,
			"header": 2,
			"entries": [
				"At 9th level, you learn an additional Alchemical Formula."
			]
		},
		{
			"name": "Extra Alchemical Formula",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you learn an additional Alchemical Formula."
			]
		},
		{
			"name": "Extra Alchemical Formula",
			"source": "UAArtificer",
			"page": 5,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificer",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you learn an additional Alchemical Formula."
			]
		},
		{
			"name": "Gunsmith",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 1,
			"entries": [
				"A master of engineering, you forge a firearm powered by a combination of science and magic.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Master Smith|Artificer|UAArtificer|Gunsmith|UAArtificer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Thunder Cannon|Artificer|UAArtificer|Gunsmith|UAArtificer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Magazine|Artificer|UAArtificer|Gunsmith|UAArtificer|1"
				}
			]
		},
		{
			"name": "Arcane Magazine",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you craft a leather bag used to carry your tools and ammunition for your Thunder Cannon. Your Arcane Magazine includes the powders, lead shot, and other materials needed to keep that weapon functioning.",
				"You can use the Arcane Magazine to produce ammunition for your gun. At the end of each long rest, you can magically produce 40 rounds of ammunition with this magazine. After each short rest, you can produce 10 rounds.",
				"If you lose your Arcane Magazine, you can create a new one as part of a long rest, using 25 gp of leather and other raw materials."
			]
		},
		{
			"name": "Master Smith",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this specialization at 1st level, you gain proficiency with {@item smith's tools|phb}, and you learn the mending cantrip."
			]
		},
		{
			"name": "Thunder Cannon",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you forge a deadly firearm using a combination of arcane magic and your knowledge of engineering and metallurgy. This firearm is called a Thunder Cannon. It is a ferocious weapon that fires leaden bullets that can punch through armor with ease.",
				"You are proficient with the Thunder Cannon. The firearm is a two-handed ranged weapon that deals {@damage 2d6} piercing damage. Its normal range is 150 feet, and its maximum range if 500 feet. Once fired, it must be reloaded as a bonus action.",
				"If you lose your Thunder Cannon, you can create a new one over the course of three days of work (eight hours each day) by expending 100 gp worth of metal and other raw materials."
			]
		},
		{
			"name": "Thunder Monger",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 3,
			"header": 2,
			"entries": [
				"At 3rd level, you learn to channel thunder energy into your Thunder Cannon. As an action, you can make a special attack with your Thunder Cannon that deals an extra {@damage 1d6} thunder damage on a hit.",
				"This extra damage increases by {@damage 1d6} when you reach certain levels in this class: 5th level ({@damage 2d6}), 7th level ({@damage 3d6}), 9th level ({@damage 4d6}), 11th level ({@damage 5d6}), 13th level ({@damage 6d6}), 15th level ({@damage 7d6}), 17th level ({@damage 8d6}), and 19th level ({@damage 9d6})."
			]
		},
		{
			"name": "Blast Wave",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, you can channel force energy into your Thunder Cannon. As an action, you can make a special attack with it. Rather than making an attack roll, you unleash force energy in a 15-foot cone from the gun. Each creature in that area must make a Strength saving throw with a DC of 8 + your proficiency bonus + your Intelligence modifier. On a failed saving throw, a target takes {@damage 2d6} force damage and is pushed 10 feet away from you.",
				"This damage increases by {@damage 1d6} when you reach certain levels in this class: 13th level ({@damage 3d6}) and 17th level ({@damage 4d6})."
			]
		},
		{
			"name": "Piercing Round",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can shoot lightning energy through your Thunder Cannon. As an action, you can make a special attack with it. Rather than making an attack roll, you cause the gun to unleash a bolt of lightning, 5-feet wide and 30-feet long. Each creature in that area must make Dexterity saving throws with a DC of 8 + your proficiency bonus + your Intelligence modifier. On a failed saving throw, a target takes {@damage 4d6} lightning damage. This damage increases to {@damage 6d6} when you reach 19th level in this class."
			]
		},
		{
			"name": "Explosive Round",
			"source": "UAArtificer",
			"page": 6,
			"className": "Artificer",
			"classSource": "UAArtificer",
			"subclassShortName": "Gunsmith",
			"subclassSource": "UAArtificer",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can channel fiery energy into your Thunder Cannon. As an action, you can make a special attack with it. Rather than making an attack roll, you launch an explosive round from the gun. The round detonates in a 30-foot radius sphere at a point within range. Each creature in that area must make a Dexterity saving throw with a DC of 8 + your proficiency bonus + your Intelligence modifier. On a failed saving throw, a target takes {@damage 4d8} fire damage."
			]
		},
		{
			"name": "Alchemist",
			"source": "UAArtificerRevisited",
			"page": 6,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"entries": [
				"An Alchemist is an expert at combining exotic reagents to produce mystical effects. Among artificers, members of this subclass are the greatest healers, as well as the ones most adept at wielding dangerous chemicals.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Trade|Artificer (Revisited)|UAArtificerRevisited|Alchemist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Alchemist Spells|Artificer (Revisited)|UAArtificerRevisited|Alchemist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Alchemical Homunculus|Artificer (Revisited)|UAArtificerRevisited|Alchemist|UAArtificerRevisited|3"
				}
			]
		},
		{
			"name": "Alchemical Homunculus",
			"source": "UAArtificerRevisited",
			"page": 6,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn ancient methods for magically creating a special homunculus that is formed by alchemical substances.",
				"Whenever you finish a long rest and your {@item alchemist's supplies|PHB} are with you, you can form this homunculus in an unoccupied space within 5 feet of you. If you already have a homunculus from this feature, the first one immediately dies.",
				"The homunculus is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the {@creature Alchemical Homunculus|uaartificerrevisited} stat block. You determine the homunculus's appearance, which includes wings and bits of alchemical equipment. Some alchemists prefer mechanical-looking birds, whereas others like winged vials or miniature cauldrons.",
				"In combat, the homunculus shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take one of the actions in its stat block or to take the {@action Dash}, {@action Disengage}, or {@action Help} action.",
				"If the {@spell mending} spell is cast on it, it regains {@dice 2d6} hit points. If it has died within the last hour, you can use your {@item alchemist's supplies|PHB} as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The homunculus returns to life with all its hit points restored."
			]
		},
		{
			"name": "Alchemist Spells",
			"source": "UAArtificerRevisited",
			"page": 6,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Alchemist Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell purify food and drink}, {@spell ray of sickness}"
						],
						[
							"5th",
							"{@spell Melf's acid arrow}, {@spell web}"
						],
						[
							"9th",
							"{@spell create food and water}, {@spell stinking cloud}"
						],
						[
							"13th",
							"{@spell blight}, {@spell death ward}"
						],
						[
							"17th",
							"{@spell cloudkill}, {@spell raise dead}"
						]
					]
				}
			]
		},
		{
			"name": "Tools of the Trade",
			"source": "UAArtificerRevisited",
			"page": 6,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"By the time you adopt this specialty at 3rd level, you're deeply familiar with employing its tools.",
				{
					"type": "entries",
					"name": "Proficiencies",
					"entries": [
						"You gain proficiency with {@item alchemist's supplies|phb} and the {@item herbalism kit|phb}, assuming you don't already have them. You also gain {@item alchemist's supplies|phb} and an {@item herbalism kit|phb} for free\u2014the result of tinkering you've done as you've prepared for this specialization."
					]
				},
				{
					"type": "entries",
					"name": "Crafting",
					"entries": [
						"If you craft a magic item in the potion category, it takes you a quarter of the normal time, and it costs you half as much of the usual gold."
					]
				}
			]
		},
		{
			"name": "Alchemical Mastery",
			"source": "UAArtificerRevisited",
			"page": 6,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificerRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your command of magical chemicals has become masterful, enhancing the healing and damage you create through them. When you cast a spell using your {@item alchemist's supplies|phb} as the spellcasting focus, you gain a bonus to one roll of the spell. That roll must restore hit points or be a damage roll that deals acid or poison damage, and the bonus equals your Intelligence modifier (minimum of +1).",
				"In addition, you can cast {@spell lesser restoration} without expending a spell slot, provided you use {@item alchemist's supplies|phb} as the spellcasting focus. You can do so a number of times per day equal to your Intelligence modifier (minimum of once)."
			]
		},
		{
			"name": "Chemical Savant",
			"source": "UAArtificerRevisited",
			"page": 6,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Alchemist",
			"subclassSource": "UAArtificerRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"By 14th level, you have been exposed to so many chemicals and unlocked their secrets that they pose little risk to you, and you can use them to quickly end certain ailments. You gain resistance to acid damage and poison damage, and you are now immune to the {@condition poisoned} condition.",
				"In addition, you can cast {@spell greater restoration} once without expending a spell slot and without providing the material component, provided you use {@item alchemist's supplies|phb} as the spellcasting focus. You regain the ability to do so when you finish a long rest."
			]
		},
		{
			"name": "Archivist",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"entries": [
				"What are the best ways to store vast amounts of information? That question has occupied chroniclers and librarians for centuries. Scrolls and books were the finest information-storing methods for a long time, but the first Archivists imagined something greater: storing information in a real or an artificial mind. What library could match a mental archive capable of accessing information in seconds? As they work towards this goal, Archivists have become masters of storing knowledge and creating artificial intelligences fueled by magic. These techniques have yet to be perfected and institutionalized, and of all artificers, archivists are on the cutting edge of arcane science.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Trade|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Archivist Spells|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Artificial Mind|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "The First Warforged Minds|Artificer (Revisited)|UAArtificerRevisited|Archivist|UAArtificerRevisited|3"
				}
			]
		},
		{
			"name": "Archivist Spells",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Archivist Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Archivist Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell comprehend languages}, {@spell dissonant whispers}"
						],
						[
							"5th",
							"{@spell detect thoughts}, {@spell locate object}"
						],
						[
							"9th",
							"{@spell hypnotic pattern}, {@spell tongues}"
						],
						[
							"13th",
							"{@spell locate creature}, {@spell phantasmal killer}"
						],
						[
							"17th",
							"{@spell legend lore}, {@spell modify memory}"
						]
					]
				}
			]
		},
		{
			"name": "Artificial Mind",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you discover how to awaken a mind inside an object. Whenever you finish a long rest and your {@item calligrapher's supplies|PHB} are with you, you can magically rouse a keen mind within a Tiny, nonmagical object on which you write mystical symbols. The object is a magic item while the mind is inside it, and you can use it as a spellcasting focus. If you already have an artificial mind from this feature, the first one immediately dissipates.",
				"The magic item has the following properties.",
				{
					"type": "entries",
					"name": "Telepathic Advisor",
					"entries": [
						"The artificial mind telepathically supplies you with advice and information about certain topics: while the item is on your person, you have proficiency in two skills of your choice; the item's main material determines which skills you can choose from, as shown on the Artificial Mind table in the Skill Proficiencies column, for the nature of the object affects the mind's knowledge."
					]
				},
				{
					"type": "entries",
					"name": "Manifest Mind",
					"entries": [
						"As a bonus action while the item is on your person, you can cause the mind to manifest as a Tiny spectral presence, hovering in an unoccupied space of your choice within 60 feet of you. This presence is intangible and invulnerable, and it sheds dim light in a 10-foot radius. You determine its appearance; the Artificial Mind table offers suggested appearances based on the object's main material.",
						"While manifested, the spectral mind can hear and see, and it has {@sense darkvision} with a range of 60 feet. As an action, you can hear and see using the mind's senses, instead of your own, until your {@status concentration} ends (as if {@status concentration||concentrating} on a spell).",
						"As a bonus action, you can cause the spectral mind to hover up to 30 feet to an unoccupied space that you or it can see. It can pass through creatures but not objects. The spectral mind stops manifesting if it is ever more than 300 feet away from its magic item or if you dismiss it as a bonus action.",
						"When you cast an artificer spell on your turn, you can cast it as if you were in the spectral mind's space, instead of your own, using its senses. You can do so a number of times per day equal to your Intelligence modifier (at least once), and you regain all expended uses when you finish a long rest."
					]
				},
				{
					"type": "entries",
					"name": "Information Overload",
					"entries": [
						"As an action while the item is on your person, you can try to magically overload the thoughts of one creature you or the mind can see that is within 5 feet of the manifested mind, channeling a jumble of information from the artificial mind. Unless the target succeeds on an Intelligence saving throw against your spell save DC, the target takes {@damage 1d8} psychic damage, and the next attack roll against it before the end of your next turn has advantage, since it is temporarily too distracted to defend itself well. The damage increases by {@damage 1d8} when you reach 5th level ({@damage 2d8}), 11th level ({@damage 3d8}), and 17th level ({@damage 4d8}) in this class.",
						"Whenever you deal damage with this feature, you can expend a spell slot to deal extra damage to the target. The extra damage is {@damage 2d8} for a 1st-level spell slot, plus {@damage 1d8} for each spell level higher than first."
					]
				},
				{
					"type": "table",
					"caption": "Artificial Mind",
					"colLabels": [
						"Main Material",
						"Skill Proficiencies",
						"Suggested Appearance"
					],
					"colStyles": [
						"col-3",
						"col-5",
						"col-4"
					],
					"rows": [
						[
							"Animal (parchment, leather, bone)",
							"{@skill Animal Handling}, {@skill Insight}, {@skill Medicine}, {@skill Perception}, {@skill Survival}",
							"A beast or a humanoid visage with antlers"
						],
						[
							"Mineral (glass, stone, metal)",
							"{@skill Deception}, {@skill Intimidation}, {@skill Performance}, {@skill Persuasion}",
							"A robotic or golem-like face"
						],
						[
							"Plant (paper, wood)",
							"{@skill Arcana}, {@skill History}, {@skill Investigation}, {@skill Nature}, {@skill Religion}",
							"A bespectacled visage or a treant"
						]
					]
				}
			]
		},
		{
			"name": "The First Warforged Minds",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"type": "inset",
			"entries": [
				"Warforged were originally created by House Cannith to fight as subservient beings, having limited self-awareness. The development of the autonomous warforged consciousness has been presented as an accidental breakthrough. However, rumors abound that it was the work of pioneering archivist Aaren d'Cannith, who planted the seed of autonomy in the warforged mind. This fact is now difficult to verify, for the development team's records were destroyed and Aaren d'Cannith disappeared under mysterious circumstances. Many believe that Aaren is still determined to help the warforged evolve and that he might be working with the sinister Lord of Blades."
			]
		},
		{
			"name": "Tools of the Trade",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"By the time you adopt this specialty at 3rd level, you're deeply familiar with employing its tools.",
				{
					"type": "entries",
					"name": "Proficiencies",
					"entries": [
						"You gain proficiency with {@item calligrapher's supplies|phb} and the {@item forgery kit|phb}, assuming you don't already have them. You also gain {@item calligrapher's supplies|PHB} and a {@item forgery kit|PHB} for free\u2014the result of tinkering you've done as you've prepared for this specialization."
					]
				},
				{
					"type": "entries",
					"name": "Crafting",
					"entries": [
						"If you craft a magic item in the scroll category, it takes you a quarter of the normal time, and it costs you half as much of the usual gold."
					]
				}
			]
		},
		{
			"name": "Mind Network",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you've learned how to use your artifices to access minds, both to communicate and to harm.",
				{
					"type": "entries",
					"name": "Magical Telephony",
					"entries": [
						"While you have your Artificial Mind item on your person, you can communicate telepathically with anyone carrying an item bearing one of your artificer infusions, as the mind transmits your thoughts to each other. That person can also communicate telepathically with you as long as they have the item. This two-way communication can even cross planar boundaries."
					]
				},
				{
					"type": "entries",
					"name": "Psychic Damage",
					"entries": [
						"When you make a psychic damage roll for an artificer spell or for Information Overload, you gain a bonus to the damage roll equal to your Intelligence modifier (minimum bonus of +1)."
					]
				}
			]
		},
		{
			"name": "Pure Information",
			"source": "UAArtificerRevisited",
			"page": 7,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Archivist",
			"subclassSource": "UAArtificerRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your Artificial Mind is able to receive and transmit more information than ever before.",
				{
					"type": "entries",
					"name": "Mind Overload",
					"entries": [
						"When you expend a spell slot to increase the damage of Information Overload, the target must succeed on an Intelligence saving throw against your spell save DC or be {@condition stunned} until the end of your next turn."
					]
				},
				{
					"type": "entries",
					"name": "Infoportation",
					"entries": [
						"As an action while your Artificial Mind magic item is on your person, you cause the mind to turn you into pure information, teleporting you to the unoccupied space nearest to the spectral mind or to an item bearing one of your artificer infusions, where you physically reappear.",
						"You can teleport in this way once for free and must finish a long rest before doing so again. You can also use this special ability by expending a spell slot of 2nd level or higher."
					]
				}
			]
		},
		{
			"name": "Artillerist",
			"source": "UAArtificerRevisited",
			"page": 9,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Artillerist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"entries": [
				"An Artillerist specializes in using magic to create explosions and defensive positions, as well as magic-infused sidearms\u2014especially wands\u2014that can be used on the battlefield. Artillerists were valued by all the armies of the Last War.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Trade|Artificer (Revisited)|UAArtificerRevisited|Artillerist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Artillerist Spells|Artificer (Revisited)|UAArtificerRevisited|Artillerist|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Turret|Artificer (Revisited)|UAArtificerRevisited|Artillerist|UAArtificerRevisited|3"
				}
			]
		},
		{
			"name": "Arcane Turret",
			"source": "UAArtificerRevisited",
			"page": 9,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Artillerist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn how to create a magical turret. With your {@item smith's tools|phb} in hand, you can take an action to magically summon a Medium turret in an unoccupied space on a horizontal surface within 5 feet of you.",
				"The turret is a magical object that occupies its space and that has crablike legs. It has an AC of 18 and a number of hit points equal to five times your artificer level. It is immune to poison damage, psychic damage, and all conditions. If it is forced to make an ability check or a saving throw, treat all its ability scores as 10 (+0). If the {@spell mending} spell is cast on it, it regains {@dice 2d6} hit points. It disappears if it is reduced to 0 hit points or after 10 minutes. You can dismiss it early as an action.",
				"When you summon the turret, you decide which type it is, choosing from the options on the Arcane Turrets table. On each of your turns, you can take a bonus action to cause the turret to activate if you are within 60 feet of it. As part of the same action, you can direct the turret to walk or climb up to 15 feet to an unoccupied space.",
				"You can summon a turret once for free and must finish a long rest before doing so again. You can also summon the turret by expending a spell slot of 1st level or higher. If you summon a second turret, the first turret disappears.",
				"As an action, you can command your turret to detonate if you are within 60 feet of it. Doing so destroys the turret and forces each creature within 10 feet of it to make a Dexterity saving throw against your spell save DC, taking {@damage 3d6} force damage on a failed save or half as much damage on a successful one.",
				{
					"type": "table",
					"caption": "Arcane Turrets",
					"colLabels": [
						"Turret",
						"Activation"
					],
					"colStyles": [
						"col-2",
						"col-10"
					],
					"rows": [
						[
							"Flamethrower",
							"The turret exhales fire in an adjacent 15-foot cone that you designate. Each creature in that area must make a Dexterity saving throw against your spell save DC, taking {@damage 1d8} fire damage on a failed save or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren't being worn or carried."
						],
						[
							"Force Ballista",
							"Make a ranged spell attack, originating from the turret, at one creature or object within 120 feet of it. On a hit, the target takes {@damage 2d8} force damage, and if the target is a creature, it is pushed up to 5 feet away from the turret."
						],
						[
							"Defender",
							"The turret emits a burst of positive energy that grants itself and each creature of your choice within 10 feet of it a number of temporary hit points equal to {@dice 1d8} + your Intelligence modifier (minimum of +1)."
						]
					]
				}
			]
		},
		{
			"name": "Artillerist Spells",
			"source": "UAArtificerRevisited",
			"page": 9,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Artillerist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Alchemist Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Artillerist Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell shield}, {@spell thunderwave}"
						],
						[
							"5th",
							"{@spell scorching ray}, {@spell shatter}"
						],
						[
							"9th",
							"{@spell fireball}, {@spell wind wall}"
						],
						[
							"13th",
							"{@spell ice storm}, {@spell wall of fire}"
						],
						[
							"17th",
							"{@spell cone of cold}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Tools of the Trade",
			"source": "UAArtificerRevisited",
			"page": 9,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Artillerist",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"By the time you adopt this specialty at 3rd level, you're deeply familiar with employing its tools.",
				{
					"type": "entries",
					"name": "Proficiencies",
					"entries": [
						"You gain proficiency with {@item smith's tools|phb} and {@item woodcarver's tools|phb}, assuming you don't already have them. You also gain those tools for free\u2014the result of tinkering you've done as you've prepared for this specialization.",
						"In addition, you gain the ability to use rods, staffs, and wands as spellcasting focuses for your artificer spells. You also gain a nonmagical, wooden wand for free, which you've carved in your spare time."
					]
				},
				{
					"type": "entries",
					"name": "Crafting",
					"entries": [
						"If you craft a magic item in the wand category, it takes you a quarter of the normal time, and it costs you half as much of the usual gold."
					]
				}
			]
		},
		{
			"name": "Wand Prototype",
			"source": "UAArtificerRevisited",
			"page": 9,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Artillerist",
			"subclassSource": "UAArtificerRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"By 6th level, you now regularly experiment with channeling different types of magic through wands. Whenever you finish a long rest and your {@item woodcarver's tools|phb} are with you, you can touch a nonmagical, wooden wand and turn it into a magic item. When you do so, you invest it with one artificer cantrip of your choice\u2014even one you don't know\u2014that has a casting time of 1 action. As an action, you can cause the magic wand to produce the cantrip, using your spellcasting ability modifier (other creatures are unable to use the wand's magic). The wand loses this magic when you finish your next long rest.",
				"Any damage roll you make for a cantrip in the wand gains a bonus equal to your Intelligence modifier (minimum of +1).",
				"When you reach 14th level in this class, you can invest the wand with two cantrips at the end of a long rest."
			]
		},
		{
			"name": "Fortified Position",
			"source": "UAArtificerRevisited",
			"page": 9,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Artillerist",
			"subclassSource": "UAArtificerRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you're a master at conjuring a well-defended emplacement. You and your allies have half cover while within 10 feet of a turret you create with Arcane Turret, as a result of a shimmering field of magical protection that the turret emits.",
				"You can also now summon a second turret for free and must finish a long rest before doing so again. If you summon the second turret while the first is still present, the first one doesn't disappear, and each turret can be of a different type (if you summon a third turret, the first turret vanishes). Moreover, you can use one bonus action to activate both turrets."
			]
		},
		{
			"name": "Battle Smith",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"entries": [
				"Armies require protection, and someone has to put things back together if defenses fail. A combination of protector and medic, a Battle Smith is an expert at defending others and repairing both materiel and personnel. To aid in their work, Battle Smiths are usually accompanied by an iron defender, a protective companion of their own creation. Many soldiers tell stories of nearly dying before being saved by a Battle Smith and an iron defender.",
				"Battle Smiths played a key role in House Cannith's work on battle constructs and the original warforged, and after the Last War, these artificers led efforts to aid those who were injured in the war's horrific battles.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tools of the Trade|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Battle Smith Spells|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Battle Ready|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Iron Defender|Artificer (Revisited)|UAArtificerRevisited|Battle Smith|UAArtificerRevisited|3"
				}
			]
		},
		{
			"name": "Battle Ready",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"When you reach 3rd level, your combat training and your experiments with magic and have paid off in two ways:",
				{
					"type": "list",
					"items": [
						"You gain proficiency with martial weapons.",
						"When you attack with a magic weapon, you can use your Intelligence modifier, instead of Strength or Dexterity, for the attack and damage rolls."
					]
				}
			]
		},
		{
			"name": "Battle Smith Spells",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you always have certain spells prepared after you reach particular levels in this class, as shown in the Battle Smith Spells table. These spells count as artificer spells for you, but they don't count against the number of artificer spells you prepare.",
				{
					"type": "table",
					"caption": "Battle Smith Spells",
					"colLabels": [
						"Artificer Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell heroism}, {@spell searing smite}"
						],
						[
							"5th",
							"{@spell branding smite}, {@spell warding bond}"
						],
						[
							"9th",
							"{@spell aura of vitality}, {@spell blinding smite}"
						],
						[
							"13th",
							"{@spell aura of purity}, {@spell staggering smite}"
						],
						[
							"17th",
							"{@spell banishing smite}, {@spell mass cure wounds}"
						]
					]
				}
			]
		},
		{
			"name": "Iron Defender",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"By 3rd level, the tinkering in your free time has borne you a faithful companion, an iron defender. This metallic creature resembles a hound, a cougar, a bear, or another four-legged creature of your choice. It is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the {@creature iron defender|uaartificerrevisited} stat block.",
				"In combat, the iron defender shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take one of the actions in its stat block or the {@action Dash}, {@action Disengage}, or {@action Help} action.",
				"If the {@spell mending} spell is cast on it, it regains {@dice 2d6} hit points. If it has died within the last hour, you can use your {@item smith's tools|phb} as an action to revive it, provided you are within 5 feet of it and you expend a spell slot of 1st level or higher. The iron defender returns to life after 1 minute with all its hit points restored.",
				"At the end of a long rest, you can create a new iron defender if you have your {@item smith's tools|phb} with you. If you already have an iron defender from this feature, the first one immediately perishes."
			]
		},
		{
			"name": "Tools of the Trade",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"By the time you adopt this specialty at 3rd level, you're deeply familiar with employing its tools.",
				{
					"type": "entries",
					"name": "Proficiencies",
					"entries": [
						"You gain proficiency with {@item leatherworker's tools|phb} and {@item smith's tools|phb}, assuming you don't already have them. You also gain {@item leatherworker's tools|phb} and {@item smith's tools|phb} for free\u2014the result of tinkering you've done as you've prepared for this specialization."
					]
				},
				{
					"type": "entries",
					"name": "Crafting",
					"entries": [
						"If you craft a magic item in the armor category, it takes you a quarter of the normal time, and it costs you half as much of the usual gold."
					]
				}
			]
		},
		{
			"name": "Arcane Jolt",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you learn new ways to channel arcane energy through your weapon attacks and your iron defender.",
				"First, your iron defender's bite attack is now considered magical for the purposes of bypassing resistances and immunities, thanks to enhancements you've made to the creature in your free time.",
				"Second, when you or your iron defender hits a target with a magic weapon attack, you can channel magical energy through the strike to create one of the following effects:",
				{
					"type": "list",
					"items": [
						"The target takes an extra {@damage 2d4} force damage.",
						"Choose one creature or object you can see within 30 feet of the target. Healing energy flows into the chosen recipient, restoring {@dice 2d4} hit points to it."
					]
				},
				"You can channel this magical energy a number of times equal to your Intelligence modifier (minimum of once), but you can do so no more than once on a turn. You regain all expended uses of this feature when you finish a long rest."
			]
		},
		{
			"name": "Improved Defender",
			"source": "UAArtificerRevisited",
			"page": 11,
			"className": "Artificer (Revisited)",
			"classSource": "UAArtificerRevisited",
			"subclassShortName": "Battle Smith",
			"subclassSource": "UAArtificerRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your Arcane Jolt and iron defender become more powerful:",
				{
					"type": "list",
					"items": [
						"The extra damage and the healing of your Arcane Jolt both increase to {@damage 4d4}.",
						"Whenever your iron defender uses its Defensive Pounce, the attacker takes force damage equal to {@dice 1d4} + your Intelligence modifier."
					]
				}
			]
		}
	]
}

const fighter = {
	"class": [
		{
			"name": "Fighter",
			"source": "PHB",
			"page": 70,
			"srd": true,
			"basicRules": true,
			"hd": {
				"number": 1,
				"faces": 10
			},
			"proficiency": [
				"str",
				"con"
			],
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:F"
					],
					"progression": {
						"1": 1
					}
				}
			],
			"startingProficiencies": {
				"armor": [
					"light",
					"medium",
					"heavy",
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
								"acrobatics",
								"animal handling",
								"athletics",
								"history",
								"insight",
								"intimidation",
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
					"(a) {@item chain mail|phb} or (b) {@item leather armor|phb}, {@item longbow|phb}, and {@item arrows (20)|phb|20 arrows}",
					"(a) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb} or (b) two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon}",
					"(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) two {@item handaxe|phb|handaxes}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"chain mail|phb"
						],
						"b": [
							"leather armor|phb",
							"longbow|phb",
							"arrows (20)|phb"
						]
					},
					{
						"a": [
							{
								"equipmentType": "weaponMartial"
							},
							"shield|phb"
						],
						"b": [
							{
								"equipmentType": "weaponMartial",
								"quantity": 2
							}
						]
					},
					{
						"a": [
							"light crossbow|phb",
							"crossbow bolts (20)|phb"
						],
						"b": [
							{
								"item": "handaxe|phb",
								"quantity": 2
							}
						]
					},
					{
						"a": [
							"dungeoneer's pack|phb"
						],
						"b": [
							"explorer's pack|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"or": [
						{
							"str": 13,
							"dex": 13
						}
					]
				},
				"proficienciesGained": {
					"armor": [
						"light",
						"medium",
						"{@item shield|phb|shields}"
					],
					"weapons": [
						"simple",
						"martial"
					]
				}
			},
			"classFeatures": [
				"Fighting Style|Fighter||1",
				"Martial Versatility|Fighter||1|UAClassFeatureVariants",
				"Second Wind|Fighter||1",
				"Maneuver Versatility|Fighter||1|UAClassFeatureVariants",
				"Action Surge|Fighter||2",
				{
					"classFeature": "Martial Archetype|Fighter||3",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Fighter||4",
				"Proficiency Versatility|Fighter||4|UAClassFeatureVariants",
				"Martial Versatility|Fighter||4|TCE",
				"Extra Attack|Fighter||5",
				"Ability Score Improvement|Fighter||6",
				"Proficiency Versatility|Fighter||6|UAClassFeatureVariants",
				{
					"classFeature": "Martial Archetype feature|Fighter||7",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Fighter||8",
				"Proficiency Versatility|Fighter||8|UAClassFeatureVariants",
				"Indomitable|Fighter||9",
				{
					"classFeature": "Martial Archetype feature|Fighter||10",
					"gainSubclassFeature": true
				},
				"Extra Attack (2)|Fighter||11",
				"Ability Score Improvement|Fighter||12",
				"Proficiency Versatility|Fighter||12|UAClassFeatureVariants",
				"Indomitable (two uses)|Fighter||13",
				"Ability Score Improvement|Fighter||14",
				"Proficiency Versatility|Fighter||14|UAClassFeatureVariants",
				{
					"classFeature": "Martial Archetype feature|Fighter||15",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Fighter||16",
				"Proficiency Versatility|Fighter||16|UAClassFeatureVariants",
				"Action Surge (two uses)|Fighter||17",
				"Indomitable (three uses)|Fighter||17",
				{
					"classFeature": "Martial Archetype feature|Fighter||18",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Fighter||19",
				"Proficiency Versatility|Fighter||19|UAClassFeatureVariants",
				"Extra Attack (3)|Fighter||20"
			],
			"subclassTitle": "Martial Archetype",
			"fluff": [
				{
					"name": "Fighter",
					"type": "section",
					"entries": [
						"A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage.",
						"A dwarf in chain mail interposes his shield between the ogre's club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses.",
						"A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd's delight\u2014and his own tactical advantage. His opponent's sword flares with blue light an instant before she sends lightning flashing forth to smite him.",
						"All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings\u2014as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.",
						{
							"type": "entries",
							"name": "Well-Rounded Specialists",
							"entries": [
								"Fighters learn the basics of all combat styles. Every fighter can swing an axe, fence with a rapier, wield a longsword or a greatsword, use a bow, and even trap foes in a net with some degree of skill. Likewise, a fighter is adept with shields and every form of armor. Beyond that basic degree of familiarity, each fighter specializes in a certain style of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad general ability and extensive specialization makes fighters superior combatants on battlefields and in dungeons alike."
							]
						},
						{
							"type": "entries",
							"name": "Trained for Danger",
							"entries": [
								"Not every member of the city watch, the village militia, or the queen's army is a fighter. Most of these troops are relatively untrained soldiers with only the most basic combat knowledge. Veteran soldiers, military officers, trained bodyguards, dedicated knights, and similar figures are fighters.",
								"Some fighters feel drawn to use their training as adventurers. The dungeon delving, monster slaying, and other dangerous work common among adventurers is second nature for a fighter, not all that different from the life he or she left behind. There are greater risks, perhaps, but also much greater rewards\u2014few fighters in the city watch have the opportunity to discover a magic flame tongue sword, for example."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Fighter",
							"entries": [
								"As you build your fighter, think about two related elements of your character's background: Where did you get your combat training, and what set you apart from the mundane warriors around you? Were you particularly ruthless? Did you get extra help from a mentor, perhaps because of your exceptional dedication? What drove you to this training in the first place? A threat to your homeland, a thirst for revenge, or a need to prove yourself might all have been factors.",
								"You might have enjoyed formal training in a noble's army or in a local militia. Perhaps you trained in a war academy, learning strategy, tactics, and military history. Or you might be self-taught\u2014unpolished but well tested. Did you take up the sword as a way to escape the limits of life on a farm, or are you following a proud family tradition? Where did you acquire your weapons and armor? They might have been military issue or family heirlooms, or perhaps you scrimped and saved for years to buy them. Your armaments are now among your most important possessions\u2014the only things that stand between you and death's embrace.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a fighter quickly by following these suggestions. First, make Strength or Dexterity your highest ability score, depending on whether you want to focus on melee weapons or on archery (or finesse weapons). Your next-highest score should be Constitution, or Intelligence if you plan to adopt the Eldritch Knight martial archetype. Second, choose the {@background soldier} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 70
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"Let me know when you're all done talking."
							],
							"by": "Tordek"
						},
						"Of all the adventurers in the worlds of D&D, the fighter is perhaps the greatest paradox. On the one hand, a singular feature of the class is that no two fighters ply their craft in quite the same way; their weapons, armor, and tactics differ across a vast spectrum. On the other hand, regardless of the tools and methods one uses, at the heart of every fighter's motivation lies the same basic truth: it is better to wound than to be wounded.",
						"Although some adventuring fighters risk their lives fighting for glory or treasure, others are primarily concerned with the welfare of others. They put more value on the well-being of the society, the village, or the group than on their own safety. Even if there's gold in the offing, the true reward for most fighters comes from sending enemies to their doom.",
						"The sections below offer ways to add a little depth and a few personal touches to your fighter character.",
						{
							"type": "entries",
							"name": "Heraldic Sign",
							"entries": [
								"Fighters typically do battle for a cause. Some fight on behalf of kingdoms besieged by monsters, while others quest only for personal glory. In either case, a fighter often displays a heraldic sign that represents that cause, either adopting the symbol of a nation or a royal line, or creating a crest to represent one's self-interest.",
								"Your character could be affiliated with an organization or a cause, and thus might already travel under a banner of some sort. If that's not the case, consider devising a heraldic sign that symbolizes an aspect of your nature or speaks to what you see as your purpose in the world.",
								{
									"type": "table",
									"caption": "Heraldic Signs",
									"colLabels": [
										"{@dice d6}",
										"Heraldic Signs"
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
											"A rampant golden dragon on a green field, representing valor and a quest for wealth"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"The fist of a storm giant clutching lightning before a storm cloud, symbolizing wrath and power"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Crossed greatswords in front of a castle gate, signifying the defense of a city or kingdom"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"A skull with a dagger through it, representing the doom you bring to your enemies"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A phoenix in a ring of fire, an expression of an indomitable spirit"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Three drops of blood beneath a horizontal sword blade on a black background, symbolizing three foes you have sworn to kill"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Instructor",
							"entries": [
								"Some fighters are natural-born combatants who have a talent for surviving in battle. Others learned the basics of their combat prowess in their formative years from spending time in a military or some other martial organization, when they were taught by the leaders of the group.",
								"A third type of fighter comes from the ranks of those who received one-on-one instruction from an accomplished veteran of the craft. That instructor was, or perhaps still is, well versed in a certain aspect of combat that relates to the student's background.",
								"If you decide that your character had an individual instructor, what is that person's specialty? Do you emulate your instructor in how you fight, or did you take the instructor's teachings and adapt them to your own purposes?",
								{
									"type": "table",
									"caption": "Instructor",
									"colLabels": [
										"{@dice d6}",
										"Instructor"
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
											"Gladiator. Your instructor was a slave who fought for freedom in the arena, or one who willingly chose the gladiator's life to earn money and fame."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Military. Your trainer served with a group of soldiers and knows much about working as a team."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"City Watch. Crowd control and peacekeeping are your instructor's specialties."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Tribal Warrior. Your instructor grew up in a tribe, where fighting for one's life was practically an everyday occurrence."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Street Fighter. Your trainer excels at urban combat, combining close-quarters work with silence and efficiency."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Weapon Master. Your mentor helped you to become one with your chosen weapon, by imparting highly specialized knowledge of how to wield it most effectively."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Style",
							"entries": [
								"Many fighters distinguish themselves from their peers by adopting and perfecting a particular style or method of waging combat. Although this style might be a natural outgrowth of a fighter's personality, that's not always the case\u2014someone's approach to the world in general does not necessarily dictate how that person operates when lives are on the line.",
								"Do you have a combat style that mirrors your outlook on life, or is something else inside you unleashed when weapons are drawn?",
								{
									"type": "table",
									"caption": "Style",
									"colLabels": [
										"{@dice d6}",
										"Style"
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
											"Elegant. You move with precise grace and total control, never using more energy than you need."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Brutal. Your attacks rain down like hammer blows, meant to splinter bone or send blood flying."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Cunning. You dart in to attack at just the right moment and use small-scale tactics to tilt the odds in your favor."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Effortless. You rarely perspire or display anything other than a stoic expression in battle."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Energetic. You sing and laugh during combat as your spirit soars. You are happiest when you have a foe in front of you and a weapon in hand."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Sinister. You scowl and sneer while fighting, and you enjoy mocking your foes as you defeat them."
										]
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 27
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Battle Master",
			"shortName": "Battle Master",
			"source": "PHB",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 73,
			"optionalfeatureProgression": [
				{
					"name": "Maneuvers",
					"featureType": [
						"MV:B"
					],
					"progression": {
						"3": 3,
						"7": 5,
						"10": 7,
						"15": 9
					}
				}
			],
			"subclassFeatures": [
				"Battle Master|Fighter||Battle Master||3",
				"Additional Maneuvers|Fighter||Battle Master||7",
				"Additional Superiority Die|Fighter||Battle Master||7",
				"Know Your Enemy|Fighter||Battle Master||7",
				"Additional Maneuvers|Fighter||Battle Master||10",
				"Improved Combat Superiority (d10)|Fighter||Battle Master||10",
				"Additional Maneuvers|Fighter||Battle Master||15",
				"Additional Superiority Die|Fighter||Battle Master||15",
				"Relentless|Fighter||Battle Master||15",
				"Improved Combat Superiority (d12)|Fighter||Battle Master||18"
			]
		},
		{
			"name": "Champion",
			"shortName": "Champion",
			"source": "PHB",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:F"
					],
					"progression": {
						"10": 1
					}
				}
			],
			"subclassFeatures": [
				"Champion|Fighter||Champion||3",
				"Remarkable Athlete|Fighter||Champion||7",
				"Additional Fighting Style|Fighter||Champion||10",
				"Superior Critical|Fighter||Champion||15",
				"Survivor|Fighter||Champion||18"
			]
		},
		{
			"name": "Eldritch Knight",
			"shortName": "Eldritch Knight",
			"source": "PHB",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 74,
			"spellcastingAbility": "int",
			"casterProgression": "1/3",
			"cantripProgression": [
				0,
				0,
				2,
				2,
				2,
				2,
				2,
				2,
				2,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3,
				3
			],
			"spellsKnownProgression": [
				0,
				0,
				3,
				4,
				4,
				4,
				5,
				6,
				6,
				7,
				8,
				8,
				9,
				10,
				10,
				11,
				11,
				11,
				12,
				13
			],
			"additionalSpells": [
				{
					"expanded": {
						"3": [
							{
								"all": "level=0|class=Wizard"
							},
							{
								"all": "level=1|class=Wizard"
							}
						],
						"7": [
							{
								"all": "level=2|class=Wizard"
							}
						],
						"13": [
							{
								"all": "level=3|class=Wizard"
							}
						],
						"19": [
							{
								"all": "level=4|class=Wizard"
							}
						]
					}
				}
			],
			"subclassTableGroups": [
				{
					"subclasses": [
						{
							"name": "Eldritch Knight",
							"source": "PHB"
						}
					],
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|subclass=Fighter: Eldritch Knight}",
						"{@filter Spells Known|spells|subclass=Fighter: Eldritch Knight}"
					],
					"rows": [
						[
							0,
							0
						],
						[
							0,
							0
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							4
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							6
						],
						[
							3,
							7
						],
						[
							3,
							8
						],
						[
							3,
							8
						],
						[
							3,
							9
						],
						[
							3,
							10
						],
						[
							3,
							10
						],
						[
							3,
							11
						],
						[
							3,
							11
						],
						[
							3,
							11
						],
						[
							3,
							12
						],
						[
							3,
							13
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"subclasses": [
						{
							"name": "Eldritch Knight",
							"source": "PHB"
						}
					],
					"colLabels": [
						"{@filter 1st|spells|level=1|subclass=Fighter: Eldritch Knight}",
						"{@filter 2nd|spells|level=2|subclass=Fighter: Eldritch Knight}",
						"{@filter 3rd|spells|level=3|subclass=Fighter: Eldritch Knight}",
						"{@filter 4th|spells|level=4|subclass=Fighter: Eldritch Knight}"
					],
					"rowsSpellProgression": [
						[
							0,
							0,
							0,
							0
						],
						[
							0,
							0,
							0,
							0
						],
						[
							2,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0
						],
						[
							3,
							0,
							0,
							0
						],
						[
							4,
							2,
							0,
							0
						],
						[
							4,
							2,
							0,
							0
						],
						[
							4,
							2,
							0,
							0
						],
						[
							4,
							3,
							0,
							0
						],
						[
							4,
							3,
							0,
							0
						],
						[
							4,
							3,
							0,
							0
						],
						[
							4,
							3,
							2,
							0
						],
						[
							4,
							3,
							2,
							0
						],
						[
							4,
							3,
							2,
							0
						],
						[
							4,
							3,
							3,
							0
						],
						[
							4,
							3,
							3,
							0
						],
						[
							4,
							3,
							3,
							0
						],
						[
							4,
							3,
							3,
							1
						],
						[
							4,
							3,
							3,
							1
						]
					]
				}
			],
			"subclassFeatures": [
				"Eldritch Knight|Fighter||Eldritch Knight||3",
				"War Magic|Fighter||Eldritch Knight||7",
				"Eldritch Strike|Fighter||Eldritch Knight||10",
				"Arcane Charge|Fighter||Eldritch Knight||15",
				"Improved War Magic|Fighter||Eldritch Knight||18"
			]
		},
		{
			"name": "Purple Dragon Knight (Banneret)",
			"shortName": "Purple Dragon Knight (Banneret)",
			"source": "SCAG",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 128,
			"subclassFeatures": [
				"Purple Dragon Knight (Banneret)|Fighter||Purple Dragon Knight (Banneret)|SCAG|3",
				"Royal Envoy|Fighter||Purple Dragon Knight (Banneret)|SCAG|7",
				"Inspiring Surge|Fighter||Purple Dragon Knight (Banneret)|SCAG|10",
				"Bulwark|Fighter||Purple Dragon Knight (Banneret)|SCAG|15",
				"Inspiring Surge|Fighter||Purple Dragon Knight (Banneret)|SCAG|18"
			]
		},
		{
			"name": "Cavalier (UA)",
			"shortName": "Cavalier (UA)",
			"source": "UAKitsOfOld",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"subclassFeatures": [
				"Cavalier|Fighter||Cavalier (UA)|UAKitsOfOld|3",
				"Ferocious Charger|Fighter||Cavalier (UA)|UAKitsOfOld|7",
				"Improved Combat Superiority|Fighter||Cavalier (UA)|UAKitsOfOld|10",
				"Relentless|Fighter||Cavalier (UA)|UAKitsOfOld|15",
				"Improved Combat Superiority|Fighter||Cavalier (UA)|UAKitsOfOld|18"
			]
		},
		{
			"name": "Scout (UA)",
			"shortName": "Scout (UA)",
			"source": "UAKitsOfOld",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 4,
			"subclassFeatures": [
				"Scout|Fighter||Scout (UA)|UAKitsOfOld|3",
				"Additional Superiority Die|Fighter||Scout (UA)|UAKitsOfOld|7",
				"Improved Combat Superiority|Fighter||Scout (UA)|UAKitsOfOld|10",
				"Relentless|Fighter||Scout (UA)|UAKitsOfOld|15",
				"Additional Superiority Die|Fighter||Scout (UA)|UAKitsOfOld|15",
				"Improved Combat Superiority|Fighter||Scout (UA)|UAKitsOfOld|18"
			]
		},
		{
			"name": "Monster Hunter (UA)",
			"shortName": "Monster Hunter (UA)",
			"source": "UAGothicHeroes",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 2,
			"spellcastingAbility": "wis",
			"subclassFeatures": [
				"Monster Hunter|Fighter||Monster Hunter (UA)|UAGothicHeroes|3",
				"Monster Slayer|Fighter||Monster Hunter (UA)|UAGothicHeroes|7",
				"Improved Combat Superiority|Fighter||Monster Hunter (UA)|UAGothicHeroes|10",
				"Relentless|Fighter||Monster Hunter (UA)|UAGothicHeroes|15",
				"Improved Combat Superiority|Fighter||Monster Hunter (UA)|UAGothicHeroes|18"
			]
		},
		{
			"name": "Arcane Archer (UA)",
			"shortName": "Arcane Archer (UA)",
			"source": "UAFighter",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"optionalfeatureProgression": [
				{
					"name": "Arcane Shots",
					"featureType": [
						"AS:V1-UA"
					],
					"progression": {
						"3": 2,
						"7": 3,
						"10": 4,
						"15": 5,
						"18": 6
					}
				}
			],
			"subclassFeatures": [
				"Arcane Archer|Fighter||Arcane Archer (UA)|UAFighter|3",
				"Conjure Arrows|Fighter||Arcane Archer (UA)|UAFighter|7",
				"Extra Arcane Shot|Fighter||Arcane Archer (UA)|UAFighter|7",
				"Extra Arcane Shot|Fighter||Arcane Archer (UA)|UAFighter|10",
				"Ever-Ready Arrow|Fighter||Arcane Archer (UA)|UAFighter|15",
				"Extra Arcane Shot|Fighter||Arcane Archer (UA)|UAFighter|15",
				"Deadly Arrow|Fighter||Arcane Archer (UA)|UAFighter|18",
				"Extra Arcane Shot|Fighter||Arcane Archer (UA)|UAFighter|18"
			]
		},
		{
			"name": "Knight (UA)",
			"shortName": "Knight (UA)",
			"source": "UAFighter",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 2,
			"subclassFeatures": [
				"Knight|Fighter||Knight (UA)|UAFighter|3",
				"Noble Cavalry|Fighter||Knight (UA)|UAFighter|7",
				"Hold the Line|Fighter||Knight (UA)|UAFighter|10",
				"Rapid Strike|Fighter||Knight (UA)|UAFighter|15",
				"Defender's Blade|Fighter||Knight (UA)|UAFighter|18"
			]
		},
		{
			"name": "Samurai (UA)",
			"shortName": "Samurai (UA)",
			"source": "UAFighter",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"subclassFeatures": [
				"Samurai|Fighter||Samurai (UA)|UAFighter|3",
				"Elegant Courtier|Fighter||Samurai (UA)|UAFighter|7",
				"Unbreakable Will|Fighter||Samurai (UA)|UAFighter|10",
				"Rapid Strike|Fighter||Samurai (UA)|UAFighter|15",
				"Strength Before Death|Fighter||Samurai (UA)|UAFighter|18"
			]
		},
		{
			"name": "Sharpshooter (UA)",
			"shortName": "Sharpshooter (UA)",
			"source": "UAFighter",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 3,
			"subclassFeatures": [
				"Sharpshooter|Fighter||Sharpshooter (UA)|UAFighter|3",
				"Careful Eyes|Fighter||Sharpshooter (UA)|UAFighter|7",
				"Close-Quarters Shooting|Fighter||Sharpshooter (UA)|UAFighter|10",
				"Rapid Strike|Fighter||Sharpshooter (UA)|UAFighter|15",
				"Snap Shot|Fighter||Sharpshooter (UA)|UAFighter|18"
			]
		},
		{
			"name": "Arcane Archer v2 (UA)",
			"shortName": "Arcane Archer v2 (UA)",
			"source": "UARevisedSubclasses",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"optionalfeatureProgression": [
				{
					"name": "Arcane Shots",
					"featureType": [
						"AS:V2-UA"
					],
					"progression": {
						"3": 2,
						"7": 3,
						"10": 4,
						"15": 5,
						"18": 6
					}
				}
			],
			"subclassFeatures": [
				"Arcane Archer v2|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|3",
				"Curving Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|7",
				"Extra Arcane Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|7",
				"Extra Arcane Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|10",
				"Ever-Ready Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|15",
				"Extra Arcane Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|15",
				"Extra Arcane Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|18"
			]
		},
		{
			"name": "Cavalier v2 (UA)",
			"shortName": "Cavalier v2 (UA)",
			"source": "UARevisedClassOptions",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Cavalier v2|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|3",
				"Ferocious Charger|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|7",
				"Improved Combat Superiority|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|10",
				"Relentless|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|15",
				"Improved Combat Superiority|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|18"
			]
		},
		{
			"name": "Arcane Archer",
			"shortName": "Arcane Archer",
			"source": "XGE",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 28,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"prestidigitation#c"
						]
					}
				},
				{
					"known": {
						"3": [
							"druidcraft#c"
						]
					}
				}
			],
			"optionalfeatureProgression": [
				{
					"name": "Arcane Shots",
					"featureType": [
						"AS"
					],
					"progression": {
						"3": 2,
						"7": 3,
						"10": 4,
						"15": 5,
						"18": 6
					}
				}
			],
			"subclassFeatures": [
				"Arcane Archer|Fighter||Arcane Archer|XGE|3",
				"Magic Arrow|Fighter||Arcane Archer|XGE|7",
				"Curving Shot|Fighter||Arcane Archer|XGE|7",
				"Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|7",
				"Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|10",
				"Ever-Ready Shot|Fighter||Arcane Archer|XGE|15",
				"Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|15",
				"Additional Arcane Shot Option|Fighter||Arcane Archer|XGE|18"
			]
		},
		{
			"name": "Cavalier",
			"shortName": "Cavalier",
			"source": "XGE",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 30,
			"subclassFeatures": [
				"Cavalier|Fighter||Cavalier|XGE|3",
				"Warding Maneuver|Fighter||Cavalier|XGE|7",
				"Hold the Line|Fighter||Cavalier|XGE|10",
				"Ferocious Charger|Fighter||Cavalier|XGE|15",
				"Vigilant Defender|Fighter||Cavalier|XGE|18"
			]
		},
		{
			"name": "Samurai",
			"shortName": "Samurai",
			"source": "XGE",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 31,
			"subclassFeatures": [
				"Samurai|Fighter||Samurai|XGE|3",
				"Elegant Courtier|Fighter||Samurai|XGE|7",
				"Tireless Spirit|Fighter||Samurai|XGE|10",
				"Rapid Strike|Fighter||Samurai|XGE|15",
				"Strength before Death|Fighter||Samurai|XGE|18"
			]
		},
		{
			"name": "Brute (UA)",
			"shortName": "Brute (UA)",
			"source": "UAThreeSubclasses",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 2,
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:F"
					],
					"progression": {
						"10": 1
					}
				}
			],
			"subclassFeatures": [
				"Brute|Fighter||Brute (UA)|UAThreeSubclasses|3",
				"Brutish Durability|Fighter||Brute (UA)|UAThreeSubclasses|7",
				"Additional Fighting Style|Fighter||Brute (UA)|UAThreeSubclasses|10",
				"Devastating Critical|Fighter||Brute (UA)|UAThreeSubclasses|15",
				"Survivor|Fighter||Brute (UA)|UAThreeSubclasses|18"
			]
		},
		{
			"name": "Rune Knight (UA)",
			"shortName": "Rune Knight (UA)",
			"source": "UAFighterRangerRogue",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"optionalfeatureProgression": [
				{
					"name": "Runes",
					"featureType": [
						"RN"
					],
					"progression": {
						"3": 2,
						"7": 3,
						"10": 4,
						"15": 5
					}
				}
			],
			"subclassFeatures": [
				"Rune Knight|Fighter||Rune Knight (UA)|UAFighterRangerRogue|3",
				"Defensive Runes|Fighter||Rune Knight (UA)|UAFighterRangerRogue|7",
				"Great Stature|Fighter||Rune Knight (UA)|UAFighterRangerRogue|10",
				"Rune Magic Mastery|Fighter||Rune Knight (UA)|UAFighterRangerRogue|15",
				"Blessing of the All Father|Fighter||Rune Knight (UA)|UAFighterRangerRogue|18"
			]
		},
		{
			"name": "Psychic Warrior (UA)",
			"shortName": "Psychic Warrior (UA)",
			"source": "UAFighterRogueWizard",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"mage hand#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"Psychic Warrior|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|3",
				"Strength of Mind|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|7",
				"Telekinetic Bulwark|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|10",
				"Psionic Armament Improvement|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|10",
				"Agonizing Strikes|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|15",
				"Psychic Dreadnaught|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|18"
			]
		},
		{
			"name": "Echo Knight",
			"shortName": "Echo Knight",
			"source": "EGW",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 183,
			"subclassFeatures": [
				"Echo Knight|Fighter||Echo Knight|EGW|3",
				"Echo Avatar|Fighter||Echo Knight|EGW|7",
				"Shadow Martyr|Fighter||Echo Knight|EGW|10",
				"Reclaim Potential|Fighter||Echo Knight|EGW|15",
				"Legion of One|Fighter||Echo Knight|EGW|18"
			]
		},
		{
			"name": "Psi Knight (UA)",
			"shortName": "Psi Knight (UA)",
			"source": "UA2020PsionicOptionsRevisited",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Psi Knight|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|3",
				"Telekinetic Adept|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|7",
				"Psi-Enhanced Metabolism|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|10",
				"Bulwark of Force|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|15",
				"Telekinetic Master|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|18"
			]
		},
		{
			"name": "Psi Warrior",
			"shortName": "Psi Warrior",
			"source": "TCE",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 42,
			"subclassFeatures": [
				"Psi Warrior|Fighter||Psi Warrior|TCE|3",
				"Telekinetic Adept|Fighter||Psi Warrior|TCE|7",
				"Guarded Mind|Fighter||Psi Warrior|TCE|10",
				"Bulwark of Force|Fighter||Psi Warrior|TCE|15",
				"Telekinetic Master|Fighter||Psi Warrior|TCE|18"
			]
		},
		{
			"name": "Rune Knight",
			"shortName": "Rune Knight",
			"source": "TCE",
			"className": "Fighter",
			"classSource": "PHB",
			"page": 44,
			"optionalfeatureProgression": [
				{
					"name": "Runes",
					"featureType": [
						"RN"
					],
					"progression": {
						"3": 2,
						"7": 3,
						"10": 4,
						"15": 5
					}
				}
			],
			"subclassFeatures": [
				"Rune Knight|Fighter||Rune Knight|TCE|3",
				"Runic Shield|Fighter||Rune Knight|TCE|7",
				"Additional Rune Known|Fighter||Rune Knight|TCE|7",
				"Great Stature|Fighter||Rune Knight|TCE|10",
				"Additional Rune Known|Fighter||Rune Knight|TCE|10",
				"Master of Runes|Fighter||Rune Knight|TCE|15",
				"Additional Rune Known|Fighter||Rune Knight|TCE|15",
				"Runic Juggernaut|Fighter||Rune Knight|TCE|18"
			]
		}
	],
	"classFeature": [
		{
			"name": "Fighting Style",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take the same Fighting Style option more than once, even if you get to choose again.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Archery"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Close Quarters Shooter|UALightDarkUnderdark"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Defense"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Dueling"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Great Weapon Fighting"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Mariner|UAWaterborneAdventures"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Protection"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Tunnel Fighter|UALightDarkUnderdark"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Two-Weapon Fighting"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Superior Technique|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blind Fighting|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Interception|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Thrown Weapon Fighting|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Unarmed Fighting|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blind Fighting|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Interception|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Superior Technique|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Thrown Weapon Fighting|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Unarmed Fighting|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Maneuver Versatility",
			"source": "UAClassFeatureVariants",
			"page": 5,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level feature (enhances Maneuvers)}",
				"If you know any maneuvers from the fighter's Battle Master archetype, you can replace one maneuver you know with a different maneuver whenever you finish a long rest. This change reflects your physical and mental preparation for the day ahead."
			]
		},
		{
			"name": "Martial Versatility",
			"source": "UAClassFeatureVariants",
			"page": 12,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level feature (enhances Fighting Style)}",
				"Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style."
			]
		},
		{
			"name": "Second Wind",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to {@dice 1d10} + your fighter level.",
				"Once you use this feature, you must finish a short or long rest before you can use it again."
			]
		},
		{
			"name": "Action Surge",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.",
				"Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
			]
		},
		{
			"name": "Martial Archetype",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, you choose an archetype from the list available that you strive to emulate in your combat styles and techniques. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Martial Versatility",
			"source": "TCE",
			"page": 41,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level fighter {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, as you shift the focus of your martial practice:",
				{
					"type": "list",
					"items": [
						"Replace a {@filter fighting style|optionalfeatures|feature type=FS:F} you know with another fighting style available to fighters.",
						"If you know any {@filter maneuvers|optionalfeatures|feature type=MV:B} from the {@class fighter|phb|Battle Master|Battle Master|phb|2-0} archetype, you can replace one maneuver you know with a different maneuver."
					]
				}
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Fighter",
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
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn.",
				"The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"When you reach 6th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 6,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 6th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Martial Archetype feature",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"At 7th level, you gain a feature granted by your Martial Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
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
			"className": "Fighter",
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
			"name": "Indomitable",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 9,
			"entries": [
				"Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.",
				"You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
			]
		},
		{
			"name": "Martial Archetype feature",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you gain a feature granted by your Martial Archetype."
			]
		},
		{
			"name": "Extra Attack (2)",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"At 11th level, you can attack three times whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
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
			"className": "Fighter",
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
			"name": "Indomitable (two uses)",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 13,
			"entries": [
				"At 13th level, you can use Indomitable twice between long rests."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"When you reach 14th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 14,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 14th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Martial Archetype feature",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"At 15th level, you gain a feature granted by your Martial Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
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
			"className": "Fighter",
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
			"name": "Action Surge (two uses)",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you can use Action Surge twice before a rest, but only once on the same turn."
			]
		},
		{
			"name": "Indomitable (three uses)",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you can use Indomitable three times between long rests."
			]
		},
		{
			"name": "Martial Archetype feature",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"At 18th level, you gain a feature granted by your Martial Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
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
			"className": "Fighter",
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
			"name": "Extra Attack (3)",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you can attack four times whenever you take the {@action Attack} action on your turn."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Echo Knight",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 3,
			"entries": [
				"A mysterious and feared frontline warrior of the Kryn Dynasty, the Echo Knight has mastered the art of using dunamis to summon the fading shades of unrealized timelines to aid them in battle. Surrounded by echoes of their own might, they charge into the fray as a cycling swarm of shadows and strikes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Manifest Echo|Fighter||Echo Knight|EGW|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Unleash Incarnation|Fighter||Echo Knight|EGW|3"
				}
			]
		},
		{
			"name": "Manifest Echo",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Echo Knight feature}",
				"You can use a bonus action to magically manifest an echo of yourself in an unoccupied space you can see within 15 feet of you. This echo is a magical, translucent, gray image of you that lasts until it is destroyed, until you dismiss it as a bonus action, until you manifest another echo, or until you're {@condition incapacitated}.",
				"Your echo has AC 14 + your proficiency bonus, 1 hit point, and immunity to all conditions. If it has to make a saving throw, it uses your saving throw bonus for the roll. It is the same size as you, and it occupies its space. On your turn, you can mentally command the echo to move up to 30 feet in any direction (no action required). If your echo is ever more than 30 feet from you at the end of your turn, it is destroyed.",
				"You can use the echo in the following ways:",
				{
					"type": "list",
					"items": [
						"As a bonus action, you can teleport, magically swapping places with your echo at a cost of 15 feet of your movement, regardless of the distance between the two of you.",
						"When you take the {@action Attack} action on your turn, any attack you make with that action can originate from your space or the echo's space. You make this choice for each attack.",
						"When a creature that you can see within 5 feet of your echo moves at least 5 feet away from it, you can use your reaction to make an opportunity attack against that creature as if you were in the echo's space."
					]
				}
			]
		},
		{
			"name": "Unleash Incarnation",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Echo Knight feature}",
				"You can heighten your echo's fury. Whenever you take the {@action Attack} action, you can make one additional melee attack from the echo's position.",
				"You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Echo Avatar",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Echo Knight feature}",
				"You can temporarily transfer your consciousness to your echo. As an action, you can see through your echo's eyes and hear through its ears. During this time, you are {@condition deafened} and {@condition blinded}. You can sustain this effect for up to 10 minutes, and you can end it at any time (requires no action). While your echo is being used in this way, it can be up to 1,000 feet away from you without being destroyed."
			]
		},
		{
			"name": "Shadow Martyr",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Echo Knight feature}",
				"You can make your echo throw itself in front of an attack directed at another creature that you can see. Before the attack roll is made, you can use your reaction to teleport the echo to an unoccupied space within 5 feet of the targeted creature. The attack roll that triggered the reaction is instead made against your echo.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Reclaim Potential",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Echo Knight feature}",
				"You've learned to absorb the fleeting magic of your echo. When an echo of yours is destroyed by taking damage, you can gain a number of temporary hit points equal to {@dice 2d6} + your Constitution modifier, provided you don't already have temporary hit points.",
				"You can use this feature a number of times equal to your Constitution modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Legion of One",
			"source": "EGW",
			"page": 183,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Echo Knight",
			"subclassSource": "EGW",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Echo Knight feature}",
				"You can use a bonus action to create two echoes with your Manifest Echo feature, and these echoes can coexist. If you try to create a third echo, the previous two echoes are destroyed. Anything you can do from one echo's position can be done from the other's instead.",
				"In addition, when you roll initiative and have no uses of your Unleash Incarnation feature left, you regain one use of that feature."
			]
		},
		{
			"name": "Battle Master",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Student of War|Fighter||Battle Master||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Superiority|Fighter||Battle Master||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Maneuvers|Fighter||Battle Master||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Maneuver Options|Fighter||Battle Master||3|UAClassFeatureVariants"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Maneuver Options|Fighter||Battle Master||3|TCE"
				}
			]
		},
		{
			"name": "Combat Superiority",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Maneuvers",
							"entries": [
								"You learn three maneuvers of your choice, which are listed under \"Maneuvers\" below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.",
								"You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Superiority Dice",
							"entries": [
								"You have four superiority dice, which are {@dice d8}s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
								"You gain another superiority die at 7th level and one more at 15th level."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Saving Throws",
							"entries": [
								"Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:",
								{
									"type": "abilityDc",
									"name": "Maneuver",
									"attributes": [
										"str",
										"dex"
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Maneuver Options",
			"source": "TCE",
			"page": 41,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"header": 1,
			"entries": [
				"{@i 3rd-level fighter {@variantrule optional class features|tce|optional feature}}",
				"If you have access to maneuvers, the following maneuvers are added to the list of options available to you. Maneuvers are available to Battle Masters but also to characters who have a special feature like the {@optfeature Superior Technique|TCE} fighting style or the {@feat Martial Adept} feat.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "options",
							"entries": [
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Ambush|TCE"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Bait and Switch|TCE"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Brace|TCE"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Commanding Presence|TCE"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Grappling Strike|TCE"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Quick Toss|TCE"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Tactical Assessment|TCE"
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Maneuver Options",
			"source": "UAClassFeatureVariants",
			"page": 5,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"header": 1,
			"entries": [
				"{@i 1st-level feature (enhances Maneuvers)}",
				"If you have access to maneuvers, the following maneuvers are added to the list of options available to you. Maneuvers are available to Battle Masters and to characters who have the {@optfeature Superior Technique|TCE} fighting style or the {@feat Martial Adept} feat.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "options",
							"entries": [
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Ambush|UAClassFeatureVariants"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Bait and Switch|UAClassFeatureVariants"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Brace|UAClassFeatureVariants"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Restraining Strike|UAClassFeatureVariants"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Silver Tongue|UAClassFeatureVariants"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Snipe|UAClassFeatureVariants"
								},
								{
									"type": "refOptionalfeature",
									"optionalfeature": "Studious Eye|UAClassFeatureVariants"
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Maneuvers",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"The maneuvers are presented in alphabetical order.",
				{
					"type": "options",
					"count": 3,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Commander's Strike"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Disarming Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Distracting Strike"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Evasive Footwork"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Feinting Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Goading Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Lunging Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Maneuvering Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Menacing Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Parry"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Precision Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pushing Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Rally"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Riposte"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Sweeping Attack"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Trip Attack"
						}
					]
				}
			]
		},
		{
			"name": "Student of War",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain proficiency with one type of {@filter artisan's tools|items|source=phb|miscellaneous=mundane|type=artisan's tools} of your choice."
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn two additional maneuvers of your choice."
			]
		},
		{
			"name": "Additional Superiority Die",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"You gain another superiority die at 7th level."
			]
		},
		{
			"name": "Know Your Enemy",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
				{
					"type": "list",
					"items": [
						"Strength score",
						"Dexterity score",
						"Constitution score",
						"Armor Class",
						"Current hit points",
						"Total class levels (if any)",
						"Fighter class levels (if any)"
					]
				}
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn two additional maneuvers of your choice."
			]
		},
		{
			"name": "Improved Combat Superiority (d10)",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your superiority dice turn into {@dice d10}s."
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you learn two additional maneuvers of your choice."
			]
		},
		{
			"name": "Additional Superiority Die",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"You gain another superiority die at 15th level."
			]
		},
		{
			"name": "Relentless",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
			]
		},
		{
			"name": "Improved Combat Superiority (d12)",
			"source": "PHB",
			"page": 73,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Battle Master",
			"subclassSource": "PHB",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your superiority dice turn into {@dice d12}s."
			]
		},
		{
			"name": "Champion",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Champion",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Improved Critical|Fighter||Champion||3"
				}
			]
		},
		{
			"name": "Improved Critical",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Champion",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
			]
		},
		{
			"name": "Remarkable Athlete",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Champion",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.",
				"In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
			]
		},
		{
			"name": "Additional Fighting Style",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Champion",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you can choose a second option from the Fighting Style class feature."
			]
		},
		{
			"name": "Superior Critical",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Champion",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20."
			]
		},
		{
			"name": "Survivor",
			"source": "PHB",
			"page": 72,
			"srd": true,
			"basicRules": true,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Champion",
			"subclassSource": "PHB",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points."
			]
		},
		{
			"name": "Eldritch Knight",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic\u2014abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spellcasting|Fighter||Eldritch Knight||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Weapon Bond|Fighter||Eldritch Knight||3"
				}
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you reach 3rd level, you augment your martial prowess with the ability to cast spells. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter wizard spell list|spells|class=wizard}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"You learn two cantrips of your choice from the {@filter wizard spell list|spells|class=wizard}. You learn an additional wizard cantrip of your choice at 10th level."
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Spell Slots",
							"entries": [
								"The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your {@filter wizard spells|spells|class=wizard} of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
								"For example, if you know the 1st-level spell {@spell shield} and have a 1st-level and a 2nd-level spell slot available, you can cast {@spell shield} using either slot."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Spells Known of 1st-Level and Higher",
							"entries": [
								"You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.",
								"The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.",
								"The spells you learn at 8th, 14th, and 20th level can come from any school of magic.",
								"Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Spellcasting Ability",
							"entries": [
								"Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
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
						}
					]
				}
			]
		},
		{
			"name": "Weapon Bond",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.",
				"Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are {@condition incapacitated}. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.",
				"You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two."
			]
		},
		{
			"name": "War Magic",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
			]
		},
		{
			"name": "Eldritch Strike",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn."
			]
		},
		{
			"name": "Arcane Charge",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action."
			]
		},
		{
			"name": "Improved War Magic",
			"source": "PHB",
			"page": 74,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Eldritch Knight",
			"subclassSource": "PHB",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action."
			]
		},
		{
			"name": "Purple Dragon Knight (Banneret)",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 3,
			"entries": [
				"Purple Dragon Knights are warriors who hail from the kingdom of Cormyr. Pledged to protect the crown, they take the fight against evil beyond the kingdom's borders. They are tasked with wandering the land as knights errant, relying on their judgment, bravery, and fidelity to guide them in defeating evildoers.",
				"A Purple Dragon Knight inspires greatness in others by committing brave deeds in battle. The mere presence of a knight in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone knight is a skilled warrior, but a knight leading a band of allies can transform even the most poorly equipped militia into a ferocious war band.",
				"A knight prefers to lead through deeds, not words. As a knight spearheads an attack, the knight's actions can awaken reserves of courage and conviction in allies that they never suspected they had.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Restriction: Knighthood|Fighter||Purple Dragon Knight (Banneret)|SCAG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Rallying Cry|Fighter||Purple Dragon Knight (Banneret)|SCAG|3"
				}
			]
		},
		{
			"name": "Rallying Cry",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries.",
				"When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you."
			]
		},
		{
			"name": "Restriction: Knighthood",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"Purple Dragon Knights are tied to a specific order of Cormyrean knighthood.",
				"Banneret serves as the generic name for this archetype if you use it in other campaign settings or to model warlords other than the Purple Dragon Knights."
			]
		},
		{
			"name": "Royal Envoy",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 7,
			"header": 2,
			"entries": [
				"A Purple Dragon Knight serves as an envoy of the Cormyrean crown. Knights of high standing are expected to conduct themselves with grace.",
				"At 7th level, you gain proficiency in the {@skill Persuasion} skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Intimidation}, or {@skill Performance}.",
				"Your proficiency bonus is doubled for any ability check you make that uses {@skill Persuasion}. You receive this benefit regardless of the skill proficiency you gain from this feature."
			]
		},
		{
			"name": "Inspiring Surge",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you.",
				"Starting at 18th level, you can choose two allies within 60 feet of you, rather than one."
			]
		},
		{
			"name": "Bulwark",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 15,
			"header": 2,
			"entries": [
				"Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't {@condition incapacitated}, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll."
			]
		},
		{
			"name": "Inspiring Surge",
			"source": "SCAG",
			"page": 128,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Purple Dragon Knight (Banneret)",
			"subclassSource": "SCAG",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, you can choose two allies within 60 feet of you, rather than one."
			]
		},
		{
			"name": "Psi Warrior",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Awake to the psionic power within, a Psi Warrior is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such warriors, as do some of the most disciplined high elves. In the world of Eberron, many young kalashtar dream of becoming Psi Warriors.",
				"As a Psi Warrior, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as both weapon and shield.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Power|Fighter||Psi Warrior|TCE|3"
				}
			]
		},
		{
			"name": "Psionic Power",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Psi Warrior feature}",
				"You harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a {@dice d6}. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.",
				"Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.",
				"When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level ({@dice d8}), 11th level ({@dice d10}), and 17th level ({@dice d12}).",
				"The powers below use your Psionic Energy dice.",
				{
					"type": "options",
					"style": "list-hang-notitle",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Protective Field|Fighter|TCE|Psi Warrior|TCE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Psionic Strike|Fighter|TCE|Psi Warrior|TCE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Telekinetic Movement|Fighter|TCE|Psi Warrior|TCE|3"
						}
					]
				}
			]
		},
		{
			"name": "Telekinetic Adept",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Psi Warrior feature}",
				"You have mastered new ways to use your telekinetic abilities, detailed below.",
				{
					"type": "options",
					"style": "list-hang-notitle",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Psi-Powered Leap|Fighter|TCE|Psi Warrior|TCE|7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Telekinetic Thrust|Fighter|TCE|Psi Warrior|TCE|7"
						}
					]
				}
			]
		},
		{
			"name": "Guarded Mind",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Psi Warrior feature}",
				"The psionic energy flowing through you has bolstered your mind. You have resistance to psychic damage. Moreover, if you start your turn {@condition charmed} or {@condition frightened}, you can expend a Psionic Energy die and end every effect on yourself subjecting you to those conditions."
			]
		},
		{
			"name": "Bulwark of Force",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Psi Warrior feature}",
				"You can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're {@condition incapacitated}.",
				"Once you take this bonus action, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to take it again."
			]
		},
		{
			"name": "Telekinetic Master",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Psi Warrior feature}",
				"Your ability to move creatures and objects with your mind is matched by few. You can cast the {@spell telekinesis} spell, requiring no components, and your spellcasting ability for the spell is Intelligence. On each of your turns while you concentrate on the spell, including the turn when you cast it, you can make one attack with a weapon as a bonus action.",
				"Once you cast the spell with this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to cast it again."
			]
		},
		{
			"name": "Rune Knight",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Rune Knights enhance their martial prowess using the supernatural power of runes, an ancient practice that originated with giants. Rune cutters can be found among any family of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the giant's work carved into a hill or cave, learned of the runes from a sage, or met the giant in person, you studied the giant's craft and learned how to apply magic runes to empower your equipment.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Fighter||Rune Knight|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Rune Carver|Fighter||Rune Knight|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Giant's Might|Fighter||Rune Knight|TCE|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Rune Knight feature}",
				"You gain proficiency with {@item smith's tools|PHB}, and you learn to speak, read, and write {@language Giant}."
			]
		},
		{
			"name": "Giant's Might",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Rune Knight feature}",
				"You have learned how to imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute:",
				{
					"type": "list",
					"items": [
						"If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change.",
						"You have advantage on Strength checks and Strength saving throws.",
						"Once on each of your turns, one of your attacks with a weapon or an unarmed strike can deal an extra {@damage 1d6} damage to a target on a hit."
					]
				},
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Rune Carver",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Rune Knight feature}",
				"You can use magic runes to enhance your gear. You learn two runes of your choice, from among the runes described below, and each time you gain a level in this class, you can replace one rune you know with a different one from this feature. When you reach certain levels in this class, you learn additional runes, as shown in the Runes Known table.",
				"Whenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, a shield, a piece of jewelry, or something else you can wear or hold in a hand. Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes at a time.",
				{
					"type": "table",
					"caption": "Runes Known",
					"colLabels": [
						"Fighter Level",
						"Number of Runes"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"3rd",
							"2"
						],
						[
							"7th",
							"3"
						],
						[
							"10th",
							"4"
						],
						[
							"15th",
							"5"
						]
					]
				},
				"The following runes are available to you when you learn a rune. If a rune has a level requirement, you must be at least that level in this class to learn the rune. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Constitution modifier.",
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Cloud Rune|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Fire Rune|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Frost Rune|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Stone Rune|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Hill Rune|TCE",
							"name": "Hill Rune (7th Level or Higher)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Storm Rune|TCE",
							"name": "Storm Rune (7th Level or Higher)"
						}
					]
				}
			]
		},
		{
			"name": "Additional Rune Known",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Rune Knight feature}",
				"You learn an additional Rune."
			]
		},
		{
			"name": "Runic Shield",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Rune Knight feature}",
				"You learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to force the attacker to reroll the {@dice d20} and use the new roll.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Additional Rune Known",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Rune Knight feature}",
				"You learn an additional Rune."
			]
		},
		{
			"name": "Great Stature",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Rune Knight feature}",
				"The magic of your runes permanently alters you. When you gain this feature, roll {@dice 3d4}. You grow a number of inches in height equal to the roll.",
				"Moreover, the extra damage you deal with your Giant's Might feature increases to {@dice 1d8}."
			]
		},
		{
			"name": "Additional Rune Known",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Rune Knight feature}",
				"You learn an additional Rune."
			]
		},
		{
			"name": "Master of Runes",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Rune Knight feature}",
				"You can invoke each rune you know from your Rune Carver feature twice, rather than once, and you regain all expended uses when you finish a short or long rest."
			]
		},
		{
			"name": "Runic Juggernaut",
			"source": "TCE",
			"page": 44,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight",
			"subclassSource": "TCE",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Rune Knight feature}",
				"You learn how to amplify your rune-powered transformation. As a result, the extra damage you deal with the Giant's Might feature increases to {@dice 1d10}. Moreover, when you use that feature, your size can increase to Huge, and while you are that size, your reach increases by 5 feet."
			]
		},
		{
			"name": "Psi Knight",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"entries": [
				"Awake to the psionic power within, a Psi Knight is a fighter who augments their physical might with psi-infused weapon strikes, telekinetic lashes, and barriers of mental force. Many githyanki train to become such knights, as do some of the most disciplined high elves. In the world of Athas, renowned gladiators in the arenas of the Sorcerer-Kings are often Psi Knights, and in Eberron, the psionic kalashtar view membership in this knighthood as a special honor.",
				"As a Psi Knight, you might have honed your psionic abilities through solo discipline, unlocked it under the tutelage of a master, or refined it at an academy dedicated to wielding the mind's power as both weapon and shield.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Talent|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Talent Options|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Changing the Die's Size|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psi Replenishment|Fighter||Psi Knight (UA)|UA2020PsionicOptionsRevisited|3"
				}
			]
		},
		{
			"name": "Changing the Die's Size",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"If you roll the highest number on your Psionic Talent die, it decreases by one die size after the roll. This represents you burning through your psionic energy. For example, if the die is a {@dice d6} and you roll a 6, it becomes a {@dice d4}. If it's a {@dice d4} and you roll a 4, it becomes unusable until you finish a long rest.",
				"Conversely, if you roll a 1 on your Psionic Talent die, it increases by one die size after the roll, up to its starting size. This represents you conserving psionic energy for later use. For example, if you roll a 1 on a {@dice d4}, the die then becomes a {@dice d6}.",
				"Whenever you finish a long rest, your Psionic Talent die resets to its starting size. When you reach certain levels in this class, the starting size of your Psionic Talent die increases: at 5th level ({@dice d8}), 11th level ({@dice d10}), and 17th level ({@dice d12})."
			]
		},
		{
			"name": "Psi Replenishment",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"As a bonus action, you can calm your mind for a moment and restore your Psionic Talent die to its starting size. You then can't use Psi Replenishment again until you finish a long rest."
			]
		},
		{
			"name": "Psionic Talent",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Psi Knight feature}",
				"You harbor a wellspring of psionic power within yourself, an energy that ebbs and flows as you channel it in various ways. This power is represented by your Psionic Talent die, the starting size of which is a {@dice d6}."
			]
		},
		{
			"name": "Psionic Talent Options",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"You can use your Psionic Talent die in the following ways:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Protective Field",
							"entry": "When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to roll your Psionic Talent die and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force."
						},
						{
							"type": "item",
							"name": "Psi-Powered Leap",
							"entry": "When you make a high or long jump, you can roll your Psionic Talent die and extend the distance of the jump, up to a number of feet equal to twice the number rolled plus twice your Intelligence modifier (minimum of 1 extra foot). This extra distance costs you only 1 foot of movement."
						},
						{
							"type": "item",
							"name": "Telekinetic Strike",
							"entry": "You can propel your attacks with telekinetic force. Once on each of your turns, immediately after you deal damage to a target within 30 feet of you with a weapon attack, you can roll your Psionic Talent die and also deal force damage to the target equal to the number rolled."
						}
					]
				}
			]
		},
		{
			"name": "Telekinetic Adept",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Psi Knight feature}",
				"You have mastered new ways to use your telekinesis:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Psionic Thrust",
							"entry": "When you deal damage to a target with the Telekinetic Strike of your Psionic Talent, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. Unless the save succeeds, you can knock the target {@condition prone} or move it up to 10 feet in any direction horizontally."
						},
						{
							"type": "item",
							"name": "Telekinetic Movement",
							"entry": "If your Psionic Talent die is available, you can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. When you take this action, your Psionic Talent die decreases by one die size."
						}
					]
				}
			]
		},
		{
			"name": "Psi-Enhanced Metabolism",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Psi Knight feature}",
				"The psionic energy flowing through you has bolstered your mind and body. You have resistance to poison and psychic damage, and you are immune to the {@condition poisoned} condition."
			]
		},
		{
			"name": "Bulwark of Force",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Psi Knight feature}",
				"You can shield yourself and others with telekinetic force. As a bonus action, you can choose creatures, which can include you, that you can see within 30 feet of you, up to a number of creatures equal to your Intelligence modifier (minimum of one creature). Each of the chosen creatures is protected by half cover for 1 minute or until you're {@condition incapacitated}. Once you use this feature, you can't do so again until you finish a long rest, unless you decrease your Psionic Talent die by one die size to use this feature again."
			]
		},
		{
			"name": "Telekinetic Master",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psi Knight (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Psi Knight feature}",
				"Your ability to move creatures and objects with your mind is matched by few. If your Psionic Talent die is available, you can cast the {@spell telekinesis} spell, requiring no components. Your spellcasting ability for the spell is Intelligence. When you cast this spell, your Psionic Talent die decreases by one die size."
			]
		},
		{
			"name": "Arcane Archer",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"entries": [
				"An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Among elves, Arcane Archers are some of their most elite warriors. These archers stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Arrow|Fighter||Arcane Archer (UA)|UAFighter|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Archer's Lore|Fighter||Arcane Archer (UA)|UAFighter|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Shots|Fighter||Arcane Archer (UA)|UAFighter|3"
				}
			]
		},
		{
			"name": "Arcane Arrow",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you learn to channel magic into your attacks with a longbow or shortbow.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Create Magic Arrow",
							"entries": [
								"As a bonus action on your turn, you can create one magic arrow in your hand. The arrow lasts until the end of the turn or until it hits or misses a target. You can fire the arrow from a shortbow or longbow. The arrow is a magic weapon that deals an additional {@damage 2d6} force damage on a hit.",
								"You have two uses of this feature, and you regain all expended uses of it when you finish a short or long rest."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Arcane Shot",
							"entries": [
								"When you gain this feature, you learn two Arcane Shot options of your choice (see the Arcane Shots section below). Whenever you create a magic arrow with this feature, you can apply the benefits of one of your Arcane Shot options to that arrow.",
								"You gain an additional Arcane Shot option of your choice at 7th, 10th, 15th, and 18th level."
							]
						}
					]
				}
			]
		},
		{
			"name": "Arcane Shots",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"The Arcane Arrow feature lets you choose Arcane Shot options at certain levels. The options are presented here in alphabetical order. These are all magical effects.",
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Beguiling Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Brute Bane Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Bursting Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Defending Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Grasping Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Piercing Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Seeking Arrow|UAFighter"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Shadow Arrow|UAFighter"
						}
					]
				}
			]
		},
		{
			"name": "Archer's Lore",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn a few skills relating to the typical duties of an Arcane Archer. You learn to understand magical theory and develop survival skills for wandering the wilds.",
				"You gain proficiency in two of the following skills of your choice: {@skill Arcana}, {@skill Athletics}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, and {@skill Survival}."
			]
		},
		{
			"name": "Conjure Arrows",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn a minor but useful magical trick. As an action, you can conjure 20 nonmagical arrows. The arrows appear in your hand or in a container, such as a quiver, on your body. The arrows remain for 10 minutes or until you use this feature again; they then vanish."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Ever-Ready Arrow",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you can conjure forth a magic-infused arrow more often than before. One minute after expending your last remaining use of Arcane Arrow, you regain one use of it."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Deadly Arrow",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your Arcane Arrow's bonus damage increases to {@damage 4d6} force damage."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UAFighter",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer (UA)",
			"subclassSource": "UAFighter",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Knight",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"entries": [
				"The Knight is a colossus on the battlefield who can shrug off attacks and protect allies from harm. Knights fight from the saddle when they can, and in combat they are expected to seek out and lock down the mightiest of the enemy's forces. On adventures, they are the armored bulwark that strives to keep the rest of the party safe.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Born to the Saddle|Fighter||Knight (UA)|UAFighter|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Implacable Mark|Fighter||Knight (UA)|UAFighter|3"
				}
			]
		},
		{
			"name": "Born to the Saddle",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed. In addition, you have advantage on saving throws made to avoid falling off your mount. If you fall off it, you can automatically land on your feet if you aren't {@condition incapacitated} and you fall less than 10 feet."
			]
		},
		{
			"name": "Implacable Mark",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you excel at foiling attacks and protecting your allies by menacing your foes. When you hit a creature with a melee weapon attack, the target is marked by you until the end of your next turn. A creature ignores this effect if the creature can't be {@condition frightened}.",
				"The marked target has disadvantage on any attack roll against a creature other than you or someone else who marked it.",
				"If a target marked by you is within 5 feet of you on its turn and it moves at least 1 foot or makes an attack that suffers disadvantage from this feature, you can make one melee weapon attack against it using your reaction. This attack roll has advantage, and if it hits, the attack's weapon deals extra damage to the target equal to your fighter level.",
				"You can make this special attack even if you have already expended your reaction this round, but not if you have already used your reaction this turn. You can make this attack three times, and you regain all expended uses of it when you finish a short or long rest."
			]
		},
		{
			"name": "Noble Cavalry",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill History}, {@skill Insight}, {@skill Persuasion}, or {@skill Religion}. Alternatively, you learn one language of your choice."
			]
		},
		{
			"name": "Hold the Line",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you master the ability to harass and slow your enemies. As a reaction when a creature moves at least 1 foot within 5 feet of you, you can make one melee weapon attack against that creature. If you hit, the attack's weapon deals extra damage to the target equal to half your fighter level, and the target's speed is reduced to 0 until the end of this turn."
			]
		},
		{
			"name": "Rapid Strike",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
			]
		},
		{
			"name": "Defender's Blade",
			"source": "UAFighter",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Knight (UA)",
			"subclassSource": "UAFighter",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you respond to danger with extraordinary vigilance. You can use your reaction for an opportunity attack even if you have already expended your reaction this round, but not if you have already used your reaction this turn.",
				"In addition, you gain a +1 bonus to AC while wearing heavy armor."
			]
		},
		{
			"name": "Samurai",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"entries": [
				"The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A Samurai's willpower is nearly unbreakable, and the enemies in a Samurai's path have two choices: yield or die fighting.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fighting Spirit|Fighter||Samurai (UA)|UAFighter|3"
				}
			]
		},
		{
			"name": "Fighting Spirit",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, the might of your willpower can shield you and help you strike true. As a bonus action on your turn, you can give yourself two benefits: advantage on all attack rolls and resistance to bludgeoning, piercing, and slashing damage. These benefits last until the end of your next turn.",
				"You can use this feature three times. You regain all expended uses of it when you finish a short or long rest."
			]
		},
		{
			"name": "Elegant Courtier",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai (UA)",
			"subclassSource": "UAFighter",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, your discipline and attention to detail allow you to excel in social situations that require strict adherence to etiquette. You can add your Wisdom modifier to any Charisma check you make to persuade or please a noble or anyone else of high social station.",
				"You also gain proficiency in the {@skill History}, {@skill Insight}, or {@skill Persuasion} skill (choose one). Alternatively, you learn one language of your choice."
			]
		},
		{
			"name": "Unbreakable Will",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai (UA)",
			"subclassSource": "UAFighter",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your superior willpower allows you to shrug off mind-assaulting effects. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you gain proficiency in Intelligence or Charisma saving throws (choose one)."
			]
		},
		{
			"name": "Rapid Strike",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai (UA)",
			"subclassSource": "UAFighter",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
			]
		},
		{
			"name": "Strength Before Death",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai (UA)",
			"subclassSource": "UAFighter",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that would reduce you to 0 hit points, you can delay that damage and immediately take a bonus turn, interrupting the current turn. You don't take the damage until the bonus turn ends. It is possible to do things, such as gaining resistance, that change how much of that damage you take.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Sharpshooter",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Sharpshooter (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"entries": [
				"The Sharpshooter is a master of ranged combat. An excellent sniper and eagle-eyed scout, this fighter is a perilous foe who can defeat an entire war band so long as they are kept at range.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Steady Aim|Fighter||Sharpshooter (UA)|UAFighter|3"
				}
			]
		},
		{
			"name": "Steady Aim",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Sharpshooter (UA)",
			"subclassSource": "UAFighter",
			"level": 3,
			"header": 1,
			"entries": [
				"Beginning when you choose this archetype at 3rd level, your aim becomes deadly. As a bonus action on your turn, you can take careful aim at a creature you can see that is within range of a ranged weapon you're wielding. Until the end of this turn, your ranged attacks with that weapon gain two benefits against the target:",
				{
					"type": "list",
					"items": [
						"The attacks ignore half and three-quarters cover.",
						"On each hit, the weapon deals additional damage to the target equal to 2 + half your fighter level."
					]
				},
				"You can use this feature three times. You regain all expended uses of it when you finish a short or long rest."
			]
		},
		{
			"name": "Careful Eyes",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Sharpshooter (UA)",
			"subclassSource": "UAFighter",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you excel at picking out hidden enemies and other threats. You can take the {@action Search} action as a bonus action.",
				"You also gain proficiency in the {@skill Perception}, {@skill Investigation}, or {@skill Survival} skill (choose one)."
			]
		},
		{
			"name": "Close-Quarters Shooting",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Sharpshooter (UA)",
			"subclassSource": "UAFighter",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn to handle yourself in close combat. Making a ranged attack roll while within 5 feet of an enemy doesn't impose disadvantage on your roll.",
				"In addition, if you hit a creature within 5 feet of you with a ranged attack on your turn, that creature can't take reactions until the end of this turn."
			]
		},
		{
			"name": "Rapid Strike",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Sharpshooter (UA)",
			"subclassSource": "UAFighter",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
			]
		},
		{
			"name": "Snap Shot",
			"source": "UAFighter",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Sharpshooter (UA)",
			"subclassSource": "UAFighter",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, you are ever ready to spring into action. If you take the {@action Attack} action on your first turn of a combat, you can make one additional ranged weapon attack as part of that action."
			]
		},
		{
			"name": "Rune Knight",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"entries": [
				"You discovered how to enhance your martial prowess using the supernatural power of runes. The ancient practice of rune magic originated with giants. {@i Skiltgravr} (\"rune cutters\") can be found among any type of giants, and you likely learned your methods first or second hand from such a mystical artisan. Whether you found the giant's work carved into a hill or cave, learned of the runes from a traveling sage, or met the giant in person, you studied the giant's craft. In time, you learned how to carve and apply runes to your equipment and how to invoke their magic, ultimately becoming a Rune Knight.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Fighter||Rune Knight (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Rune Magic|Fighter||Rune Knight (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Rune Options|Fighter||Rune Knight (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Giant Might|Fighter||Rune Knight (UA)|UAFighterRangerRogue|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Rune Knight feature}",
				"You gain proficiency with {@item smith's tools|PHB}, and you learn to speak, read, and write {@language Giant}."
			]
		},
		{
			"name": "Giant Might",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Rune Knight feature}",
				"You can imbue yourself with the might of giants. As a bonus action, you magically gain the following benefits, which last for 1 minute:",
				{
					"type": "list",
					"items": [
						"If you are smaller than Large, you become Large, along with anything you are wearing. If you lack the room to become Large, your size doesn't change.",
						"You have advantage on Strength checks and Strength saving throws.",
						"Your weapon attacks deal an extra {@damage 1d6} damage."
					]
				},
				"You can use this feature twice, and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Rune Magic",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Rune Knight feature}",
				"You learn how to use runes to enhance your gear. When you gain this feature, you learn how to inscribe two runes of your choice on weapons, armor, or shields (see \"{@filter Rune Options|optionalfeatures|feature type=RN|source=UAFighterRangerRogue}\").",
				"Whenever you finish a long rest, you can touch a number of objects equal to the number of runes you know, and you inscribe a different rune onto each of the objects. To be eligible, an object must be a weapon, a suit of armor, or a shield.",
				"Your rune remains on an object until you finish a long rest, and an object can bear only one of your runes.",
				"Each time you gain a level in this class, you can replace one rune you know with a different one."
			]
		},
		{
			"name": "Rune Options",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Here are rune options for the Rune Magic feature. They are all magical effects. If a rune requires a saving throw, your Rune Magic save DC equals 8 + your proficiency bonus + your Intelligence modifier.",
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Haug (Hill Rune)|UAFighterRangerRogue"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Ild (Fire Rune)|UAFighterRangerRogue"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Ise (Frost Rune)|UAFighterRangerRogue"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Skye (Cloud Rune)|UAFighterRangerRogue"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Stein (Stone Rune)|UAFighterRangerRogue"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Uvar (Storm Rune)|UAFighterRangerRogue"
						}
					]
				}
			]
		},
		{
			"name": "Defensive Runes",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Rune Knight feature}",
				"You learn to invoke your rune magic to protect your allies. When another creature you can see within 60 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the creature's AC against that attack. The bonus equals 1 + your Intelligence modifier (minimum of +2).",
				"In addition, you learn one new rune of your choice from the Rune Magic feature (for a total of three)."
			]
		},
		{
			"name": "Great Stature",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Rune Knight feature}",
				"The magic of your runes permanently alters you. When you gain this feature, roll  {@dice 3d4}. You grow a number of inches in height equal to the roll. Moreover, the extra damage you deal with your Giant Might feature increases to  {@dice 1d8}.",
				"In addition, you learn one new rune of your choice from your Rune Magic feature (for a total of four)."
			]
		},
		{
			"name": "Rune Magic Mastery",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Rune Knight feature}",
				"You can invoke each rune you know from your Rune Magic feature twice, rather than once, and you regain all expended uses when you finish a short or long rest.",
				"In addition, you learn one new rune of your choice from the Rune Magic feature (for a total of five)."
			]
		},
		{
			"name": "Blessing of the All Father",
			"source": "UAFighterRangerRogue",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Rune Knight (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Rune Knight feature}",
				"You learn how to share your rune magic with your allies. When you use your Giant Might feature, you can choose one willing creature you can see within 60 feet of you. The chosen creature also gains the benefits of your Giant Might feature."
			]
		},
		{
			"name": "Psychic Warrior",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 3,
			"entries": [
				"Awakening to the psionic power within themselves, a Psychic Warrior is a fighter who augments their physical might with psychically infused weapon strikes, telekinetic lashes, and barriers of mental force.",
				"As a Psychic Warrior, you might have honed your psionic abilities through your own disciplined practice, unlocked it under the tutelage of a master, or developed it at an academy dedicated to wielding the mind's power as both weapon and shield.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Armament|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Telekinetic Hand|Fighter||Psychic Warrior (UA)|UAFighterRogueWizard|3"
				}
			]
		},
		{
			"name": "Psionic Armament",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Psychic Warrior feature}",
				"You can channel your psychic power to magically augment your prowess. When you finish a long rest, choose whether to augment your defenses or your strikes. The chosen benefit lasts until you finish a long rest.",
				{
					"type": "entries",
					"name": "Augmented Defenses",
					"entries": [
						"When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to roll a {@dice d10} and reduce the amount of damage taken by the number rolled. When you reach 10th level in this class, the die changes to a {@dice d12}."
					]
				},
				{
					"type": "entries",
					"name": "Augmented Strikes",
					"entries": [
						"Once during each of your turns when you hit a creature with a weapon attack, you can also deal {@damage 1d4} psychic damage to that target. When you reach 10th level in this class, the psychic damage increases to {@dice 1d6}."
					]
				}
			]
		},
		{
			"name": "Telekinetic Hand",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Psychic Warrior feature}",
				"You learn the {@spell mage hand} cantrip. You can cast it without components, and you can make the spectral hand {@condition invisible}. Intelligence is your spellcasting ability for this spell."
			]
		},
		{
			"name": "Strength of Mind",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Psychic Warrior feature}",
				"As a bonus action, you can telekinetically lash out at a creature you can see within 20 feet of you. The target must make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. On a failed save, the target takes force damage equal to {@dice 2d6} plus your Intelligence modifier and is telekinetically moved 15 feet directly toward or away from you (your choice). On a successful save, it takes half as much damage and isn't moved.",
				"You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Psionic Armament Improvement",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Psychic Warrior feature}",
				"When you reach 10th level in this class, your Augmented Defenses dice increases to {@dice 1d12}, and your Augmented Strikes dice increases to a {@dice d6}."
			]
		},
		{
			"name": "Telekinetic Bulwark",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Psychic Warrior feature}",
				"When you take the {@action Attack} action, you can forgo one of your attacks to project a bastion of psionic power in a 10-foot radius around yourself. It lasts for 1 minute or until you're {@condition incapacitated}. For the duration, you and your allies in that area gain the benefits of half cover and have advantage on Strength saving throws.",
				"Once you use this feature, you can't do so again until you finish a long rest or until after you use your Second Wind feature."
			]
		},
		{
			"name": "Agonizing Strikes",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Psychic Warrior feature}",
				"Your attacks can channel psychic agony. When you hit a creature with a weapon attack, you can also deal {@damage 2d10} psychic damage to that target and force it to make a Constitution saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. Unless the save succeeds, the target falls {@condition prone}, and it suffers disadvantage on ability checks until the end of your next turn.",
				"You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Psychic Dreadnaught",
			"source": "UAFighterRogueWizard",
			"page": 1,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Psychic Warrior (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Psychic Warrior feature}",
				"The power of your mind suffuses your entire being, making you a nigh-unstoppable force on the battlefield. Using your reaction when you take damage, you can give yourself the following benefits for 1 minute or until you're {@condition incapacitated}:",
				{
					"type": "list",
					"items": [
						"At the start of each of your turns, you regain 10 hit points.",
						"Your walking speed increases by 10 feet.",
						"If you're {@condition prone}, you can stand up by spending 5 feet of movement."
					]
				},
				"Once you activate this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Monster Hunter",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"entries": [
				"As an archetypal Monster Hunter, you are an expert at defeating supernatural threats. Typically mentored by an older, experienced Monster Hunter, you learn to overcome a variety of unnatural defenses and attacks, including those of undead, lycanthropes, and other creatures of horror.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Fighter||Monster Hunter (UA)|UAGothicHeroes|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Superiority|Fighter||Monster Hunter (UA)|UAGothicHeroes|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Mysticism|Fighter||Monster Hunter (UA)|UAGothicHeroes|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in two of the following skills of your choice: {@skill Arcana}, {@skill History}, {@skill Insight}, {@skill Investigation}, {@skill Nature}, or {@skill Perception}. You can choose to gain proficiency with {@item thieves' tools|phb} in place of one skill choice."
			]
		},
		{
			"name": "Combat Superiority",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Superiority Dice",
							"entries": [
								"You have four superiority dice, which are {@dice d8}s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a long or short rest. You gain another superiority die at 7th level and one more at 15th level."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Using Superiority Dice",
							"entries": [
								"You can expend superiority dice to gain a number of different benefits:",
								{
									"type": "list",
									"items": [
										"When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
										"When you damage a creature with a weapon attack, you can expend one superiority die to add it to the damage roll. You can use this ability after rolling damage. If the attack causes the target to make a Constitution saving throw to maintain {@status concentration}, it has disadvantage on that save.",
										"When you make an Intelligence, a Wisdom, or a Charisma saving throw, you can expend one superiority die to add it to the roll. You can use this feature only before you learn if the save succeeded or failed.",
										"When you make a Wisdom ({@skill Perception}) check to detect a hidden creature or object, or a Wisdom ({@skill Insight}) check to determine if someone is lying to you, you can expend one superiority die to add it to the roll. You can use this feature after seeing the total but before learning if you succeeded or failed."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Hunter's Mysticism",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your study of the supernatural gives you a limited ability to use magic. You can cast {@spell detect magic} as a ritual. You can cast {@spell protection from evil and good}, but you cannot cast it again with this feature until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
				"In addition, you gain the ability to speak one of the following languages of your choice: {@language Abyssal}, {@language Celestial}, or {@language Infernal}."
			]
		},
		{
			"name": "Monster Slayer",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, whenever you expend superiority dice to add to a damage roll, you can expend up to two dice instead of just one, adding both to the roll. Both dice are expended as normal. If the target of your attack is an aberration, a fey, a fiend, or an undead, you deal maximum damage with both dice, instead of rolling them."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your superiority dice turn into {@dice d10}s. At 18th level, they turn into {@dice d12}s."
			]
		},
		{
			"name": "Relentless",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Monster Hunter (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your superiority dice turn into {@dice d12}s."
			]
		},
		{
			"name": "Cavalier",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"entries": [
				"The archetypal Cavalier excels at mounted combat. Usually born to nobility and raised in a royal court, a Cavalier is equally at home leading a cavalry charge or exchanging witty repartee at a state dinner.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Fighter||Cavalier (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Born to the Saddle|Fighter||Cavalier (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Superiority|Fighter||Cavalier (UA)|UAKitsOfOld|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in two of the following skills of your choice: {@skill Animal Handling}, {@skill Insight}, {@skill Performance}, or {@skill Persuasion}. You can choose to gain one tool proficiency in place of one skill proficiency."
			]
		},
		{
			"name": "Born to the Saddle",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you have advantage on saving throws made to avoid falling off your mount. If you fall off your mount, you always land on your feet if you are capable of taking actions. Mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed."
			]
		},
		{
			"name": "Combat Superiority",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Superiority Dice",
							"entries": [
								"You have four superiority dice, which are {@dice d8}s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
								"You gain another superiority die at 7th level and one more at 15th level."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Using Superiority Dice",
							"entries": [
								"You can expend superiority dice to gain a number of different benefits:",
								{
									"type": "list",
									"items": [
										"When you make a check to influence or control a creature you are riding, you can expend one superiority die to add it to the check. You apply this bonus after making the check but before learning if it was successful.",
										"When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
										"When you make an attack with a lance while mounted, you can expend one superiority die to add it to your damage roll. In addition, the target of the attack must make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked {@condition prone}.",
										"If either you or your mount is hit by an attack while you are mounted, you can expend one superiority die as a reaction, adding the number rolled to your or your mount's AC. If the attack still hits, you or your mount take half damage from it."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Ferocious Charger",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain additional benefits when you use superiority dice to increase your damage when you attack with a lance. You can expend up to two superiority dice on the attack, adding both to the damage roll. If you spend two dice, the target has disadvantage on its Strength saving throw to avoid being knocked {@condition prone}."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your superiority dice turn into {@dice d10}s. At 18th level, they turn into {@dice d12}s."
			]
		},
		{
			"name": "Relentless",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UAKitsOfOld",
			"page": 3,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your superiority dice turn into {@dice d12}s."
			]
		},
		{
			"name": "Scout",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"entries": [
				"The archetypal Scout excels at finding safe passage through dangerous regions. Scouts usually favor light armor and ranged weapons, but they are comfortable using heavier gear when faced with intense fighting.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Fighter||Scout (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Superiority|Fighter||Scout (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Natural Explorer|Fighter||Scout (UA)|UAKitsOfOld|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in three of the following skills of your choice: {@skill Acrobatics}, {@skill Athletics}, {@skill Investigation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}. You can choose to gain proficiency with {@item thieves' tools|phb} in place of one skill choice."
			]
		},
		{
			"name": "Combat Superiority",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Superiority Dice",
							"entries": [
								"You have four superiority dice, which are {@dice d8}s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a long or short rest. You gain another superiority die at 7th level and one more at 15th level."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Using Superiority Dice",
							"entries": [
								"You can expend superiority dice to gain a number of different benefits:",
								{
									"type": "list",
									"items": [
										"When you make a check that allows you to apply your proficiency in {@skill Athletics}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}, you can expend one superiority die to bolster the check. Add half the number rolled on the superiority die (rounding up) to your check. You apply this bonus after making the check but before learning if it was successful.",
										"When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
										"If you are hit by an attack while wearing light or medium armor, you can expend one superiority die as a reaction, adding the number rolled to your AC. If the attack still hits, you take half damage from it."
									]
								}
							]
						}
					]
				}
			]
		},
		{
			"name": "Natural Explorer",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
				"While traveling for an hour or more in your favored terrain, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"Difficult terrain doesn't slow your group's travel.",
						"Your group can't become lost except by magical means.",
						"Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
						"If you are traveling alone, you can move stealthily at a normal pace.",
						"When you forage, you find twice as much food as you normally would.",
						"While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area."
					]
				},
				"You choose additional favored terrain types at 7th and 15th level."
			]
		},
		{
			"name": "Additional Superiority Die",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 7,
			"header": 2,
			"entries": [
				"You gain another superiority die at 7th level."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your superiority dice turn into {@dice d10}s. At 18th level, they turn into {@dice d12}s."
			]
		},
		{
			"name": "Additional Superiority Die",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 15,
			"header": 2,
			"entries": [
				"You gain another superiority die at 15th level."
			]
		},
		{
			"name": "Relentless",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UAKitsOfOld",
			"page": 4,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your superiority dice turn into {@dice d12}s."
			]
		},
		{
			"name": "Cavalier v2",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"entries": [
				"The archetypal Cavalier excels at mounted combat. Usually born among the nobility and raised at court, a Cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Drawn to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Born to the Saddle|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Superiority|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Maneuvers|Fighter||Cavalier v2 (UA)|UARevisedClassOptions|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill History}, {@skill Insight}, {@skill Performance}, or {@skill Persuasion}. Alternatively, you learn one language of your choice."
			]
		},
		{
			"name": "Born to the Saddle",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you're not {@condition incapacitated}.",
				"Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed."
			]
		},
		{
			"name": "Combat Superiority",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain a set of combat abilities, referred to as maneuvers, which are fueled by special dice called superiority dice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Superiority Dice",
							"entries": [
								"You have four superiority dice, which are {@dice d8}s. A superiority die is expended when you use it. You regain all your expended superiority dice when you finish a short or long rest.",
								"You gain another superiority die at 7th level and one more at 15th level."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Maneuvers",
							"entries": [
								"You spend your superiority dice on your maneuvers. You can use more than one maneuver per turn, but no more than one maneuver per attack. You know the maneuvers detailed under \"Maneuvers\" below."
							]
						}
					]
				}
			]
		},
		{
			"name": "Maneuvers",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"entries": [
				"The maneuvers are presented in alphabetical order.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Control Mount|UARevisedClassOptions"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Precision Attack|UARevisedClassOptions"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Trip Attack|UARevisedClassOptions"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Warding Maneuver|UARevisedClassOptions"
						}
					]
				}
			]
		},
		{
			"name": "Ferocious Charger",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain additional benefits when you use your Trip Attack maneuver. You can expend up to two superiority dice on it, adding both dice to the damage roll. When you spend two dice in this way, the target has disadvantage on its Strength saving throw to avoid being knocked {@condition prone}."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your superiority dice turn into {@dice d10}s. At 18th level, they turn into {@dice d12}s."
			]
		},
		{
			"name": "Relentless",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain one superiority die."
			]
		},
		{
			"name": "Improved Combat Superiority",
			"source": "UARevisedClassOptions",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your superiority dice turn into {@dice d12}s."
			]
		},
		{
			"name": "Arcane Archer v2",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"entries": [
				"An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Among elves, Arcane Archers are some of their most elite warriors. These archers stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Magic Arrow|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Arrow|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Archer's Lore|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Shot|Fighter||Arcane Archer v2 (UA)|UARevisedSubclasses|3"
				}
			]
		},
		{
			"name": "Arcane Arrow",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see the \"Arcane Shot Options\" section below).",
				"Once per turn when you fire a magic arrow from a shortbow or longbow as part of the {@action Attack} action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.",
				"You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter."
			]
		},
		{
			"name": "Arcane Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"The Arcane Shot feature lets you choose options for it at certain levels. The options are presented here in alphabetical order. They are all magical effects, and each one is associated with one of the schools of magic.",
				"If an option requires a saving throw, your Arcane Shot save DC equals 8 + your proficiency bonus + your Intelligence modifier.",
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Banishing Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Brute Bane Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Bursting Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Grasping Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Mind-Scrambling Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Piercing Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Seeking Arrow|UARevisedSubclasses"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Shadow Arrow|UARevisedSubclasses"
						}
					]
				}
			]
		},
		{
			"name": "Archer's Lore",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn magical theory or some of the secrets of nature\u2014typical for practitioners of this elven martial tradition. You gain proficiency in either the {@skill Arcana} or {@skill Nature} skill."
			]
		},
		{
			"name": "Magic Arrow",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it a magic arrow, with a +1 bonus to the attack and damage rolls. The magic fades from the arrow immediately after it hits or misses its target."
			]
		},
		{
			"name": "Curving Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Ever-Ready Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, your magical archery is ever available to you when you need it most. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Extra Arcane Shot",
			"source": "UARevisedSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you learn an additional Arcane Shot option."
			]
		},
		{
			"name": "Brute",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Brute (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 3,
			"entries": [
				"Brutes are simple warriors who rely on mighty attacks and their own durability to overcome their enemies. Some brutes combine this physical might with tactical cunning. Others just hit things until those things stop hitting back.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Brute Force|Fighter||Brute (UA)|UAThreeSubclasses|3"
				}
			]
		},
		{
			"name": "Brute Force",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Brute (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you're able to strike with your weapons with especially brutal force. Whenever you hit with a weapon that you're proficient with and deal damage, the weapon's damage increases by an amount based on your level in this class, as shown on the Brute Bonus Damage table.",
				{
					"type": "table",
					"caption": "Brute Bonus Damage",
					"colLabels": [
						"Fighter Level",
						"Damage Increase"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"3rd",
							"{@dice 1d4}"
						],
						[
							"10th",
							"{@dice 1d6}"
						],
						[
							"16th",
							"{@dice 1d8}"
						],
						[
							"20th",
							"{@dice 1d10}"
						]
					]
				}
			]
		},
		{
			"name": "Brutish Durability",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Brute (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"Beginning at 7th level, your toughness allows you to shrug off assaults that would devastate others.",
				"Whenever you make a saving throw, roll {@dice 1d6} and add the die to your saving throw total. If applying this bonus to a death saving throw increases the total to 20 or higher, you gain the benefits of rolling a 20 on the {@dice d20}."
			]
		},
		{
			"name": "Additional Fighting Style",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Brute (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you can choose a second option from the Fighting Style feature."
			]
		},
		{
			"name": "Devastating Critical",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Brute (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you score a critical hit with a weapon attack, you gain a bonus to that weapon's damage roll equal to your level in this class."
			]
		},
		{
			"name": "Survivor",
			"source": "UAThreeSubclasses",
			"page": 2,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Brute (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns in combat, you regain hit points equal to 5 + your Constitution modifier (minimum of 1 hit point). You don't gain this benefit if you have 0 hit points or if you have more than half of your hit points left."
			]
		},
		{
			"name": "Arcane Archer",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Arcane Archers are some of the most elite warriors among the elves. They stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Archer Lore|Fighter||Arcane Archer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Shot|Fighter||Arcane Archer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Shot Options|Fighter||Arcane Archer|XGE|3"
				}
			]
		},
		{
			"name": "Arcane Archer Lore",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn magical theory or some of the secrets of nature\u2014typical for practitioners of this elven martial tradition. You choose to gain proficiency in either the {@skill Arcana} or the {@skill Nature} skill, and you choose to learn either the {@spell prestidigitation} or the {@spell druidcraft} cantrip."
			]
		},
		{
			"name": "Arcane Shot",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to unleash special magical effects with some of your shots. When you gain this feature, you learn two Arcane Shot options of your choice (see \"Arcane Shot Options\" below).",
				"Once per turn when you fire an arrow from a shortbow or longbow as part of the {@action Attack} action, you can apply one of your Arcane Shot options to that arrow. You decide to use the option when the arrow hits a creature, unless the option doesn't involve an attack roll. You have two uses of this ability, and you regain all expended uses of it when you finish a short or long rest.",
				"You gain an additional Arcane Shot option of your choice when you reach certain levels in this class: 7th, 10th, 15th, and 18th level. Each option also improves when you become an 18th-level fighter."
			]
		},
		{
			"name": "Arcane Shot Options",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"The Arcane Shot feature lets you choose options for it at certain levels. The options are presented here in alphabetical order. They are all magical effects, and each one is associated with one of the schools of magic.",
				"If an option requires a saving throw, your Arcane Shot save DC is calculated as follows:",
				{
					"type": "abilityDc",
					"name": "Arcane Shot",
					"attributes": [
						"int"
					]
				},
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Banishing Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Beguiling Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Bursting Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Enfeebling Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Grasping Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Piercing Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Seeking Arrow|XGE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Shadow Arrow|XGE"
						}
					]
				}
			]
		},
		{
			"name": "Additional Arcane Shot Option",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"You gain an additional Arcane Shot option of your choice when you reach 7th level."
			]
		},
		{
			"name": "Curving Shot",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn how to direct an errant arrow toward a new target. When you make an attack roll with a magic arrow and miss, you can use a bonus action to reroll the attack roll against a different target within 60 feet of the original target."
			]
		},
		{
			"name": "Magic Arrow",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain the ability to infuse arrows with magic. Whenever you fire a nonmagical arrow from a shortbow or longbow, you can make it magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. The magic fades from the arrow immediately after it hits or misses its target."
			]
		},
		{
			"name": "Additional Arcane Shot Option",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"You gain an additional Arcane Shot option of your choice when you reach 10th level."
			]
		},
		{
			"name": "Additional Arcane Shot Option",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"You gain an additional Arcane Shot option of your choice when you reach 15th level."
			]
		},
		{
			"name": "Ever-Ready Shot",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, your magical archery is available whenever battle starts. If you roll initiative and have no uses of Arcane Shot remaining, you regain one use of it."
			]
		},
		{
			"name": "Additional Arcane Shot Option",
			"source": "XGE",
			"page": 28,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Arcane Archer",
			"subclassSource": "XGE",
			"level": 18,
			"header": 2,
			"entries": [
				"You gain an additional Arcane Shot option of your choice when you reach 18th level. Each option also improves when you become an 18th-level fighter."
			]
		},
		{
			"name": "Cavalier",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"The archetypal Cavalier excels at mounted combat. Usually born among the nobility and raised at court, a Cavalier is equally at home leading a cavalry charge or exchanging repartee at a state dinner. Cavaliers also learn how to guard those in their charge from harm, often serving as the protectors of their superiors and of the weak. Compelled to right wrongs or earn prestige, many of these fighters leave their lives of comfort to embark on glorious adventure.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Fighter||Cavalier|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Born to the Saddle|Fighter||Cavalier|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Unwavering Mark|Fighter||Cavalier|XGE|3"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill History}, {@skill Insight}, {@skill Performance}, or {@skill Persuasion}. Alternatively, you learn one language of your choice."
			]
		},
		{
			"name": "Born to the Saddle",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, your mastery as a rider becomes apparent. You have advantage on saving throws made to avoid falling off your mount. If you fall off your mount and descend no more than 10 feet, you can land on your feet if you're not {@condition incapacitated}.",
				"Finally, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed."
			]
		},
		{
			"name": "Unwavering Mark",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can menace your foes, foiling their attacks and punishing them for harming others. When you hit a creature with a melee weapon attack, you can mark the creature until the end of your next turn. This effect ends early if you are {@condition incapacitated} or you die, or if someone else marks the creature.",
				"While it is within 5 feet of you, a creature marked by you has disadvantage on any attack roll that doesn't target you.",
				"In addition, if a creature marked by you deals damage to anyone other than you, you can make a special melee weapon attack against the marked creature as a bonus action on your next turn. You have advantage on the attack roll, and if it hits, the attack's weapon deals extra damage to the target equal to half your fighter level.",
				"Regardless of the number of creatures you mark, you can make this special attack a number of times equal to your Strength modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Warding Maneuver",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to fend off strikes directed at you, your mount, or other creatures nearby. If you or a creature you can see within 5 feet of you is hit by an attack, you can roll {@dice 1d8} as a reaction if you're wielding a melee weapon or a shield. Roll the die, and add the number rolled to the target's AC against that attack. If the attack still hits, the target has resistance against the attack's damage.",
				"You can use this feature a number of times equal to your Constitution modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Hold the Line",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you become a master of locking down your enemies. Creatures provoke an opportunity attack from you when they move 5 feet or more while within your reach, and if you hit a creature with an opportunity attack, the target's speed is reduced to 0 until the end of the current turn."
			]
		},
		{
			"name": "Ferocious Charger",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you can run down your foes, whether you're mounted or not. If you move at least 10 feet in a straight line right before attacking a creature and you hit it with the attack, that target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked {@condition prone}. You can use this feature only once on each of your turns."
			]
		},
		{
			"name": "Vigilant Defender",
			"source": "XGE",
			"page": 30,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Cavalier",
			"subclassSource": "XGE",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, you respond to danger with extraordinary vigilance. In combat, you get a special reaction that you can take once on every creature's turn, except your turn. You can use this special reaction only to make an opportunity attack, and you can't use it on the same turn that you take your normal reaction."
			]
		},
		{
			"name": "Samurai",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A Samurai's resolve is nearly unbreakable, and the enemies in a Samurai's path have two choices: yield or die fighting.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Fighter||Samurai|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fighting Spirit|Fighter||Samurai|XGE|3"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in one of the following skills of your choice: {@skill History}, {@skill Insight}, {@skill Performance}, or {@skill Persuasion}. Alternatively, you learn one language of your choice."
			]
		},
		{
			"name": "Fighting Spirit",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, your intensity in battle can shield you and help you strike true. As a bonus action on your turn, you can give yourself advantage on weapon attack rolls until the end of the current turn. When you do so, you also gain 5 temporary hit points. The number of temporary hit points increases when you reach certain levels in this class, increasing to 10 at 10th level and 15 at 15th level.",
				"You can use this feature three times, and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Elegant Courtier",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, your discipline and attention to detail allow you to excel in social situations. Whenever you make a Charisma ({@skill Persuasion}) check, you gain a bonus to the check equal to your Wisdom modifier.",
				"Your self-control also causes you to gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
			]
		},
		{
			"name": "Tireless Spirit",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, when you roll initiative and have no uses of Fighting Spirit remaining, you regain one use."
			]
		},
		{
			"name": "Rapid Strike",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you learn to trade accuracy for swift strikes. If you take the {@action Attack} action on your turn and have advantage on an attack roll against one of the targets, you can forgo the advantage for that roll to make an additional weapon attack against that target, as part of the same action. You can do so no more than once per turn."
			]
		},
		{
			"name": "Strength before Death",
			"source": "XGE",
			"page": 31,
			"className": "Fighter",
			"classSource": "PHB",
			"subclassShortName": "Samurai",
			"subclassSource": "XGE",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that reduces you to 0 hit points and doesn't kill you outright, you can use your reaction to delay falling {@condition unconscious}, and you can immediately take an extra turn, interrupting the current turn. While you have 0 hit points during that extra turn, taking damage causes death saving throw failures as normal, and three death saving throw failures can still kill you. When the extra turn ends, you fall {@condition unconscious} if you still have 0 hit points.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Protective Field",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "TCE",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 3,
			"consumes": {
				"name": "Psionic Energy Die"
			},
			"entries": [
				"When you or another creature you can see within 30 feet of you takes damage, you can use your reaction to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force."
			]
		},
		{
			"name": "Psionic Strike",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "TCE",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 3,
			"consumes": {
				"name": "Psionic Energy Die"
			},
			"entries": [
				"You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing force damage to the target equal to the number rolled plus your Intelligence modifier."
			]
		},
		{
			"name": "Telekinetic Movement",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "TCE",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"You can move an object or a creature with your mind. As an action, you target one loose object that is Large or smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand. Either way, you can move the target horizontally, vertically, or both. Once you take this action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again."
			]
		},
		{
			"name": "Psi-Powered Leap",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "TCE",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 7,
			"entries": [
				"As a bonus action, you can propel your body with your mind. You gain a flying speed equal to twice your walking speed until the end of the current turn. Once you take this bonus action, you can't do so again until you finish a short or long rest, unless you expend a Psionic Energy die to take it again."
			]
		},
		{
			"name": "Telekinetic Thrust",
			"source": "TCE",
			"page": 42,
			"className": "Fighter",
			"classSource": "TCE",
			"subclassShortName": "Psi Warrior",
			"subclassSource": "TCE",
			"level": 7,
			"entries": [
				"When you deal damage to a target with your Psionic Strike, you can force the target to make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your Intelligence modifier. If the save fails, you can knock the target {@condition prone} or move it up to 10 feet in any direction horizontally."
			]
		}
	]
}


artificer['class'] = [artificer['class'][2]]

export {artificer, fighter}