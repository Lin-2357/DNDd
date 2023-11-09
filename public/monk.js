const monk = 
{
	"class": [
		{
			"name": "Monk",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"str",
				"dex"
			],
			"startingProficiencies": {
				"weapons": [
					"simple",
					"{@item shortsword|phb|shortswords}"
				],
				"tools": [
					"any one type of {@item artisan's tools|PHB} or any one {@item musical instrument|PHB} of your choice"
				],
				"toolProficiencies": [
					{
						"anyArtisans": 1
					},
					{
						"anyMusicalInstrument": 1
					}
				],
				"skills": [
					{
						"choose": {
							"from": [
								"acrobatics",
								"athletics",
								"history",
								"insight",
								"religion",
								"stealth"
							],
							"count": 2
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) a {@item shortsword|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
					"10 {@item dart|phb|darts}"
				],
				"goldAlternative": "{@dice 5d4|5d4|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"shortsword|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimple"
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
							{
								"item": "dart|phb",
								"quantity": 10
							}
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
					"weapons": [
						"simple",
						"{@item shortsword|phb|shortswords}"
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"Martial Arts",
						"Ki Points",
						"Unarmored Movement"
					],
					"rows": [
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 4
									}
								],
								"rollable": true
							},
							0,
							{
								"type": "bonusSpeed",
								"value": 0
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 4
									}
								],
								"rollable": true
							},
							2,
							{
								"type": "bonusSpeed",
								"value": 10
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 4
									}
								],
								"rollable": true
							},
							3,
							{
								"type": "bonusSpeed",
								"value": 10
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 4
									}
								],
								"rollable": true
							},
							4,
							{
								"type": "bonusSpeed",
								"value": 10
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 6
									}
								],
								"rollable": true
							},
							5,
							{
								"type": "bonusSpeed",
								"value": 10
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 6
									}
								],
								"rollable": true
							},
							6,
							{
								"type": "bonusSpeed",
								"value": 15
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 6
									}
								],
								"rollable": true
							},
							7,
							{
								"type": "bonusSpeed",
								"value": 15
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 6
									}
								],
								"rollable": true
							},
							8,
							{
								"type": "bonusSpeed",
								"value": 15
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 6
									}
								],
								"rollable": true
							},
							9,
							{
								"type": "bonusSpeed",
								"value": 15
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 6
									}
								],
								"rollable": true
							},
							10,
							{
								"type": "bonusSpeed",
								"value": 20
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 8
									}
								],
								"rollable": true
							},
							11,
							{
								"type": "bonusSpeed",
								"value": 20
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 8
									}
								],
								"rollable": true
							},
							12,
							{
								"type": "bonusSpeed",
								"value": 20
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 8
									}
								],
								"rollable": true
							},
							13,
							{
								"type": "bonusSpeed",
								"value": 20
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 8
									}
								],
								"rollable": true
							},
							14,
							{
								"type": "bonusSpeed",
								"value": 25
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 8
									}
								],
								"rollable": true
							},
							15,
							{
								"type": "bonusSpeed",
								"value": 25
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 8
									}
								],
								"rollable": true
							},
							16,
							{
								"type": "bonusSpeed",
								"value": 25
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 10
									}
								],
								"rollable": true
							},
							17,
							{
								"type": "bonusSpeed",
								"value": 25
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 10
									}
								],
								"rollable": true
							},
							18,
							{
								"type": "bonusSpeed",
								"value": 30
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 10
									}
								],
								"rollable": true
							},
							19,
							{
								"type": "bonusSpeed",
								"value": 30
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 1,
										"faces": 10
									}
								],
								"rollable": true
							},
							20,
							{
								"type": "bonusSpeed",
								"value": 30
							}
						]
					]
				}
			],
			"classFeatures": [
				"Unarmored Defense|Monk||1",
				"Martial Arts|Monk||1",
				"Monk Weapons|Monk||1|UAClassFeatureVariants",
				"Ki|Monk||2",
				"Ki-Fueled Strike|Monk||2|UAClassFeatureVariants",
				"Ki Features|Monk||2|UAClassFeatureVariants",
				"Dedicated Weapon|Monk||2|TCE",
				"Unarmored Movement|Monk||2",
				"Deflect Missiles|Monk||3",
				{
					"classFeature": "Monastic Tradition|Monk||3",
					"gainSubclassFeature": true
				},
				"Ki-Fueled Attack|Monk||3|TCE",
				"Ability Score Improvement|Monk||4",
				"Proficiency Versatility|Monk||4|UAClassFeatureVariants",
				"Slow Fall|Monk||4",
				"Quickened Healing|Monk||4|TCE",
				"Extra Attack|Monk||5",
				"Stunning Strike|Monk||5",
				"Focused Aim|Monk||5|TCE",
				"Ki-Empowered Strikes|Monk||6",
				{
					"classFeature": "Monastic Tradition feature|Monk||6",
					"gainSubclassFeature": true
				},
				"Evasion|Monk||7",
				"Stillness of Mind|Monk||7",
				"Ability Score Improvement|Monk||8",
				"Proficiency Versatility|Monk||8|UAClassFeatureVariants",
				"Unarmored Movement improvement|Monk||9",
				"Purity of Body|Monk||10",
				{
					"classFeature": "Monastic Tradition feature|Monk||11",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Monk||12",
				"Proficiency Versatility|Monk||12|UAClassFeatureVariants",
				"Tongue of the Sun and Moon|Monk||13",
				"Diamond Soul|Monk||14",
				"Timeless Body|Monk||15",
				"Ability Score Improvement|Monk||16",
				"Proficiency Versatility|Monk||16|UAClassFeatureVariants",
				{
					"classFeature": "Monastic Tradition feature|Monk||17",
					"gainSubclassFeature": true
				},
				"Empty Body|Monk||18",
				"Ability Score Improvement|Monk||19",
				"Proficiency Versatility|Monk||19|UAClassFeatureVariants",
				"Perfect Self|Monk||20"
			],
			"subclassTitle": "Monastic Tradition",
			"fluff": [
				{
					"name": "Monk",
					"type": "section",
					"entries": [
						"Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone.",
						"Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes.",
						"Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone's throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep.",
						"Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
						{
							"type": "entries",
							"name": "The Magic of Ki",
							"entries": [
								"Monks make careful study of a magical energy that most monastic traditions call ki. This energy is an element of the magic that suffuses the multiverse\u2014specifically, the element that flows through living bodies. Monks harness this power within themselves to create magical effects and exceed their bodies' physical capabilities, and some of their special attacks can hinder the flow of ki in their opponents. Using this energy, monks channel uncanny speed and strength into their unarmed strikes. As they gain experience, their martial training and their mastery of ki gives them more power over their bodies and the bodies of their foes."
							]
						},
						{
							"type": "entries",
							"name": "Training and Asceticism",
							"entries": [
								"Small walled cloisters dot the landscapes of the worlds of D&D, tiny refuges from the flow of ordinary life, where time seems to stand still. The monks who live there seek personal perfection through contemplation and rigorous training. Many entered the monastery as children, sent to live there when their parents died, when food couldn't be found to support them, or in return for some kindness that the monks had performed for their families.",
								"Some monks live entirely apart from the surrounding population, secluded from anything that might impede their spiritual progress. Others are sworn to isolation, emerging only to serve as spies or assassins at the command of their leader, a noble patron, or some other mortal or divine power.",
								"The majority of monks don't shun their neighbors, making frequent visits to nearby towns or villages and exchanging their service for food and other goods. As versatile warriors, monks often end up protecting their neighbors from monsters or tyrants.",
								"For a monk, becoming an adventurer means leaving a structured, communal lifestyle to become a wanderer. This can be a harsh transition, and monks don't undertake it lightly. Those who leave their cloisters take their work seriously, approaching their adventures as personal tests of their physical and spiritual growth. As a rule, monks care little for material wealth and are driven by a desire to accomplish a greater mission than merely slaying monsters and plundering their treasure."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Monk",
							"entries": [
								"As you make your monk character, think about your connection to the monastery where you learned your skills and spent your formative years. Were you an orphan or a child left on the monastery's threshold? Did your parents promise you to the monastery in gratitude for a service performed by the monks? Did you enter this secluded life to hide from a crime you committed? Or did you choose the monastic life for yourself?",
								"Consider why you left. Did the head of your monastery choose you for a particularly important mission beyond the cloister? Perhaps you were cast out because of some violation of the community's rules. Did you dread leaving, or were you happy to go? Is there something you hope to accomplish outside the monastery? Are you eager to return to your home?",
								"As a result of the structured life of a monastic community and the discipline required to harness ki, monks are almost always lawful in alignment.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a monk quickly by following these suggestions. First, make Dexterity your highest ability score, followed by Wisdom. Second, choose the {@background hermit} background."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 76
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"Do not mistake my silence for acceptance of your villainy. While you blustered and threatened, I've planned four different ways to snap your neck with my bare hands."
							],
							"by": "Ember, grand master of flowers"
						},
						"Monks walk a path of contradiction. They study their art as a wizard does, and like a wizard, they wear no armor and typically eschew weapons. Yet they are deadly combatants, their abilities on a par with those of a raging barbarian or a superbly trained fighter. Monks embrace this seeming contradiction, for it speaks to the core of all monastic study. By coming to know oneself completely, one learns much of the wider world.",
						"A monk's focus on inner mastery leads many such individuals to become detached from society, more concerned with their personal experience than with happenings elsewhere. Adventuring monks are a rare breed of an already rare type of character, taking their quest for perfection beyond the walls of the monastery into the world at large.",
						"Playing a monk character offers many intriguing opportunities to try something different. To distinguish your monk character even further, consider the options in the sections that follow.",
						{
							"type": "entries",
							"name": "Monastery",
							"entries": [
								"A monk studies in a monastery in preparation for a life of asceticism. Most of those who enter a monastery make it their home for the rest of their lives, with the exception of adventurers and others who have reason to leave. For those individuals, a monastery might serve as a refuge between excursions to the world or as a source of support in times of need.",
								"What sort of place was your monastery, and where is it located? Did attending it contribute to your experience in an unusual or distinctive way?",
								{
									"type": "table",
									"caption": "Monastery",
									"colLabels": [
										"{@dice d6}",
										"Monastery"
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
											"Your monastery is carved out of a mountainside, where it looms over a treacherous pass."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your monastery is high in the branches of an immense tree in the Feywild."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your monastery was founded long ago by a cloud giant and is inside a cloud castle that can be reached only by flying."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your monastery is built beside a volcanic system of hot springs, geysers, and sulfur pools. You regularly received visits from azer traders."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Your monastery was founded by gnomes and is an underground labyrinth of tunnels and rooms."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Your monastery was carved from an iceberg in the frozen reaches of the world."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Icon",
							"entries": [
								"Even in the monastic lifestyle, which eschews materialism and personal possessions, symbolism plays an important part in defining the identity of an order. Some monastic orders treat certain creatures with special regard, either because the creature is tied to the order's history or because it serves as an example of a quality the monks seek to emulate.",
								"If your character's monastery had a special icon, you might wear a crude image of the creature somewhere inconspicuous on your clothing to serve as an identifying mark. Or perhaps your order's icon does not have a physical form but is expressed through a gesture or a posture that you adopt, and which other monks might know how to interpret.",
								{
									"type": "table",
									"caption": "Icon",
									"colLabels": [
										"{@dice d6}",
										"Icon"
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
											"Monkey. Quick reflexes and the ability to travel through the treetops are two of the reasons why your order admires the monkey."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Dragon Turtle. The monks of your seaside monastery venerate the dragon turtle, reciting ancient prayers and offering garlands of flowers to honor this living spirit of the sea."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Ki-rin. Your monastery sees its main purpose as watching over and protecting the land in the manner of the ki-rin."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Owlbear. The monks of your monastery revere a family of owlbears and have coexisted with them for generations."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Hydra. Your order singles out the hydra for its ability to unleash several attacks simultaneously."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Dragon. A dragon once laired within your monastery. Its influence remains long after its departure."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Master",
							"entries": [
								"During your studies, you were likely under the tutelage of a master who imparted to you the precepts of the order. Your master was the one most responsible for shaping your understanding of the martial arts and your attitude toward the world. What sort of person was your master, and how did your relationship with your master affect you?",
								{
									"type": "table",
									"caption": "Master",
									"colLabels": [
										"{@dice d6}",
										"Master"
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
											"Your master was a tyrant whom you had to defeat in single combat to complete your instruction."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your master was kindly and taught you to pursue the cause of peace."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your master was merciless in pushing you to your limits. You nearly lost an eye during one especially brutal practice session."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your master seemed goodhearted while tutoring you, but betrayed your monastery in the end."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Your master was cold and distant. You suspect that the two of you might be related."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Your master was kind and generous, never critical of your progress. Nevertheless, you feel you never fully lived up to the expectations placed on you."
										]
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 32
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Way of Shadow",
			"shortName": "Shadow",
			"source": "PHB",
			"className": "Monk",
			"classSource": "PHB",
			"page": 80,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"minor illusion#c"
						]
					},
					"innate": {
						"3": {
							"resource": {
								"2": [
									"darkness",
									"darkvision",
									"pass without trace",
									"silence"
								]
							}
						}
					},
					"resourceName": "Ki",
					"ability": "wis"
				}
			],
			"subclassFeatures": [
				"Way of Shadow|Monk||Shadow||3",
				"Shadow Step|Monk||Shadow||6",
				"Cloak of Shadows|Monk||Shadow||11",
				"Opportunist|Monk||Shadow||17"
			]
		},
		{
			"name": "Way of the Four Elements",
			"shortName": "Four Elements",
			"source": "PHB",
			"className": "Monk",
			"classSource": "PHB",
			"page": 80,
			"spellcastingAbility": "wis",
			"optionalfeatureProgression": [
				{
					"name": "Elemental Disciplines",
					"featureType": [
						"ED"
					],
					"progression": {
						"3": 2,
						"6": 3,
						"11": 4,
						"17": 5
					},
					"required": {
						"3": [
							"Elemental Attunement|PHB"
						]
					}
				}
			],
			"subclassFeatures": [
				"Way of the Four Elements|Monk||Four Elements||3",
				"Extra Elemental Discipline|Monk||Four Elements||6",
				"Extra Elemental Discipline|Monk||Four Elements||11",
				"Extra Elemental Discipline|Monk||Four Elements||17"
			]
		},
		{
			"name": "Way of the Open Hand",
			"shortName": "Open Hand",
			"source": "PHB",
			"className": "Monk",
			"classSource": "PHB",
			"page": 79,
			"srd": true,
			"additionalSpells": [
				{
					"innate": {
						"11": {
							"daily": {
								"1": [
									"sanctuary"
								]
							}
						}
					},
					"ability": "wis"
				}
			],
			"subclassFeatures": [
				"Way of the Open Hand|Monk||Open Hand||3",
				"Wholeness of Body|Monk||Open Hand||6",
				"Tranquility|Monk||Open Hand||11",
				"Quivering Palm|Monk||Open Hand||17"
			]
		},
		{
			"name": "Way of the Long Death",
			"shortName": "Long Death",
			"source": "SCAG",
			"className": "Monk",
			"classSource": "PHB",
			"page": 130,
			"subclassFeatures": [
				"Way of the Long Death|Monk||Long Death|SCAG|3",
				"Hour of Reaping|Monk||Long Death|SCAG|6",
				"Mastery of Death|Monk||Long Death|SCAG|11",
				"Touch of the Long Death|Monk||Long Death|SCAG|17"
			]
		},
		{
			"name": "Way of the Kensei (UA)",
			"shortName": "Kensei (UA)",
			"source": "UAMonk",
			"className": "Monk",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Way of the Kensei|Monk||Kensei (UA)|UAMonk|3",
				"One with the Blade|Monk||Kensei (UA)|UAMonk|6",
				"Sharpen the Blade|Monk||Kensei (UA)|UAMonk|11",
				"Unerring Accuracy|Monk||Kensei (UA)|UAMonk|17"
			]
		},
		{
			"name": "Way of Tranquility (UA)",
			"shortName": "Tranquility (UA)",
			"source": "UAMonk",
			"className": "Monk",
			"classSource": "PHB",
			"page": 1,
			"additionalSpells": [
				{
					"innate": {
						"3": {
							"_": [
								"sanctuary"
							]
						}
					},
					"ability": "wis"
				}
			],
			"subclassFeatures": [
				"Way of Tranquility|Monk||Tranquility (UA)|UAMonk|3",
				"Emissary of Peace|Monk||Tranquility (UA)|UAMonk|6",
				"Douse the Flames of War|Monk||Tranquility (UA)|UAMonk|11",
				"Anger of a Gentle Soul|Monk||Tranquility (UA)|UAMonk|17"
			]
		},
		{
			"name": "Way of the Drunken Master (UA)",
			"shortName": "Drunken Master (UA)",
			"source": "UAATrioOfSubclasses",
			"className": "Monk",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Way of the Drunken Master|Monk||Drunken Master (UA)|UAATrioOfSubclasses|3",
				"Tipsy Sway|Monk||Drunken Master (UA)|UAATrioOfSubclasses|6",
				"Drunkard's Luck|Monk||Drunken Master (UA)|UAATrioOfSubclasses|11",
				"Intoxicated Frenzy|Monk||Drunken Master (UA)|UAATrioOfSubclasses|17"
			]
		},
		{
			"name": "Way of the Kensei v2 (UA)",
			"shortName": "Kensei v2 (UA)",
			"source": "UARevisedSubclasses",
			"className": "Monk",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"subclassFeatures": [
				"Way of the Kensei v2|Monk||Kensei v2 (UA)|UARevisedSubclasses|3",
				"One with the Blade|Monk||Kensei v2 (UA)|UARevisedSubclasses|6",
				"Sharpen the Blade|Monk||Kensei v2 (UA)|UARevisedSubclasses|11",
				"Unerring Accuracy|Monk||Kensei v2 (UA)|UARevisedSubclasses|17"
			]
		},
		{
			"name": "Way of the Drunken Master",
			"shortName": "Drunken Master",
			"source": "XGE",
			"className": "Monk",
			"classSource": "PHB",
			"page": 33,
			"subclassFeatures": [
				"Way of the Drunken Master|Monk||Drunken Master|XGE|3",
				"Tipsy Sway|Monk||Drunken Master|XGE|6",
				"Drunkard's Luck|Monk||Drunken Master|XGE|11",
				"Intoxicated Frenzy|Monk||Drunken Master|XGE|17"
			]
		},
		{
			"name": "Way of the Kensei",
			"shortName": "Kensei",
			"source": "XGE",
			"className": "Monk",
			"classSource": "PHB",
			"page": 34,
			"subclassFeatures": [
				"Way of the Kensei|Monk||Kensei|XGE|3",
				"One with the Blade|Monk||Kensei|XGE|6",
				"Sharpen the Blade|Monk||Kensei|XGE|11",
				"Unerring Accuracy|Monk||Kensei|XGE|17"
			]
		},
		{
			"name": "Way of the Sun Soul",
			"shortName": "Sun Soul",
			"source": "XGE",
			"className": "Monk",
			"classSource": "PHB",
			"page": 35,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 131
				}
			],
			"additionalSpells": [
				{
					"innate": {
						"6": {
							"resource": {
								"2": [
									"burning hands"
								]
							}
						}
					},
					"resourceName": "Ki",
					"ability": "wis"
				}
			],
			"subclassFeatures": [
				"Way of the Sun Soul|Monk||Sun Soul|XGE|3",
				"Searing Arc Strike|Monk||Sun Soul|XGE|6",
				"Searing Sunburst|Monk||Sun Soul|XGE|11",
				"Sun Shield|Monk||Sun Soul|XGE|17"
			]
		},
		{
			"name": "Way of the Astral Self (UA)",
			"shortName": "Astral Self (UA)",
			"source": "UABarbarianAndMonk",
			"className": "Monk",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Way of the Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|3",
				"Visage of the Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|6",
				"Awakening of the Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|11",
				"Improved Arms of the Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|11",
				"Complete Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|17",
				"Improved Arms of the Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|17"
			]
		},
		{
			"name": "Way of Mercy (UA)",
			"shortName": "Mercy (UA)",
			"source": "UA2020SubclassesPt1",
			"className": "Monk",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Way of Mercy|Monk||Mercy (UA)|UA2020SubclassesPt1|3",
				"Noxious Aura|Monk||Mercy (UA)|UA2020SubclassesPt1|6",
				"Healing Technique|Monk||Mercy (UA)|UA2020SubclassesPt1|11",
				"Hand of Mercy|Monk||Mercy (UA)|UA2020SubclassesPt1|17"
			]
		},
		{
			"name": "Way of the Ascendant Dragon (UA)",
			"shortName": "Ascendant Dragon (UA)",
			"source": "UA2020SubclassesPt5",
			"className": "Monk",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Way of the Ascendant Dragon|Monk||Ascendant Dragon (UA)|UA2020SubclassesPt5|3",
				"Wings Unfurled|Monk||Ascendant Dragon (UA)|UA2020SubclassesPt5|6",
				"Aspect of the Wyrm|Monk||Ascendant Dragon (UA)|UA2020SubclassesPt5|11",
				"Ascendant Aspect|Monk||Ascendant Dragon (UA)|UA2020SubclassesPt5|17"
			]
		},
		{
			"name": "Way of Mercy",
			"shortName": "Mercy",
			"source": "TCE",
			"className": "Monk",
			"classSource": "PHB",
			"page": 49,
			"subclassFeatures": [
				"Way of Mercy|Monk||Mercy|TCE|3",
				"Physician's Touch|Monk||Mercy|TCE|6",
				"Flurry of Healing and Harm|Monk||Mercy|TCE|11",
				"Hand of Ultimate Mercy|Monk||Mercy|TCE|17"
			]
		},
		{
			"name": "Way of the Astral Self",
			"shortName": "Astral Self",
			"source": "TCE",
			"className": "Monk",
			"classSource": "PHB",
			"page": 50,
			"subclassFeatures": [
				"Way of the Astral Self|Monk||Astral Self|TCE|3",
				"Visage of the Astral Self|Monk||Astral Self|TCE|6",
				"Body of the Astral Self|Monk||Astral Self|TCE|11",
				"Awakened Astral Self|Monk||Astral Self|TCE|17"
			]
		},
		{
			"name": "Way of the Ascendant Dragon",
			"shortName": "Ascendant Dragon",
			"source": "FTD",
			"className": "Monk",
			"classSource": "PHB",
			"page": 13,
			"subclassFeatures": [
				"Way of the Ascendant Dragon|Monk||Ascendant Dragon|FTD|3",
				"Wings Unfurled|Monk||Ascendant Dragon|FTD|6",
				"Aspect of the Wyrm|Monk||Ascendant Dragon|FTD|11",
				"Ascendant Aspect|Monk||Ascendant Dragon|FTD|17"
			]
		}
	],
	"classFeature": [
		{
			"name": "Martial Arts",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are {@item shortsword|phb|shortswords} and any {@filter simple melee weapons that don't have the two-handed or heavy property|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand|property=!heavy;!two-handed}.",
				"You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a {@item shield|phb}.",
				{
					"type": "list",
					"items": [
						"You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
						"You can roll a {@dice d4} in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.",
						"When you use the {@action Attack} action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the {@action Attack} action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn."
					]
				},
				"Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama)."
			]
		},
		{
			"name": "Monk Weapons",
			"source": "UAClassFeatureVariants",
			"page": 6,
			"className": "Monk",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level monk feature (enhances Martial Arts)}",
				"You can use this feature to define your monk weapons, rather than using the definition in Martial Arts.",
				"You practice your martial arts with specially chosen weapons, which become monk weapons for you. You can choose a number of weapons to be your monk weapons equal to 5 + your Wisdom modifier (minimum of five weapons). The chosen weapons must each meet the following criteria:",
				{
					"type": "list",
					"items": [
						"The weapon must be a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon|property=!heavy;!two-handed;!special}.",
						"You must be proficient with the weapon.",
						"The weapon must lack these properties: heavy, special, or two-handed."
					]
				}
			]
		},
		{
			"name": "Unarmored Defense",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
			]
		},
		{
			"name": "Dedicated Weapon",
			"source": "TCE",
			"page": 48,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level monk {@variantrule optional class features|tce|optional feature}}",
				"You train yourself to use a variety of weapons as monk weapons, not just simple melee weapons and shortswords. Whenever you finish a short or long rest, you can touch one weapon, focus your ki on it, and then count that weapon as a monk weapon until you use this feature again.",
				"The chosen weapon must meet these criteria:",
				{
					"type": "list",
					"items": [
						"The weapon must be a {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon|property=!heavy;!special}.",
						"You must be proficient with it.",
						"It must lack the heavy and special properties."
					]
				}
			]
		},
		{
			"name": "Flurry of Blows",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"Immediately after you take the {@action Attack} action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
			]
		},
		{
			"name": "Ki",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.",
				"You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
				"When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
				"Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:",
				{
					"type": "abilityDc",
					"name": "Ki",
					"attributes": [
						"wis"
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "refClassFeature",
							"classFeature": "Flurry of Blows|Monk||2"
						},
						{
							"type": "refClassFeature",
							"classFeature": "Patient Defense|Monk||2"
						},
						{
							"type": "refClassFeature",
							"classFeature": "Step of the Wind|Monk||2"
						}
					]
				}
			]
		},
		{
			"name": "Ki Features",
			"source": "UAClassFeatureVariants",
			"page": 6,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level monk feature (enhances Ki)}",
				"When you gain the Ki feature at 2nd level, you get access to the following features.",
				{
					"type": "entries",
					"name": "Distant Eye",
					"entries": [
						"When you make a ranged weapon attack, you can spend 1 ki point to prevent attacking at long range from imposing disadvantage on your attack rolls until the end of the current turn."
					]
				},
				{
					"type": "entries",
					"name": "Quickened Healing",
					"entries": [
						"As an action, you can spend 2 ki points and roll a Martial Arts die. You regain a number of hit points equal to the number rolled."
					]
				}
			]
		},
		{
			"name": "Ki-Fueled Strike",
			"source": "UAClassFeatureVariants",
			"page": 6,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level monk feature (enhances Ki)}",
				"If you spend 1 ki or more as part of your action on your turn, you can then immediately make one unarmed strike as a bonus action."
			]
		},
		{
			"name": "Patient Defense",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"You can spend 1 ki point to take the {@action Dodge} action as a bonus action on your turn."
			]
		},
		{
			"name": "Step of the Wind",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"You can spend 1 ki point to take the {@action Disengage} or {@action Dash} action as a bonus action on your turn, and your jump distance is doubled for the turn."
			]
		},
		{
			"name": "Unarmored Movement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.",
				"At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
			]
		},
		{
			"name": "Deflect Missiles",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by {@dice 1d10} + your Dexterity modifier + your monk level.",
				"If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
			]
		},
		{
			"name": "Ki-Fueled Attack",
			"source": "TCE",
			"page": 48,
			"className": "Monk",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level monk {@variantrule optional class features|tce|optional feature}}",
				"If you spend 1 ki point or more as part of your action on your turn, you can make one attack with an unarmed strike or a monk weapon as a bonus action before the end of the turn."
			]
		},
		{
			"name": "Monastic Tradition",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"When you reach 3rd level, you commit yourself to a monastic tradition, chosen from the list of available traditions. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
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
			"className": "Monk",
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
			"name": "Quickened Healing",
			"source": "TCE",
			"page": 48,
			"className": "Monk",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Ki",
				"amount": 2
			},
			"entries": [
				"{@i 4th-level monk {@variantrule optional class features|tce|optional feature}}",
				"As an action, you can spend 2 ki points and roll a Martial Arts die. You regain a number of hit points equal to the number rolled plus your proficiency bonus."
			]
		},
		{
			"name": "Slow Fall",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
			]
		},
		{
			"name": "Extra Attack",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Focused Aim",
			"source": "TCE",
			"page": 48,
			"className": "Monk",
			"classSource": "PHB",
			"level": 5,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 5th-level monk {@variantrule optional class features|tce|optional feature}}",
				"When you miss with an attack roll, you can spend 1 to 3 ki points to increase your attack roll by 2 for each of these ki points you spend, potentially turning the miss into a hit."
			]
		},
		{
			"name": "Stunning Strike",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 5,
			"consumes": {
				"name": "Ki",
				"amount": 1
			},
			"entries": [
				"Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be {@condition stunned} until the end of your next turn."
			]
		},
		{
			"name": "Ki-Empowered Strikes",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
			]
		},
		{
			"name": "Monastic Tradition feature",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain one feature granted by your Monastic Tradition."
			]
		},
		{
			"name": "Evasion",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a {@spell fireball} spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
			]
		},
		{
			"name": "Stillness of Mind",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be {@condition charmed} or {@condition frightened}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
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
			"className": "Monk",
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
			"name": "Unarmored Movement improvement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 9,
			"entries": [
				"At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
			]
		},
		{
			"name": "Purity of Body",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
			]
		},
		{
			"name": "Monastic Tradition feature",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"At 11th level, you gain one feature granted by your Monastic Tradition."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
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
			"className": "Monk",
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
			"name": "Tongue of the Sun and Moon",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 13,
			"entries": [
				"Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
			]
		},
		{
			"name": "Diamond Soul",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 14,
			"consumes": {
				"name": "Ki",
				"amount": 1
			},
			"entries": [
				"Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
				"Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
			]
		},
		{
			"name": "Timeless Body",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
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
			"className": "Monk",
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
			"name": "Monastic Tradition feature",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you gain one feature granted by your Monastic Tradition."
			]
		},
		{
			"name": "Empty Body",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 18,
			"consumes": {
				"name": "Ki",
				"amount": 4
			},
			"entries": [
				"Beginning at 18th level, you can use your action to spend 4 ki points to become {@condition invisible} for 1 minute. During that time, you also have resistance to all damage but force damage.",
				"Additionally, you can spend 8 ki points to cast the {@spell astral projection} spell, without needing material components. When you do so, you can't take any other creatures with you."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
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
			"className": "Monk",
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
			"name": "Perfect Self",
			"source": "PHB",
			"page": 76,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Way of the Ascendant Dragon",
			"source": "FTD",
			"page": 13,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon",
			"subclassSource": "FTD",
			"level": 3,
			"entries": [
				"The dragon god Bahamut is known to travel the Material Plane in the guise of a young monk, and legend says that he founded the first monastery of the Way of the Ascendant Dragon in this guise. The fundamental teaching of this tradition holds that by emulating dragons, a monk becomes a more integrated part of the world and its magic. By altering their spirit to resonate with draconic might, monks who follow this tradition augment their prowess in battle, bolster their allies, and can even soar through the air on draconic wings. But all this power is in service of a greater goal: achieving a spiritual unity with the essence of the Material Plane.",
				"As a follower of the Way of the Ascendant Dragon, you decide how you unlocked the power of dragons within yourself. The Ascendant Dragon Origin table offers a number of possibilities.",
				{
					"type": "table",
					"caption": "Ascendant Dragon Origin",
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
							"You honed your abilities by aligning your spirit with a dragon's world-altering power."
						],
						[
							"2",
							"A dragon personally took an active role in shaping your inner energy."
						],
						[
							"3",
							"You studied at a monastery that traces its teachings back centuries or more to a single dragon's instruction, or one that is devoted to a dragon god."
						],
						[
							"4",
							"You spent long stretches meditating in the region around an ancient dragon's lair, absorbing that lair's ambient magic."
						],
						[
							"5",
							"You found a scroll written in Draconic that contained inspiring new techniques."
						],
						[
							"6",
							"After a dream featuring a five-handed dragonborn, you awoke with the mystical breath of dragons."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Disciple|Monk||Ascendant Dragon|FTD|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Breath of the Dragon|Monk||Ascendant Dragon|FTD|3"
				}
			]
		},
		{
			"name": "Breath of the Dragon",
			"source": "FTD",
			"page": 13,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Way of the Ascendant Dragon feature}",
				"You can channel destructive waves of energy, like those created by the dragons you emulate. When you take the {@action Attack} action on your turn, you can replace one of the attacks with an exhalation of draconic energy in either a 20-foot cone or a 30-foot line that is 5 feet wide (your choice). Choose a damage type: acid, cold, fire, lightning, or poison. Each creature in that area must make a Dexterity saving throw against your ki save DC, taking damage of the chosen type equal to two rolls of your Martial Arts die on a failed save, or half as much damage on a successful one.",
				"At 11th level, the damage of this feature increases to three rolls of your Martial Arts die.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. While you have no uses available, you can spend 2 ki points to use this feature again."
			]
		},
		{
			"name": "Draconic Disciple",
			"source": "FTD",
			"page": 13,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon",
			"subclassSource": "FTD",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Way of the Ascendant Dragon feature}",
				"You can channel draconic power to magnify your presence and imbue your unarmed strikes with the essence of a dragon's breath. You gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Draconic Presence",
							"entry": "If you fail a Charisma ({@skill Intimidation}) or Charisma ({@skill Persuasion}) check, you can use your reaction to reroll the check, as you tap into the mighty presence of dragons. Once this feature turns a failure into a success, you can't use it again until you finish a long rest."
						},
						{
							"type": "item",
							"name": "Draconic Strike",
							"entry": "When you damage a target with an unarmed strike, you can change the damage type to acid, cold, fire, lightning, or poison."
						},
						{
							"type": "item",
							"name": "Tongue of Dragons",
							"entry": "You learn to speak, read, and write {@language Draconic} or one other language of your choice."
						}
					]
				}
			]
		},
		{
			"name": "Wings Unfurled",
			"source": "FTD",
			"page": 13,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon",
			"subclassSource": "FTD",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Way of the Ascendant Dragon feature}",
				"When you use your Step of the Wind, you can unfurl spectral draconic wings from your back that vanish at the end of your turn. While the wings exist, you have a flying speed equal to your walking speed.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Aspect of the Wyrm",
			"source": "FTD",
			"page": 13,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon",
			"subclassSource": "FTD",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Way of the Ascendant Dragon feature}",
				"The power of your draconic spirit now radiates from you, warding your allies or inspiring fear in your enemies. As a bonus action, you can create an aura of draconic power that radiates 10 feet from you for 1 minute. For the duration, you gain one of the following effects of your choice:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Frightful Presence",
							"entry": "When you create this aura, and as a bonus action on subsequent turns, you can choose a creature within the aura. The target must succeed on a Wisdom saving throw against your ki save DC or become {@condition frightened} of you for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful save."
						},
						{
							"type": "item",
							"name": "Resistance",
							"entry": "Choose a damage type when you activate this aura: acid, cold, fire, lightning, or poison. You and your allies within the aura have resistance to that damage."
						}
					]
				},
				"Once you create this aura, you can't create it again until you finish a long rest, unless you expend 3 ki points to create it again."
			]
		},
		{
			"name": "Ascendant Aspect",
			"source": "FTD",
			"page": 13,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon",
			"subclassSource": "FTD",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Way of the Ascendant Dragon feature}",
				"Your draconic spirit reaches its peak. You gain the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Augment Breath",
							"entry": "When you use your Breath of the Dragon, you can spend 1 ki point to augment its shape and power. The exhalation of draconic energy becomes either a 60-foot cone or a 90-foot line that is 5 feet wide (your choice), and each creature in that area takes damage equal to four rolls of your Martial Arts die on a failed save, or half as much damage on a successful one."
						},
						{
							"type": "item",
							"name": "Blindsight",
							"entry": "You gain {@sense blindsight} out to 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're {@condition blinded} or in darkness. Moreover, you can see an {@condition invisible} creature within that range, unless the creature successfully hides from you."
						},
						{
							"type": "item",
							"name": "Explosive Fury",
							"entry": "When you activate your Aspect of the Wyrm, draconic fury explodes from you. Choose any number of creatures you can see in your aura. Each of those creatures must succeed on a Dexterity saving throw against your ki save DC or take {@damage 3d10} acid, cold, fire, lightning, or poison damage (your choice)."
						}
					]
				}
			]
		},
		{
			"name": "Way of the Four Elements",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Four Elements",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.",
				"Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Disciple of the Elements|Monk||Four Elements||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Elemental Disciplines|Monk||Four Elements||3"
				}
			]
		},
		{
			"name": "Disciple of the Elements",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Four Elements",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.",
				"You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.",
				"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.",
				{
					"type": "entries",
					"name": "Casting Elemental Spells",
					"entries": [
						"Some elemental disciplines allow you to cast spells. See {@book chapter 10|PHB|10} of the Player's Handbook for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.",
						"Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as {@spell burning hands} does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast {@spell burning hands}, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).",
						"The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table. At 5th level, you may spend up to 3 ki points; this increases to 4 ki points at 9th level, 5 at 13th level, and 6 at 17th level.",
						{
							"type": "table",
							"caption": "Spells and Ki Points",
							"colLabels": [
								"Monk Levels",
								"Maximum Ki Points for a Spell"
							],
							"colStyles": [
								"col-5 text-center",
								"col-7 text-center"
							],
							"rows": [
								[
									"5th-8th",
									3
								],
								[
									"9th-12th",
									4
								],
								[
									"13th-16th",
									5
								],
								[
									"17th-20th",
									6
								]
							]
						}
					]
				}
			]
		},
		{
			"name": "Elemental Disciplines",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Four Elements",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"The elemental disciplines are presented in alphabetical order. If a discipline requires a level, you must be the level in this class to learn the discipline.",
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Breath of Winter",
							"name": "Breath of Winter (17th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Clench of the North Wind",
							"name": "Clench of the North Wind (6th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Elemental Attunement",
							"data": {
								"isRequiredOption": true
							}
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Eternal Mountain Defense",
							"name": "Eternal Mountain Defense (17th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Fangs of the Fire Snake"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Fist of Four Thunders"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Unbroken Air"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Flames of the Phoenix",
							"name": "Flames of the Phoenix (11th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Gong of the Summit",
							"name": "Gong of the Summit (6th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Mist Stance",
							"name": "Mist Stance (11th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Ride the Wind",
							"name": "Ride the Wind (11th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "River of Hungry Flame",
							"name": "River of Hungry Flame (17th Level Required)"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Rush of the Gale Spirits"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Shape the Flowing River"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Sweeping Cinder Strike"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Water Whip"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Wave of Rolling Earth",
							"name": "Wave of Rolling Earth (17th Level Required)"
						}
					]
				}
			]
		},
		{
			"name": "Extra Elemental Discipline",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Four Elements",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"You learn one additional elemental discipline of your choice. You should know 2 elemental disciplines, as well as Elemental Attunement.",
				"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline."
			]
		},
		{
			"name": "Extra Elemental Discipline",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Four Elements",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"You learn one additional elemental discipline of your choice. You should know 3 elemental disciplines, as well as Elemental Attunement.",
				"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline."
			]
		},
		{
			"name": "Extra Elemental Discipline",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Four Elements",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"You learn one additional elemental discipline of your choice. You should know 4 elemental disciplines, as well as Elemental Attunement.",
				"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline."
			]
		},
		{
			"name": "Way of the Open Hand",
			"source": "PHB",
			"page": 79,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Open Hand",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Open Hand Technique|Monk||Open Hand||3"
				}
			]
		},
		{
			"name": "Open Hand Technique",
			"source": "PHB",
			"page": 79,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Open Hand",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target.",
				{
					"type": "list",
					"items": [
						"It must succeed on a Dexterity saving throw or be knocked {@condition prone}.",
						"It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
						"It can't take reactions until the end of your next turn."
					]
				}
			]
		},
		{
			"name": "Wholeness of Body",
			"source": "PHB",
			"page": 79,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Open Hand",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
			]
		},
		{
			"name": "Tranquility",
			"source": "PHB",
			"page": 79,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Open Hand",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a {@spell sanctuary} spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
			]
		},
		{
			"name": "Quivering Palm",
			"source": "PHB",
			"page": 79,
			"srd": true,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Open Hand",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 3
			},
			"entries": [
				"You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes {@damage 10d10} necrotic damage.",
				"You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
			]
		},
		{
			"name": "Way of Shadow",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Shadow Arts|Monk||Shadow||3"
				}
			]
		},
		{
			"name": "Shadow Arts",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki",
				"amount": 2
			},
			"entries": [
				"You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast {@spell darkness}, {@spell darkvision}, {@spell pass without trace}, or {@spell silence}, without providing material components. Additionally, you gain the {@spell minor illusion} cantrip if you don't already know it."
			]
		},
		{
			"name": "Shadow Step",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn."
			]
		},
		{
			"name": "Cloak of Shadows",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "PHB",
			"level": 11,
			"header": 2,
			"entries": [
				"By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become {@condition invisible}. You remain {@condition invisible} until you make an attack, cast a spell, or are in an area of bright light."
			]
		},
		{
			"name": "Opportunist",
			"source": "PHB",
			"page": 80,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature."
			]
		},
		{
			"name": "Way of the Long Death",
			"source": "SCAG",
			"page": 130,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Long Death",
			"subclassSource": "SCAG",
			"level": 3,
			"entries": [
				"Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Touch of Death|Monk||Long Death|SCAG|3"
				}
			]
		},
		{
			"name": "Touch of Death",
			"source": "SCAG",
			"page": 130,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Long Death",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point)."
			]
		},
		{
			"name": "Hour of Reaping",
			"source": "SCAG",
			"page": 130,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Long Death",
			"subclassSource": "SCAG",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be {@condition frightened} of you until the end of your next turn."
			]
		},
		{
			"name": "Mastery of Death",
			"source": "SCAG",
			"page": 130,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Long Death",
			"subclassSource": "SCAG",
			"level": 11,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead."
			]
		},
		{
			"name": "Touch of the Long Death",
			"source": "SCAG",
			"page": 130,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Long Death",
			"subclassSource": "SCAG",
			"level": 17,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes {@damage 2d10} necrotic damage per ki point spent on a failed save, or half as much damage on a successful one."
			]
		},
		{
			"name": "Way of the Astral Self",
			"source": "TCE",
			"page": 50,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"A monk who follows the Way of the Astral Self believes their body is an illusion. They see their ki as a representation of their true form, an astral self. This astral self has the capacity to be a force of order or disorder, with some monasteries training students to use their power to protect the weak and other instructing aspirants in how to manifest their true selves in service to the mighty.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Forms of Your Astral Self|Monk||Astral Self|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arms of the Astral Self|Monk||Astral Self|TCE|3"
				}
			]
		},
		{
			"name": "Arms of the Astral Self",
			"source": "TCE",
			"page": 50,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 3rd-level Way of the Astral Self feature}",
				"Your mastery of your ki allows you to summon a portion of your astral self. As a bonus action, you can spend 1 ki point to summon the arms of your astral self. When you do so, each creature of your choice that you can see within 10 feet of you must succeed on a Dexterity saving throw or take force damage equal to two rolls of your Martial Arts die.",
				"For 10 minutes, these spectral arms hover near your shoulders or surround your arms (your choice). You determine the arms' appearance, and they vanish early if you are {@condition incapacitated} or die.",
				"While the spectral arms are present, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.",
						"You can use the spectral arms to make unarmed strikes.",
						"When you make an unarmed strike with the arms on your turn, your reach for it is 5 feet greater than normal.",
						"The unarmed strikes you make with the arms can use your Wisdom modifier in place of your Strength or Dexterity modifier for the attack and damage rolls, and their damage type is force."
					]
				}
			]
		},
		{
			"name": "Forms of Your Astral Self",
			"source": "TCE",
			"page": 50,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"type": "inset",
			"entries": [
				"The astral self is a translucent embodiment of the monk's soul. As a result, an astral self can reflect aspects of a monk's background, ideals, flaws, and bonds, and an astral self doesn't necessarily look anything like the monk. For example, the astral self of a lanky human might be reminiscent of a minotaur-the strength of which the monk feels within. Similarly, an orc monk might manifest gossamer arms and a delicate visage, representing the gentle beauty of the orc's soul. Each astral self is unique, and some of the monks of this monastic tradition are known more for the appearance of their astral self than for their physical appearance.",
				"When choosing this path, consider the quirks that define your monk. Are you obsessed with something? Are you driven by justice or a selfish desire? Any of these motivations could manifest in the form of your astral self."
			]
		},
		{
			"name": "Visage of the Astral Self",
			"source": "TCE",
			"page": 50,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 6th-level Way of the Astral Self feature}",
				"You can summon the visage of your astral self. As a bonus action, or as part of the bonus action you take to activate Arms of the Astral Self, you can spend 1 ki point to summon this visage for 10 minutes. It vanishes early if you are {@condition incapacitated} or die.",
				"The spectral visage covers your face like a helmet or mask. You determine its appearance.",
				"While the spectral visage is present, you gain the following benefits.",
				{
					"type": "entries",
					"name": "Astral Sight",
					"entries": [
						"You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
					]
				},
				{
					"type": "entries",
					"name": "Wisdom of the Spirit",
					"entries": [
						"You have advantage on Wisdom ({@skill Insight}) and Charisma ({@skill Intimidation}) checks."
					]
				},
				{
					"type": "entries",
					"name": "Word of the Spirit",
					"entries": [
						"When you speak, you can direct your words to a creature of your choice that you can see within 60 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you."
					]
				}
			]
		},
		{
			"name": "Body of the Astral Self",
			"source": "TCE",
			"page": 50,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Way of the Astral Self feature}",
				"When you have both your astral arms and visage summoned, you can cause the body of your astral self to appear (no action required). This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance.",
				"While the spectral body is present, you gain the following benefits.",
				{
					"type": "entries",
					"name": "Deflect Energy",
					"entries": [
						"When you take acid, cold, fire, force, lightning, or thunder damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by {@dice 1d10} + your Wisdom modifier (minimum reduction of 1)."
					]
				},
				{
					"type": "entries",
					"name": "Empowered Arms",
					"entries": [
						"Once on each of your turns when you hit a target with the Arms of the Astral Self, you can deal extra damage to the target equal to your Martial Arts die."
					]
				}
			]
		},
		{
			"name": "Awakened Astral Self",
			"source": "TCE",
			"page": 50,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 5
			},
			"entries": [
				"{@i 17th-level Way of the Astral Self feature}",
				"Your connection to your astral self is complete, allowing you to unleash its full potential. As a bonus action, you can spend 5 ki points to summon the arms, visage, and body of your astral self and awaken it for 10 minutes. This awakening ends early if you are {@condition incapacitated} or die.",
				"While your astral self is awakened, you gain the following benefits.",
				{
					"type": "entries",
					"name": "Armor of the Spirit",
					"entries": [
						"You gain a +2 bonus to Armor Class."
					]
				},
				{
					"type": "entries",
					"name": "Astral Barrage",
					"entries": [
						"Whenever you use the Extra Attack feature to attack twice, you can instead attack three times if all the attacks are made with your astral arms."
					]
				}
			]
		},
		{
			"name": "Way of Mercy",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help, they bring a swift end as an act of mercy.",
				"Those who follow the Way of Mercy might be members of a religious order, administering to the needy and making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies.",
				"The walkers of this way usually don robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Implements of Mercy|Monk||Mercy|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hand of Healing|Monk||Mercy|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hand of Harm|Monk||Mercy|TCE|3"
				}
			]
		},
		{
			"name": "Hand of Harm",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 3rd-level Way of Mercy feature}",
				"You use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die + your Wisdom modifier. You can use this feature only once per turn."
			]
		},
		{
			"name": "Hand of Healing",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 3rd-level Way of Mercy feature}",
				"Your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.",
				"When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending a ki point for the healing."
			]
		},
		{
			"name": "Implements of Mercy",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Way of Mercy feature}",
				"You gain proficiency in the {@skill Insight} and {@skill Medicine} skills, and you gain proficiency with the {@item herbalism kit|PHB}.",
				"You also gain a special mask, which you often wear when using the features of this subclass. You determine its appearance, or generate it randomly by rolling on the Merciful Mask table.",
				{
					"type": "table",
					"caption": "Merciful Mask",
					"colLabels": [
						"d6",
						"Mask Appearance"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Raven"
						],
						[
							"2",
							"Blank and white"
						],
						[
							"3",
							"Crying visage"
						],
						[
							"4",
							"Laughing visage"
						],
						[
							"5",
							"Skull"
						],
						[
							"6",
							"Butterfly"
						]
					]
				}
			]
		},
		{
			"name": "Physician's Touch",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Way of Mercy feature}",
				"You can administer even greater cures with a touch, and if you feel it's necessary, you can use your knowledge to cause harm.",
				"When you use Hand of Healing on a creature, you can also end one disease or one of the following conditions affecting the creature: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, {@condition poisoned}, or {@condition stunned}.",
				"When you use Hand of Harm on a creature, you can subject that creature to the {@condition poisoned} condition until the end of your next turn."
			]
		},
		{
			"name": "Flurry of Healing and Harm",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Way of Mercy feature}",
				"You can now mete out a flurry of comfort and hurt. When you use Flurry of Blows, you can now replace each of the unarmed strikes with a use of your Hand of Healing, without spending ki points for the healing.",
				"In addition, when you make an unarmed strike with Flurry of Blows, you can use Hand of Harm with that strike without spending the ki point for Hand of Harm. You can still use Hand of Harm only once per turn."
			]
		},
		{
			"name": "Hand of Ultimate Mercy",
			"source": "TCE",
			"page": 49,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 5
			},
			"entries": [
				"{@i 17th-level Way of Mercy feature}",
				"Your mastery of life energy opens the door to the ultimate mercy. As an action, you can touch the corpse of a creature that died within the past 24 hours and expend 5 ki points. The creature then returns to life, regaining a number of hit points equal to {@dice 4d10} + your Wisdom modifier. If the creature died while subject to any of the following conditions, it revives with them removed: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, {@condition poisoned}, and {@condition stunned}.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Way of Mercy",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"entries": [
				"Monks of the Way of Mercy learn to manipulate the life force of others to bring aid to those in need. They are wandering physicians to the poor and hurt. However, to those beyond their help\u2014whether ailing or evil\u2014they bring a swift end as an act of mercy.",
				"Those who follow the Way of Mercy might be humble members of a religious order, administering to those in greatest need, making grim choices rooted in reality rather than idealism. Some might be gentle-voiced healers, beloved by their communities, while others might be masked bringers of macabre mercies. The walkers of this way usually don simple robes with deep cowls, and they often conceal their faces with masks, presenting themselves as the faceless bringers of life and death. If you wear a mask, choose its appearance, or determine it randomly by rolling on the Merciful Mask table.",
				{
					"type": "table",
					"caption": "Merciful Mask",
					"colLabels": [
						"d6",
						"Mask Appearance"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Raven"
						],
						[
							"2",
							"Blank and white"
						],
						[
							"3",
							"Crying visage"
						],
						[
							"4",
							"Laughing visage"
						],
						[
							"5",
							"Skull"
						],
						[
							"6",
							"Butterfly"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Implements of Mercy|Monk||Mercy (UA)|UA2020SubclassesPt1|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hands of Healing|Monk||Mercy (UA)|UA2020SubclassesPt1|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hands of Harm|Monk||Mercy (UA)|UA2020SubclassesPt1|3"
				}
			]
		},
		{
			"name": "Hands of Harm",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 3rd-level Way of Mercy feature}",
				"You use your ki to inflict wounds. When you hit a creature with an unarmed strike, you can spend 1 ki point to deal extra necrotic damage equal to one roll of your Martial Arts die. If the creature is {@condition incapacitated} or {@condition poisoned}, the creature instead takes necrotic damage equal to three rolls of your Martial Arts die instead. You can use this feature only once on each of your turns."
			]
		},
		{
			"name": "Hands of Healing",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 3rd-level Way of Mercy feature}",
				"Your mystical touch can mend wounds. As an action, you can spend 1 ki point to touch a creature and restore a number of hit points equal to a roll of your Martial Arts die + your Wisdom modifier.",
				"When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature without spending its ki cost."
			]
		},
		{
			"name": "Implements of Mercy",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Way of Mercy feature}",
				"You gain proficiency in the {@skill Insight} or {@skill Medicine} skill (your choice), and you gain proficiency with the {@item herbalism kit|phb} and the {@item poisoner's kit|phb}."
			]
		},
		{
			"name": "Noxious Aura",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"{@i 6th-level Way of Mercy feature}",
				"As a bonus action, you spend 1 ki point to turn your ki into an aura of toxic miasma. The aura extends 5 feet from you in every direction, but not through total cover. It lasts for 1 minute, until you're {@condition incapacitated}, or you dismiss it (no action required).",
				"While your aura is active, ranged attacks have disadvantage against you. Any other creature that starts its turn in the aura must succeed on a Constitution saving throw or become {@condition poisoned} until the end of your next turn and take poison damage equal to your Wisdom modifier (minimum of 0 damage)."
			]
		},
		{
			"name": "Healing Technique",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Way of Mercy feature}",
				"Your skill in manipulating your ki to heal increases. When you restore hit points to a creature using your Hands of Healing, you can also end one disease or a condition from the following list affecting the target: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, or {@condition poisoned}."
			]
		},
		{
			"name": "Hand of Mercy",
			"source": "UA2020SubclassesPt1",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Mercy (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 17,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 4
			},
			"entries": [
				"{@i 17th-level Way of Mercy feature}",
				"Your mastery of life energy opens the door to the ultimate respite technique. As an action, you can touch a creature, expend 4 ki points, and force the creature to make a Constitution saving throw (a creature can willingly fail this save). Unless the save succeeds, the creature enters a state of suspended animation for a number of days equal to your monk level or until you end the effect early (no action required). During this time, the creature is {@condition paralyzed}, has immunity to all damage, and any curse, disease, or poison affecting it is suspended. The creature appears dead to all outward inspection and to spells used to determine the creature's status.",
				"You can have only one creature under the effect of this feature at a time."
			]
		},
		{
			"name": "Way of the Ascendant Dragon",
			"source": "UA2020SubclassesPt5",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"entries": [
				"Monks who follow the Way of the Ascendant Dragon revere the power and grandeur of dragons. They alter their own ki to resonate with draconic might, channeling it to augment their prowess in battle, soar through the air, and to bolster their allies.",
				"As a follower of this Monastic Tradition, you decide how you unlocked the power of dragons through your ki. The Ascendant Dragon Origin table offers some possibilities.",
				{
					"type": "table",
					"caption": "Ascendant Dragon Origin",
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
							"You honed your abilities by observing a dragon and aligning your ki with their world-altering power."
						],
						[
							"2",
							"A dragon personally took an active role in shaping your inner energy."
						],
						[
							"3",
							"You studied at a monastery that traces its teachings back centuries or more to a single dragon's instruction."
						],
						[
							"4",
							"You spent long stretches meditating in the region of influence of an ancient dragon's lair, absorbing its ambient magic."
						],
						[
							"5",
							"You found a scroll written in {@language Draconic} that contained inspiring new techniques."
						],
						[
							"6",
							"After a dream that featured a five-handed dragonborn you awoke with altered ki, reflecting the breaths of dragons."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Disciple|Monk||Ascendant Dragon (UA)|UA2020SubclassesPt5|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Breath of the Dragon|Monk||Ascendant Dragon (UA)|UA2020SubclassesPt5|3"
				}
			]
		},
		{
			"name": "Breath of the Dragon",
			"source": "UA2020SubclassesPt5",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Way of the Ascendant Dragon feature}",
				"You can channel your ki into destructive waves of energy like the dragons you emulate. When you take the {@action Attack} action on your turn, you can replace one of the attacks with an exhalation of draconic energy in either a 20-foot cone or a 30-foot line that is 5 feet wide (your choice). Choose a damage type: acid, cold, fire, lightning, or poison. Each creature in the area must make a Dexterity saving throw against your ki save DC, taking damage of the chosen type equal to two rolls of your Martial Arts die on a failure, or half as much damage on a success.",
				"At 11th level, the damage of your breath increases to three rolls of your Martial Arts die.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. While you have no uses available, you can spend 1 ki point to use this feature again."
			]
		},
		{
			"name": "Draconic Disciple",
			"source": "UA2020SubclassesPt5",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Way of the Ascendant Dragon feature}",
				"You can channel your draconic ki to imbue your unarmed strikes with the essence of a dragon's breath and to use your connection with draconic creatures to magnify your presence. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"When you damage a target with an unarmed strike, you can change the damage type to acid, cold, fire, lightning, or poison.",
						"If you can't already, you learn to speak, read, and write {@language Draconic}.",
						"If you fail a Charisma ({@skill Intimidation}) or Charisma ({@skill Persuasion}) check, you can use your reaction to reroll the check, as you tap into the mighty presence of dragons. Once this feature turns a failure into a success, you can't use it again until you finish a long rest."
					]
				}
			]
		},
		{
			"name": "Wings Unfurled",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Way of the Ascendant Dragon feature}",
				"When you use your Step of the Wind, you can unfurl spectral draconic wings from your back that vanish at the end of your turn. While the wings exist, you have a flying speed equal to your walking speed.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. While you have no uses available, you can spend 1 additional ki point when you activate Step of the Wind to use this feature again."
			]
		},
		{
			"name": "Aspect of the Wyrm",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 11,
			"header": 2,
			"entries": [
				"{@i 11th-level Way of the Ascendant Dragon feature}",
				"The power of your draconic ki now radiates from you, protecting your allies from harm and punishing any who raise arms against them. As a bonus action, you can create an aura of draconic power that radiates 30 feet from you for 1 minute. Choose acid, cold, fire, lightning, or poison damage, and for the duration, you gain the following effects:",
				{
					"type": "list",
					"items": [
						"You and your allies within your aura gain resistance to the chosen damage type.",
						"Waves of destructive energy flow out from you and your allies when any of you are attacked. When you or one of your allies in the aura is hit by an attack made by another creature within the aura, the target that was hit can use their reaction to deal an amount of damage of the chosen type equal to one roll of your Martial Arts die to the attacker."
					]
				},
				"Once you use this bonus action, you can't use it again until you finish a long rest, unless you expend 4 ki points to use it again."
			]
		},
		{
			"name": "Ascendant Aspect",
			"source": "UA2020SubclassesPt5",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Ascendant Dragon (UA)",
			"subclassSource": "UA2020SubclassesPt5",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Way of the Ascendant Dragon feature}",
				"Your draconic ki reaches its peak. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain {@sense blindsight} out to 30 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're {@condition blinded} or in darkness. Moreover, you can see an {@condition invisible} creature within that range, unless the creature successfully hides from you.",
						"When you damage a creature with your Breath of the Dragon, the energy clings to the target. At the start of each of the creature's turns, it takes damage of the type your breath dealt equal to one roll of your Martial Arts die. At the end of its turn, the creature can repeat the save, ending the effect on itself on a success.",
						"When you activate your Aspect of the Wyrm, draconic fury explodes from you. Choose any number of creatures you can see within your aura. Those creatures each take {@damage 4d10} acid, cold, fire, lightning, or poison damage (your choice)."
					]
				}
			]
		},
		{
			"name": "Way of the Drunken Master",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"entries": [
				"The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant but proves frustrating to engage. The drunken master's erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats. Cunning warriors can see through the drunken master's apparent incompetence to recognize the masterful technique employed.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drunken Technique|Monk||Drunken Master (UA)|UAATrioOfSubclasses|3"
				}
			]
		},
		{
			"name": "Drunken Technique",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this tradition at 3rd level, you gain proficiency in the {@skill Performance} skill if you don't already have it; your martial arts technique mixes martial training with the precision of a dancer and the antics of a jester.",
				"You also learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the {@action Disengage} action, and your walking speed increases by 10 feet until the end of the current turn."
			]
		},
		{
			"name": "Tipsy Sway",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your swaying in combat becomes maddeningly unpredictable. As a reaction when an enemy misses you with a melee attack roll, you can cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you. Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Drunkard's Luck",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 11,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"Starting at 11th level, you always seem to get a lucky bounce at just the right moment to save you from doom. When you make a saving throw, you can spend 1 ki point to give yourself advantage on that roll. You must decide to use this feature before rolling."
			]
		},
		{
			"name": "Intoxicated Frenzy",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five attacks), provided that each Flurry of Blows attack targets a different creature this turn."
			]
		},
		{
			"name": "Way of the Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 3,
			"entries": [
				"Monks of the Way of the Astral Self have an internal struggle with their ki. They see their mystical energy as a representation of their true form, an astral self. This form has the capacity to be a force of good or destruction, with some monasteries training students to either temper their nature or embrace their impulses.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Forms of Your Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Arms of the Astral Self|Monk||Astral Self (UA)|UABarbarianAndMonk|3"
				}
			]
		},
		{
			"name": "Arms of the Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Ki",
				"amount": 2
			},
			"entries": [
				"At 3rd level, your mastery of your ki allows you to summon a portion of your astral self. On your turn, you can spend 2 ki points as a bonus action to summon the arms of your astral self for 10 minutes. These spectral arms hover near your shoulders. You determine the arms' appearance based on the qualities of your character.",
				"While your astral arms are summoned, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You can use your Wisdom modifier in place of your Strength modifier when making Strength checks and Strength saving throws.",
						"The arms are monk weapons and have a reach of 10 feet. The arms deal radiant or necrotic damage (your choice). When you attack with the arms, you can use your Wisdom modifier instead of your Strength or Dexterity modifier for the attack and damage rolls.",
						"Immediately after you use the {@action Attack} action with your astral arms on your turn, you can make one extra attack with your astral arms as a bonus action. The number of extra attacks increases when you reach certain levels in this class, increasing to two at 11th level and three at 17th level."
					]
				}
			]
		},
		{
			"name": "Forms of Your Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 3,
			"header": 1,
			"type": "inset",
			"entries": [
				"The astral self is a translucent embodiment of the monk's psyche and soul. As a result, the form of an astral self reflects the mind of the monk who manifests it. Your astral self could be a humanoid knight with a helmeted face and large, muscular arms, or it could be a golden metallic form with thin arms like a modron.",
				"When choosing this path, consider the quirks that define your monk. Are they obsessed with something? Are you driven by justice or a selfish desire? Any of these motivations could manifest in the form of your astral self."
			]
		},
		{
			"name": "Visage of the Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"Starting at 6th level, you can summon the visage of your astral self. On your turn, you can spend 1 ki point as a bonus action, or as part of summoning your astral arms, to summon this visage for 10 minutes. The spectral visage covers your face like a helmet or mask. You determine its appearance based on the qualities of your character.",
				"While your visage is summoned, you gain the following benefits.",
				{
					"type": "entries",
					"name": "Wisdom of the Spirit",
					"entries": [
						"You have advantage on Wisdom ({@skill Insight}) and Charisma ({@skill Intimidation}) checks."
					]
				},
				{
					"type": "entries",
					"name": "Astral Sight",
					"entries": [
						"You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
					]
				}
			]
		},
		{
			"name": "Awakening of the Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 11,
			"header": 2,
			"entries": [
				"Starting at 11th level, you tap into the greater power of your astral self. While you have both your astral arms and visage summoned, you gain the following benefits.",
				{
					"type": "entries",
					"name": "Deflect Energy",
					"entries": [
						"When you take acid, cold, fire, lightning, or force damage, you can use your reaction to deflect it. When you do so, the damage you take is reduced by {@dice 1d10} + your Wisdom modifier + your monk level."
					]
				},
				{
					"type": "entries",
					"name": "Empowered Arms",
					"entries": [
						"Once on each of your turns when you hit a target with your astral arms, you can deal extra damage to the target equal to your Martial Arts die."
					]
				},
				{
					"type": "entries",
					"name": "Word of the Spirit",
					"entries": [
						"When you speak through your visage, you can direct your words to a creature of your choice that you can see within 30 feet of you, making it so only that creature can hear you. Alternatively, you can amplify your voice so that all creatures within 600 feet can hear you."
					]
				}
			]
		},
		{
			"name": "Improved Arms of the Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you make two extra attacks instead of one when you attack with your astral arms as a bonus action."
			]
		},
		{
			"name": "Complete Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 17,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 10
			},
			"entries": [
				"Starting at 17th level, your connection to your astral self is complete, allowing you summon it entirely. On your turn, you can spend 10 ki points as a bonus action to summon the arms, visage, and body of your astral self for 10 minutes. This spectral body covers your physical form like a suit of armor, connecting with the arms and visage. You determine its appearance based on the qualities of your character. While your astral self is summoned, you gain the following benefits.",
				{
					"type": "entries",
					"name": "Armor of the Spirit",
					"entries": [
						"You gain a +2 bonus to AC while you aren't {@condition incapacitated}."
					]
				},
				{
					"type": "entries",
					"name": "Astral Barrage",
					"entries": [
						"Whenever you use the Extra Attack feature to attack twice, you can instead attack three times using your astral arms."
					]
				},
				{
					"type": "entries",
					"name": "Ki Consumption",
					"entries": [
						"When a creature within 10 feet of you is reduced to 0 hit points, you can use your reaction to regain ki points equal to your Wisdom modifier (minimum 1)."
					]
				}
			]
		},
		{
			"name": "Improved Arms of the Astral Self",
			"source": "UABarbarianAndMonk",
			"page": 2,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Astral Self (UA)",
			"subclassSource": "UABarbarianAndMonk",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you make three extra attacks instead of one when you attack with your astral arms as a bonus action."
			]
		},
		{
			"name": "Way of the Kensei",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei (UA)",
			"subclassSource": "UAMonk",
			"level": 3,
			"entries": [
				"Monks of the Way of Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body. A kensei sees a weapon in much the same way a painter regards a brush or a writer sees parchment, ink, and quill. A sword or bow is a tool used to express the beauty and elegance of the martial arts. That such mastery makes a kensei a peerless warrior and is but a side effect of intense devotion, practice, and study.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Path of the Kensei|Monk||Kensei (UA)|UAMonk|3"
				}
			]
		},
		{
			"name": "Path of the Kensei",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei (UA)",
			"subclassSource": "UAMonk",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this tradition at 3rd level, you learn to extend your knowledge of the martial arts beyond the standard array of monk weapons.",
				"You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain proficiency with three martial weapons of your choice. A martial weapon is considered a kensei weapon for you if you're proficient with it.",
						"Whenever you wield a kensei weapon, you choose whether to use Dexterity or Strength for the attack and damage rolls of the weapon, and you choose whether to use your Martial Arts damage die in place of the weapon's damage die.",
						"When you take the {@action Attack} action on your turn and hit a target with a kensei weapon, you can use a bonus action to pummel the target, dealing an additional {@damage 1d4} bludgeoning damage to that target and to any other target you hit with the weapon as part of the {@action Attack}.",
						"If you make an unarmed strike as part of the {@action Attack} action on your turn and are holding a kensei weapon, you can use that weapon to defend yourself. You gain a +2 bonus to AC until the start of your next turn while you are not {@condition incapacitated} and the weapon is in your hand."
					]
				}
			]
		},
		{
			"name": "One with the Blade",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei (UA)",
			"subclassSource": "UAMonk",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you extend your ki into the weapons you hold, granting you the following benefits:",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Magic Weapons",
							"entries": [
								"Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Precise Strike",
							"entries": [
								"You can focus your attention on a single target in battle to understand and overcome its defenses. As a bonus action, pick one creature you can see within 30 feet of you. The next weapon attack you make against that creature during the current turn adds double your proficiency bonus to the attack roll, rather than your normal proficiency bonus. Once you use this ability, you can't use it again until you finish a short or long rest."
							]
						}
					]
				}
			]
		},
		{
			"name": "Sharpen the Blade",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei (UA)",
			"subclassSource": "UAMonk",
			"level": 11,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 3
			},
			"entries": [
				"At 11th level, you gain the ability to augment your weapons with the strength of your ki. As a bonus action, you can expend up to 3 ki points to grant a weapon you touch a bonus to attack and damage rolls while you wield it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute."
			]
		},
		{
			"name": "Unerring Accuracy",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei (UA)",
			"subclassSource": "UAMonk",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, your mastery of weapons grants you extraordinary accuracy. On each of your turns, you can reroll one weapon attack roll you make that misses."
			]
		},
		{
			"name": "Way of Tranquility",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Tranquility (UA)",
			"subclassSource": "UAMonk",
			"level": 3,
			"entries": [
				"Monks of the Way of Tranquility see violence as a last resort. They use diplomacy, mercy, and understanding to resolve conflicts. If pushed, though, they are capable warriors who can bring an end to the unjust or cruel folk who refuse to listen to reason. When adventuring, these monks make excellent diplomats. They are also skilled in the healing arts, and can preserve their allies in the face of daunting foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Path of Tranquility|Monk||Tranquility (UA)|UAMonk|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Healing Hands|Monk||Tranquility (UA)|UAMonk|3"
				}
			]
		},
		{
			"name": "Healing Hands",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Tranquility (UA)",
			"subclassSource": "UAMonk",
			"level": 3,
			"header": 1,
			"entries": [
				"Your mystical touch can heal wounds. Starting at 3rd level, you have a pool of magical healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your monk level × 10.",
				"As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in the pool.",
				"Instead of healing the creature, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Healing Hands, expending hit points separately for each one.",
				"When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature.",
				"This feature has no effect on undead and constructs."
			]
		},
		{
			"name": "Path of Tranquility",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Tranquility (UA)",
			"subclassSource": "UAMonk",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this tradition at 3rd level, you can become an island of calm in even the most chaotic of situations. With this feature, you can cast the {@spell sanctuary} spell on yourself, no material component required, and it lasts up to 8 hours. Its saving throw DC equals 8 + your proficiency bonus + your Wisdom modifier. A creature that succeeds on the save is immune to this effect for 1 hour.",
				"Once you cast the spell in this way, you can't do so again for 1 minute."
			]
		},
		{
			"name": "Emissary of Peace",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Tranquility (UA)",
			"subclassSource": "UAMonk",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to diffuse violent situations. Whenever you make a Charisma check to calm violent emotions or to counsel peace, you have advantage on the roll. You must make this entreaty in good faith; it doesn't apply if proficiency in the {@skill Deception} or {@skill Intimidation} skill applies to your check.",
				"You also gain proficiency in the {@skill Performance} or {@skill Persuasion} skill (choose one)."
			]
		},
		{
			"name": "Douse the Flames of War",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Tranquility (UA)",
			"subclassSource": "UAMonk",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to temporarily extinguish a creature's violent impulses. As an action, you can touch a creature, and it must make a Wisdom saving throw with a DC equal to 8 + your proficiency bonus + your Wisdom modifier. The target automatically succeeds if it's missing any of its hit points. If the target fails the save, it can't attack for 1 minute. During that time, it also can't cast spells that deal damage or that force someone to make a saving throw.",
				"This effect ends if the target is attacked, takes damage, or is forced to make a saving throw or if the target witnesses any of those things happening to its allies."
			]
		},
		{
			"name": "Anger of a Gentle Soul",
			"source": "UAMonk",
			"page": 1,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Tranquility (UA)",
			"subclassSource": "UAMonk",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to visit vengeance on someone who fells others. If you see a creature reduce another creature to 0 hit points, you can use your reaction to grant yourself a bonus to all damage rolls against the aggressor until the end of your next turn. The bonus equals your monk level.",
				"Once you use this ability, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Way of the Kensei v2",
			"source": "UARevisedSubclasses",
			"page": 4,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"entries": [
				"Monks of the Way of Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body. A kensei sees a weapon in much the same way a painter regards a brush or a writer sees parchment, ink, and quill. A sword or bow is a tool used to express the beauty and elegance of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Path of the Kensei|Monk||Kensei v2 (UA)|UARevisedSubclasses|3"
				}
			]
		},
		{
			"name": "Path of the Kensei",
			"source": "UARevisedSubclasses",
			"page": 4,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this tradition at 3rd level, you learn to extend your knowledge of the martial arts beyond the standard array of monk weapons.",
				"You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon\u2014melee or ranged\u2014to be a kensei weapon for you, following the criteria above.",
						"If you make an unarmed strike as part of the {@action Attack} action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren't {@condition incapacitated}.",
						"You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra {@damage 1d4} damage of the weapon's type. You retain this benefit until the end of the current turn."
					]
				}
			]
		},
		{
			"name": "One with the Blade",
			"source": "UARevisedSubclasses",
			"page": 4,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you extend your ki into the weapons you hold, granting you the following benefits.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Magic Kensei Weapons",
							"entries": [
								"Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Precise Strike",
							"entries": [
								"When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns."
							]
						}
					]
				}
			]
		},
		{
			"name": "Sharpen the Blade",
			"source": "UARevisedSubclasses",
			"page": 4,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 11,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 3
			},
			"entries": [
				"At 11th level, you gain the ability to augment your weapons with the strength of your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls while you wield it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again."
			]
		},
		{
			"name": "Unerring Accuracy",
			"source": "UARevisedSubclasses",
			"page": 4,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, your mastery of weapons grants you extraordinary accuracy. If you make an attack roll with a monk weapon and miss, you can reroll it. You can use this feature only once on each of your turns."
			]
		},
		{
			"name": "Way of the Drunken Master",
			"source": "XGE",
			"page": 33,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"The Way of the Drunken Master teaches its students to move with the jerky, unpredictable movements of a drunkard. A drunken master sways, tottering on unsteady feet, to present what seems like an incompetent combatant who proves frustrating to engage. The drunken master's erratic stumbles conceal a carefully executed dance of blocks, parries, advances, attacks, and retreats.",
				"A drunken master often enjoys playing the fool to bring gladness to the despondent or to demonstrate humility to the arrogant, but when battle is joined, the drunken master can be a maddening, masterful foe.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Monk||Drunken Master|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Drunken Technique|Monk||Drunken Master|XGE|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "XGE",
			"page": 33,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this tradition at 3rd level, you gain proficiency in the {@skill Performance} skill if you don't already have it. Your martial arts technique mixes combat training with the precision of a dancer and the antics of a jester. You also gain proficiency with {@item brewer's supplies|phb} if you don't already have it."
			]
		},
		{
			"name": "Drunken Technique",
			"source": "XGE",
			"page": 33,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn how to twist and turn quickly as part of your Flurry of Blows. Whenever you use Flurry of Blows, you gain the benefit of the {@action Disengage} action, and your walking speed increases by 10 feet until the end of the current turn."
			]
		},
		{
			"name": "Tipsy Sway",
			"source": "XGE",
			"page": 33,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can move in sudden, swaying ways. You gain the following benefits.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Leap to Your Feet|Monk|XGE|Drunken Master|XGE|6"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Redirect Attack|Monk|XGE|Drunken Master|XGE|6"
						}
					]
				}
			]
		},
		{
			"name": "Drunkard's Luck",
			"source": "XGE",
			"page": 33,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 2
			},
			"entries": [
				"Starting at 11th level, you always seem to get a lucky bounce at the right moment. When you make an ability check, an attack roll, or a saving throw and have disadvantage on the roll, you can spend 2 ki points to cancel the disadvantage for that roll."
			]
		},
		{
			"name": "Intoxicated Frenzy",
			"source": "XGE",
			"page": 33,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to make an overwhelming number of attacks against a group of enemies. When you use your Flurry of Blows, you can make up to three additional attacks with it (up to a total of five Flurry of Blows attacks), provided that each Flurry of Blows attack targets a different creature this turn."
			]
		},
		{
			"name": "Way of the Kensei",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Monks of the Way of the Kensei train relentlessly with their weapons, to the point where the weapon becomes an extension of the body. Founded on a mastery of sword fighting, the tradition has expanded to include many different weapons.",
				"A kensei sees a weapon in much the same way a calligrapher or painter regards a pen or brush. Whatever the weapon, the kensei views it as a tool used to express the beauty and precision of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Path of the Kensei|Monk||Kensei|XGE|3"
				}
			]
		},
		{
			"name": "Path of the Kensei",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this tradition at 3rd level, your special martial arts training leads you to master the use of certain weapons. This path also includes instruction in the deft strokes of calligraphy or painting. You gain the following benefits.",
				{
					"type": "entries",
					"name": "Kensei Weapons",
					"entries": [
						"Choose two types of weapons to be your kensei weapons: one melee weapon and one ranged weapon. Each of these weapons can be any {@filter simple or martial weapon|items|source=phb|category=basic|type=martial weapon;simple weapon} that lacks the heavy and special properties. The longbow is also a valid choice. You gain proficiency with these weapons if you don't already have it. Weapons of the chosen types are monk weapons for you. Many of this tradition's features work only with your kensei weapons. When you reach 6th, 11th, and 17th level in this class, you can choose another type of weapon\u2014either melee or ranged\u2014to be a kensei weapon for you, following the criteria above."
					]
				},
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Agile Parry|Monk|XGE|Kensei|XGE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Kensei's Shot|Monk|XGE|Kensei|XGE|3"
						}
					]
				},
				{
					"type": "entries",
					"name": "Way of the Brush",
					"entries": [
						"You gain proficiency with your choice of {@item calligrapher's supplies|phb} or {@item painter's supplies|phb}."
					]
				}
			]
		},
		{
			"name": "One with the Blade",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you extend your ki into your kensei weapons, granting you the following benefits.",
				{
					"type": "entries",
					"name": "Magic Kensei Weapons",
					"entries": [
						"Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
					]
				},
				{
					"type": "entries",
					"name": "Deft Strike",
					"entries": [
						"When you hit a target with a kensei weapon, you can spend 1 ki point to cause the weapon to deal extra damage to the target equal to your Martial Arts die. You can use this feature only once on each of your turns."
					]
				}
			]
		},
		{
			"name": "Sharpen the Blade",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 3
			},
			"entries": [
				"At 11th level, you gain the ability to augment your weapons further with your ki. As a bonus action, you can expend up to 3 ki points to grant one kensei weapon you touch a bonus to attack and damage rolls when you attack with it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute or until you use this feature again. This feature has no effect on a magic weapon that already has a bonus to attack and damage rolls."
			]
		},
		{
			"name": "Unerring Accuracy",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, your mastery of weapons grants you extraordinary accuracy. If you miss with an attack roll using a monk weapon on your turn, you can reroll it. You can use this feature only once on each of your turns."
			]
		},
		{
			"name": "Way of the Sun Soul",
			"source": "XGE",
			"page": 35,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Sun Soul",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Monks of the Way of the Sun Soul learn to channel their life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Radiant Sun Bolt|Monk||Sun Soul|XGE|3"
				}
			]
		},
		{
			"name": "Radiant Sun Bolt",
			"source": "XGE",
			"page": 35,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Sun Soul",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.",
				"You gain a new attack option that you can use with the {@action Attack} action. The special attack is a ranged spell attack with a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a {@dice d4}. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.",
				"When you take the {@action Attack} action on your turn and use this special attack as part of it, you can spend 1 ki point to make the special attack twice as a bonus action. When you gain the Extra Attack feature, this special attack can be used for any of the attacks you make as part of the {@action Attack} action."
			]
		},
		{
			"name": "Searing Arc Strike",
			"source": "XGE",
			"page": 35,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Sun Soul",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Ki",
				"amount": 2
			},
			"entries": [
				"At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the {@action Attack} action on your turn, you can spend 2 ki points to cast the {@spell burning hands} spell as a bonus action.",
				"You can spend additional ki points to cast {@spell burning hands} as a higher-level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level."
			]
		},
		{
			"name": "Searing Sunburst",
			"source": "XGE",
			"page": 35,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Sun Soul",
			"subclassSource": "XGE",
			"level": 11,
			"header": 2,
			"entries": [
				"At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you magically create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.",
				"Each creature in that 20-foot-radius sphere must succeed on a Constitution saving throw or take {@damage 2d6} radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.",
				"You can increase the sphere's damage by spending ki points. Each point you spend, to a maximum of 3, increases the damage by {@dice 2d6}."
			]
		},
		{
			"name": "Sun Shield",
			"source": "XGE",
			"page": 35,
			"className": "Monk",
			"classSource": "PHB",
			"subclassShortName": "Sun Soul",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you become wreathed in a luminous, magical aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.",
				"If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier."
			]
		},
		{
			"name": "Leap to Your Feet",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "XGE",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 6,
			"entries": [
				"When you're {@condition prone}, you can stand up by spending 5 feet of movement, rather than half your speed."
			]
		},
		{
			"name": "Redirect Attack",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "XGE",
			"subclassShortName": "Drunken Master",
			"subclassSource": "XGE",
			"level": 6,
			"consumes": {
				"name": "Ki"
			},
			"entries": [
				"When a creature misses you with a melee attack roll, you can spend 1 ki point as a reaction to cause that attack to hit one creature of your choice, other than the attacker, that you can see within 5 feet of you."
			]
		},
		{
			"name": "Agile Parry",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "XGE",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"If you make an unarmed strike as part of the {@action Attack} action on your turn and are holding a kensei weapon, you can use it to defend yourself if it is a melee weapon. You gain a +2 bonus to AC until the start of your next turn, while the weapon is in your hand and you aren't {@condition incapacitated}."
			]
		},
		{
			"name": "Kensei's Shot",
			"source": "XGE",
			"page": 34,
			"className": "Monk",
			"classSource": "XGE",
			"subclassShortName": "Kensei",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You can use a bonus action on your turn to make your ranged attacks with a kensei weapon more deadly. When you do so, any target you hit with a ranged attack using a kensei weapon takes an extra {@damage 1d4} damage of the weapon's type. You retain this benefit until the end of the current turn."
			]
		}
	]
}

