const cleric = 
{
	"class": [
		{
			"name": "Cleric",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"wis",
				"cha"
			],
			"spellcastingAbility": "wis",
			"casterProgression": "full",
			"preparedSpells": "<$level$> + <$wis_mod$>",
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
			"startingProficiencies": {
				"armor": [
					"light",
					"medium",
					"{@item shield|phb|shields}"
				],
				"weapons": [
					"simple"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"history",
								"insight",
								"medicine",
								"persuasion",
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
					"(a) a {@item mace|phb} or (b) a {@item warhammer|phb} (if proficient)",
					"(a) {@item scale mail|phb}, (b) {@item leather armor|phb}, or (c) {@item chain mail|phb} (if proficient)",
					"(a) a {@item light crossbow|phb} and {@item Crossbow Bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}",
					"A {@item shield|phb} and a {@item holy symbol|phb}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"mace|phb"
						],
						"b": [
							"warhammer|phb"
						]
					},
					{
						"a": [
							"scale mail|phb"
						],
						"b": [
							"leather armor|phb"
						],
						"c": [
							"chain mail|phb"
						]
					},
					{
						"a": [
							"light crossbow|phb",
							"Crossbow Bolts (20)|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimple"
							}
						]
					},
					{
						"a": [
							"priest's pack|phb"
						],
						"b": [
							"explorer's pack|phb"
						]
					},
					{
						"_": [
							"shield|phb",
							"holy symbol|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"wis": 13
				},
				"proficienciesGained": {
					"armor": [
						"light",
						"medium",
						"{@item shield|phb|shields}"
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|class=Cleric}"
					],
					"rows": [
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
							5
						],
						[
							5
						],
						[
							5
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Cleric}",
						"{@filter 2nd|spells|level=2|class=Cleric}",
						"{@filter 3rd|spells|level=3|class=Cleric}",
						"{@filter 4th|spells|level=4|class=Cleric}",
						"{@filter 5th|spells|level=5|class=Cleric}",
						"{@filter 6th|spells|level=6|class=Cleric}",
						"{@filter 7th|spells|level=7|class=Cleric}",
						"{@filter 8th|spells|level=8|class=Cleric}",
						"{@filter 9th|spells|level=9|class=Cleric}"
					],
					"rowsSpellProgression": [
						[
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
				"Spellcasting|Cleric||1",
				"Cantrip Versatility|Cleric||1|UAClassFeatureVariants",
				{
					"classFeature": "Divine Domain|Cleric||1",
					"gainSubclassFeature": true
				},
				{
					"classFeature": "Channel Divinity|Cleric||2",
					"tableDisplayName": "Channel Divinity (1/rest)"
				},
				"Channel Divinity: Harness Divine Power|Cleric||2|UAClassFeatureVariants",
				"Channel Divinity: Harness Divine Power|Cleric||2|TCE",
				{
					"classFeature": "Divine Domain feature|Cleric||2",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Cleric||4",
				"Proficiency Versatility|Cleric||4|UAClassFeatureVariants",
				"Cantrip Versatility|Cleric||4|TCE",
				"Destroy Undead (CR 1/2)|Cleric||5",
				{
					"classFeature": "Channel Divinity|Cleric||6",
					"tableDisplayName": "Channel Divinity (2/rest)"
				},
				{
					"classFeature": "Divine Domain feature|Cleric||6",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Cleric||8",
				"Proficiency Versatility|Cleric||8|UAClassFeatureVariants",
				"Destroy Undead (CR 1)|Cleric||8",
				{
					"classFeature": "Divine Domain feature|Cleric||8",
					"gainSubclassFeature": true
				},
				"Divine Intervention|Cleric||10",
				"Destroy Undead (CR 2)|Cleric||11",
				"Ability Score Improvement|Cleric||12",
				"Proficiency Versatility|Cleric||12|UAClassFeatureVariants",
				"Destroy Undead (CR 3)|Cleric||14",
				"Ability Score Improvement|Cleric||16",
				"Proficiency Versatility|Cleric||16|UAClassFeatureVariants",
				"Destroy Undead (CR 4)|Cleric||17",
				{
					"classFeature": "Divine Domain feature|Cleric||17",
					"gainSubclassFeature": true
				},
				{
					"classFeature": "Channel Divinity|Cleric||18",
					"tableDisplayName": "Channel Divinity (3/rest)"
				},
				"Ability Score Improvement|Cleric||19",
				"Proficiency Versatility|Cleric||19|UAClassFeatureVariants",
				"Divine Intervention Improvement|Cleric||20"
			],
			"subclassTitle": "Divine Domain",
			"fluff": [
				{
					"name": "Cleric",
					"type": "section",
					"entries": [
						"Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions.",
						"Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe's fall.",
						"Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions.",
						"Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.",
						{
							"type": "entries",
							"name": "Healers and Warriors",
							"entries": [
								"Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don't grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling.",
								"Harnessing divine magic doesn't rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity's wishes.",
								"Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side."
							]
						},
						{
							"type": "entries",
							"name": "Divine Agents",
							"entries": [
								"Not every acolyte or officiant at a temple or shrine is a cleric. Some priests are called to a simple life of temple service, carrying out their gods' will through prayer and sacrifice, not by magic and strength of arms. In some cities, priesthood amounts to a political office, viewed as a stepping stone to higher positions of authority and involving no communion with a god at all. True clerics are rare in most hierarchies.",
								"When a cleric takes up an adventuring life, it is usually because his or her god demands it. Pursuing the goals of the gods often involves braving dangers beyond the walls of civilization, smiting evil or seeking holy relics in ancient tombs. Many clerics are also expected to protect their deities' worshipers, which can mean fighting rampaging orcs, negotiating peace between warring nations, or sealing a portal that would allow a demon prince to enter the world.",
								"Most adventuring clerics maintain some connection to established temples and orders of their faiths. A temple might ask for a cleric's aid, or a high priest might be in a position to demand it."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Cleric",
							"entries": [
								"As you create a cleric, the most important question to consider is which deity to serve and what principles you want your character to embody. Appendix B includes lists of many of the gods of the multiverse. Check with your DM to learn which deities are in your campaign.",
								"Once you've chosen a deity, consider your cleric's relationship to that god. Did you enter this service willingly? Or did the god choose you, impelling you into service with no regard for your wishes? How do the temple priests of your faith regard you: as a champion or a troublemaker? What are your ultimate goals? Does your deity have a special task in mind for you? Or are you striving to prove yourself worthy of a great quest?",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a cleric quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Strength or Constitution. Second, choose the {@background acolyte} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 56
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"To become a cleric is to become a messenger of the gods. The power the divine offers is great, but it always comes with tremendous responsibility."
							],
							"by": "Riggby the patriarch"
						},
						"Almost all the folk in the world who revere a deity live their lives without ever being directly touched by a divine being. As such, they can never know what it feels like to be a cleric\u2014someone who is not only a devout worshiper, but who has also been invested with a measure of a deity's power.",
						"The question has long been debated: Does a mortal become a cleric as a consequence of deep devotion to one's deity, thereby attracting the god's favor? Or is it the deity who sees the potential in a person and calls that individual into service? Ultimately, perhaps, the answer doesn't matter. However clerics come into being, the world needs clerics as much as clerics and deities need each other.",
						"If you're playing a cleric character, the following sections offer ways to add some detail to that character's history and personality.",
						{
							"type": "entries",
							"name": "Temple",
							"entries": [
								"Most clerics start their lives of service as priests in an order, then later realize that they have been blessed by their god with the qualities needed to become a cleric. To prepare for this new duty, candidates typically receive instruction from a cleric of a temple or another place of study devoted to their deity.",
								"Some temples are cut off from the world so that their occupants can focus on devotions, while other temples open their doors to minister to and heal the masses. What is noteworthy about the temple you studied at?",
								{
									"type": "table",
									"caption": "Temple",
									"colLabels": [
										"{@dice d6}",
										"Temple"
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
											"Your temple is said to be the oldest surviving structure built to honor your god."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Acolytes of several like-minded deities all received instruction together in your temple."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"You come from a temple famed for the brewery it operates. Some say you smell like one of its ales."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your temple is a fortress and a proving ground that trains warrior-priests."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Your temple is a peaceful, humble place, filled with vegetable gardens and simple priests."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You served in a temple in the Outer Planes."
										]
									]
								},
								{
									"type": "entries",
									"name": "Keepsake",
									"entries": [
										"Many clerics have items among their personal gear that symbolize their faith, remind them of their vows, or otherwise help to keep them on their chosen paths. Even though such an item is not imbued with divine power, it is vitally important to its owner because of what it represents.",
										{
											"type": "table",
											"caption": "Keepsake",
											"colLabels": [
												"{@dice d6}",
												"Keepsake"
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
													"The finger bone of a saint"
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 2
														}
													},
													"A metal-bound book that tells how to hunt and destroy infernal creatures"
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 3
														}
													},
													"A pig's whistle that reminds you of your humble and beloved mentor"
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 4
														}
													},
													"A braid of hair woven from the tail of a unicorn"
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 5
														}
													},
													"A scroll that describes how best to rid the world of necromancers"
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 6
														}
													},
													"A runestone said to be blessed by your god"
												]
											]
										}
									]
								},
								{
									"type": "entries",
									"name": "Secret",
									"entries": [
										"No mortal soul is entirely free of second thoughts or doubt. Even a cleric must grapple with dark desires or the forbidden attraction of turning against the teachings of one's deity.",
										"If you haven't considered this aspect of your character yet, see the table entries for some possibilities, or use them for inspiration. Your deep, dark secret might involve something you did (or are doing), or it could be rooted in the way you feel about the world and your role in it.",
										{
											"type": "table",
											"caption": "Secret",
											"colLabels": [
												"{@dice d6}",
												"Secret"
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
													"An imp offers you counsel. You try to ignore the creature, but sometimes its advice is helpful."
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 2
														}
													},
													"You believe that, in the final analysis, the gods are nothing more than ultrapowerful mortal creatures."
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 3
														}
													},
													"You acknowledge the power of the gods, but you think that most events are dictated by pure chance."
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 4
														}
													},
													"Even though you can work divine magic, you have never truly felt the presence of a divine essence within yourself."
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 5
														}
													},
													"You are plagued by nightmares that you believe are sent by your god as punishment for some unknown transgression."
												],
												[
													{
														"type": "cell",
														"roll": {
															"exact": 6
														}
													},
													"In times of despair, you feel that you are but a plaything of the gods, and you resent their remoteness."
												]
											]
										}
									]
								},
								{
									"type": "inset",
									"name": "Serving a Pantheon, Philosophy, or Force",
									"entries": [
										"The typical cleric is an ordained servant of a particular god and chooses a Divine Domain associated with that deity. The cleric's magic flows from the god or the god's sacred realm, and often the cleric bears a holy symbol that represents that divinity.",
										"Some clerics, especially in a world like Eberron, serve a whole pantheon, rather than a single deity. In certain campaigns, a cleric might instead serve a cosmic force, such as life or death, or a philosophy or concept, such as love, peace, or one of the nine alignments. Chapter 1 of the Dungeon Master's Guide explores options like these, in the section \"Gods of Your World.\"",
										"Talk with your DM about the divine options available in your campaign, whether they're gods, pantheons, philosophies, or cosmic forces. Whatever being or thing your cleric ends up serving, choose a Divine Domain that is appropriate for it, and if it doesn't have a holy symbol, work with your DM to design one.",
										"The cleric's class features often refer to your deity. If you are devoted to a pantheon, cosmic force, or philosophy, your cleric features still work for you as written. Think of the references to a god as references to the divine thing you serve that gives you your magic."
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 17
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Knowledge Domain",
			"shortName": "Knowledge",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 59,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"command",
							"identify"
						],
						"3": [
							"augury",
							"suggestion"
						],
						"5": [
							"nondetection",
							"speak with dead"
						],
						"7": [
							"arcane eye",
							"confusion"
						],
						"9": [
							"legend lore",
							"scrying"
						]
					}
				}
			],
			"subclassFeatures": [
				"Knowledge Domain|Cleric||Knowledge||1",
				"Channel Divinity: Knowledge of the Ages|Cleric||Knowledge||2",
				"Channel Divinity: Read Thoughts|Cleric||Knowledge||6",
				"Potent Spellcasting|Cleric||Knowledge||8",
				"Blessed Strikes|Cleric||Knowledge||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Knowledge||8|TCE",
				"Visions of the Past|Cleric||Knowledge||17"
			]
		},
		{
			"name": "Life Domain",
			"shortName": "Life",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"bless",
							"cure wounds"
						],
						"3": [
							"lesser restoration",
							"spiritual weapon"
						],
						"5": [
							"beacon of hope",
							"revivify"
						],
						"7": [
							"death ward",
							"guardian of faith"
						],
						"9": [
							"mass cure wounds",
							"raise dead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Life Domain|Cleric||Life||1",
				"Channel Divinity: Preserve Life|Cleric||Life||2",
				"Blessed Healer|Cleric||Life||6",
				"Divine Strike|Cleric||Life||8",
				"Blessed Strikes|Cleric||Life||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Life||8|TCE",
				"Supreme Healing|Cleric||Life||17"
			]
		},
		{
			"name": "Light Domain",
			"shortName": "Light",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 60,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"burning hands",
							"faerie fire"
						],
						"3": [
							"flaming sphere",
							"scorching ray"
						],
						"5": [
							"daylight",
							"fireball"
						],
						"7": [
							"guardian of faith",
							"wall of fire"
						],
						"9": [
							"flame strike",
							"scrying"
						]
					},
					"known": {
						"1": [
							"light#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"Light Domain|Cleric||Light||1",
				"Channel Divinity: Radiance of the Dawn|Cleric||Light||2",
				"Improved Flare|Cleric||Light||6",
				"Potent Spellcasting|Cleric||Light||8",
				"Blessed Strikes|Cleric||Light||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Light||8|TCE",
				"Corona of Light|Cleric||Light||17"
			]
		},
		{
			"name": "Nature Domain",
			"shortName": "Nature",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 61,
			"additionalSpells": [
				{
					"known": {
						"1": {
							"_": [
								{
									"choose": "level=0|class=Druid"
								}
							]
						}
					},
					"prepared": {
						"1": [
							"animal friendship",
							"speak with animals"
						],
						"3": [
							"barkskin",
							"spike growth"
						],
						"5": [
							"plant growth",
							"wind wall"
						],
						"7": [
							"dominate beast",
							"grasping vine"
						],
						"9": [
							"insect plague",
							"tree stride"
						]
					}
				}
			],
			"subclassFeatures": [
				"Nature Domain|Cleric||Nature||1",
				"Channel Divinity: Charm Animals and Plants|Cleric||Nature||2",
				"Dampen Elements|Cleric||Nature||6",
				"Divine Strike|Cleric||Nature||8",
				"Blessed Strikes|Cleric||Nature||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Nature||8|TCE",
				"Master of Nature|Cleric||Nature||17"
			]
		},
		{
			"name": "Tempest Domain",
			"shortName": "Tempest",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 62,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"fog cloud",
							"thunderwave"
						],
						"3": [
							"gust of wind",
							"shatter"
						],
						"5": [
							"call lightning",
							"sleet storm"
						],
						"7": [
							"control water",
							"ice storm"
						],
						"9": [
							"destructive wave",
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Tempest Domain|Cleric||Tempest||1",
				"Channel Divinity: Destructive Wrath|Cleric||Tempest||2",
				"Thunderbolt Strike|Cleric||Tempest||6",
				"Divine Strike|Cleric||Tempest||8",
				"Blessed Strikes|Cleric||Tempest||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Tempest||8|TCE",
				"Stormborn|Cleric||Tempest||17"
			]
		},
		{
			"name": "Trickery Domain",
			"shortName": "Trickery",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 62,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"charm person",
							"disguise self"
						],
						"3": [
							"mirror image",
							"pass without trace"
						],
						"5": [
							"blink",
							"dispel magic"
						],
						"7": [
							"dimension door",
							"polymorph"
						],
						"9": [
							"dominate person",
							"modify memory"
						]
					}
				}
			],
			"subclassFeatures": [
				"Trickery Domain|Cleric||Trickery||1",
				"Channel Divinity: Invoke Duplicity|Cleric||Trickery||2",
				"Channel Divinity: Cloak of Shadows|Cleric||Trickery||6",
				"Divine Strike|Cleric||Trickery||8",
				"Blessed Strikes|Cleric||Trickery||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Trickery||8|TCE",
				"Improved Duplicity|Cleric||Trickery||17"
			]
		},
		{
			"name": "War Domain",
			"shortName": "War",
			"source": "PHB",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 63,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"divine favor",
							"shield of faith"
						],
						"3": [
							"magic weapon",
							"spiritual weapon"
						],
						"5": [
							"crusader's mantle",
							"spirit guardians"
						],
						"7": [
							"freedom of movement",
							"stoneskin"
						],
						"9": [
							"flame strike",
							"hold monster"
						]
					}
				}
			],
			"subclassFeatures": [
				"War Domain|Cleric||War||1",
				"Channel Divinity: Guided Strike|Cleric||War||2",
				"Channel Divinity: War God's Blessing|Cleric||War||6",
				"Divine Strike|Cleric||War||8",
				"Blessed Strikes|Cleric||War||8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||War||8|TCE",
				"Avatar of Battle|Cleric||War||17"
			]
		},
		{
			"name": "Death Domain",
			"shortName": "Death",
			"source": "DMG",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 96,
			"additionalSpells": [
				{
					"known": {
						"1": {
							"_": [
								{
									"choose": "level=0|school=N",
									"count": 1
								}
							]
						}
					},
					"prepared": {
						"1": [
							"false life",
							"ray of sickness"
						],
						"3": [
							"blindness/deafness",
							"ray of enfeeblement"
						],
						"5": [
							"animate dead",
							"vampiric touch"
						],
						"7": [
							"blight",
							"death ward"
						],
						"9": [
							"antilife shell",
							"cloudkill"
						]
					}
				}
			],
			"subclassFeatures": [
				"Death Domain|Cleric||Death|DMG|1",
				"Channel Divinity: Touch of Death|Cleric||Death|DMG|2",
				"Inescapable Destruction|Cleric||Death|DMG|6",
				"Divine Strike|Cleric||Death|DMG|8",
				"Blessed Strikes|Cleric||Death|DMG|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Death|DMG|8|TCE",
				"Improved Reaper|Cleric||Death|DMG|17"
			]
		},
		{
			"name": "City Domain (UA)",
			"shortName": "City (UA)",
			"source": "UAModernMagic",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 1,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"comprehend languages",
							"remote access (ua)|uamodernmagic"
						],
						"3": [
							"find vehicle (ua)|uamodernmagic",
							"heat metal"
						],
						"5": [
							"lightning bolt",
							"protection from ballistics (ua)|uamodernmagic"
						],
						"7": [
							"locate creature",
							"synchronicity (ua)|uamodernmagic"
						],
						"9": [
							"commune with city (ua)|uamodernmagic",
							"shutdown (ua)|uamodernmagic"
						]
					}
				}
			],
			"subclassFeatures": [
				"City Domain (UA)|Cleric||City (UA)|UAModernMagic|1",
				"Channel Divinity: Spirits of the City|Cleric||City (UA)|UAModernMagic|2",
				"Block Watch|Cleric||City (UA)|UAModernMagic|6",
				"Divine Strike|Cleric||City (UA)|UAModernMagic|8",
				"Blessed Strikes|Cleric||City (UA)|UAModernMagic|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||City (UA)|UAModernMagic|8|TCE",
				"Express Transit|Cleric||City (UA)|UAModernMagic|17"
			]
		},
		{
			"name": "Arcana Domain",
			"shortName": "Arcana",
			"source": "SCAG",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 125,
			"additionalSpells": [
				{
					"known": {
						"1": {
							"_": [
								{
									"choose": "level=0|class=Wizard",
									"count": 2
								}
							]
						}
					},
					"prepared": {
						"1": [
							"detect magic",
							"magic missile"
						],
						"3": [
							"magic weapon",
							"Nystul's magic aura"
						],
						"5": [
							"dispel magic",
							"magic circle"
						],
						"7": [
							"arcane eye",
							"Leomund's secret chest"
						],
						"9": [
							"planar binding",
							"teleportation circle"
						],
						"17": [
							{
								"choose": "level=6|class=Wizard"
							},
							{
								"choose": "level=7|class=Wizard"
							},
							{
								"choose": "level=8|class=Wizard"
							},
							{
								"choose": "level=9|class=Wizard"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"Arcana Domain|Cleric||Arcana|SCAG|1",
				"Channel Divinity: Arcane Abjuration|Cleric||Arcana|SCAG|2",
				"Spell Breaker|Cleric||Arcana|SCAG|6",
				"Potent Spellcasting|Cleric||Arcana|SCAG|8",
				"Blessed Strikes|Cleric||Arcana|SCAG|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Arcana|SCAG|8|TCE",
				"Arcane Mastery|Cleric||Arcana|SCAG|17"
			]
		},
		{
			"name": "Forge Domain (UA)",
			"shortName": "Forge (UA)",
			"source": "UAClericDivineDomains",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"searing smite",
							"shield"
						],
						"3": [
							"heat metal",
							"magic weapon"
						],
						"5": [
							"elemental weapon",
							"protection from energy"
						],
						"7": [
							"fabricate",
							"wall of fire"
						],
						"9": [
							"animate objects",
							"creation"
						]
					}
				}
			],
			"subclassFeatures": [
				"Forge Domain (UA)|Cleric||Forge (UA)|UAClericDivineDomains|1",
				"Channel Divinity: Artisan's Blessing|Cleric||Forge (UA)|UAClericDivineDomains|2",
				"Soul of the Forge|Cleric||Forge (UA)|UAClericDivineDomains|6",
				"Divine Strike|Cleric||Forge (UA)|UAClericDivineDomains|8",
				"Blessed Strikes|Cleric||Forge (UA)|UAClericDivineDomains|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Forge (UA)|UAClericDivineDomains|8|TCE",
				"Saint of Forge and Fire|Cleric||Forge (UA)|UAClericDivineDomains|17"
			]
		},
		{
			"name": "Grave Domain (UA)",
			"shortName": "Grave (UA)",
			"source": "UAClericDivineDomains",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"bane",
							"false life"
						],
						"3": [
							"gentle repose",
							"ray of enfeeblement"
						],
						"5": [
							"revivify",
							"vampiric touch"
						],
						"7": [
							"blight",
							"death ward"
						],
						"9": [
							"antilife shell",
							"raise dead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Grave Domain (UA)|Cleric||Grave (UA)|UAClericDivineDomains|1",
				"Channel Divinity: Path to the Grave|Cleric||Grave (UA)|UAClericDivineDomains|2",
				"Sentinel at Death's Door|Cleric||Grave (UA)|UAClericDivineDomains|6",
				"Divine Strike|Cleric||Grave (UA)|UAClericDivineDomains|8",
				"Blessed Strikes|Cleric||Grave (UA)|UAClericDivineDomains|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Grave (UA)|UAClericDivineDomains|8|TCE",
				"Keeper of Souls|Cleric||Grave (UA)|UAClericDivineDomains|17"
			]
		},
		{
			"name": "Protection Domain (UA)",
			"shortName": "Protection (UA)",
			"source": "UAClericDivineDomains",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 3,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"compelled duel",
							"protection from evil and good"
						],
						"3": [
							"aid",
							"protection from poison"
						],
						"5": [
							"protection from energy",
							"slow"
						],
						"7": [
							"guardian of faith",
							"Otiluke's resilient sphere"
						],
						"9": [
							"antilife shell",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Protection Domain (UA)|Cleric||Protection (UA)|UAClericDivineDomains|1",
				"Channel Divinity: Radiant Defense|Cleric||Protection (UA)|UAClericDivineDomains|2",
				"Blessed Healer|Cleric||Protection (UA)|UAClericDivineDomains|6",
				"Divine Strike|Cleric||Protection (UA)|UAClericDivineDomains|8",
				"Blessed Strikes|Cleric||Protection (UA)|UAClericDivineDomains|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Protection (UA)|UAClericDivineDomains|8|TCE",
				"Indomitable Defense|Cleric||Protection (UA)|UAClericDivineDomains|17"
			]
		},
		{
			"name": "Ambition Domain (PSA)",
			"shortName": "Ambition (PSA)",
			"source": "PSA",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 27,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"bane",
							"disguise self"
						],
						"3": [
							"mirror image",
							"ray of enfeeblement"
						],
						"5": [
							"bestow curse",
							"vampiric touch"
						],
						"7": [
							"death ward",
							"dimension door"
						],
						"9": [
							"dominate person",
							"modify memory"
						]
					}
				}
			],
			"subclassFeatures": [
				"Ambition Domain (PSA)|Cleric||Ambition (PSA)|PSA|1",
				"Channel Divinity: Invoke Duplicity|Cleric||Ambition (PSA)|PSA|2",
				"Channel Divinity: Cloak of Shadows|Cleric||Ambition (PSA)|PSA|6",
				"Potent Spellcasting|Cleric||Ambition (PSA)|PSA|8",
				"Blessed Strikes|Cleric||Ambition (PSA)|PSA|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Ambition (PSA)|PSA|8|TCE",
				"Improved Duplicity|Cleric||Ambition (PSA)|PSA|17"
			]
		},
		{
			"name": "Knowledge Domain (PSA)",
			"shortName": "Knowledge (PSA)",
			"source": "PSA",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 25,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"command",
							"identify"
						],
						"3": [
							"augury",
							"suggestion"
						],
						"5": [
							"nondetection",
							"speak with dead"
						],
						"7": [
							"arcane eye",
							"confusion"
						],
						"9": [
							"legend lore",
							"scrying"
						]
					}
				}
			],
			"subclassFeatures": [
				"Knowledge Domain (PSA)|Cleric||Knowledge (PSA)|PSA|1",
				"Subclass Feature|Cleric||Knowledge (PSA)|PSA|2",
				"Subclass Feature|Cleric||Knowledge (PSA)|PSA|6",
				"Subclass Feature|Cleric||Knowledge (PSA)|PSA|8",
				"Subclass Feature|Cleric||Knowledge (PSA)|PSA|17"
			]
		},
		{
			"name": "Solidarity Domain (PSA)",
			"shortName": "Solidarity (PSA)",
			"source": "PSA",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 24,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"bless",
							"guiding bolt"
						],
						"3": [
							"aid",
							"warding bond"
						],
						"5": [
							"beacon of hope",
							"crusader's mantle"
						],
						"7": [
							"aura of life",
							"guardian of faith"
						],
						"9": [
							"circle of power",
							"mass cure wounds"
						]
					}
				}
			],
			"subclassFeatures": [
				"Solidarity Domain (PSA)|Cleric||Solidarity (PSA)|PSA|1",
				"Channel Divinity: Preserve Life|Cleric||Solidarity (PSA)|PSA|2",
				"Oketra's Blessing|Cleric||Solidarity (PSA)|PSA|6",
				"Divine Strike|Cleric||Solidarity (PSA)|PSA|8",
				"Blessed Strikes|Cleric||Solidarity (PSA)|PSA|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Solidarity (PSA)|PSA|8|TCE",
				"Supreme Healing|Cleric||Solidarity (PSA)|PSA|17"
			]
		},
		{
			"name": "Strength Domain (PSA)",
			"shortName": "Strength (PSA)",
			"source": "PSA",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 26,
			"additionalSpells": [
				{
					"known": {
						"1": {
							"_": [
								{
									"choose": "level=0|class=Druid"
								}
							]
						}
					},
					"prepared": {
						"1": [
							"divine favor",
							"shield of faith"
						],
						"3": [
							"enhance ability",
							"protection from poison"
						],
						"5": [
							"haste",
							"protection from energy"
						],
						"7": [
							"dominate beast",
							"stoneskin"
						],
						"9": [
							"destructive wave",
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Strength Domain (PSA)|Cleric||Strength (PSA)|PSA|1",
				"Channel Divinity: Feat of Strength|Cleric||Strength (PSA)|PSA|2",
				"Rhonas's Blessing|Cleric||Strength (PSA)|PSA|6",
				"Divine Strike|Cleric||Strength (PSA)|PSA|8",
				"Blessed Strikes|Cleric||Strength (PSA)|PSA|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Strength (PSA)|PSA|8|TCE",
				"Avatar of Battle|Cleric||Strength (PSA)|PSA|17"
			]
		},
		{
			"name": "Zeal Domain (PSA)",
			"shortName": "Zeal (PSA)",
			"source": "PSA",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 28,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"searing smite",
							"thunderous smite"
						],
						"3": [
							"magic weapon",
							"shatter"
						],
						"5": [
							"haste",
							"fireball"
						],
						"7": [
							"fire shield|",
							"freedom of movement"
						],
						"9": [
							"destructive wave",
							"flame strike"
						]
					}
				}
			],
			"subclassFeatures": [
				"Zeal Domain (PSA)|Cleric||Zeal (PSA)|PSA|1",
				"Channel Divinity: Consuming Fervor|Cleric||Zeal (PSA)|PSA|2",
				"Resounding Strike|Cleric||Zeal (PSA)|PSA|6",
				"Divine Strike|Cleric||Zeal (PSA)|PSA|8",
				"Blessed Strikes|Cleric||Zeal (PSA)|PSA|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Zeal (PSA)|PSA|8|TCE",
				"Blaze of Glory|Cleric||Zeal (PSA)|PSA|17"
			]
		},
		{
			"name": "Forge Domain",
			"shortName": "Forge",
			"source": "XGE",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 18,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"identify",
							"searing smite"
						],
						"3": [
							"heat metal",
							"magic weapon"
						],
						"5": [
							"elemental weapon",
							"protection from energy"
						],
						"7": [
							"fabricate",
							"wall of fire"
						],
						"9": [
							"animate objects",
							"creation"
						]
					}
				}
			],
			"subclassFeatures": [
				"Forge Domain|Cleric||Forge|XGE|1",
				"Channel Divinity: Artisan's Blessing|Cleric||Forge|XGE|2",
				"Soul of the Forge|Cleric||Forge|XGE|6",
				"Divine Strike|Cleric||Forge|XGE|8",
				"Blessed Strikes|Cleric||Forge|XGE|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Forge|XGE|8|TCE",
				"Saint of Forge and Fire|Cleric||Forge|XGE|17"
			]
		},
		{
			"name": "Grave Domain",
			"shortName": "Grave",
			"source": "XGE",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 19,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"bane",
							"false life"
						],
						"3": [
							"gentle repose",
							"ray of enfeeblement"
						],
						"5": [
							"revivify",
							"vampiric touch"
						],
						"7": [
							"blight",
							"death ward"
						],
						"9": [
							"antilife shell",
							"raise dead"
						]
					},
					"known": {
						"1": [
							"spare the dying#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"Grave Domain|Cleric||Grave|XGE|1",
				"Channel Divinity: Path to the Grave|Cleric||Grave|XGE|2",
				"Sentinel at Death's Door|Cleric||Grave|XGE|6",
				"Potent Spellcasting|Cleric||Grave|XGE|8",
				"Blessed Strikes|Cleric||Grave|XGE|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Grave|XGE|8|TCE",
				"Keeper of Souls|Cleric||Grave|XGE|17"
			]
		},
		{
			"name": "Order Domain (UA)",
			"shortName": "Order (UA)",
			"source": "UAOrderDomain",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"command",
							"heroism"
						],
						"3": [
							"enhance ability",
							"hold person"
						],
						"5": [
							"mass healing word",
							"slow"
						],
						"7": [
							"compulsion",
							"locate creature"
						],
						"9": [
							"commune",
							"dominate person"
						]
					}
				}
			],
			"subclassFeatures": [
				"Order Domain (UA)|Cleric||Order (UA)|UAOrderDomain|1",
				"Channel Divinity: Order's Demand|Cleric||Order (UA)|UAOrderDomain|2",
				"Order's Dominion|Cleric||Order (UA)|UAOrderDomain|6",
				"Divine Strike|Cleric||Order (UA)|UAOrderDomain|8",
				"Blessed Strikes|Cleric||Order (UA)|UAOrderDomain|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Order (UA)|UAOrderDomain|8|TCE",
				"Order's Wrath|Cleric||Order (UA)|UAOrderDomain|17"
			]
		},
		{
			"name": "Twilight Domain (UA)",
			"shortName": "Twilight (UA)",
			"source": "UAClericDruidWizard",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"faerie fire",
							"sleep"
						],
						"3": [
							"darkness",
							"invisibility"
						],
						"5": [
							"aura of vitality",
							"Leomund's tiny hut"
						],
						"7": [
							"aura of life",
							"greater invisibility"
						],
						"9": [
							"circle of power",
							"dream"
						]
					}
				}
			],
			"subclassFeatures": [
				"Twilight Domain (UA)|Cleric||Twilight (UA)|UAClericDruidWizard|1",
				"Channel Divinity: Twilight Sanctuary|Cleric||Twilight (UA)|UAClericDruidWizard|2",
				"Steps of the Brave|Cleric||Twilight (UA)|UAClericDruidWizard|6",
				"Divine Strike|Cleric||Twilight (UA)|UAClericDruidWizard|8",
				"Blessed Strikes|Cleric||Twilight (UA)|UAClericDruidWizard|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Twilight (UA)|UAClericDruidWizard|8|TCE",
				"Midnight Shroud|Cleric||Twilight (UA)|UAClericDruidWizard|17"
			]
		},
		{
			"name": "Love Domain (UA)",
			"shortName": "Love (UA)",
			"source": "UA2020SubclassesPt2",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"charm person",
							"heroism"
						],
						"3": [
							"enthrall",
							"warding bond"
						],
						"5": [
							"beacon of hope",
							"hypnotic pattern"
						],
						"7": [
							"aura of purity",
							"confusion"
						],
						"9": [
							"greater restoration",
							"hold monster"
						]
					}
				}
			],
			"subclassFeatures": [
				"Love Domain (UA)|Cleric||Love (UA)|UA2020SubclassesPt2|1",
				"Channel Divinity: Impulsive Infatuation|Cleric||Love (UA)|UA2020SubclassesPt2|2",
				"Protective Bond|Cleric||Love (UA)|UA2020SubclassesPt2|6",
				"Potent Spellcasting|Cleric||Love (UA)|UA2020SubclassesPt2|8",
				"Blessed Strikes|Cleric||Love (UA)|UA2020SubclassesPt2|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Love (UA)|UA2020SubclassesPt2|8|TCE",
				"Enduring Unity|Cleric||Love (UA)|UA2020SubclassesPt2|17"
			]
		},
		{
			"name": "Unity Domain (UA)",
			"shortName": "Unity (UA)",
			"source": "UA2020SubclassesPt2",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"heroism",
							"shield of faith"
						],
						"3": [
							"aid",
							"warding bond"
						],
						"5": [
							"beacon of hope",
							"sending"
						],
						"7": [
							"aura of purity",
							"guardian of faith"
						],
						"9": [
							"greater restoration",
							"Rary's telepathic bond"
						]
					}
				}
			],
			"subclassFeatures": [
				"Unity Domain (UA)|Cleric||Unity (UA)|UA2020SubclassesPt2|1",
				"Channel Divinity: Shared Burden|Cleric||Unity (UA)|UA2020SubclassesPt2|2",
				"Protective Bond|Cleric||Unity (UA)|UA2020SubclassesPt2|6",
				"Potent Spellcasting|Cleric||Unity (UA)|UA2020SubclassesPt2|8",
				"Blessed Strikes|Cleric||Unity (UA)|UA2020SubclassesPt2|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Unity (UA)|UA2020SubclassesPt2|8|TCE",
				"Enduring Unity|Cleric||Unity (UA)|UA2020SubclassesPt2|17"
			]
		},
		{
			"name": "Order Domain",
			"shortName": "Order",
			"source": "TCE",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"command",
							"heroism"
						],
						"3": [
							"hold person",
							"zone of truth"
						],
						"5": [
							"mass healing word",
							"slow"
						],
						"7": [
							"compulsion",
							"locate creature"
						],
						"9": [
							"commune",
							"dominate person"
						]
					}
				}
			],
			"subclassFeatures": [
				"Order Domain|Cleric||Order|TCE|1",
				"Channel Divinity: Order's Demand|Cleric||Order|TCE|2",
				"Embodiment of the Law|Cleric||Order|TCE|6",
				"Divine Strike|Cleric||Order|TCE|8",
				"Blessed Strikes|Cleric||Order|TCE|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Order|TCE|8|TCE",
				"Order's Wrath|Cleric||Order|TCE|17"
			]
		},
		{
			"name": "Peace Domain",
			"shortName": "Peace",
			"source": "TCE",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 32,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"heroism",
							"sanctuary"
						],
						"3": [
							"aid",
							"warding bond"
						],
						"5": [
							"beacon of hope",
							"sending"
						],
						"7": [
							"aura of purity",
							"Otiluke's resilient sphere"
						],
						"9": [
							"greater restoration",
							"Rary's telepathic bond"
						]
					}
				}
			],
			"subclassFeatures": [
				"Peace Domain|Cleric||Peace|TCE|1",
				"Channel Divinity: Balm of Peace|Cleric||Peace|TCE|2",
				"Protective Bond|Cleric||Peace|TCE|6",
				"Potent Spellcasting|Cleric||Peace|TCE|8",
				"Blessed Strikes|Cleric||Peace|TCE|8|TCE",
				"Expansive Bond|Cleric||Peace|TCE|17"
			]
		},
		{
			"name": "Twilight Domain",
			"shortName": "Twilight",
			"source": "TCE",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 34,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"faerie fire",
							"sleep"
						],
						"3": [
							"moonbeam",
							"see invisibility"
						],
						"5": [
							"aura of vitality",
							"Leomund's tiny hut"
						],
						"7": [
							"aura of life",
							"greater invisibility"
						],
						"9": [
							"circle of power",
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Twilight Domain|Cleric||Twilight|TCE|1",
				"Channel Divinity: Twilight Sanctuary|Cleric||Twilight|TCE|2",
				"Steps of Night|Cleric||Twilight|TCE|6",
				"Divine Strike|Cleric||Twilight|TCE|8",
				"Blessed Strikes|Cleric||Twilight|TCE|8|TCE",
				"Twilight Shroud|Cleric||Twilight|TCE|17"
			]
		},
		{
			"name": "Fate Domain (UA)",
			"shortName": "Fate (UA)",
			"source": "UA2022WondersOfTheMultiverse",
			"className": "Cleric",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"prepared": {
						"1": [
							"dissonant whispers",
							"heroism"
						],
						"3": [
							"see invisibility",
							"warding bond"
						],
						"5": [
							"beacon of hope",
							"clairvoyance"
						],
						"7": [
							"death ward",
							"divination"
						],
						"9": [
							"commune",
							"geas"
						]
					}
				}
			],
			"subclassFeatures": [
				"Fate Domain (UA)|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1",
				"Channel Divinity: Strands of Fate|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|2",
				"Insightful Striking|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|6",
				"Potent Spellcasting|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|8",
				"Blessed Strikes|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|8|UAClassFeatureVariants",
				"Blessed Strikes|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|8|TCE",
				"Visions of the Future|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|17"
			]
		}
	],
	"classFeature": [
		{
			"name": "Cantrip Versatility",
			"source": "UAClassFeatureVariants",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level cleric feature (enhances Spellcasting)}",
				"Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the cleric spell list."
			]
		},
		{
			"name": "Divine Domain",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Choose one domain related to your deity from the list of available domains. Each domain is detailed in their own feature, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.",
				{
					"type": "entries",
					"name": "Domain Spells",
					"entries": [
						"Each domain has a list of spells\u2014its domain spells\u2014that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
						"If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
					]
				}
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"As a conduit for divine power, you can cast cleric spells. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for a selection of {@filter cleric spells|spells|class=cleric}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table."
					]
				},
				{
					"type": "entries",
					"name": "Preparing and Casting Spells",
					"entries": [
						"The Cleric table shows how many spell slots you have to cast your {@filter cleric spells|spells|class=cleric} of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell {@spell cure wounds}, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
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
				},
				{
					"type": "entries",
					"name": "Ritual Casting",
					"entries": [
						"You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Focus",
					"entries": [
						"You can use a {@item holy symbol|phb} as a spellcasting focus for your cleric spells."
					]
				}
			]
		},
		{
			"name": "Channel Divinity",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
				"When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
				"Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
				"Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.",
				{
					"type": "refClassFeature",
					"classFeature": "Channel Divinity: Turn Undead|Cleric||2"
				}
			]
		},
		{
			"name": "Channel Divinity: Harness Divine Power",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level cleric {@variantrule optional class features|tce|optional feature}}",
				"You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 2nd level, once; 6th level, twice; and 18th level, thrice. You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Harness Divine Power",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level cleric feature (enhances Channel Divinity)}",
				"You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended 1st-level spell slot."
			]
		},
		{
			"name": "Channel Divinity: Turn Undead",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
				"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the {@action Dodge} action."
			]
		},
		{
			"name": "Divine Domain feature",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you gain a feature from your Divine Domain."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Cantrip Versatility",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level cleric {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the {@filter cleric spell list|spells|level=0|class=Cleric}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Cleric",
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
			"name": "Destroy Undead (CR 1/2)",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Starting at 5th level, when an {@filter undead of CR 1/2 or lower|bestiary|challenge rating=[&0;&1/2]|type=undead|miscellaneous=!swarm} fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
			]
		},
		{
			"name": "Channel Divinity",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"Beginning at 6th level, you can use your Channel Divinity twice between rests."
			]
		},
		{
			"name": "Divine Domain feature",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature from your Divine Domain."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Destroy Undead (CR 1)",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"Starting at 8th level, when an {@filter undead of CR 1 or lower|bestiary|challenge rating=[&0;&1]|type=undead|miscellaneous=!swarm} fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
			]
		},
		{
			"name": "Divine Domain feature",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"At 8th level, you gain a feature from your Divine Domain."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Cleric",
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
			"name": "Divine Intervention",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
				"Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
				"At 20th level, your call for intervention succeeds automatically, no roll required."
			]
		},
		{
			"name": "Destroy Undead (CR 2)",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"Starting at 11th level, when an {@filter undead of CR 2 or lower|bestiary|challenge rating=[&0;&2]|type=undead|miscellaneous=!swarm} fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
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
			"className": "Cleric",
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
			"name": "Destroy Undead (CR 3)",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"Starting at 14th level, when an {@filter undead of CR 3 or lower|bestiary|challenge rating=[&0;&3]|type=undead|miscellaneous=!swarm} fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
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
			"className": "Cleric",
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
			"name": "Destroy Undead (CR 4)",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"Starting at 17th level, when an {@filter undead of CR 4 or lower|bestiary|challenge rating=[&0;&4]|type=undead|miscellaneous=!swarm} fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
			]
		},
		{
			"name": "Divine Domain feature",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you gain a feature from your Divine Domain."
			]
		},
		{
			"name": "Channel Divinity",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"Beginning at 18th level, you can use your Channel Divinity three times between rests."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
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
			"className": "Cleric",
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
			"name": "Divine Intervention Improvement",
			"source": "PHB",
			"page": 56,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, your call for intervention succeeds automatically, no roll required."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Death Domain",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 1,
			"entries": [
				"The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as {@deity Chemosh|Dragonlance}, {@deity Myrkul}, and {@deity Wee Jas|Greyhawk} are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder ({@deity Anubis|Egyptian}, {@deity Bhaal}, and Pyremius), pain ({@deity Iuz|Greyhawk} or {@deity Loviatar}), disease or poison ({@deity Incabulos|Greyhawk}, {@deity Talona}, or {@deity Morgion|Dragonlance}), and the underworld ({@deity Hades|Greek} and {@deity Hel|Norse}).",
				"At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
				{
					"type": "table",
					"caption": "Death Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell false life}, {@spell ray of sickness}"
						],
						[
							"3rd",
							"{@spell blindness/deafness}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell animate dead}, {@spell vampiric touch}"
						],
						[
							"7th",
							"{@spell blight}, {@spell death ward}"
						],
						[
							"9th",
							"{@spell antilife shell}, {@spell cloudkill}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Death|DMG|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Reaper|Cleric||Death|DMG|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 1,
			"header": 1,
			"entries": [
				"When the cleric chooses this domain at 1st level, he or she gains proficiency with martial weapons."
			]
		},
		{
			"name": "Reaper",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, the cleric learns one {@filter necromancy cantrip|spells|level=0|school=N} of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other."
			]
		},
		{
			"name": "Channel Divinity: Touch of Death",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, the cleric can use Channel Divinity to destroy another creature's life force by touch.",
				"When the cleric hits a creature with a melee attack, the cleric can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice his or her cleric level."
			]
		},
		{
			"name": "Inescapable Destruction",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, the cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the character's cleric spells and Channel Divinity options ignores resistance to necrotic damage."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra {@damage 1d8} necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Improved Reaper",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, when the cleric casts a Necromancy spell of 1st through 5th-level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, the cleric must provide them for each target."
			]
		},
		{
			"name": "Knowledge Domain",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"The gods of knowledge\u2014including {@deity Oghma}, {@deity Boccob|Greyhawk}, {@deity Gilean|Dragonlance}, {@deity Aureon|Eberron}, and {@deity Thoth|Egyptian}\u2014value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like {@deity Gond}, {@deity Reorx|Dragonlance}, {@deity Onatar|Eberron}, {@deity Moradin|Nonhuman}, {@deity Hephaestus|Greek}, and {@deity Goibhniu|Celtic}.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Knowledge Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell command}, {@spell identify}"
						],
						[
							"3rd",
							"{@spell augury}, {@spell suggestion}"
						],
						[
							"5th",
							"{@spell nondetection}, {@spell speak with dead}"
						],
						[
							"7th",
							"{@spell arcane eye}, {@spell confusion}"
						],
						[
							"9th",
							"{@spell legend lore}, {@spell scrying}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessings of Knowledge|Cleric||Knowledge||1"
				}
			]
		},
		{
			"name": "Blessings of Knowledge",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: {@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion}.",
				"Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
			]
		},
		{
			"name": "Channel Divinity: Knowledge of the Ages",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
			]
		},
		{
			"name": "Channel Divinity: Read Thoughts",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
				"As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
				"If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.",
				"During that time, you can use your action to end this effect and cast the {@spell suggestion} spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Visions of the Past",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain {@status concentration} during that time, as if you were casting a spell.",
				"Once you use this feature, you can't use it again until you finish a short or long rest.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Object Reading",
							"entries": [
								"Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Area Reading",
							"entries": [
								"As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation."
							]
						}
					]
				}
			]
		},
		{
			"name": "Life Domain",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"The Life domain focuses on the vibrant positive energy\u2014one of the fundamental forces of the universe\u2014that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as {@deity Chauntea}, {@deity Arawai|Eberron}, and {@deity Demeter|Greek}), sun gods (such as {@deity Lathander}, {@deity Pelor|Greyhawk}, and {@deity Re-Horakhty|Egyptian}), gods of healing or endurance (such as {@deity Ilmater}, {@deity Mishakal|Dragonlance}, {@deity Apollo|Greek}, and {@deity Diancecht|Celtic}), and gods of home and community (such as {@deity Hestia|Greek}, {@deity Hathor|Egyptian}, and {@deity Boldrei|Eberron}).",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Life Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bless}, {@spell cure wounds}"
						],
						[
							"3rd",
							"{@spell lesser restoration}, {@spell spiritual weapon}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell revivify}"
						],
						[
							"7th",
							"{@spell death ward}, {@spell guardian of faith}"
						],
						[
							"9th",
							"{@spell mass cure wounds}, {@spell raise dead}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Life||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Disciple of Life|Cleric||Life||1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Disciple of Life",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Channel Divinity: Preserve Life",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
				"As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
			]
		},
		{
			"name": "Blessed Healer",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} radiant damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Supreme Healing",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring {@dice 2d6} hit points to a creature, you restore 12."
			]
		},
		{
			"name": "Light Domain",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods of light\u2014including {@deity Helm}, {@deity Lathander}, {@deity Pholtus|Greyhawk}, {@deity Branchala|Dragonlance}, {@deity the Silver Flame|Eberron}, {@deity Belenus|Celtic}, {@deity Apollo|Greek}, and {@deity Re-Horakhty|Egyptian}\u2014promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Light Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell burning hands}, {@spell faerie fire}"
						],
						[
							"3rd",
							"{@spell flaming sphere}, {@spell scorching ray}"
						],
						[
							"5th",
							"{@spell daylight}, {@spell fireball}"
						],
						[
							"7th",
							"{@spell guardian of faith}, {@spell wall of fire}"
						],
						[
							"9th",
							"{@spell flame strike}, {@spell scrying}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrip|Cleric||Light||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warding Flare|Cleric||Light||1"
				}
			]
		},
		{
			"name": "Bonus Cantrip",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain the {@spell light} cantrip if you don't already know it. This cantrip doesn't count against the number of cleric cantrips you know."
			]
		},
		{
			"name": "Warding Flare",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be {@condition blinded} is immune to this feature.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Radiance of the Dawn",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.",
				"As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to {@dice 2d10} + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected."
			]
		},
		{
			"name": "Improved Flare",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Corona of Light",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage."
			]
		},
		{
			"name": "Nature Domain",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as {@deity Silvanus}, {@deity Obad-Hai|Greyhawk}, {@deity Chislev|Dragonlance}, {@deity Balinor|Eberron}, and {@deity Pan|Greek}) to friendly deities associated with particular springs and groves (such as {@deity Eldath}). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Nature Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell animal friendship}, {@spell speak with animals}"
						],
						[
							"3rd",
							"{@spell barkskin}, {@spell spike growth}"
						],
						[
							"5th",
							"{@spell plant growth}, {@spell wind wall}"
						],
						[
							"7th",
							"{@spell dominate beast}, {@spell grasping vine}"
						],
						[
							"9th",
							"{@spell insect plague}, {@spell tree stride}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Acolyte of Nature|Cleric||Nature||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Nature||1"
				}
			]
		},
		{
			"name": "Acolyte of Nature",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn one druid cantrip of your choice. This cantrip doesn't count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Nature}, or {@skill Survival}."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Channel Divinity: Charm Animals and Plants",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.",
				"As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is {@condition charmed} by you for 1 minute or until it takes damage. While it is {@condition charmed} by you, it is friendly to you and other creatures you designate."
			]
		},
		{
			"name": "Dampen Elements",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Master of Nature",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to command animals and plant creatures. While creatures are {@condition charmed} by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
			]
		},
		{
			"name": "Tempest Domain",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods whose portfolios include the Tempest domain\u2014including {@deity Talos}, {@deity Umberlee}, {@deity Kord|Greyhawk}, {@deity Zeboim|Dragonlance}, {@deity the Devourer|Eberron}, {@deity Zeus|Greek}, and {@deity Thor|Norse}\u2014govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Tempest Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell fog cloud}, {@spell thunderwave}"
						],
						[
							"3rd",
							"{@spell gust of wind}, {@spell shatter}"
						],
						[
							"5th",
							"{@spell call lightning}, {@spell sleet storm}"
						],
						[
							"7th",
							"{@spell control water}, {@spell ice storm}"
						],
						[
							"9th",
							"{@spell destructive wave}, {@spell insect plague}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Tempest||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wrath of the Storm|Cleric||Tempest||1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Wrath of the Storm",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes {@damage 2d8} lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Destructive Wrath",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.",
				"When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling."
			]
		},
		{
			"name": "Thunderbolt Strike",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} thunder damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Stormborn",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors."
			]
		},
		{
			"name": "Trickery Domain",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods of trickery\u2014such as {@deity Tymora}, {@deity Beshaba}, {@deity Olidammara|Greyhawk}, {@deity the Traveler|Eberron}, {@deity Garl Glittergold|Nonhuman}, and {@deity Loki|Norse}\u2014are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Trickery Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell charm person}, {@spell disguise self}"
						],
						[
							"3rd",
							"{@spell mirror image}, {@spell pass without trace}"
						],
						[
							"5th",
							"{@spell blink}, {@spell dispel magic}"
						],
						[
							"7th",
							"{@spell dimension door}, {@spell polymorph}"
						],
						[
							"9th",
							"{@spell dominate person}, {@spell modify memory}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessing of the Trickster|Cleric||Trickery||1"
				}
			]
		},
		{
			"name": "Blessing of the Trickster",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity ({@skill Stealth}) checks. This blessing lasts for 1 hour or until you use this feature again."
			]
		},
		{
			"name": "Channel Divinity: Invoke Duplicity",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
				"As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
				"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
			]
		},
		{
			"name": "Channel Divinity: Cloak of Shadows",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 6th level, you can use your Channel Divinity to vanish.",
				"As an action, you become {@condition invisible} until the end of your next turn. You become visible if you attack or cast a spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with poison\u2014a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} poison damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Improved Duplicity",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
			]
		},
		{
			"name": "War Domain",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as {@deity Torm}, {@deity Heironeous|Greyhawk}, and {@deity Kiri-Jolith|Dragonlance}) as well as gods of destruction and pillage (such as {@deity Erythnul|Greyhawk}, {@deity the Fury|Eberron}, {@deity Gruumsh|Nonhuman}, and {@deity Ares|Greek}) and gods of conquest and domination (such as {@deity Bane}, {@deity Hextor|Greyhawk}, and {@deity Maglubiyet|Nonhuman}). Other war gods (such as {@deity Tempus}, {@deity Nike|Greek}, and {@deity Nuada|Celtic}) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "War Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell divine favor}, {@spell shield of faith}"
						],
						[
							"3rd",
							"{@spell magic weapon}, {@spell spiritual weapon}"
						],
						[
							"5th",
							"{@spell crusader's mantle}, {@spell spirit guardians}"
						],
						[
							"7th",
							"{@spell freedom of movement}, {@spell stoneskin}"
						],
						[
							"9th",
							"{@spell flame strike}, {@spell hold monster}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||War||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "War Priest|Cleric||War||1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "War Priest",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the {@action Attack} action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Guided Strike",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Channel Divinity: War God's Blessing",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Avatar of Battle",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
			]
		},
		{
			"name": "Ambition Domain (PSA)",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall strive for greatness\u2014supremacy in life leads to supremacy in the afterlife.\"",
				"Bontu has fully embraced this dictum, and though she expends little effort in teaching it, she surely leads by example. Her viziers subtly plant the seeds that flower into the ambition the God-Pharaoh desires. Through insinuation, they remind acolytes and initiates alike that achieving one's place in the afterlife at the expense of others is not shameful, but is proof of the initiate's determination and drive. Nothing is more important than that drive, they suggest\u2014not the bonds of a crop, not friendship or love. Not even devotion to a deity.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Ambition Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bane}, {@spell disguise self}"
						],
						[
							"3rd",
							"{@spell mirror image}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell bestow curse}, {@spell vampiric touch}"
						],
						[
							"7th",
							"{@spell death ward}, {@spell dimension door}"
						],
						[
							"9th",
							"{@spell dominate person}, {@spell modify memory}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warding Flare|Cleric||Ambition (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Warding Flare",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be {@condition blinded} is immune to this feature.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Invoke Duplicity",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
				"As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
				"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
			]
		},
		{
			"name": "Channel Divinity: Cloak of Shadows",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 6th level, you can use your Channel Divinity to vanish. As an action, you become {@condition invisible} until the end of your next turn. You become visible if you attack or cast a spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Improved Duplicity",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
			]
		},
		{
			"name": "Knowledge Domain (PSA)",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall cultivate a nimble mind that can perceive the wonders beyond imagination that wait in the afterlife.\"",
				"Kefnet's task is to pass on this teaching of the God-Pharaoh and elucidate its meaning. He teaches that the afterlife will be inhabited only by those who have proved by their wits that they are worthy of dwelling in the glorious presence of the God-Pharaoh. He trains acolytes and initiates to push their limits and challenge their mental capacity with spells of ever-greater power.",
				"Kefnet's domain is identical to the Knowledge domain in the Player's Handbook."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Solidarity Domain (PSA)",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy must know and respect all others whom the God-Pharaoh deems worthy, for in the afterlife, all will be united in purpose and action.\"",
				"Oketra is charged with expounding upon this teaching of the God-Pharaoh, instilling in every initiate the virtue of solidarity. She forges each group of children into a crop of acolytes with just one purpose: to be judged worthy of a glorious afterlife. And she instills in each crop the ability to unite in a single action in pursuit of that purpose. She is fond of poetic imagery to communicate her ideals.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Solidarity Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bless}, {@spell guiding bolt}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell crusader's mantle}"
						],
						[
							"7th",
							"{@spell aura of life}, {@spell guardian of faith}"
						],
						[
							"9th",
							"{@spell circle of power}, {@spell mass cure wounds}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Solidarity (PSA)|PSA|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Solidarity's Action|Cleric||Solidarity (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Solidarity's Action",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, when you take the {@action Help} action to aid an ally's attack, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Preserve Life",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
				"As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
			]
		},
		{
			"name": "Oketra's Blessing",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Supreme Healing",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring {@dice 2d6} hit points to a creature, you restore 12."
			]
		},
		{
			"name": "Strength Domain (PSA)",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall hone a strong body that can withstand the boundless energies of the afterlife.\"",
				"It falls to Rhonas to instill this teaching in those who would enter the afterlife\u2014but to his mind, the words themselves don't matter. Strength can't be taught. It must be built through practice and training. Rhonas demonstrates his teachings by his example, rather than by giving his students any kind of academic instruction. He welcomes the people of Naktamun to stand by the Hekma and watch him as he storms into the desert to battle the greatest horrors. He encourages them to observe his indomitable strength, for though they will never equal it, they can aspire to mimicry. He invites them to scrutinize every move and practice what they see.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Strength Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell divine favor}, {@spell shield of faith}"
						],
						[
							"3rd",
							"{@spell enhance ability}, {@spell protection from poison}"
						],
						[
							"5th",
							"{@spell haste}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell dominate beast}, {@spell stoneskin}"
						],
						[
							"9th",
							"{@spell destructive wave}, {@spell insect plague}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Acolyte of Strength|Cleric||Strength (PSA)|PSA|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Strength (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Acolyte of Strength",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Athletics}, {@skill Nature}, or {@skill Survival}."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Channel Divinity: Feat of Strength",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"At 2nd level, you can use your Channel Divinity to enhance your physical might. When you make an attack roll, ability check, or saving throw using Strength, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fails."
			]
		},
		{
			"name": "Rhonas's Blessing",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when a creature within 30 feet of you makes an attack roll, ability check, or saving throw using Strength, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fail."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Avatar of Battle",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
			]
		},
		{
			"name": "Zeal Domain (PSA)",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall rush to the God-Pharaoh's side with relentless zeal, rising to overcome every obstacle in their way.\"",
				"The God-Pharaoh expects those he welcomes into the afterlife to desire it above all other pleasures and achievements, and for them to show their dedication, passion, and fervor through their actions. Hazoret is charged with cultivating this zeal in the initiates who come under her care, and she has undertaken the task with appropriate enthusiasm. She recognizes, however, that the best way to teach zeal is by demonstrating it.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Zeal Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell searing smite}, {@spell thunderous smite}"
						],
						[
							"3rd",
							"{@spell magic weapon}, {@spell shatter}"
						],
						[
							"5th",
							"{@spell haste}, {@spell fireball}"
						],
						[
							"7th",
							"{@spell fire shield||fire shield (warm shield only)}, {@spell freedom of movement}"
						],
						[
							"9th",
							"{@spell destructive wave}, {@spell flame strike}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Zeal (PSA)|PSA|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Priest of Zeal|Cleric||Zeal (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Priest of Zeal",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, Hazoret delivers bolts of inspiration to you while you are engaged in battle. When you use the {@action Attack} action, you can make one weapon attack as a bonus action.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Consuming Fervor",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to channel your zeal into unchecked ferocity.",
				"When you roll fire or thunder damage, you can use your Channel Divinity to deal maximum damage instead of rolling."
			]
		},
		{
			"name": "Resounding Strike",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when you deal thunder damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Blaze of Glory",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can delay death for an instant to perform a final heroic act.",
				"When you are reduced to 0 hit points by an attacker you can see, even if you would be killed outright, you can use your reaction to move up to your speed toward the attacker and make one melee weapon attack against it, as long as the movement brings it within your reach. You make this attack with advantage. If the attack hits, the creature takes an extra {@damage 5d10} fire damage and an extra {@damage 5d10} damage of the weapon's type. You then fall {@condition unconscious} and begin making death saving throws as normal, or you die if the damage you took would have killed you outright.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Arcana Domain",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 1,
			"entries": [
				"Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.",
				"The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include {@deity Azuth|Faerûnian|SCAG} and {@deity Mystra|Faerûnian|SCAG}, as well as {@deity Corellon|Dawn War|DMG} Larethian of the elven pantheon. In other worlds, this domain includes {@deity Hecate|Greek}, {@deity Math Mathonwy|Celtic}, and {@deity Isis|Egyptian}; the triple moon gods of {@deity Solinari|Dragonlance}, {@deity Lunitari|Dragonlance}, and {@deity Nuitari|Dragonlance} of Krynn; and {@deity Boccob|Greyhawk}, {@deity Vecna|Greyhawk}, and {@deity Wee Jas|Greyhawk} of Greyhawk.",
				"At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
				{
					"type": "table",
					"caption": "Arcana Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell detect magic}, {@spell magic missile}"
						],
						[
							"3rd",
							"{@spell magic weapon}, {@spell Nystul's magic aura}"
						],
						[
							"5th",
							"{@spell dispel magic}, {@spell magic circle}"
						],
						[
							"7th",
							"{@spell arcane eye}, {@spell Leomund's secret chest}"
						],
						[
							"9th",
							"{@spell planar binding}, {@spell teleportation circle}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Initiate|Cleric||Arcana|SCAG|1"
				}
			]
		},
		{
			"name": "Arcane Initiate",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency in the {@skill Arcana} skill, and you gain two cantrips of your choice from the {@filter wizard spell list|spells|class=wizard|level=0}. For you, these cantrips count as cleric cantrips."
			]
		},
		{
			"name": "Channel Divinity: Arcane Abjuration",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.",
				"As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
				"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, then the creature can use the {@action Dodge} action.",
				"After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the {@spell banishment} spell, no {@status concentration} required) if it isn't on its plane of origin, and its challenge rating is at or below a certain threshold, as shown below.",
				{
					"type": "table",
					"caption": "Arcane Banishment",
					"colLabels": [
						"Cleric level",
						"Banishes Creatures of CR..."
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"5th",
							"1/2 or lower"
						],
						[
							"8th",
							"1 or lower"
						],
						[
							"11th",
							"2 or lower"
						],
						[
							"14th",
							"3 or lower"
						],
						[
							"17th",
							"4 or lower"
						]
					]
				}
			]
		},
		{
			"name": "Spell Breaker",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Arcane Mastery",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you choose four spells from the Wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you."
			]
		},
		{
			"name": "Order Domain",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The Order Domain represents discipline, as well as devotion to a society or an institution and strict obedience to the laws governing it. On Ravnica, the domain is favored by clerics of the Azorius Senate, who use it to maintain and enforce the law, and of the Orzhov Syndicate, who exploit law and order for their personal gain. On other worlds, gods who grant access to this domain include {@deity Bane}, {@deity Tyr}, {@deity Majere|Dragonlance}, {@deity Erathis|Dawn War|DMG}, {@deity Pholtus|Greyhawk}, {@deity Wee Jas|Greyhawk}, {@deity Aureon|Eberron}, {@deity Maglubiyet|Nonhuman}, {@deity Nuada|Celtic}, {@deity Athena|Greek}, {@deity Anubis|Egyptian}, {@deity Forseti|Norse}, and {@deity Asmodeus|Dawn War|DMG}.",
				"The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their guilds or deities.",
				"Law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Order Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell command}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell hold person}, {@spell zone of truth}"
						],
						[
							"5th",
							"{@spell mass healing word}, {@spell slow}"
						],
						[
							"7th",
							"{@spell compulsion}, {@spell locate creature}"
						],
						[
							"9th",
							"{@spell commune}, {@spell dominate person}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Order|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Voice of Authority|Cleric||Order|TCE|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the {@skill Intimidation} or {@skill Persuasion} skill (your choice)."
			]
		},
		{
			"name": "Voice of Authority",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.",
				"If the spell targets more than one ally, you choose the ally who can make the attack."
			]
		},
		{
			"name": "Channel Divinity: Order's Demand",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.",
				"As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you until the end of your next turn or until the {@condition charmed} creature takes any damage. You can also cause any of the {@condition charmed} creatures to drop what they are holding when they fail the saving throw."
			]
		},
		{
			"name": "Embodiment of the Law",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you become remarkably adept at channeling magical energy to compel others.",
				"If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 31,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 31,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} psychic damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Order's Wrath",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes {@damage 2d8} psychic damage, and the curse ends. You can curse a creature in this way only once per turn."
			]
		},
		{
			"name": "Peace Domain",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain.",
				"Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those who are driven to fight for the way of peace.",
				{
					"type": "table",
					"caption": "Peace Deities",
					"colLabels": [
						"Example Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"{@deity Angharradh|Elven|SCAG}",
							"Elven"
						],
						[
							"{@deity Berronar Truesilver|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Cyrrollalee|Halfling|SCAG}",
							"Halfling"
						],
						[
							"{@deity Eldath}",
							"Forgotten Realms"
						],
						[
							"Gaerdal",
							"Ironhand Gnomish"
						],
						[
							"{@deity Paladine|Dragonlance}",
							"Dragonlance"
						],
						[
							"{@deity Rao|Greyhawk}",
							"Greyhawk"
						]
					]
				},
				{
					"name": "Domain Spells",
					"type": "entries",
					"entries": [
						"{@i 1st-level Peace Domain feature}",
						"You gain domain spells at the cleric levels listed in the Peace Domain Spells table. See the Divine Domain class feature for how domain spells work.",
						{
							"type": "table",
							"caption": "Peace Domain Spells",
							"colLabels": [
								"Cleric Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell heroism}, {@spell sanctuary}"
								],
								[
									"3rd",
									"{@spell aid}, {@spell warding bond}"
								],
								[
									"5th",
									"{@spell beacon of hope}, {@spell sending}"
								],
								[
									"7th",
									"{@spell aura of purity}, {@spell Otiluke's resilient sphere}"
								],
								[
									"9th",
									"{@spell greater restoration}, {@spell Rary's telepathic bond}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Implement of Peace|Cleric||Peace|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Emboldening Bond|Cleric||Peace|TCE|1"
				}
			]
		},
		{
			"name": "Emboldening Bond",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Peace Domain feature}",
				"You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a {@dice d4} and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the {@dice d4} no more than once per turn.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Implement of Peace",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Peace Domain feature}",
				"You gain proficiency in the {@skill Insight}, {@skill Performance}, or {@skill Persuasion} skill (your choice)."
			]
		},
		{
			"name": "Channel Divinity: Balm of Peace",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Peace Domain feature}",
				"You can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to {@dice 2d6} + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action."
			]
		},
		{
			"name": "Protective Bond",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Peace Domain feature}",
				"The bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Peace Domain feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Expansive Bond",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Peace Domain feature}",
				"The benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage."
			]
		},
		{
			"name": "Twilight Domain",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night.",
				"Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.",
				{
					"type": "table",
					"caption": "Twilight Deities",
					"colLabels": [
						"Example Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Celestian|Greyhawk}",
							"Greyhawk"
						],
						[
							"{@deity Dol Arrah|Eberron}",
							"Eberron"
						],
						[
							"{@deity Helm}",
							"Forgotten Realms"
						],
						[
							"{@deity Ilmater}",
							"Forgotten Realms"
						],
						[
							"{@deity Mishakal|Dragonlance}",
							"Dragonlance"
						],
						[
							"{@deity Selûne}",
							"Forgotten Realms"
						],
						[
							"{@deity Yondalla|Nonhuman}",
							"Halfling"
						]
					]
				},
				{
					"name": "Domain Spells",
					"type": "entries",
					"entries": [
						"{@i 1st-level Twilight Domain feature}",
						"You gain domain spells at the cleric levels listed in the Twilight Domain Spells table. See the Divine Domain class feature for how domain spells work.",
						{
							"type": "table",
							"caption": "Twilight Domain Spells",
							"colLabels": [
								"Cleric Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell faerie fire}, {@spell sleep}"
								],
								[
									"3rd",
									"{@spell moonbeam}, {@spell see invisibility}"
								],
								[
									"5th",
									"{@spell aura of vitality}, {@spell Leomund's tiny hut}"
								],
								[
									"7th",
									"{@spell aura of life}, {@spell greater invisibility}"
								],
								[
									"9th",
									"{@spell circle of power}, {@spell mislead}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Twilight|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of Night|Cleric||Twilight|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Vigilant Blessing|Cleric||Twilight|TCE|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"You gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Eyes of Night",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"You can see through the deepest gloom. You have {@sense darkvision} out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.",
				"As an action, you can magically share the {@sense darkvision} of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared {@sense darkvision} lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again."
			]
		},
		{
			"name": "Vigilant Blessing",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again."
			]
		},
		{
			"name": "Channel Divinity: Twilight Sanctuary",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Twilight Domain feature}",
				"You can use your Channel Divinity to refresh your allies with soothing twilight.",
				"As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are {@condition incapacitated} or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:",
				{
					"type": "list",
					"items": [
						"You grant it temporary hit points equal to {@dice 1d6} plus your cleric level.",
						"You end one effect on it causing it to be {@condition charmed} or {@condition frightened}."
					]
				}
			]
		},
		{
			"name": "Steps of Night",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Twilight Domain feature}",
				"You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Twilight Domain feature}",
				"You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} radiant damage. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Twilight Shroud",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Twilight Domain feature}",
				"The twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary."
			]
		},
		{
			"name": "Love Domain (UA)",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"entries": [
				"{@note Note: The Love domain was included in a leaked pre-release version of {@i Unearthed Arcana 2020 Subclasses, Part 2}, and superseded by the Unity domain for the final release.}",
				"Love exists in many forms\u2014compassion, infatuation, friendly affection, and passionate love as a few facets. Whatever form these feelings take, the gods of love deepen the bonds between individuals.",
				{
					"type": "table",
					"caption": "Love Deities",
					"colLabels": [
						"Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"Aengus",
							"Celtic"
						],
						[
							"{@deity Aphrodite|Greek}",
							"Greek"
						],
						[
							"{@deity Balder|Norse}",
							"Norse"
						],
						[
							"{@deity Berronar Truesilver|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Cyrrollalee|Halfling|SCAG}",
							"Halfling"
						],
						[
							"{@deity Freya|Norse}",
							"Norse"
						],
						[
							"{@deity Hanali Celanil|Elven|SCAG}",
							"Elven"
						],
						[
							"{@deity Hathor|Egyptian}",
							"Egyptian"
						],
						[
							"{@deity Mishakal|Dragonlance}",
							"Dragonlance"
						],
						[
							"Myhriss",
							"Greyhawk"
						],
						[
							"{@deity Sharindlar|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Sheyanna Flaxenstrand|Gnome|MTF}",
							"Gnomish"
						],
						[
							"{@deity Sune}",
							"Forgotten Realms"
						]
					]
				},
				"Clerics of these gods preside over marriages and other familial bonding customs, but they also nurture the emotional bonds of friendship and camaraderie. Their divine blessings bolster and protect allies in battle through these deep bonds and enkindle flares of infatuation to spur their allies and confound their foes.",
				{
					"type": "table",
					"caption": "Love Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell charm person}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell enthrall}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell hypnotic pattern}"
						],
						[
							"7th",
							"{@spell aura of purity}, {@spell confusion}"
						],
						[
							"9th",
							"{@spell greater restoration}, {@spell hold monster}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Emboldening Bond|Cleric||Love (UA)|UA2020SubclassesPt2|1"
				}
			]
		},
		{
			"name": "Emboldening Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Love Domain feature}",
				"You can forge an empowering bond between allies. As an action, you can choose two willing creatures you can see within 30 feet of you (this can include yourself) and create a magical bond between them. While either bonded creature is within 30 feet of the other, the creature can roll a {@dice d4} and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the {@dice d4} no more than once per turn. The bond lasts for 1 hour or until you use this feature again.",
				"You can use this feature once, and you regain the ability to do so when you finish a long rest. You can also expend a spell slot to use the feature again."
			]
		},
		{
			"name": "Channel Divinity: Impulsive Infatuation",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Love Domain feature}",
				"You can use your Channel Divinity to overwhelm a creature with a flash of short-lived but intense admiration for you, driving them to rash action in your defense.",
				"As an action, you present your holy symbol and choose one creature you can see within 30 feet of you. That creature must make a Wisdom saving throw; a creature can choose to fail this saving throw if it wishes. On a success, the creature is unaffected. On a failure, the creature is {@condition charmed} by you until the start of your next turn, and it must immediately use its reaction to make a weapon attack against a target you designate. If there are no valid targets, it uses its reaction to admire you."
			]
		},
		{
			"name": "Protective Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Love Domain feature}",
				"The bond you forge between people shields them from harm. While either creature chosen for your Emboldening Bond feature is within 30 feet of the other, the creature can use its reaction to grant resistance to all damage to the other creature when that other creature takes damage. This resistance lasts until the end of the current turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Love Domain feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Enduring Unity",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Love Domain feature}",
				"The bonds you create endure across vast distances. Creatures affected by your Emboldening Bond feature gain its benefits, as well as those of your Protective Bond feature, while they are on the same plane of existence as each other.",
				"Additionally, when a creature chosen for your Emboldening Bond is reduced to 0 hit points, their bonded partner gains the following benefits for 1 minute, or until the creature regains at least 1 hit point:",
				{
					"type": "list",
					"items": [
						"The creature has advantage on attack rolls, ability checks, and saving throws",
						"The creature gains resistance to all damage",
						"As an action, the creature can touch their bonded partner to expend and roll any number of Hit Dice. Their bonded partner regains a number of hit points equal to the total rolled."
					]
				}
			]
		},
		{
			"name": "Unity Domain (UA)",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"entries": [
				"A sense of oneness shines at the heart of healthy communities, whether bound together by friendship, blood, faith, or some other uniting force. The gods of unity deepen such bonds and delight in their strength.",
				"Clerics of these gods preside over marriages and other familial bonding customs, but they also nurture the emotional bonds of friendship and camaraderie. Their divine blessings bolster and protect allies in battle through these deep bonds and turn aside malign influences.",
				{
					"type": "table",
					"caption": "Unity Deities",
					"colLabels": [
						"Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"{@deity Angharradh|Elven|SCAG}",
							"Elven"
						],
						[
							"{@deity Athena|Greek}",
							"Greek"
						],
						[
							"{@deity Berronar Truesilver|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Cyrrollalee|Halfling|SCAG}",
							"Halfling"
						],
						[
							"{@deity Eldath}",
							"Forgotten Realms"
						],
						[
							"{@deity Gaerdal Ironhand|Gnomish|SCAG}",
							"Gnomish"
						],
						[
							"{@deity Heimdall|Norse}",
							"Norse"
						],
						[
							"{@deity Paladine|Dragonlance}",
							"Dragonlance"
						],
						[
							"{@deity Rao|Greyhawk}",
							"Greyhawk"
						]
					]
				},
				{
					"type": "table",
					"caption": "Unity Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell heroism}, {@spell shield of faith}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell sending}"
						],
						[
							"7th",
							"{@spell aura of purity}, {@spell guardian of faith}"
						],
						[
							"9th",
							"{@spell greater restoration}, {@spell Rary's telepathic bond}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Emboldening Bond|Cleric||Unity (UA)|UA2020SubclassesPt2|1"
				}
			]
		},
		{
			"name": "Emboldening Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Unity Domain feature}",
				"You can forge an empowering bond between allies. As an action, you can choose two willing creatures you can see within 30 feet of you (this can include yourself) and create a magical bond between them. While either bonded creature is within 30 feet of the other, the creature can roll a {@dice d4} and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the {@dice d4} no more than once per turn. The bond lasts for 1 hour or until you use this feature again.",
				"You can use this feature once, and you regain the ability to do so when you finish a long rest. You can also expend a spell slot to use the feature again."
			]
		},
		{
			"name": "Channel Divinity: Shared Burden",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Unity Domain feature}",
				"You can use your Channel Divinity to protect your allies through the strength of your shared bonds.",
				"When a creature you can see within 30 feet of you takes damage, you can use your reaction to choose a number of other willing creatures you can see, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). Distribute the damage taken between the original target and the chosen creatures. Each creature must take at least 1 damage. Apply any damage resistance or vulnerability of the creatures involved after you distribute the damage."
			]
		},
		{
			"name": "Protective Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Unity Domain feature}",
				"The bond you forge between people shields them from harm. While either creature chosen for your Emboldening Bond feature is within 30 feet of the other, the creature can use its reaction to grant resistance to all damage to the other creature when that other creature takes damage. This resistance lasts until the end of the current turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Unity Domain feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Enduring Unity",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Unity Domain feature}",
				"The bonds you create endure across vast distances. Creatures affected by your Emboldening Bond feature gain its benefits, as well as those of your Protective Bond feature, while they are on the same plane of existence as each other.",
				"Additionally, when a creature chosen for your Emboldening Bond is reduced to 0 hit points, their bonded partner gains the following benefits for 1 minute, or until the creature regains at least 1 hit point:",
				{
					"type": "list",
					"items": [
						"The creature has advantage on attack rolls, ability checks, and saving throws",
						"The creature gains resistance to all damage",
						"As an action, the creature can touch their bonded partner to expend and roll any number of Hit Dice. Their bonded partner regains a number of hit points equal to the total rolled."
					]
				}
			]
		},
		{
			"name": "Fate Domain (UA)",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"entries": [
				"Gods of fate perceive the future and how the choices mortals make drive them toward their destinies. Some deities consider the future preordained, while others understand the multiverse as a place of infinite possibility. Clerics who draw power from the forces of fate sometimes receive visions directly from their deity and receive fleeting omens of the future. They share impossible knowledge with their allies and prophesize their enemies' doom.",
				{
					"type": "table",
					"caption": "Fate Domain Deities",
					"colLabels": [
						"Example Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"Savras",
							"Forgotten Realms"
						],
						[
							"Istus",
							"Greyhawk"
						],
						[
							"Gilean",
							"Dragonlance"
						],
						[
							"Labelas Enorath",
							"Elven"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Domain Spells|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Omens and Portents|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ties That Bind|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1"
				}
			]
		},
		{
			"name": "Domain Spells",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fate Domain Feature}",
				"You gain domain spells at the cleric levels listed on the Fate Domain Spells table. See the Divine Domain class feature for how domain spells work.",
				{
					"type": "table",
					"caption": "Fate Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Domain Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell dissonant whispers}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell see invisibility}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell clairvoyance}"
						],
						[
							"7th",
							"{@spell death ward}, {@spell divination}"
						],
						[
							"9th",
							"{@spell commune}, {@spell geas}"
						]
					]
				}
			]
		},
		{
			"name": "Omens and Portents",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fate Domain Feature}",
				"You can perceive signs of the future in everyday objects and events, such as flights of birds or ripples made in water by a thrown stone. You can cast the {@spell augury} spell without expending a spell slot and, when you cast the spell in this way, the spell has no verbal, somatic, or material components. Once you cast the spell in this way, you cannot do so again until you finish a long rest.",
				"In addition, until you finish a long rest, when you cast a divination spell that includes a chance the DM gives you no answer or a random reading\u2014such as augury, commune, or divination\u2014reduce that chance by 25 percent."
			]
		},
		{
			"name": "Ties That Bind",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fate Domain Feature}",
				"You can temporarily tie your fate to others. As an action, you can touch one object or creature and magically tie a strand of fate from yourself to it for 1 hour or until you use this feature again. An unwilling creature must succeed on a Wisdom saving throw against your spell save DC to resist this effect. While the target is bound to you and on the same plane of existence as you, you can sense the direction to the target's location, and you know the direction of its movement if it is in motion.",
				"In addition, once per turn when you cast a spell using a spell slot to deal damage or restore hit points to the target, roll a {@dice d6}, and the target receives extra damage or healing, respectively, equal to the number rolled.",
				"You can use this feature's action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Strands of Fate",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 2,
			"header": 2,
			"entries": [
				"{@i 2nd-level Fate Domain Feature}",
				"You can use your Channel Divinity to see and manipulate the strands of fate that weave around other individuals. As a bonus action, you can enter this state for up to 1 minute or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). For the duration, whenever another creature you can see makes an attack roll or an ability check, you can use a reaction to give the roll advantage or disadvantage (your choice)."
			]
		},
		{
			"name": "Insightful Striking",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Fate Domain Feature}",
				"As a bonus action, you can choose one creature you can see within 30 feet of yourself. Your magic grants you a brief vision of the target's defenses. Until the end of your next turn, you gain one of the following effects of your choice:",
				{
					"type": "list",
					"items": [
						"The next time you make an attack roll against the target, roll a {@dice d6} and add the number rolled to the total.",
						"The next time the target must make a saving throw against a spell you cast, the target must roll a {@dice d6} and subtract the number rolled from the saving throw."
					]
				},
				"You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 8,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Fate Domain Feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Visions of the Future",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Fate Domain Feature}",
				"Your knowledge of the future allows you to guide an individual to achieve their greatest possible success. You can cast the {@spell foresight} spell once without expending a spell slot; when you cast the spell in this way, the spell's duration is 1 minute for that casting. Once you cast the spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Forge Domain (UA)",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"entries": [
				"The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can transform from a lump of ore to a beautifully wrought object. Clerics of these deities quest to search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include {@deity Gond}, {@deity Reorx|Dragonlance}, {@deity Onatar|Eberron}, {@deity Moradin|Nonhuman}, {@deity Hephaestus|Greek}, and {@deity Goibhniu|Celtic}.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Forge Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell searing smite}, {@spell shield}"
						],
						[
							"3rd",
							"{@spell heat metal}, {@spell magic weapon}"
						],
						[
							"5th",
							"{@spell elemental weapon}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell fabricate}, {@spell wall of fire}"
						],
						[
							"9th",
							"{@spell animate objects}, {@spell creation}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Forge (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessing of the Forge|Cleric||Forge (UA)|UAClericDivineDomains|1"
				}
			]
		},
		{
			"name": "Blessing of the Forge",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, touch one nonmagical object that is a suit of armor or a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}. Until the end of your next long rest, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Channel Divinity: Artisan's Blessing",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create simple items.",
				"Starting at the beginning of a short rest, you conduct a ritual to your deity that grants you the ability to craft a finished item that is at least part metal. The item is completed at the end of the rest.",
				"The object can be worth no more than 100 gp, and as part of this ritual you must expend metals, such as coins or other finished items, with a value equal to the item you want to make. The item can be an exact duplicate of a nonmagical item, such as a copy of a key, if you possess the original during your short rest."
			]
		},
		{
			"name": "Soul of the Forge",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your mastery of the forge grants you a number of special abilities:",
				{
					"type": "list",
					"items": [
						"You gain a +1 bonus to AC while you are wearing medium or heavy armor.",
						"You gain resistance to fire damage.",
						"When you hit a construct with an attack, you deal additional force damage to it equal to your cleric level."
					]
				}
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} fire damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Saint of Forge and Fire",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, your affinity for fire and metal becomes more powerful due to your deity's blessing. You gain immunity to fire damage, and while you're wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
			]
		},
		{
			"name": "Grave Domain (UA)",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"entries": [
				"Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse's workings. To resist death, or to desecrate the dead's rest, is an abomination. Deities of the grave include {@deity Kelemvor}, {@deity Wee Jas|Greyhawk}, the ancestral spirits of {@deity the Undying Court|Eberron}, {@deity Hades|Greek}, {@deity Anubis|Egyptian}, and {@deity Osiris|Egyptian}. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature's death, though they refuse to use such magic to extend a creature's lifespan beyond its mortal limits.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Grave Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bane}, {@spell false life}"
						],
						[
							"3rd",
							"{@spell gentle repose}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell revivify}, {@spell vampiric touch}"
						],
						[
							"7th",
							"{@spell blight}, {@spell death ward}"
						],
						[
							"9th",
							"{@spell antilife shell}, {@spell raise dead}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Grave (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle of Mortality|Cleric||Grave (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of the Grave|Cleric||Grave (UA)|UAClericDivineDomains|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Circle of Mortality",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to manipulate the line between life and death. When you cast a spell that restores hit points to a living creature currently at 0, treat any dice rolled to determine the spell's healing as having rolled their maximum result. In addition, if you have the {@spell spare the dying} cantrip, you can cast it as a bonus action."
			]
		},
		{
			"name": "Eyes of the Grave",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain an innate sense of creatures whose existence is an insult to the natural cycle of life. If you spend 1 minute in uninterrupted contemplation, you can determine the presence and nature of undead creatures in the area. This detection extends up to 1 mile in all directions. You learn the number of undead and their distance and direction from you. In addition, you learn the creature type of the undead in that area that has the highest challenge rating.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Path to the Grave",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination.",
				"As an action, you touch a creature. The next time that creature takes damage from a spell or an attack from you or an ally, it is vulnerable to that spell or attack's damage. If the source of damage has multiple damage types, the creature is vulnerable to all of them. The vulnerability applies only to the first time that source inflicts damage, and then ends.",
				"If the creature has resistance or is immune to the damage, it instead loses its resistance or immunity against that spell or attack when it first applies damage."
			]
		},
		{
			"name": "Sentinel at Death's Door",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you gain the ability to impede death's progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} necrotic damage. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Keeper of Souls",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to manipulate the boundary between life and death. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature as long as you aren't {@condition incapacitated}, but no more than once per round."
			]
		},
		{
			"name": "Protection Domain (UA)",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"entries": [
				"The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods' faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat. These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind. Deities who grant this domain include {@deity Helm}, {@deity Ilmater}, {@deity Torm}, {@deity Tyr}, {@deity Heironeous|Greyhawk}, {@deity St. Cuthbert|Greyhawk}, {@deity Paladine|Dragonlance}, {@deity Dol Dorn|Eberron}, {@deity the Silver Flame|Eberron}, {@deity Bahamut|Nonhuman}, {@deity Yondalla|Nonhuman}, {@deity Athena|Greek}, and {@deity Odin|Norse}.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Protection Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell compelled duel}, {@spell protection from evil and good}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell protection from poison}"
						],
						[
							"5th",
							"{@spell protection from energy}, {@spell slow}"
						],
						[
							"7th",
							"{@spell guardian of faith}, {@spell Otiluke's resilient sphere}"
						],
						[
							"9th",
							"{@spell antilife shell}, {@spell wall of force}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Protection (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Shield of the Faithful|Cleric||Protection (UA)|UAClericDivineDomains|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Shield of the Faithful",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target."
			]
		},
		{
			"name": "Channel Divinity: Radiant Defense",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor.",
				"As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to {@dice 2d10} + your cleric level."
			]
		},
		{
			"name": "Blessed Healer",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the healing spells you cast on others can heal you as well. When you cast a spell with a spell slot and it restores hit points to any creature other than you this turn, you regain hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} radiant damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Indomitable Defense",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose.",
				"As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action."
			]
		},
		{
			"name": "Twilight Domain (UA)",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"entries": [
				"The Twilight Domain governs the transition and blending of light into darkness. It is a time of rest and comfort, but also the threshold between safety and the unknown. Deities of healing or respite (such as {@deity Boldrei|Eberron}, {@deity Hestia|Greek}, {@deity Mishakal|Dragonlance}, or {@deity Pelor|Greyhawk}), bravery or protection (such as {@deity Dol Arrah|Eberron}, Hajama, {@deity Helm}, or {@deity Ilmater}), travel or transition (such as {@deity Fharlanghn|Greyhawk}, {@deity Hermes|Greek}, {@deity the Raven Queen|Exandria|EGW}, or {@deity the Traveler|Eberron}), or the night and dreams (such as {@deity Celestian|Greyhawk}, Morpheus, Nut, or {@deity Selûne}) might grant their clerics the Twilight Domain. Clerics who serve these deities tend to be brave, delving into the dark to hold its dangers at bay and to bring comfort to those lost far from the light.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Twilight Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell faerie fire}, {@spell sleep}"
						],
						[
							"3rd",
							"{@spell darkness}, {@spell invisibility}"
						],
						[
							"5th",
							"{@spell aura of vitality}, {@spell Leomund's tiny hut}"
						],
						[
							"7th",
							"{@spell aura of life}, {@spell greater invisibility}"
						],
						[
							"9th",
							"{@spell circle of power}, {@spell dream}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Twilight (UA)|UAClericDruidWizard|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of Night|Cleric||Twilight (UA)|UAClericDruidWizard|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Vigilant Blessing|Cleric||Twilight (UA)|UAClericDruidWizard|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"You gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Eyes of Night",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"Your eyes are blessed, allowing you to see through the deepest gloom. You have {@sense darkvision} with no maximum range; you can see in dim light as if it were bright light and in darkness as if it were dim light.",
				"As an action, you can magically give the benefit of this feature to any number of creatures you can see within 10 feet of you. The shared benefit lasts for 10 minutes. You can extend this benefit a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Vigilant Blessing",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again."
			]
		},
		{
			"name": "Channel Divinity: Twilight Sanctuary",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Twilight Domain feature}",
				"You can use your Channel Divinity to refresh your allies with soothing twilight.",
				"As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are {@condition incapacitated} or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:",
				{
					"type": "list",
					"items": [
						"Give it {@dice 1d8} temporary hit points.",
						"End one effect causing it to be {@condition charmed} or {@condition frightened}."
					]
				}
			]
		},
		{
			"name": "Steps of the Brave",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Twilight Domain feature}",
				"You draw strength from your connection to twilight and find yourself at home within its dark embrace, gaining two benefits:",
				{
					"type": "list",
					"items": [
						"You have advantage on saving throws against being {@condition frightened}.",
						"If you are in dim light or darkness, you can use a bonus action to magically give yourself a flying speed equal to your walking speed until the end of your next turn."
					]
				}
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Twilight Domain feature}",
				"You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} psychic damage. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Midnight Shroud",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Twilight Domain feature}",
				"You can harness the shrouding power of night to protect your allies and stymie your foes. Whenever you cast the {@spell darkness} spell using a spell slot, you can choose a number of creatures that you can see (including yourself) equal to your Wisdom modifier (minimum of one). The chosen creatures can see through the darkness."
			]
		},
		{
			"name": "City Domain (UA)",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"entries": [
				"The City domain is concerned with the citizenry, commerce, traffic, and even architecture of modern civilization. In the eyes of a cleric of the city, the center of modern life is a sense and spirit of community, and the gravest enemies of the city are those who seek to harm the common weal of its citizens.",
				"At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
				"Spells marked with an asterisk can be found in Unearthed Arcana: Modern Magic.",
				{
					"type": "table",
					"caption": "City Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell comprehend languages}, {@spell remote access (UA)|UAModernMagic|remote access}*"
						],
						[
							"3rd",
							"{@spell find vehicle (UA)|UAModernMagic|find vehicle}*, {@spell heat metal}"
						],
						[
							"5th",
							"{@spell lightning bolt}, {@spell protection from ballistics (UA)|UAModernMagic|protection from ballistics}*"
						],
						[
							"7th",
							"{@spell locate creature}, {@spell synchronicity (UA)|UAModernMagic|synchronicity}*"
						],
						[
							"9th",
							"{@spell commune with city (UA)|UAModernMagic|commune with city}*, {@spell shutdown (UA)|UAModernMagic|shutdown}*"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrip|Cleric||City (UA)|UAModernMagic|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||City (UA)|UAModernMagic|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Heart of the City|Cleric||City (UA)|UAModernMagic|1"
				}
			]
		},
		{
			"name": "Bonus Cantrip",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain the {@spell On/Off (UA)|UAModernMagic|on/off} cantrip in addition to your chosen cantrips."
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"Also starting at 1st level, you gain proficiency with sidearms and proficiency with vehicles (land)."
			]
		},
		{
			"name": "Heart of the City",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, you are able to tap into the spirit of community found in the city. While you are within any city, you can gain advantage on a single Charisma ({@skill Deception}, {@skill Intimidation}, or {@skill Persuasion}) check, and you are considered proficient in the appropriate skill. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain any expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Spirits of the City",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to call on the city for aid. As an action, you present your holy symbol, and any city utility within 30 feet of you either works perfectly or shuts down entirely for 1 minute (your choice).",
				"Additionally, each hostile creature within 30 feet of you must make a Charisma saving throw. On a failed save, the creature is knocked {@condition prone} or {@condition restrained} (your choice) by hazards such as entangling wires, high-pressure water erupting from fire hydrants, pavement collapsing to unseen potholes, and so on. A {@condition restrained} creature can escape by making a successful Strength ({@skill Athletics}) or Dexterity ({@skill Acrobatics}) check against your spell save DC.",
				"This effect is entirely local and affects only utilities within 30 feet of you. Determination of what utilities are available within range and how the physical effects of those utilities manifest are left to the DM."
			]
		},
		{
			"name": "Block Watch",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your awareness while in the city extends preternaturally. While in an urban environment, you are considered proficient in the {@skill Insight} and {@skill Perception} skills, and you add double your proficiency bonus to Wisdom ({@skill Insight}) and Wisdom ({@skill Perception}) checks, instead of your normal proficiency bonus."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with psychic energy borrowed from the citizens of your city. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} psychic damage to the target. When you reach 14th level, the extra psychic damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Express Transit",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can use mass transit routes to transport instantaneously to other points in the city. Starting from a bus stop, train station, subway stop, or other suitable mass transit site within the city, you can teleport to any other similar transit stop within the city, as if you had cast a {@spell teleport} spell whose destination is a permanent {@spell teleportation circle} you know. Once you use this feature, you must finish a short or long rest before using it again."
			]
		},
		{
			"name": "Order Domain (UA)",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 1,
			"entries": [
				"The Order domain represents discipline, as well as service to a society or an institution, whether that service is rendered in obedience to or enforcement of the law\u2014civil, religious, or both. Gods on many worlds grant access to this domain, including {@deity Bane}, {@deity Tyr}, {@deity Majere|Dragonlance}, {@deity Erathis|Dawn War|DMG}, {@deity Pholtus|Greyhawk}, {@deity Wee Jas|Greyhawk}, {@deity Aureon|Eberron}, {@deity Maglubiyet|Nonhuman}, {@deity Nuada|Celtic}, {@deity Athena|Greek}, {@deity Anubis|Egyptian}, {@deity Forseti|Norse}, and {@deity Asmodeus|Dawn War|DMG}.",
				"The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their deities.",
				"More importantly, law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Order Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell command}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell enhance ability}, {@spell hold person}"
						],
						[
							"5th",
							"{@spell mass healing word}, {@spell slow}"
						],
						[
							"7th",
							"{@spell compulsion}, {@spell locate creature}"
						],
						[
							"9th",
							"{@spell commune}, {@spell dominate person}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Order (UA)|UAOrderDomain|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Voice of Authority|Cleric||Order (UA)|UAOrderDomain|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Voice of Authority",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can invoke the power of law to drive an ally to attack. Immediately after you cast a spell on an ally using a spell slot of 1st level or higher, that ally can use their reaction to make one weapon attack against a target of your choice that you can see. If the spell targets more than one ally, you choose the ally who can make the attack."
			]
		},
		{
			"name": "Channel Divinity: Order's Demand",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.",
				"As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you until the end of your next turn or until the {@condition charmed} creature takes any damage. You can also cause any of the {@condition charmed} creatures to fall {@condition prone} when they fail the saving throw."
			]
		},
		{
			"name": "Order's Dominion",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you become extraordinarily adept at channeling magical energy to compel others.",
				"When you cast a spell of the enchantment school using a spell slot of 2nd level or higher, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} force damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Order's Wrath",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature, that creature takes an extra {@damage 2d8} force damage the first time each turn that any ally of yours hits it with a weapon attack. This benefit lasts until the start of your next turn."
			]
		},
		{
			"name": "Forge Domain",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include {@deity Gond}, {@deity Reorx|Dragonlance}, {@deity Onatar|Eberron}, {@deity Moradin|Nonhuman}, {@deity Hephaestus|Greek}, and {@deity Goibhniu|Celtic}.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Forge Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell identify}, {@spell searing smite}"
						],
						[
							"3rd",
							"{@spell heat metal}, {@spell magic weapon}"
						],
						[
							"5th",
							"{@spell elemental weapon}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell fabricate}, {@spell wall of fire}"
						],
						[
							"9th",
							"{@spell animate objects}, {@spell creation}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Forge|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessing of the Forge|Cleric||Forge|XGE|1"
				}
			]
		},
		{
			"name": "Blessing of the Forge",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor and {@item smith's tools|phb}."
			]
		},
		{
			"name": "Channel Divinity: Artisan's Blessing",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create simple items.",
				"You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object (see chapter 5, \"Equipment,\" in the Player's Handbook for examples of these items). The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.",
				"The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual's end, magically forming even nonmetal parts of the creation. The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual."
			]
		},
		{
			"name": "Soul of the Forge",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, the cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the character's cleric spells and Channel Divinity options ignores resistance to necrotic damage."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra {@damage 1d8} necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Improved Reaper",
			"source": "DMG",
			"page": 96,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Death",
			"subclassSource": "DMG",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, when the cleric casts a Necromancy spell of 1st through 5th-level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, the cleric must provide them for each target."
			]
		},
		{
			"name": "Knowledge Domain",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"The gods of knowledge\u2014including {@deity Oghma}, {@deity Boccob|Greyhawk}, {@deity Gilean|Dragonlance}, {@deity Aureon|Eberron}, and {@deity Thoth|Egyptian}\u2014value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like {@deity Gond}, {@deity Reorx|Dragonlance}, {@deity Onatar|Eberron}, {@deity Moradin|Nonhuman}, {@deity Hephaestus|Greek}, and {@deity Goibhniu|Celtic}.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Knowledge Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell command}, {@spell identify}"
						],
						[
							"3rd",
							"{@spell augury}, {@spell suggestion}"
						],
						[
							"5th",
							"{@spell nondetection}, {@spell speak with dead}"
						],
						[
							"7th",
							"{@spell arcane eye}, {@spell confusion}"
						],
						[
							"9th",
							"{@spell legend lore}, {@spell scrying}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessings of Knowledge|Cleric||Knowledge||1"
				}
			]
		},
		{
			"name": "Blessings of Knowledge",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: {@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion}.",
				"Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
			]
		},
		{
			"name": "Channel Divinity: Knowledge of the Ages",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
			]
		},
		{
			"name": "Channel Divinity: Read Thoughts",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
				"As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
				"If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.",
				"During that time, you can use your action to end this effect and cast the {@spell suggestion} spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Visions of the Past",
			"source": "PHB",
			"page": 59,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain {@status concentration} during that time, as if you were casting a spell.",
				"Once you use this feature, you can't use it again until you finish a short or long rest.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Object Reading",
							"entries": [
								"Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Area Reading",
							"entries": [
								"As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation."
							]
						}
					]
				}
			]
		},
		{
			"name": "Life Domain",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"The Life domain focuses on the vibrant positive energy\u2014one of the fundamental forces of the universe\u2014that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as {@deity Chauntea}, {@deity Arawai|Eberron}, and {@deity Demeter|Greek}), sun gods (such as {@deity Lathander}, {@deity Pelor|Greyhawk}, and {@deity Re-Horakhty|Egyptian}), gods of healing or endurance (such as {@deity Ilmater}, {@deity Mishakal|Dragonlance}, {@deity Apollo|Greek}, and {@deity Diancecht|Celtic}), and gods of home and community (such as {@deity Hestia|Greek}, {@deity Hathor|Egyptian}, and {@deity Boldrei|Eberron}).",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Life Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bless}, {@spell cure wounds}"
						],
						[
							"3rd",
							"{@spell lesser restoration}, {@spell spiritual weapon}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell revivify}"
						],
						[
							"7th",
							"{@spell death ward}, {@spell guardian of faith}"
						],
						[
							"9th",
							"{@spell mass cure wounds}, {@spell raise dead}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Life||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Disciple of Life|Cleric||Life||1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Disciple of Life",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Channel Divinity: Preserve Life",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
				"As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
			]
		},
		{
			"name": "Blessed Healer",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} radiant damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Supreme Healing",
			"source": "PHB",
			"page": 60,
			"srd": true,
			"basicRules": true,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Life",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring {@dice 2d6} hit points to a creature, you restore 12."
			]
		},
		{
			"name": "Light Domain",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods of light\u2014including {@deity Helm}, {@deity Lathander}, {@deity Pholtus|Greyhawk}, {@deity Branchala|Dragonlance}, {@deity the Silver Flame|Eberron}, {@deity Belenus|Celtic}, {@deity Apollo|Greek}, and {@deity Re-Horakhty|Egyptian}\u2014promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Light Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell burning hands}, {@spell faerie fire}"
						],
						[
							"3rd",
							"{@spell flaming sphere}, {@spell scorching ray}"
						],
						[
							"5th",
							"{@spell daylight}, {@spell fireball}"
						],
						[
							"7th",
							"{@spell guardian of faith}, {@spell wall of fire}"
						],
						[
							"9th",
							"{@spell flame strike}, {@spell scrying}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrip|Cleric||Light||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warding Flare|Cleric||Light||1"
				}
			]
		},
		{
			"name": "Bonus Cantrip",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain the {@spell light} cantrip if you don't already know it. This cantrip doesn't count against the number of cleric cantrips you know."
			]
		},
		{
			"name": "Warding Flare",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be {@condition blinded} is immune to this feature.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Radiance of the Dawn",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.",
				"As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to {@dice 2d10} + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected."
			]
		},
		{
			"name": "Improved Flare",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Corona of Light",
			"source": "PHB",
			"page": 60,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Light",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage."
			]
		},
		{
			"name": "Nature Domain",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as {@deity Silvanus}, {@deity Obad-Hai|Greyhawk}, {@deity Chislev|Dragonlance}, {@deity Balinor|Eberron}, and {@deity Pan|Greek}) to friendly deities associated with particular springs and groves (such as {@deity Eldath}). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Nature Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell animal friendship}, {@spell speak with animals}"
						],
						[
							"3rd",
							"{@spell barkskin}, {@spell spike growth}"
						],
						[
							"5th",
							"{@spell plant growth}, {@spell wind wall}"
						],
						[
							"7th",
							"{@spell dominate beast}, {@spell grasping vine}"
						],
						[
							"9th",
							"{@spell insect plague}, {@spell tree stride}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Acolyte of Nature|Cleric||Nature||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Nature||1"
				}
			]
		},
		{
			"name": "Acolyte of Nature",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn one druid cantrip of your choice. This cantrip doesn't count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Nature}, or {@skill Survival}."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Channel Divinity: Charm Animals and Plants",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.",
				"As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is {@condition charmed} by you for 1 minute or until it takes damage. While it is {@condition charmed} by you, it is friendly to you and other creatures you designate."
			]
		},
		{
			"name": "Dampen Elements",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Master of Nature",
			"source": "PHB",
			"page": 61,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Nature",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to command animals and plant creatures. While creatures are {@condition charmed} by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
			]
		},
		{
			"name": "Tempest Domain",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods whose portfolios include the Tempest domain\u2014including {@deity Talos}, {@deity Umberlee}, {@deity Kord|Greyhawk}, {@deity Zeboim|Dragonlance}, {@deity the Devourer|Eberron}, {@deity Zeus|Greek}, and {@deity Thor|Norse}\u2014govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Tempest Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell fog cloud}, {@spell thunderwave}"
						],
						[
							"3rd",
							"{@spell gust of wind}, {@spell shatter}"
						],
						[
							"5th",
							"{@spell call lightning}, {@spell sleet storm}"
						],
						[
							"7th",
							"{@spell control water}, {@spell ice storm}"
						],
						[
							"9th",
							"{@spell destructive wave}, {@spell insect plague}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Tempest||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wrath of the Storm|Cleric||Tempest||1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Wrath of the Storm",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes {@damage 2d8} lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Destructive Wrath",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.",
				"When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling."
			]
		},
		{
			"name": "Thunderbolt Strike",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} thunder damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Stormborn",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Tempest",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors."
			]
		},
		{
			"name": "Trickery Domain",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Gods of trickery\u2014such as {@deity Tymora}, {@deity Beshaba}, {@deity Olidammara|Greyhawk}, {@deity the Traveler|Eberron}, {@deity Garl Glittergold|Nonhuman}, and {@deity Loki|Norse}\u2014are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Trickery Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell charm person}, {@spell disguise self}"
						],
						[
							"3rd",
							"{@spell mirror image}, {@spell pass without trace}"
						],
						[
							"5th",
							"{@spell blink}, {@spell dispel magic}"
						],
						[
							"7th",
							"{@spell dimension door}, {@spell polymorph}"
						],
						[
							"9th",
							"{@spell dominate person}, {@spell modify memory}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessing of the Trickster|Cleric||Trickery||1"
				}
			]
		},
		{
			"name": "Blessing of the Trickster",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity ({@skill Stealth}) checks. This blessing lasts for 1 hour or until you use this feature again."
			]
		},
		{
			"name": "Channel Divinity: Invoke Duplicity",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
				"As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
				"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
			]
		},
		{
			"name": "Channel Divinity: Cloak of Shadows",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 6th level, you can use your Channel Divinity to vanish.",
				"As an action, you become {@condition invisible} until the end of your next turn. You become visible if you attack or cast a spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with poison\u2014a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} poison damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Improved Duplicity",
			"source": "PHB",
			"page": 62,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Trickery",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
			]
		},
		{
			"name": "War Domain",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as {@deity Torm}, {@deity Heironeous|Greyhawk}, and {@deity Kiri-Jolith|Dragonlance}) as well as gods of destruction and pillage (such as {@deity Erythnul|Greyhawk}, {@deity the Fury|Eberron}, {@deity Gruumsh|Nonhuman}, and {@deity Ares|Greek}) and gods of conquest and domination (such as {@deity Bane}, {@deity Hextor|Greyhawk}, and {@deity Maglubiyet|Nonhuman}). Other war gods (such as {@deity Tempus}, {@deity Nike|Greek}, and {@deity Nuada|Celtic}) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "War Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell divine favor}, {@spell shield of faith}"
						],
						[
							"3rd",
							"{@spell magic weapon}, {@spell spiritual weapon}"
						],
						[
							"5th",
							"{@spell crusader's mantle}, {@spell spirit guardians}"
						],
						[
							"7th",
							"{@spell freedom of movement}, {@spell stoneskin}"
						],
						[
							"9th",
							"{@spell flame strike}, {@spell hold monster}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||War||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "War Priest|Cleric||War||1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "War Priest",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the {@action Attack} action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Guided Strike",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Channel Divinity: War God's Blessing",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Avatar of Battle",
			"source": "PHB",
			"page": 63,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "War",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
			]
		},
		{
			"name": "Ambition Domain (PSA)",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall strive for greatness\u2014supremacy in life leads to supremacy in the afterlife.\"",
				"Bontu has fully embraced this dictum, and though she expends little effort in teaching it, she surely leads by example. Her viziers subtly plant the seeds that flower into the ambition the God-Pharaoh desires. Through insinuation, they remind acolytes and initiates alike that achieving one's place in the afterlife at the expense of others is not shameful, but is proof of the initiate's determination and drive. Nothing is more important than that drive, they suggest\u2014not the bonds of a crop, not friendship or love. Not even devotion to a deity.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Ambition Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bane}, {@spell disguise self}"
						],
						[
							"3rd",
							"{@spell mirror image}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell bestow curse}, {@spell vampiric touch}"
						],
						[
							"7th",
							"{@spell death ward}, {@spell dimension door}"
						],
						[
							"9th",
							"{@spell dominate person}, {@spell modify memory}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warding Flare|Cleric||Ambition (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Warding Flare",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be {@condition blinded} is immune to this feature.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Invoke Duplicity",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
				"As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
				"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
			]
		},
		{
			"name": "Channel Divinity: Cloak of Shadows",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 6th level, you can use your Channel Divinity to vanish. As an action, you become {@condition invisible} until the end of your next turn. You become visible if you attack or cast a spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Improved Duplicity",
			"source": "PSA",
			"page": 27,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Ambition (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
			]
		},
		{
			"name": "Knowledge Domain (PSA)",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall cultivate a nimble mind that can perceive the wonders beyond imagination that wait in the afterlife.\"",
				"Kefnet's task is to pass on this teaching of the God-Pharaoh and elucidate its meaning. He teaches that the afterlife will be inhabited only by those who have proved by their wits that they are worthy of dwelling in the glorious presence of the God-Pharaoh. He trains acolytes and initiates to push their limits and challenge their mental capacity with spells of ever-greater power.",
				"Kefnet's domain is identical to the Knowledge domain in the Player's Handbook."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Subclass Feature",
			"source": "PSA",
			"page": 25,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Knowledge (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"See the Knowledge domain."
			]
		},
		{
			"name": "Solidarity Domain (PSA)",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy must know and respect all others whom the God-Pharaoh deems worthy, for in the afterlife, all will be united in purpose and action.\"",
				"Oketra is charged with expounding upon this teaching of the God-Pharaoh, instilling in every initiate the virtue of solidarity. She forges each group of children into a crop of acolytes with just one purpose: to be judged worthy of a glorious afterlife. And she instills in each crop the ability to unite in a single action in pursuit of that purpose. She is fond of poetic imagery to communicate her ideals.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Solidarity Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bless}, {@spell guiding bolt}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell crusader's mantle}"
						],
						[
							"7th",
							"{@spell aura of life}, {@spell guardian of faith}"
						],
						[
							"9th",
							"{@spell circle of power}, {@spell mass cure wounds}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Solidarity (PSA)|PSA|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Solidarity's Action|Cleric||Solidarity (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Solidarity's Action",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, when you take the {@action Help} action to aid an ally's attack, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Preserve Life",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
				"As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
			]
		},
		{
			"name": "Oketra's Blessing",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Supreme Healing",
			"source": "PSA",
			"page": 24,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Solidarity (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring {@dice 2d6} hit points to a creature, you restore 12."
			]
		},
		{
			"name": "Strength Domain (PSA)",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall hone a strong body that can withstand the boundless energies of the afterlife.\"",
				"It falls to Rhonas to instill this teaching in those who would enter the afterlife\u2014but to his mind, the words themselves don't matter. Strength can't be taught. It must be built through practice and training. Rhonas demonstrates his teachings by his example, rather than by giving his students any kind of academic instruction. He welcomes the people of Naktamun to stand by the Hekma and watch him as he storms into the desert to battle the greatest horrors. He encourages them to observe his indomitable strength, for though they will never equal it, they can aspire to mimicry. He invites them to scrutinize every move and practice what they see.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Strength Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell divine favor}, {@spell shield of faith}"
						],
						[
							"3rd",
							"{@spell enhance ability}, {@spell protection from poison}"
						],
						[
							"5th",
							"{@spell haste}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell dominate beast}, {@spell stoneskin}"
						],
						[
							"9th",
							"{@spell destructive wave}, {@spell insect plague}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Acolyte of Strength|Cleric||Strength (PSA)|PSA|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Strength (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Acolyte of Strength",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: {@skill Animal Handling}, {@skill Athletics}, {@skill Nature}, or {@skill Survival}."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"Also at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Channel Divinity: Feat of Strength",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"At 2nd level, you can use your Channel Divinity to enhance your physical might. When you make an attack roll, ability check, or saving throw using Strength, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fails."
			]
		},
		{
			"name": "Rhonas's Blessing",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when a creature within 30 feet of you makes an attack roll, ability check, or saving throw using Strength, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the roll succeeds or fail."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Avatar of Battle",
			"source": "PSA",
			"page": 26,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Strength (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
			]
		},
		{
			"name": "Zeal Domain (PSA)",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"entries": [
				"\"The worthy shall rush to the God-Pharaoh's side with relentless zeal, rising to overcome every obstacle in their way.\"",
				"The God-Pharaoh expects those he welcomes into the afterlife to desire it above all other pleasures and achievements, and for them to show their dedication, passion, and fervor through their actions. Hazoret is charged with cultivating this zeal in the initiates who come under her care, and she has undertaken the task with appropriate enthusiasm. She recognizes, however, that the best way to teach zeal is by demonstrating it.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Zeal Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell searing smite}, {@spell thunderous smite}"
						],
						[
							"3rd",
							"{@spell magic weapon}, {@spell shatter}"
						],
						[
							"5th",
							"{@spell haste}, {@spell fireball}"
						],
						[
							"7th",
							"{@spell fire shield||fire shield (warm shield only)}, {@spell freedom of movement}"
						],
						[
							"9th",
							"{@spell destructive wave}, {@spell flame strike}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Zeal (PSA)|PSA|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Priest of Zeal|Cleric||Zeal (PSA)|PSA|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Priest of Zeal",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, Hazoret delivers bolts of inspiration to you while you are engaged in battle. When you use the {@action Attack} action, you can make one weapon attack as a bonus action.",
				"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Consuming Fervor",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to channel your zeal into unchecked ferocity.",
				"When you roll fire or thunder damage, you can use your Channel Divinity to deal maximum damage instead of rolling."
			]
		},
		{
			"name": "Resounding Strike",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, when you deal thunder damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Blaze of Glory",
			"source": "PSA",
			"page": 28,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Zeal (PSA)",
			"subclassSource": "PSA",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can delay death for an instant to perform a final heroic act.",
				"When you are reduced to 0 hit points by an attacker you can see, even if you would be killed outright, you can use your reaction to move up to your speed toward the attacker and make one melee weapon attack against it, as long as the movement brings it within your reach. You make this attack with advantage. If the attack hits, the creature takes an extra {@damage 5d10} fire damage and an extra {@damage 5d10} damage of the weapon's type. You then fall {@condition unconscious} and begin making death saving throws as normal, or you die if the damage you took would have killed you outright.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Arcana Domain",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 1,
			"entries": [
				"Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.",
				"The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include {@deity Azuth|Faerûnian|SCAG} and {@deity Mystra|Faerûnian|SCAG}, as well as {@deity Corellon|Dawn War|DMG} Larethian of the elven pantheon. In other worlds, this domain includes {@deity Hecate|Greek}, {@deity Math Mathonwy|Celtic}, and {@deity Isis|Egyptian}; the triple moon gods of {@deity Solinari|Dragonlance}, {@deity Lunitari|Dragonlance}, and {@deity Nuitari|Dragonlance} of Krynn; and {@deity Boccob|Greyhawk}, {@deity Vecna|Greyhawk}, and {@deity Wee Jas|Greyhawk} of Greyhawk.",
				"At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
				{
					"type": "table",
					"caption": "Arcana Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell detect magic}, {@spell magic missile}"
						],
						[
							"3rd",
							"{@spell magic weapon}, {@spell Nystul's magic aura}"
						],
						[
							"5th",
							"{@spell dispel magic}, {@spell magic circle}"
						],
						[
							"7th",
							"{@spell arcane eye}, {@spell Leomund's secret chest}"
						],
						[
							"9th",
							"{@spell planar binding}, {@spell teleportation circle}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arcane Initiate|Cleric||Arcana|SCAG|1"
				}
			]
		},
		{
			"name": "Arcane Initiate",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency in the {@skill Arcana} skill, and you gain two cantrips of your choice from the {@filter wizard spell list|spells|class=wizard|level=0}. For you, these cantrips count as cleric cantrips."
			]
		},
		{
			"name": "Channel Divinity: Arcane Abjuration",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures.",
				"As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
				"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, then the creature can use the {@action Dodge} action.",
				"After you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as in the {@spell banishment} spell, no {@status concentration} required) if it isn't on its plane of origin, and its challenge rating is at or below a certain threshold, as shown below.",
				{
					"type": "table",
					"caption": "Arcane Banishment",
					"colLabels": [
						"Cleric level",
						"Banishes Creatures of CR..."
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"5th",
							"1/2 or lower"
						],
						[
							"8th",
							"1 or lower"
						],
						[
							"11th",
							"2 or lower"
						],
						[
							"14th",
							"3 or lower"
						],
						[
							"17th",
							"4 or lower"
						]
					]
				}
			]
		},
		{
			"name": "Spell Breaker",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Arcane Mastery",
			"source": "SCAG",
			"page": 125,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Arcana",
			"subclassSource": "SCAG",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you choose four spells from the Wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you."
			]
		},
		{
			"name": "Order Domain",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The Order Domain represents discipline, as well as devotion to a society or an institution and strict obedience to the laws governing it. On Ravnica, the domain is favored by clerics of the Azorius Senate, who use it to maintain and enforce the law, and of the Orzhov Syndicate, who exploit law and order for their personal gain. On other worlds, gods who grant access to this domain include {@deity Bane}, {@deity Tyr}, {@deity Majere|Dragonlance}, {@deity Erathis|Dawn War|DMG}, {@deity Pholtus|Greyhawk}, {@deity Wee Jas|Greyhawk}, {@deity Aureon|Eberron}, {@deity Maglubiyet|Nonhuman}, {@deity Nuada|Celtic}, {@deity Athena|Greek}, {@deity Anubis|Egyptian}, {@deity Forseti|Norse}, and {@deity Asmodeus|Dawn War|DMG}.",
				"The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their guilds or deities.",
				"Law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Order Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell command}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell hold person}, {@spell zone of truth}"
						],
						[
							"5th",
							"{@spell mass healing word}, {@spell slow}"
						],
						[
							"7th",
							"{@spell compulsion}, {@spell locate creature}"
						],
						[
							"9th",
							"{@spell commune}, {@spell dominate person}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Order|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Voice of Authority|Cleric||Order|TCE|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor. You also gain proficiency in the {@skill Intimidation} or {@skill Persuasion} skill (your choice)."
			]
		},
		{
			"name": "Voice of Authority",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can invoke the power of law to drive an ally to attack. If you cast a spell with a spell slot of 1st level or higher and target an ally with the spell, that ally can use their reaction immediately after the spell to make one weapon attack against a creature of your choice that you can see.",
				"If the spell targets more than one ally, you choose the ally who can make the attack."
			]
		},
		{
			"name": "Channel Divinity: Order's Demand",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.",
				"As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you until the end of your next turn or until the {@condition charmed} creature takes any damage. You can also cause any of the {@condition charmed} creatures to drop what they are holding when they fail the saving throw."
			]
		},
		{
			"name": "Embodiment of the Law",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you become remarkably adept at channeling magical energy to compel others.",
				"If you cast a spell of the enchantment school using a spell slot of 1st level or higher, you can change the spell's casting time to 1 bonus action for this casting, provided the spell's casting time is normally 1 action.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 31,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 31,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} psychic damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Order's Wrath",
			"source": "TCE",
			"page": 31,
			"otherSources": [
				{
					"source": "GGR",
					"page": 25
				}
			],
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature on your turn, you can curse that creature until the start of your next turn. The next time one of your allies hits the cursed creature with an attack, the target also takes {@damage 2d8} psychic damage, and the curse ends. You can curse a creature in this way only once per turn."
			]
		},
		{
			"name": "Peace Domain",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The balm of peace thrives at the heart of healthy communities, between friendly nations, and in the souls of the kindhearted. The gods of peace inspire people of all sorts to resolve conflict and to stand up against those forces that try to prevent peace from flourishing. See the Peace Deities table for a list of some of the gods associated with this domain.",
				"Clerics of the Peace Domain preside over the signing of treaties, and they are often asked to arbitrate in disputes. These clerics' blessings draw people together and help them shoulder one another's burdens, and the clerics' magic aids those who are driven to fight for the way of peace.",
				{
					"type": "table",
					"caption": "Peace Deities",
					"colLabels": [
						"Example Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"{@deity Angharradh|Elven|SCAG}",
							"Elven"
						],
						[
							"{@deity Berronar Truesilver|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Cyrrollalee|Halfling|SCAG}",
							"Halfling"
						],
						[
							"{@deity Eldath}",
							"Forgotten Realms"
						],
						[
							"Gaerdal",
							"Ironhand Gnomish"
						],
						[
							"{@deity Paladine|Dragonlance}",
							"Dragonlance"
						],
						[
							"{@deity Rao|Greyhawk}",
							"Greyhawk"
						]
					]
				},
				{
					"name": "Domain Spells",
					"type": "entries",
					"entries": [
						"{@i 1st-level Peace Domain feature}",
						"You gain domain spells at the cleric levels listed in the Peace Domain Spells table. See the Divine Domain class feature for how domain spells work.",
						{
							"type": "table",
							"caption": "Peace Domain Spells",
							"colLabels": [
								"Cleric Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell heroism}, {@spell sanctuary}"
								],
								[
									"3rd",
									"{@spell aid}, {@spell warding bond}"
								],
								[
									"5th",
									"{@spell beacon of hope}, {@spell sending}"
								],
								[
									"7th",
									"{@spell aura of purity}, {@spell Otiluke's resilient sphere}"
								],
								[
									"9th",
									"{@spell greater restoration}, {@spell Rary's telepathic bond}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Implement of Peace|Cleric||Peace|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Emboldening Bond|Cleric||Peace|TCE|1"
				}
			]
		},
		{
			"name": "Emboldening Bond",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Peace Domain feature}",
				"You can forge an empowering bond among people who are at peace with one another. As an action, you choose a number of willing creatures within 30 feet of you (this can include yourself) equal to your proficiency bonus. You create a magical bond among them for 10 minutes or until you use this feature again. While any bonded creature is within 30 feet of another, the creature can roll a {@dice d4} and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the {@dice d4} no more than once per turn.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Implement of Peace",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Peace Domain feature}",
				"You gain proficiency in the {@skill Insight}, {@skill Performance}, or {@skill Persuasion} skill (your choice)."
			]
		},
		{
			"name": "Channel Divinity: Balm of Peace",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Peace Domain feature}",
				"You can use your Channel Divinity to make your very presence a soothing balm. As an action, you can move up to your speed, without provoking opportunity attacks, and when you move within 5 feet of any other creature during this action, you can restore a number of hit points to that creature equal to {@dice 2d6} + your Wisdom modifier (minimum of 1 hit point). A creature can receive this healing only once whenever you take this action."
			]
		},
		{
			"name": "Protective Bond",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Peace Domain feature}",
				"The bond you forge between people helps them protect each other. When a creature affected by your Emboldening Bond feature is about to take damage, a second bonded creature within 30 feet of the first can use its reaction to teleport to an unoccupied space within 5 feet of the first creature. The second creature then takes all the damage instead."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Peace Domain feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Expansive Bond",
			"source": "TCE",
			"page": 32,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Peace",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Peace Domain feature}",
				"The benefits of your Emboldening Bond and Protective Bond features now work when the creatures are within 60 feet of each other. Moreover, when a creature uses Protective Bond to take someone else's damage, the creature has resistance to that damage."
			]
		},
		{
			"name": "Twilight Domain",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The twilit transition from light into darkness often brings calm and even joy, as the day's labors end and the hours of rest begin. The darkness can also bring terrors, but the gods of twilight guard against the horrors of the night.",
				"Clerics who serve these deities-examples of which appear on the Twilight Deities table-bring comfort to those who seek rest and protect them by venturing into the encroaching darkness to ensure that the dark is a comfort, not a terror.",
				{
					"type": "table",
					"caption": "Twilight Deities",
					"colLabels": [
						"Example Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Celestian|Greyhawk}",
							"Greyhawk"
						],
						[
							"{@deity Dol Arrah|Eberron}",
							"Eberron"
						],
						[
							"{@deity Helm}",
							"Forgotten Realms"
						],
						[
							"{@deity Ilmater}",
							"Forgotten Realms"
						],
						[
							"{@deity Mishakal|Dragonlance}",
							"Dragonlance"
						],
						[
							"{@deity Selûne}",
							"Forgotten Realms"
						],
						[
							"{@deity Yondalla|Nonhuman}",
							"Halfling"
						]
					]
				},
				{
					"name": "Domain Spells",
					"type": "entries",
					"entries": [
						"{@i 1st-level Twilight Domain feature}",
						"You gain domain spells at the cleric levels listed in the Twilight Domain Spells table. See the Divine Domain class feature for how domain spells work.",
						{
							"type": "table",
							"caption": "Twilight Domain Spells",
							"colLabels": [
								"Cleric Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell faerie fire}, {@spell sleep}"
								],
								[
									"3rd",
									"{@spell moonbeam}, {@spell see invisibility}"
								],
								[
									"5th",
									"{@spell aura of vitality}, {@spell Leomund's tiny hut}"
								],
								[
									"7th",
									"{@spell aura of life}, {@spell greater invisibility}"
								],
								[
									"9th",
									"{@spell circle of power}, {@spell mislead}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||Twilight|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of Night|Cleric||Twilight|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Vigilant Blessing|Cleric||Twilight|TCE|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"You gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Eyes of Night",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"You can see through the deepest gloom. You have {@sense darkvision} out to a range of 300 feet. In that radius, you can see in dim light as if it were bright light and in darkness as if it were dim light.",
				"As an action, you can magically share the {@sense darkvision} of this feature with willing creatures you can see within 10 feet of you, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). The shared {@sense darkvision} lasts for 1 hour. Once you share it, you can't do so again until you finish a long rest, unless you expend a spell slot of any level to share it again."
			]
		},
		{
			"name": "Vigilant Blessing",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again."
			]
		},
		{
			"name": "Channel Divinity: Twilight Sanctuary",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Twilight Domain feature}",
				"You can use your Channel Divinity to refresh your allies with soothing twilight.",
				"As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are {@condition incapacitated} or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:",
				{
					"type": "list",
					"items": [
						"You grant it temporary hit points equal to {@dice 1d6} plus your cleric level.",
						"You end one effect on it causing it to be {@condition charmed} or {@condition frightened}."
					]
				}
			]
		},
		{
			"name": "Steps of Night",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Twilight Domain feature}",
				"You can draw on the mystical power of night to rise into the air. As a bonus action when you are in dim light or darkness, you can magically give yourself a flying speed equal to your walking speed for 1 minute. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Twilight Domain feature}",
				"You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} radiant damage. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Twilight Shroud",
			"source": "TCE",
			"page": 34,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Twilight Domain feature}",
				"The twilight that you summon offers a protective embrace: you and your allies have half cover while in the sphere created by your Twilight Sanctuary."
			]
		},
		{
			"name": "Love Domain (UA)",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"entries": [
				"{@note Note: The Love domain was included in a leaked pre-release version of {@i Unearthed Arcana 2020 Subclasses, Part 2}, and superseded by the Unity domain for the final release.}",
				"Love exists in many forms\u2014compassion, infatuation, friendly affection, and passionate love as a few facets. Whatever form these feelings take, the gods of love deepen the bonds between individuals.",
				{
					"type": "table",
					"caption": "Love Deities",
					"colLabels": [
						"Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"Aengus",
							"Celtic"
						],
						[
							"{@deity Aphrodite|Greek}",
							"Greek"
						],
						[
							"{@deity Balder|Norse}",
							"Norse"
						],
						[
							"{@deity Berronar Truesilver|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Cyrrollalee|Halfling|SCAG}",
							"Halfling"
						],
						[
							"{@deity Freya|Norse}",
							"Norse"
						],
						[
							"{@deity Hanali Celanil|Elven|SCAG}",
							"Elven"
						],
						[
							"{@deity Hathor|Egyptian}",
							"Egyptian"
						],
						[
							"{@deity Mishakal|Dragonlance}",
							"Dragonlance"
						],
						[
							"Myhriss",
							"Greyhawk"
						],
						[
							"{@deity Sharindlar|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Sheyanna Flaxenstrand|Gnome|MTF}",
							"Gnomish"
						],
						[
							"{@deity Sune}",
							"Forgotten Realms"
						]
					]
				},
				"Clerics of these gods preside over marriages and other familial bonding customs, but they also nurture the emotional bonds of friendship and camaraderie. Their divine blessings bolster and protect allies in battle through these deep bonds and enkindle flares of infatuation to spur their allies and confound their foes.",
				{
					"type": "table",
					"caption": "Love Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell charm person}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell enthrall}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell hypnotic pattern}"
						],
						[
							"7th",
							"{@spell aura of purity}, {@spell confusion}"
						],
						[
							"9th",
							"{@spell greater restoration}, {@spell hold monster}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Emboldening Bond|Cleric||Love (UA)|UA2020SubclassesPt2|1"
				}
			]
		},
		{
			"name": "Emboldening Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Love Domain feature}",
				"You can forge an empowering bond between allies. As an action, you can choose two willing creatures you can see within 30 feet of you (this can include yourself) and create a magical bond between them. While either bonded creature is within 30 feet of the other, the creature can roll a {@dice d4} and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the {@dice d4} no more than once per turn. The bond lasts for 1 hour or until you use this feature again.",
				"You can use this feature once, and you regain the ability to do so when you finish a long rest. You can also expend a spell slot to use the feature again."
			]
		},
		{
			"name": "Channel Divinity: Impulsive Infatuation",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Love Domain feature}",
				"You can use your Channel Divinity to overwhelm a creature with a flash of short-lived but intense admiration for you, driving them to rash action in your defense.",
				"As an action, you present your holy symbol and choose one creature you can see within 30 feet of you. That creature must make a Wisdom saving throw; a creature can choose to fail this saving throw if it wishes. On a success, the creature is unaffected. On a failure, the creature is {@condition charmed} by you until the start of your next turn, and it must immediately use its reaction to make a weapon attack against a target you designate. If there are no valid targets, it uses its reaction to admire you."
			]
		},
		{
			"name": "Protective Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Love Domain feature}",
				"The bond you forge between people shields them from harm. While either creature chosen for your Emboldening Bond feature is within 30 feet of the other, the creature can use its reaction to grant resistance to all damage to the other creature when that other creature takes damage. This resistance lasts until the end of the current turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Love Domain feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Enduring Unity",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Love (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Love Domain feature}",
				"The bonds you create endure across vast distances. Creatures affected by your Emboldening Bond feature gain its benefits, as well as those of your Protective Bond feature, while they are on the same plane of existence as each other.",
				"Additionally, when a creature chosen for your Emboldening Bond is reduced to 0 hit points, their bonded partner gains the following benefits for 1 minute, or until the creature regains at least 1 hit point:",
				{
					"type": "list",
					"items": [
						"The creature has advantage on attack rolls, ability checks, and saving throws",
						"The creature gains resistance to all damage",
						"As an action, the creature can touch their bonded partner to expend and roll any number of Hit Dice. Their bonded partner regains a number of hit points equal to the total rolled."
					]
				}
			]
		},
		{
			"name": "Unity Domain (UA)",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"entries": [
				"A sense of oneness shines at the heart of healthy communities, whether bound together by friendship, blood, faith, or some other uniting force. The gods of unity deepen such bonds and delight in their strength.",
				"Clerics of these gods preside over marriages and other familial bonding customs, but they also nurture the emotional bonds of friendship and camaraderie. Their divine blessings bolster and protect allies in battle through these deep bonds and turn aside malign influences.",
				{
					"type": "table",
					"caption": "Unity Deities",
					"colLabels": [
						"Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"{@deity Angharradh|Elven|SCAG}",
							"Elven"
						],
						[
							"{@deity Athena|Greek}",
							"Greek"
						],
						[
							"{@deity Berronar Truesilver|Dwarven|SCAG}",
							"Dwarven"
						],
						[
							"{@deity Boldrei|Eberron}",
							"Eberron"
						],
						[
							"{@deity Cyrrollalee|Halfling|SCAG}",
							"Halfling"
						],
						[
							"{@deity Eldath}",
							"Forgotten Realms"
						],
						[
							"{@deity Gaerdal Ironhand|Gnomish|SCAG}",
							"Gnomish"
						],
						[
							"{@deity Heimdall|Norse}",
							"Norse"
						],
						[
							"{@deity Paladine|Dragonlance}",
							"Dragonlance"
						],
						[
							"{@deity Rao|Greyhawk}",
							"Greyhawk"
						]
					]
				},
				{
					"type": "table",
					"caption": "Unity Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell heroism}, {@spell shield of faith}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell sending}"
						],
						[
							"7th",
							"{@spell aura of purity}, {@spell guardian of faith}"
						],
						[
							"9th",
							"{@spell greater restoration}, {@spell Rary's telepathic bond}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Emboldening Bond|Cleric||Unity (UA)|UA2020SubclassesPt2|1"
				}
			]
		},
		{
			"name": "Emboldening Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Unity Domain feature}",
				"You can forge an empowering bond between allies. As an action, you can choose two willing creatures you can see within 30 feet of you (this can include yourself) and create a magical bond between them. While either bonded creature is within 30 feet of the other, the creature can roll a {@dice d4} and add the number rolled to an attack roll, an ability check, or a saving throw it makes. Each creature can add the {@dice d4} no more than once per turn. The bond lasts for 1 hour or until you use this feature again.",
				"You can use this feature once, and you regain the ability to do so when you finish a long rest. You can also expend a spell slot to use the feature again."
			]
		},
		{
			"name": "Channel Divinity: Shared Burden",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Unity Domain feature}",
				"You can use your Channel Divinity to protect your allies through the strength of your shared bonds.",
				"When a creature you can see within 30 feet of you takes damage, you can use your reaction to choose a number of other willing creatures you can see, up to a number of creatures equal to your Wisdom modifier (minimum of one creature). Distribute the damage taken between the original target and the chosen creatures. Each creature must take at least 1 damage. Apply any damage resistance or vulnerability of the creatures involved after you distribute the damage."
			]
		},
		{
			"name": "Protective Bond",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Unity Domain feature}",
				"The bond you forge between people shields them from harm. While either creature chosen for your Emboldening Bond feature is within 30 feet of the other, the creature can use its reaction to grant resistance to all damage to the other creature when that other creature takes damage. This resistance lasts until the end of the current turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Unity Domain feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Enduring Unity",
			"source": "UA2020SubclassesPt2",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Unity (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Unity Domain feature}",
				"The bonds you create endure across vast distances. Creatures affected by your Emboldening Bond feature gain its benefits, as well as those of your Protective Bond feature, while they are on the same plane of existence as each other.",
				"Additionally, when a creature chosen for your Emboldening Bond is reduced to 0 hit points, their bonded partner gains the following benefits for 1 minute, or until the creature regains at least 1 hit point:",
				{
					"type": "list",
					"items": [
						"The creature has advantage on attack rolls, ability checks, and saving throws",
						"The creature gains resistance to all damage",
						"As an action, the creature can touch their bonded partner to expend and roll any number of Hit Dice. Their bonded partner regains a number of hit points equal to the total rolled."
					]
				}
			]
		},
		{
			"name": "Fate Domain (UA)",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"entries": [
				"Gods of fate perceive the future and how the choices mortals make drive them toward their destinies. Some deities consider the future preordained, while others understand the multiverse as a place of infinite possibility. Clerics who draw power from the forces of fate sometimes receive visions directly from their deity and receive fleeting omens of the future. They share impossible knowledge with their allies and prophesize their enemies' doom.",
				{
					"type": "table",
					"caption": "Fate Domain Deities",
					"colLabels": [
						"Example Deity",
						"Pantheon"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"Savras",
							"Forgotten Realms"
						],
						[
							"Istus",
							"Greyhawk"
						],
						[
							"Gilean",
							"Dragonlance"
						],
						[
							"Labelas Enorath",
							"Elven"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Domain Spells|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Omens and Portents|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ties That Bind|Cleric||Fate (UA)|UA2022WondersOfTheMultiverse|1"
				}
			]
		},
		{
			"name": "Domain Spells",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fate Domain Feature}",
				"You gain domain spells at the cleric levels listed on the Fate Domain Spells table. See the Divine Domain class feature for how domain spells work.",
				{
					"type": "table",
					"caption": "Fate Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Domain Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell dissonant whispers}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell see invisibility}, {@spell warding bond}"
						],
						[
							"5th",
							"{@spell beacon of hope}, {@spell clairvoyance}"
						],
						[
							"7th",
							"{@spell death ward}, {@spell divination}"
						],
						[
							"9th",
							"{@spell commune}, {@spell geas}"
						]
					]
				}
			]
		},
		{
			"name": "Omens and Portents",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fate Domain Feature}",
				"You can perceive signs of the future in everyday objects and events, such as flights of birds or ripples made in water by a thrown stone. You can cast the {@spell augury} spell without expending a spell slot and, when you cast the spell in this way, the spell has no verbal, somatic, or material components. Once you cast the spell in this way, you cannot do so again until you finish a long rest.",
				"In addition, until you finish a long rest, when you cast a divination spell that includes a chance the DM gives you no answer or a random reading\u2014such as augury, commune, or divination\u2014reduce that chance by 25 percent."
			]
		},
		{
			"name": "Ties That Bind",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fate Domain Feature}",
				"You can temporarily tie your fate to others. As an action, you can touch one object or creature and magically tie a strand of fate from yourself to it for 1 hour or until you use this feature again. An unwilling creature must succeed on a Wisdom saving throw against your spell save DC to resist this effect. While the target is bound to you and on the same plane of existence as you, you can sense the direction to the target's location, and you know the direction of its movement if it is in motion.",
				"In addition, once per turn when you cast a spell using a spell slot to deal damage or restore hit points to the target, roll a {@dice d6}, and the target receives extra damage or healing, respectively, equal to the number rolled.",
				"You can use this feature's action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Strands of Fate",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 2,
			"header": 2,
			"entries": [
				"{@i 2nd-level Fate Domain Feature}",
				"You can use your Channel Divinity to see and manipulate the strands of fate that weave around other individuals. As a bonus action, you can enter this state for up to 1 minute or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). For the duration, whenever another creature you can see makes an attack roll or an ability check, you can use a reaction to give the roll advantage or disadvantage (your choice)."
			]
		},
		{
			"name": "Insightful Striking",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Fate Domain Feature}",
				"As a bonus action, you can choose one creature you can see within 30 feet of yourself. Your magic grants you a brief vision of the target's defenses. Until the end of your next turn, you gain one of the following effects of your choice:",
				{
					"type": "list",
					"items": [
						"The next time you make an attack roll against the target, roll a {@dice d6} and add the number rolled to the total.",
						"The next time the target must make a saving throw against a spell you cast, the target must roll a {@dice d6} and subtract the number rolled from the saving throw."
					]
				},
				"You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 8,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Fate Domain Feature}",
				"You add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Visions of the Future",
			"source": "UA2022WondersOfTheMultiverse",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Fate (UA)",
			"subclassSource": "UA2022WondersOfTheMultiverse",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Fate Domain Feature}",
				"Your knowledge of the future allows you to guide an individual to achieve their greatest possible success. You can cast the {@spell foresight} spell once without expending a spell slot; when you cast the spell in this way, the spell's duration is 1 minute for that casting. Once you cast the spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Forge Domain (UA)",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"entries": [
				"The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can transform from a lump of ore to a beautifully wrought object. Clerics of these deities quest to search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include {@deity Gond}, {@deity Reorx|Dragonlance}, {@deity Onatar|Eberron}, {@deity Moradin|Nonhuman}, {@deity Hephaestus|Greek}, and {@deity Goibhniu|Celtic}.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Forge Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell searing smite}, {@spell shield}"
						],
						[
							"3rd",
							"{@spell heat metal}, {@spell magic weapon}"
						],
						[
							"5th",
							"{@spell elemental weapon}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell fabricate}, {@spell wall of fire}"
						],
						[
							"9th",
							"{@spell animate objects}, {@spell creation}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Forge (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessing of the Forge|Cleric||Forge (UA)|UAClericDivineDomains|1"
				}
			]
		},
		{
			"name": "Blessing of the Forge",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, touch one nonmagical object that is a suit of armor or a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}. Until the end of your next long rest, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Channel Divinity: Artisan's Blessing",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create simple items.",
				"Starting at the beginning of a short rest, you conduct a ritual to your deity that grants you the ability to craft a finished item that is at least part metal. The item is completed at the end of the rest.",
				"The object can be worth no more than 100 gp, and as part of this ritual you must expend metals, such as coins or other finished items, with a value equal to the item you want to make. The item can be an exact duplicate of a nonmagical item, such as a copy of a key, if you possess the original during your short rest."
			]
		},
		{
			"name": "Soul of the Forge",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your mastery of the forge grants you a number of special abilities:",
				{
					"type": "list",
					"items": [
						"You gain a +1 bonus to AC while you are wearing medium or heavy armor.",
						"You gain resistance to fire damage.",
						"When you hit a construct with an attack, you deal additional force damage to it equal to your cleric level."
					]
				}
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} fire damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Saint of Forge and Fire",
			"source": "UAClericDivineDomains",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, your affinity for fire and metal becomes more powerful due to your deity's blessing. You gain immunity to fire damage, and while you're wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
			]
		},
		{
			"name": "Grave Domain (UA)",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"entries": [
				"Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse's workings. To resist death, or to desecrate the dead's rest, is an abomination. Deities of the grave include {@deity Kelemvor}, {@deity Wee Jas|Greyhawk}, the ancestral spirits of {@deity the Undying Court|Eberron}, {@deity Hades|Greek}, {@deity Anubis|Egyptian}, and {@deity Osiris|Egyptian}. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature's death, though they refuse to use such magic to extend a creature's lifespan beyond its mortal limits.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Grave Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bane}, {@spell false life}"
						],
						[
							"3rd",
							"{@spell gentle repose}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell revivify}, {@spell vampiric touch}"
						],
						[
							"7th",
							"{@spell blight}, {@spell death ward}"
						],
						[
							"9th",
							"{@spell antilife shell}, {@spell raise dead}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Grave (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle of Mortality|Cleric||Grave (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of the Grave|Cleric||Grave (UA)|UAClericDivineDomains|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Circle of Mortality",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to manipulate the line between life and death. When you cast a spell that restores hit points to a living creature currently at 0, treat any dice rolled to determine the spell's healing as having rolled their maximum result. In addition, if you have the {@spell spare the dying} cantrip, you can cast it as a bonus action."
			]
		},
		{
			"name": "Eyes of the Grave",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain an innate sense of creatures whose existence is an insult to the natural cycle of life. If you spend 1 minute in uninterrupted contemplation, you can determine the presence and nature of undead creatures in the area. This detection extends up to 1 mile in all directions. You learn the number of undead and their distance and direction from you. In addition, you learn the creature type of the undead in that area that has the highest challenge rating.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Path to the Grave",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination.",
				"As an action, you touch a creature. The next time that creature takes damage from a spell or an attack from you or an ally, it is vulnerable to that spell or attack's damage. If the source of damage has multiple damage types, the creature is vulnerable to all of them. The vulnerability applies only to the first time that source inflicts damage, and then ends.",
				"If the creature has resistance or is immune to the damage, it instead loses its resistance or immunity against that spell or attack when it first applies damage."
			]
		},
		{
			"name": "Sentinel at Death's Door",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you gain the ability to impede death's progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} necrotic damage. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Keeper of Souls",
			"source": "UAClericDivineDomains",
			"page": 2,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to manipulate the boundary between life and death. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature as long as you aren't {@condition incapacitated}, but no more than once per round."
			]
		},
		{
			"name": "Protection Domain (UA)",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"entries": [
				"The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods' faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat. These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind. Deities who grant this domain include {@deity Helm}, {@deity Ilmater}, {@deity Torm}, {@deity Tyr}, {@deity Heironeous|Greyhawk}, {@deity St. Cuthbert|Greyhawk}, {@deity Paladine|Dragonlance}, {@deity Dol Dorn|Eberron}, {@deity the Silver Flame|Eberron}, {@deity Bahamut|Nonhuman}, {@deity Yondalla|Nonhuman}, {@deity Athena|Greek}, and {@deity Odin|Norse}.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Protection Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell compelled duel}, {@spell protection from evil and good}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell protection from poison}"
						],
						[
							"5th",
							"{@spell protection from energy}, {@spell slow}"
						],
						[
							"7th",
							"{@spell guardian of faith}, {@spell Otiluke's resilient sphere}"
						],
						[
							"9th",
							"{@spell antilife shell}, {@spell wall of force}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Protection (UA)|UAClericDivineDomains|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Shield of the Faithful|Cleric||Protection (UA)|UAClericDivineDomains|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Shield of the Faithful",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target."
			]
		},
		{
			"name": "Channel Divinity: Radiant Defense",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor.",
				"As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to {@dice 2d10} + your cleric level."
			]
		},
		{
			"name": "Blessed Healer",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, the healing spells you cast on others can heal you as well. When you cast a spell with a spell slot and it restores hit points to any creature other than you this turn, you regain hit points equal to 2 + the spell's level."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} radiant damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Indomitable Defense",
			"source": "UAClericDivineDomains",
			"page": 3,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Protection (UA)",
			"subclassSource": "UAClericDivineDomains",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose.",
				"As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action."
			]
		},
		{
			"name": "Twilight Domain (UA)",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"entries": [
				"The Twilight Domain governs the transition and blending of light into darkness. It is a time of rest and comfort, but also the threshold between safety and the unknown. Deities of healing or respite (such as {@deity Boldrei|Eberron}, {@deity Hestia|Greek}, {@deity Mishakal|Dragonlance}, or {@deity Pelor|Greyhawk}), bravery or protection (such as {@deity Dol Arrah|Eberron}, Hajama, {@deity Helm}, or {@deity Ilmater}), travel or transition (such as {@deity Fharlanghn|Greyhawk}, {@deity Hermes|Greek}, {@deity the Raven Queen|Exandria|EGW}, or {@deity the Traveler|Eberron}), or the night and dreams (such as {@deity Celestian|Greyhawk}, Morpheus, Nut, or {@deity Selûne}) might grant their clerics the Twilight Domain. Clerics who serve these deities tend to be brave, delving into the dark to hold its dangers at bay and to bring comfort to those lost far from the light.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Twilight Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell faerie fire}, {@spell sleep}"
						],
						[
							"3rd",
							"{@spell darkness}, {@spell invisibility}"
						],
						[
							"5th",
							"{@spell aura of vitality}, {@spell Leomund's tiny hut}"
						],
						[
							"7th",
							"{@spell aura of life}, {@spell greater invisibility}"
						],
						[
							"9th",
							"{@spell circle of power}, {@spell dream}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Twilight (UA)|UAClericDruidWizard|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of Night|Cleric||Twilight (UA)|UAClericDruidWizard|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Vigilant Blessing|Cleric||Twilight (UA)|UAClericDruidWizard|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"You gain proficiency with martial weapons and heavy armor."
			]
		},
		{
			"name": "Eyes of Night",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"Your eyes are blessed, allowing you to see through the deepest gloom. You have {@sense darkvision} with no maximum range; you can see in dim light as if it were bright light and in darkness as if it were dim light.",
				"As an action, you can magically give the benefit of this feature to any number of creatures you can see within 10 feet of you. The shared benefit lasts for 10 minutes. You can extend this benefit a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Vigilant Blessing",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Twilight Domain feature}",
				"The night has taught you to be vigilant. As an action, you give one creature you touch (including possibly yourself) advantage on the next initiative roll the creature makes. This benefit ends immediately after the roll or if you use this feature again."
			]
		},
		{
			"name": "Channel Divinity: Twilight Sanctuary",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 2nd-level Twilight Domain feature}",
				"You can use your Channel Divinity to refresh your allies with soothing twilight.",
				"As an action, you present your holy symbol, and a sphere of twilight emanates from you. The sphere is centered on you, has a 30-foot radius, and is filled with dim light. The sphere moves with you, and it lasts for 1 minute or until you are {@condition incapacitated} or die. Whenever a creature (including you) ends its turn in the sphere, you can grant that creature one of these benefits:",
				{
					"type": "list",
					"items": [
						"Give it {@dice 1d8} temporary hit points.",
						"End one effect causing it to be {@condition charmed} or {@condition frightened}."
					]
				}
			]
		},
		{
			"name": "Steps of the Brave",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Twilight Domain feature}",
				"You draw strength from your connection to twilight and find yourself at home within its dark embrace, gaining two benefits:",
				{
					"type": "list",
					"items": [
						"You have advantage on saving throws against being {@condition frightened}.",
						"If you are in dim light or darkness, you can use a bonus action to magically give yourself a flying speed equal to your walking speed until the end of your next turn."
					]
				}
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 8,
			"header": 2,
			"entries": [
				"{@i 8th-level Twilight Domain feature}",
				"You gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} psychic damage. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Midnight Shroud",
			"source": "UAClericDruidWizard",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Twilight Domain feature}",
				"You can harness the shrouding power of night to protect your allies and stymie your foes. Whenever you cast the {@spell darkness} spell using a spell slot, you can choose a number of creatures that you can see (including yourself) equal to your Wisdom modifier (minimum of one). The chosen creatures can see through the darkness."
			]
		},
		{
			"name": "City Domain (UA)",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"entries": [
				"The City domain is concerned with the citizenry, commerce, traffic, and even architecture of modern civilization. In the eyes of a cleric of the city, the center of modern life is a sense and spirit of community, and the gravest enemies of the city are those who seek to harm the common weal of its citizens.",
				"At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
				"Spells marked with an asterisk can be found in Unearthed Arcana: Modern Magic.",
				{
					"type": "table",
					"caption": "City Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell comprehend languages}, {@spell remote access (UA)|UAModernMagic|remote access}*"
						],
						[
							"3rd",
							"{@spell find vehicle (UA)|UAModernMagic|find vehicle}*, {@spell heat metal}"
						],
						[
							"5th",
							"{@spell lightning bolt}, {@spell protection from ballistics (UA)|UAModernMagic|protection from ballistics}*"
						],
						[
							"7th",
							"{@spell locate creature}, {@spell synchronicity (UA)|UAModernMagic|synchronicity}*"
						],
						[
							"9th",
							"{@spell commune with city (UA)|UAModernMagic|commune with city}*, {@spell shutdown (UA)|UAModernMagic|shutdown}*"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrip|Cleric||City (UA)|UAModernMagic|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Cleric||City (UA)|UAModernMagic|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Heart of the City|Cleric||City (UA)|UAModernMagic|1"
				}
			]
		},
		{
			"name": "Bonus Cantrip",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain the {@spell On/Off (UA)|UAModernMagic|on/off} cantrip in addition to your chosen cantrips."
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"Also starting at 1st level, you gain proficiency with sidearms and proficiency with vehicles (land)."
			]
		},
		{
			"name": "Heart of the City",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, you are able to tap into the spirit of community found in the city. While you are within any city, you can gain advantage on a single Charisma ({@skill Deception}, {@skill Intimidation}, or {@skill Persuasion}) check, and you are considered proficient in the appropriate skill. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain any expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Spirits of the City",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to call on the city for aid. As an action, you present your holy symbol, and any city utility within 30 feet of you either works perfectly or shuts down entirely for 1 minute (your choice).",
				"Additionally, each hostile creature within 30 feet of you must make a Charisma saving throw. On a failed save, the creature is knocked {@condition prone} or {@condition restrained} (your choice) by hazards such as entangling wires, high-pressure water erupting from fire hydrants, pavement collapsing to unseen potholes, and so on. A {@condition restrained} creature can escape by making a successful Strength ({@skill Athletics}) or Dexterity ({@skill Acrobatics}) check against your spell save DC.",
				"This effect is entirely local and affects only utilities within 30 feet of you. Determination of what utilities are available within range and how the physical effects of those utilities manifest are left to the DM."
			]
		},
		{
			"name": "Block Watch",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your awareness while in the city extends preternaturally. While in an urban environment, you are considered proficient in the {@skill Insight} and {@skill Perception} skills, and you add double your proficiency bonus to Wisdom ({@skill Insight}) and Wisdom ({@skill Perception}) checks, instead of your normal proficiency bonus."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with psychic energy borrowed from the citizens of your city. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} psychic damage to the target. When you reach 14th level, the extra psychic damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Express Transit",
			"source": "UAModernMagic",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "City (UA)",
			"subclassSource": "UAModernMagic",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can use mass transit routes to transport instantaneously to other points in the city. Starting from a bus stop, train station, subway stop, or other suitable mass transit site within the city, you can teleport to any other similar transit stop within the city, as if you had cast a {@spell teleport} spell whose destination is a permanent {@spell teleportation circle} you know. Once you use this feature, you must finish a short or long rest before using it again."
			]
		},
		{
			"name": "Order Domain (UA)",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 1,
			"entries": [
				"The Order domain represents discipline, as well as service to a society or an institution, whether that service is rendered in obedience to or enforcement of the law\u2014civil, religious, or both. Gods on many worlds grant access to this domain, including {@deity Bane}, {@deity Tyr}, {@deity Majere|Dragonlance}, {@deity Erathis|Dawn War|DMG}, {@deity Pholtus|Greyhawk}, {@deity Wee Jas|Greyhawk}, {@deity Aureon|Eberron}, {@deity Maglubiyet|Nonhuman}, {@deity Nuada|Celtic}, {@deity Athena|Greek}, {@deity Anubis|Egyptian}, {@deity Forseti|Norse}, and {@deity Asmodeus|Dawn War|DMG}.",
				"The ideal of order is obedience to the law above all else, rather than to a specific individual or the passing influence of emotion or popular rule. Clerics of order are typically concerned with how things are done, rather than whether an action's results are just. Following the law and obeying its edicts is critical, especially when it benefits these clerics and their deities.",
				"More importantly, law establishes hierarchies. Those selected by the law to lead must be obeyed. Those who obey must do so to the best of their ability. In this manner, law creates an intricate web of obligations that allows society to forge order and security in a chaotic multiverse.",
				"At each indicated cleric level, you add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Order Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell command}, {@spell heroism}"
						],
						[
							"3rd",
							"{@spell enhance ability}, {@spell hold person}"
						],
						[
							"5th",
							"{@spell mass healing word}, {@spell slow}"
						],
						[
							"7th",
							"{@spell compulsion}, {@spell locate creature}"
						],
						[
							"9th",
							"{@spell commune}, {@spell dominate person}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Order (UA)|UAOrderDomain|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Voice of Authority|Cleric||Order (UA)|UAOrderDomain|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor."
			]
		},
		{
			"name": "Voice of Authority",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can invoke the power of law to drive an ally to attack. Immediately after you cast a spell on an ally using a spell slot of 1st level or higher, that ally can use their reaction to make one weapon attack against a target of your choice that you can see. If the spell targets more than one ally, you choose the ally who can make the attack."
			]
		},
		{
			"name": "Channel Divinity: Order's Demand",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to exert an intimidating presence over others.",
				"As an action, you present your holy symbol, and each creature of your choice that can see or hear you within 30 feet of you must succeed on a Wisdom saving throw or be {@condition charmed} by you until the end of your next turn or until the {@condition charmed} creature takes any damage. You can also cause any of the {@condition charmed} creatures to fall {@condition prone} when they fail the saving throw."
			]
		},
		{
			"name": "Order's Dominion",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you become extraordinarily adept at channeling magical energy to compel others.",
				"When you cast a spell of the enchantment school using a spell slot of 2nd level or higher, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} force damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Order's Wrath",
			"source": "UAOrderDomain",
			"page": 1,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Order (UA)",
			"subclassSource": "UAOrderDomain",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, enemies you designate for destruction wilt under the combined efforts of you and your allies. If you deal your Divine Strike damage to a creature, that creature takes an extra {@damage 2d8} force damage the first time each turn that any ally of yours hits it with a weapon attack. This benefit lasts until the start of your next turn."
			]
		},
		{
			"name": "Forge Domain",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can be transformed from a lump of ore to a beautifully wrought object. Clerics of these deities search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include {@deity Gond}, {@deity Reorx|Dragonlance}, {@deity Onatar|Eberron}, {@deity Moradin|Nonhuman}, {@deity Hephaestus|Greek}, and {@deity Goibhniu|Celtic}.",
				"At each indicated cleric level, add the listed spells to your spells prepared.",
				{
					"type": "table",
					"caption": "Forge Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell identify}, {@spell searing smite}"
						],
						[
							"3rd",
							"{@spell heat metal}, {@spell magic weapon}"
						],
						[
							"5th",
							"{@spell elemental weapon}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell fabricate}, {@spell wall of fire}"
						],
						[
							"9th",
							"{@spell animate objects}, {@spell creation}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Cleric||Forge|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blessing of the Forge|Cleric||Forge|XGE|1"
				}
			]
		},
		{
			"name": "Blessing of the Forge",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, you can touch one nonmagical object that is a suit of armor or a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}. Until the end of your next long rest or until you die, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this domain at 1st level, you gain proficiency with heavy armor and {@item smith's tools|phb}."
			]
		},
		{
			"name": "Channel Divinity: Artisan's Blessing",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to create simple items.",
				"You conduct an hour-long ritual that crafts a nonmagical item that must include some metal: a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon}, a suit of armor, ten pieces of ammunition, a set of tools, or another metal object (see chapter 5, \"Equipment,\" in the Player's Handbook for examples of these items). The creation is completed at the end of the hour, coalescing in an unoccupied space of your choice on a surface within 5 feet of you.",
				"The thing you create can be something that is worth no more than 100 gp. As part of this ritual, you must lay out metal, which can include coins, with a value equal to the creation. The metal irretrievably coalesces and transforms into the creation at the ritual's end, magically forming even nonmetal parts of the creation. The ritual can create a duplicate of a nonmagical item that contains metal, such as a key, if you possess the original during the ritual."
			]
		},
		{
			"name": "Soul of the Forge",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your mastery of the forge grants you special abilities:",
				{
					"type": "list",
					"items": [
						"You gain resistance to fire damage.",
						"While wearing heavy armor, you gain a +1 bonus to AC."
					]
				}
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Divine Strike feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Divine Strike)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Divine Strike",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 8,
			"header": 2,
			"entries": [
				"At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra {@damage 1d8} fire damage to the target. When you reach 14th level, the extra damage increases to {@dice 2d8}."
			]
		},
		{
			"name": "Saint of Forge and Fire",
			"source": "XGE",
			"page": 18,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Forge",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, your blessed affinity with fire and metal becomes more powerful:",
				{
					"type": "list",
					"items": [
						"You gain immunity to fire damage",
						"While wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
					]
				}
			]
		},
		{
			"name": "Grave Domain",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse. To desecrate the peace of the dead is an abomination. Deities of the grave include {@deity Kelemvor}, {@deity Wee Jas|Greyhawk}, the ancestral spirits of {@deity the Undying Court|Eberron}, {@deity Hades|Greek}, {@deity Anubis|Egyptian}, and {@deity Osiris|Egyptian}. Followers of these deities seek to put wandering spirits to rest, destroy the undead, and ease the suffering of the dying. Their magic also allows them to stave off death for a time, particularly for a person who still has some great work to accomplish in the world. This is a delay of death, not a denial of it, for death will eventually get its due.",
				{
					"type": "table",
					"caption": "Grave Domain Spells",
					"colLabels": [
						"Cleric Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell bane}, {@spell false life}"
						],
						[
							"3rd",
							"{@spell gentle repose}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell revivify}, {@spell vampiric touch}"
						],
						[
							"7th",
							"{@spell blight}, {@spell death ward}"
						],
						[
							"9th",
							"{@spell antilife shell}, {@spell raise dead}"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle of Mortality|Cleric||Grave|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of the Grave|Cleric||Grave|XGE|1"
				}
			]
		},
		{
			"name": "Circle of Mortality",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to manipulate the line between life and death. When you would normally roll one or more dice to restore hit points with a spell to a creature at 0 hit points, you instead use the highest number possible for each die.",
				"In addition, you learn the {@spell spare the dying} cantrip, which doesn't count against the number of cleric cantrips you know. For you, it has a range of 30 feet, and you can cast it as a bonus action."
			]
		},
		{
			"name": "Eyes of the Grave",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to occasionally sense the presence of the undead, whose existence is an insult to the natural cycle of life. As an action, you can open your awareness to magically detect undead. Until the end of your next turn, you know the location of any undead within 60 feet of you that isn't behind total cover and that isn't protected from divination magic. This sense doesn't tell you anything about a creature's capabilities or identity.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Path to the Grave",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination.",
				"As an action, you choose one creature you can see within 30 feet of you, cursing it until the end of your next turn. The next time you or an ally of yours hits the cursed creature with an attack, the creature has vulnerability to all of that attack's damage, and then the curse ends."
			]
		},
		{
			"name": "Sentinel at Death's Door",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to impede death's progress. As a reaction when you or a creature you can see within 30 feet of you suffers a critical hit, you can turn that hit into a normal hit. Any effects triggered by a critical hit are canceled.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "TCE",
			"page": 30,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric {@variantrule optional class features|tce|optional feature}, which replaces the Potent Spellcasting feature}",
				"You are blessed with divine might in battle. When a creature takes damage from one of your cantrips or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Blessed Strikes",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 8,
			"isClassFeatureVariant": true,
			"header": 2,
			"entries": [
				"{@i 8th-level cleric Divine Domain feature (replaces Potent Spellcasting)}",
				"In battle, you are blessed with divine might. When a creature takes damage from one of your spells or weapon attacks, you can also deal {@damage 1d8} radiant damage to that creature. Once you deal this damage, you can't use this feature again until the start of your next turn."
			]
		},
		{
			"name": "Potent Spellcasting",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 8,
			"header": 2,
			"entries": [
				"Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
			]
		},
		{
			"name": "Keeper of Souls",
			"source": "XGE",
			"page": 19,
			"className": "Cleric",
			"classSource": "PHB",
			"subclassShortName": "Grave",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can seize a trace of vitality from a parting soul and use it to heal the living. When an enemy you can see dies within 60 feet of you, you or one creature of your choice that is within 60 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature only if you aren't {@condition incapacitated}. Once you use it, you can't do so again until the start of your next turn."
			]
		}
	]
}

export {cleric}