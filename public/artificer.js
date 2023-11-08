artificer =
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

artificer['class'] = [artificer['class'][2]]

export {artificer}