const paladin =

{
	"class": [
		{
			"name": "Paladin",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 10
			},
			"proficiency": [
				"wis",
				"cha"
			],
			"spellcastingAbility": "cha",
			"casterProgression": "1/2",
			"preparedSpells": "<$level$> / 2 + <$cha_mod$>",
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:P"
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
								"athletics",
								"insight",
								"intimidation",
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
					"(a) a {@filter martial weapon|items|source=phb|category=basic|type=martial weapon} and a {@item shield|phb} or (b) two {@filter martial weapons|items|source=phb|category=basic|type=martial weapon}",
					"(a) five {@item javelin|phb|javelins} or (b) any {@filter simple melee weapon|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand}",
					"(a) a {@item priest's pack|phb} or (b) an {@item explorer's pack|phb}",
					"{@item Chain mail|phb} and a {@item holy symbol|phb}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
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
							{
								"item": "javelin|phb",
								"quantity": 5
							}
						],
						"b": [
							{
								"equipmentType": "weaponSimpleMelee"
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
							"Chain mail|phb",
							"holy symbol|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"str": 13,
					"cha": 13
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
			"classTableGroups": [
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Paladin}",
						"{@filter 2nd|spells|level=2|class=Paladin}",
						"{@filter 3rd|spells|level=3|class=Paladin}",
						"{@filter 4th|spells|level=4|class=Paladin}",
						"{@filter 5th|spells|level=5|class=Paladin}"
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
				"Divine Sense|Paladin||1",
				"Lay on Hands|Paladin||1",
				"Divine Smite|Paladin||2",
				"Fighting Style|Paladin||2",
				"Martial Versatility|Paladin||2|UAClassFeatureVariants",
				"Spellcasting|Paladin||2",
				"Divine Health|Paladin||3",
				{
					"classFeature": "Sacred Oath|Paladin||3",
					"gainSubclassFeature": true,
					"gainSubclassFeatureHasContent": true
				},
				"Ability Score Improvement|Paladin||4",
				"Proficiency Versatility|Paladin||4|UAClassFeatureVariants",
				"Martial Versatility|Paladin||4|TCE",
				"Extra Attack|Paladin||5",
				"Aura of Protection|Paladin||6",
				{
					"classFeature": "Sacred Oath feature|Paladin||7",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Paladin||8",
				"Proficiency Versatility|Paladin||8|UAClassFeatureVariants",
				"Aura of Courage|Paladin||10",
				"Improved Divine Smite|Paladin||11",
				"Ability Score Improvement|Paladin||12",
				"Proficiency Versatility|Paladin||12|UAClassFeatureVariants",
				"Cleansing Touch|Paladin||14",
				{
					"classFeature": "Sacred Oath feature|Paladin||15",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Paladin||16",
				"Proficiency Versatility|Paladin||16|UAClassFeatureVariants",
				"Aura improvements|Paladin||18",
				"Ability Score Improvement|Paladin||19",
				"Proficiency Versatility|Paladin||19|UAClassFeatureVariants",
				{
					"classFeature": "Sacred Oath feature|Paladin||20",
					"gainSubclassFeature": true
				}
			],
			"subclassTitle": "Sacred Oath",
			"fluff": [
				{
					"name": "Paladin",
					"type": "section",
					"entries": [
						"Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man's wounds knit closed, and his eyes open wide with amazement.",
						"A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before they even realize he is there.",
						"Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness.",
						"Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god's altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin's oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
						{
							"type": "entries",
							"name": "The Cause of Righteousness",
							"entries": [
								"A paladin swears to uphold justice and righteousness, to stand with the good things of the world against the encroaching darkness, and to hunt the forces of evil wherever they lurk. Different paladins focus on various aspects of the cause of righteousness, but all are bound by the oaths that grant them power to do their sacred work. Although many paladins are devoted to gods of good, a paladin's power comes as much from a commitment to justice itself as it does from a god.",
								"Paladins train for years to learn the skills of combat, mastering a variety of weapons and armor. Even so, their martial skills are secondary to the magical power they wield: power to heal the sick and injured, to smite the wicked and the undead, and to protect the innocent and those who join them in the fight for justice."
							]
						},
						{
							"type": "entries",
							"name": "Beyond the Mundane Life",
							"entries": [
								"Almost by definition, the life of a paladin is an adventuring life. Unless a lasting injury has taken him or her away from adventuring for a time, every paladin lives on the front lines of the cosmic struggle against evil. Fighters are rare enough among the ranks of the militias and armies of the world, but even fewer people can claim the true calling of a paladin. When they do receive the call, these warriors turn from their former occupations and take up arms to fight evil. Sometimes their oaths lead them into the service of the crown as leaders of elite groups of knights, but even then their loyalty is first to the cause of righteousness, not to crown and country.",
								"Adventuring paladins take their work seriously. A delve into an ancient ruin or dusty crypt can be a quest driven by a higher purpose than the acquisition of treasure. Evil lurks in dungeons and primeval forests, and even the smallest victory against it can tilt the cosmic balance away from oblivion."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Paladin",
							"entries": [
								"The most important aspect of a paladin character is the nature of his or her holy quest. Although the class features related to your oath don't appear until you reach 3rd level, plan ahead for that choice by reading the oath descriptions at the end of the class. Are you a devoted servant of good, loyal to the gods of justice and honor, a holy knight in shining armor venturing forth to smite evil? Are you a glorious champion of the light, cherishing everything beautiful that stands against the shadow, a knight whose oath descends from traditions older than many of the gods? Or are you an embittered loner sworn to take vengeance on those who have done great evil, sent as an angel of death by the gods or driven by your need for revenge? Appendix B lists many deities worshiped by paladins throughout the multiverse, such as Torm, Tyr, Heironeous, Paladine, Kiri-Jolith, Dol Arrah, the Silver Flame, Bahamut, Athena, Re-Horakhty, and Heimdall.",
								"How did you experience your call to serve as a paladin? Did you hear a whisper from an unseen god or angel while you were at prayer? Did another paladin sense the potential within you and decide to train you as a squire? Or did some terrible event\u2014the destruction of your home, perhaps\u2014drive you to your quests? Perhaps you stumbled into a sacred grove or a hidden elven enclave and found yourself called to protect all such refuges of goodness and beauty. Or you might have known from your earliest memories that the paladin's life was your calling, almost as if you had been sent into the world with that purpose stamped on your soul.",
								"As guardians against the forces of wickedness, paladins are rarely of any evil alignment. Most of them walk the paths of charity and justice. Consider how your alignment colors the way you pursue your holy quest and the manner in which you conduct yourself before gods and mortals. Your oath and alignment might be in harmony, or your oath might represent standards of behavior that you have not yet attained.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a paladin quickly by following these suggestions. First, Strength should be your highest ability score, followed by Charisma. Second, choose the {@background noble} background."
									]
								}
							]
						}
					],
					"page": 82,
					"source": "PHB"
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"The true worth of a paladin is measured not in foes defeated or dungeons plundered. It is measured in lives saved and hearts turned to the causes of mercy and justice."
							],
							"by": "Isteval"
						},
						"A paladin is a living embodiment of an oath\u2014a promise or a vow made manifest in the person of a holy warrior who has the skill and the determination to see the cause through to the end. Some paladins devote themselves expressly to protecting the innocent and spreading justice in the world, while others resolve to attain that goal by conquering those who stand defiant and bringing them under the rule of law.",
						"Although no paladin in the world could be described as typical, a number of them are narrow-minded do-gooders who refuse to tolerate even the smallest deviation from their own outlook. Paladins who take up the adventuring life, however, rarely remain so rigid in their attitudes\u2014if only to keep from alienating their companions.",
						"You can flesh out your paladin character by using the suggestions below. It's important to keep in mind that most paladins aren't robots. They have doubts and prejudices and harbor contradictory thoughts just as any other character does. Some are compelled by an internal motivation that might sometimes be at odds with the principles of their oaths.",
						{
							"type": "entries",
							"name": "Personal Goal",
							"entries": [
								"The precepts of a paladin's oath provide purpose to the character and dictate an ultimate goal or an overall intent that the paladin abides by and advances. Aside from that, some paladins are driven by a personal goal that either complements or transcends the dictates of their oaths. Paladins who swear different oaths might have the same personal goal, differing only in how they apply that goal to their actions when upholding their oaths.",
								"If your paladin character has a personal goal, it might be drawn from some life event and thus not directly tied to the oath.",
								{
									"type": "table",
									"caption": "Personal Goal",
									"colLabels": [
										"{@dice d6}",
										"Personal Goal"
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
											"Peace. You fight so that future generations will not have to."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Revenge. Your oath is the vehicle through which you will right an ancient wrong."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Duty. You will live up to what you have sworn to do, or die trying."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Leadership. You will win a great battle that bards will sing about, and in so doing, you will become an example to inspire others."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Faith. You know your path is righteous, or else the gods would not have set you upon it."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Glory. You will lead the world into a grand new era, one that will be branded with your name."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Symbol",
							"entries": [
								"Paladins are mindful of the influence of symbols, and many of them adopt or design an artistic device that bears a distinctive image. Your symbol exemplifies the oath you have taken and communicates that message to those around you, friend and foe alike.",
								"Your symbol might be displayed on a banner, a flag, or your clothing for all to see. Or it could be less obvious, such as a trinket or a token that you carry concealed on your person.",
								{
									"type": "table",
									"caption": "Symbol",
									"colLabels": [
										"{@dice d6}",
										"Symbol"
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
											"A dragon, emblematic of your nobility in peace and your ferocity in combat"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"A clenched fist, because you are always ready to fight for your beliefs"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"An upraised open hand, indicating your preference for diplomacy over combat"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"A red heart, showing the world your commitment to justice"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A black heart, signifying that emotions such as pity do not sway your dedication to your oath"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"An unblinking eye, meaning that you are ever alert to all threats against your cause"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Nemesis",
							"entries": [
								"Their adherence to a sacred oath demands that paladins take an active stance in carrying their beliefs into the world. This activity naturally leads to conflict with creatures or entities that oppose those beliefs. Among those opponents, one often stands out as a paladin's most persistent or most formidable foe\u2014a nemesis whose presence or influence is a constant factor in a paladin's life.",
								"Your paladin character might have an enemy that dates from the days before you took up your path. Or you could be a target because when you became a paladin, you immediately attracted the attention of those that would do you in. If you have a nemesis, who or what is it? Whom among your enemies do you consider to be the biggest threat to achieving your goals?",
								{
									"type": "table",
									"caption": "Nemesis",
									"colLabels": [
										"{@dice d6}",
										"Nemesis"
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
											"A mighty orc war chief who threatens to overrun and destroy everything you hold sacred"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"A fiend or a celestial, the agent of a power of the Outer Planes, who has been charged with corrupting or redeeming you, as appropriate"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A dragon whose servants dog your steps"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"A high priest who sees you as a misguided fool and wants you to abandon your religion"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A rival paladin who trained with you but became an oath-breaker and holds you responsible"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"A vampire who has sworn revenge against all paladins after being defeated by one"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Temptation",
							"entries": [
								"Although paladins are dedicated to their oaths, they are mortals, and thus they are flawed. Many of them exhibit a type of behavior or hold to an attitude that is not in keeping with the highest ideals of their calling.",
								"What is the temptation that your character succumbs to or finds it difficult to resist?",
								{
									"type": "table",
									"caption": "Temptation",
									"colLabels": [
										"{@dice d6}",
										"Temptation"
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
											"Fury. When your anger is roused, you have trouble thinking straight, and you fear you might do something you'll regret."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Pride. Your deeds are noteworthy, and no one takes note of them more often than you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Lust. You can't resist an attractive face and a pleasant smile."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Envy. You are mindful of what some famous folk have accomplished, and you feel inadequate when your deeds don't compare to theirs."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Despair. You consider the great strength of the enemies you must defeat, and at times you see no way to achieve final victory."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Greed. Regardless of how much glory and treasure you amass, it's never enough for you."
										]
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 36
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Oath of Devotion",
			"shortName": "Devotion",
			"source": "PHB",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 85,
			"srd": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"protection from evil and good",
							"sanctuary"
						],
						"5": [
							"lesser restoration",
							"zone of truth"
						],
						"9": [
							"beacon of hope",
							"dispel magic"
						],
						"13": [
							"freedom of movement",
							"guardian of faith"
						],
						"17": [
							"commune",
							"flame strike"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Devotion|Paladin||Devotion||3",
				"Aura of Devotion|Paladin||Devotion||7",
				"Purity of Spirit|Paladin||Devotion||15",
				"Holy Nimbus|Paladin||Devotion||20"
			]
		},
		{
			"name": "Oath of the Ancients",
			"shortName": "Ancients",
			"source": "PHB",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 86,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"ensnaring strike",
							"speak with animals"
						],
						"5": [
							"moonbeam",
							"misty step"
						],
						"9": [
							"plant growth",
							"protection from energy"
						],
						"13": [
							"ice storm",
							"stoneskin"
						],
						"17": [
							"commune with nature",
							"tree stride"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of the Ancients|Paladin||Ancients||3",
				"Aura of Warding|Paladin||Ancients||7",
				"Undying Sentinel|Paladin||Ancients||15",
				"Elder Champion|Paladin||Ancients||20"
			]
		},
		{
			"name": "Oath of Vengeance",
			"shortName": "Vengeance",
			"source": "PHB",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 87,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"bane",
							"hunter's mark"
						],
						"5": [
							"hold person",
							"misty step"
						],
						"9": [
							"haste",
							"protection from energy"
						],
						"13": [
							"banishment",
							"dimension door"
						],
						"17": [
							"hold monster",
							"scrying"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Vengeance|Paladin||Vengeance||3",
				"Relentless Avenger|Paladin||Vengeance||7",
				"Soul of Vengeance|Paladin||Vengeance||15",
				"Avenging Angel|Paladin||Vengeance||20"
			]
		},
		{
			"name": "Oathbreaker",
			"shortName": "Oathbreaker",
			"source": "DMG",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 97,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"hellish rebuke",
							"inflict wounds"
						],
						"5": [
							"crown of madness",
							"darkness"
						],
						"9": [
							"animate dead",
							"bestow curse"
						],
						"13": [
							"blight",
							"confusion"
						],
						"17": [
							"contagion",
							"dominate person"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oathbreaker|Paladin||Oathbreaker|DMG|3",
				"Aura of Hate|Paladin||Oathbreaker|DMG|7",
				"Supernatural Resistance|Paladin||Oathbreaker|DMG|15",
				"Dread Lord|Paladin||Oathbreaker|DMG|20"
			]
		},
		{
			"name": "Oath of the Crown",
			"shortName": "Crown",
			"source": "SCAG",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 132,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"command",
							"compelled duel"
						],
						"5": [
							"warding bond",
							"zone of truth"
						],
						"9": [
							"aura of vitality",
							"spirit guardians"
						],
						"13": [
							"banishment",
							"guardian of faith"
						],
						"17": [
							"circle of power",
							"geas"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of the Crown|Paladin||Crown|SCAG|3",
				"Divine Allegiance|Paladin||Crown|SCAG|7",
				"Unyielding Spirit|Paladin||Crown|SCAG|15",
				"Exalted Champion|Paladin||Crown|SCAG|20"
			]
		},
		{
			"name": "Oath of Conquest (UA)",
			"shortName": "Conquest (UA)",
			"source": "UAPaladin",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"armor of Agathys",
							"command"
						],
						"5": [
							"hold person",
							"spiritual weapon"
						],
						"9": [
							"bestow curse",
							"fear"
						],
						"13": [
							"blight",
							"dominate beast"
						],
						"17": [
							"dominate person",
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Conquest|Paladin||Conquest (UA)|UAPaladin|3",
				"Aura of Conquest|Paladin||Conquest (UA)|UAPaladin|7",
				"Implacable Spirit|Paladin||Conquest (UA)|UAPaladin|15",
				"Invincible Conqueror|Paladin||Conquest (UA)|UAPaladin|20"
			]
		},
		{
			"name": "Oath of Treachery (UA)",
			"shortName": "Treachery (UA)",
			"source": "UAPaladin",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"charm person",
							"expeditious retreat"
						],
						"5": [
							"invisibility",
							"mirror image"
						],
						"9": [
							"gaseous form",
							"haste"
						],
						"13": [
							"confusion",
							"greater invisibility"
						],
						"17": [
							"dominate person",
							"passwall"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Treachery|Paladin||Treachery (UA)|UAPaladin|3",
				"Aura of Treachery|Paladin||Treachery (UA)|UAPaladin|7",
				"Blackguard's Escape|Paladin||Treachery (UA)|UAPaladin|15",
				"Icon of Deceit|Paladin||Treachery (UA)|UAPaladin|20"
			]
		},
		{
			"name": "Oath of Redemption (UA)",
			"shortName": "Redemption (UA)",
			"source": "UAATrioOfSubclasses",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"shield",
							"sleep"
						],
						"5": [
							"hold person",
							"ray of enfeeblement"
						],
						"9": [
							"counterspell",
							"hypnotic pattern"
						],
						"13": [
							"Otiluke's resilient sphere",
							"stoneskin"
						],
						"17": [
							"hold monster",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Redemption|Paladin||Redemption (UA)|UAATrioOfSubclasses|3",
				"Aura of the Guardian|Paladin||Redemption (UA)|UAATrioOfSubclasses|7",
				"Protective Spirit|Paladin||Redemption (UA)|UAATrioOfSubclasses|15",
				"Emissary of Redemption|Paladin||Redemption (UA)|UAATrioOfSubclasses|20"
			]
		},
		{
			"name": "Oath of Conquest v2 (UA)",
			"shortName": "Conquest v2 (UA)",
			"source": "UARevisedClassOptions",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"armor of Agathys",
							"command"
						],
						"5": [
							"hold person",
							"spiritual weapon"
						],
						"9": [
							"bestow curse",
							"fear"
						],
						"13": [
							"dominate beast",
							"stoneskin"
						],
						"17": [
							"cloudkill",
							"dominate person"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Conquest v2|Paladin||Conquest v2 (UA)|UARevisedClassOptions|3",
				"Aura of Conquest|Paladin||Conquest v2 (UA)|UARevisedClassOptions|7",
				"Scornful Rebuke|Paladin||Conquest v2 (UA)|UARevisedClassOptions|15",
				"Invincible Conqueror|Paladin||Conquest v2 (UA)|UARevisedClassOptions|20"
			]
		},
		{
			"name": "Oath of Conquest",
			"shortName": "Conquest",
			"source": "XGE",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 37,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"armor of Agathys",
							"command"
						],
						"5": [
							"hold person",
							"spiritual weapon"
						],
						"9": [
							"bestow curse",
							"fear"
						],
						"13": [
							"dominate beast",
							"stoneskin"
						],
						"17": [
							"cloudkill",
							"dominate person"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Conquest|Paladin||Conquest|XGE|3",
				"Aura of Conquest|Paladin||Conquest|XGE|7",
				"Scornful Rebuke|Paladin||Conquest|XGE|15",
				"Invincible Conqueror|Paladin||Conquest|XGE|20"
			]
		},
		{
			"name": "Oath of Redemption",
			"shortName": "Redemption",
			"source": "XGE",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 38,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"sanctuary",
							"sleep"
						],
						"5": [
							"calm emotions",
							"hold person"
						],
						"9": [
							"counterspell",
							"hypnotic pattern"
						],
						"13": [
							"Otiluke's resilient sphere",
							"stoneskin"
						],
						"17": [
							"hold monster",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Redemption|Paladin||Redemption|XGE|3",
				"Aura of the Guardian|Paladin||Redemption|XGE|7",
				"Protective Spirit|Paladin||Redemption|XGE|15",
				"Emissary of Redemption|Paladin||Redemption|XGE|20"
			]
		},
		{
			"name": "Oath of Heroism (UA)",
			"shortName": "Heroism (UA)",
			"source": "UABardAndPaladin",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"expeditious retreat",
							"guiding bolt"
						],
						"5": [
							"enhance ability",
							"enthrall"
						],
						"9": [
							"haste",
							"protection from energy"
						],
						"13": [
							"compulsion",
							"freedom of movement"
						],
						"17": [
							"commune",
							"conjure volley"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Heroism|Paladin||Heroism (UA)|UABardAndPaladin|3",
				"Mighty Deed|Paladin||Heroism (UA)|UABardAndPaladin|7",
				"Glorious Defense|Paladin||Heroism (UA)|UABardAndPaladin|15",
				"Living Myth|Paladin||Heroism (UA)|UABardAndPaladin|20"
			]
		},
		{
			"name": "Oath of the Watchers (UA)",
			"shortName": "Watchers (UA)",
			"source": "UA2020SubclassesPt1",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"alarm",
							"chromatic orb"
						],
						"5": [
							"augury",
							"moonbeam"
						],
						"9": [
							"counterspell",
							"nondetection"
						],
						"13": [
							"aura of purity",
							"banishment"
						],
						"17": [
							"hold monster",
							"hallow"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of the Watchers|Paladin||Watchers (UA)|UA2020SubclassesPt1|3",
				"Aura of the Sentinel|Paladin||Watchers (UA)|UA2020SubclassesPt1|7",
				"Vigilant Rebuke|Paladin||Watchers (UA)|UA2020SubclassesPt1|15",
				"Mortal Bulwark|Paladin||Watchers (UA)|UA2020SubclassesPt1|20"
			]
		},
		{
			"name": "Oath of Glory",
			"shortName": "Glory",
			"source": "TCE",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"guiding bolt",
							"heroism"
						],
						"5": [
							"enhance ability",
							"magic weapon"
						],
						"9": [
							"haste",
							"protection from energy"
						],
						"13": [
							"compulsion",
							"freedom of movement"
						],
						"17": [
							"commune",
							"flame strike"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of Glory|Paladin||Glory|TCE|3",
				"Aura of Alacrity|Paladin||Glory|TCE|7",
				"Glorious Defense|Paladin||Glory|TCE|15",
				"Living Legend|Paladin||Glory|TCE|20"
			]
		},
		{
			"name": "Oath of the Watchers",
			"shortName": "Watchers",
			"source": "TCE",
			"className": "Paladin",
			"classSource": "PHB",
			"page": 54,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"alarm",
							"detect magic"
						],
						"5": [
							"moonbeam",
							"see invisibility"
						],
						"9": [
							"counterspell",
							"nondetection"
						],
						"13": [
							"aura of purity",
							"banishment"
						],
						"17": [
							"hold monster",
							"scrying"
						]
					}
				}
			],
			"subclassFeatures": [
				"Oath of the Watchers|Paladin||Watchers|TCE|3",
				"Aura of the Sentinel|Paladin||Watchers|TCE|7",
				"Vigilant Rebuke|Paladin||Watchers|TCE|15",
				"Mortal Bulwark|Paladin||Watchers|TCE|20"
			]
		}
	],
	"classFeature": [
		{
			"name": "Divine Sense",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the {@spell hallow} spell.",
				"You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
			]
		},
		{
			"name": "Lay on Hands",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.",
				"As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
				"Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
				"This feature has no effect on undead and constructs."
			]
		},
		{
			"name": "Divine Smite",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is {@dice 2d8} for a 1st-level spell slot, plus {@dice 1d8} for each spell level higher than 1st, to a maximum of {@dice 5d8}. The damage increases by {@dice 1d8} if the target is an undead or a fiend, to a maximum of {@dice 6d8}."
			]
		},
		{
			"name": "Fighting Style",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take the same Fighting Style option more than once, even if you get to choose again.",
				{
					"type": "options",
					"count": 1,
					"entries": [
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
							"optionalfeature": "Blessed Warrior|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blessed Warrior|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Blind Fighting|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Interception|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Martial Versatility",
			"source": "UAClassFeatureVariants",
			"page": 12,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level feature (enhances Fighting Style)}",
				"Whenever you gain a level in this class, you can replace a fighting style you know with another style available to your class. This change represents a shift of focus in your martial training and practice, causing you to lose the benefits of one style and gain the benefits of another style."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter paladin spell list|spells|class=paladin}.",
				{
					"type": "entries",
					"name": "Preparing and Casting Spells",
					"entries": [
						"The Paladin table shows how many spell slots you have to cast your {@filter paladin spells|spells|class=paladin}. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd-level, in any combination. If you prepare the 1st-level spell {@spell cure wounds}, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
						{
							"type": "abilityDc",
							"name": "Spell",
							"attributes": [
								"cha"
							]
						},
						{
							"type": "abilityAttackMod",
							"name": "Spell",
							"attributes": [
								"cha"
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Focus",
					"entries": [
						"You can use a {@item holy symbol|phb} as a spellcasting focus for your paladin spells."
					]
				}
			]
		},
		{
			"name": "Channel Divinity",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"Your oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.",
				"When you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.",
				"Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
			]
		},
		{
			"name": "Channel Divinity: Harness Divine Power",
			"source": "TCE",
			"page": 52,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 3rd-level paladin {@variantrule optional class features|tce|optional feature}}",
				"You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended spell slot, the level of which can be no higher than half your proficiency bonus (rounded up). The number of times you can use this feature is based on the level you've reached in this class: 3rd level, once; 7th level, twice; and 15th level, thrice. You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Channel Divinity: Harness Divine Power",
			"source": "UAClassFeatureVariants",
			"page": 6,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 3rd-level paladin feature (enhances Channel Divinity)}",
				"You can expend a use of your Channel Divinity to fuel your spells. As a bonus action, you touch your holy symbol, utter a prayer, and regain one expended 1st-level spell slot."
			]
		},
		{
			"name": "Divine Health",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"By 3rd level, the divine magic flowing through you makes you immune to disease."
			]
		},
		{
			"name": "Sacred Oath",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose from the list of available oaths.",
				"Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.",
				{
					"name": "Oath Spells",
					"type": "entries",
					"entries": [
						"Each oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don't count against the number of spells you can prepare each day.",
						"If you gain an oath spell that doesn't appear on the paladin spell list, the spell is nonetheless a paladin spell for you."
					]
				},
				{
					"type": "refClassFeature",
					"classFeature": "Channel Divinity|Paladin||3"
				},
				{
					"type": "refClassFeature",
					"classFeature": "Channel Divinity: Harness Divine Power|Paladin||3|UAClassFeatureVariants"
				},
				{
					"type": "refClassFeature",
					"classFeature": "Channel Divinity: Harness Divine Power|Paladin||3|TCE"
				},
				{
					"name": "Breaking Your Oath",
					"type": "inset",
					"entries": [
						"A paladin tries to hold to the highest standards of conduct, but even the most virtuous paladin is fallible. Sometimes the right path proves too demanding, sometimes a situation calls for the lesser of two evils, and sometimes the heat of emotion causes a paladin to transgress his or her oath.",
						"A paladin who has broken a vow typically seeks absolution from a cleric who shares his or her faith or from another paladin of the same order. The paladin might spend an all-night vigil in prayer as a sign of penitence, or undertake a fast or similar act of self-denial. After a rite of confession and forgiveness, the paladin starts fresh.",
						"If a paladin willfully violates his or her oath and shows no sign of repentance, the consequences can be more serious. At the DM's discretion, an impenitent paladin might be forced to abandon this class and adopt another, or perhaps to take the Oathbreaker paladin option that appears in the Dungeon Master's Guide."
					]
				}
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
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
			"page": 52,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level paladin {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace a {@filter fighting style|optionalfeatures|feature type=FS:P} you know with another fighting style available to paladins. This replacement represents a shift of focus in your martial practice."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Paladin",
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
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Beginning at 5th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Aura of Protection",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Sacred Oath feature",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"At 7th level, you gain a feature granted to you by your Sacred Oath."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
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
			"className": "Paladin",
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
			"name": "Aura of Courage",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"Starting at 10th level, you and friendly creatures within 10 feet of you can't be {@condition frightened} while you are conscious.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Improved Divine Smite",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra {@damage 1d8} radiant damage."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
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
			"className": "Paladin",
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
			"name": "Cleansing Touch",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
				"You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
			]
		},
		{
			"name": "Sacred Oath feature",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"At 15th level, you gain a feature granted to you by your Sacred Oath."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
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
			"className": "Paladin",
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
			"name": "Aura improvements",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"At 18th level, the range of your Aura of Protection increases to 30 feet."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
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
			"className": "Paladin",
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
			"name": "Sacred Oath feature",
			"source": "PHB",
			"page": 82,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you gain a feature granted to you by your Sacred Oath."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Oathbreaker",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 3,
			"entries": [
				"An Oathbreaker is a paladin who breaks his or her sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart has been extinguished. Only darkness remains.",
				"A paladin must be evil and at least 3rd level to become an Oathbreaker. The paladin replaces the features specific to his or her Sacred Oath with Oathbreaker features.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oathbreaker Spells|Paladin||Oathbreaker|DMG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oathbreaker Channel Divinity: Control Undead|Paladin||Oathbreaker|DMG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oathbreaker Channel Divinity: Dreadful Aspect|Paladin||Oathbreaker|DMG|3"
				}
			]
		},
		{
			"name": "Oathbreaker Channel Divinity: Control Undead",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 3,
			"header": 1,
			"entries": [
				"As an action, the paladin targets one undead creature he or she can see within 30 feet of him or her. The target must make a Wisdom saving throw. On a failed save, the target must obey the paladin's commands for the next 24 hours, or until the paladin uses this Channel Divinity option again. An undead whose challenge rating is equal to or greater than the paladin's level is immune to this effect."
			]
		},
		{
			"name": "Oathbreaker Channel Divinity: Dreadful Aspect",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 3,
			"header": 1,
			"entries": [
				"As an action, the paladin channels the darkest emotions and focuses them into a burst of magical menace. Each creature of the paladin's choice within 30 feet of the paladin must make a Wisdom saving throw if it can see the paladin. On a failed save, the target is {@condition frightened} of the paladin for 1 minute. If a creature {@condition frightened} by this effect ends its turn more than 30 feet away from the paladin, it can attempt another Wisdom saving throw to end the effect on it."
			]
		},
		{
			"name": "Oathbreaker Spells",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oathbreaker spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oathbreaker Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell hellish rebuke}, {@spell inflict wounds}"
						],
						[
							"5th",
							"{@spell crown of madness}, {@spell darkness}"
						],
						[
							"9th",
							"{@spell animate dead}, {@spell bestow curse}"
						],
						[
							"13th",
							"{@spell blight}, {@spell confusion}"
						],
						[
							"17th",
							"{@spell contagion}, {@spell dominate person}"
						]
					]
				}
			]
		},
		{
			"name": "Aura of Hate",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, the paladin, as well any fiends and undead within 10 feet of the paladin, gains a bonus to melee weapon damage rolls equal to the paladin's Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Supernatural Resistance",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, the paladin gains resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
			]
		},
		{
			"name": "Dread Lord",
			"source": "DMG",
			"page": 97,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Oathbreaker",
			"subclassSource": "DMG",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, the paladin can, as an action, surround himself or herself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around the paladin to dim light. Whenever an enemy that is {@condition frightened} by the paladin starts its turn in the aura, it takes {@damage 4d10} psychic damage. Additionally, the paladin and creatures he or she chooses in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.",
				"While the aura lasts, the paladin can use a bonus action on his or her turn to cause the shadows in the aura to attack one creature. The paladin makes a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to {@dice 3d10} + the paladin's Charisma modifier.",
				"After activating the aura, the paladin can't do so again until he or she finishes a long rest."
			]
		},
		{
			"name": "Oath of the Ancients",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things\u2014leaves, antlers, or flowers\u2014to reflect their commitment to preserving life and light in the world.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of the Ancients|Paladin||Ancients||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Ancients||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Nature's Wrath|Paladin||Ancients||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Turn the Faithless|Paladin||Ancients||3"
				}
			]
		},
		{
			"name": "Channel Divinity: Nature's Wrath",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be {@condition restrained}. While {@condition restrained} by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish."
			]
		},
		{
			"name": "Channel Divinity: Turn the Faithless",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.",
				"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the {@action Dodge} action.",
				"If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned."
			]
		},
		{
			"name": "Oath Spells",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of the Ancients Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell ensnaring strike}, {@spell speak with animals}"
						],
						[
							"5th",
							"{@spell moonbeam}, {@spell misty step}"
						],
						[
							"9th",
							"{@spell plant growth}, {@spell protection from energy}"
						],
						[
							"13th",
							"{@spell ice storm}, {@spell stoneskin}"
						],
						[
							"17th",
							"{@spell commune with nature}, {@spell tree stride}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of the Ancients",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Kindle the Light",
							"entries": [
								"Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Shelter the Light",
							"entries": [
								"Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Preserve Your Own Light",
							"entries": [
								"Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Be the Light",
							"entries": [
								"Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds."
							]
						}
					]
				}
			]
		},
		{
			"name": "Aura of Warding",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Undying Sentinel",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.",
				"Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically."
			]
		},
		{
			"name": "Elder Champion",
			"source": "PHB",
			"page": 86,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Ancients",
			"subclassSource": "PHB",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or mosslike, or you might sprout antlers or a lion-like mane.",
				"Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"At the start of each of your turns, you regain 10 hit points.",
						"Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using your bonus action instead.",
						"Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Devotion",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels\u2014the perfect servants of good\u2014as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Devotion|Paladin||Devotion||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Devotion||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Sacred Weapon|Paladin||Devotion||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Turn the Unholy|Paladin||Devotion||3"
				}
			]
		},
		{
			"name": "Channel Divinity: Sacred Weapon",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.",
				"You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall {@condition unconscious}, this effect ends."
			]
		},
		{
			"name": "Channel Divinity: Turn the Unholy",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.",
				"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the {@action Dodge} action."
			]
		},
		{
			"name": "Oath Spells",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Devotion Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell protection from evil and good}, {@spell sanctuary}"
						],
						[
							"5th",
							"{@spell lesser restoration}, {@spell zone of truth}"
						],
						[
							"9th",
							"{@spell beacon of hope}, {@spell dispel magic}"
						],
						[
							"13th",
							"{@spell freedom of movement}, {@spell guardian of faith}"
						],
						[
							"17th",
							"{@spell commune}, {@spell flame strike}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Devotion",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Honesty",
							"entries": [
								"Don't lie or cheat. Let your word be your promise."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Courage",
							"entries": [
								"Never fear to act, though caution is wise."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Compassion",
							"entries": [
								"Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Honor",
							"entries": [
								"Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Duty",
							"entries": [
								"Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you."
							]
						}
					]
				}
			]
		},
		{
			"name": "Aura of Devotion",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you and friendly creatures within 10 feet of you can't be {@condition charmed} while you are conscious.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Purity of Spirit",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Beginning at 15th level, you are always under the effects of a {@spell protection from evil and good} spell."
			]
		},
		{
			"name": "Holy Nimbus",
			"source": "PHB",
			"page": 85,
			"srd": true,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Devotion",
			"subclassSource": "PHB",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.",
				"Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.",
				"In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Vengeance",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside\u2014at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins\u2014sometimes called avengers or dark knights\u2014their own purity is not as important as delivering justice.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Vengeance|Paladin||Vengeance||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Vengeance||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Abjure Enemy|Paladin||Vengeance||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Vow of Enmity|Paladin||Vengeance||3"
				}
			]
		},
		{
			"name": "Channel Divinity: Abjure Enemy",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being {@condition frightened}. Fiends and undead have disadvantage on this saving throw.",
				"On a failed save, the creature is {@condition frightened} for 1 minute or until it takes any damage. While {@condition frightened}, the creature's speed is 0, and it can't benefit from any bonus to its speed.",
				"On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage."
			]
		},
		{
			"name": "Channel Divinity: Vow of Enmity",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls {@condition unconscious}."
			]
		},
		{
			"name": "Oath Spells",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Vengeance Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell bane}, {@spell hunter's mark}"
						],
						[
							"5th",
							"{@spell hold person}, {@spell misty step}"
						],
						[
							"9th",
							"{@spell haste}, {@spell protection from energy}"
						],
						[
							"13th",
							"{@spell banishment}, {@spell dimension door}"
						],
						[
							"17th",
							"{@spell hold monster}, {@spell scrying}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Vengeance",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Fight the Greater Evil",
							"entries": [
								"Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "No Mercy for the Wicked",
							"entries": [
								"Ordinary foes might win my mercy, but my sworn enemies do not."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "By Any Means Necessary",
							"entries": [
								"My qualms can't get in the way of exterminating my foes."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Restitution",
							"entries": [
								"If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds."
							]
						}
					]
				}
			]
		},
		{
			"name": "Relentless Avenger",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 7,
			"header": 2,
			"entries": [
				"By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks."
			]
		},
		{
			"name": "Soul of Vengeance",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range."
			]
		},
		{
			"name": "Avenging Angel",
			"source": "PHB",
			"page": 87,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Vengeance",
			"subclassSource": "PHB",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"Wings sprout from your back and grant you a flying speed of 60 feet.",
						"You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become {@condition frightened} of you for 1 minute or until it takes any damage. {@action Attack} rolls against the {@condition frightened} creature have advantage."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of the Crown",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 3,
			"entries": [
				"The Oath of the Crown is sworn to the ideals of civilization, be it the spirit of a nation, fealty to a sovereign, or service to a deity of law and rulership. The paladins who swear this oath dedicate themselves to serving society and, in particular, the laws that hold society together. These paladins are the watchful guardians on the walls, standing against the chaotic tides of barbarism that threaten to tear down all that civilization has built, and are commonly known as guardians, exemplars, or sentinels. Often, paladins who swear this oath are members of an order of knighthood in service to a nation or sovereign, and undergo their oath as part of their admission to the order's ranks.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of the Crown|Paladin||Crown|SCAG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Crown|SCAG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Champion Challenge|Paladin||Crown|SCAG|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Turn the Tide|Paladin||Crown|SCAG|3"
				}
			]
		},
		{
			"name": "Channel Divinity: Champion Challenge",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As a bonus action, you issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can't willingly move more than 30 feet away from you. This effect ends on the creature if you are {@condition incapacitated} or die or if the creature is more than 30 feet away from you."
			]
		},
		{
			"name": "Channel Divinity: Turn the Tide",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to {@dice 1d6} + your Charisma modifier (minimum of 1) if it has no more than half of its hit points."
			]
		},
		{
			"name": "Oath Spells",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of the Crown Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell command}, {@spell compelled duel}"
						],
						[
							"5th",
							"{@spell warding bond}, {@spell zone of truth}"
						],
						[
							"9th",
							"{@spell aura of vitality}, {@spell spirit guardians}"
						],
						[
							"13th",
							"{@spell banishment}, {@spell guardian of faith}"
						],
						[
							"17th",
							"{@spell circle of power}, {@spell geas}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of the Crown",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of the Crown are often set by the sovereign to which their oath is sworn, but generally emphasize the following tenets.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Law",
							"entries": [
								"The law is paramount. It is the mortar that holds the stones of civilization together, and it must be respected."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Loyalty",
							"entries": [
								"Your word is your bond. Without loyalty, oaths and laws are meaningless."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Courage",
							"entries": [
								"You must be willing to do what needs to be done for the sake of order, even in the face of overwhelming odds. If you don't act, then who will?"
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Responsibility",
							"entries": [
								"You must deal with the consequences of your actions, and you are responsible for fulfilling your duties and obligations."
							]
						}
					]
				}
			]
		},
		{
			"name": "Divine Allegiance",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can't be reduced or prevented in any way."
			]
		},
		{
			"name": "Unyielding Spirit",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, you have advantage on saving throws to avoid becoming {@condition paralyzed} or {@condition stunned}."
			]
		},
		{
			"name": "Exalted Champion",
			"source": "SCAG",
			"page": 132,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Crown",
			"subclassSource": "SCAG",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, your presence on the field of battle is an inspiration to those dedicated to your cause. You can use your action to gain the following benefits for 1 hour:",
				{
					"type": "list",
					"items": [
						"You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
						"Your allies have advantage on death saving throws while within 30 feet of you.",
						"You have advantage on Wisdom saving throws, as do your allies within 30 feet of you."
					]
				},
				"This effect ends early if you are {@condition incapacitated} or die. Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Glory",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Paladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism. They train diligently and encourage their companions so they're all ready when destiny calls.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Glory|Paladin||Glory|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Glory|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity|Paladin||Glory|TCE|3"
				}
			]
		},
		{
			"name": "Channel Divinity",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 3rd-level Oath of Glory feature}",
				"You gain the following two Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Peerless Athlete|Paladin||Glory|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Inspiring Smite|Paladin||Glory|TCE|3"
				}
			]
		},
		{
			"name": "Oath Spells",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Oath of Glory feature}",
				"You gain oath spells at the paladin levels listed in the Oath of Glory Spells table. See the Sacred Oath class feature for how oath spells work.",
				{
					"type": "table",
					"caption": "Oath of Glory Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell guiding bolt}, {@spell heroism}"
						],
						[
							"5th",
							"{@spell enhance ability}, {@spell magic weapon}"
						],
						[
							"9th",
							"{@spell haste}, {@spell protection from energy}"
						],
						[
							"13th",
							"{@spell compulsion}, {@spell freedom of movement}"
						],
						[
							"17th",
							"{@spell commune}, {@spell flame strike}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Glory",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of Glory drive a paladin to attempt heroics that might one day shine in legend.",
				{
					"type": "entries",
					"name": "Actions over Words",
					"entries": [
						"Strive to be known by glorious deeds, not words."
					]
				},
				{
					"type": "entries",
					"name": "Challenges Are but Tests",
					"entries": [
						"Face hardships with courage, and encourage your allies to face them with you."
					]
				},
				{
					"type": "entries",
					"name": "Hone the Body",
					"entries": [
						"Like raw stone, your body must be worked so its potential can be realized."
					]
				},
				{
					"type": "entries",
					"name": "Discipline the Soul",
					"entries": [
						"You must marshal the discipline to overcome failings within yourself that threaten to dim the glory of you and your friends."
					]
				}
			]
		},
		{
			"name": "Channel Divinity: Inspiring Smite",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 3,
			"header": 2,
			"entries": [
				"Immediately after you deal damage to a creature with your Divine Smite feature, you can use your Channel Divinity as a bonus action and distribute temporary hit points to creatures of your choice within 30 feet of you, which can include you. The total number of temporary hit points equals {@dice 2d8} + your level in this class, divided among the chosen creatures however you like."
			]
		},
		{
			"name": "Channel Divinity: Peerless Athlete",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 3,
			"header": 2,
			"entries": [
				"As a bonus action, you can use your Channel Divinity to augment your athleticism. For the next 10 minutes, you have advantage on Strength ({@skill Athletics}) and Dexterity ({@skill Acrobatics}) checks; you can carry, push, drag, and lift twice as much weight as normal; and the distance of your long and high jumps increases by 10 feet (this extra distance costs movement as normal)."
			]
		},
		{
			"name": "Aura of Alacrity",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Oath of Glory feature}",
				"You emanate an aura that fills you and your companions with supernatural speed, allowing you to race across a battlefield in formation. Your walking speed increases by 10 feet. In addition, if you aren't {@condition incapacitated}, the walking speed of any ally who starts their turn within 5 feet of you increases by 10 feet until the end of that turn.",
				"When you reach 18th level in this class, the range of the aura increases to 10 feet."
			]
		},
		{
			"name": "Glorious Defense",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Oath of Glory feature}",
				"You can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can use your reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction, provided the attacker is within your weapon's range.",
				"You can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Living Legend",
			"source": "TCE",
			"page": 53,
			"otherSources": [
				{
					"source": "MOT",
					"page": 29
				}
			],
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Glory",
			"subclassSource": "TCE",
			"level": 20,
			"header": 2,
			"entries": [
				"{@i 20th-level Oath of Glory feature}",
				"You can empower yourself with the legends\u2014whether true or exaggerated\u2014of your great deeds. As a bonus action, you gain the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You are blessed with an otherworldly presence, gaining advantage on all Charisma checks.",
						"Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.",
						"If you fail a saving throw, you can use your reaction to reroll it. You must use this new roll."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again."
			]
		},
		{
			"name": "Oath of the Watchers",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 3,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"The Oath of the Watchers binds paladins to protect mortal realms from the predations of extraplanar creatures, many of which can lay waste to mortal soldiers. Thus, the Watchers hone their minds, spirits, and bodies to be the ultimate weapons against such threats.",
				"Paladins who follow the Watchers' oath are ever vigilant in spotting the influence of extraplanar forces, often establishing a network of spies and informants to gather information on suspected cults. To a Watcher, keeping a healthy suspicion and awareness about one's surroundings is as natural as wearing armor in battle.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of the Watchers|Paladin||Watchers|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Watchers|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity|Paladin||Watchers|TCE|3"
				}
			]
		},
		{
			"name": "Channel Divinity",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 3rd-level Oath of the Watchers feature}",
				"You gain the following Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.",
				{
					"type": "entries",
					"name": "Watcher's Will",
					"entries": [
						"You can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, you and the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws."
					]
				},
				{
					"type": "entries",
					"name": "Abjure the Extraplanar",
					"entries": [
						"You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each aberration, celestial, elemental, fey, or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.",
						"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can take the {@action Dodge} action."
					]
				}
			]
		},
		{
			"name": "Oath Spells",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Oath of the Watchers feature}",
				"You gain oath spells at the paladin levels listed in the Oath of the Watchers table. See the Sacred Oath class feature for how oath spells work.",
				{
					"type": "table",
					"caption": "Oath of the Watchers Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell alarm}, {@spell detect magic}"
						],
						[
							"5th",
							"{@spell moonbeam}, {@spell see invisibility}"
						],
						[
							"9th",
							"{@spell counterspell}, {@spell nondetection}"
						],
						[
							"13th",
							"{@spell aura of purity}, {@spell banishment}"
						],
						[
							"17th",
							"{@spell hold monster}, {@spell scrying}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of the Watchers",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"A paladin who assumes the Oath of the Watchers swears to safeguard mortal realms from otherworldly threats.",
				{
					"type": "entries",
					"name": "Vigilance",
					"entries": [
						"The threats you face are cunning, powerful, and subversive. Be ever alert for their corruption."
					]
				},
				{
					"type": "entries",
					"name": "Loyalty",
					"entries": [
						"Never accept gifts or favors from fiends or those who truck with them. Stay true to your order, your comrades, and your duty."
					]
				},
				{
					"type": "entries",
					"name": "Discipline",
					"entries": [
						"You are the shield against the endless terrors that lie beyond the stars. Your blade must be forever sharp and your mind keen to survive what lies beyond."
					]
				}
			]
		},
		{
			"name": "Aura of the Sentinel",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Oath of the Watchers feature}",
				"You emit an aura of alertness while you aren't {@condition incapacitated}. When you and any creatures of your choice within 10 feet of you roll initiative, you all gain a bonus to initiative equal to your proficiency bonus.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Vigilant Rebuke",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Oath of the Watchers feature}",
				"You've learned how to chastise anyone who dares wield beguilements against you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on an Intelligence, a Wisdom, or a Charisma saving throw, you can use your reaction to deal {@damage 2d8} + your Charisma modifier force damage to the creature that forced the saving throw."
			]
		},
		{
			"name": "Mortal Bulwark",
			"source": "TCE",
			"page": 54,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers",
			"subclassSource": "TCE",
			"level": 20,
			"header": 2,
			"entries": [
				"{@i 20th-level Oath of the Watchers feature}",
				"You manifest a spark of divine power in defense of the mortal realms. As a bonus action, you gain the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You gain {@sense truesight} with a range of 120 feet.",
						"You have advantage on attack rolls against aberrations, celestials, elementals, fey, and fiends.",
						"When you hit a creature with an attack roll and deal damage to it, you can also force it to make a Charisma saving throw against your spell save DC. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours."
					]
				},
				"Once you use this bonus action, you can't use it again until you finish a long rest, unless you expend a 5th-level spell slot to use it again."
			]
		},
		{
			"name": "Oath of the Watchers",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"Paladins who vow the Oath of the Watchers seek to protect the mortal realm from the predations of extraplanar creatures, many of which can lay waste to mortal soldiers. Thus, the Watchers hone their minds, spirits, and bodies to be the ultimate weapons against such threats.",
				"Paladins who follow the Watchers' oath are ever vigilant in spotting the influence of extraplanar forces, often establishing a network of spies and informants to gather information on suspected cults. To a Watcher, keeping a healthy suspicion and awareness about one's surroundings is as natural as wearing armor in battle.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of the Watchers|Paladin||Watchers (UA)|UA2020SubclassesPt1|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Watchers (UA)|UA2020SubclassesPt1|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity|Paladin||Watchers (UA)|UA2020SubclassesPt1|3"
				}
			]
		},
		{
			"name": "Channel Divinity",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 3rd-level Oath of the Watchers feature}",
				"You gain the following Channel Divinity options. See the Sacred Oath class feature for how Channel Divinity works.",
				{
					"type": "entries",
					"name": "Watcher's Will",
					"entries": [
						"You can use your Channel Divinity to invest your presence with the warding power of your faith. As an action, you can choose a number of creatures you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). For 1 minute, all the chosen creatures have advantage on Intelligence, Wisdom, and Charisma saving throws."
					]
				},
				{
					"type": "entries",
					"name": "Abjure the Extraplanar",
					"entries": [
						"You can use your Channel Divinity to castigate unworldly beings. As an action, you present your holy symbol and each elemental, fey, fiend, or aberration within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.",
						"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. For its action, it can use only the {@action Dash} action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the {@action Dodge} action."
					]
				}
			]
		},
		{
			"name": "Oath Spells",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Oath of the Watchers feature}",
				"You gain oath spells at the paladin levels listed in the Oath of the Watchers table. See the Sacred Oath class feature for how oath spells work.",
				{
					"type": "table",
					"caption": "Oath of the Watchers Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell alarm}, {@spell chromatic orb}"
						],
						[
							"5th",
							"{@spell augury}, {@spell moonbeam}"
						],
						[
							"9th",
							"{@spell counterspell}, {@spell nondetection}"
						],
						[
							"13th",
							"{@spell aura of purity}, {@spell banishment}"
						],
						[
							"17th",
							"{@spell hold monster}, {@spell hallow}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of the Watchers",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 3,
			"header": 1,
			"entries": [
				"A paladin who assumes the Oath of the Watchers swears to safeguard the mortal realm from otherworldly threats.",
				{
					"type": "entries",
					"name": "Vigilance",
					"entries": [
						"The threats you face are cunning, powerful, and subversive. Be ever alert for their corruption."
					]
				},
				{
					"type": "entries",
					"name": "Loyalty",
					"entries": [
						"Never accept gifts or favors from fiends or those who truck with them. Stay true to your order, your comrades, and your duty."
					]
				},
				{
					"type": "entries",
					"name": "Discipline",
					"entries": [
						"You are the shield against the endless terrors that lie beyond the stars. Your blade must be forever sharp and your mind keen to survive what lies beyond."
					]
				}
			]
		},
		{
			"name": "Aura of the Sentinel",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th- and 18th-level Oath of the Watchers feature}",
				"You emit an aura of alertness while you aren't {@condition incapacitated}. When you and any creature of your choice within 10 feet of you rolls initiative, you each gain a bonus to initiative equal to your Charisma modifier (minimum of +1). At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Vigilant Rebuke",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Oath of the Watchers feature}",
				"You've learned how to magically chastise anyone who dares cast unwanted spells at you and your wards. Whenever you or a creature you can see within 30 feet of you succeeds on a saving throw against a spell, you can use your reaction to deal {@damage 2d8} + your Charisma modifier force damage to the spellcaster."
			]
		},
		{
			"name": "Mortal Bulwark",
			"source": "UA2020SubclassesPt1",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Watchers (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 20,
			"header": 2,
			"entries": [
				"{@i 20th-level Oath of the Watchers feature}",
				"You manifest a spark of your deity's power in defense of your sacred oath. As a bonus action, you gain the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You gain {@sense truesight} in a 120-foot radius.",
						"You have advantage on attack rolls against elementals, fey, fiends, and aberrations.",
						"When you hit a creature with an attack and deal damage to it, you can also force it to make a Charisma saving throw. On a failed save, the creature is magically banished to its native plane of existence if it's currently not there. On a successful save, the creature can't be banished by this feature for 24 hours."
					]
				},
				"Once you use this bonus action, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Redemption",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"The Oath of Redemption sets a paladin on a difficult path, one that requires a holy warrior to use violence only as a last resort. Paladins who dedicate themselves to this oath believe that any person can be redeemed and that the path of benevolence and justice is one that anyone can walk. These paladins face evil creatures in the hope of turning them to the light, and the paladins slay them only when such a deed will clearly save other lives. Paladins who follow this path are known as redeemers.",
				"While redeemers are idealists, they are no fools. Redeemers know that undead, demons, devils, and other supernatural threats can be inherently evil. Against such foes, the paladins bring the full wrath of their weapons and spells to bear. Yet the redeemers still pray that, one day, even creatures of wickedness will invite their own redemption.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Redemption|Paladin||Redemption (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Redemption (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Armor of Peace|Paladin||Redemption (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warrior of Reconciliation|Paladin||Redemption (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Emissary of Peace|Paladin||Redemption (UA)|UAATrioOfSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Rebuke the Violent|Paladin||Redemption (UA)|UAATrioOfSubclasses|3"
				}
			]
		},
		{
			"name": "Armor of Peace",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, your commitment to peace allows you to walk into the most dangerous situations unarmored. While you aren't wearing armor or wielding a shield, your base AC is 16 + your Dexterity modifier."
			]
		},
		{
			"name": "Channel Divinity: Emissary of Peace",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to the next Charisma ({@skill Persuasion}) check you make within the next minute."
			]
		},
		{
			"name": "Channel Divinity: Rebuke the Violent",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to rebuke those who use violence. As a reaction when an enemy within 10 feet of you deals damage with a melee attack against one creature other than you, you force that attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage."
			]
		},
		{
			"name": "Oath Spells",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Redemption Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell shield}, {@spell sleep}"
						],
						[
							"5th",
							"{@spell hold person}, {@spell ray of enfeeblement}"
						],
						[
							"9th",
							"{@spell counterspell}, {@spell hypnotic pattern}"
						],
						[
							"13th",
							"{@spell Otiluke's resilient sphere}, {@spell stoneskin}"
						],
						[
							"17th",
							"{@spell hold monster}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Redemption",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Peace",
							"entries": [
								"Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Innocence",
							"entries": [
								"All people begin life in an innocent state, and it is their environment or the influence of dark forces that drives them to evil. By setting the proper example, and working to heal the wounds of a deeply flawed world, you can set anyone on a righteous path."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Patience",
							"entries": [
								"Change takes time. Those who have walked the path of the wicked must be given reminders to keep them honest and true. Once you have planted the seed of righteousness in a creature, you must work day after day to allow it to survive and then flourish."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Wisdom",
							"entries": [
								"Your heart and mind must stay clear, for eventually you will be forced to admit defeat. While every creature can be redeemed, some are so far along the path of evil that you have no choice but to end their lives for the greater good. Any such action must be carefully weighed and the consequences fully understood, but once you have made the decision, follow through with it knowing your path is just."
							]
						}
					]
				}
			]
		},
		{
			"name": "Warrior of Reconciliation",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you foreswear the weapons of war in favor of simple tools. While wielding a simple weapon that deals bludgeoning damage, you gain a special benefit if you reduce a creature to 0 hit points with that weapon and decide to spare the creature's life. Instead of falling {@condition unconscious}, the creature is {@condition charmed} by you for 1 minute. During that time, the {@condition charmed} creature is peaceful and docile, refusing to move or to take actions or reactions, unless you command it to. You can't order the creature to attack, force someone to make a saving throw, or cause damage to itself or others. This {@condition charmed} effect ends early if you are {@condition incapacitated} or if you or your companions attack the creature, deal damage to it, or force it to make a saving throw. When the effect ends, the creature falls {@condition unconscious} if it still has 0 hit points."
			]
		},
		{
			"name": "Aura of the Guardian",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you can shield your allies from harm at the cost of your own health. As a reaction when an ally within 10 feet of you takes damage, you instead magically take that damage. This feature doesn't transfer any other effects that might accompany the damage."
			]
		},
		{
			"name": "Protective Spirit",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, a holy presence mends your wounds in combat. You regain hit points equal to {@dice 1d6} + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren't {@condition incapacitated}."
			]
		},
		{
			"name": "Emissary of Redemption",
			"source": "UAATrioOfSubclasses",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption (UA)",
			"subclassSource": "UAATrioOfSubclasses",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you become an avatar of peace, which gives you two benefits:",
				{
					"type": "list",
					"items": [
						"You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).",
						"Whenever a creature damages you, it takes damage equal to half the amount it dealt to you."
					]
				},
				"If you attack a creature, deal damage to it, or force it to make a saving throw, neither benefit works against that creature until you finish a long rest."
			]
		},
		{
			"name": "Oath of Heroism",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"entries": [
				"The Oath of Heroism is an affirmation of a destined path, one laid out for you by divine hands. For whatever reason, a god or a group of gods has included you in their machinations. You are not a reluctant hero, but one who fully embraces the idea that great deeds are yours to achieve. You train diligently, sculpting your body and refining your skills so you're ready when destiny calls.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Heroism|Paladin||Heroism (UA)|UABardAndPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Heroism (UA)|UABardAndPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity|Paladin||Heroism (UA)|UABardAndPaladin|3"
				}
			]
		},
		{
			"name": "Channel Divinity",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"{@i 3rd-level Oath of Heroism feature}",
				"You gain the following two Channel Divinity options.",
				{
					"type": "entries",
					"name": "Peerless Athlete",
					"entries": [
						"You can use your Channel Divinity to augment your athleticism with divine favor. As a bonus action, you gain advantage on all Strength ({@skill Athletics}) and Dexterity ({@skill Acrobatics}) checks for the next 10 minutes. "
					]
				},
				{
					"type": "entries",
					"name": "Legendary Strike",
					"entries": [
						"You can use your Channel Divinity as a bonus action to guide your attacks: for 1 minute, your weapon attacks score a critical hit on a roll of 19 or 20 on the {@dice d20}. "
					]
				}
			]
		},
		{
			"name": "Oath Spells",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Oath of Heroism feature}",
				"You gain oath spells at the paladin levels listed in the Oath of Heroism Spells table.",
				{
					"type": "table",
					"caption": "Oath of Heroism Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell expeditious retreat}, {@spell guiding bolt}"
						],
						[
							"5th",
							"{@spell enhance ability}, {@spell enthrall}"
						],
						[
							"9th",
							"{@spell haste}, {@spell protection from energy}"
						],
						[
							"13th",
							"{@spell compulsion}, {@spell freedom of movement}"
						],
						[
							"17th",
							"{@spell commune}, {@spell conjure volley}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Heroism",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of Heroism reflect a paladin's commitment to fulfilling their calling as a hero worthy of legend.",
				{
					"type": "entries",
					"name": "Actions over Words",
					"entries": [
						"Strive to be known by deeds not words."
					]
				},
				{
					"type": "entries",
					"name": "Challenges Are but Tests",
					"entries": [
						"Every hardship serves to challenge your abilities and harden your resolve."
					]
				},
				{
					"type": "entries",
					"name": "Embrace Destiny",
					"entries": [
						"You didn't choose this path, but it's yours to walk. And it will carry you into legend."
					]
				},
				{
					"type": "entries",
					"name": "Hone the Body",
					"entries": [
						"Like raw stone, your body must be worked so its potential can be realized."
					]
				}
			]
		},
		{
			"name": "Mighty Deed",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 7,
			"header": 2,
			"entries": [
				"{@i 7th-level Oath of Heroism feature}",
				"Your actions on the battlefield can supernaturally bolster your allies and demoralize your enemies. Whenever you score a critical hit or reduce a creature to 0 hit points, you can choose one or more creatures that you can see within 30 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). All the chosen creatures are affected by one of the following effects of your choice:",
				{
					"type": "list",
					"items": [
						"The creature gains temporary hit points equal to {@dice 1d6} + your Charisma modifier (minimum of 1 temporary hit point).",
						"The creature must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} of you until the start of your next turn."
					]
				},
				"Once you use this feature, you can't use it again until the start of your next turn."
			]
		},
		{
			"name": "Glorious Defense",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 15,
			"header": 2,
			"entries": [
				"{@i 15th-level Oath of Heroism feature}",
				"Your blessed glory on the battlefield can misdirect an attack. When a creature you can see hits you with an attack roll, you can use your reaction to gain a bonus to AC against that attack, potentially causing it to miss you. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one weapon attack against the attacker as part of this reaction."
			]
		},
		{
			"name": "Living Myth",
			"source": "UABardAndPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Heroism (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 20,
			"header": 2,
			"entries": [
				"{@i 20th-level Oath of Heroism feature}",
				"You can now empower yourself with the legends\u2014whether true or exaggerated\u2014told of your great deeds. As a bonus action, you gain the following benefits for 10 minutes:",
				{
					"type": "list",
					"items": [
						"You are blessed with otherworldly comeliness, gaining advantage on all Charisma checks.",
						"Once on each of your turns when you make a weapon attack and miss, you can cause that attack to hit instead.",
						"If you fail a saving throw, you can use your reaction to succeed instead."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Conquest",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"entries": [
				"The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn't enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might. Some of these paladins go so far as to consort with the powers of the Nine Hells. The archdevil Bel, warlord of Avernus, counts many of these paladins called hell knights as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Conquest|Paladin||Conquest (UA)|UAPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Conquest (UA)|UAPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Conquering Strike|Paladin||Conquest (UA)|UAPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Guided Strike|Paladin||Conquest (UA)|UAPaladin|3"
				}
			]
		},
		{
			"name": "Channel Divinity: Conquering Strike",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to break a foe's will. When you hit a creature with a melee weapon attack as part of the {@action Attack} action, you can also use your Channel Divinity to force the target to make a Wisdom saving throw. On a failed save, the target becomes {@condition frightened} of you for 1 minute. The {@condition frightened} creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."
			]
		},
		{
			"name": "Channel Divinity: Guided Strike",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Oath Spells",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Conquest Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell armor of Agathys}, {@spell command}"
						],
						[
							"5th",
							"{@spell hold person}, {@spell spiritual weapon}"
						],
						[
							"9th",
							"{@spell bestow curse}, {@spell fear}"
						],
						[
							"13th",
							"{@spell blight}, {@spell dominate beast}"
						],
						[
							"17th",
							"{@spell dominate person}, {@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Conquest",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"A paladin who takes this oath has the tenets of conquest seared on the upper arm. A hell knight's oath appears in {@language Infernal} runes, a brutal reminder of vows to the Lords of Hell.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Douse the Flame of Hope",
							"entries": [
								"It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies will to fight is shattered forever. A blade can end a life. Fear can end an empire."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Rule with an Iron Fist",
							"entries": [
								"Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Strength Above All",
							"entries": [
								"You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin."
							]
						}
					]
				}
			]
		},
		{
			"name": "Aura of Conquest",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you emanate a menacing aura while you're not {@condition incapacitated}. The aura includes your space, extends 10 feet from you in every direction, and is blocked by total cover. Any enemy in the aura has disadvantage on saving throws against being {@condition frightened}.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Implacable Spirit",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 15,
			"header": 2,
			"entries": [
				"Once you reach 15th level, you can no longer be {@condition charmed}."
			]
		},
		{
			"name": "Invincible Conqueror",
			"source": "UAPaladin",
			"page": 1,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest (UA)",
			"subclassSource": "UAPaladin",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You have resistance to all damage.",
						"When you take the {@action Attack} action on your turn, you can make one additional attack as part of that action.",
						"Your melee weapon attacks score a critical hit on a roll of 19 or 20."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Treachery",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"entries": [
				"The Oath of Treachery is the path followed by paladins who have forsworn other oaths or who care only for their own power and survival. Commonly known as blackguards, these profane warriors are faithful only to themselves. Anyone desperate enough to follow one of these paladins does so because, while deceitful, these paladins command great power. Those who follow them without falling prey to their treachery hope to indulge in wanton violence and accumulate great treasure. Many of these paladins pay homage to demon lords, especially Grazz't and Orcus. Even the Lords of Hell are loath to ally with these champions of chaos, but sometimes Baalzebul and Glasya find a kindred spirit in a blackguard's penchant for double dealing and treachery.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Treachery|Paladin||Treachery (UA)|UAPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Treachery (UA)|UAPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Conjure Duplicate|Paladin||Treachery (UA)|UAPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Poison Strike|Paladin||Treachery (UA)|UAPaladin|3"
				}
			]
		},
		{
			"name": "Channel Divinity: Conjure Duplicate",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"As an action, you create a visual illusion of yourself that lasts for 1 minute, or until you lose your {@status concentration} (as if you were {@status concentration||concentrating} on a spell). The illusion appears in an unoccupied space of your choice that you can see within 30 feet of you. The illusion looks exactly like you; it is silent; it is your size, is insubstantial, doesn't occupy its space; and it is unaffected by attacks and damage. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but the illusion must remain within 120 feet of you.",
				"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how uncanny the illusion is."
			]
		},
		{
			"name": "Channel Divinity: Poison Strike",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to make a weapon deadlier. As a bonus action, you touch one weapon or piece of ammunition and conjure a special poison on it. The poison lasts for 1 minute. The next time you hit a target with an attack using that weapon or ammunition, the target takes poison damage immediately after the attack. The poison damage equals {@dice 2d10} + your paladin level, or 20 + your paladin level if you had advantage on the attack roll."
			]
		},
		{
			"name": "Oath Spells",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Treachery Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell charm person}, {@spell expeditious retreat}"
						],
						[
							"5th",
							"{@spell invisibility}, {@spell mirror image}"
						],
						[
							"9th",
							"{@spell gaseous form}, {@spell haste}"
						],
						[
							"13th",
							"{@spell confusion}, {@spell greater invisibility}"
						],
						[
							"17th",
							"{@spell dominate person}, {@spell passwall}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Treachery",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"A paladin who embraces the Oath of Treachery owes allegiance to no one. There are no tenets of this oath, for it lacks any substance. Those who are unfortunate enough to have close contact with blackguards have observed that a blackguard's overwhelming concern is power and safety, especially if both can be obtained at the expense of others."
			]
		},
		{
			"name": "Aura of Treachery",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you emanate an aura of discord, which gives you the following benefits.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Cull the Herd",
							"entries": [
								"You have advantage on melee attack rolls against any creature that has one or more of its allies within 5 feet of it."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Treacherous Strike",
							"entries": [
								"If a creature within 5 feet of you misses you with a melee attack, you can use your reaction to force the attacker to reroll that attack against a creature of your choice that is also within 5 feet of the attacker. The ability fails and is wasted if the attacker is immune to being {@condition charmed}.",
								"You can use this ability three times. You regain expended uses of it when you finish a short or long rest."
							]
						}
					]
				}
			]
		},
		{
			"name": "Blackguard's Escape",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 15,
			"header": 2,
			"entries": [
				"At 15th level, you have the ability to slip away from your foes. Immediately after you are hit by an attack, you can use your reaction to turn {@condition invisible} and teleport up to 60 feet to a spot you can see. You remain {@condition invisible} until the end of your next turn or until you attack, deal damage, or force a creature to make a saving throw. Once you use this feature, you must finish a short or long rest before you can use it again."
			]
		},
		{
			"name": "Icon of Deceit",
			"source": "UAPaladin",
			"page": 2,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Treachery (UA)",
			"subclassSource": "UAPaladin",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you gain the ability to emanate feelings of treachery. As an action, you can magically become an avatar of deceit, gaining the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You are {@condition invisible}.",
						"If a creature damages you on its turn, it must succeed on a Wisdom saving throw (DC equal to your spell save DC) or you control its next action, provided that you aren't {@condition incapacitated} when it takes the action. A creature automatically succeeds on the save if the creature is immune to being {@condition charmed}.",
						"If you have advantage on an attack roll, you gain a bonus to its damage roll equal to your paladin level."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Conquest v2",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"entries": [
				"The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn't enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might.",
				"Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins\u2014called hell knights\u2014as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. These knights are often most fiercely resisted by other paladins of this oath, who believe that the hell knights have wandered too far into darkness.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Conquest|Paladin||Conquest v2 (UA)|UARevisedClassOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Conquest v2 (UA)|UARevisedClassOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Conquering Presence|Paladin||Conquest v2 (UA)|UARevisedClassOptions|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Guided Strike|Paladin||Conquest v2 (UA)|UARevisedClassOptions|3"
				}
			]
		},
		{
			"name": "Channel Divinity: Conquering Presence",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes {@condition frightened} of you for 1 minute. The {@condition frightened} creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."
			]
		},
		{
			"name": "Channel Divinity: Guided Strike",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Oath Spells",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Conquest Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell armor of Agathys}, {@spell command}"
						],
						[
							"5th",
							"{@spell hold person}, {@spell spiritual weapon}"
						],
						[
							"9th",
							"{@spell bestow curse}, {@spell fear}"
						],
						[
							"13th",
							"{@spell dominate beast}, {@spell stoneskin}"
						],
						[
							"17th",
							"{@spell cloudkill}, {@spell dominate person}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Conquest",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 3,
			"header": 1,
			"entries": [
				"A paladin who takes this oath has the tenets of conquest seared on the upper arm. A hell knight's oath appears in {@language Infernal} runes, a brutal reminder of vows to the Lords of Hell.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Douse the Flame of Hope",
							"entries": [
								"It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies' will to fight is shattered forever. A blade can end a life. Fear can end an empire."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Rule with an Iron Fist",
							"entries": [
								"Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Strength Above All",
							"entries": [
								"You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin."
							]
						}
					]
				}
			]
		},
		{
			"name": "Aura of Conquest",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you constantly emanate a menacing aura while you're not {@condition incapacitated}. The aura includes your space, extends 10 feet from you in every direction, and is blocked by total cover.",
				"If a creature is {@condition frightened} of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there. At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Scornful Rebuke",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 0) if you're not {@condition incapacitated}."
			]
		},
		{
			"name": "Invincible Conqueror",
			"source": "UARevisedClassOptions",
			"page": 3,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You have resistance to all damage.",
						"When you take the {@action Attack} action on your turn, you can make one additional attack as part of that action.",
						"Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the {@dice d20}."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Conquest",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn't enough for these paladins to establish order. They must crush the forces of chaos. Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might.",
				"Some of these paladins go so far as to consort with the powers of the Nine Hells, valuing the rule of law over the balm of mercy. The archdevil Bel, warlord of Avernus, counts many of these paladins\u2014called hell knights\u2014as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. These knights are often most fiercely resisted by other paladins of this oath, who believe that the hell knights have wandered too far into darkness.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Conquest|Paladin||Conquest|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Conquest|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Conquering Presence|Paladin||Conquest|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Guided Strike|Paladin||Conquest|XGE|3"
				}
			]
		},
		{
			"name": "Channel Divinity: Conquering Presence",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to exude a terrifying presence. As an action, you force each creature of your choice that you can see within 30 feet of you to make a Wisdom saving throw. On a failed save, a creature becomes {@condition frightened} of you for 1 minute. The {@condition frightened} creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."
			]
		},
		{
			"name": "Channel Divinity: Guided Strike",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
			]
		},
		{
			"name": "Oath Spells",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Conquest Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell armor of Agathys}, {@spell command}"
						],
						[
							"5th",
							"{@spell hold person}, {@spell spiritual weapon}"
						],
						[
							"9th",
							"{@spell bestow curse}, {@spell fear}"
						],
						[
							"13th",
							"{@spell dominate beast}, {@spell stoneskin}"
						],
						[
							"17th",
							"{@spell cloudkill}, {@spell dominate person}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Conquest",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"A paladin who takes this oath has the tenets of conquest seared on the upper arm.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Douse the Flame of Hope",
							"entries": [
								"It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies' will to fight is shattered forever. A blade can end a life. Fear can end an empire."
							]
						},
						{
							"type": "entries",
							"name": "Rule with an Iron Fist",
							"entries": [
								"Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow."
							]
						},
						{
							"type": "entries",
							"name": "Strength Above All",
							"entries": [
								"You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin."
							]
						}
					]
				}
			]
		},
		{
			"name": "Aura of Conquest",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you constantly emanate a menacing aura while you're not {@condition incapacitated}. The aura extends 10 feet from you in every direction, but not through total cover.",
				"If a creature is {@condition frightened} of you, its speed is reduced to 0 while in the aura, and that creature takes psychic damage equal to half your paladin level if it starts its turn there.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Scornful Rebuke",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, those who dare to strike you are psychically punished for their audacity. Whenever a creature hits you with an attack, that creature takes psychic damage equal to your Charisma modifier (minimum of 1) if you're not {@condition incapacitated}."
			]
		},
		{
			"name": "Invincible Conqueror",
			"source": "XGE",
			"page": 37,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Conquest",
			"subclassSource": "XGE",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute:",
				{
					"type": "list",
					"items": [
						"You have resistance to all damage.",
						"When you take the {@action Attack} action on your turn, you can make one additional attack as part of that action.",
						"Your melee weapon attacks score a critical hit on a roll of 19 or 20 on the {@dice d20}."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Oath of Redemption",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"The Oath of Redemption sets a paladin on a difficult path, one that requires a holy warrior to use violence only as a last resort. Paladins who dedicate themselves to this oath believe that any person can be redeemed and that the path of benevolence and justice is one that anyone can walk. These paladins face evil creatures in the hope of turning their foes to the light, and they slay their enemies only when such a deed will clearly save other lives. Paladins who follow this path are known as redeemers.",
				"While redeemers are idealists, they are no fools. Redeemers know that undead, demons, devils, and other supernatural threats can be inherently evil. Against such foes, paladins who swear this oath bring the full wrath of their weapons and spells to bear. Yet the redeemers still pray that, one day, even creatures of wickedness will invite their own redemption.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tenets of Redemption|Paladin||Redemption|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Oath Spells|Paladin||Redemption|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Emissary of Peace|Paladin||Redemption|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Channel Divinity: Rebuke the Violent|Paladin||Redemption|XGE|3"
				}
			]
		},
		{
			"name": "Channel Divinity: Emissary of Peace",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to augment your presence with divine power. As a bonus action, you grant yourself a +5 bonus to Charisma ({@skill Persuasion}) checks for the next 10 minutes."
			]
		},
		{
			"name": "Channel Divinity: Rebuke the Violent",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"consumes": {
				"name": "Channel Divinity"
			},
			"entries": [
				"You can use your Channel Divinity to rebuke those who use violence. Immediately after an attacker within 30 feet of you deals damage with an attack against a creature other than you, you can use your reaction to force the attacker to make a Wisdom saving throw. On a failed save, the attacker takes radiant damage equal to the damage it just dealt. On a successful save, it takes half as much damage."
			]
		},
		{
			"name": "Oath Spells",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"You gain oath spells at the paladin levels listed.",
				{
					"type": "table",
					"caption": "Oath of Redemption Spells",
					"colLabels": [
						"Paladin Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell sanctuary}, {@spell sleep}"
						],
						[
							"5th",
							"{@spell calm emotions}, {@spell hold person}"
						],
						[
							"9th",
							"{@spell counterspell}, {@spell hypnotic pattern}"
						],
						[
							"13th",
							"{@spell Otiluke's resilient sphere}, {@spell stoneskin}"
						],
						[
							"17th",
							"{@spell hold monster}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Tenets of Redemption",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"The tenets of the Oath of Redemption hold a paladin to a high standard of peace and justice.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Peace",
							"entries": [
								"Violence is a weapon of last resort. Diplomacy and understanding are the paths to long-lasting peace."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Innocence",
							"entries": [
								"All people begin life in an innocent state, and it is their environment or the influence of dark forces that drives them to evil. By setting the proper example, and working to heal the wounds of a deeply flawed world, you can set anyone on a righteous path."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Patience",
							"entries": [
								"Change takes time. Those who have walked the path of the wicked must be given reminders to keep them honest and true. Once you have planted the seed of righteousness in a creature, you must work day after day to allow that seed to survive and flourish."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Wisdom",
							"entries": [
								"Your heart and mind must stay clear, for eventually you will be forced to admit defeat. While every creature can be redeemed, some are so far along the path of evil that you have no choice but to end their lives for the greater good. Any such action must be carefully weighed and the consequences fully understood, but once you have made the decision, follow through with it knowing your path is just."
							]
						}
					]
				}
			]
		},
		{
			"name": "Aura of the Guardian",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 7,
			"header": 2,
			"entries": [
				"Starting at 7th level, you can shield others from harm at the cost of your own health. When a creature within 10 feet of you takes damage, you can use your reaction to magically take that damage, instead of that creature taking it. This feature doesn't transfer any other effects that might accompany the damage, and this damage can't be reduced in any way.",
				"At 18th level, the range of this aura increases to 30 feet."
			]
		},
		{
			"name": "Protective Spirit",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 15,
			"header": 2,
			"entries": [
				"Starting at 15th level, a holy presence mends your wounds in battle. You regain hit points equal to {@dice 1d6} + half your paladin level if you end your turn in combat with fewer than half of your hit points remaining and you aren't {@condition incapacitated}."
			]
		},
		{
			"name": "Emissary of Redemption",
			"source": "XGE",
			"page": 38,
			"className": "Paladin",
			"classSource": "PHB",
			"subclassShortName": "Redemption",
			"subclassSource": "XGE",
			"level": 20,
			"header": 2,
			"entries": [
				"At 20th level, you become an avatar of peace, which gives you two benefits:",
				{
					"type": "list",
					"items": [
						"You have resistance to all damage dealt by other creatures (their attacks, spells, and other effects).",
						"Whenever a creature hits you with an attack, it takes radiant damage equal to half the damage you take from the attack."
					]
				},
				"If you attack a creature, cast a spell on it, or deal damage to it by any means but this feature, neither benefit works against that creature until you finish a long rest."
			]
		}
	]
}


export {monk, paladin}