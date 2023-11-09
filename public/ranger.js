const ranger = 
{
	"class": [
		{
			"name": "Ranger",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 10
			},
			"proficiency": [
				"str",
				"dex"
			],
			"spellcastingAbility": "wis",
			"casterProgression": "1/2",
			"spellsKnownProgression": [
				0,
				2,
				3,
				3,
				4,
				4,
				5,
				5,
				6,
				6,
				7,
				7,
				8,
				8,
				9,
				9,
				10,
				10,
				11,
				11
			],
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:R"
					],
					"progression": {
						"2": 1
					}
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
					"martial"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"animal handling",
								"athletics",
								"insight",
								"investigation",
								"nature",
								"perception",
								"stealth",
								"survival"
							],
							"count": 3
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) {@item scale mail|phb} or (b) {@item leather armor|phb}",
					"(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
					"A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"scale mail|phb"
						],
						"b": [
							"leather armor|phb"
						]
					},
					{
						"a": [
							{
								"item": "shortsword|phb",
								"quantity": 2
							}
						],
						"b": [
							{
								"equipmentType": "weaponSimpleMelee",
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
					},
					{
						"_": [
							"longbow|phb",
							"arrows (20)|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"dex": 13,
					"wis": 13
				},
				"proficienciesGained": {
					"armor": [
						"light",
						"medium",
						"{@item shield|phb|shields}"
					],
					"skills": [
						{
							"choose": {
								"from": [
									"animal handling",
									"athletics",
									"insight",
									"investigation",
									"nature",
									"perception",
									"stealth",
									"survival"
								],
								"count": 1
							}
						}
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
						"{@filter Spells Known|spells|class=ranger}"
					],
					"rows": [
						[
							0
						],
						[
							2
						],
						[
							3
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
							5
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
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Ranger}",
						"{@filter 2nd|spells|level=2|class=Ranger}",
						"{@filter 3rd|spells|level=3|class=Ranger}",
						"{@filter 4th|spells|level=4|class=Ranger}",
						"{@filter 5th|spells|level=5|class=Ranger}"
					],
					"rowsSpellProgression": [
						[
							0,
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
				"Favored Enemy|Ranger||1",
				"Favored Foe|Ranger||1|UAClassFeatureVariants",
				"Favored Foe|Ranger||1|TCE",
				"Natural Explorer|Ranger||1",
				"Deft Explorer|Ranger||1|UAClassFeatureVariants",
				"Deft Explorer|Ranger||1|TCE",
				"Fighting Style|Ranger||2",
				"Martial Versatility|Ranger||2|UAClassFeatureVariants",
				"Spellcasting|Ranger||2",
				"Spell Versatility|Ranger||2|UAClassFeatureVariants",
				"Spellcasting Focus|Ranger||2|UAClassFeatureVariants",
				"Spellcasting Focus|Ranger||2|TCE",
				{
					"classFeature": "Ranger Archetype|Ranger||3",
					"gainSubclassFeature": true
				},
				"Primeval Awareness|Ranger||3",
				"Primal Awareness|Ranger||3|UAClassFeatureVariants",
				"Primal Awareness|Ranger||3|TCE",
				"Ability Score Improvement|Ranger||4",
				"Proficiency Versatility|Ranger||4|UAClassFeatureVariants",
				"Martial Versatility|Ranger||4|TCE",
				"Extra Attack|Ranger||5",
				"Favored Enemy and Natural Explorer improvements|Ranger||6",
				"Deft Explorer Improvement|Ranger||6|TCE",
				{
					"classFeature": "Ranger Archetype feature|Ranger||7",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger||8",
				"Proficiency Versatility|Ranger||8|UAClassFeatureVariants",
				"Land's Stride|Ranger||8",
				"Hide in Plain Sight|Ranger||10",
				"Fade Away|Ranger||10|UAClassFeatureVariants",
				"Nature's Veil|Ranger||10|TCE",
				"Natural Explorer improvement|Ranger||10",
				"Deft Explorer Improvement|Ranger||10|TCE",
				{
					"classFeature": "Ranger Archetype feature|Ranger||11",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger||12",
				"Proficiency Versatility|Ranger||12|UAClassFeatureVariants",
				"Vanish|Ranger||14",
				"Favored Enemy improvement|Ranger||14",
				{
					"classFeature": "Ranger Archetype feature|Ranger||15",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger||16",
				"Proficiency Versatility|Ranger||16|UAClassFeatureVariants",
				"Feral Senses|Ranger||18",
				"Ability Score Improvement|Ranger||19",
				"Proficiency Versatility|Ranger||19|UAClassFeatureVariants",
				"Foe Slayer|Ranger||20"
			],
			"subclassTitle": "Ranger Archetype",
			"fluff": [
				{
					"name": "Ranger",
					"type": "section",
					"entries": [
						"Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.",
						"After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.",
						"Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.",
						"Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
						{
							"type": "entries",
							"name": "Deadly Hunters",
							"entries": [
								"Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization\u2014humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
								"Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
							]
						},
						{
							"type": "entries",
							"name": "Independent Adventurers",
							"entries": [
								"Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first\u2014and possibly the last\u2014line of defense.",
								"This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Ranger",
							"entries": [
								"As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain\u2014perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.",
								"What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the {@background outlander} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 89
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together."
							],
							"by": "Soveliss"
						},
						"Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.",
						"A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.",
						"If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.",
						{
							"type": "entries",
							"name": "View of the World",
							"entries": [
								"A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect\u2014though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.",
								"If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?",
								{
									"type": "table",
									"caption": "View of the World",
									"colLabels": [
										"{@dice d6}",
										"View"
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
											"Towns and cities are the best places for those who can't survive on their own."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"The advancement of civilization is the best way to thwart chaos, but its reach must be monitored."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Walls are for cowards, who huddle behind them while others do the work of making the world safe."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Cities breed weakness by isolating folk from the harsh lessons of the wild."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Homelands",
							"entries": [
								"All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.",
								"Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?",
								{
									"type": "table",
									"caption": "Homelands",
									"colLabels": [
										"{@dice d6}",
										"Homeland"
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
											"You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"As part of a group of nomads, you acquired the skills for surviving in the desert."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your early life in the Underdark prepared you for the challenges of combating its denizens."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Because you grew up among the peaks, finding the best path through the mountains is second nature to you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Sworn Enemy",
							"entries": [
								"Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.",
								"What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?",
								{
									"type": "table",
									"caption": "Sworn Enemies",
									"colLabels": [
										"{@dice d6}",
										"Enemy"
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
											"You seek revenge on nature's behalf for the great transgressions your foe has committed."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your forebears or predecessors fought these creatures, and so shall you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You find your foe fascinating, and you collect books of tales and history concerning it."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"You collect tokens of your fallen enemies to remind you of each kill."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You respect your chosen enemy, and you see your battles as a test of respective skills."
										]
									]
								}
							]
						}
					],
					"page": 40,
					"source": "XGE"
				}
			]
		},
		{
			"name": "Ranger (Spell-less)",
			"source": "UAModifyingClasses",
			"page": 5,
			"hd": {
				"number": 1,
				"faces": 10
			},
			"proficiency": [
				"str",
				"dex"
			],
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:R"
					],
					"progression": {
						"2": 1
					}
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
					"martial"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"animal handling",
								"athletics",
								"insight",
								"investigation",
								"nature",
								"perception",
								"stealth",
								"survival"
							],
							"count": 3
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) {@item scale mail|phb} or (b) {@item leather armor|phb}",
					"(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
					"A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"scale mail|phb"
						],
						"b": [
							"leather armor|phb"
						]
					},
					{
						"a": [
							{
								"item": "shortsword|phb",
								"quantity": 2
							}
						],
						"b": [
							{
								"equipmentType": "weaponSimpleMelee",
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
					},
					{
						"_": [
							"longbow|phb",
							"arrows (20)|phb"
						]
					}
				]
			},
			"classTableGroups": [
				{
					"colLabels": [
						"Maneuvers Known"
					],
					"rows": [
						[
							0
						],
						[
							2
						],
						[
							2
						],
						[
							2
						],
						[
							3
						],
						[
							3
						],
						[
							3
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
							4
						],
						[
							5
						],
						[
							5
						],
						[
							5
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
							6
						],
						[
							6
						]
					]
				}
			],
			"classFeatures": [
				"Favored Enemy|Ranger (Spell-less)|UAModifyingClasses|1",
				"Favored Foe|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants",
				"Favored Foe|Ranger (Spell-less)|UAModifyingClasses|1|TCE",
				"Natural Explorer|Ranger (Spell-less)|UAModifyingClasses|1",
				"Deft Explorer|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants",
				"Deft Explorer|Ranger (Spell-less)|UAModifyingClasses|1|TCE",
				"Fighting Style|Ranger (Spell-less)|UAModifyingClasses|2",
				"Martial Versatility|Ranger (Spell-less)|UAModifyingClasses|2|UAClassFeatureVariants",
				"Combat Superiority|Ranger (Spell-less)|UAModifyingClasses|2",
				{
					"classFeature": "Ranger Archetype|Ranger (Spell-less)|UAModifyingClasses|3",
					"gainSubclassFeature": true
				},
				"Primeval Awareness|Ranger (Spell-less)|UAModifyingClasses|3",
				"Primal Awareness|Ranger (Spell-less)|UAModifyingClasses|3|UAClassFeatureVariants",
				"Primal Awareness|Ranger (Spell-less)|UAModifyingClasses|3|TCE",
				"Poultices|Ranger (Spell-less)|UAModifyingClasses|3",
				"Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|4",
				"Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|4|UAClassFeatureVariants",
				"Martial Versatility|Ranger (Spell-less)|UAModifyingClasses|4|TCE",
				"Extra Attack|Ranger (Spell-less)|UAModifyingClasses|5",
				"Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|5",
				"Favored Enemy and Natural Explorer improvements|Ranger (Spell-less)|UAModifyingClasses|6",
				"Deft Explorer Improvement|Ranger (Spell-less)|UAModifyingClasses|6|TCE",
				{
					"classFeature": "Ranger Archetype feature|Ranger (Spell-less)|UAModifyingClasses|7",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|8",
				"Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|8|UAClassFeatureVariants",
				"Land's Stride|Ranger (Spell-less)|UAModifyingClasses|8",
				"Natural Antivenom|Ranger (Spell-less)|UAModifyingClasses|9",
				"Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|9",
				"Hide in Plain Sight|Ranger (Spell-less)|UAModifyingClasses|10",
				"Fade Away|Ranger (Spell-less)|UAModifyingClasses|10|UAClassFeatureVariants",
				"Nature's Veil|Ranger (Spell-less)|UAModifyingClasses|10|TCE",
				"Natural Explorer improvement|Ranger (Spell-less)|UAModifyingClasses|10",
				"Deft Explorer Improvement|Ranger (Spell-less)|UAModifyingClasses|10|TCE",
				{
					"classFeature": "Ranger Archetype feature|Ranger (Spell-less)|UAModifyingClasses|11",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|12",
				"Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|12|UAClassFeatureVariants",
				"Call Natural Allies|Ranger (Spell-less)|UAModifyingClasses|13",
				"Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|13",
				"Vanish|Ranger (Spell-less)|UAModifyingClasses|14",
				"Favored Enemy improvement|Ranger (Spell-less)|UAModifyingClasses|14",
				{
					"classFeature": "Ranger Archetype feature|Ranger (Spell-less)|UAModifyingClasses|15",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|16",
				"Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|16|UAClassFeatureVariants",
				"Relentless|Ranger (Spell-less)|UAModifyingClasses|17",
				"Additional Maneuvers|Ranger (Spell-less)|UAModifyingClasses|17",
				"Feral Senses|Ranger (Spell-less)|UAModifyingClasses|18",
				"Ability Score Improvement|Ranger (Spell-less)|UAModifyingClasses|19",
				"Proficiency Versatility|Ranger (Spell-less)|UAModifyingClasses|19|UAClassFeatureVariants",
				"Foe Slayer|Ranger (Spell-less)|UAModifyingClasses|20"
			],
			"subclassTitle": "Ranger Archetype",
			"fluff": [
				{
					"name": "Ranger",
					"type": "section",
					"entries": [
						"Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.",
						"After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.",
						"Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.",
						"Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
						{
							"type": "entries",
							"name": "Deadly Hunters",
							"entries": [
								"Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization\u2014humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
								"Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
							]
						},
						{
							"type": "entries",
							"name": "Independent Adventurers",
							"entries": [
								"Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first\u2014and possibly the last\u2014line of defense.",
								"This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Ranger",
							"entries": [
								"As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain\u2014perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.",
								"What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the {@background outlander} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 89
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together."
							],
							"by": "Soveliss"
						},
						"Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.",
						"A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.",
						"If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.",
						{
							"type": "entries",
							"name": "View of the World",
							"entries": [
								"A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect\u2014though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.",
								"If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?",
								{
									"type": "table",
									"caption": "View of the World",
									"colLabels": [
										"{@dice d6}",
										"View"
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
											"Towns and cities are the best places for those who can't survive on their own."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"The advancement of civilization is the best way to thwart chaos, but its reach must be monitored."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Walls are for cowards, who huddle behind them while others do the work of making the world safe."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Cities breed weakness by isolating folk from the harsh lessons of the wild."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Homelands",
							"entries": [
								"All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.",
								"Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?",
								{
									"type": "table",
									"caption": "Homelands",
									"colLabels": [
										"{@dice d6}",
										"Homeland"
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
											"You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"As part of a group of nomads, you acquired the skills for surviving in the desert."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your early life in the Underdark prepared you for the challenges of combating its denizens."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Because you grew up among the peaks, finding the best path through the mountains is second nature to you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Sworn Enemy",
							"entries": [
								"Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.",
								"What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?",
								{
									"type": "table",
									"caption": "Sworn Enemies",
									"colLabels": [
										"{@dice d6}",
										"Enemy"
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
											"You seek revenge on nature's behalf for the great transgressions your foe has committed."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your forebears or predecessors fought these creatures, and so shall you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You find your foe fascinating, and you collect books of tales and history concerning it."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"You collect tokens of your fallen enemies to remind you of each kill."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You respect your chosen enemy, and you see your battles as a test of respective skills."
										]
									]
								}
							]
						}
					],
					"page": 40,
					"source": "XGE"
				}
			]
		},
		{
			"name": "Ranger (Ambuscade)",
			"source": "UARanger",
			"page": 2,
			"hd": {
				"number": 2,
				"faces": 6
			},
			"proficiency": [
				"dex",
				"wis"
			],
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:R"
					],
					"progression": {
						"2": 1
					}
				}
			],
			"startingProficiencies": {
				"armor": [
					"light",
					"{@item shield|phb|shields}"
				],
				"weapons": [
					"simple",
					"martial"
				],
				"tools": [
					"{@item herbalism kit|PHB}"
				],
				"toolProficiencies": [
					{
						"herbalism kit": true
					}
				],
				"skills": [
					{
						"choose": {
							"from": [
								"animal handling",
								"athletics",
								"insight",
								"investigation",
								"nature",
								"perception",
								"stealth",
								"survival"
							],
							"count": 3
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"{@item leather armor|phb}",
					"(a) two {@item shortsword|phb|shortswords} or (b) two {@filter martial melee weapons|items|source=phb|category=basic|type=martial weapon;melee weapon=u~u~sand} or (c) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
					"(a) a {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows} or (b) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon}"
				],
				"defaultData": [
					{
						"_": [
							"leather armor|phb"
						]
					},
					{
						"a": [
							{
								"item": "shortsword|phb",
								"quantity": 2
							}
						],
						"b": [
							{
								"equipmentType": "weaponMartialMelee",
								"quantity": 2
							}
						],
						"c": [
							{
								"equipmentType": "weaponMartial"
							},
							"shield|phb"
						]
					},
					{
						"a": [
							"dungeoneer's pack|phb"
						],
						"b": [
							"explorer's pack|phb"
						]
					},
					{
						"a": [
							"longbow|phb",
							"arrows (20)|phb"
						],
						"b": [
							{
								"equipmentType": "weaponMartial"
							}
						]
					}
				]
			},
			"classFeatures": [
				"Ambuscade|Ranger (Ambuscade)|UARanger|1",
				"Natural Explorer|Ranger||1",
				"Fighting Style|Ranger||2",
				"Skirmisher's Stealth|Ranger (Ambuscade)|UARanger|2",
				"Primeval Awareness|Ranger||3",
				{
					"classFeature": "Spirit Path|Ranger (Ambuscade)|UARanger|3",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger||4",
				"Extra Attack|Ranger||5"
			],
			"subclassTitle": "Ranger Path"
		},
		{
			"name": "Ranger (Revised)",
			"source": "UATheRangerRevised",
			"page": 1,
			"hd": {
				"number": 1,
				"faces": 10
			},
			"proficiency": [
				"str",
				"dex"
			],
			"spellcastingAbility": "wis",
			"casterProgression": "1/2",
			"spellsKnownProgression": [
				0,
				2,
				3,
				3,
				4,
				4,
				5,
				5,
				6,
				6,
				7,
				7,
				8,
				8,
				9,
				9,
				10,
				10,
				11,
				11
			],
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:R"
					],
					"progression": {
						"2": 1
					}
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
					"martial"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"animal handling",
								"athletics",
								"insight",
								"investigation",
								"nature",
								"perception",
								"stealth",
								"survival"
							],
							"count": 3
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) {@item scale mail|phb} or (b) {@item leather armor|phb}",
					"(a) two {@item shortsword|phb|shortswords} or (b) two {@filter simple melee weapons|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
					"A {@item longbow|phb} and a {@item quiver|phb} of {@item arrows (20)|phb|20 arrows}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"scale mail|phb"
						],
						"b": [
							"leather armor|phb"
						]
					},
					{
						"a": [
							{
								"item": "shortsword|phb",
								"quantity": 2
							}
						],
						"b": [
							{
								"equipmentType": "weaponSimpleMelee",
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
					},
					{
						"_": [
							"longbow|phb",
							"arrows (20)|phb"
						]
					}
				]
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Spells Known|spells|class=ranger}"
					],
					"rows": [
						[
							0
						],
						[
							2
						],
						[
							3
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
							5
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
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Ranger}",
						"{@filter 2nd|spells|level=2|class=Ranger}",
						"{@filter 3rd|spells|level=3|class=Ranger}",
						"{@filter 4th|spells|level=4|class=Ranger}",
						"{@filter 5th|spells|level=5|class=Ranger}"
					],
					"rowsSpellProgression": [
						[
							0,
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
				"Favored Enemy|Ranger (Revised)|UATheRangerRevised|1",
				"Natural Explorer|Ranger (Revised)|UATheRangerRevised|1",
				"Spellcasting|Ranger (Revised)|UATheRangerRevised|2",
				"Fighting Style|Ranger (Revised)|UATheRangerRevised|2",
				"Martial Versatility|Ranger (Revised)|UATheRangerRevised|2|UAClassFeatureVariants",
				"Primeval Awareness|Ranger (Revised)|UATheRangerRevised|3",
				{
					"classFeature": "Ranger Conclave|Ranger (Revised)|UATheRangerRevised|3",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|4",
				"Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|4|UAClassFeatureVariants",
				"Martial Versatility|Ranger (Revised)|UATheRangerRevised|4|TCE",
				{
					"classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|5",
					"gainSubclassFeature": true
				},
				"Greater Favored Enemy|Ranger (Revised)|UATheRangerRevised|6",
				{
					"classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|7",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|8",
				"Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|8|UAClassFeatureVariants",
				"Fleet of Foot|Ranger (Revised)|UATheRangerRevised|8",
				"Hide in Plain Sight|Ranger (Revised)|UATheRangerRevised|10",
				{
					"classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|11",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|12",
				"Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|12|UAClassFeatureVariants",
				"Vanish|Ranger (Revised)|UATheRangerRevised|14",
				{
					"classFeature": "Ranger Conclave feature|Ranger (Revised)|UATheRangerRevised|15",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|16",
				"Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|16|UAClassFeatureVariants",
				"Feral Senses|Ranger (Revised)|UATheRangerRevised|18",
				"Ability Score Improvement|Ranger (Revised)|UATheRangerRevised|19",
				"Proficiency Versatility|Ranger (Revised)|UATheRangerRevised|19|UAClassFeatureVariants",
				"Foe Slayer|Ranger (Revised)|UATheRangerRevised|20"
			],
			"subclassTitle": "Ranger Conclave",
			"fluff": [
				{
					"name": "Ranger",
					"type": "section",
					"entries": [
						"Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another.",
						"After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon's thick scales.",
						"Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he's been tracking and sends the hawk to distract the creature while he readies his bow.",
						"Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
						{
							"type": "entries",
							"name": "Deadly Hunters",
							"entries": [
								"Warriors of the wilderness, rangers specialize in hunting the monsters that threaten the edges of civilization\u2014humanoid raiders, rampaging beasts and monstrosities, terrible giants, and deadly dragons. They learn to track their quarry as a predator does, moving stealthily through the wilds and hiding themselves in brush and rubble. Rangers focus their combat training on techniques that are particularly useful against their specific favored foes.",
								"Thanks to their familiarity with the wilds, rangers acquire the ability to cast spells that harness nature's power, much as a druid does. Their spells, like their combat abilities, emphasize speed, stealth, and the hunt. A ranger's talents and abilities are honed with deadly focus on the grim task of protecting the borderlands."
							]
						},
						{
							"type": "entries",
							"name": "Independent Adventurers",
							"entries": [
								"Though a ranger might make a living as a hunter, a guide, or a tracker, a ranger's true calling is to defend the outskirts of civilization from the ravages of monsters and humanoid hordes that press in from the wild. In some places, rangers gather in secretive orders or join forces with druidic circles. Many rangers, though, are independent almost to a fault, knowing that, when a dragon or a band of orcs attacks, a ranger might be the first\u2014and possibly the last\u2014line of defense.",
								"This fierce independence makes rangers well suited to adventuring, since they are accustomed to life far from the comforts of a dry bed and a hot bath. Faced with city-bred adventurers who grouse and whine about the hardships of the wild, rangers respond with some mixture of amusement, frustration, and compassion. But they quickly learn that other adventurers who can carry their own weight in a fight against civilization's foes are worth any extra burden. Coddled city folk might not know how to feed themselves or find fresh water in the wild, but they make up for it in other ways."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Ranger",
							"entries": [
								"As you create your ranger character, consider the nature of the training that gave you your particular capabilities. Did you train with a single mentor, wandering the wilds together until you mastered the ranger's ways? Did you leave your apprenticeship, or was your mentor slain\u2014perhaps by the same kind of monster that became your favored enemy? Or perhaps you learned your skills as part of a band of rangers affiliated with a druidic circle, trained in mystic paths as well as wilderness lore. You might be self-taught, a recluse who learned combat skills, tracking, and even a magical connection to nature through the necessity of surviving in the wilds.",
								"What's the source of your particular hatred of a certain kind of enemy? Did a monster kill someone you loved or destroy your home village? Or did you see too much of the destruction these monsters cause and commit yourself to reining in their depredations? Is your adventuring career a continuation of your work in protecting the borderlands, or a significant change? What made you join up with a band of adventurers? Do you find it challenging to teach new allies the ways of the wild, or do you welcome the relief from solitude that they offer?",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a ranger quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. (Some rangers who focus on two-weapon fighting make Strength higher than Dexterity.) Second, choose the {@background outlander} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 89
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"I spend a lot of my life away from civilization, keeping to its fringes to protect it. Don't assume that because I don't bend the knee to your king that I haven't done more to protect him than all his knights put together."
							],
							"by": "Soveliss"
						},
						"Rangers are free-minded wanderers and seekers who patrol the edges of civilized territory, turning back the denizens of the wild lands beyond. It is a thankless job, since their efforts are rarely understood and almost never rewarded. Yet rangers persist in their duties, never doubting that their work makes the world a safer place.",
						"A relationship with civilization informs every ranger's personality and history. Some rangers see themselves as enforcers of the law and bringers of justice on civilization's frontier, answering to no sovereign power. Others are survivalists who eschew civilization altogether. They vanquish monsters to keep themselves safe while they live in and travel through the perilous wild areas of the world. If their efforts also benefit the kingdoms and other civilized realms that they avoid, so be it.",
						"If you're creating or playing a ranger character, the following sections offer ideas for embellishing the character and enhancing your roleplaying experience.",
						{
							"type": "entries",
							"name": "View of the World",
							"entries": [
								"A ranger's view of the world begins (and sometimes ends) with that character's outlook toward civilized folk and the places they occupy. Some rangers have an attitude toward civilization that's deeply rooted in disdain, while others pity the people they have sworn to protect\u2014though on the battlefield, it's impossible to tell the difference between one ranger and another. Indeed, to those who have seen them operate and been the beneficiaries of their prowess, it scarcely matters why rangers do what they do. That said, no two rangers are likely to express their opinions on any matter in the same way.",
								"If you haven't yet thought about the details of your character's worldview, consider putting a finer point on things by summarizing that viewpoint in a short statement (such as the entries on the following table). How might that feeling affect the way you conduct yourself?",
								{
									"type": "table",
									"caption": "View of the World",
									"colLabels": [
										"{@dice d6}",
										"View"
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
											"Towns and cities are the best places for those who can't survive on their own."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"The advancement of civilization is the best way to thwart chaos, but its reach must be monitored."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Towns and cities are a necessary evil, but once the wilderness is purged of supernatural threats, we will need them no more."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Walls are for cowards, who huddle behind them while others do the work of making the world safe."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Visiting a town is not unpleasant, but after a few days I feel the irresistible call to return to the wild."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Cities breed weakness by isolating folk from the harsh lessons of the wild."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Homelands",
							"entries": [
								"All rangers, regardless of how they came to take up the profession, have a strong connection to the natural world and its various terrains. For some rangers, the wilderness is where they grew up, either as a result of being born there or moving there at a young age. For other rangers, civilization was originally home, but the wilderness became a second homeland.",
								"Think of your character's backstory and decide what terrain feels most like home, whether or not you were born there. What does that terrain say about your personality? Does it influence which spells you choose to learn? Have your experiences there shaped who your favored enemies are?",
								{
									"type": "table",
									"caption": "Homelands",
									"colLabels": [
										"{@dice d6}",
										"Homeland"
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
											"You patrolled an ancient forest, darkened and corrupted by several crossings to the Shadowfell."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"As part of a group of nomads, you acquired the skills for surviving in the desert."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your early life in the Underdark prepared you for the challenges of combating its denizens."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You dwelled on the edge of a swamp, in an area imperiled by land creatures as well as aquatic ones."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Because you grew up among the peaks, finding the best path through the mountains is second nature to you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You wandered the far north, learning how to protect yourself and prosper in a realm overrun by ice."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Sworn Enemy",
							"entries": [
								"Every ranger begins with a favored enemy (or two). The determination of a favored enemy might be tied to a specific event in the character's early life, or it might be entirely a matter of choice.",
								"What spurred your character to select a particular enemy? Was the choice made because of tradition or curiosity, or do you have a grudge to settle?",
								{
									"type": "table",
									"caption": "Sworn Enemies",
									"colLabels": [
										"{@dice d6}",
										"Enemy"
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
											"You seek revenge on nature's behalf for the great transgressions your foe has committed."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your forebears or predecessors fought these creatures, and so shall you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"You bear no enmity toward your foe. You stalk such creatures as a hunter tracks down a wild animal."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You find your foe fascinating, and you collect books of tales and history concerning it."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"You collect tokens of your fallen enemies to remind you of each kill."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You respect your chosen enemy, and you see your battles as a test of respective skills."
										]
									]
								}
							]
						}
					],
					"page": 40,
					"source": "XGE"
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Beast Master",
			"shortName": "Beast Master",
			"source": "PHB",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 93,
			"subclassFeatures": [
				"Beast Master|Ranger||Beast Master||3",
				"Exceptional Training|Ranger||Beast Master||7",
				"Bestial Fury|Ranger||Beast Master||11",
				"Share Spells|Ranger||Beast Master||15"
			]
		},
		{
			"name": "Beast Master",
			"shortName": "Beast Master",
			"source": "PHB",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 93,
			"subclassFeatures": [
				"Beast Master|Ranger (Spell-less)|UAModifyingClasses|Beast Master||3",
				"Exceptional Training|Ranger (Spell-less)|UAModifyingClasses|Beast Master||7",
				"Bestial Fury|Ranger (Spell-less)|UAModifyingClasses|Beast Master||11",
				"Beastly Coordination|Ranger (Spell-less)|UAModifyingClasses|Beast Master||15"
			]
		},
		{
			"name": "Hunter",
			"shortName": "Hunter",
			"source": "PHB",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 93,
			"srd": true,
			"subclassFeatures": [
				"Hunter|Ranger||Hunter||3",
				"Defensive Tactics|Ranger||Hunter||7",
				"Multiattack|Ranger||Hunter||11",
				"Superior Hunter's Defense|Ranger||Hunter||15"
			]
		},
		{
			"name": "Hunter",
			"shortName": "Hunter",
			"source": "PHB",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 93,
			"subclassFeatures": [
				"Hunter|Ranger (Spell-less)|UAModifyingClasses|Hunter||3",
				"Defensive Tactics|Ranger (Spell-less)|UAModifyingClasses|Hunter||7",
				"Multiattack|Ranger (Spell-less)|UAModifyingClasses|Hunter||11",
				"Superior Hunter's Defense|Ranger (Spell-less)|UAModifyingClasses|Hunter||15"
			]
		},
		{
			"name": "Guardian",
			"shortName": "Guardian",
			"source": "UARanger",
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"page": 3,
			"subclassFeatures": [
				"Guardian|Ranger (Ambuscade)|UARanger|Guardian|UARanger|3"
			]
		},
		{
			"name": "Seeker",
			"shortName": "Seeker",
			"source": "UARanger",
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"page": 4,
			"subclassFeatures": [
				"Seeker|Ranger (Ambuscade)|UARanger|Seeker|UARanger|3"
			]
		},
		{
			"name": "Stalker",
			"shortName": "Stalker",
			"source": "UARanger",
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"page": 4,
			"subclassFeatures": [
				"Stalker|Ranger (Ambuscade)|UARanger|Stalker|UARanger|3"
			]
		},
		{
			"name": "Deep Stalker (UA)",
			"shortName": "Deep Stalker (UA)",
			"source": "UALightDarkUnderdark",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"disguise self"
						],
						"5": [
							"rope trick"
						],
						"9": [
							"glyph of warding"
						],
						"13": [
							"greater invisibility"
						],
						"17": [
							"seeming"
						]
					}
				}
			],
			"subclassFeatures": [
				"Deep Stalker|Ranger||Deep Stalker (UA)|UALightDarkUnderdark|3",
				"Iron Mind|Ranger||Deep Stalker (UA)|UALightDarkUnderdark|7",
				"Stalker's Flurry|Ranger||Deep Stalker (UA)|UALightDarkUnderdark|11",
				"Stalker's Dodge|Ranger||Deep Stalker (UA)|UALightDarkUnderdark|15"
			]
		},
		{
			"name": "Deep Stalker (UA)",
			"shortName": "Deep Stalker (UA)",
			"source": "UALightDarkUnderdark",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Deep Stalker|Ranger (Spell-less)|UAModifyingClasses|Deep Stalker (UA)|UALightDarkUnderdark|3",
				"Iron Mind|Ranger (Spell-less)|UAModifyingClasses|Deep Stalker (UA)|UALightDarkUnderdark|7",
				"Stalker's Flurry|Ranger (Spell-less)|UAModifyingClasses|Deep Stalker (UA)|UALightDarkUnderdark|11",
				"Stalker's Dodge|Ranger (Spell-less)|UAModifyingClasses|Deep Stalker (UA)|UALightDarkUnderdark|15"
			]
		},
		{
			"name": "Beast Conclave",
			"shortName": "Beast Conclave",
			"source": "UATheRangerRevised",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 5,
			"subclassFeatures": [
				"Beast Conclave (UA)|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|3",
				"Coordinated Attack|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|5",
				"Beast's Defense|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|7",
				"Storm of Claw and Fangs|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|11",
				"Superior Beast's Defense|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|15"
			]
		},
		{
			"name": "Deep Stalker Conclave",
			"shortName": "Deep Stalker Conclave",
			"source": "UATheRangerRevised",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 7,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"disguise self"
						],
						"5": [
							"rope trick"
						],
						"9": [
							"glyph of warding"
						],
						"13": [
							"greater invisibility"
						],
						"17": [
							"seeming"
						]
					}
				}
			],
			"subclassFeatures": [
				"Deep Stalker Conclave (UA)|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|5",
				"Iron Mind|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|7",
				"Stalker's Flurry|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|11",
				"Stalker's Dodge|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|15"
			]
		},
		{
			"name": "Hunter Conclave",
			"shortName": "Hunter Conclave",
			"source": "UATheRangerRevised",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 7,
			"subclassFeatures": [
				"Hunter Conclave (UA)|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|5",
				"Defensive Tactics|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|7",
				"Multiattack|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|11",
				"Superior Hunter's Defense|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|15"
			]
		},
		{
			"name": "Horizon Walker (UA)",
			"shortName": "Horizon Walker (UA)",
			"source": "UARangerAndRogue",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"alter self"
						],
						"9": [
							"protection from energy"
						],
						"13": [
							"banishment"
						],
						"17": [
							"teleportation circle"
						]
					}
				}
			],
			"subclassFeatures": [
				"Horizon Walker|Ranger||Horizon Walker (UA)|UARangerAndRogue|3",
				"Ethereal Step|Ranger||Horizon Walker (UA)|UARangerAndRogue|7",
				"Distant Strike|Ranger||Horizon Walker (UA)|UARangerAndRogue|11",
				"Spectral Defense|Ranger||Horizon Walker (UA)|UARangerAndRogue|15"
			]
		},
		{
			"name": "Horizon Walker (UA)",
			"shortName": "Horizon Walker (UA)",
			"source": "UARangerAndRogue",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Horizon Walker|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker (UA)|UARangerAndRogue|3",
				"Ethereal Step|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker (UA)|UARangerAndRogue|7",
				"Distant Strike|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker (UA)|UARangerAndRogue|11",
				"Spectral Defense|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker (UA)|UARangerAndRogue|15"
			]
		},
		{
			"name": "Horizon Walker (UA)",
			"shortName": "Horizon Walker (UA)",
			"source": "UARangerAndRogue",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"alter self"
						],
						"9": [
							"protection from energy"
						],
						"13": [
							"banishment"
						],
						"17": [
							"teleportation circle"
						]
					}
				}
			],
			"subclassFeatures": [
				"Horizon Walker|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|5",
				"Ethereal Step|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|7",
				"Distant Strike|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|11",
				"Spectral Defense|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|15"
			]
		},
		{
			"name": "Primeval Guardian (UA)",
			"shortName": "Primeval Guardian (UA)",
			"source": "UARangerAndRogue",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"entangle"
						],
						"5": [
							"enhance ability"
						],
						"9": [
							"conjure animals"
						],
						"13": [
							"giant insect"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Primeval Guardian|Ranger||Primeval Guardian (UA)|UARangerAndRogue|3",
				"Ancient Fortitude|Ranger||Primeval Guardian (UA)|UARangerAndRogue|7",
				"Rooted Defense|Ranger||Primeval Guardian (UA)|UARangerAndRogue|11",
				"Guardian Aura|Ranger||Primeval Guardian (UA)|UARangerAndRogue|15"
			]
		},
		{
			"name": "Primeval Guardian (UA)",
			"shortName": "Primeval Guardian (UA)",
			"source": "UARangerAndRogue",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 2,
			"subclassFeatures": [
				"Primeval Guardian|Ranger (Spell-less)|UAModifyingClasses|Primeval Guardian (UA)|UARangerAndRogue|3",
				"Ancient Fortitude|Ranger (Spell-less)|UAModifyingClasses|Primeval Guardian (UA)|UARangerAndRogue|7",
				"Rooted Defense|Ranger (Spell-less)|UAModifyingClasses|Primeval Guardian (UA)|UARangerAndRogue|11",
				"Guardian Aura|Ranger (Spell-less)|UAModifyingClasses|Primeval Guardian (UA)|UARangerAndRogue|15"
			]
		},
		{
			"name": "Primeval Guardian (UA)",
			"shortName": "Primeval Guardian (UA)",
			"source": "UARangerAndRogue",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 2,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"entangle"
						],
						"5": [
							"enhance ability"
						],
						"9": [
							"conjure animals"
						],
						"13": [
							"giant insect"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Primeval Guardian|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|5",
				"Ancient Fortitude|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|7",
				"Rooted Defense|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|11",
				"Guardian Aura|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|15"
			]
		},
		{
			"name": "Monster Slayer (UA)",
			"shortName": "Monster Slayer (UA)",
			"source": "UAATrioOfSubclasses",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"zone of truth"
						],
						"9": [
							"magic circle"
						],
						"13": [
							"banishment"
						],
						"17": [
							"planar binding"
						]
					}
				}
			],
			"subclassFeatures": [
				"Monster Slayer|Ranger||Monster Slayer (UA)|UAATrioOfSubclasses|3",
				"Supernatural Defense|Ranger||Monster Slayer (UA)|UAATrioOfSubclasses|7",
				"Relentless Slayer|Ranger||Monster Slayer (UA)|UAATrioOfSubclasses|11",
				"Slayer's Counter|Ranger||Monster Slayer (UA)|UAATrioOfSubclasses|15"
			]
		},
		{
			"name": "Monster Slayer (UA)",
			"shortName": "Monster Slayer (UA)",
			"source": "UAATrioOfSubclasses",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 3,
			"isReprinted": true,
			"subclassFeatures": [
				"Monster Slayer|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer (UA)|UAATrioOfSubclasses|3",
				"Supernatural Defense|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer (UA)|UAATrioOfSubclasses|7",
				"Relentless Slayer|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer (UA)|UAATrioOfSubclasses|11",
				"Slayer's Counter|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer (UA)|UAATrioOfSubclasses|15"
			]
		},
		{
			"name": "Monster Slayer (UA)",
			"shortName": "Monster Slayer (UA)",
			"source": "UAATrioOfSubclasses",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"zone of truth"
						],
						"9": [
							"magic circle"
						],
						"13": [
							"banishment"
						],
						"17": [
							"planar binding"
						]
					}
				}
			],
			"subclassFeatures": [
				"Monster Slayer|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|5",
				"Supernatural Defense|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|7",
				"Relentless Slayer|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|11",
				"Slayer's Counter|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|15"
			]
		},
		{
			"name": "Gloom Stalker",
			"shortName": "Gloom Stalker",
			"source": "XGE",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 41,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"disguise self"
						],
						"5": [
							"rope trick"
						],
						"9": [
							"fear"
						],
						"13": [
							"greater invisibility"
						],
						"17": [
							"seeming"
						]
					}
				}
			],
			"subclassFeatures": [
				"Gloom Stalker|Ranger||Gloom Stalker|XGE|3",
				"Iron Mind|Ranger||Gloom Stalker|XGE|7",
				"Stalker's Flurry|Ranger||Gloom Stalker|XGE|11",
				"Shadowy Dodge|Ranger||Gloom Stalker|XGE|15"
			]
		},
		{
			"name": "Gloom Stalker",
			"shortName": "Gloom Stalker",
			"source": "XGE",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 41,
			"subclassFeatures": [
				"Gloom Stalker|Ranger (Spell-less)|UAModifyingClasses|Gloom Stalker|XGE|3",
				"Iron Mind|Ranger (Spell-less)|UAModifyingClasses|Gloom Stalker|XGE|7",
				"Stalker's Flurry|Ranger (Spell-less)|UAModifyingClasses|Gloom Stalker|XGE|11",
				"Shadowy Dodge|Ranger (Spell-less)|UAModifyingClasses|Gloom Stalker|XGE|15"
			]
		},
		{
			"name": "Gloom Stalker",
			"shortName": "Gloom Stalker",
			"source": "XGE",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 41,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"disguise self"
						],
						"5": [
							"rope trick"
						],
						"9": [
							"fear"
						],
						"13": [
							"greater invisibility"
						],
						"17": [
							"seeming"
						]
					}
				}
			],
			"subclassFeatures": [
				"Gloom Stalker|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|5",
				"Iron Mind|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|7",
				"Stalker's Flurry|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|11",
				"Shadowy Dodge|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|15"
			]
		},
		{
			"name": "Horizon Walker",
			"shortName": "Horizon Walker",
			"source": "XGE",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 42,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"misty step"
						],
						"9": [
							"haste"
						],
						"13": [
							"banishment"
						],
						"17": [
							"teleportation circle"
						]
					}
				}
			],
			"subclassFeatures": [
				"Horizon Walker|Ranger||Horizon Walker|XGE|3",
				"Ethereal Step|Ranger||Horizon Walker|XGE|7",
				"Distant Strike|Ranger||Horizon Walker|XGE|11",
				"Spectral Defense|Ranger||Horizon Walker|XGE|15"
			]
		},
		{
			"name": "Horizon Walker",
			"shortName": "Horizon Walker",
			"source": "XGE",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 42,
			"subclassFeatures": [
				"Horizon Walker|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker|XGE|3",
				"Ethereal Step|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker|XGE|7",
				"Distant Strike|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker|XGE|11",
				"Spectral Defense|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker|XGE|15"
			]
		},
		{
			"name": "Horizon Walker",
			"shortName": "Horizon Walker",
			"source": "XGE",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 42,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"misty step"
						],
						"9": [
							"haste"
						],
						"13": [
							"banishment"
						],
						"17": [
							"teleportation circle"
						]
					}
				}
			],
			"subclassFeatures": [
				"Horizon Walker|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|5",
				"Ethereal Step|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|7",
				"Distant Strike|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|11",
				"Spectral Defense|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|15"
			]
		},
		{
			"name": "Monster Slayer",
			"shortName": "Monster Slayer",
			"source": "XGE",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 43,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"zone of truth"
						],
						"9": [
							"magic circle"
						],
						"13": [
							"banishment"
						],
						"17": [
							"hold monster"
						]
					}
				}
			],
			"subclassFeatures": [
				"Monster Slayer|Ranger||Monster Slayer|XGE|3",
				"Supernatural Defense|Ranger||Monster Slayer|XGE|7",
				"Magic-User's Nemesis|Ranger||Monster Slayer|XGE|11",
				"Slayer's Counter|Ranger||Monster Slayer|XGE|15"
			]
		},
		{
			"name": "Monster Slayer",
			"shortName": "Monster Slayer",
			"source": "XGE",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 43,
			"subclassFeatures": [
				"Monster Slayer|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer|XGE|3",
				"Supernatural Defense|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer|XGE|7",
				"Magic-User's Nemesis|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer|XGE|11",
				"Slayer's Counter|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer|XGE|15"
			]
		},
		{
			"name": "Monster Slayer",
			"shortName": "Monster Slayer",
			"source": "XGE",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 43,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"protection from evil and good"
						],
						"5": [
							"zone of truth"
						],
						"9": [
							"magic circle"
						],
						"13": [
							"banishment"
						],
						"17": [
							"hold monster"
						]
					}
				}
			],
			"subclassFeatures": [
				"Monster Slayer|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|5",
				"Supernatural Defense|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|7",
				"Magic-User's Nemesis|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|11",
				"Slayer's Counter|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|15"
			]
		},
		{
			"name": "Swarmkeeper (UA)",
			"shortName": "Swarmkeeper (UA)",
			"source": "UAFighterRangerRogue",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"faerie fire"
						],
						"5": [
							"web"
						],
						"9": [
							"gaseous form"
						],
						"13": [
							"giant insect"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Swarmkeeper|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|3",
				"Writhing Tide|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|7",
				"Scuttling Eyes|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|11",
				"Gathered Swarm Improvement|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|11",
				"Storm of Minions|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|15"
			]
		},
		{
			"name": "Swarmkeeper (UA)",
			"shortName": "Swarmkeeper (UA)",
			"source": "UAFighterRangerRogue",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 3,
			"isReprinted": true,
			"subclassFeatures": [
				"Swarmkeeper|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|3",
				"Writhing Tide|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|7",
				"Scuttling Eyes|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|11",
				"Gathered Swarm Improvement|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|11",
				"Storm of Minions|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|15"
			]
		},
		{
			"name": "Swarmkeeper (UA)",
			"shortName": "Swarmkeeper (UA)",
			"source": "UAFighterRangerRogue",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"faerie fire"
						],
						"5": [
							"web"
						],
						"9": [
							"gaseous form"
						],
						"13": [
							"giant insect"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Swarmkeeper|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|5",
				"Writhing Tide|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|7",
				"Scuttling Eyes|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|11",
				"Gathered Swarm Improvement|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|11",
				"Storm of Minions|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|15"
			]
		},
		{
			"name": "Fey Wanderer (UA)",
			"shortName": "Fey Wanderer (UA)",
			"source": "UA2020SubclassesPt3",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 5,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"charm person"
						],
						"5": [
							"misty step"
						],
						"9": [
							"dispel magic"
						],
						"13": [
							"banishment"
						],
						"17": [
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Fey Wanderer|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|3",
				"Blessings of the Courts|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|7",
				"Beguiling Twist|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|11",
				"Misty Presence|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|15"
			]
		},
		{
			"name": "Fey Wanderer (UA)",
			"shortName": "Fey Wanderer (UA)",
			"source": "UA2020SubclassesPt3",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 5,
			"isReprinted": true,
			"subclassFeatures": [
				"Fey Wanderer|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|3",
				"Blessings of the Courts|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|7",
				"Beguiling Twist|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|11",
				"Misty Presence|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|15"
			]
		},
		{
			"name": "Fey Wanderer (UA)",
			"shortName": "Fey Wanderer (UA)",
			"source": "UA2020SubclassesPt3",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 5,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"charm person"
						],
						"5": [
							"misty step"
						],
						"9": [
							"dispel magic"
						],
						"13": [
							"banishment"
						],
						"17": [
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Fey Wanderer|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|5",
				"Blessings of the Courts|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|7",
				"Beguiling Twist|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|11",
				"Misty Presence|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|15"
			]
		},
		{
			"name": "Drakewarden (UA)",
			"shortName": "Drakewarden (UA)",
			"source": "UA2020SubclassesPt5",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Drakewarden|Ranger||Drakewarden (UA)|UA2020SubclassesPt5|3",
				"Bond of Fang and Scale|Ranger||Drakewarden (UA)|UA2020SubclassesPt5|7",
				"Drake's Breath|Ranger||Drakewarden (UA)|UA2020SubclassesPt5|11",
				"Perfected Bond|Ranger||Drakewarden (UA)|UA2020SubclassesPt5|15"
			]
		},
		{
			"name": "Drakewarden (UA)",
			"shortName": "Drakewarden (UA)",
			"source": "UA2020SubclassesPt5",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Drakewarden|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|3",
				"Bond of Fang and Scale|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|7",
				"Drake's Breath|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|11",
				"Perfected Bond|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|15"
			]
		},
		{
			"name": "Drakewarden (UA)",
			"shortName": "Drakewarden (UA)",
			"source": "UA2020SubclassesPt5",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Drakewarden|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|5",
				"Bond of Fang and Scale|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|7",
				"Drake's Breath|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|11",
				"Perfected Bond|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|15"
			]
		},
		{
			"name": "Fey Wanderer",
			"shortName": "Fey Wanderer",
			"source": "TCE",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 58,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"charm person"
						],
						"5": [
							"misty step"
						],
						"9": [
							"dispel magic"
						],
						"13": [
							"dimension door"
						],
						"17": [
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Fey Wanderer|Ranger||Fey Wanderer|TCE|3",
				"Beguiling Twist|Ranger||Fey Wanderer|TCE|7",
				"Fey Reinforcements|Ranger||Fey Wanderer|TCE|11",
				"Misty Wanderer|Ranger||Fey Wanderer|TCE|15"
			]
		},
		{
			"name": "Fey Wanderer",
			"shortName": "Fey Wanderer",
			"source": "TCE",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 58,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"charm person"
						],
						"5": [
							"misty step"
						],
						"9": [
							"dispel magic"
						],
						"13": [
							"dimension door"
						],
						"17": [
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Fey Wanderer|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|3",
				"Beguiling Twist|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|7",
				"Fey Reinforcements|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|11",
				"Misty Wanderer|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|15"
			]
		},
		{
			"name": "Fey Wanderer",
			"shortName": "Fey Wanderer",
			"source": "TCE",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 58,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"charm person"
						],
						"5": [
							"misty step"
						],
						"9": [
							"dispel magic"
						],
						"13": [
							"dimension door"
						],
						"17": [
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Fey Wanderer|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|5",
				"Beguiling Twist|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|7",
				"Fey Reinforcements|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|11",
				"Misty Wanderer|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|15"
			]
		},
		{
			"name": "Swarmkeeper",
			"shortName": "Swarmkeeper",
			"source": "TCE",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 59,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"mage hand#c",
							"faerie fire"
						],
						"5": [
							"web"
						],
						"9": [
							"gaseous form"
						],
						"13": [
							"arcane eye"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Swarmkeeper|Ranger||Swarmkeeper|TCE|3",
				"Writhing Tide|Ranger||Swarmkeeper|TCE|7",
				"Mighty Swarm|Ranger||Swarmkeeper|TCE|11",
				"Swarming Dispersal|Ranger||Swarmkeeper|TCE|15"
			]
		},
		{
			"name": "Swarmkeeper",
			"shortName": "Swarmkeeper",
			"source": "TCE",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 59,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"mage hand#c",
							"faerie fire"
						],
						"5": [
							"web"
						],
						"9": [
							"gaseous form"
						],
						"13": [
							"arcane eye"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Swarmkeeper|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|3",
				"Writhing Tide|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|7",
				"Mighty Swarm|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|11",
				"Swarming Dispersal|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|15"
			]
		},
		{
			"name": "Swarmkeeper",
			"shortName": "Swarmkeeper",
			"source": "TCE",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 59,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"mage hand#c",
							"faerie fire"
						],
						"5": [
							"web"
						],
						"9": [
							"gaseous form"
						],
						"13": [
							"arcane eye"
						],
						"17": [
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Swarmkeeper|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|5",
				"Writhing Tide|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|7",
				"Mighty Swarm|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|11",
				"Swarming Dispersal|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|15"
			]
		},
		{
			"name": "Drakewarden",
			"shortName": "Drakewarden",
			"source": "FTD",
			"className": "Ranger",
			"classSource": "PHB",
			"page": 15,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"thaumaturgy#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"Drakewarden|Ranger||Drakewarden|FTD|3",
				"Bond of Fang and Scale|Ranger||Drakewarden|FTD|7",
				"Drake's Breath|Ranger||Drakewarden|FTD|11",
				"Perfected Bond|Ranger||Drakewarden|FTD|15"
			]
		},
		{
			"name": "Drakewarden",
			"shortName": "Drakewarden",
			"source": "FTD",
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"page": 15,
			"subclassFeatures": [
				"Drakewarden|Ranger (Spell-less)|UAModifyingClasses|Drakewarden|FTD|3",
				"Bond of Fang and Scale|Ranger (Spell-less)|UAModifyingClasses|Drakewarden|FTD|7",
				"Drake's Breath|Ranger (Spell-less)|UAModifyingClasses|Drakewarden|FTD|11",
				"Perfected Bond|Ranger (Spell-less)|UAModifyingClasses|Drakewarden|FTD|15"
			]
		},
		{
			"name": "Drakewarden",
			"shortName": "Drakewarden",
			"source": "FTD",
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"page": 15,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"thaumaturgy#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"Drakewarden|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|3",
				"Extra Attack|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|5",
				"Bond of Fang and Scale|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|7",
				"Drake's Breath|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|11",
				"Perfected Bond|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|15"
			]
		}
	],
	"classFeature": [
		{
			"name": "Canny",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"Choose one skill: {@skill Animal Handling}, {@skill Athletics}, {@skill History}, {@skill Insight}, {@skill Investigation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}. You gain proficiency in the chosen skill if you don't already have it, and you can add double your proficiency bonus to ability checks using that skill.",
				"In addition, thanks to your extensive wandering, you are able to speak, read, and write two languages of your choice."
			]
		},
		{
			"name": "Deft Explorer",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Natural Explorer feature}",
				"You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit below when you reach 6th level and 10th level in this class.",
				{
					"name": "Canny",
					"type": "entries",
					"entries": [
						"Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen skill.",
						"You can also speak, read, and write two additional languages of your choice."
					]
				}
			]
		},
		{
			"name": "Deft Explorer",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger feature (replaces Natural Explorer)}",
				"You are an unsurpassed explorer and survivor. Choose one of the following benefits, and then choose another one at 6th and 10th level.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refClassFeature",
							"classFeature": "Canny|Ranger|PHB|1|UAClassFeatureVariants"
						},
						{
							"type": "refClassFeature",
							"classFeature": "Roving|Ranger|PHB|1|UAClassFeatureVariants"
						},
						{
							"type": "refClassFeature",
							"classFeature": "Tireless|Ranger|PHB|1|UAClassFeatureVariants"
						}
					]
				}
			]
		},
		{
			"name": "Favored Enemy",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
				"Choose a type of favored enemy: {@filter aberrations|bestiary|type=aberration}, {@filter beasts|bestiary|type=beast}, {@filter celestials|bestiary|type=celestial}, {@filter constructs|bestiary|type=construct}, {@filter dragons|bestiary|type=dragon}, {@filter elementals|bestiary|type=elemental}, {@filter fey|bestiary|type=fey}, {@filter fiends|bestiary|type=fiend}, {@filter giants|bestiary|type=giant}, {@filter monstrosities|bestiary|type=monstrosity}, {@filter oozes|bestiary|type=ooze}, {@filter plants|bestiary|type=plant}, or {@filter undead|bestiary|type=undead}. Alternatively, you can select two races of {@filter humanoid|bestiary|type=humanoid} (such as {@creature gnoll||gnolls} and {@creature orc||orcs}) as favored enemies.",
				"You have advantage on Wisdom ({@skill Survival}) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
				"When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
				"You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
			]
		},
		{
			"name": "Favored Foe",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Favored Enemy feature and works with the Foe Slayer feature}",
				"When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell).",
				"The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by {@dice 1d4}.",
				"You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"This feature's extra damage increases when you reach certain levels in this class: to {@dice 1d6} at 6th level and to {@dice 1d8} at 14th level."
			]
		},
		{
			"name": "Favored Foe",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger feature (replaces Favored Enemy)}",
				"You can call on your bond with nature to mark a creature as your favored enemy for a time: you know the {@spell hunter's mark} spell, and Wisdom is your spellcasting ability for it. You can use it a certain number of times without expending a spell slot and without requiring {@status concentration}\u2014a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
				"When you gain the Spellcasting feature at 2nd level, hunter's mark doesn't count against the number of ranger spells you know."
			]
		},
		{
			"name": "Natural Explorer",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
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
				"You choose additional favored terrain types at 6th and 10th level."
			]
		},
		{
			"name": "Roving",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed."
			]
		},
		{
			"name": "Tireless",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"As an action, you can give yourself a number of temporary hit points equal to {@dice 1d10} + your Wisdom modifier. You can use this special action a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest.",
				"In addition, whenever you finish a short rest, your {@condition exhaustion} level, if any, is decreased by 1."
			]
		},
		{
			"name": "Fighting Style",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
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
							"optionalfeature": "Mariner|UAWaterborneAdventures"
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
							"optionalfeature": "Druidic Warrior|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blind Fighting|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Druidic Warrior|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Thrown Weapon Fighting|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Martial Versatility",
			"source": "UAClassFeatureVariants",
			"page": 12,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level feature (enhances Fighting Style)}",
				"Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style."
			]
		},
		{
			"name": "Spell Versatility",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level ranger feature (enhances Spellcasting)}",
				"Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the ranger spell list. The new spell must be the same level as the spell you replace."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter ranger spell list|spells|class=ranger}.",
				{
					"type": "entries",
					"name": "Spell Slots",
					"entries": [
						"The Ranger table shows how many spell slots you have to cast your {@filter ranger spells|spells|class=ranger} of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell {@spell animal friendship} and have a 1st-level and a 2nd-level spell slot available, you can cast {@spell animal friendship} using either slot."
					]
				},
				{
					"type": "entries",
					"name": "Spells Known of 1st Level and Higher",
					"entries": [
						"You know two 1st-level spells of your choice from the ranger spell list.",
						"The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
						"Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
						{
							"type": "abilityDc",
							"name": "Spell",
							"attributes": [
								"wis"
							]
						},
						{
							"type": "abilityAttackMod",
							"name": "Spell",
							"attributes": [
								"wis"
							]
						}
					]
				}
			]
		},
		{
			"name": "Spellcasting Focus",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level ranger {@variantrule optional class features|tce|optional feature}}",
				"You can use a {@item druidic focus|phb} as a spellcasting focus for your ranger spells. A druidic focus might be a sprig of mistletoe or holly, a wand or rod made of yew or another special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, and teeth from sacred animals."
			]
		},
		{
			"name": "Spellcasting Focus",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level ranger feature (enhances Spellcasting)}",
				"You can use a {@item druidic focus|phb} as a spellcasting focus for your ranger spells. See chapter 5, \"Equipment,\" of the Player's Handbook for a list of things that count as druidic focuses."
			]
		},
		{
			"name": "Primal Awareness",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Primeval Awareness feature}",
				"You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Primal Awareness Spells",
					"colLabels": [
						"Ranger Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell speak with animals}"
						],
						[
							"5th",
							"{@spell beast sense}"
						],
						[
							"9th",
							"{@spell speak with plants}"
						],
						[
							"13th",
							"{@spell locate creature}"
						],
						[
							"17th",
							"{@spell commune with nature}"
						]
					]
				},
				"You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Primal Awareness",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level ranger feature (replaces Primeval Awareness)}",
				"You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Primal Awareness Spells",
					"colLabels": [
						"Ranger Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell detect magic}, {@spell speak with animals}"
						],
						[
							"5th",
							"{@spell beast sense}, {@spell locate animals or plants}"
						],
						[
							"9th",
							"{@spell speak with plants}"
						],
						[
							"13th",
							"{@spell locate creature}"
						],
						[
							"17th",
							"{@spell commune with nature}"
						]
					]
				},
				"You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Primeval Awareness",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number."
			]
		},
		{
			"name": "Ranger Archetype",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, you choose an archetype that you strive to emulate from the list of available archetypes. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
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
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level ranger {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Ranger",
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
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Deft Explorer Improvement",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 6,
			"isClassFeatureVariant": true,
			"entries": [
				"You gain an additional benefit when you reach 6th level in this class.",
				{
					"type": "entries",
					"name": "Roving",
					"entries": [
						"Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed."
					]
				}
			]
		},
		{
			"name": "Favored Enemy and Natural Explorer improvements",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain an additional favored terrain.",
				"At 6th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures."
			]
		},
		{
			"name": "Ranger Archetype feature",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"At 7th level, you gain a feature granted to you by your Ranger Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Land's Stride",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"Starting at 8th level, moving through nonmagical {@quickref difficult terrain||3} costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
				"In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the {@spell entangle} spell."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Ranger",
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
			"name": "Deft Explorer Improvement",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"You gain an additional benefit when you reach 10th level in this class.",
				{
					"type": "entries",
					"name": "Tireless",
					"entries": [
						"As an action, you can give yourself a number of temporary hit points equal to {@dice 1d8} + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
						"In addition, whenever you finish a short rest, your {@condition exhaustion} level, if any, is decreased by 1."
					]
				}
			]
		},
		{
			"name": "Fade Away",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 10th-level ranger feature (replaces Hide in Plain Sight)}",
				"You can use a bonus action to magically become {@condition invisible}, along with any equipment you are wearing or carrying, until the start of your next turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Hide in Plain Sight",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
				"Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity ({@skill Stealth}) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
			]
		},
		{
			"name": "Natural Explorer improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"You gain an additional favored terrain."
			]
		},
		{
			"name": "Nature's Veil",
			"source": "TCE",
			"page": 56,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 10th-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Hide in Plain Sight feature}",
				"You draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become {@condition invisible}, along with any equipment you are wearing or carrying, until the start of your next turn.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Ranger Archetype feature",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"At 11th level, you gain a feature granted to you by your Ranger Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
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
			"className": "Ranger",
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
			"name": "Favored Enemy improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures."
			]
		},
		{
			"name": "Vanish",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"Starting at 14th level, you can use the {@action Hide} action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
			]
		},
		{
			"name": "Ranger Archetype feature",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"At 15th level, you gain a feature granted to you by your Ranger Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
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
			"className": "Ranger",
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
			"name": "Feral Senses",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any {@condition invisible} creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't {@condition blinded} or {@condition deafened}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
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
			"className": "Ranger",
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
			"name": "Foe Slayer",
			"source": "PHB",
			"page": 89,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
			]
		},
		{
			"name": "Canny",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"Choose one skill: {@skill Animal Handling}, {@skill Athletics}, {@skill History}, {@skill Insight}, {@skill Investigation}, {@skill Medicine}, {@skill Nature}, {@skill Perception}, {@skill Stealth}, or {@skill Survival}. You gain proficiency in the chosen skill if you don't already have it, and you can add double your proficiency bonus to ability checks using that skill.",
				"In addition, thanks to your extensive wandering, you are able to speak, read, and write two languages of your choice."
			]
		},
		{
			"name": "Deft Explorer",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Natural Explorer feature}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You are an unsurpassed explorer and survivor, both in the wilderness and in dealing with others on your travels. You gain the Canny benefit below, and you gain an additional benefit below when you reach 6th level and 10th level in this class.",
				{
					"type": "entries",
					"name": "Canny",
					"entries": [
						"Choose one of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses the chosen skill.",
						"You can also speak, read, and write two additional languages of your choice."
					]
				}
			]
		},
		{
			"name": "Deft Explorer",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger feature (replaces Natural Explorer)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You are an unsurpassed explorer and survivor. Choose one of the following benefits, and then choose another one at 6th and 10th level.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refClassFeature",
							"classFeature": "Canny|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants"
						},
						{
							"type": "refClassFeature",
							"classFeature": "Roving|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants"
						},
						{
							"type": "refClassFeature",
							"classFeature": "Tireless|Ranger (Spell-less)|UAModifyingClasses|1|UAClassFeatureVariants"
						}
					]
				}
			]
		},
		{
			"name": "Favored Enemy",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"entries": [
				"Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
				"Choose a type of favored enemy: {@filter aberrations|bestiary|type=aberration}, {@filter beasts|bestiary|type=beast}, {@filter celestials|bestiary|type=celestial}, {@filter constructs|bestiary|type=construct}, {@filter dragons|bestiary|type=dragon}, {@filter elementals|bestiary|type=elemental}, {@filter fey|bestiary|type=fey}, {@filter fiends|bestiary|type=fiend}, {@filter giants|bestiary|type=giant}, {@filter monstrosities|bestiary|type=monstrosity}, {@filter oozes|bestiary|type=ooze}, {@filter plants|bestiary|type=plant}, or {@filter undead|bestiary|type=undead}. Alternatively, you can select two races of {@filter humanoid|bestiary|type=humanoid} (such as {@creature gnoll||gnolls} and {@creature orc||orcs}) as favored enemies.",
				"You have advantage on Wisdom ({@skill Survival}) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
				"When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
				"You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
			]
		},
		{
			"name": "Favored Foe",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Favored Enemy feature and works with the Foe Slayer feature}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"When you hit a creature with an attack roll, you can call on your mystical bond with nature to mark the target as your favored enemy for 1 minute or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell).",
				"The first time on each of your turns that you hit the favored enemy and deal damage to it, including when you mark it, you can increase that damage by {@dice 1d4}.",
				"You can use this feature to mark a favored enemy a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"This feature's extra damage increases when you reach certain levels in this class: to {@dice 1d6} at 6th level and to {@dice 1d8} at 14th level."
			]
		},
		{
			"name": "Favored Foe",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level ranger feature (replaces Favored Enemy)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You can call on your bond with nature to mark a creature as your favored enemy for a time: you know the {@spell hunter's mark} spell, and Wisdom is your spellcasting ability for it. You can use it a certain number of times without expending a spell slot and without requiring {@status concentration}\u2014a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
				"When you gain the Spellcasting feature at 2nd level, hunter's mark doesn't count against the number of ranger spells you know."
			]
		},
		{
			"name": "Natural Explorer",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
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
				"You choose additional favored terrain types at 6th and 10th level."
			]
		},
		{
			"name": "Roving",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed."
			]
		},
		{
			"name": "Tireless",
			"source": "UAClassFeatureVariants",
			"page": 7,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"As an action, you can give yourself a number of temporary hit points equal to {@dice 1d10} + your Wisdom modifier. You can use this special action a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest.",
				"In addition, whenever you finish a short rest, your {@condition exhaustion} level, if any, is decreased by 1."
			]
		},
		{
			"name": "Combat Superiority",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 2,
			"entries": [
				"At 2nd level, you learn maneuvers that are fueled by special dice called superiority dice.",
				{
					"type": "entries",
					"name": "Maneuvers",
					"entries": [
						"You learn two {@filter maneuvers|optionalfeatures|feature type=mv:b} of your choice, which are chosen from the list of maneuvers available to fighters with the Battle Master archetype. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.",
						"You learn one additional maneuver of your choice at 5th, 9th, 13th, and 17th levels. Each time you learn a new maneuver, you can also replace one maneuver you know with a different one."
					]
				},
				{
					"type": "entries",
					"name": "Superiority Dice",
					"entries": [
						"You have four superiority dice, which are {@dice d8}s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
						"You gain another superiority die at 9th level and one more at 17th level."
					]
				},
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
		},
		{
			"name": "Fighting Style",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 2,
			"entries": [
				"At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
				{
					"type": "options",
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
							"optionalfeature": "Mariner|UAWaterborneAdventures"
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
							"optionalfeature": "Druidic Warrior|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blind Fighting|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Druidic Warrior|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Thrown Weapon Fighting|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Martial Versatility",
			"source": "UAClassFeatureVariants",
			"page": 12,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level feature (enhances Fighting Style)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style."
			]
		},
		{
			"name": "Poultices",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 3,
			"entries": [
				"At 3rd level, you can create special herbal poultices that have healing power comparable to some potions. You can spend 1 hour gathering herbs and preparing herbal poultices using treated bandages to create a number of such poultices equal to your Wisdom modifier (minimum 1). You can carry a number of poultices at one time equal to your Wisdom modifier (minimum 1). The poultices you create cannot be applied by anyone but you. After 24 hours, any poultices that you have not used lose their potency.",
				"If you spend 1 minute applying one of your poultices to a wounded humanoid creature, thereby expending its use, that creature regains {@dice 1d6} hit points for every two ranger levels you have (rounded up)."
			]
		},
		{
			"name": "Primal Awareness",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Primeval Awareness feature}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Primal Awareness Spells",
					"colLabels": [
						"Ranger Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell speak with animals}"
						],
						[
							"5th",
							"{@spell beast sense}"
						],
						[
							"9th",
							"{@spell speak with plants}"
						],
						[
							"13th",
							"{@spell locate creature}"
						],
						[
							"17th",
							"{@spell commune with nature}"
						]
					]
				},
				"You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Primal Awareness",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level ranger feature (replaces Primeval Awareness)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don't already know them, as shown in the Primal Awareness Spells table. These spells don't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Primal Awareness Spells",
					"colLabels": [
						"Ranger Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell detect magic}, {@spell speak with animals}"
						],
						[
							"5th",
							"{@spell beast sense}, {@spell locate animals or plants}"
						],
						[
							"9th",
							"{@spell speak with plants}"
						],
						[
							"13th",
							"{@spell locate creature}"
						],
						[
							"17th",
							"{@spell commune with nature}"
						]
					]
				},
				"You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Primeval Awareness",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 3,
			"entries": [
				"Beginning at 3rd level, you can use your action to focus your awareness on the region around you. For the next minute, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number.",
				"Once you use this feature, you must finish a short or long rest before you can use it again"
			]
		},
		{
			"name": "Ranger Archetype",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 3,
			"entries": [
				"At 3rd level, you choose an archetype that you strive to emulate from the list of available archetypes. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Martial Versatility",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level ranger {@variantrule optional class features|tce|optional feature}}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 5,
			"entries": [
				"At 5th level, you learn one additional maneuver of your choice, which is chosen from the list of maneuvers available to fighters with the Battle Master archetype."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 5,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Deft Explorer Improvement",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 6,
			"isClassFeatureVariant": true,
			"entries": [
				"You gain an additional benefit when you reach 6th level in this class.",
				{
					"type": "entries",
					"name": "Roving",
					"entries": [
						"Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed."
					]
				}
			]
		},
		{
			"name": "Favored Enemy and Natural Explorer improvements",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 6,
			"entries": [
				"At 6th level, you gain an additional favored terrain.",
				"At 6th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures."
			]
		},
		{
			"name": "Ranger Archetype feature",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 7,
			"entries": [
				"At 7th level, you gain a feature granted to you by your Ranger Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 8,
			"entries": [
				"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Land's Stride",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 8,
			"entries": [
				"Starting at 8th level, moving through nonmagical {@quickref difficult terrain||3} costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
				"In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the {@spell entangle} spell."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 9,
			"entries": [
				"At 9th level, you learn one additional maneuver of your choice, which is chosen from the list of maneuvers available to fighters with the Battle Master archetype."
			]
		},
		{
			"name": "Natural Antivenom",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 9,
			"entries": [
				"Starting at 9th level, you have advantage on saving throws against poison and have resistance to poison damage. Additionally, you can use one of your poultices to cure one poison effect on the creature you are applying it to, in addition to restoring hit points."
			]
		},
		{
			"name": "Deft Explorer Improvement",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"You gain an additional benefit when you reach 10th level in this class.",
				{
					"type": "entries",
					"name": "Tireless",
					"entries": [
						"As an action, you can give yourself a number of temporary hit points equal to {@dice 1d8} + your Wisdom modifier (minimum of 1 temporary hit point). You can use this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
						"In addition, whenever you finish a short rest, your {@condition exhaustion} level, if any, is decreased by 1."
					]
				}
			]
		},
		{
			"name": "Fade Away",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 10th-level ranger feature (replaces Hide in Plain Sight)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You can use a bonus action to magically become {@condition invisible}, along with any equipment you are wearing or carrying, until the start of your next turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Hide in Plain Sight",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 10,
			"entries": [
				"Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
				"Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity ({@skill Stealth}) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
			]
		},
		{
			"name": "Natural Explorer improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 10,
			"entries": [
				"You gain an additional favored terrain."
			]
		},
		{
			"name": "Nature's Veil",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 10th-level ranger {@variantrule optional class features|tce|optional feature}, which replaces the Hide in Plain Sight feature}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You draw on the powers of nature to hide yourself from view briefly. As a bonus action, you can magically become {@condition invisible}, along with any equipment you are wearing or carrying, until the start of your next turn.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Ranger Archetype feature",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 11,
			"entries": [
				"At 11th level, you gain a feature granted to you by your Ranger Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
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
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 13,
			"entries": [
				"At 13th level, you learn one additional maneuver of your choice, which is chosen from the list of maneuvers available to fighters with the Battle Master archetype."
			]
		},
		{
			"name": "Call Natural Allies",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 13,
			"entries": [
				"Starting at 13th level, when you are in an area of your favored terrain, you can call natural creatures from that terrain to fight on your behalf, using your attunement to the natural world to convince them to aid you. The DM chooses beasts appropriate to the terrain to come to your aid from among those that could hear you and that are within 1 mile of you, in one of the following groups:",
				{
					"type": "list",
					"items": [
						"One beast of challenge rating 2 or lower",
						"Two beasts of challenge rating 1 or lower",
						"Four beasts of challenge rating 1/2 or lower",
						"Eight beasts of challenge rating 1/4 or lower"
					]
				},
				"These beasts approach you from their current location, and will fight alongside you, attacking any creatures that are hostile to you. They are friendly to you and your comrades, and you roll initiative for the called creatures as a group, which takes its own turns. The DM has the creatures' statistics.",
				"After 1 hour, these beasts return to their previous location. Once you use this feature, you cannot use it again in the same general area for 24 hours, since the same animals will not repeatedly heed your call."
			]
		},
		{
			"name": "Favored Enemy improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 14,
			"entries": [
				"At 14th level, you choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures."
			]
		},
		{
			"name": "Vanish",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 14,
			"entries": [
				"Starting at 14th level, you can use the {@action Hide} action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
			]
		},
		{
			"name": "Ranger Archetype feature",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 15,
			"entries": [
				"At 15th level, you gain a feature granted to you by your Ranger Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
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
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Additional Maneuvers",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 17,
			"entries": [
				"At 17th level, you learn one additional maneuver of your choice, which is chosen from the list of maneuvers available to fighters with the Battle Master archetype."
			]
		},
		{
			"name": "Relentless",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 17,
			"entries": [
				"Starting at 17th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
			]
		},
		{
			"name": "Feral Senses",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 18,
			"entries": [
				"At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any {@condition invisible} creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't {@condition blinded} or {@condition deafened}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
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
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 19,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 19th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Foe Slayer",
			"source": "UAModifyingClasses",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"level": 20,
			"entries": [
				"At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
			]
		},
		{
			"name": "Ambuscade",
			"source": "UARanger",
			"page": 2,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"level": 1,
			"entries": [
				"Rangers strike first and strike hard. When you roll initiative, you gain a special turn that takes place before other creatures can act. On this turn, you can use your action to take either the {@action Attack} or {@action Hide} action.",
				"If more than one creature in an encounter has this feature, they all act first in order of initiative, then the regular initiative order begins.",
				"If you would normally be {@quickref Surprise|PHB|3|0|surprised} at the start of an encounter, you are not {@quickref Surprise|PHB|3|0|surprised} but you do not gain this extra turn."
			]
		},
		{
			"name": "Skirmisher's Stealth",
			"source": "UARanger",
			"page": 2,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"level": 2,
			"entries": [
				"Beginning at 2nd level, you combine speed and stealth in combat to make yourself hard to pin down. You are difficult to detect even if you attack or otherwise take actions that would normally reveal your presence.",
				"At the start of your turn, pick a creature you are hidden from. You remain hidden from that creature during your turn, regardless of your actions or the actions of other creatures. As a bonus action at the end of your turn, you can make a Dexterity ({@skill Stealth}) check to hide again if you fulfill the conditions needed to hide. Otherwise, creatures are aware of you at the end of your turn."
			]
		},
		{
			"name": "Spirit Path",
			"source": "UARanger",
			"page": 2,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"level": 3,
			"entries": [
				"At 3rd level, you form a bond with a nature spirit\u2014a companion forged by your link to the wild. This spirit companion protects you as you travel and watches your back in battle. You choose a ranger path that shapes your spirit companion and its magic: the Guardian, the Seeker, or the Stalker. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level.",
				{
					"type": "entries",
					"name": "Spirit Companion",
					"entries": [
						"All rangers gain a spirit companion and the ability to invoke its magical power. (Your spirit companion grants you one benefit you can call on in this playtest version of the revised ranger, with more benefits gained at higher levels.) You regain your ability to call on your spirit companion in this way when you finish a short or long rest.",
						"Once per day as a bonus action, you can command your spirit companion to materialize as a living creature, determined by the ranger path you choose. Your spirit companion manifests as an animal for 1 minute or until your {@status concentration} is broken (as if you are {@status concentration||concentrating} on a spell). You can also dismiss it as a bonus action.",
						"The manifested creature gains a bonus to attack rolls and saving throws equal to your Wisdom modifier. It uses the hit points in the animal's stat block or half your hit point maximum, whichever is higher.",
						"The manifested creature takes its turn on your initiative and acts immediately after you. You control its actions, even if you are {@condition unconscious} or otherwise unable to act."
					]
				}
			]
		},
		{
			"name": "Favored Enemy",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 1,
			"entries": [
				"Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy commonly encountered in the wilds.",
				"Choose a type of favored enemy: {@filter beasts|bestiary|type=beast}, {@filter fey|bestiary|type=fey}, {@filter humanoids|bestiary|type=humanoid}, {@filter monstrosities|bestiary|type=monstrosity}, or {@filter undead|bestiary|type=undead}. You gain a +2 bonus to damage rolls with weapon attacks against creatures of the chosen type. Additionally, you have advantage on Wisdom ({@skill Survival}) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
				"When you gain this feature, you also learn one language of your choice, typically one spoken by your favored enemy or creatures associated with it. However, you are free to pick any language you wish to learn."
			]
		},
		{
			"name": "Natural Explorer",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 1,
			"entries": [
				"You are a master of navigating the natural world, and you react with swift and decisive action when attacked. This grants you the following benefits:",
				{
					"type": "list",
					"items": [
						"You ignore {@quickref difficult terrain||3}.",
						"You have advantage on initiative rolls.",
						"On your first turn during combat, you have advantage on attack rolls against creatures that have not yet acted."
					]
				},
				"In addition, you are skilled at navigating the wilderness. You gain the following benefits when traveling for an hour or more:",
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
				}
			]
		},
		{
			"name": "Fighting Style",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 2,
			"entries": [
				"At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
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
							"optionalfeature": "Mariner|UAWaterborneAdventures"
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
							"optionalfeature": "Druidic Warrior|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blind Fighting|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Druidic Warrior|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Thrown Weapon Fighting|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Martial Versatility",
			"source": "UAClassFeatureVariants",
			"page": 12,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level feature (enhances Fighting Style)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style."
			]
		},
		{
			"name": "Spellcasting",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 2,
			"entries": [
				"By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter ranger spell list|spells|class=ranger}.",
				{
					"type": "entries",
					"name": "Spell Slots",
					"entries": [
						"The Ranger table shows how many spell slots you have to cast your {@filter ranger spells|spells|class=ranger} of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell {@spell animal friendship} and have a 1st-level and a 2nd-level spell slot available, you can cast {@spell animal friendship} using either slot."
					]
				},
				{
					"type": "entries",
					"name": "Spells Known of 1st Level and Higher",
					"entries": [
						"You know two 1st-level spells of your choice from the ranger spell list.",
						"The Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
						"Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
						{
							"type": "abilityDc",
							"name": "Spell",
							"attributes": [
								"wis"
							]
						},
						{
							"type": "abilityAttackMod",
							"name": "Spell",
							"attributes": [
								"wis"
							]
						}
					]
				}
			]
		},
		{
			"name": "Primeval Awareness",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 3,
			"entries": [
				"Beginning at 3rd level, your mastery of ranger lore allows you to establish a powerful link to beasts and to the land around you.",
				"You have an innate ability to communicate with beasts, and they recognize you as a kindred spirit. Through sounds and gestures, you can communicate simple ideas to a beast as an action, and can read its basic mood and intent. You learn its emotional state, whether it is affected by magic of any sort, its short-term needs (such as food or safety), and actions you can take (if any) to persuade it to not attack.",
				"You cannot use this ability against a creature that you have attacked within the past 10 minutes.",
				"Additionally, you can attune your senses to determine if any of your favored enemies lurk nearby. By spending 1 uninterrupted minute in {@status concentration} (as if you were {@status concentration||concentrating} on a spell), you can sense whether any of your favored enemies are present within 5 miles of you. This feature reveals which of your favored enemies are present, their numbers, and the creatures' general direction and distance (in miles) from you.",
				"If there are multiple groups of your favored enemies within range, you learn this information for each group."
			]
		},
		{
			"name": "Ranger Conclave",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 3,
			"entries": [
				"At 3rd level, you choose to emulate the ideals and training of a ranger conclave from the list of available conclaves. Your choice grants you features at 3rd level and again at 5th, 7th, 11th, and 15th level."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Martial Versatility",
			"source": "TCE",
			"page": 56,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level ranger {@variantrule optional class features|tce|optional feature}}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a fighting style you know with another fighting style available to rangers. This replacement represents a shift of focus in your martial practice."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Ranger Conclave feature",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 5,
			"entries": [
				"At 5th level, you gain a feature granted to you by your Ranger Conclave."
			]
		},
		{
			"name": "Greater Favored Enemy",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 6,
			"entries": [
				"At 6th level, you are ready to hunt even deadlier game. Choose a type of greater favored enemy: {@filter aberrations|bestiary|type=aberration}, {@filter celestials|bestiary|type=celestial}, {@filter constructs|bestiary|type=construct}, {@filter dragons|bestiary|type=dragon}, {@filter elementals|bestiary|type=elemental}, {@filter fiends|bestiary|type=fiend}, or {@filter giants|bestiary|type=giant}. You gain all the benefits against this chosen enemy that you normally gain against your favored enemy, including an additional language. Your bonus to damage rolls against all your favored enemies increases to +4.",
				"Additionally, you have advantage on saving throws against the spells and abilities used by a greater favored enemy."
			]
		},
		{
			"name": "Ranger Conclave feature",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 7,
			"entries": [
				"At 7th level, you gain a feature granted to you by your Ranger Conclave."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 8,
			"entries": [
				"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Fleet of Foot",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 8,
			"entries": [
				"Beginning at 8th level, you can use the {@action Dash} action as a bonus action on your turn."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 8,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 8th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Hide in Plain Sight",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 10,
			"entries": [
				"Starting at 10th level, you can remain perfectly still for long periods of time to set up ambushes.",
				"When you attempt to hide on your turn, you can opt to not move on that turn. If you avoid moving, creatures that attempt to detect you take a -10 penalty to their Wisdom ({@skill Perception}) checks until the start of your next turn. You lose this benefit if you move or fall {@condition prone}, either voluntarily or because of some external effect. You are still automatically detected if any effect or action causes you to no longer be hidden.",
				"If you are still hidden on your next turn, you can continue to remain motionless and gain this benefit until you are detected."
			]
		},
		{
			"name": "Ranger Conclave feature",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 11,
			"entries": [
				"At 11th level, you gain a feature granted to you by your Ranger Conclave."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
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
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 12,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 12th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Vanish",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 14,
			"entries": [
				"Starting at 14th level, you can use the {@action Hide} action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
			]
		},
		{
			"name": "Ranger Conclave feature",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 15,
			"entries": [
				"At 15th level, you gain a feature granted to you by your Ranger Conclave."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
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
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 16,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 16th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Feral Senses",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 18,
			"entries": [
				"At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any {@condition invisible} creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't {@condition blinded} or {@condition deafened}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
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
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 19,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 19th-level feature (enhances Ability Score Improvement)}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger feature.}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Foe Slayer",
			"source": "UATheRangerRevised",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"level": 20,
			"entries": [
				"At 20th level, you become an unparalleled hunter. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Drakewarden",
			"source": "FTD",
			"page": 15,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"entries": [
				"Your connection to the natural world takes the form of a draconic spirit, which can manifest in physical form as a drake. As your powers grow, your drake grows as well, blossoming from a small four-legged companion to a majestic winged creature large and strong enough for you to ride. Along the way, you gain an increasing share of the awe-inspiring power of dragons.",
				"Consider the source of the draconic spirit you have bonded with. The Drakewarden Origin table offers examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from a dragon's hoard, creating your bond through that token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A dragon gave you a geode or gemstone to care for. To your surprise, the drake hatched from that stone."
						],
						[
							"4",
							"You ingested a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient Draconic inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious figure accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger||Drakewarden|FTD|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger||Drakewarden|FTD|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "FTD",
			"page": 15,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Thaumaturgy",
							"entry": "You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
						},
						{
							"type": "item",
							"name": "Tongue of Dragons",
							"entry": "You learn to speak, read, and write Draconic or one other language of your choice."
						}
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "FTD",
			"page": 15,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"As an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you.",
				"The drake is friendly to you and your companions, and it obeys your commands. See its game statistics in the accompanying {@creature Drake Companion|FTD} stat block, which uses your proficiency bonus (PB) in several places. Whenever you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake, such as its color, its scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"The drake remains until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "FTD",
			"page": 15,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. When you summon your drake, it grows wings on its back and gains a flying speed equal to its walking speed.",
				"In addition, while your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Drake Mount",
							"entries": [
								"The drake grows to Medium size. Reflecting your special bond, you can use the drake as a mount if your size is Medium or smaller. While you are riding your drake, it can't use the flying speed of this feature."
							]
						},
						{
							"type": "item",
							"name": "Magic Fang",
							"entries": [
								"The drake's Bite attack deals an extra {@damage 1d6} damage of the type chosen for the drake's Draconic Essence."
							]
						},
						{
							"type": "item",
							"name": "Resistance",
							"entries": [
								"You gain resistance to the damage type chosen for the drake's Draconic Essence."
							]
						}
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "FTD",
			"page": 15,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn't have to match your drake's Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 8d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 10d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "FTD",
			"page": 15,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Empowered Bite",
							"entries": [
								"The drake's Bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage)."
							]
						},
						{
							"type": "item",
							"name": "Large Drake",
							"entries": [
								"The drake grows to Large size. When you ride your drake, it is no longer prohibited from using the flying speed of Bond of Fang and Scale."
							]
						},
						{
							"type": "item",
							"name": "Reflexive Resistance",
							"entries": [
								"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
							]
						}
					]
				}
			]
		},
		{
			"name": "Beast Master",
			"source": "PHB",
			"page": 93,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ranger's Companion|Ranger||Beast Master||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ranger Companion Options|Ranger||Beast Master||3|UAClassFeatureVariants"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Primal Companion|Ranger||Beast Master||3|TCE"
				}
			]
		},
		{
			"name": "Primal Companion",
			"source": "TCE",
			"page": 61,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"header": 1,
			"entries": [
				"{@i 3rd-level Beast Master variant feature, which replaces the Ranger's Companion feature}",
				"You magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block\u2014{@creature Beast of the Land|TCE}, {@creature Beast of the Sea|TCE}, or {@creature Beast of the Sky|TCE}\u2014which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.",
				"In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the {@action Attack} action to command the beast to take the {@action Attack} action. If you are {@condition incapacitated}, the beast can take any action of its choice, not just {@action Dodge}.",
				"If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.",
				"When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die."
			]
		},
		{
			"name": "Ranger Companion Options",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"header": 1,
			"entries": [
				"{@i 3rd-level Beast Master feature (enhances Ranger's Companion)}",
				"While wandering the wilds, a ranger encounters many sorts of animals, some of which the ranger might befriend. This friendship can arise from successful use of the {@skill Animal Handling} skill or the {@spell animal friendship} spell. If the resulting bond is strong enough, the animal might join the ranger on adventures.",
				"A ranger who has the Beast Master archetype can form an even stronger bond, feeling almost like a sibling to an animal. A special type of beast awaits a Beast Master in the wilds, a creature whose lineage stretches back to the beginnings of the world: a primal beast known as a {@creature Beast of the Air|UAClassFeatureVariants} or a {@creature Beast of the Earth|UAClassFeatureVariants}. Such a creature seeks out the type of companionship that a Beast Master offers, ready for the two of them to battle the imbalances in the natural world.",
				"The primal beast is a special creature that a Beast Master can choose for the Ranger's Companion feature. When choosing such a creature, you decide whether it is a Beast of the Air or the Earth, and you determine its appearance. Stories describe primal beasts that mystically change form to align with the spirit of their companion.",
				"When a primal beast is met apart from a Beast Master, the creature takes the form a regular beast of challenge rating 1/4 or lower, as determined by the DM."
			]
		},
		{
			"name": "Ranger's Companion",
			"source": "PHB",
			"page": 93,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a {@filter beast that is no larger than Medium and that has a challenge rating of 1/4 or lower|bestiary|challenge rating=[&0;&1/4]|type=beast|size=f;d;t;s;m|miscellaneous=!swarm}. Add your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. Like any creature, the beast can spend Hit Dice during a short rest.",
				"The beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the {@action Attack}, {@action Dash}, {@action Disengage}, or {@action Help} action. If you don't issue a command, the beast takes the {@action Dodge} action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the {@action Attack} action.",
				"If you are {@condition incapacitated} or absent, your beast companion acts on its own, focusing on protecting you and itself. It never requires your command to use its reaction, such as when making an opportunity attack.",
				"While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.",
				"If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn't hostile to you, either the same type of beast as before or a different one."
			]
		},
		{
			"name": "Exceptional Training",
			"source": "PHB",
			"page": 93,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the {@action Dash}, {@action Disengage}, or {@action Help} action on its turn. In addition, the beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
			]
		},
		{
			"name": "Bestial Fury",
			"source": "PHB",
			"page": 93,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"Starting at 11th level, when you command your beast companion to take the {@action Attack} action, the beast can make two attacks, or it can take the Multiattack action if it has that action."
			]
		},
		{
			"name": "Share Spells",
			"source": "PHB",
			"page": 93,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you."
			]
		},
		{
			"name": "Hunter",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Prey|Ranger||Hunter||3"
				}
			]
		},
		{
			"name": "Horde Breaker",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
			]
		},
		{
			"name": "Hunter's Prey",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Colossus Slayer|Ranger||Hunter||3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Giant Killer|Ranger||Hunter||3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Horde Breaker|Ranger||Hunter||3"
						}
					]
				}
			]
		},
		{
			"name": "Colossus Slayer",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 2,
			"entries": [
				"Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra {@damage 1d8} damage if it's below its hit point maximum. You can deal this extra damage only once per turn."
			]
		},
		{
			"name": "Giant Killer",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 2,
			"entries": [
				"When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
			]
		},
		{
			"name": "Defensive Tactics",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Escape the Horde|Ranger||Hunter||7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Multiattack Defense|Ranger||Hunter||7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Steel Will|Ranger||Hunter||7"
						}
					]
				}
			]
		},
		{
			"name": "Escape the Horde",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Opportunity attacks against you are made with disadvantage."
			]
		},
		{
			"name": "Multiattack Defense",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
			]
		},
		{
			"name": "Steel Will",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"You have advantage on saving throws against being {@condition frightened}."
			]
		},
		{
			"name": "Multiattack",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Volley|Ranger||Hunter||11"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Whirlwind Attack|Ranger||Hunter||11"
						}
					]
				}
			]
		},
		{
			"name": "Volley",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target."
			]
		},
		{
			"name": "Whirlwind Attack",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
			]
		},
		{
			"name": "Evasion",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a {@spell lightning bolt} spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
			]
		},
		{
			"name": "Stand Against the Tide",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
			]
		},
		{
			"name": "Superior Hunter's Defense",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Evasion|Ranger||Hunter||15"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Stand Against the Tide|Ranger||Hunter||15"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Uncanny Dodge|Ranger||Hunter||15"
						}
					]
				}
			]
		},
		{
			"name": "Uncanny Dodge",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"A fey mystique surrounds you, thanks to the boon of an archfey, the shining fruit you ate from a talking tree, the magic spring you swam in, or some other auspicious event. However you acquired your fey magic, you are now a Fey Wanderer, a ranger who represents both the mortal and the fey realms. As you wander the multiverse, your joyful laughter brightens the hearts of the downtrodden, and your martial prowess strikes terror in your foes, for great is the mirth of the fey and dreadful is their fury.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger||Fey Wanderer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fey Wanderer Magic|Ranger||Fey Wanderer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Otherworldly Glamour|Ranger||Fey Wanderer|TCE|3"
				}
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra {@damage 1d4} psychic damage to the target, which can take this extra damage only once per turn.",
				"The extra damage increases to {@dice 1d6} when you reach 11th level in this class."
			]
		},
		{
			"name": "Fey Wanderer Magic",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Fey Wanderer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell dispel magic}"
						],
						[
							"13th",
							"{@spell dimension door}"
						],
						[
							"17th",
							"{@spell mislead}"
						]
					]
				},
				"You also possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				}
			]
		},
		{
			"name": "Otherworldly Glamour",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"The magic of the Feywild guards your mind. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save."
			]
		},
		{
			"name": "Fey Reinforcements",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"The royal courts of the Feywild have blessed you with the assistance of fey beings: you know {@spell summon fey|tce}. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
				"Whenever you start casting the spell, you can modify it so that it doesn't require {@status concentration}. If you do so, the spell's duration becomes 1 minute for that casting."
			]
		},
		{
			"name": "Misty Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can slip in and out of the Feywild to move in a blink of an eye: you can cast {@spell misty step} without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
				"In addition, whenever you cast {@i misty step}, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "TCE",
			"page": 59,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger||Swarmkeeper|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Swarmkeeper Magic|Ranger||Swarmkeeper|TCE|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"A swarm of intangible nature spirits has bonded itself to you and can assist you in battle. While you're alive, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.",
				{
					"type": "table",
					"caption": "Swarm Appearance",
					"colLabels": [
						"d4",
						"Appearance"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Swarming insects"
						],
						[
							"2",
							"Miniature twig blights"
						],
						[
							"3",
							"Fluttering birds"
						],
						[
							"4",
							"Playful pixies"
						]
					]
				},
				"Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:",
				{
					"type": "list",
					"items": [
						"The attack's target takes {@damage 1d6} piercing damage from the swarm.",
						"The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.",
						"You are moved by the swarm 5 feet horizontally in a direction of your choice."
					]
				},
				{
					"type": "inset",
					"name": "It's Your Swarm",
					"entries": [
						"A Swarmkeeper's swarm and spells are reflections of the character's bond with nature spirits. Take the opportunity to describe the swarm and the ranger's magic in play. For example, when your ranger casts gaseous form, they might appear to melt into the swarm, instead of a cloud of mist, or the {@spell arcane eye} spell could create an extension of your swarm that spies for you. Such descriptions don't change the effects of spells, but they are an exciting opportunity to explore your character's narrative through their class abilities. For more guidance on customizing spells, see the \"Personalizing Spells\" section in chapter 3.",
						"Also, remember that the swarm's appearance is yours to customize, and don't feel confined to a single appearance. Perhaps the spirits' look changes with the ranger's mood or with the seasons. You decide!"
					]
				}
			]
		},
		{
			"name": "Swarmkeeper Magic",
			"source": "TCE",
			"page": 59,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You learn the {@spell mage hand} cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.",
				"You also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Swarmkeeper Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell faerie fire}"
						],
						[
							"5th",
							"{@spell web}"
						],
						[
							"9th",
							"{@spell gaseous form}"
						],
						[
							"13th",
							"{@spell arcane eye}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Writhing Tide",
			"source": "TCE",
			"page": 59,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are {@condition incapacitated}.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Mighty Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"Your Gathered Swarm grows mightier in the following ways:",
				{
					"type": "list",
					"items": [
						"The damage of Gathered Swarm increases to {@dice 1d8}.",
						"If a creature fails its saving throw against being moved by Gathered Swarm, you can also cause the swarm to knock the creature {@condition prone}.",
						"When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn."
					]
				}
			]
		},
		{
			"name": "Swarming Dispersal",
			"source": "TCE",
			"page": 59,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"You can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"entries": [
				"As a Fey Wanderer, you guard the border between the Feywild and the Material Plane, guiding the lost out of the Feywild and preventing dangerous fey from damaging the Material Plane. Your experience with both domains makes you an exceptional negotiator between inhabitants of these worlds, as you understand both humanoid mindsets and the wiles of the fey courts.",
				"Fey Wanderers possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Delicate horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fey Wanderer Magic|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Cunning Will|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger||Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				}
			]
		},
		{
			"name": "Cunning Will",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your experience with the fey has guarded your mind and sharpened your tongue. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You augment your attacks with mind-scarring magic, drawn from the gloomy hollows of the unseelie fey. You gain a bonus action that you can use to imbue the weapon, or weapons, you're currently holding with magic. Until the end of the turn, the weapons are magical, and they deal an extra {@damage 1d6} psychic damage on a hit. A creature can take this extra damage only once per turn.",
				"When you engage in two-weapon fighting, you can imbue your weapons as part of the same bonus action you use to make the attack."
			]
		},
		{
			"name": "Fey Wanderer Magic",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Fey Wanderer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell dispel magic}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell mislead}"
						]
					]
				}
			]
		},
		{
			"name": "Blessings of the Courts",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"You have learned eerie techniques from both the Gloaming Court and the Summer Court of the Feywild. Once during each of your turns, when you hit a creature with a weapon attack, you can expend a spell slot to deal extra psychic damage. The extra damage is {@damage 3d6} psychic damage and the creature must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} of you until the end of your next turn.",
				"In addition, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"You learn how to manipulate mind-altering magic, channeling it from your allies toward others. Whenever a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to succeed on a Wisdom saving throw against your spell save DC or suffer your choice of one of the following effects:",
				{
					"type": "list",
					"items": [
						"The creature is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.",
						"The creature takes {@damage 3d10} psychic damage."
					]
				}
			]
		},
		{
			"name": "Misty Presence",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can magically remove yourself from one creature's perception: you gain a bonus action that you can use to force a creature you can see within 30 feet of you to make a Wisdom saving throw against your spell save DC. On a failed save, the target can't see or hear you for 24 hours. The target can repeat the saving throw at the end of any turn during which you hit it with an attack roll, forced it to make a saving throw, or dealt damage to it. The effect ends early if you use this bonus action again. On a successful save, the target is immune to this feature for 7 days.",
				"Once you've used this bonus action, you can't use it again until you finish a long rest or until you expend a spell slot of 4th level or higher to use it again."
			]
		},
		{
			"name": "Drakewarden",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"entries": [
				"Drakewardens are rangers who use their magical connection with nature to form an enduring bond with a minor dragon, a drake. This bond allows the ranger to summon the drake to their side and to share in the awe-inspiring power wielded by dragons. Consider how your ranger gained their bond with the drake. The Drakewarden Origin table offers some examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from its hoard, and created your bond through the token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A true dragon gave you a drake egg to care for. When it hatched, the drake bonded to you."
						],
						[
							"4",
							"You drank a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient {@language Draconic} inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious man, accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger||Drakewarden (UA)|UA2020SubclassesPt5|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger||Drakewarden (UA)|UA2020SubclassesPt5|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a deeper connection to dragon kind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"If you can't already, you learn to speak, read, and write {@language Draconic}.",
						"You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"You can magically summon the drake bound to you. As an action, you can summon the drake, which appears in an unoccupied space of your choice that you can see within 30 feet of you.",
				"The drake is friendly to you and your companions and obeys your commands. See its game statistics in the {@creature Drake Companion|UA2020SubclassesPt5} stat block, which uses your proficiency bonus (PB) in several places. When you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake such as its color, scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.",
				"The drake remains for a number of hours equal to your proficiency bonus, until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain resistance to the damage type chosen for the drake's Draconic Essence.",
						"Choose one of the following: the drake gains a swimming speed of 40 feet and can breathe both air and water, or the drake grows wings and gains a flying speed of 40 feet.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence."
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage. Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 6d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 8d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"The drake grows to Large size.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage).",
						"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage."
					]
				}
			]
		},
		{
			"name": "Monster Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"entries": [
				"Rangers of the Slayer Conclave seek out vampires, dragons, evil fey, fiends, and other powerful magical threats. Trained in a variety of arcane and divine techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Mysticism|Ranger||Monster Slayer (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Eye|Ranger||Monster Slayer (UA)|UAATrioOfSubclasses|3"
				}
			]
		},
		{
			"name": "Slayer's Eye",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to study and unravel a creature's defenses. As a bonus action, choose one creature you can see within 120 feet of you. You immediately learn the target's vulnerabilities, immunities, and resistances. You also learn any special effects triggered when the target takes damage, such as fire damage halting its regeneration.",
				"In addition, the first time each turn you hit the target with a weapon attack, the target takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you target a different creature with this feature or until you finish a short or long rest."
			]
		},
		{
			"name": "Slayer's Mysticism",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"You learn an additional spell when you reach certain levels in this class, as shown in the Slayer Spells table. The spell counts as a ranger spell for you but doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Monster Slayer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell zone of truth}"
						],
						[
							"9th",
							"{@spell magic circle}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell planar binding}"
						]
					]
				}
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Eye forces you to make a saving throw, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Relentless Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to foil your foe's ability to escape. Your study of folklore and arcane knowledge gives you a key insight to keep your prey cornered. If the target of your Slayer's Eye attempts to teleport, change its shape, travel to another plane of existence, or turn gaseous, you can use your reaction to make a Wisdom check contested by a Wisdom check made by the target. To use this ability, you must be able to see the target and need to be within 30 feet of it. If you succeed, you foil its attempt, causing it to waste the action, bonus action, or reaction it used."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Eye forces you to make a saving throw, you can use your reaction to make one weapon attack against it. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"entries": [
				"Feeling a deep connection to the world around them, some rangers reach out through their magical connection to nature and gather a host of fey spirits, which take the form of swarming beasts\u2014be they buzzing insects, fluttering birds, slippery squids, or otherwise. The swarm becomes a potent force in battle, as well as helpful\u2014if potentially disturbing\u2014company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Swarmkeeper Magic|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger||Swarmkeeper (UA)|UAFighterRangerRogue|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You magically attract a swarm of fey spirits that look like Tiny beasts of your choice. The swarm remains in your space, crawling on you or through your clothing, or flying and skittering immediately around you within your space.",
				"As a bonus action, you can agitate the swarm for 1 minute. For the duration, some of the swarm clings to your weapons or follows your strikes when you attack: once during each of your turns when you hit a creature with a weapon attack, you can deal an extra {@damage 1d6} force damage to that creature, and the swarm moves the creature up to 5 feet toward you or away from you (your choice). At 11th level, the extra damage increases to {@dice 2d6}.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Swarmkeeper Magic",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You learn the {@spell mage hand} cantrip if you don't already know it. When you cast it, the hand takes the form of swarming nature spirits. You also learn an additional spell when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. These spells count as ranger spells for you, but don't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Swarmkeeper Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell faerie fire}"
						],
						[
							"5th",
							"{@spell web}"
						],
						[
							"9th",
							"{@spell gaseous form}"
						],
						[
							"13th",
							"{@spell giant insect}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Writhing Tide",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts or sweeps you along. Whenever you activate your Gathered Swarm feature, choose one of the following additional benefits:",
				{
					"type": "list",
					"items": [
						"Your walking speed increases by 10 feet, and you can take the {@action Disengage} action as a bonus action.",
						"You gain a climb speed equal to your walking speed. You can climb difficult surfaces, including upside down on ceilings, without making an ability check.",
						"You gain a flying speed of 10 feet and can hover."
					]
				}
			]
		},
		{
			"name": "Gathered Swarm Improvement",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"The extra damage from your swarm increases to {@dice 2d6}."
			]
		},
		{
			"name": "Scuttling Eyes",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"As an action, you can magically form one of the spirits of your swarm into the shape of a Tiny beast of your choice. The transformation lasts for 1 hour, at which point the spirit disappears. For the duration, the spirit has a speed of 40 feet, which it can use to walk, climb, fly, or swim. The spirit has your senses and telepathically relays what it sees and hears to you. During your turn, you can speak through the spirit, telepathically command it to move, and it can {@action Hide} using your bonus to Dexterity ({@skill Stealth}) checks. The spirit has AC 18. If it takes damage, you must succeed on a Wisdom saving throw (DC equal to 10, or half the damage dealt, whichever is higher) or the spirit disappears.",
				"As an action, you can dismiss the spirit early. If you do, you can magically teleport to an unoccupied space within 5 feet of where the spirit disappeared.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 3rd level or higher."
			]
		},
		{
			"name": "Storm of Minions",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"Your swarm can expel a seething storm of spirits that drains life from others. As an action, you create a magical sphere filled with an enraged swarm centered on a point you can see within 120 feet of you. The sphere has a 10-foot-radius and lasts for 1 minute. The sphere is {@quickref difficult terrain||3} for creatures other than you. A creature other than you that starts its turn in the sphere's area must make a Constitution saving throw against your spell save DC. On a failed save, the creature takes {@damage 2d8} necrotic damage and is {@condition blinded} until the start of its next turn. On a successful save, it takes half as much damage and isn't {@condition blinded}. At the start of your turn, if any number of Small or larger creatures took necrotic damage from the swarm, you regain {@dice 1d8} hit points. On subsequent turns, you can use a bonus action to move the sphere up to 30 feet.",
				"When you activate this feature, you can choose any number of creatures you can see to be unaffected by it.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 4th level or higher."
			]
		},
		{
			"name": "Deep Stalker",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 3,
			"entries": [
				"Many Deep Stalkers are elves, as those folk know all too well the threat posed by the drow. Deep Stalkers scout for new passages into the Underdark, carefully mapping them and working to ensure they remain watched at all times. They venture into the depths on long, dangerous patrols, disappearing for months at a time. Many of them never return. Deep Stalkers master spells useful in navigating the Underdark, and their combat tactics focus on ambush, surprise, and stealth. They fight alone or in small groups in hostile territory, relying on clever tactics to carry the day.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Deep Stalker Magic|Ranger||Deep Stalker (UA)|UALightDarkUnderdark|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Underdark Scout|Ranger||Deep Stalker (UA)|UALightDarkUnderdark|3"
				}
			]
		},
		{
			"name": "Deep Stalker Magic",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 3,
			"header": 1,
			"entries": [
				"From 3rd level, you have {@sense darkvision} with a range of 90 feet. You also gain access to additional spells at 3rd, 5th, 9th, 13th, and 15th level. You are always able to cast these spells, and they do not count against your number of ranger spells known.",
				{
					"type": "table",
					"caption": "Deep Stalker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell disguise self}"
						],
						[
							"5th",
							"{@spell rope trick}"
						],
						[
							"9th",
							"{@spell glyph of warding}"
						],
						[
							"13th",
							"{@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell seeming}"
						]
					]
				}
			]
		},
		{
			"name": "Underdark Scout",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master the art of the ambush. On your first turn during combat, you gain a +10 bonus to your speed. If you use the attack action on that turn, you can make one additional attack. You gain an additional benefit on all turns after your first turn. At the end of each such turn, you can attempt to hide as a bonus action if you meet the normal requirements for hiding."
			]
		},
		{
			"name": "Iron Mind",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain proficiency in Wisdom saving throws."
			]
		},
		{
			"name": "Stalker's Flurry",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 11,
			"header": 2,
			"entries": [
				"Starting at 11th level, you have the ability to ensure that your attacks count. If you miss with an attack during your turn, you can immediately make an additional attack. You can gain one additional attack during your turn with this ability."
			]
		},
		{
			"name": "Stalker's Dodge",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you master the ability to disrupt an opponent's attacks. If a creature attacks you and does not have advantage on the attack roll, you can use your reaction to grant it disadvantage on the attack roll. You must use this ability before you know the result of the attack."
			]
		},
		{
			"name": "Horizon Walker",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"Rangers of the Horizon Conclave guard the world against threats that originate from other planes. They seek out planar portals and keep watch over them, venturing to the outer and inner planes as needed to defeat threats.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Magic|Ranger||Horizon Walker (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Warrior|Ranger||Horizon Walker (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Portal Lore|Ranger||Horizon Walker (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Planar Magic",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, and it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Horizon Walker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell alter self}"
						],
						[
							"9th",
							"{@spell protection from energy}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell teleportation circle}"
						]
					]
				}
			]
		},
		{
			"name": "Planar Warrior",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to draw on the energy of the planes to augment your attacks.",
				"As a bonus action, choose one creature you can see within 30 feet of you. Until the end of this turn, your attacks against that creature ignore its damage resistances, and the next time you hit it on this turn, it takes an additional {@damage 1d6} force damage."
			]
		},
		{
			"name": "Portal Lore",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to detect the presence of planar portals. As an action, you detect the distance and direction to any planar portals within 1,000 feet of you. You also sense which plane of existence each portal leads to. However, if magic obscures any details of a portal, this feature doesn't reveal them.",
				"Once you use this feature, you can't use it again until you finish a short or long rest. Alternatively, you can use the feature again if you expend a spell slot of 2nd level or higher.",
				"See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
			]
		},
		{
			"name": "Ethereal Step",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the {@spell etherealness} spell with this feature, but the spell ends at the end of the current turn. Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Distant Strike",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to step between the planes in a blink of an eye. When you use the {@action Attack} action, you can teleport up to 10 feet before each attack. You must be able to see the destination of the teleportation.",
				"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
			]
		},
		{
			"name": "Spectral Defense",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your ability to move between planes becomes even more finely tuned. As a reaction when you take damage, you can halve that damage against you. For a moment, you slip into the planar boundary to lessen the harm."
			]
		},
		{
			"name": "Primeval Guardian",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"Rangers of the Primeval Guardian Conclave follow an ancient tradition rooted in powerful druidic magic. These rangers learn to become one with nature, allowing them to channel the aspects of various beasts and plants in order to overcome their foes.",
				"These rangers dwell in the elder forests of the world. They venture out only rarely, as they consider it their sacred duty to protect the druidic groves and ancient trees that saw the earliest days of the world.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guardian Magic|Ranger||Primeval Guardian (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guardian Soul|Ranger||Primeval Guardian (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Piercing Thorns|Ranger||Primeval Guardian (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Guardian Magic",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Primeval Guardian Spells table. The spell counts as a ranger spell for you, and it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Primeval Guardian Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell entangle}"
						],
						[
							"5th",
							"{@spell enhance ability}"
						],
						[
							"9th",
							"{@spell conjure animals}"
						],
						[
							"13th",
							"{@spell giant insect}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Guardian Soul",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to temporarily grow and take on the appearance of a treelike person, covered with leaves and bark. As a bonus action, you assume this guardian form, which lasts until you end it as a bonus action or until you are {@condition incapacitated}.",
				"You undergo the following changes while in your guardian form:",
				{
					"type": "list",
					"items": [
						"Your size becomes Large, unless you were larger.",
						"Any speed you have becomes 5 feet, unless the speed was lower.",
						"Your reach increases by 5 feet.",
						"You gain a number of temporary hit points at the start of each of your turns. The number equals half your ranger level. When the form ends, you lose any temporary hit points you have from it."
					]
				}
			]
		},
		{
			"name": "Piercing Thorns",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your command of primal magic allows you to enhance your attacks with thorns. Once during each of your turns, you can deal an additional {@damage 1d6} piercing damage to one creature you hit with a weapon attack."
			]
		},
		{
			"name": "Ancient Fortitude",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain the endurance of the ancient forests. Your hit point maximum and current hit points increase by 2 per ranger level when you assume your guardian form. This increase lasts until you leave the form; your hit point maximum then returns to normal, but your current hit points remain the same, unless they must decrease to abide by your hit point maximum."
			]
		},
		{
			"name": "Rooted Defense",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to twist and turn the ground beneath you. While you are in your guardian form, the ground within 30 feet of you is {@quickref difficult terrain||3} for your enemies."
			]
		},
		{
			"name": "Guardian Aura",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, your guardian form emanates a magical aura that fortifies your injured allies. When any ally starts their turn within 30 feet of your guardian form, that ally regains a number of hit points equal to half your ranger level. This aura has no effect on a creature that has half or more of its hit points, and it has no effect on undead and constructs."
			]
		},
		{
			"name": "Gloom Stalker",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Gloom Stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a Gloom Stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gloom Stalker Magic|Ranger||Gloom Stalker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dread Ambusher|Ranger||Gloom Stalker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Umbral Sight|Ranger||Gloom Stalker|XGE|3"
				}
			]
		},
		{
			"name": "Dread Ambusher",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.",
				"At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the {@action Attack} action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra {@damage 1d8} damage of the weapon's damage type."
			]
		},
		{
			"name": "Gloom Stalker Magic",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Gloom Stalker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Gloom Stalker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell disguise self}"
						],
						[
							"5th",
							"{@spell rope trick}"
						],
						[
							"9th",
							"{@spell fear}"
						],
						[
							"13th",
							"{@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell seeming}"
						]
					]
				}
			]
		},
		{
			"name": "Umbral Sight",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision} from your race, its range increases by 30 feet.",
				"You are also adept at evading creatures that rely on {@sense darkvision}. While in darkness, you are {@condition invisible} to any creature that relies on {@sense darkvision} to see you in that darkness."
			]
		},
		{
			"name": "Iron Mind",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
			]
		},
		{
			"name": "Stalker's Flurry",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action."
			]
		},
		{
			"name": "Shadowy Dodge",
			"source": "XGE",
			"page": 41,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll."
			]
		},
		{
			"name": "Horizon Walker",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Horizon Walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse\u2014especially benevolent dragons, fey, and elementals\u2014that work to preserve life and the order of the planes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Horizon Walker Magic|Ranger||Horizon Walker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Detect Portal|Ranger||Horizon Walker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Warrior|Ranger||Horizon Walker|XGE|3"
				}
			]
		},
		{
			"name": "Detect Portal",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.",
				"Once you use this feature, you can't use it again until you finish a short or long rest.",
				"See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
			]
		},
		{
			"name": "Horizon Walker Magic",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Horizon Walker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell haste}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell teleportation circle}"
						]
					]
				}
			]
		},
		{
			"name": "Planar Warrior",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.",
				"As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra {@damage 1d8} force damage from the attack. When you reach 11th level in this class, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Ethereal Step",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to step through the Ethereal Plane. As a bonus action, you can cast the {@spell etherealness} spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Distant Strike",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to pass between the planes in the blink of an eye. When you take the {@action Attack} action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.",
				"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
			]
		},
		{
			"name": "Spectral Defense",
			"source": "XGE",
			"page": 42,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn."
			]
		},
		{
			"name": "Monster Slayer",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A Monster Slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats. Trained in supernatural techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty, mystical foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Monster Slayer Magic|Ranger||Monster Slayer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Sense|Ranger||Monster Slayer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Prey|Ranger||Monster Slayer|XGE|3"
				}
			]
		},
		{
			"name": "Hunter's Sense",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Monster Slayer Magic",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Monster Slayer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Monster Slayer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell zone of truth}"
						],
						[
							"9th",
							"{@spell magic circle}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell hold monster}"
						]
					]
				}
			]
		},
		{
			"name": "Slayer's Prey",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature."
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Magic-User's Nemesis",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "XGE",
			"page": 43,
			"className": "Ranger",
			"classSource": "PHB",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		},
		{
			"name": "Drakewarden",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"entries": [
				"Your connection to the natural world takes the form of a draconic spirit, which can manifest in physical form as a drake. As your powers grow, your drake grows as well, blossoming from a small four-legged companion to a majestic winged creature large and strong enough for you to ride. Along the way, you gain an increasing share of the awe-inspiring power of dragons.",
				"Consider the source of the draconic spirit you have bonded with. The Drakewarden Origin table offers examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from a dragon's hoard, creating your bond through that token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A dragon gave you a geode or gemstone to care for. To your surprise, the drake hatched from that stone."
						],
						[
							"4",
							"You ingested a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient Draconic inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious figure accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger (Spell-less)|UAModifyingClasses|Drakewarden|FTD|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger (Spell-less)|UAModifyingClasses|Drakewarden|FTD|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Thaumaturgy",
							"entry": "You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
						},
						{
							"type": "item",
							"name": "Tongue of Dragons",
							"entry": "You learn to speak, read, and write Draconic or one other language of your choice."
						}
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"As an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you.",
				"The drake is friendly to you and your companions, and it obeys your commands. See its game statistics in the accompanying {@creature Drake Companion|FTD} stat block, which uses your proficiency bonus (PB) in several places. Whenever you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake, such as its color, its scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"The drake remains until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. When you summon your drake, it grows wings on its back and gains a flying speed equal to its walking speed.",
				"In addition, while your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Drake Mount",
							"entries": [
								"The drake grows to Medium size. Reflecting your special bond, you can use the drake as a mount if your size is Medium or smaller. While you are riding your drake, it can't use the flying speed of this feature."
							]
						},
						{
							"type": "item",
							"name": "Magic Fang",
							"entries": [
								"The drake's Bite attack deals an extra {@damage 1d6} damage of the type chosen for the drake's Draconic Essence."
							]
						},
						{
							"type": "item",
							"name": "Resistance",
							"entries": [
								"You gain resistance to the damage type chosen for the drake's Draconic Essence."
							]
						}
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn't have to match your drake's Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 8d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 10d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Empowered Bite",
							"entries": [
								"The drake's Bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage)."
							]
						},
						{
							"type": "item",
							"name": "Large Drake",
							"entries": [
								"The drake grows to Large size. When you ride your drake, it is no longer prohibited from using the flying speed of Bond of Fang and Scale."
							]
						},
						{
							"type": "item",
							"name": "Reflexive Resistance",
							"entries": [
								"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
							]
						}
					]
				}
			]
		},
		{
			"name": "Beast Master",
			"source": "PHB",
			"page": 93,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ranger's Companion|Ranger (Spell-less)|UAModifyingClasses|Beast Master||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ranger Companion Options|Ranger (Spell-less)|UAModifyingClasses|Beast Master||3|UAClassFeatureVariants"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Primal Companion|Ranger (Spell-less)|UAModifyingClasses|Beast Master||3|TCE"
				}
			]
		},
		{
			"name": "Primal Companion",
			"source": "TCE",
			"page": 61,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"header": 1,
			"entries": [
				"{@i 3rd-level Beast Master variant feature, which replaces the Ranger's Companion feature}",
				"{@note Note that this feature is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger feature.}",
				"You magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block\u2014{@creature Beast of the Land|TCE}, {@creature Beast of the Sea|TCE}, or {@creature Beast of the Sky|TCE}\u2014which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.",
				"In combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the {@action Attack} action to command the beast to take the {@action Attack} action. If you are {@condition incapacitated}, the beast can take any action of its choice, not just {@action Dodge}.",
				"If the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored.",
				"When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die."
			]
		},
		{
			"name": "Ranger Companion Options",
			"source": "UAClassFeatureVariants",
			"page": 8,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"header": 1,
			"entries": [
				"{@i 3rd-level Beast Master feature (enhances Ranger's Companion)}",
				"While wandering the wilds, a ranger encounters many sorts of animals, some of which the ranger might befriend. This friendship can arise from successful use of the {@skill Animal Handling} skill or the {@spell animal friendship} spell. If the resulting bond is strong enough, the animal might join the ranger on adventures.",
				"A ranger who has the Beast Master archetype can form an even stronger bond, feeling almost like a sibling to an animal. A special type of beast awaits a Beast Master in the wilds, a creature whose lineage stretches back to the beginnings of the world: a primal beast known as a {@creature Beast of the Air|UAClassFeatureVariants} or a {@creature Beast of the Earth|UAClassFeatureVariants}. Such a creature seeks out the type of companionship that a Beast Master offers, ready for the two of them to battle the imbalances in the natural world.",
				"The primal beast is a special creature that a Beast Master can choose for the Ranger's Companion feature. When choosing such a creature, you decide whether it is a Beast of the Air or the Earth, and you determine its appearance. Stories describe primal beasts that mystically change form to align with the spirit of their companion.",
				"When a primal beast is met apart from a Beast Master, the creature takes the form a regular beast of challenge rating 1/4 or lower, as determined by the DM."
			]
		},
		{
			"name": "Ranger's Companion",
			"source": "PHB",
			"page": 93,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a {@filter beast that is no larger than Medium and that has a challenge rating of 1/4 or lower|bestiary|challenge rating=[&0;&1/4]|type=beast|size=f;d;t;s;m|miscellaneous=!swarm}. Add your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. Like any creature, the beast can spend Hit Dice during a short rest.",
				"The beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the {@action Attack}, {@action Dash}, {@action Disengage}, or {@action Help} action. If you don't issue a command, the beast takes the {@action Dodge} action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the {@action Attack} action.",
				"If you are {@condition incapacitated} or absent, the beast acts on its own, focusing on protecting you and itself. The beast never requires your command to use its reaction, such as when making an opportunity attack.",
				"While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.",
				"If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn't hostile to you, either the same type of beast as before or a different one."
			]
		},
		{
			"name": "Exceptional Training",
			"source": "PHB",
			"page": 93,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the {@action Dash}, {@action Disengage}, or {@action Help} action on its turn. In addition, the beast's attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
			]
		},
		{
			"name": "Bestial Fury",
			"source": "PHB",
			"page": 93,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"Starting at 11th level, when you command your beast companion to take the {@action Attack} action, the beast can make two attacks, or it can take the Multiattack action if it has that action."
			]
		},
		{
			"name": "Beastly Coordination",
			"source": "PHB",
			"page": 93,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Beast Master",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Beginning at 15th level, when an attacker that you can see hits your beast companion with an attack, you can call out a warning. If your beast companion can hear you, it can use its reaction to halve the attack's damage against it."
			]
		},
		{
			"name": "Hunter",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Prey|Ranger (Spell-less)|UAModifyingClasses|Hunter||3"
				}
			]
		},
		{
			"name": "Horde Breaker",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
			]
		},
		{
			"name": "Hunter's Prey",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Colossus Slayer|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Giant Killer|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Horde Breaker|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|3"
						}
					]
				}
			]
		},
		{
			"name": "Colossus Slayer",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 2,
			"entries": [
				"Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra {@damage 1d8} damage if it's below its hit point maximum. You can deal this extra damage only once per turn."
			]
		},
		{
			"name": "Giant Killer",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 3,
			"header": 2,
			"entries": [
				"When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
			]
		},
		{
			"name": "Defensive Tactics",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Escape the Horde|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Multiattack Defense|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Steel Will|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|7"
						}
					]
				}
			]
		},
		{
			"name": "Escape the Horde",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Opportunity attacks against you are made with disadvantage."
			]
		},
		{
			"name": "Multiattack Defense",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
			]
		},
		{
			"name": "Steel Will",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"You have advantage on saving throws against being {@condition frightened}."
			]
		},
		{
			"name": "Multiattack",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Volley|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|11"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Whirlwind Attack|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|11"
						}
					]
				}
			]
		},
		{
			"name": "Volley",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target."
			]
		},
		{
			"name": "Whirlwind Attack",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
			]
		},
		{
			"name": "Evasion",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a {@spell lightning bolt} spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
			]
		},
		{
			"name": "Stand Against the Tide",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
			]
		},
		{
			"name": "Superior Hunter's Defense",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Evasion|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|15"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Stand Against the Tide|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|15"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Uncanny Dodge|Ranger (Spell-less)|UAModifyingClasses|Hunter|PHB|15"
						}
					]
				}
			]
		},
		{
			"name": "Uncanny Dodge",
			"source": "PHB",
			"page": 93,
			"srd": true,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Hunter",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"A fey mystique surrounds you, thanks to the boon of an archfey, the shining fruit you ate from a talking tree, the magic spring you swam in, or some other auspicious event. However you acquired your fey magic, you are now a Fey Wanderer, a ranger who represents both the mortal and the fey realms. As you wander the multiverse, your joyful laughter brightens the hearts of the downtrodden, and your martial prowess strikes terror in your foes, for great is the mirth of the fey and dreadful is their fury.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fey Wanderer Magic|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Otherworldly Glamour|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer|TCE|3"
				}
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra {@damage 1d4} psychic damage to the target, which can take this extra damage only once per turn.",
				"The extra damage increases to {@dice 1d6} when you reach 11th level in this class."
			]
		},
		{
			"name": "Fey Wanderer Magic",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Fey Wanderer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell dispel magic}"
						],
						[
							"13th",
							"{@spell dimension door}"
						],
						[
							"17th",
							"{@spell mislead}"
						]
					]
				},
				"You also possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				}
			]
		},
		{
			"name": "Otherworldly Glamour",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"The magic of the Feywild guards your mind. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save."
			]
		},
		{
			"name": "Fey Reinforcements",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"The royal courts of the Feywild have blessed you with the assistance of fey beings: you know {@spell summon fey|tce}. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
				"Whenever you start casting the spell, you can modify it so that it doesn't require {@status concentration}. If you do so, the spell's duration becomes 1 minute for that casting."
			]
		},
		{
			"name": "Misty Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can slip in and out of the Feywild to move in a blink of an eye: you can cast {@spell misty step} without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
				"In addition, whenever you cast {@i misty step}, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Swarmkeeper Magic|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"A swarm of intangible nature spirits has bonded itself to you and can assist you in battle. While you're alive, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.",
				{
					"type": "table",
					"caption": "Swarm Appearance",
					"colLabels": [
						"d4",
						"Appearance"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Swarming insects"
						],
						[
							"2",
							"Miniature twig blights"
						],
						[
							"3",
							"Fluttering birds"
						],
						[
							"4",
							"Playful pixies"
						]
					]
				},
				"Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:",
				{
					"type": "list",
					"items": [
						"The attack's target takes {@damage 1d6} piercing damage from the swarm.",
						"The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.",
						"You are moved by the swarm 5 feet horizontally in a direction of your choice."
					]
				},
				{
					"type": "inset",
					"name": "It's Your Swarm",
					"entries": [
						"A Swarmkeeper's swarm and spells are reflections of the character's bond with nature spirits. Take the opportunity to describe the swarm and the ranger's magic in play. For example, when your ranger casts gaseous form, they might appear to melt into the swarm, instead of a cloud of mist, or the {@spell arcane eye} spell could create an extension of your swarm that spies for you. Such descriptions don't change the effects of spells, but they are an exciting opportunity to explore your character's narrative through their class abilities. For more guidance on customizing spells, see the \"Personalizing Spells\" section in chapter 3.",
						"Also, remember that the swarm's appearance is yours to customize, and don't feel confined to a single appearance. Perhaps the spirits' look changes with the ranger's mood or with the seasons. You decide!"
					]
				}
			]
		},
		{
			"name": "Swarmkeeper Magic",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You learn the {@spell mage hand} cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.",
				"You also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Swarmkeeper Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell faerie fire}"
						],
						[
							"5th",
							"{@spell web}"
						],
						[
							"9th",
							"{@spell gaseous form}"
						],
						[
							"13th",
							"{@spell arcane eye}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Writhing Tide",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are {@condition incapacitated}.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Mighty Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"Your Gathered Swarm grows mightier in the following ways:",
				{
					"type": "list",
					"items": [
						"The damage of Gathered Swarm increases to {@dice 1d8}.",
						"If a creature fails its saving throw against being moved by Gathered Swarm, you can also cause the swarm to knock the creature {@condition prone}.",
						"When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn."
					]
				}
			]
		},
		{
			"name": "Swarming Dispersal",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"You can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"As a Fey Wanderer, you guard the border between the Feywild and the Material Plane, guiding the lost out of the Feywild and preventing dangerous fey from damaging the Material Plane. Your experience with both domains makes you an exceptional negotiator between inhabitants of these worlds, as you understand both humanoid mindsets and the wiles of the fey courts.",
				"Fey Wanderers possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Delicate horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Cunning Will|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				}
			]
		},
		{
			"name": "Cunning Will",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your experience with the fey has guarded your mind and sharpened your tongue. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You augment your attacks with mind-scarring magic, drawn from the gloomy hollows of the unseelie fey. You gain a bonus action that you can use to imbue the weapon, or weapons, you're currently holding with magic. Until the end of the turn, the weapons are magical, and they deal an extra {@damage 1d6} psychic damage on a hit. A creature can take this extra damage only once per turn.",
				"When you engage in two-weapon fighting, you can imbue your weapons as part of the same bonus action you use to make the attack."
			]
		},
		{
			"name": "Blessings of the Courts",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"You have learned eerie techniques from both the Gloaming Court and the Summer Court of the Feywild. Once during each of your turns, when you hit a creature with a weapon attack, you can expend a spell slot to deal extra psychic damage. The extra damage is {@damage 3d6} psychic damage and the creature must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} of you until the end of your next turn.",
				"In addition, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"You learn how to manipulate mind-altering magic, channeling it from your allies toward others. Whenever a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to succeed on a Wisdom saving throw against your spell save DC or suffer your choice of one of the following effects:",
				{
					"type": "list",
					"items": [
						"The creature is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.",
						"The creature takes {@damage 3d10} psychic damage."
					]
				}
			]
		},
		{
			"name": "Misty Presence",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can magically remove yourself from one creature's perception: you gain a bonus action that you can use to force a creature you can see within 30 feet of you to make a Wisdom saving throw against your spell save DC. On a failed save, the target can't see or hear you for 24 hours. The target can repeat the saving throw at the end of any turn during which you hit it with an attack roll, forced it to make a saving throw, or dealt damage to it. The effect ends early if you use this bonus action again. On a successful save, the target is immune to this feature for 7 days.",
				"Once you've used this bonus action, you can't use it again until you finish a long rest or until you expend a spell slot of 4th level or higher to use it again."
			]
		},
		{
			"name": "Drakewarden",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"entries": [
				"Drakewardens are rangers who use their magical connection with nature to form an enduring bond with a minor dragon, a drake. This bond allows the ranger to summon the",
				"drake to their side and to share in the awe-inspiring power wielded by dragons. Consider how your ranger gained their bond with the drake. The Drakewarden Origin table offers some examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from its hoard, and created your bond through the token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A true dragon gave you a drake egg to care for. When it hatched, the drake bonded to you."
						],
						[
							"4",
							"You drank a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient {@language Draconic} inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious man, accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a deeper connection to dragon kind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"If you can't already, you learn to speak, read, and write {@language Draconic}.",
						"You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"You can magically summon the drake bound to you. As an action, you can summon the drake, which appears in an unoccupied space of your choice that you can see within 30 feet of you.",
				"The drake is friendly to you and your companions and obeys your commands. See its game statistics in the {@creature Drake Companion|UA2020SubclassesPt5} stat block, which uses your proficiency bonus (PB) in several places. When you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake such as its color, scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.",
				"The drake remains for a number of hours equal to your proficiency bonus, until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain resistance to the damage type chosen for the drake's Draconic Essence.",
						"Choose one of the following: the drake gains a swimming speed of 40 feet and can breathe both air and water, or the drake grows wings and gains a flying speed of 40 feet.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence."
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage. Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 6d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 8d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"The drake grows to Large size.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage).",
						"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage."
					]
				}
			]
		},
		{
			"name": "Monster Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Rangers of the Slayer Conclave seek out vampires, dragons, evil fey, fiends, and other powerful magical threats. Trained in a variety of arcane and divine techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Eye|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer (UA)|UAATrioOfSubclasses|3"
				}
			]
		},
		{
			"name": "Slayer's Eye",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to study and unravel a creature's defenses. As a bonus action, choose one creature you can see within 120 feet of you. You immediately learn the target's vulnerabilities, immunities, and resistances. You also learn any special effects triggered when the target takes damage, such as fire damage halting its regeneration.",
				"In addition, the first time each turn you hit the target with a weapon attack, the target takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you target a different creature with this feature or until you finish a short or long rest."
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Eye forces you to make a saving throw, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Relentless Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to foil your foe's ability to escape. Your study of folklore and arcane knowledge gives you a key insight to keep your prey cornered. If the target of your Slayer's Eye attempts to teleport, change its shape, travel to another plane of existence, or turn gaseous, you can use your reaction to make a Wisdom check contested by a Wisdom check made by the target. To use this ability, you must be able to see the target and need to be within 30 feet of it. If you succeed, you foil its attempt, causing it to waste the action, bonus action, or reaction it used."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Eye forces you to make a saving throw, you can use your reaction to make one weapon attack against it. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Feeling a deep connection to the world around them, some rangers reach out through their magical connection to nature and gather a host of fey spirits, which take the form of swarming beasts\u2014be they buzzing insects, fluttering birds, slippery squids, or otherwise. The swarm becomes a potent force in battle, as well as helpful\u2014if potentially disturbing\u2014company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You magically attract a swarm of fey spirits that look like Tiny beasts of your choice. The swarm remains in your space, crawling on you or through your clothing, or flying and skittering immediately around you within your space.",
				"As a bonus action, you can agitate the swarm for 1 minute. For the duration, some of the swarm clings to your weapons or follows your strikes when you attack: once during each of your turns when you hit a creature with a weapon attack, you can deal an extra {@damage 1d6} force damage to that creature, and the swarm moves the creature up to 5 feet toward you or away from you (your choice). At 11th level, the extra damage increases to {@dice 2d6}.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Writhing Tide",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts or sweeps you along. Whenever you activate your Gathered Swarm feature, choose one of the following additional benefits:",
				{
					"type": "list",
					"items": [
						"Your walking speed increases by 10 feet, and you can take the {@action Disengage} action as a bonus action.",
						"You gain a climb speed equal to your walking speed. You can climb difficult surfaces, including upside down on ceilings, without making an ability check.",
						"You gain a flying speed of 10 feet and can hover."
					]
				}
			]
		},
		{
			"name": "Gathered Swarm Improvement",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"The extra damage from your swarm increases to {@dice 2d6}."
			]
		},
		{
			"name": "Scuttling Eyes",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"As an action, you can magically form one of the spirits of your swarm into the shape of a Tiny beast of your choice. The transformation lasts for 1 hour, at which point the spirit disappears. For the duration, the spirit has a speed of 40 feet, which it can use to walk, climb, fly, or swim. The spirit has your senses and telepathically relays what it sees and hears to you. During your turn, you can speak through the spirit, telepathically command it to move, and it can {@action Hide} using your bonus to Dexterity ({@skill Stealth}) checks. The spirit has AC 18. If it takes damage, you must succeed on a Wisdom saving throw (DC equal to 10, or half the damage dealt, whichever is higher) or the spirit disappears.",
				"As an action, you can dismiss the spirit early. If you do, you can magically teleport to an unoccupied space within 5 feet of where the spirit disappeared.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 3rd level or higher."
			]
		},
        {
			"name": "Fey Wanderer Magic",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Fey Wanderer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell dispel magic}"
						],
						[
							"13th",
							"{@spell dimension door}"
						],
						[
							"17th",
							"{@spell mislead}"
						]
					]
				},
				"You also possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				}
			]
		},
		{
			"name": "Otherworldly Glamour",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"The magic of the Feywild guards your mind. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save."
			]
		},
		{
			"name": "Fey Reinforcements",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"The royal courts of the Feywild have blessed you with the assistance of fey beings: you know {@spell summon fey|tce}. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
				"Whenever you start casting the spell, you can modify it so that it doesn't require {@status concentration}. If you do so, the spell's duration becomes 1 minute for that casting."
			]
		},
		{
			"name": "Misty Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can slip in and out of the Feywild to move in a blink of an eye: you can cast {@spell misty step} without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
				"In addition, whenever you cast {@i misty step}, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Swarmkeeper Magic|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper|TCE|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"A swarm of intangible nature spirits has bonded itself to you and can assist you in battle. While you're alive, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.",
				{
					"type": "table",
					"caption": "Swarm Appearance",
					"colLabels": [
						"d4",
						"Appearance"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Swarming insects"
						],
						[
							"2",
							"Miniature twig blights"
						],
						[
							"3",
							"Fluttering birds"
						],
						[
							"4",
							"Playful pixies"
						]
					]
				},
				"Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:",
				{
					"type": "list",
					"items": [
						"The attack's target takes {@damage 1d6} piercing damage from the swarm.",
						"The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.",
						"You are moved by the swarm 5 feet horizontally in a direction of your choice."
					]
				},
				{
					"type": "inset",
					"name": "It's Your Swarm",
					"entries": [
						"A Swarmkeeper's swarm and spells are reflections of the character's bond with nature spirits. Take the opportunity to describe the swarm and the ranger's magic in play. For example, when your ranger casts gaseous form, they might appear to melt into the swarm, instead of a cloud of mist, or the {@spell arcane eye} spell could create an extension of your swarm that spies for you. Such descriptions don't change the effects of spells, but they are an exciting opportunity to explore your character's narrative through their class abilities. For more guidance on customizing spells, see the \"Personalizing Spells\" section in chapter 3.",
						"Also, remember that the swarm's appearance is yours to customize, and don't feel confined to a single appearance. Perhaps the spirits' look changes with the ranger's mood or with the seasons. You decide!"
					]
				}
			]
		},
		{
			"name": "Swarmkeeper Magic",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You learn the {@spell mage hand} cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.",
				"You also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Swarmkeeper Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell faerie fire}"
						],
						[
							"5th",
							"{@spell web}"
						],
						[
							"9th",
							"{@spell gaseous form}"
						],
						[
							"13th",
							"{@spell arcane eye}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Writhing Tide",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are {@condition incapacitated}.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Mighty Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"Your Gathered Swarm grows mightier in the following ways:",
				{
					"type": "list",
					"items": [
						"The damage of Gathered Swarm increases to {@dice 1d8}.",
						"If a creature fails its saving throw against being moved by Gathered Swarm, you can also cause the swarm to knock the creature {@condition prone}.",
						"When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn."
					]
				}
			]
		},
		{
			"name": "Swarming Dispersal",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"You can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"As a Fey Wanderer, you guard the border between the Feywild and the Material Plane, guiding the lost out of the Feywild and preventing dangerous fey from damaging the Material Plane. Your experience with both domains makes you an exceptional negotiator between inhabitants of these worlds, as you understand both humanoid mindsets and the wiles of the fey courts.",
				"Fey Wanderers possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Delicate horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Cunning Will|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger (Spell-less)|UAModifyingClasses|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				}
			]
		},
		{
			"name": "Cunning Will",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your experience with the fey has guarded your mind and sharpened your tongue. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You augment your attacks with mind-scarring magic, drawn from the gloomy hollows of the unseelie fey. You gain a bonus action that you can use to imbue the weapon, or weapons, you're currently holding with magic. Until the end of the turn, the weapons are magical, and they deal an extra {@damage 1d6} psychic damage on a hit. A creature can take this extra damage only once per turn.",
				"When you engage in two-weapon fighting, you can imbue your weapons as part of the same bonus action you use to make the attack."
			]
		},
		{
			"name": "Blessings of the Courts",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"You have learned eerie techniques from both the Gloaming Court and the Summer Court of the Feywild. Once during each of your turns, when you hit a creature with a weapon attack, you can expend a spell slot to deal extra psychic damage. The extra damage is {@damage 3d6} psychic damage and the creature must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} of you until the end of your next turn.",
				"In addition, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"You learn how to manipulate mind-altering magic, channeling it from your allies toward others. Whenever a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to succeed on a Wisdom saving throw against your spell save DC or suffer your choice of one of the following effects:",
				{
					"type": "list",
					"items": [
						"The creature is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.",
						"The creature takes {@damage 3d10} psychic damage."
					]
				}
			]
		},
		{
			"name": "Misty Presence",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can magically remove yourself from one creature's perception: you gain a bonus action that you can use to force a creature you can see within 30 feet of you to make a Wisdom saving throw against your spell save DC. On a failed save, the target can't see or hear you for 24 hours. The target can repeat the saving throw at the end of any turn during which you hit it with an attack roll, forced it to make a saving throw, or dealt damage to it. The effect ends early if you use this bonus action again. On a successful save, the target is immune to this feature for 7 days.",
				"Once you've used this bonus action, you can't use it again until you finish a long rest or until you expend a spell slot of 4th level or higher to use it again."
			]
		},
		{
			"name": "Drakewarden",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"entries": [
				"Drakewardens are rangers who use their magical connection with nature to form an enduring bond with a minor dragon, a drake. This bond allows the ranger to summon the",
				"drake to their side and to share in the awe-inspiring power wielded by dragons. Consider how your ranger gained their bond with the drake. The Drakewarden Origin table offers some examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from its hoard, and created your bond through the token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A true dragon gave you a drake egg to care for. When it hatched, the drake bonded to you."
						],
						[
							"4",
							"You drank a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient {@language Draconic} inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious man, accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger (Spell-less)|UAModifyingClasses|Drakewarden (UA)|UA2020SubclassesPt5|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a deeper connection to dragon kind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"If you can't already, you learn to speak, read, and write {@language Draconic}.",
						"You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"You can magically summon the drake bound to you. As an action, you can summon the drake, which appears in an unoccupied space of your choice that you can see within 30 feet of you.",
				"The drake is friendly to you and your companions and obeys your commands. See its game statistics in the {@creature Drake Companion|UA2020SubclassesPt5} stat block, which uses your proficiency bonus (PB) in several places. When you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake such as its color, scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.",
				"The drake remains for a number of hours equal to your proficiency bonus, until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain resistance to the damage type chosen for the drake's Draconic Essence.",
						"Choose one of the following: the drake gains a swimming speed of 40 feet and can breathe both air and water, or the drake grows wings and gains a flying speed of 40 feet.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence."
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage. Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 6d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 8d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"The drake grows to Large size.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage).",
						"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage."
					]
				}
			]
		},
		{
			"name": "Monster Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Rangers of the Slayer Conclave seek out vampires, dragons, evil fey, fiends, and other powerful magical threats. Trained in a variety of arcane and divine techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Eye|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer (UA)|UAATrioOfSubclasses|3"
				}
			]
		},
		{
			"name": "Slayer's Eye",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to study and unravel a creature's defenses. As a bonus action, choose one creature you can see within 120 feet of you. You immediately learn the target's vulnerabilities, immunities, and resistances. You also learn any special effects triggered when the target takes damage, such as fire damage halting its regeneration.",
				"In addition, the first time each turn you hit the target with a weapon attack, the target takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you target a different creature with this feature or until you finish a short or long rest."
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Eye forces you to make a saving throw, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Relentless Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to foil your foe's ability to escape. Your study of folklore and arcane knowledge gives you a key insight to keep your prey cornered. If the target of your Slayer's Eye attempts to teleport, change its shape, travel to another plane of existence, or turn gaseous, you can use your reaction to make a Wisdom check contested by a Wisdom check made by the target. To use this ability, you must be able to see the target and need to be within 30 feet of it. If you succeed, you foil its attempt, causing it to waste the action, bonus action, or reaction it used."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Eye forces you to make a saving throw, you can use your reaction to make one weapon attack against it. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Feeling a deep connection to the world around them, some rangers reach out through their magical connection to nature and gather a host of fey spirits, which take the form of swarming beasts\u2014be they buzzing insects, fluttering birds, slippery squids, or otherwise. The swarm becomes a potent force in battle, as well as helpful\u2014if potentially disturbing\u2014company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger (Spell-less)|UAModifyingClasses|Swarmkeeper (UA)|UAFighterRangerRogue|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You magically attract a swarm of fey spirits that look like Tiny beasts of your choice. The swarm remains in your space, crawling on you or through your clothing, or flying and skittering immediately around you within your space.",
				"As a bonus action, you can agitate the swarm for 1 minute. For the duration, some of the swarm clings to your weapons or follows your strikes when you attack: once during each of your turns when you hit a creature with a weapon attack, you can deal an extra {@damage 1d6} force damage to that creature, and the swarm moves the creature up to 5 feet toward you or away from you (your choice). At 11th level, the extra damage increases to {@dice 2d6}.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Writhing Tide",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts or sweeps you along. Whenever you activate your Gathered Swarm feature, choose one of the following additional benefits:",
				{
					"type": "list",
					"items": [
						"Your walking speed increases by 10 feet, and you can take the {@action Disengage} action as a bonus action.",
						"You gain a climb speed equal to your walking speed. You can climb difficult surfaces, including upside down on ceilings, without making an ability check.",
						"You gain a flying speed of 10 feet and can hover."
					]
				}
			]
		},
		{
			"name": "Gathered Swarm Improvement",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"The extra damage from your swarm increases to {@dice 2d6}."
			]
		},
		{
			"name": "Scuttling Eyes",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"As an action, you can magically form one of the spirits of your swarm into the shape of a Tiny beast of your choice. The transformation lasts for 1 hour, at which point the spirit disappears. For the duration, the spirit has a speed of 40 feet, which it can use to walk, climb, fly, or swim. The spirit has your senses and telepathically relays what it sees and hears to you. During your turn, you can speak through the spirit, telepathically command it to move, and it can {@action Hide} using your bonus to Dexterity ({@skill Stealth}) checks. The spirit has AC 18. If it takes damage, you must succeed on a Wisdom saving throw (DC equal to 10, or half the damage dealt, whichever is higher) or the spirit disappears.",
				"As an action, you can dismiss the spirit early. If you do, you can magically teleport to an unoccupied space within 5 feet of where the spirit disappeared.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 3rd level or higher."
			]
		},
		{
			"name": "Storm of Minions",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"Your swarm can expel a seething storm of spirits that drains life from others. As an action, you create a magical sphere filled with an enraged swarm centered on a point you can see within 120 feet of you. The sphere has a 10-foot-radius and lasts for 1 minute. The sphere is {@quickref difficult terrain||3} for creatures other than you. A creature other than you that starts its turn in the sphere's area must make a Constitution saving throw against your spell save DC. On a failed save, the creature takes {@damage 2d8} necrotic damage and is {@condition blinded} until the start of its next turn. On a successful save, it takes half as much damage and isn't {@condition blinded}. At the start of your turn, if any number of Small or larger creatures took necrotic damage from the swarm, you regain {@dice 1d8} hit points. On subsequent turns, you can use a bonus action to move the sphere up to 30 feet.",
				"When you activate this feature, you can choose any number of creatures you can see to be unaffected by it.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 4th level or higher."
			]
		},
		{
			"name": "Deep Stalker",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Many Deep Stalkers are elves, as those folk know all too well the threat posed by the drow. Deep Stalkers scout for new passages into the Underdark, carefully mapping them and working to ensure they remain watched at all times. They venture into the depths on long, dangerous patrols, disappearing for months at a time. Many of them never return. Deep Stalkers master spells useful in navigating the Underdark, and their combat tactics focus on ambush, surprise, and stealth. They fight alone or in small groups in hostile territory, relying on clever tactics to carry the day.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Underdark Scout|Ranger (Spell-less)|UAModifyingClasses|Deep Stalker (UA)|UALightDarkUnderdark|3"
				}
			]
		},
		{
			"name": "Underdark Scout",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master the art of the ambush. On your first turn during combat, you gain a +10 bonus to your speed. If you use the attack action on that turn, you can make one additional attack. You gain an additional benefit on all turns after your first turn. At the end of each such turn, you can attempt to hide as a bonus action if you meet the normal requirements for hiding."
			]
		},
		{
			"name": "Iron Mind",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain proficiency in Wisdom saving throws."
			]
		},
		{
			"name": "Stalker's Flurry",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 11,
			"header": 2,
			"entries": [
				"Starting at 11th level, you have the ability to ensure that your attacks count. If you miss with an attack during your turn, you can immediately make an additional attack. You can gain one additional attack during your turn with this ability."
			]
		},
		{
			"name": "Stalker's Dodge",
			"source": "UALightDarkUnderdark",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Deep Stalker (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you master the ability to disrupt an opponent's attacks. If a creature attacks you and does not have advantage on the attack roll, you can use your reaction to grant it disadvantage on the attack roll. You must use this ability before you know the result of the attack."
			]
		},
		{
			"name": "Horizon Walker",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Rangers of the Horizon Conclave guard the world against threats that originate from other planes. They seek out planar portals and keep watch over them, venturing to the outer and inner planes as needed to defeat threats.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Warrior|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Portal Lore|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Planar Warrior",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to draw on the energy of the planes to augment your attacks.",
				"As a bonus action, choose one creature you can see within 30 feet of you. Until the end of this turn, your attacks against that creature ignore its damage resistances, and the next time you hit it on this turn, it takes an additional {@damage 1d6} force damage."
			]
		},
		{
			"name": "Portal Lore",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to detect the presence of planar portals. As an action, you detect the distance and direction to any planar portals within 1,000 feet of you. You also sense which plane of existence each portal leads to. However, if magic obscures any details of a portal, this feature doesn't reveal them.",
				"Once you use this feature, you can't use it again until you finish a short or long rest. Alternatively, you can use the feature again if you expend a spell slot of 2nd level or higher.",
				"See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
			]
		},
		{
			"name": "Ethereal Step",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the {@spell etherealness} spell with this feature, but the spell ends at the end of the current turn. Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Distant Strike",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to step between the planes in a blink of an eye. When you use the {@action Attack} action, you can teleport up to 10 feet before each attack. You must be able to see the destination of the teleportation.",
				"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
			]
		},
		{
			"name": "Spectral Defense",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your ability to move between planes becomes even more finely tuned. As a reaction when you take damage, you can halve that damage against you. For a moment, you slip into the planar boundary to lessen the harm."
			]
		},
		{
			"name": "Primeval Guardian",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Rangers of the Primeval Guardian Conclave follow an ancient tradition rooted in powerful druidic magic. These rangers learn to become one with nature, allowing them to channel the aspects of various beasts and plants in order to overcome their foes.",
				"These rangers dwell in the elder forests of the world. They venture out only rarely, as they consider it their sacred duty to protect the druidic groves and ancient trees that saw the earliest days of the world.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guardian Soul|Ranger (Spell-less)|UAModifyingClasses|Primeval Guardian (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Piercing Thorns|Ranger (Spell-less)|UAModifyingClasses|Primeval Guardian (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Guardian Soul",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to temporarily grow and take on the appearance of a treelike person, covered with leaves and bark. As a bonus action, you assume this guardian form, which lasts until you end it as a bonus action or until you are {@condition incapacitated}.",
				"You undergo the following changes while in your guardian form:",
				{
					"type": "list",
					"items": [
						"Your size becomes Large, unless you were larger.",
						"Any speed you have becomes 5 feet, unless the speed was lower.",
						"Your reach increases by 5 feet.",
						"You gain a number of temporary hit points at the start of each of your turns. The number equals half your ranger level. When the form ends, you lose any temporary hit points you have from it."
					]
				}
			]
		},
		{
			"name": "Piercing Thorns",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your command of primal magic allows you to enhance your attacks with thorns. Once during each of your turns, you can deal an additional {@damage 1d6} piercing damage to one creature you hit with a weapon attack."
			]
		},
		{
			"name": "Ancient Fortitude",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain the endurance of the ancient forests. Your hit point maximum and current hit points increase by 2 per ranger level when you assume your guardian form. This increase lasts until you leave the form; your hit point maximum then returns to normal, but your current hit points remain the same, unless they must decrease to abide by your hit point maximum."
			]
		},
		{
			"name": "Rooted Defense",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to twist and turn the ground beneath you. While you are in your guardian form, the ground within 30 feet of you is {@quickref difficult terrain||3} for your enemies."
			]
		},
		{
			"name": "Guardian Aura",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, your guardian form emanates a magical aura that fortifies your injured allies. When any ally starts their turn within 30 feet of your guardian form, that ally regains a number of hit points equal to half your ranger level. This aura has no effect on a creature that has half or more of its hit points, and it has no effect on undead and constructs."
			]
		},
		{
			"name": "Gloom Stalker",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Gloom Stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a Gloom Stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dread Ambusher|Ranger (Spell-less)|UAModifyingClasses|Gloom Stalker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Umbral Sight|Ranger (Spell-less)|UAModifyingClasses|Gloom Stalker|XGE|3"
				}
			]
		},
		{
			"name": "Dread Ambusher",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.",
				"At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the {@action Attack} action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra {@damage 1d8} damage of the weapon's damage type."
			]
		},
		{
			"name": "Umbral Sight",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision} from your race, its range increases by 30 feet.",
				"You are also adept at evading creatures that rely on {@sense darkvision}. While in darkness, you are {@condition invisible} to any creature that relies on {@sense darkvision} to see you in that darkness."
			]
		},
		{
			"name": "Iron Mind",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
			]
		},
		{
			"name": "Stalker's Flurry",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action."
			]
		},
		{
			"name": "Shadowy Dodge",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll."
			]
		},
		{
			"name": "Horizon Walker",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Horizon Walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse\u2014especially benevolent dragons, fey, and elementals\u2014that work to preserve life and the order of the planes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Detect Portal|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Warrior|Ranger (Spell-less)|UAModifyingClasses|Horizon Walker|XGE|3"
				}
			]
		},
		{
			"name": "Detect Portal",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.",
				"Once you use this feature, you can't use it again until you finish a short or long rest.",
				"See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
			]
		},
		{
			"name": "Planar Warrior",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.",
				"As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra {@damage 1d8} force damage from the attack. When you reach 11th level in this class, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Ethereal Step",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to step through the Ethereal Plane. As a bonus action, you can cast the {@spell etherealness} spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Distant Strike",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to pass between the planes in the blink of an eye. When you take the {@action Attack} action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.",
				"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
			]
		},
		{
			"name": "Spectral Defense",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn."
			]
		},
		{
			"name": "Monster Slayer",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A Monster Slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats. Trained in supernatural techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty, mystical foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Sense|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Prey|Ranger (Spell-less)|UAModifyingClasses|Monster Slayer|XGE|3"
				}
			]
		},
		{
			"name": "Hunter's Sense",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Slayer's Prey",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature."
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Magic-User's Nemesis",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Spell-less)",
			"classSource": "UAModifyingClasses",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		},
		{
			"name": "Guardian",
			"source": "UARanger",
			"page": 3,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"subclassShortName": "Guardian",
			"subclassSource": "UARanger",
			"level": 3,
			"entries": [
				"By following the path of the Guardian, you protect the natural world from creatures that would despoil it, even as you engage with the common folk who rely upon nature's bounty to survive. You patrol the pathways through the wilds, keeping them clear of bandits and rampaging monsters, even as you keep careful watch on how civilized realms interact with the wilderness. Those who take more than their fair share\u2014clear-cutting forests or hunting for sport rather than survival\u2014risk your wrath.",
				"When your spirit companion manifests, it takes the form of a {@creature brown bear}.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guardian's Shroud|Ranger (Ambuscade)|UARanger|Guardian|UARanger|3"
				}
			]
		},
		{
			"name": "Guardian's Shroud",
			"source": "UARanger",
			"page": 3,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"subclassShortName": "Guardian",
			"subclassSource": "UARanger",
			"level": 3,
			"header": 1,
			"entries": [
				"Your companion spirit helps to protect you and the creatures closest to you. As a bonus action, you invoke your spirit companion and choose yourself or an ally you can see. The chosen creature gains temporary hit points equal to {@dice 2d6} + your Wisdom modifier."
			]
		},
		{
			"name": "Seeker",
			"source": "UARanger",
			"page": 4,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"subclassShortName": "Seeker",
			"subclassSource": "UARanger",
			"level": 3,
			"entries": [
				"By taking up the Seeker path, you are drawn into the unknown wilds far from civilization in search of lost treasures, forgotten evil, and sites of primal magic. You understand that the trackless wilderness can harbor many secrets. Some of those secrets\u2014such as a lonely oasis providing water to a desert realm\u2014must be protected. Others\u2014such as an ancient idol infused with the foul magic of the demon worshippers who crafted it\u2014must be destroyed before their evil awakens once more.",
				"When your spirit companion manifests, it takes the form of a {@creature giant eagle}.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Seeker's Eye|Ranger (Ambuscade)|UARanger|Seeker|UARanger|3"
				}
			]
		},
		{
			"name": "Seeker's Eye",
			"source": "UARanger",
			"page": 4,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"subclassShortName": "Seeker",
			"subclassSource": "UARanger",
			"level": 3,
			"header": 1,
			"entries": [
				"Your companion spirit lends its sharp combat senses to you and your companions. As a bonus action, you invoke your spirit companion and choose a creature you can see. Until the end of your next turn, all attacks made against the chosen creature have advantage."
			]
		},
		{
			"name": "Stalker",
			"source": "UARanger",
			"page": 4,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"subclassShortName": "Stalker",
			"subclassSource": "UARanger",
			"level": 3,
			"entries": [
				"As a ranger of the Stalker path, you prowl the wilderness in search of aberrations, fiends, and other monsters that must be slain before they wreak havoc on the natural world. You are the power of nature's vengeance made manifest, and anything that poses a threat to nature is your target. When a powerful creature such as a dragon threatens a region, a ranger of the Stalker path leads the hunt that will take it down. Like others of your kind, you do not rest until your quarry is dead and the natural world is safe.",
				"When your spirit companion manifests, it takes the form of a {@creature dire wolf}.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Stalker's Fangs|Ranger (Ambuscade)|UARanger|Stalker|UARanger|3"
				}
			]
		},
		{
			"name": "Stalker's Fangs",
			"source": "UARanger",
			"page": 4,
			"className": "Ranger (Ambuscade)",
			"classSource": "UARanger",
			"subclassShortName": "Stalker",
			"subclassSource": "UARanger",
			"level": 3,
			"header": 1,
			"entries": [
				"Your companion spirit lends the strength of its deadly bite to you or one of your companions. As a bonus action, you invoke your spirit companion and choose yourself or a creature you can see. The next time the chosen creature hits with a weapon attack, the target of the attack takes extra slashing damage equal to {@dice 2d6} + your Wisdom modifier."
			]
		},
		{
			"name": "Drakewarden",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"entries": [
				"Your connection to the natural world takes the form of a draconic spirit, which can manifest in physical form as a drake. As your powers grow, your drake grows as well, blossoming from a small four-legged companion to a majestic winged creature large and strong enough for you to ride. Along the way, you gain an increasing share of the awe-inspiring power of dragons.",
				"Consider the source of the draconic spirit you have bonded with. The Drakewarden Origin table offers examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from a dragon's hoard, creating your bond through that token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A dragon gave you a geode or gemstone to care for. To your surprise, the drake hatched from that stone."
						],
						[
							"4",
							"You ingested a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient Draconic inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious figure accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger (Revised)|UATheRangerRevised|Drakewarden|FTD|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a connection to dragonkind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Thaumaturgy",
							"entry": "You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
						},
						{
							"type": "item",
							"name": "Tongue of Dragons",
							"entry": "You learn to speak, read, and write Draconic or one other language of your choice."
						}
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"As an action, you can magically summon the drake that is bound to you. It appears in an unoccupied space of your choice within 30 feet of you.",
				"The drake is friendly to you and your companions, and it obeys your commands. See its game statistics in the accompanying {@creature Drake Companion|FTD} stat block, which uses your proficiency bonus (PB) in several places. Whenever you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake, such as its color, its scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"The drake remains until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it."
			]
		},
		{
			"name": "Extra Attack",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. When you summon your drake, it grows wings on its back and gains a flying speed equal to its walking speed.",
				"In addition, while your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Drake Mount",
							"entries": [
								"The drake grows to Medium size. Reflecting your special bond, you can use the drake as a mount if your size is Medium or smaller. While you are riding your drake, it can't use the flying speed of this feature."
							]
						},
						{
							"type": "item",
							"name": "Magic Fang",
							"entries": [
								"The drake's Bite attack deals an extra {@damage 1d6} damage of the type chosen for the drake's Draconic Essence."
							]
						},
						{
							"type": "item",
							"name": "Resistance",
							"entries": [
								"You gain resistance to the damage type chosen for the drake's Draconic Essence."
							]
						}
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage (your choice doesn't have to match your drake's Draconic Essence). Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 8d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 10d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "FTD",
			"page": 15,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden",
			"subclassSource": "FTD",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Empowered Bite",
							"entries": [
								"The drake's Bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage)."
							]
						},
						{
							"type": "item",
							"name": "Large Drake",
							"entries": [
								"The drake grows to Large size. When you ride your drake, it is no longer prohibited from using the flying speed of Bond of Fang and Scale."
							]
						},
						{
							"type": "item",
							"name": "Reflexive Resistance",
							"entries": [
								"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage. You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
							]
						}
					]
				}
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"A fey mystique surrounds you, thanks to the boon of an archfey, the shining fruit you ate from a talking tree, the magic spring you swam in, or some other auspicious event. However you acquired your fey magic, you are now a Fey Wanderer, a ranger who represents both the mortal and the fey realms. As you wander the multiverse, your joyful laughter brightens the hearts of the downtrodden, and your martial prowess strikes terror in your foes, for great is the mirth of the fey and dreadful is their fury.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fey Wanderer Magic|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Otherworldly Glamour|Ranger (Revised)|UATheRangerRevised|Fey Wanderer|TCE|3"
				}
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You can augment your weapon strikes with mind-scarring magic, drawn from the gloomy hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra {@damage 1d4} psychic damage to the target, which can take this extra damage only once per turn.",
				"The extra damage increases to {@dice 1d6} when you reach 11th level in this class."
			]
		},
		{
			"name": "Fey Wanderer Magic",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Fey Wanderer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell dispel magic}"
						],
						[
							"13th",
							"{@spell dimension door}"
						],
						[
							"17th",
							"{@spell mislead}"
						]
					]
				},
				"You also possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				}
			]
		},
		{
			"name": "Otherworldly Glamour",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your fey qualities give you a supernatural charm. As a result, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier (minimum of +1).",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Extra Attack",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"The magic of the Feywild guards your mind. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to make a Wisdom saving throw against your spell save DC. If the save fails, the target is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save."
			]
		},
		{
			"name": "Fey Reinforcements",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"The royal courts of the Feywild have blessed you with the assistance of fey beings: you know {@spell summon fey|tce}. It doesn't count against the number of ranger spells you know, and you can cast it without a material component. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
				"Whenever you start casting the spell, you can modify it so that it doesn't require {@status concentration}. If you do so, the spell's duration becomes 1 minute for that casting."
			]
		},
		{
			"name": "Misty Wanderer",
			"source": "TCE",
			"page": 58,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can slip in and out of the Feywild to move in a blink of an eye: you can cast {@spell misty step} without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
				"In addition, whenever you cast {@i misty step}, you can bring along one willing creature you can see within 5 feet of you. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Feeling a deep connection to the environment around them, some rangers reach out through their magical connection to the world and bond with a swarm of nature spirits. The swarm becomes a potent force in battle, as well as helpful company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Swarmkeeper Magic|Ranger (Revised)|UATheRangerRevised|Swarmkeeper|TCE|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"A swarm of intangible nature spirits has bonded itself to you and can assist you in battle. While you're alive, the swarm remains in your space, crawling on you or flying and skittering around you within your space. You determine its appearance, or you generate its appearance by rolling on the Swarm Appearance table.",
				{
					"type": "table",
					"caption": "Swarm Appearance",
					"colLabels": [
						"d4",
						"Appearance"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Swarming insects"
						],
						[
							"2",
							"Miniature twig blights"
						],
						[
							"3",
							"Fluttering birds"
						],
						[
							"4",
							"Playful pixies"
						]
					]
				},
				"Once on each of your turns, you can cause the swarm to assist you in one of the following ways, immediately after you hit a creature with an attack:",
				{
					"type": "list",
					"items": [
						"The attack's target takes {@damage 1d6} piercing damage from the swarm.",
						"The attack's target must succeed on a Strength saving throw against your spell save DC or be moved by the swarm up to 15 feet horizontally in a direction of your choice.",
						"You are moved by the swarm 5 feet horizontally in a direction of your choice."
					]
				},
				{
					"type": "inset",
					"name": "It's Your Swarm",
					"entries": [
						"A Swarmkeeper's swarm and spells are reflections of the character's bond with nature spirits. Take the opportunity to describe the swarm and the ranger's magic in play. For example, when your ranger casts gaseous form, they might appear to melt into the swarm, instead of a cloud of mist, or the {@spell arcane eye} spell could create an extension of your swarm that spies for you. Such descriptions don't change the effects of spells, but they are an exciting opportunity to explore your character's narrative through their class abilities. For more guidance on customizing spells, see the \"Personalizing Spells\" section in chapter 3.",
						"Also, remember that the swarm's appearance is yours to customize, and don't feel confined to a single appearance. Perhaps the spirits' look changes with the ranger's mood or with the seasons. You decide!"
					]
				}
			]
		},
		{
			"name": "Swarmkeeper Magic",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You learn the {@spell mage hand} cantrip if you don't already know it. When you cast it, the hand takes the form of your swarming nature spirits.",
				"You also learn an additional spell of 1st level or higher when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Swarmkeeper Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell faerie fire}"
						],
						[
							"5th",
							"{@spell web}"
						],
						[
							"9th",
							"{@spell gaseous form}"
						],
						[
							"13th",
							"{@spell arcane eye}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Extra Attack",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Writhing Tide",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts you up. As a bonus action, you gain a flying speed of 10 feet and can hover. This effect lasts for 1 minute or until you are {@condition incapacitated}.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Mighty Swarm",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"Your Gathered Swarm grows mightier in the following ways:",
				{
					"type": "list",
					"items": [
						"The damage of Gathered Swarm increases to {@dice 1d8}.",
						"If a creature fails its saving throw against being moved by Gathered Swarm, you can also cause the swarm to knock the creature {@condition prone}.",
						"When you are moved by Gathered Swarm, it gives you half cover until the start of your next turn."
					]
				}
			]
		},
		{
			"name": "Swarming Dispersal",
			"source": "TCE",
			"page": 59,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"You can discorporate into your swarm, avoiding danger. When you take damage, you can use your reaction to give yourself resistance to that damage. You vanish into your swarm and then teleport to an unoccupied space that you can see within 30 feet of you, where you reappear with the swarm.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Fey Wanderer",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"As a Fey Wanderer, you guard the border between the Feywild and the Material Plane, guiding the lost out of the Feywild and preventing dangerous fey from damaging the Material Plane. Your experience with both domains makes you an exceptional negotiator between inhabitants of these worlds, as you understand both humanoid mindsets and the wiles of the fey courts.",
				"Fey Wanderers possess a preternatural blessing from a fey ally or a place of fey power. Choose your blessing from the Feywild Gifts table or determine it randomly.",
				{
					"type": "table",
					"caption": "Feywild Gifts",
					"colLabels": [
						"d6",
						"Gift"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Illusory butterflies flutter around you while you take a short or long rest."
						],
						[
							"2",
							"Fresh, seasonal flowers sprout from your hair each dawn."
						],
						[
							"3",
							"You faintly smell of cinnamon, lavender, nutmeg, or another comforting herb or spice."
						],
						[
							"4",
							"Your shadow dances while no one is looking directly at it."
						],
						[
							"5",
							"Delicate horns or antlers sprout from your head."
						],
						[
							"6",
							"Your skin and hair change color to match the season at each dawn."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fey Wanderer Magic|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Cunning Will|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dreadful Strikes|Ranger (Revised)|UATheRangerRevised|Fey Wanderer (UA)|UA2020SubclassesPt3|3"
				}
			]
		},
		{
			"name": "Cunning Will",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"Your experience with the fey has guarded your mind and sharpened your tongue. You have advantage on saving throws against being {@condition charmed} or {@condition frightened}.",
				"In addition, you gain proficiency in one of the following skills of your choice: {@skill Deception}, {@skill Performance}, or {@skill Persuasion}."
			]
		},
		{
			"name": "Dreadful Strikes",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You augment your attacks with mind-scarring magic, drawn from the gloomy hollows of the unseelie fey. You gain a bonus action that you can use to imbue the weapon, or weapons, you're currently holding with magic. Until the end of the turn, the weapons are magical, and they deal an extra {@damage 1d6} psychic damage on a hit. A creature can take this extra damage only once per turn.",
				"When you engage in two-weapon fighting, you can imbue your weapons as part of the same bonus action you use to make the attack."
			]
		},
		{
			"name": "Fey Wanderer Magic",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Fey Wanderer feature}",
				"You learn an additional spell when you reach certain levels in this class, as shown in the Fey Wanderer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Fey Wanderer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell dispel magic}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell mislead}"
						]
					]
				}
			]
		},
		{
			"name": "Extra Attack",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Blessings of the Courts",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Fey Wanderer feature}",
				"You have learned eerie techniques from both the Gloaming Court and the Summer Court of the Feywild. Once during each of your turns, when you hit a creature with a weapon attack, you can expend a spell slot to deal extra psychic damage. The extra damage is {@damage 3d6} psychic damage and the creature must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} of you until the end of your next turn.",
				"In addition, whenever you make a Charisma check, you gain a bonus to the check equal to your Wisdom modifier."
			]
		},
		{
			"name": "Beguiling Twist",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Fey Wanderer feature}",
				"You learn how to manipulate mind-altering magic, channeling it from your allies toward others. Whenever a creature you can see within 120 feet of you succeeds on a saving throw against being {@condition charmed} or {@condition frightened}, you can use your reaction to force a different creature you can see within 120 feet of you to succeed on a Wisdom saving throw against your spell save DC or suffer your choice of one of the following effects:",
				{
					"type": "list",
					"items": [
						"The creature is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save.",
						"The creature takes {@damage 3d10} psychic damage."
					]
				}
			]
		},
		{
			"name": "Misty Presence",
			"source": "UA2020SubclassesPt3",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Fey Wanderer (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Fey Wanderer feature}",
				"You can magically remove yourself from one creature's perception: you gain a bonus action that you can use to force a creature you can see within 30 feet of you to make a Wisdom saving throw against your spell save DC. On a failed save, the target can't see or hear you for 24 hours. The target can repeat the saving throw at the end of any turn during which you hit it with an attack roll, forced it to make a saving throw, or dealt damage to it. The effect ends early if you use this bonus action again. On a successful save, the target is immune to this feature for 7 days.",
				"Once you've used this bonus action, you can't use it again until you finish a long rest or until you expend a spell slot of 4th level or higher to use it again."
			]
		},
		{
			"name": "Drakewarden",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Spell-less Ranger subclass.}",
				"Drakewardens are rangers who use their magical connection with nature to form an enduring bond with a minor dragon, a drake. This bond allows the ranger to summon the",
				"drake to their side and to share in the awe-inspiring power wielded by dragons. Consider how your ranger gained their bond with the drake. The Drakewarden Origin table offers some examples.",
				{
					"type": "table",
					"caption": "Drakewarden Origin",
					"colLabels": [
						"d6",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"You studied a dragon's scale or claw, or a trinket from its hoard, and created your bond through the token's lingering draconic magic."
						],
						[
							"2",
							"A secret order of rangers who collect and guard draconic lore taught you their ways."
						],
						[
							"3",
							"A true dragon gave you a drake egg to care for. When it hatched, the drake bonded to you."
						],
						[
							"4",
							"You drank a few drops of dragon blood, forever infusing your nature magic with draconic power."
						],
						[
							"5",
							"An ancient Draconic inscription on a standing stone empowered you when you read it aloud."
						],
						[
							"6",
							"You had a vivid dream of a mysterious man, accompanied by seven yellow canaries, who warned you of impending doom. When you awoke, your drake was there, watching you."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Gift|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drake Companion|Ranger (Revised)|UATheRangerRevised|Drakewarden (UA)|UA2020SubclassesPt5|3"
				}
			]
		},
		{
			"name": "Draconic Gift",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"The bond you share with your drake creates a deeper connection to dragon kind, granting you understanding and empowering your presence. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"If you can't already, you learn to speak, read, and write {@language Draconic}.",
						"You learn the {@spell thaumaturgy} cantrip, which is a ranger spell for you."
					]
				}
			]
		},
		{
			"name": "Drake Companion",
			"source": "UA2020SubclassesPt5",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Drakewarden feature}",
				"You can magically summon the drake bound to you. As an action, you can summon the drake, which appears in an unoccupied space of your choice that you can see within 30 feet of you.",
				"The drake is friendly to you and your companions and obeys your commands. See its game statistics in the {@creature Drake Companion|UA2020SubclassesPt5} stat block, which uses your proficiency bonus (PB) in several places. When you summon the drake, choose a damage type listed in its Draconic Essence trait. You can determine the cosmetic characteristics of the drake such as its color, scale texture, or any visible effect of its Draconic Essence; your choice has no effect on its game statistics.",
				"In combat, the drake shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the drake can take any action of its choice, not just {@action Dodge}.",
				"Once you summon the drake, you can't do so again until you finish a long rest, unless you expend a spell slot of 1st level or higher to summon it.",
				"The drake remains for a number of hours equal to your proficiency bonus, until it is reduced to 0 hit points, until you use this feature to summon the drake again, or until you die. Anything the drake was wearing or carrying is left behind when the drake vanishes."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Bond of Fang and Scale",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Drakewarden feature}",
				"The bond you share with your drake intensifies, protecting you and stoking the drake's fury. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain resistance to the damage type chosen for the drake's Draconic Essence.",
						"Choose one of the following: the drake gains a swimming speed of 40 feet and can breathe both air and water, or the drake grows wings and gains a flying speed of 40 feet.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence."
					]
				}
			]
		},
		{
			"name": "Drake's Breath",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Drakewarden feature}",
				"As an action, you can exhale a 30-foot cone of damaging breath or cause your drake to exhale it. Choose acid, cold, fire, lightning, or poison damage. Each creature in the cone must make a Dexterity saving throw against your spell save DC, taking {@damage 6d6} damage on a failed save, or half as much damage on a successful one.",
				"This damage increases to {@dice 8d6} when you reach 15th level in this class.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use it again."
			]
		},
		{
			"name": "Perfected Bond",
			"source": "UA2020SubclassesPt5",
			"page": 4,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Drakewarden (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Drakewarden feature}",
				"Your bond to your drake reaches the pinnacle of its power. While your drake is summoned, you and the drake gain the following benefits:",
				{
					"type": "list",
					"items": [
						"The drake grows to Large size.",
						"The drake's bite attack deals an extra {@damage 1d6} damage of the type chosen for its Draconic Essence (for a total of {@damage 2d6} extra damage).",
						"When either you or the drake takes damage while you're within 30 feet of each other, you can use your reaction to give yourself or the drake resistance to that instance of damage."
					]
				}
			]
		},
		{
			"name": "Monster Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"Rangers of the Slayer Conclave seek out vampires, dragons, evil fey, fiends, and other powerful magical threats. Trained in a variety of arcane and divine techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Mysticism|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Eye|Ranger (Revised)|UATheRangerRevised|Monster Slayer (UA)|UAATrioOfSubclasses|3"
				}
			]
		},
		{
			"name": "Slayer's Eye",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to study and unravel a creature's defenses. As a bonus action, choose one creature you can see within 120 feet of you. You immediately learn the target's vulnerabilities, immunities, and resistances. You also learn any special effects triggered when the target takes damage, such as fire damage halting its regeneration.",
				"In addition, the first time each turn you hit the target with a weapon attack, the target takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you target a different creature with this feature or until you finish a short or long rest."
			]
		},
		{
			"name": "Slayer's Mysticism",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"You learn an additional spell when you reach certain levels in this class, as shown in the Slayer Spells table. The spell counts as a ranger spell for you but doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Monster Slayer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell zone of truth}"
						],
						[
							"9th",
							"{@spell magic circle}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell planar binding}"
						]
					]
				}
			]
		},
		{
			"name": "Extra Attack",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Eye forces you to make a saving throw, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Relentless Slayer",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to foil your foe's ability to escape. Your study of folklore and arcane knowledge gives you a key insight to keep your prey cornered. If the target of your Slayer's Eye attempts to teleport, change its shape, travel to another plane of existence, or turn gaseous, you can use your reaction to make a Wisdom check contested by a Wisdom check made by the target. To use this ability, you must be able to see the target and need to be within 30 feet of it. If you succeed, you foil its attempt, causing it to waste the action, bonus action, or reaction it used."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "UAATrioOfSubclasses",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Eye forces you to make a saving throw, you can use your reaction to make one weapon attack against it. You make this attack immediately before making the saving throw. If the attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		},
		{
			"name": "Swarmkeeper",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"Feeling a deep connection to the world around them, some rangers reach out through their magical connection to nature and gather a host of fey spirits, which take the form of swarming beasts\u2014be they buzzing insects, fluttering birds, slippery squids, or otherwise. The swarm becomes a potent force in battle, as well as helpful\u2014if potentially disturbing\u2014company for the ranger. Some Swarmkeepers are outcasts or hermits, keeping to themselves and their attendant swarms rather than dealing with the discomfort of others. Other Swarmkeepers enjoy building vibrant communities that work for the mutual benefit of all those they consider part of their swarm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Swarmkeeper Magic|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gathered Swarm|Ranger (Revised)|UATheRangerRevised|Swarmkeeper (UA)|UAFighterRangerRogue|3"
				}
			]
		},
		{
			"name": "Gathered Swarm",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You magically attract a swarm of fey spirits that look like Tiny beasts of your choice. The swarm remains in your space, crawling on you or through your clothing, or flying and skittering immediately around you within your space.",
				"As a bonus action, you can agitate the swarm for 1 minute. For the duration, some of the swarm clings to your weapons or follows your strikes when you attack: once during each of your turns when you hit a creature with a weapon attack, you can deal an extra {@damage 1d6} force damage to that creature, and the swarm moves the creature up to 5 feet toward you or away from you (your choice). At 11th level, the extra damage increases to {@dice 2d6}.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Swarmkeeper Magic",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Swarmkeeper feature}",
				"You learn the mage hand cantrip if you don't already know it. When you cast it, the hand takes the form of swarming nature spirits. You also learn an additional spell when you reach certain levels in this class, as shown in the Swarmkeeper Spells table. These spells count as ranger spells for you, but don't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Swarmkeeper Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell faerie fire}"
						],
						[
							"5th",
							"{@spell web}"
						],
						[
							"9th",
							"{@spell gaseous form}"
						],
						[
							"13th",
							"{@spell giant insect}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Extra Attack",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Writhing Tide",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Swarmkeeper feature}",
				"You can condense part of your swarm into a focused mass that lifts or sweeps you along. Whenever you activate your Gathered Swarm feature, choose one of the following additional benefits:",
				{
					"type": "list",
					"items": [
						"Your walking speed increases by 10 feet, and you can take the {@action Disengage} action as a bonus action.",
						"You gain a climb speed equal to your walking speed. You can climb difficult surfaces, including upside down on ceilings, without making an ability check.",
						"You gain a flying speed of 10 feet and can hover."
					]
				}
			]
		},
		{
			"name": "Gathered Swarm Improvement",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"The extra damage from your swarm increases to {@dice 2d6}."
			]
		},
		{
			"name": "Scuttling Eyes",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Swarmkeeper feature}",
				"As an action, you can magically form one of the spirits of your swarm into the shape of a Tiny beast of your choice. The transformation lasts for 1 hour, at which point the spirit disappears. For the duration, the spirit has a speed of 40 feet, which it can use to walk, climb, fly, or swim. The spirit has your senses and telepathically relays what it sees and hears to you. During your turn, you can speak through the spirit, telepathically command it to move, and it can {@action Hide} using your bonus to Dexterity ({@skill Stealth}) checks. The spirit has AC 18. If it takes damage, you must succeed on a Wisdom saving throw (DC equal to 10, or half the damage dealt, whichever is higher) or the spirit disappears.",
				"As an action, you can dismiss the spirit early. If you do, you can magically teleport to an unoccupied space within 5 feet of where the spirit disappeared.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 3rd level or higher."
			]
		},
		{
			"name": "Storm of Minions",
			"source": "UAFighterRangerRogue",
			"page": 3,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Swarmkeeper (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Swarmkeeper feature}",
				"Your swarm can expel a seething storm of spirits that drains life from others. As an action, you create a magical sphere filled with an enraged swarm centered on a point you can see within 120 feet of you. The sphere has a 10-foot-radius and lasts for 1 minute. The sphere is {@quickref difficult terrain||3} for creatures other than you. A creature other than you that starts its turn in the sphere's area must make a Constitution saving throw against your spell save DC. On a failed save, the creature takes {@damage 2d8} necrotic damage and is {@condition blinded} until the start of its next turn. On a successful save, it takes half as much damage and isn't {@condition blinded}. At the start of your turn, if any number of Small or larger creatures took necrotic damage from the swarm, you regain {@dice 1d8} hit points. On subsequent turns, you can use a bonus action to move the sphere up to 30 feet.",
				"When you activate this feature, you can choose any number of creatures you can see to be unaffected by it.",
				"Once you use this feature, you can't do so again until you finish a long rest. You can also use it again by expending a spell slot of 4th level or higher."
			]
		},
		{
			"name": "Horizon Walker",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"Rangers of the Horizon Conclave guard the world against threats that originate from other planes. They seek out planar portals and keep watch over them, venturing to the outer and inner planes as needed to defeat threats.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Magic|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Warrior|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Portal Lore|Ranger (Revised)|UATheRangerRevised|Horizon Walker (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Planar Magic",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, and it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Horizon Walker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell alter self}"
						],
						[
							"9th",
							"{@spell protection from energy}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell teleportation circle}"
						]
					]
				}
			]
		},
		{
			"name": "Planar Warrior",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to draw on the energy of the planes to augment your attacks.",
				"As a bonus action, choose one creature you can see within 30 feet of you. Until the end of this turn, your attacks against that creature ignore its damage resistances, and the next time you hit it on this turn, it takes an additional {@damage 1d6} force damage."
			]
		},
		{
			"name": "Portal Lore",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to detect the presence of planar portals. As an action, you detect the distance and direction to any planar portals within 1,000 feet of you. You also sense which plane of existence each portal leads to. However, if magic obscures any details of a portal, this feature doesn't reveal them.",
				"Once you use this feature, you can't use it again until you finish a short or long rest. Alternatively, you can use the feature again if you expend a spell slot of 2nd level or higher.",
				"See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Ethereal Step",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the {@spell etherealness} spell with this feature, but the spell ends at the end of the current turn. Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Distant Strike",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to step between the planes in a blink of an eye. When you use the {@action Attack} action, you can teleport up to 10 feet before each attack. You must be able to see the destination of the teleportation.",
				"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
			]
		},
		{
			"name": "Spectral Defense",
			"source": "UARangerAndRogue",
			"page": 1,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your ability to move between planes becomes even more finely tuned. As a reaction when you take damage, you can halve that damage against you. For a moment, you slip into the planar boundary to lessen the harm."
			]
		},
		{
			"name": "Primeval Guardian",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"Rangers of the Primeval Guardian Conclave follow an ancient tradition rooted in powerful druidic magic. These rangers learn to become one with nature, allowing them to channel the aspects of various beasts and plants in order to overcome their foes.",
				"These rangers dwell in the elder forests of the world. They venture out only rarely, as they consider it their sacred duty to protect the druidic groves and ancient trees that saw the earliest days of the world.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guardian Magic|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guardian Soul|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Piercing Thorns|Ranger (Revised)|UATheRangerRevised|Primeval Guardian (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Guardian Magic",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Primeval Guardian Spells table. The spell counts as a ranger spell for you, and it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Primeval Guardian Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell entangle}"
						],
						[
							"5th",
							"{@spell enhance ability}"
						],
						[
							"9th",
							"{@spell conjure animals}"
						],
						[
							"13th",
							"{@spell giant insect}"
						],
						[
							"17th",
							"{@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Guardian Soul",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you gain the ability to temporarily grow and take on the appearance of a treelike person, covered with leaves and bark. As a bonus action, you assume this guardian form, which lasts until you end it as a bonus action or until you are {@condition incapacitated}.",
				"You undergo the following changes while in your guardian form:",
				{
					"type": "list",
					"items": [
						"Your size becomes Large, unless you were larger.",
						"Any speed you have becomes 5 feet, unless the speed was lower.",
						"Your reach increases by 5 feet.",
						"You gain a number of temporary hit points at the start of each of your turns. The number equals half your ranger level. When the form ends, you lose any temporary hit points you have from it."
					]
				}
			]
		},
		{
			"name": "Piercing Thorns",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, your command of primal magic allows you to enhance your attacks with thorns. Once during each of your turns, you can deal an additional {@damage 1d6} piercing damage to one creature you hit with a weapon attack."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Ancient Fortitude",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain the endurance of the ancient forests. Your hit point maximum and current hit points increase by 2 per ranger level when you assume your guardian form. This increase lasts until you leave the form; your hit point maximum then returns to normal, but your current hit points remain the same, unless they must decrease to abide by your hit point maximum."
			]
		},
		{
			"name": "Rooted Defense",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to twist and turn the ground beneath you. While you are in your guardian form, the ground within 30 feet of you is {@quickref difficult terrain||3} for your enemies."
			]
		},
		{
			"name": "Guardian Aura",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Primeval Guardian (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, your guardian form emanates a magical aura that fortifies your injured allies. When any ally starts their turn within 30 feet of your guardian form, that ally regains a number of hit points equal to half your ranger level. This aura has no effect on a creature that has half or more of its hit points, and it has no effect on undead and constructs."
			]
		},
		{
			"name": "Beast Conclave (UA)",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"entries": [
				"Many rangers are more at home in the wilds than in civilization, to the point where animals consider them kin. Rangers of the Beast Conclave develop a close bond with a beast, then further strengthen that bond through the use of magic.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Animal Companion|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Companion's Bond|Ranger (Revised)|UATheRangerRevised|Beast Conclave|UATheRangerRevised|3"
				}
			]
		},
		{
			"name": "Animal Companion",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to use your magic to create a powerful bond with a creature of the natural world.",
				"With 8 hours of work and the expenditure of 50 gp worth of rare herbs and fine food, you call forth an animal from the wilderness to serve as your faithful companion. You normally select you companion from among the following animals: an {@creature ape}, a {@creature black bear}, a {@creature boar}, a {@creature giant badger}, a {@creature giant weasel}, a {@creature mule}, a {@creature panther}, or a {@creature wolf}. However, your DM might pick one of these animals for you, based on the surrounding terrain and on what types of creatures would logically be present in the area.",
				"At the end of the 8 hours, your animal companion appears and gains all the benefits of your Companion's Bond ability. You can have only one animal companion at a time.",
				"If your animal companion is ever slain, the magical bond you share allows you to return it to life. With 8 hours of work and the expenditure of 25 gp worth of rare herbs and fine food, you call forth your companion's spirit and use your magic to create a new body for it. You can return an animal companion to life in this manner even if you do not possess any part of its body.",
				"If you use this ability to return a former animal companion to life while you have a current animal companion, your current companion leaves you and is replaced by the restored companion."
			]
		},
		{
			"name": "Companion's Bond",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 1,
			"entries": [
				"Your animal companion gains a variety of benefits while it is linked to you.",
				"The animal companion loses its Multiattack action, if it has one.",
				"The companion obeys your commands as best it can. It rolls for initiative like any other creature, but you determine its actions, decisions, attitudes, and so on. If you are {@condition incapacitated} or absent, your companion acts on its own.",
				"When using your Natural Explorer feature, you and your animal companion can both move stealthily at a normal pace.",
				"Your animal companion has abilities and game statistics determined in part by your level. Your companion uses your proficiency bonus rather than its own. In addition to the areas where it normally uses its proficiency bonus, an animal companion also adds its proficiency bonus to its AC and to its damage rolls.",
				"Your animal companion gains proficiency in two skills of your choice. It also becomes proficient with all saving throws.",
				"For each level you gain after 3rd, your animal companion gains an additional hit die and increases its hit points accordingly.",
				"Whenever you gain the Ability Score Improvement class feature, your companion's abilities also improve. Your companion can increase one ability score of your choice by 2, or it can increase two ability scores of your choice by 1. As normal, your companion can't increase an ability score above 20 using this feature unless its description specifies otherwise.",
				"Your companion shares your alignment, and has a personality trait and a flaw that you can roll for or select from the tables below. Your companion shares your ideal, and its bond is always, \"The ranger who travels with me is a beloved companion for whom I would gladly give my life.\"",
				"Your animal companion gains the benefits of your Favored Enemy feature, and of your Greater Favored Enemy feature when you gain that feature at 6th level. It uses the favored enemies you selected for those features.",
				{
					"type": "table",
					"caption": "Companion Trait",
					"colLabels": [
						"d6",
						"Trait"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"I'm dauntless in the face of adversity."
						],
						[
							"2",
							"Threaten my friends, threaten me."
						],
						[
							"3",
							"I stay on alert so others can rest."
						],
						[
							"4",
							"People see an animal and underestimate me."
						],
						[
							"5",
							"I have a knack for showing up in the nick of time."
						],
						[
							"6",
							"I put my friends' needs before my own in all things."
						]
					]
				},
				{
					"type": "table",
					"caption": "Companion Flaw",
					"colLabels": [
						"d6",
						"Flaw"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"If there's food left unattended, I'll eat it."
						],
						[
							"2",
							"I growl at strangers, and all people except my ranger are strangers to me."
						],
						[
							"3",
							"Any time is a good time for a belly rub."
						],
						[
							"4",
							"I'm deathly afraid of water."
						],
						[
							"5",
							"My idea of hello is a flurry of licks to the face."
						],
						[
							"6",
							"I jump on creatures to tell them how much I love them."
						]
					]
				}
			]
		},
		{
			"name": "Coordinated Attack",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you and your animal companion form a more potent fighting force. When you use the {@action Attack} action on your turn, if your companion can see you, it can use its reaction to make a melee attack."
			]
		},
		{
			"name": "Beast's Defense",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, while your companion can see you, it has advantage on all saving throws."
			]
		},
		{
			"name": "Storm of Claw and Fangs",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, your companion can use its action to make a melee attack against each creature of its choice within 5 feet of it, with a separate attack roll for each target."
			]
		},
		{
			"name": "Superior Beast's Defense",
			"source": "UATheRangerRevised",
			"page": 5,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Beast Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, whenever an attacker that your companion can see hits it with an attack, it can use its reaction to halve the attack's damage against it."
			]
		},
		{
			"name": "Deep Stalker Conclave (UA)",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"entries": [
				"Most folk descend into the depths of the Underdark only under the most pressing conditions, undertaking some desperate quest or following the promise of vast riches. All too often, evil festers beneath the earth unnoticed, and rangers of the Deep Stalker Conclave strive to uncover and defeat such threats before they can reach the surface.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Deep Stalker Magic|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Underdark Scout|Ranger (Revised)|UATheRangerRevised|Deep Stalker Conclave|UATheRangerRevised|3"
				}
			]
		},
		{
			"name": "Deep Stalker Magic",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you have {@sense darkvision} out to a range of 90 feet. If you already have {@sense darkvision}, you increase its range by 30 feet. You also gain access to additional spells at 3rd, 5th, 9th, 13th, and 15th level. Once you gain a deep stalker spell, it counts as a ranger spell for you but doesn't count against the number of rangers spells you know.",
				{
					"type": "table",
					"caption": "Deep Stalker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell disguise self}"
						],
						[
							"5th",
							"{@spell rope trick}"
						],
						[
							"9th",
							"{@spell glyph of warding}"
						],
						[
							"13th",
							"{@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell seeming}"
						]
					]
				}
			]
		},
		{
			"name": "Underdark Scout",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master the art of the ambush. On your first turn during combat, you gain a +10 bonus to your speed and if you use the attack action on that turn, you can make one additional attack. You are also adept at evading creatures that rely on {@sense darkvision}. Such creatures gain no benefit when attempting to detect you in dark and dim conditions. Additionally, when the DM determines if you can hide from a creature, that creature gains no benefit from its {@sense darkvision}."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Iron Mind",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain proficiency in Wisdom saving throws."
			]
		},
		{
			"name": "Stalker's Flurry",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 11,
			"header": 2,
			"entries": [
				"Starting at 11th level, once on each of your turns when you miss with an attack, you can make another attack. You can gain one additional attack during your turn with this ability."
			]
		},
		{
			"name": "Stalker's Dodge",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Deep Stalker Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, whenever a creature attacks you and does not have advantage, you can use your reaction to impose disadvantage on the creature's attack roll against you. You can use this feature before or after the attack roll is made, but it must be used before the outcome of the roll is determined."
			]
		},
		{
			"name": "Hunter Conclave (UA)",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"entries": [
				"Some rangers seek to master weapons to better protect civilization from the terrors of the wilderness. Members of the Hunter Conclave learn specialized fighting techniques for use against the most dire threats, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Prey|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|3"
				}
			]
		},
		{
			"name": "Horde Breaker",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 1,
			"entries": [
				"Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
			]
		},
		{
			"name": "Hunter's Prey",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Colossus Slayer|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Giant Killer|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Horde Breaker|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|3"
						}
					]
				}
			]
		},
		{
			"name": "Colossus Slayer",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 2,
			"entries": [
				"Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra {@damage 1d8} damage if it's below its hit point maximum. You can deal this extra damage only once per turn."
			]
		},
		{
			"name": "Giant Killer",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 3,
			"header": 2,
			"entries": [
				"When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Defensive Tactics",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Escape the Horde|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Multiattack Defense|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|7"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Steel Will|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|7"
						}
					]
				}
			]
		},
		{
			"name": "Escape the Horde",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 7,
			"header": 2,
			"entries": [
				"Opportunity attacks against you are made with disadvantage."
			]
		},
		{
			"name": "Multiattack Defense",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 7,
			"header": 2,
			"entries": [
				"When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
			]
		},
		{
			"name": "Steel Will",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 7,
			"header": 2,
			"entries": [
				"You have advantage on saving throws against being {@condition frightened}."
			]
		},
		{
			"name": "Multiattack",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Volley|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|11"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Whirlwind Attack|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|11"
						}
					]
				}
			]
		},
		{
			"name": "Volley",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 11,
			"header": 2,
			"entries": [
				"You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target."
			]
		},
		{
			"name": "Whirlwind Attack",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 11,
			"header": 2,
			"entries": [
				"You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
			]
		},
		{
			"name": "Evasion",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 15,
			"header": 2,
			"entries": [
				"You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a {@spell lightning bolt} spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
			]
		},
		{
			"name": "Stand Against the Tide",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 15,
			"header": 2,
			"entries": [
				"When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice."
			]
		},
		{
			"name": "Superior Hunter's Defense",
			"source": "UATheRangerRevised",
			"page": 7,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Evasion|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|15"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Stand Against the Tide|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|15"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Uncanny Dodge|Ranger (Revised)|UATheRangerRevised|Hunter Conclave|UATheRangerRevised|15"
						}
					]
				}
			]
		},
		{
			"name": "Uncanny Dodge",
			"source": "UATheRangerRevised",
			"page": 93,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Hunter Conclave",
			"subclassSource": "UATheRangerRevised",
			"level": 15,
			"header": 2,
			"entries": [
				"When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
			]
		},
		{
			"name": "Gloom Stalker",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"Gloom Stalkers are at home in the darkest places: deep under the earth, in gloomy alleyways, in primeval forests, and wherever else the light dims. Most folk enter such places with trepidation, but a Gloom Stalker ventures boldly into the darkness, seeking to ambush threats before they can reach the broader world. Such rangers are often found in the Underdark, but they will go any place where evil lurks in the shadows.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gloom Stalker Magic|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dread Ambusher|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Umbral Sight|Ranger (Revised)|UATheRangerRevised|Gloom Stalker|XGE|3"
				}
			]
		},
		{
			"name": "Dread Ambusher",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master the art of the ambush. You can give yourself a bonus to your initiative rolls equal to your Wisdom modifier.",
				"At the start of your first turn of each combat, your walking speed increases by 10 feet, which lasts until the end of that turn. If you take the {@action Attack} action on that turn, you can make one additional weapon attack as part of that action. If that attack hits, the target takes an extra {@damage 1d8} damage of the weapon's damage type."
			]
		},
		{
			"name": "Gloom Stalker Magic",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Gloom Stalker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Gloom Stalker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell disguise self}"
						],
						[
							"5th",
							"{@spell rope trick}"
						],
						[
							"9th",
							"{@spell fear}"
						],
						[
							"13th",
							"{@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell seeming}"
						]
					]
				}
			]
		},
		{
			"name": "Umbral Sight",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain {@sense darkvision} out to a range of 60 feet. If you already have {@sense darkvision} from your race, its range increases by 30 feet.",
				"You are also adept at evading creatures that rely on {@sense darkvision}. While in darkness, you are {@condition invisible} to any creature that relies on {@sense darkvision} to see you in that darkness."
			]
		},
		{
			"name": "Extra Attack",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Iron Mind",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"By 7th level, you have honed your ability to resist the mind-altering powers of your prey. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice)."
			]
		},
		{
			"name": "Stalker's Flurry",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you learn to attack with such unexpected speed that you can turn a miss into another strike. Once on each of your turns when you miss with a weapon attack, you can make another weapon attack as part of the same action."
			]
		},
		{
			"name": "Shadowy Dodge",
			"source": "XGE",
			"page": 41,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Gloom Stalker",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you can dodge in unforeseen ways, with wisps of supernatural shadow around you. Whenever a creature makes an attack roll against you and doesn't have advantage on the roll, you can use your reaction to impose disadvantage on it. You must use this feature before you know the outcome of the attack roll."
			]
		},
		{
			"name": "Horizon Walker",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"Horizon Walkers guard the world against threats that originate from other planes or that seek to ravage the mortal realm with otherworldly magic. They seek out planar portals and keep watch over them, venturing to the Inner Planes and the Outer Planes as needed to pursue their foes. These rangers are also friends to any forces in the multiverse\u2014especially benevolent dragons, fey, and elementals\u2014that work to preserve life and the order of the planes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Horizon Walker Magic|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Detect Portal|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Planar Warrior|Ranger (Revised)|UATheRangerRevised|Horizon Walker|XGE|3"
				}
			]
		},
		{
			"name": "Detect Portal",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to magically sense the presence of a planar portal. As an action, you detect the distance and direction to the closest planar portal within 1 mile of you.",
				"Once you use this feature, you can't use it again until you finish a short or long rest.",
				"See the \"Planar Travel\" section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
			]
		},
		{
			"name": "Horizon Walker Magic",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Horizon Walker Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell misty step}"
						],
						[
							"9th",
							"{@spell haste}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell teleportation circle}"
						]
					]
				}
			]
		},
		{
			"name": "Planar Warrior",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to draw on the energy of the multiverse to augment your attacks.",
				"As a bonus action, choose one creature you can see within 30 feet of you. The next time you hit that creature on this turn with a weapon attack, all damage dealt by the attack becomes force damage, and the creature takes an extra {@damage 1d8} force damage from the attack. When you reach 11th level in this class, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Extra Attack",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Ethereal Step",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you learn to step through the Ethereal Plane. As a bonus action, you can cast the {@spell etherealness} spell with this feature, without expending a spell slot, but the spell ends at the end of the current turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Distant Strike",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to pass between the planes in the blink of an eye. When you take the {@action Attack} action, you can teleport up to 10 feet before each attack to an unoccupied space you can see.",
				"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
			]
		},
		{
			"name": "Spectral Defense",
			"source": "XGE",
			"page": 42,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Horizon Walker",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, your ability to move between planes enables you to slip through the planar boundaries to lessen the harm done to you during battle. When you take damage from an attack, you can use your reaction to give yourself resistance to all of that attack's damage on this turn."
			]
		},
		{
			"name": "Monster Slayer",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"{@note Note that this subclass is intended for use with the Ranger class presented in the Player's Handbook. It is presented here for convenience, and may be unsuitable for use as a Revised Ranger subclass.}",
				"You have dedicated yourself to hunting down creatures of the night and wielders of grim magic. A Monster Slayer seeks out vampires, dragons, evil fey, fiends, and other magical threats. Trained in supernatural techniques to overcome such monsters, slayers are experts at unearthing and defeating mighty, mystical foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Monster Slayer Magic|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hunter's Sense|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Slayer's Prey|Ranger (Revised)|UATheRangerRevised|Monster Slayer|XGE|3"
				}
			]
		},
		{
			"name": "Hunter's Sense",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to peer at a creature and magically discern how best to hurt it. As an action, choose one creature you can see within 60 feet of you. You immediately learn whether the creature has any damage immunities, resistances, or vulnerabilities and what they are. If the creature is hidden from divination magic, you sense that it has no damage immunities, resistances, or vulnerabilities.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Monster Slayer Magic",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Monster Slayer Spells table. The spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				{
					"type": "table",
					"caption": "Monster Slayer Spells",
					"colLabels": [
						"Ranger Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}"
						],
						[
							"5th",
							"{@spell zone of truth}"
						],
						[
							"9th",
							"{@spell magic circle}"
						],
						[
							"13th",
							"{@spell banishment}"
						],
						[
							"17th",
							"{@spell hold monster}"
						]
					]
				}
			]
		},
		{
			"name": "Slayer's Prey",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can focus your ire on one foe, increasing the harm you inflict on it. As a bonus action, you designate one creature you can see within 60 feet of you as the target of this feature. The first time each turn that you hit that target with a weapon attack, it takes an extra {@damage 1d6} damage from the weapon.",
				"This benefit lasts until you finish a short or long rest. It ends early if you designate a different creature."
			]
		},
		{
			"name": "Extra Attack",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 5,
			"header": 2,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Supernatural Defense",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"At 7th level, you gain extra resilience against your prey's assaults on your mind and body. Whenever the target of your Slayer's Prey forces you to make a saving throw and whenever you make an ability check to escape that target's grapple, add {@dice 1d6} to your roll."
			]
		},
		{
			"name": "Magic-User's Nemesis",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to thwart someone else's magic. When you see a creature casting a spell or teleporting within 60 feet of you, you can use your reaction to try to magically foil it. The creature must succeed on a Wisdom saving throw against your spell save DC, or its spell or teleport fails and is wasted.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Slayer's Counter",
			"source": "XGE",
			"page": 43,
			"className": "Ranger (Revised)",
			"classSource": "UATheRangerRevised",
			"subclassShortName": "Monster Slayer",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you gain the ability to counterattack when your prey tries to sabotage you. If the target of your Slayer's Prey forces you to make a saving throw, you can use your reaction to make one weapon attack against the quarry. You make this attack immediately before making the saving throw. If your attack hits, your save automatically succeeds, in addition to the attack's normal effects."
			]
		}
	]
}

ranger['class'] = [ranger['class'][0]]

export {ranger}