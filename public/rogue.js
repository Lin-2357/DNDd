const rogue =
{
	"class": [
		{
			"name": "Rogue",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"dex",
				"int"
			],
			"startingProficiencies": {
				"armor": [
					"light"
				],
				"weapons": [
					"simple",
					"{@item hand crossbow|phb|hand crossbows}",
					"{@item longsword|phb|longswords}",
					"{@item rapier|phb|rapiers}",
					"{@item shortsword|phb|shortswords}"
				],
				"tools": [
					"{@item thieves' tools|PHB}"
				],
				"toolProficiencies": [
					{
						"thieves' tools": true
					}
				],
				"skills": [
					{
						"choose": {
							"from": [
								"acrobatics",
								"athletics",
								"deception",
								"insight",
								"intimidation",
								"investigation",
								"perception",
								"performance",
								"persuasion",
								"sleight of hand",
								"stealth"
							],
							"count": 4
						}
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) a {@item rapier|phb} or (b) a {@item shortsword|phb}",
					"(a) a {@item shortbow|phb} and {@item quiver|phb} of {@item arrows (20)|phb|20 arrows} or (b) a {@item shortsword|phb}",
					"(a) a {@item burglar's pack|phb}, (b) a {@item dungeoneer's pack|phb}, or (c) an {@item explorer's pack|phb}",
					"{@item Leather armor|phb}, two {@item dagger|phb|daggers}, and {@item thieves' tools|phb}"
				],
				"goldAlternative": "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"rapier|phb"
						],
						"b": [
							"shortsword|phb"
						]
					},
					{
						"a": [
							"shortbow|phb",
							"arrows (20)|phb"
						],
						"b": [
							"shortsword|phb"
						]
					},
					{
						"a": [
							"burglar's pack|phb"
						],
						"b": [
							"dungeoneer's pack|phb"
						],
						"c": [
							"explorer's pack|phb"
						]
					},
					{
						"_": [
							"Leather armor|phb",
							{
								"item": "dagger|phb",
								"quantity": 2
							},
							"thieves' tools|phb"
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"dex": 13
				},
				"proficienciesGained": {
					"armor": [
						"light"
					],
					"skills": [
						{
							"choose": {
								"from": [
									"acrobatics",
									"athletics",
									"deception",
									"insight",
									"intimidation",
									"investigation",
									"perception",
									"performance",
									"persuasion",
									"sleight of hand",
									"stealth"
								],
								"count": 1
							}
						}
					],
					"tools": [
						"{@item thieves' tools|PHB}"
					],
					"toolProficiencies": [
						{
							"thieves' tools": true
						}
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"Sneak Attack"
					],
					"rows": [
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
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 2,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 2,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 3,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 3,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 4,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 4,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 5,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 5,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 6,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 6,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 7,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 7,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 8,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 8,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 9,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 9,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 10,
										"faces": 6
									}
								],
								"rollable": true
							}
						],
						[
							{
								"type": "dice",
								"toRoll": [
									{
										"number": 10,
										"faces": 6
									}
								],
								"rollable": true
							}
						]
					]
				}
			],
			"classFeatures": [
				"Expertise|Rogue||1",
				"Sneak Attack|Rogue||1",
				"Thieves' Cant|Rogue||1",
				"Cunning Action|Rogue||2",
				"Cunning Action: Aim|Rogue||2|UAClassFeatureVariants",
				{
					"classFeature": "Roguish Archetype|Rogue||3",
					"gainSubclassFeature": true
				},
				"Steady Aim|Rogue||3|TCE",
				"Ability Score Improvement|Rogue||4",
				"Proficiency Versatility|Rogue||4|UAClassFeatureVariants",
				"Uncanny Dodge|Rogue||5",
				"Expertise|Rogue||6",
				"Evasion|Rogue||7",
				"Ability Score Improvement|Rogue||8",
				"Proficiency Versatility|Rogue||8|UAClassFeatureVariants",
				{
					"classFeature": "Roguish Archetype feature|Rogue||9",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Rogue||10",
				"Proficiency Versatility|Rogue||10|UAClassFeatureVariants",
				"Reliable Talent|Rogue||11",
				"Ability Score Improvement|Rogue||12",
				"Proficiency Versatility|Rogue||12|UAClassFeatureVariants",
				{
					"classFeature": "Roguish Archetype feature|Rogue||13",
					"gainSubclassFeature": true
				},
				"Blindsense|Rogue||14",
				"Slippery Mind|Rogue||15",
				"Ability Score Improvement|Rogue||16",
				"Proficiency Versatility|Rogue||16|UAClassFeatureVariants",
				{
					"classFeature": "Roguish Archetype feature|Rogue||17",
					"gainSubclassFeature": true
				},
				"Elusive|Rogue||18",
				"Ability Score Improvement|Rogue||19",
				"Proficiency Versatility|Rogue||19|UAClassFeatureVariants",
				"Stroke of Luck|Rogue||20"
			],
			"subclassTitle": "Roguish Archetype",
			"fluff": [
				{
					"name": "Rogue",
					"type": "section",
					"entries": [
						"Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she disappears into the shadows as her fighter friend moves forward to kick the door open.",
						"A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When their target\u2014a notorious slaver\u2014passes the alleyway, the accomplice cries out, the slaver comes to investigate, and the assassin's blade cuts his throat before he can make a sound.",
						"Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard's belt. In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to make their escape.",
						"Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
						{
							"type": "entries",
							"name": "Skill and Precision",
							"entries": [
								"Rogues devote as much effort to mastering the use of a variety of skills as they do to perfecting their combat abilities, giving them a broad expertise that few other characters can match. Many rogues focus on stealth and deception, while others refine the skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.",
								"When it comes to combat, rogues prioritize cunning over brute strength. A rogue would rather make one precise strike, placing it exactly where the attack will hurt the target most, than wear an opponent down with a barrage of attacks. Rogues have an almost supernatural knack for avoiding danger, and a few learn magical tricks to supplement their other abilities."
							]
						},
						{
							"type": "entries",
							"name": "A Shady Living",
							"entries": [
								"Every town and city has its share of rogues. Most of them live up to the worst stereotypes of the class, making a living as burglars, assassins, cutpurses, and con artists. Often, these scoundrels are organized into thieves' guilds or crime families. Plenty of rogues operate independently, but even they sometimes recruit apprentices to help them in their scams and heists. A few rogues make an honest living as locksmiths, investigators, or exterminators, which can be a dangerous job in a world where dire rats\u2014and wererats\u2014haunt the sewers.",
								"As adventurers, rogues fall on both sides of the law. Some are hardened criminals who decide to seek their fortune in treasure hoards, while others take up a life of adventure to escape from the law. Some have learned and perfected their skills with the explicit purpose of infiltrating ancient ruins and hidden crypts in search of treasure."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Rogue",
							"entries": [
								"As you create your rogue character, consider the character's relationship to the law. Do you have a criminal past\u2014or present? Are you on the run from the law or from an angry thieves' guild master? Or did you leave your guild in search of bigger risks and bigger rewards? Is it greed that drives you in your adventures, or some other desire or ideal?",
								"What was the trigger that led you away from your previous life? Did a great con or heist gone terribly wrong cause you to reevaluate your career? Maybe you were lucky and a successful robbery gave you the coin you needed to escape the squalor of your life. Did wanderlust finally call you away from your home? Perhaps you suddenly found yourself cut off from your family or your mentor, and you had to find a new means of support. Or maybe you made a new friend\u2014another member of your adventuring party\u2014who showed you new possibilities for earning a living and employing your particular talents.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a rogue quickly by following these suggestions. First, Dexterity should be your highest ability score. Make Intelligence your next-highest if you want to excel at Investigation or plan to take up the Arcane Trickster archetype. Choose Charisma instead if you plan to emphasize deception and social interaction. Second, choose the {@background charlatan} background."
									]
								}
							]
						}
					],
					"page": 94,
					"source": "PHB"
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"People forget that the entire point of venturing down into a dusty tomb is to bring back the prizes hidden away there. Fighting is for fools. Dead men can't spend their fortunes."
							],
							"by": "Barnabas Bladecutter"
						},
						"When brute force won't get the job done, or when magic isn't available or appropriate, the rogue rises to the fore. With skills tied to stealth, subterfuge, and trickery, rogues can get into and out of trouble in ways that few other characters can emulate.",
						"Some rogues who turn to adventuring are former criminals who have decided that dodging monsters is preferable to remaining one step ahead of the law. Others are professional killers in search of a profitable application of their talents between contracts. Some simply love the thrill of overcoming any challenge that stands in their way.",
						"On adventures, a rogue is likely to mix an outwardly cautious approach\u2014few rogues enjoy combat\u2014with a ravenous hunger for loot. Most of the time, in a rogue's mind, taking up arms against a creature is not about killing the creature but about becoming the new owner of its treasure.",
						"The following sections explore certain facets of what it means to be a rogue, which you can use to add depth to your character.",
						{
							"type": "entries",
							"name": "Guilty Pleasures",
							"entries": [
								"Most of what rogues do revolves around obtaining treasure and preventing others from doing the same. Little gets in the way of attaining those goals, except that many rogues are enticed away from that path by a compulsion that clouds their thinking\u2014an irresistible need that must be satisfied, even if doing so is risky.",
								"A rogue's guilty pleasure could be the acquisition of a physical item, something to be experienced, or a way of conducting oneself at certain times. One rogue might not be able to pass up any loot made of silver, for instance, even if said loot is hanging around the neck of a castle guard. Another one can't go through a day in the city without lifting a purse or two, just to keep in practice.",
								"What's the one form of temptation that your rogue character can't resist when the opportunity presents itself, even if giving into it might mean trouble for you and your companions?",
								{
									"type": "table",
									"caption": "Guilty Pleasures",
									"colLabels": [
										"{@dice d6}",
										"Pleasure"
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
											"Large gems"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"A smile from a pretty face"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A new ring for your finger"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"The chance to deflate someone's ego"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"The finest food and drink"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Adding to your collection of exotic coins"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Adversaries",
							"entries": [
								"Naturally, those who enforce the law are bound to come up against those who break it, and it's the rare rogue who isn't featured on at least one wanted poster. Beyond that, it's in the nature of their profession that rogues often come into contact with criminal elements, whether out of choice or necessity. Some of those people can be adversaries too, and they're likely to be harder to deal with than the average member of the city watch.",
								"If your character's backstory doesn't already include a personage of this sort, you could work with your DM to come up with a reason why an adversary has appeared in your life. Perhaps you've been the subject of scrutiny for a while from someone who wants to use you for nefarious purposes and has just now become known to you. Such an incident could be the basis for an upcoming adventure.",
								"Does your rogue character have an adversary who also happens to be a criminal? If so, how is this relationship affecting your life?",
								{
									"type": "table",
									"caption": "Adversaries",
									"colLabels": [
										"{@dice d6}",
										"Adversary"
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
											"The pirate captain on whose ship you once served; what you call moving on, the captain calls mutiny"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"A master spy to whom you unwittingly fed bad information, which led to the assassination of the wrong target"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"The master of the local thieves' guild, who wants you to join the organization or leave town"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"An art collector who uses illegal means to acquire masterpieces"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A fence who uses you as a messenger to set up illicit meetings"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"The proprietor of an illegal pit fighting arena where you once took bets"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Benefactor",
							"entries": [
								"Few rogues make it far in life before needing someone's help, which means thereafter owing that benefactor a significant debt.",
								"If your character's backstory doesn't already include a personage of this sort, you could work with your DM to determine why a benefactor has appeared in your life. Perhaps you benefited from something your benefactor did for you without realizing who was responsible, and that person has now just become known to you. Who helped you in the past, whether or not you knew it at the time, and what do you owe that person as recompense?",
								{
									"type": "table",
									"caption": "Benefactors",
									"colLabels": [
										"{@dice d6}",
										"Benefactor"
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
											"A smuggler kept you from getting caught but lost a valuable shipment in doing so. Now you owe that person an equally valuable favor."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"The Beggar King has hidden you from your pursuers many times, in return for future considerations."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A magistrate once kept you out of jail in return for information on a powerful crime lord."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your parents used their savings to bail you out of trouble in your younger days and are now destitute."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A dragon didn't eat you when it had a chance, and in return you promised to set aside choice pieces of treasure for it."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"A druid once helped you out of a tight spot; now any random animal you see could be that benefactor, perhaps come to claim a return favor."
										]
									]
								}
							]
						}
					],
					"page": 44,
					"source": "XGE"
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Arcane Trickster",
			"shortName": "Arcane Trickster",
			"source": "PHB",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 97,
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
					"known": {
						"3": [
							"mage hand#c"
						]
					},
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
							"name": "Arcane Trickster",
							"source": "PHB"
						}
					],
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|subclass=Rogue: Arcane Trickster}",
						"{@filter Spells Known|spells|subclass=Rogue: Arcane Trickster}"
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
							3,
							3
						],
						[
							3,
							4
						],
						[
							3,
							4
						],
						[
							3,
							4
						],
						[
							3,
							5
						],
						[
							3,
							6
						],
						[
							3,
							6
						],
						[
							4,
							7
						],
						[
							4,
							8
						],
						[
							4,
							8
						],
						[
							4,
							9
						],
						[
							4,
							10
						],
						[
							4,
							10
						],
						[
							4,
							11
						],
						[
							4,
							11
						],
						[
							4,
							11
						],
						[
							4,
							12
						],
						[
							4,
							13
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"subclasses": [
						{
							"name": "Arcane Trickster",
							"source": "PHB"
						}
					],
					"colLabels": [
						"{@filter 1st|spells|level=1|subclass=Rogue: Arcane Trickster}",
						"{@filter 2nd|spells|level=2|subclass=Rogue: Arcane Trickster}",
						"{@filter 3rd|spells|level=3|subclass=Rogue: Arcane Trickster}",
						"{@filter 4th|spells|level=4|subclass=Rogue: Arcane Trickster}"
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
				"Arcane Trickster|Rogue||Arcane Trickster||3",
				"Magical Ambush|Rogue||Arcane Trickster||9",
				"Versatile Trickster|Rogue||Arcane Trickster||13",
				"Spell Thief|Rogue||Arcane Trickster||17"
			]
		},
		{
			"name": "Assassin",
			"shortName": "Assassin",
			"source": "PHB",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 97,
			"subclassFeatures": [
				"Assassin|Rogue||Assassin||3",
				"Infiltration Expertise|Rogue||Assassin||9",
				"Impostor|Rogue||Assassin||13",
				"Death Strike|Rogue||Assassin||17"
			]
		},
		{
			"name": "Thief",
			"shortName": "Thief",
			"source": "PHB",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"subclassFeatures": [
				"Thief|Rogue||Thief||3",
				"Supreme Sneak|Rogue||Thief||9",
				"Use Magic Device|Rogue||Thief||13",
				"Thief's Reflexes|Rogue||Thief||17"
			]
		},
		{
			"name": "Inquisitive (UA)",
			"shortName": "Inquisitive (UA)",
			"source": "UAGothicHeroes",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Inquisitive|Rogue||Inquisitive (UA)|UAGothicHeroes|3",
				"Steady Eye|Rogue||Inquisitive (UA)|UAGothicHeroes|9",
				"Unerring Eye|Rogue||Inquisitive (UA)|UAGothicHeroes|13",
				"Eye for Weakness|Rogue||Inquisitive (UA)|UAGothicHeroes|17"
			]
		},
		{
			"name": "Scout (UA)",
			"shortName": "Scout (UA)",
			"source": "UARangerAndRogue",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Scout|Rogue||Scout (UA)|UARangerAndRogue|3",
				"Superior Mobility|Rogue||Scout (UA)|UARangerAndRogue|9",
				"Ambush Master|Rogue||Scout (UA)|UARangerAndRogue|13",
				"Sudden Strike|Rogue||Scout (UA)|UARangerAndRogue|17"
			]
		},
		{
			"name": "Inquisitive",
			"shortName": "Inquisitive",
			"source": "XGE",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 45,
			"subclassFeatures": [
				"Inquisitive|Rogue||Inquisitive|XGE|3",
				"Steady Eye|Rogue||Inquisitive|XGE|9",
				"Unerring Eye|Rogue||Inquisitive|XGE|13",
				"Eye for Weakness|Rogue||Inquisitive|XGE|17"
			]
		},
		{
			"name": "Mastermind",
			"shortName": "Mastermind",
			"source": "XGE",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 46,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 135
				}
			],
			"subclassFeatures": [
				"Mastermind|Rogue||Mastermind|XGE|3",
				"Insightful Manipulator|Rogue||Mastermind|XGE|9",
				"Misdirection|Rogue||Mastermind|XGE|13",
				"Soul of Deceit|Rogue||Mastermind|XGE|17"
			]
		},
		{
			"name": "Scout",
			"shortName": "Scout",
			"source": "XGE",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 47,
			"subclassFeatures": [
				"Scout|Rogue||Scout|XGE|3",
				"Superior Mobility|Rogue||Scout|XGE|9",
				"Ambush Master|Rogue||Scout|XGE|13",
				"Sudden Strike|Rogue||Scout|XGE|17"
			]
		},
		{
			"name": "Swashbuckler",
			"shortName": "Swashbuckler",
			"source": "XGE",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 48,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 135
				}
			],
			"subclassFeatures": [
				"Swashbuckler|Rogue||Swashbuckler|XGE|3",
				"Panache|Rogue||Swashbuckler|XGE|9",
				"Elegant Maneuver|Rogue||Swashbuckler|XGE|13",
				"Master Duelist|Rogue||Swashbuckler|XGE|17"
			]
		},
		{
			"name": "The Revived (UA)",
			"shortName": "Revived (UA)",
			"source": "UAFighterRangerRogue",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"subclassFeatures": [
				"The Revived|Rogue||Revived (UA)|UAFighterRangerRogue|3",
				"Connect with the Dead|Rogue||Revived (UA)|UAFighterRangerRogue|9",
				"Audience with Death|Rogue||Revived (UA)|UAFighterRangerRogue|13",
				"Ethereal Jaunt|Rogue||Revived (UA)|UAFighterRangerRogue|17"
			]
		},
		{
			"name": "Soulknife (UA)",
			"shortName": "Soulknife (UA)",
			"source": "UAFighterRogueWizard",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Soulknife|Rogue||Soulknife (UA)|UAFighterRogueWizard|3",
				"Terrifying Blade|Rogue||Soulknife (UA)|UAFighterRogueWizard|9",
				"Psychic Veil|Rogue||Soulknife (UA)|UAFighterRogueWizard|13",
				"Rend Mind|Rogue||Soulknife (UA)|UAFighterRogueWizard|17"
			]
		},
		{
			"name": "Soulknife (UA)",
			"shortName": "Soulknife (UA)",
			"source": "UA2020PsionicOptionsRevisited",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"subclassFeatures": [
				"Soulknife|Rogue||Soulknife (UA)|UA2020PsionicOptionsRevisited|3",
				"Soul Blades|Rogue||Soulknife (UA)|UA2020PsionicOptionsRevisited|9",
				"Psionic Veil|Rogue||Soulknife (UA)|UA2020PsionicOptionsRevisited|13",
				"Rend Mind|Rogue||Soulknife (UA)|UA2020PsionicOptionsRevisited|17"
			]
		},
		{
			"name": "Phantom (UA)",
			"shortName": "Phantom (UA)",
			"source": "UA2020SubclassesRevisited",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Phantom|Rogue||Phantom (UA)|UA2020SubclassesRevisited|3",
				"Tokens of the Departed|Rogue||Phantom (UA)|UA2020SubclassesRevisited|9",
				"Ghost Walk|Rogue||Phantom (UA)|UA2020SubclassesRevisited|13",
				"Death Knell|Rogue||Phantom (UA)|UA2020SubclassesRevisited|17"
			]
		},
		{
			"name": "Phantom",
			"shortName": "Phantom",
			"source": "TCE",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 62,
			"subclassFeatures": [
				"Phantom|Rogue||Phantom|TCE|3",
				"Tokens of the Departed|Rogue||Phantom|TCE|9",
				"Ghost Walk|Rogue||Phantom|TCE|13",
				"Death's Friend|Rogue||Phantom|TCE|17"
			]
		},
		{
			"name": "Soulknife",
			"shortName": "Soulknife",
			"source": "TCE",
			"className": "Rogue",
			"classSource": "PHB",
			"page": 63,
			"subclassFeatures": [
				"Soulknife|Rogue||Soulknife|TCE|3",
				"Soul Blades|Rogue||Soulknife|TCE|9",
				"Psychic Veil|Rogue||Soulknife|TCE|13",
				"Rend Mind|Rogue||Soulknife|TCE|17"
			]
		}
	],
	"classFeature": [
		{
			"name": "Expertise",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with {@item thieves' tools|phb}. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
				"At 6th level, you can choose two more of your proficiencies (in skills or with {@item thieves' tools|phb}) to gain this benefit."
			]
		},
		{
			"name": "Sneak Attack",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra {@damage 1d6} damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
				"You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't {@condition incapacitated}, and you don't have disadvantage on the attack roll.",
				"The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
			]
		},
		{
			"name": "Thieves' Cant",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
				"In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
			]
		},
		{
			"name": "Cunning Action",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the {@action Dash}, {@action Disengage}, or {@action Hide} action."
			]
		},
		{
			"name": "Cunning Action: Aim",
			"source": "UAClassFeatureVariants",
			"page": 9,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level rogue feature (enhances Cunning Action)}",
				"You gain an additional way to use your Cunning Action: carefully aiming your next attack. As a bonus action, you give yourself advantage on your next attack roll on the current turn. You can use this bonus action only if you haven't moved during this turn, and after you use the bonus action, your speed is 0 until the end of the current turn."
			]
		},
		{
			"name": "Roguish Archetype",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities from the list of available archetypes. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
			]
		},
		{
			"name": "Steady Aim",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level rogue {@variantrule optional class features|tce|optional feature}}",
				"As a bonus action, you give yourself advantage on your next attack roll on the current turn. You can use this bonus action only if you haven't moved during this turn, and after you use the bonus action, your speed is 0 until the end of the current turn."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
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
			"className": "Rogue",
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
			"name": "Uncanny Dodge",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
			]
		},
		{
			"name": "Expertise",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you can choose two more of your proficiencies (in skills or with {@item thieves' tools|phb}) to gain the benefit of Expertise."
			]
		},
		{
			"name": "Evasion",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 7,
			"entries": [
				"Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an {@spell ice storm} spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
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
			"className": "Rogue",
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
			"name": "Roguish Archetype feature",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 9,
			"entries": [
				"At 9th level, you gain a feature granted by your Roguish Archetype."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"When you reach 10th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 10,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 10th-level feature (enhances Ability Score Improvement)}",
				"When you gain the Ability Score Improvement feature from your class, you can also replace one of your skill proficiencies with a skill proficiency offered by your class at 1st level (the proficiency you replace needn't be from the class).",
				"This change represents one of your skills atrophying as you focus on a different skill."
			]
		},
		{
			"name": "Reliable Talent",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a {@dice d20} roll of 9 or lower as a 10."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
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
			"className": "Rogue",
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
			"name": "Roguish Archetype feature",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 13,
			"entries": [
				"At 13th level, you gain a feature granted by your Roguish Archetype."
			]
		},
		{
			"name": "Blindsense",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or {@condition invisible} creature within 10 feet of you."
			]
		},
		{
			"name": "Slippery Mind",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
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
			"className": "Rogue",
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
			"name": "Roguish Archetype feature",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you gain a feature granted by your Roguish Archetype."
			]
		},
		{
			"name": "Elusive",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't {@condition incapacitated}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
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
			"className": "Rogue",
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
			"name": "Stroke of Luck",
			"source": "PHB",
			"page": 94,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the {@dice d20} roll as a 20.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Arcane Trickster",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Arcane Trickster",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spellcasting|Rogue||Arcane Trickster||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Mage Hand Legerdemain|Rogue||Arcane Trickster||3"
				}
			]
		},
		{
			"name": "Mage Hand Legerdemain",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Arcane Trickster",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, when you cast {@spell mage hand}, you can make the spectral hand {@condition invisible}, and you can perform the following additional tasks with it:",
				{
					"type": "list",
					"items": [
						"You can stow one object the hand is holding in a container worn or carried by another creature.",
						"You can retrieve an object in a container worn or carried by another creature.",
						"You can use {@item thieves' tools|phb} to pick locks and disarm traps at range."
					]
				},
				"You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity ({@skill Sleight of Hand}) check contested by the creature's Wisdom ({@skill Perception}) check.",
				"In addition, you can use the bonus action granted by your Cunning Action to control the hand."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Arcane Trickster",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you reach 3rd level, you gain the ability to cast spells. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter wizard spell list|spells|class=wizard}.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Cantrips",
							"entries": [
								"You learn three cantrips: {@spell mage hand} and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Spell Slots",
							"entries": [
								"The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your {@filter wizard spells|spells|class=wizard} of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
								"For example, if you know the 1st-level spell {@spell charm person} and have a 1st-level and a 2nd-level spell slot available, you can cast {@spell charm person} using either slot."
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
								"You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.",
								"The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.",
								"The spells you learn at 8th, 14th, and 20th level can come from any school of magic.",
								"Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic."
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
								"Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
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
			"name": "Magical Ambush",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Arcane Trickster",
			"subclassSource": "PHB",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn."
			]
		},
		{
			"name": "Versatile Trickster",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Arcane Trickster",
			"subclassSource": "PHB",
			"level": 13,
			"header": 2,
			"entries": [
				"At 13th level, you gain the ability to distract targets with your {@spell mage hand}. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn."
			]
		},
		{
			"name": "Spell Thief",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Arcane Trickster",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.",
				"Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Assassin",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Assassin",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"You focus your training on the grim art of death. Those who adhere to this archetype are diverse\u2014hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.",
				"Your archetype grants you features at 3rd level and then again at 9th, 13th, and 17th level.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Assassinate|Rogue||Assassin||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Rogue||Assassin||3"
				}
			]
		},
		{
			"name": "Assassinate",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Assassin",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is {@quickref Surprise|PHB|3|0|surprised} is a critical hit."
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Assassin",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency with the {@item disguise kit|phb} and the {@item poisoner's kit|phb}."
			]
		},
		{
			"name": "Infiltration Expertise",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Assassin",
			"subclassSource": "PHB",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official-looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.",
				"Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to."
			]
		},
		{
			"name": "Impostor",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Assassin",
			"subclassSource": "PHB",
			"level": 13,
			"header": 2,
			"entries": [
				"At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerism.",
				"Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma ({@skill Deception}) check you make to avoid detection."
			]
		},
		{
			"name": "Death Strike",
			"source": "PHB",
			"page": 97,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Assassin",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is {@quickref Surprise|PHB|3|0|surprised}, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature."
			]
		},
		{
			"name": "Thief",
			"source": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Thief",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fast Hands|Rogue||Thief||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Second-Story Work|Rogue||Thief||3"
				}
			]
		},
		{
			"name": "Fast Hands",
			"source": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Thief",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity ({@skill Sleight of Hand}) check, use your {@item thieves' tools|phb} to disarm a trap or open a lock, or take the {@action Use an Object} action."
			]
		},
		{
			"name": "Second-Story Work",
			"source": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Thief",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.",
				"In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
			]
		},
		{
			"name": "Supreme Sneak",
			"source": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Thief",
			"subclassSource": "PHB",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, you have advantage on a Dexterity ({@skill Stealth}) check if you move no more than half your speed on the same turn."
			]
		},
		{
			"name": "Use Magic Device",
			"source": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Thief",
			"subclassSource": "PHB",
			"level": 13,
			"header": 2,
			"entries": [
				"By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
			]
		},
		{
			"name": "Thief's Reflexes",
			"source": "PHB",
			"page": 97,
			"srd": true,
			"basicRules": true,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Thief",
			"subclassSource": "PHB",
			"level": 17,
			"header": 2,
			"entries": [
				"When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are {@quickref Surprise|PHB|3|0|surprised}."
			]
		},
		{
			"name": "Phantom",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Many rogues walk a fine line between life and death, risking their own lives and taking the lives of others. While adventuring on that line, some rogues discover a mystical connection to death itself. These rogues take knowledge from the dead and become immersed in negative energy, eventually becoming like ghosts. Thieves' guilds value them as highly effective information gatherers and spies.",
				"Many shadar-kai of the Shadowfell are masters of these macabre techniques, and some are willing to teach this path. In places like Thay in the Forgotten Realms and Karrnath in Eberron, where many necromancers practice their craft, a Phantom can become a wizard's confidant and right hand. In temples of gods of death, the Phantom might work as an agent to track down those who try to cheat death and to recover knowledge that might otherwise be lost to the grave.",
				"How did you discover this grim power? Did you sleep in a graveyard and awaken to your new abilities? Or did you cultivate them in a temple or thieves' guild dedicated to a deity of death?",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Whispers of the Dead|Rogue||Phantom|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wails from the Grave|Rogue||Phantom|TCE|3"
				}
			]
		},
		{
			"name": "Wails from the Grave",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Phantom feature}",
				"As you nudge someone closer to the grave, you can channel the power of death to harm someone else as well. Immediately after you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes necrotic damage equal to the roll's total, as wails of the dead sound around them for a moment.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Whispers of the Dead",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Phantom feature}",
				"Echoes of those who have died cling to you. Whenever you finish a short or long rest, you can choose one skill or tool proficiency that you lack and gain it, as a ghostly presence shares its knowledge with you. You lose this proficiency when you use this feature to choose a different proficiency that you lack."
			]
		},
		{
			"name": "Tokens of the Departed",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom",
			"subclassSource": "TCE",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Phantom feature}",
				"When a life ends in your presence, you're able to snatch a token from the departing soul, a sliver of its life essence that takes physical form: as a reaction when a creature you can see dies within 30 feet of you, you can open your free hand and cause a Tiny trinket to appear there, a soul trinket. The DM determines the trinket's form or has you roll on the {@item Trinket|phb|Trinkets} table in the {@i Player's Handbook} to generate it. You can have a maximum number of soul trinkets equal to your proficiency bonus, and you can't create one while at your maximum.",
				"You can use soul trinkets in the following ways:",
				{
					"type": "list",
					"items": [
						"While a soul trinket is on your person, you have advantage on death saving throws and Constitution saving throws, for your vitality is enhanced by the life essence within the object.",
						"When you deal Sneak Attack damage on your turn, you can destroy one of your soul trinkets that's on your person and then immediately use Wails from the Grave, without expending a use of that feature.",
						"As an action, you can destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free. The spirit knows only what it knew in life, as determined by the DM."
					]
				}
			]
		},
		{
			"name": "Ghost Walk",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom",
			"subclassSource": "TCE",
			"level": 13,
			"header": 2,
			"entries": [
				"{@i 13th-level Phantom feature}",
				"You can phase partially into the realm of the dead, becoming like a ghost. As a bonus action, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were {@quickref difficult terrain||3}, but you take {@damage 1d10} force damage if you end your turn inside a creature or an object.",
				"You stay in this form for 10 minutes or until you end it as a bonus action. To use this feature again, you must finish a long rest or destroy one of your soul trinkets as part of the bonus action you use to activate Ghost Walk."
			]
		},
		{
			"name": "Death's Friend",
			"source": "TCE",
			"page": 62,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Phantom feature}",
				"Your association with death has become so close that you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"When you use your Wails from the Grave, you can deal the necrotic damage to both the first and the second creature.",
						"At the end of a long rest, a soul trinket appears in your hand if you don't have any soul trinkets, as the spirits of the dead are drawn to you."
					]
				}
			]
		},
		{
			"name": "Soulknife",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Most assassins strike with physical weapons, and many burglars and spies use {@item thieves' tools|PHB} to infiltrate secure locations. In contrast, a Soulknife strikes and infiltrates with the mind, cutting through barriers both physical and psychic. These rogues discover psionic power within themselves and channel it to do their roguish work. They find easy employment as members of thieves' guilds, though they are often mistrusted by rogues who are leery of anyone using strange mind powers to conduct their business. Most governments would also be happy to employ a Soulknife as a spy.",
				"Amid the trees of ancient forests on the Material Plane and in the Feywild, some wood elves walk the path of the Soulknife, serving as silent, lethal guardians of their woods. In the endless war among the gith, a githzerai is encouraged to become a Soulknife when stealth is required against the githyanki foe.",
				"As a Soulknife, your psionic abilities might have haunted you since you were a child, only revealing their full potential as you experienced the stress of adventure. Or you might have sought out a reclusive order of psychic adepts and spent years learning how to manifest your power.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Power|Rogue||Soulknife|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psychic Blades|Rogue||Soulknife|TCE|3"
				}
			]
		},
		{
			"name": "Psionic Power",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Soulknife feature}",
				"You harbor a wellspring of psionic energy within yourself. This energy is represented by your Psionic Energy dice, which are each a {@dice d6}. You have a number of these dice equal to twice your proficiency bonus, and they fuel various psionic powers you have, which are detailed below.",
				"Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.",
				"When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level ({@dice d8}), 11th level ({@dice d10}), and 17th level ({@dice d12}).",
				"The powers below use your Psionic Energy dice.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Psi-Bolstered Knack|Rogue|TCE|Soulknife|TCE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Psychic Whispers|Rogue|TCE|Soulknife|TCE|3"
						}
					]
				}
			]
		},
		{
			"name": "Psychic Blades",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Soulknife feature}",
				"You can manifest your psionic power as shimmering blades of psychic energy. Whenever you take the {@action Attack} action, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to {@dice 1d6} plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.",
				"After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is {@dice 1d4}, instead of {@dice 1d6}."
			]
		},
		{
			"name": "Soul Blades",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Soulknife feature}",
				"Your Psychic Blades are now an expression of your psi-suffused soul, giving you these powers that use your Psionic Energy dice:",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Homing Strikes|Rogue|TCE|Soulknife|TCE|9"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Psychic Teleportation|Rogue|TCE|Soulknife|TCE|9"
						}
					]
				}
			]
		},
		{
			"name": "Psychic Veil",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 13,
			"header": 2,
			"entries": [
				"{@i 13th-level Soulknife feature}",
				"You can weave a veil of psychic static to mask yourself. As an action, you can magically become {@condition invisible}, along with anything you are wearing or carrying, for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature or you force a creature to make a saving throw.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend a Psionic Energy die to use this feature again."
			]
		},
		{
			"name": "Rend Mind",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Soulknife feature}",
				"You can sweep your Psychic Blades directly through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). If the save fails, the target is {@condition stunned} for 1 minute. The {@condition stunned} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you expend three Psionic Energy dice to use it again."
			]
		},
		{
			"name": "Soulknife",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 3,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"entries": [
				"Most assassins strike with physical weapons, and many burglars and spies use {@item thieves' tools|PHB} to infiltrate secure locations, whereas a Soulknife strikes and infiltrates with the mind, cutting through barriers both physical and psychic. These rogues discover psionic power within themselves and channel it to do their roguish work. They find easy employment as members of thieves' guilds, though they are often mistrusted by rogues who are leery of anyone using strange mind powers to conduct their business, and most governments would be happy to employ a Soulknife as a spy.",
				"Amid the trees of ancient forests on the Material Plane and in the Feywild, some wood elves walk the path of the Soulknife, serving as silent, lethal guardians of their woods. In the endless war among the gith, a githzerai is encouraged to become a Soulknife when stealth is required against the githyanki foe, and in the world of Athas, a Sorcerer-King often turns to a Soulknife to eliminate an enemy, just as an insurgent Soulknife seeks to undermine that Sorcerer-King's rule.",
				"As a Soulknife, your psionic abilities might have haunted you since you were a child, only revealing their potential as you experienced the stress of adventure. Or you might have sought out a reclusive order of psionic adepts and spent years learning how to manifest your power.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Talent|Rogue||Soulknife (UA)|UA2020PsionicOptionsRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psychic Blades|Rogue||Soulknife (UA)|UA2020PsionicOptionsRevisited|3"
				}
			]
		},
		{
			"name": "Psionic Talent",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 3,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Soulknife feature}",
				"You harbor a wellspring of psionic power within yourself, an energy that ebbs and flows as you channel it in various ways. This power is represented by your Psionic Talent die, the starting size of which is a {@dice d6}.",
				{
					"type": "entries",
					"name": "Psionic Talent Options",
					"entries": [
						"You can use your Psionic Talent die in the following ways:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Psi-Bolstered Knack",
									"entry": "When your non-psionic training fails you, you can tap into your psionic power to help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll your Psionic Talent die and add the number rolled to the check, potentially turning failure into success."
								},
								{
									"type": "item",
									"name": "Psychic Whispers",
									"entry": "You can use your psychic abilities to establish telepathic communication between yourself and others\u2014perfect for quiet infiltration. As an action, you give yourself and at least one other creature the ability to speak telepathically with each other. When you do so, roll your Psionic Talent die, and choose creatures you can see, up to a number of creatures equal to the number rolled. For 1 hour, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other."
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Changing the Die's Size",
					"entries": [
						"If you roll the highest number on your Psionic Talent die, it decreases by one die size after the roll. This represents you burning through your psionic energy. For example, if the die is a {@dice d6} and you roll a 6, it becomes a {@dice d4}. If it's a {@dice d4} and you roll a 4, it becomes unusable until you finish a long rest.",
						"Conversely, if you roll a 1 on your Psionic Talent die, it increases by one die size after the roll, up to its starting size. This represents you conserving psionic energy for later use. For example, if you roll a 1 on a {@dice d4}, the die then becomes a {@dice d6}.",
						"Whenever you finish a long rest, your Psionic Talent die resets to its starting size. When you reach certain levels in this class, the starting size of your Psionic Talent die increases: at 5th level ({@dice d8}), 11th level ({@dice d10}), and 17th level ({@dice d12})."
					]
				},
				{
					"type": "entries",
					"name": "Psi Replenishment",
					"entries": [
						"As a bonus action, you can calm your mind for a moment and restore your Psionic Talent die to its starting size. You then can't use Psi Replenishment again until you finish a long rest."
					]
				}
			]
		},
		{
			"name": "Psychic Blades",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 3,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Soulknife feature}",
				"You can manifest your psionic power as shimmering blades of psychic energy. When you are about to make a melee or ranged weapon attack against a creature, you can manifest a psychic blade from your free hand and make the attack with that blade. This magic blade is a simple melee weapon with the finesse and thrown properties. It has a normal range of 60 feet and no long range, and on a hit, it deals psychic damage equal to {@dice 1d6} plus the ability modifier you used for the attack roll. The blade vanishes immediately after it hits or misses its target, and it leaves no mark on its target if it deals damage.",
				"After you attack with the blade, you can make a melee or ranged weapon attack with a second psychic blade as a bonus action on the same turn, provided your other hand is free to create it. The damage die of this bonus attack is {@dice 1d4}, instead of {@dice 1d6}."
			]
		},
		{
			"name": "Soul Blades",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 3,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Soulknife feature}",
				"Your Psychic Blades are now an expression of your psi-suffused soul, giving you finer control over them in the following ways:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Homing Strikes",
							"entry": "If you make an attack roll with your Psychic Blades and miss the target, you can roll your Psionic Talent die and add the number rolled to the attack roll. If this causes the attack to hit, your Psionic Talent die decreases by one die size, regardless of the number rolled."
						},
						{
							"type": "item",
							"name": "Psychic Teleportation",
							"entry": "If your Psionic Talent die is available, you can hurl your Psychic Blades to magically transport yourself to another location. As a bonus action, you manifest one of your Psychic Blades and throw it at an unoccupied space you can see, up to a number of feet away equal to 5 times the highest number on your Psionic Talent die. You then teleport to that space, the blade vanishes, and your Psionic Talent die decreases by one die size."
						}
					]
				}
			]
		},
		{
			"name": "Psionic Veil",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 3,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 13,
			"header": 2,
			"entries": [
				"{@i 13th-level Soulknife feature}",
				"You can weave a veil of psychic static to mask yourself. As an action, you can magically become {@condition invisible}, along with anything you are wearing or carrying, for 10 minutes or until you dismiss this effect (no action required). This invisibility ends if you deal damage to a creature or if you force a creature to make a saving throw.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you decrease your Psionic Talent die by one die size to use this feature again."
			]
		},
		{
			"name": "Rend Mind",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 3,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Soulknife feature}",
				"You can sweep your Psychic Blades directly through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Dexterity modifier). Unless the save succeeds, the target is {@condition stunned} until the end of your next turn.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you decrease your Psionic Talent die by one die size to use this feature again."
			]
		},
		{
			"name": "Phantom",
			"source": "UA2020SubclassesRevisited",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 3,
			"entries": [
				"Many rogues walk a fine line between life and death, risking their own lives and taking the lives of others. While adventuring on that line, some rogues discover a mystical connection to death itself. These rogues take knowledge from the dead and become immersed in negative energy, eventually becoming like ghosts. Thieves' guilds value them as highly effective information gatherers and spies.",
				"Many shadar-kai of the Shadowfell are masters of these macabre techniques, and some are willing to teach this path. In places like Thay (Forgotten Realms) and Karrnath (Eberron), where many necromancers practice their craft, a Phantom can become a wizard's confidant and right hand. In temples of gods of death, the Phantom works as an agent to track down those who try to cheat death and to recover knowledge that might otherwise be lost to the grave.",
				"How did you discover this grim power? Did you sleep in a graveyard and awaken to your new abilities? Or did you cultivate them in a temple or thieves' guild dedicated to a god of death?",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Whispers of the Dead|Rogue||Phantom (UA)|UA2020SubclassesRevisited|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wails from the Grave|Rogue||Phantom (UA)|UA2020SubclassesRevisited|3"
				}
			]
		},
		{
			"name": "Wails from the Grave",
			"source": "UA2020SubclassesRevisited",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Phantom feature}",
				"As you nudge someone closer to the grave, you can cause deathly wails to be heard near them. Immediately after you deal your Sneak Attack damage to a creature on your turn, you can target a second creature that you can see within 30 feet of the first creature. Roll half the number of Sneak Attack dice for your level (round up), and the second creature takes psychic damage equal to the roll's total, as wails of the dead sound around them for a moment.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Whispers of the Dead",
			"source": "UA2020SubclassesRevisited",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Phantom feature}",
				"Echoes of those who have died begin to cling to you. Whenever you finish a short or long rest, you can gain one skill or tool proficiency of your choice, as a ghostly presence shares its knowledge with you. This proficiency lasts until you use this feature again."
			]
		},
		{
			"name": "Tokens of the Departed",
			"source": "UA2020SubclassesRevisited",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Phantom feature}",
				"When a life ends in your presence, you're able to snatch a token from the departing soul, a sliver of its life essence that takes physical form: as a reaction when a creature you can see dies within 30 feet of you, you open your free hand and a Tiny trinket appears there, a soul trinket. The DM chooses the trinket's form or has you roll on the {@item Trinket|PHB|Trinkets} table in the {@i Player's Handbook} to determine it.",
				"While the soul trinket is on your person, you have advantage on death saving throws and Constitution saving throws, as your vitality is enhanced by the life essence within the object. You can have a maximum number of soul trinkets equal to your proficiency bonus, and you can't create one while at your maximum.",
				"As an action, you can destroy one of your soul trinkets, no matter where it's located. When you do so, you can ask the spirit associated with the trinket one question. The spirit appears to you and answers in a language it knew in life. It's under no obligation to be truthful, and it answers as concisely as possible, eager to be free."
			]
		},
		{
			"name": "Ghost Walk",
			"source": "UA2020SubclassesRevisited",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 13,
			"header": 2,
			"entries": [
				"{@i 13th-level Phantom feature}",
				"You can now phase partially into the realm of the dead, becoming like a ghost. As a bonus action, you assume a spectral form. While in this form, you have a flying speed of 10 feet, you can hover, and attack rolls have disadvantage against you. You can also move through creatures and objects as if they were {@quickref difficult terrain||3}, but you take {@damage 1d10} force damage if you end your turn inside a creature or an object.",
				"You stay in this form for 10 minutes or until you end it as a bonus action. To use this feature again, you must finish a long rest or destroy one of your soul trinkets as part of the bonus action you use to activate Ghost Walk."
			]
		},
		{
			"name": "Death Knell",
			"source": "UA2020SubclassesRevisited",
			"page": 1,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Phantom (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Phantom feature}",
				"When you use your Wails from the Grave feature, you can now deal the psychic damage to both the first and the second creature."
			]
		},
		{
			"name": "The Revived",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"entries": [
				"You've had a soul-shaking realization: you've been dead before, yet somehow you are alive again. This life isn't your first; it might not even be your second. Your past life, or lives, are unclear to you, but you know that you passed through the gates of death. And the powers of death, or some other influence, wasn't done with you. You might have convinced a deity to let you return to the Material Plane, perhaps you signed a deal with a fiend, or maybe you used an artifact that revived you. Whatever force brought you back, you now know the truth about yourself: that you are one of death's representatives among the living.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tokens of Past Lives|Rogue||Revived (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Revived Nature|Rogue||Revived (UA)|UAFighterRangerRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bolts from the Grave|Rogue||Revived (UA)|UAFighterRangerRogue|3"
				}
			]
		},
		{
			"name": "Bolts from the Grave",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Revived feature}",
				"You have learned to unleash bolts of necrotic energy from within your revived body. Immediately after you use your Cunning Action, you can make a ranged spell attack against a creature within 30 feet of you, provided you haven't used your Sneak Attack this turn. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. A creature hit by this attack takes necrotic damage equal to your Sneak Attack. This uses your Sneak Attack for the turn."
			]
		},
		{
			"name": "Revived Nature",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Revived feature}",
				"Your newfound connection to death gives you the following benefits:",
				{
					"type": "list",
					"items": [
						"You have advantage on saving throws against disease and being {@condition poisoned}, and you have resistance to poison damage.",
						"You don't need to eat, drink, or breathe.",
						"You don't need to sleep. When you take a long rest, you must spend at least four hours in an inactive, motionless state, rather than sleeping. In this state, you remain semiconscious, and you can hear as normal."
					]
				}
			]
		},
		{
			"name": "Tokens of Past Lives",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Revived feature}",
				"You remember talents you had in your previous life. When you finish a long rest, you gain one skill or tool proficiency of your choice. You can replace this proficiency with another when you finish a long rest."
			]
		},
		{
			"name": "Connect with the Dead",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Revived feature}",
				"You can create a link with a spirit through their corpse. When you do so, you cast the {@spell speak with dead} spell, without using a spell slot or material components. Intelligence is your spellcasting ability for this spell.",
				"Speaking with the dead in this way temporarily gives you a capability from a past life\u2014you're unsure whether it's from your past or the spirit's. When the spell ends, you gain one random benefit from the Revived Capabilities table. The benefit lasts until you finish a short or long rest.",
				{
					"type": "table",
					"caption": "Revived Capabilities",
					"colLabels": [
						"d3",
						"Capability"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"You learn how to speak, read, and write one language of your choice."
						],
						[
							"2",
							"You gain one skill or tool proficiency of your choice."
						],
						[
							"3",
							"You gain proficiency with one saving throw of your choice."
						]
					]
				},
				"After you cast the spell with this feature, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "Audience with Death",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 13,
			"header": 2,
			"entries": [
				"{@i 13th-level Revived feature}",
				"When at death's door, you can converse with the powers of death. You have advantage on death saving throws, and whenever you make a death saving throw, your spirit can ask an entity of death a question that can be answered with \"yes,\" \"no,\" or \"unknown.\" The entity answers truthfully, using the knowledge of all those who have died.",
				"In addition, whenever you have 0 hit points and are healed or stabilized, you can change any of your personal characteristics: personality trait, ideal, bond, or flaw."
			]
		},
		{
			"name": "Ethereal Jaunt",
			"source": "UAFighterRangerRogue",
			"page": 4,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Revived (UA)",
			"subclassSource": "UAFighterRangerRogue",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Revived feature}",
				"Like a ghost, you have the ability to slip in and out of the Ethereal Plane. You can now use your Cunning Action to teleport to an unoccupied space within 30 feet of you. You don't need to see that space to teleport to it, but your teleportation fails, wasting your bonus action, if you attempt to teleport through magical force that is Medium or larger, such as a wall of force. If you appear in a space occupied by another creature or filled by an object, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are shunted."
			]
		},
		{
			"name": "Soulknife",
			"source": "UAFighterRogueWizard",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 3,
			"entries": [
				"A Soulknife possesses powerful psionic potential. They channel this reservoir of inner magic into tangible blades of psychic energy, striking at their victims' minds. They find easy employment as members of thieves' guilds, being particularly sought after as assassins, since their signature psychic blades leave behind no visible wounds.",
				"As a Soulknife, your psionic abilities might have haunted you since you were a child, only revealing their potential when your psychic knives first appeared. Or you might have sought out a reclusive order of psionic assassins and spent years learning how to manifest your deadly blades.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psychic Blade|Rogue||Soulknife (UA)|UAFighterRogueWizard|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Enhancement|Rogue||Soulknife (UA)|UAFighterRogueWizard|3"
				}
			]
		},
		{
			"name": "Psionic Enhancement",
			"source": "UAFighterRogueWizard",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Soulknife feature}",
				"You can focus your psionic power to give yourself an extraordinary ability. When you finish a long rest, you gain one of the following benefits of your choice, which lasts until you finish a long rest:",
				{
					"type": "list",
					"items": [
						"You can communicate telepathically with any creature you can see within 30 feet of you. If a creature can speak at least one language, it can respond to you telepathically.",
						"Increase your walking speed by 5 feet.",
						"Your hit point maximum and your current hit points increase by an amount equal to your Intelligence modifier plus your rogue level."
					]
				}
			]
		},
		{
			"name": "Psychic Blade",
			"source": "UAFighterRogueWizard",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level Soulknife feature}",
				"As a bonus action, you can create a magical blade of shimmering psychic power from one or both of your hands. While one of your hands is manifesting a blade, you can't hold anything in that hand. You can dismiss one or both blades at any time (no action required), and they disappear if you're {@condition incapacitated}.",
				"The blade is a simple melee weapon with the finesse, light, and thrown properties. It has a normal range of 30 feet and a long range of 60 feet, and it deals {@damage 1d6} psychic damage on a hit. If you throw the blade as part of an attack, it vanishes immediately after it hits or misses its target. The blade otherwise disappears the instant it leaves your hand."
			]
		},
		{
			"name": "Terrifying Blade",
			"source": "UAFighterRogueWizard",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 9,
			"header": 2,
			"entries": [
				"{@i 9th-level Soulknife feature}",
				"Your psychic blades can now stoke terror within a target: When you damage a creature with your Psychic Blade, you can force the target to make a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Intelligence modifier). On a failed save, the creature is {@condition frightened} of you until the start of your next turn. On a successful save, the creature isn't {@condition frightened} and is immune to your Terrifying Blade for 24 hours."
			]
		},
		{
			"name": "Psychic Veil",
			"source": "UAFighterRogueWizard",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 13,
			"header": 2,
			"entries": [
				"{@i 13th-level Soulknife feature}",
				"You can weave a veil of psionic static to mask your physical presence. As an action, you can magically become {@condition invisible}, along with anything you are wearing or carrying, for 10 minutes. This invisibility ends if you make an attack or if you force a creature to make a saving throw.",
				"You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Rend Mind",
			"source": "UAFighterRogueWizard",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Soulknife (UA)",
			"subclassSource": "UAFighterRogueWizard",
			"level": 17,
			"header": 2,
			"entries": [
				"{@i 17th-level Soulknife feature}",
				"You can sweep your Psychic Blade directly through a creature's mind. As an action while you have at least one Psychic Blade manifested, you can force a creature you can see within 30 feet of you to make an Intelligence saving throw (DC equal to 10 + your proficiency bonus + your Intelligence modifier). If you are hidden from the target, it has disadvantage on the save. On a failed save, the target takes {@damage 12d6} psychic damage, and it is {@condition stunned} until the start of your next turn. On a successful save, the target takes half as much damage and isn't {@condition stunned}. One of your Psychic Blades vanishes after using this feature.",
				"You can use this feature a number of times equal to your Intelligence modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Inquisitive",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"entries": [
				"As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for details, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your sharp eye make you well equipped to expose and end hidden evils.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ear for Deceit|Rogue||Inquisitive (UA)|UAGothicHeroes|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eye for Detail|Rogue||Inquisitive (UA)|UAGothicHeroes|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Insightful Fighting|Rogue||Inquisitive (UA)|UAGothicHeroes|3"
				}
			]
		},
		{
			"name": "Ear for Deceit",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you develop a keen ear for picking out lies. Whenever you make a Wisdom ({@skill Insight}) check to sense if a creature is lying, you use the total of your check or 8 + your Wisdom modifier, whichever is higher. If you are proficient in {@skill Insight}, you add your proficiency bonus to the fixed result. If you chose {@skill Insight} as a skill augmented by your Expertise feature, add double your proficiency bonus."
			]
		},
		{
			"name": "Eye for Detail",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can use the bonus action granted by your Cunning Action feature to make a Wisdom ({@skill Perception}) check to spot a hidden creature or object, to make an Intelligence ({@skill Investigation}) check to uncover and decipher clues, or to use Insightful Fighting."
			]
		},
		{
			"name": "Insightful Fighting",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As an action (or as a bonus action using Eye for Detail), you make a Wisdom ({@skill Insight}) check against a creature you can see that isn't {@condition incapacitated}, opposed by the target's Charisma ({@skill Deception}) check. If you succeed, you can use Sneak Attack against that creature even if you do not have advantage against it or if no enemy of the target is within 5 feet of it. You can use Sneak Attack in this way even if you have disadvantage against the target.",
				"This benefit lasts for 1 minute or until you successfully use Insightful Fighting against a different target."
			]
		},
		{
			"name": "Steady Eye",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 9,
			"header": 2,
			"entries": [
				"At 9th level, you gain advantage on any Wisdom ({@skill Perception}) check made on your turn to find a hidden creature or object if you do not move during that turn. If you use this ability before moving, you cannot move or ready movement during your turn."
			]
		},
		{
			"name": "Unerring Eye",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 13,
			"header": 2,
			"entries": [
				"At 13th level, you gain the ability to detect magical deception. As an action, you sense the presence within 30 feet of you of illusions, shapechanger creatures not in their true form, and other magic designed to deceive the senses. Though you determine that an effect is attempting to trick you, you gain no special insight into what is hidden or its true nature."
			]
		},
		{
			"name": "Eye for Weakness",
			"source": "UAGothicHeroes",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive (UA)",
			"subclassSource": "UAGothicHeroes",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by {@dice 2d6}."
			]
		},
		{
			"name": "Scout",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"entries": [
				"You are skilled in woodcraft and stealth, allowing you to range ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and fighters, as they serve as the eyes and ears of war bands across the world. Compared to other rogues, you are skilled at surviving in the wilds.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Survivalist|Rogue||Scout (UA)|UARangerAndRogue|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Skirmisher|Rogue||Scout (UA)|UARangerAndRogue|3"
				}
			]
		},
		{
			"name": "Skirmisher",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks."
			]
		},
		{
			"name": "Survivalist",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in the {@skill Nature} and {@skill Survival} skills. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
			]
		},
		{
			"name": "Superior Mobility",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 9,
			"header": 2,
			"entries": [
				"At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well."
			]
		},
		{
			"name": "Ambush Master",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 13,
			"header": 2,
			"entries": [
				"Starting at 13th level, you excel at leading ambushes. If any of your foes are {@quickref Surprise|PHB|3|0|surprised}, you can use a bonus action on your turn in the first round of the combat to grant each ally who can see you a +5 bonus to initiative that lasts until the combat ends. If the initiative bonus would increase an ally's initiative above yours, the ally's initiative instead equals your initiative.",
				"Each of the allies also receives a 10-foot increase to speed that lasts until the end of the ally's next turn."
			]
		},
		{
			"name": "Sudden Strike",
			"source": "UARangerAndRogue",
			"page": 2,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout (UA)",
			"subclassSource": "UARangerAndRogue",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can strike with deadly speed. If you take the {@action Attack} action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but only if the attack is the only one you make against the target this turn."
			]
		},
		{
			"name": "Inquisitive",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for detail, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your keen deductions make you well equipped to expose and end hidden evils.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ear for Deceit|Rogue||Inquisitive|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eye for Detail|Rogue||Inquisitive|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Insightful Fighting|Rogue||Inquisitive|XGE|3"
				}
			]
		},
		{
			"name": "Ear for Deceit",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you develop a talent for picking out lies. Whenever you make a Wisdom ({@skill Insight}) check to determine whether a creature is lying, treat a roll of 7 or lower on the {@dice d20} as an 8."
			]
		},
		{
			"name": "Eye for Detail",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can use a bonus action to make a Wisdom ({@skill Perception}) check to spot a hidden creature or object or to make an Intelligence ({@skill Investigation}) check to uncover or decipher clues."
			]
		},
		{
			"name": "Insightful Fighting",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As a bonus action, you can make a Wisdom ({@skill Insight}) check against a creature you can see that isn't {@condition incapacitated}, contested by the target's Charisma ({@skill Deception}) check. If you succeed, you can use your Sneak Attack against that target even if you don't have advantage on the attack roll, but not if you have disadvantage on it.",
				"This benefit lasts for 1 minute or until you successfully use this feature against a different target."
			]
		},
		{
			"name": "Steady Eye",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, you have advantage on any Wisdom ({@skill Perception}) or Intelligence ({@skill Investigation}) check if you move no more than half your speed on the same turn."
			]
		},
		{
			"name": "Unerring Eye",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 13,
			"header": 2,
			"entries": [
				"Beginning at 13th level, your senses are almost impossible to foil. As an action, you sense the presence of illusions, shapechangers not in their original form, and other magic designed to deceive the senses within 30 feet of you, provided you aren't {@condition blinded} or {@condition deafened}. You sense that an effect is attempting to trick you, but you gain no insight into what is hidden or into its true nature.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Eye for Weakness",
			"source": "XGE",
			"page": 45,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Inquisitive",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by {@dice 3d6}."
			]
		},
		{
			"name": "Mastermind",
			"source": "XGE",
			"page": 46,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Mastermind",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Master of Intrigue|Rogue||Mastermind|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Master of Tactics|Rogue||Mastermind|XGE|3"
				}
			]
		},
		{
			"name": "Master of Intrigue",
			"source": "XGE",
			"page": 46,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Mastermind",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency with the {@item disguise kit|phb}, the {@item forgery kit|phb}, and one {@item gaming set|PHB} of your choice. You also learn two languages of your choice.",
				"Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language."
			]
		},
		{
			"name": "Master of Tactics",
			"source": "XGE",
			"page": 46,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Mastermind",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can use the {@action Help} action as a bonus action. Additionally, when you use the {@action Help} action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than within 5 feet of you, if the target can see or hear you."
			]
		},
		{
			"name": "Insightful Manipulator",
			"source": "XGE",
			"page": 46,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Mastermind",
			"subclassSource": "XGE",
			"level": 9,
			"header": 2,
			"entries": [
				"Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
				{
					"type": "list",
					"items": [
						"Intelligence score",
						"Wisdom score",
						"Charisma score",
						"Class levels (if any)"
					]
				},
				"At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any."
			]
		},
		{
			"name": "Misdirection",
			"source": "XGE",
			"page": 46,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Mastermind",
			"subclassSource": "XGE",
			"level": 13,
			"header": 2,
			"entries": [
				"Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you."
			]
		},
		{
			"name": "Soul of Deceit",
			"source": "XGE",
			"page": 46,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Mastermind",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by succeeding on a Charisma ({@skill Deception}) check contested by the mind reader's Wisdom ({@skill Insight}) check.",
				"Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can't be compelled to tell the truth by magic."
			]
		},
		{
			"name": "Scout",
			"source": "XGE",
			"page": 47,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You are skilled in stealth and surviving far from the streets of a city, allowing you to scout ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and rangers, and many Scouts serve as the eyes and ears of war bands. Ambusher, spy, bounty hunter\u2014these are just a few of the roles that Scouts assume as they range the world.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Skirmisher|Rogue||Scout|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Survivalist|Rogue||Scout|XGE|3"
				}
			]
		},
		{
			"name": "Skirmisher",
			"source": "XGE",
			"page": 47,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn't provoke opportunity attacks."
			]
		},
		{
			"name": "Survivalist",
			"source": "XGE",
			"page": 47,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you gain proficiency in the {@skill Nature} and {@skill Survival} skills if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
			]
		},
		{
			"name": "Superior Mobility",
			"source": "XGE",
			"page": 47,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout",
			"subclassSource": "XGE",
			"level": 9,
			"header": 2,
			"entries": [
				"At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well."
			]
		},
		{
			"name": "Ambush Master",
			"source": "XGE",
			"page": 47,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout",
			"subclassSource": "XGE",
			"level": 13,
			"header": 2,
			"entries": [
				"Starting at 13th level, you excel at leading ambushes and acting first in a fight.",
				"You have advantage on initiative rolls. In addition, the first creature you hit during the first round of a combat becomes easier for you and others to strike; attack rolls against that target have advantage until the start of your next turn."
			]
		},
		{
			"name": "Sudden Strike",
			"source": "XGE",
			"page": 47,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Scout",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"Starting at 17th level, you can strike with deadly speed. If you take the {@action Attack} action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but you can't use your Sneak Attack against the same target more than once in a turn."
			]
		},
		{
			"name": "Swashbuckler",
			"source": "XGE",
			"page": 48,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Swashbuckler",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance. Duelists and pirates typically belong to this archetype.",
				"A Swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fancy Footwork|Rogue||Swashbuckler|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Rakish Audacity|Rogue||Swashbuckler|XGE|3"
				}
			]
		},
		{
			"name": "Fancy Footwork",
			"source": "XGE",
			"page": 48,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Swashbuckler",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn."
			]
		},
		{
			"name": "Rakish Audacity",
			"source": "XGE",
			"page": 48,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Swashbuckler",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, your confidence propels you into battle. You can give yourself a bonus to your initiative rolls equal to your Charisma modifier.",
				"You also gain an additional way to use your Sneak {@action Attack}; you don't need advantage on your attack roll to use Sneak {@action Attack} against a creature if you are within 5 feet of it, no other creatures are within 5 feet of you, and you don't have disadvantage on the attack roll. All the other rules for Sneak {@action Attack} still apply to you."
			]
		},
		{
			"name": "Panache",
			"source": "XGE",
			"page": 48,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Swashbuckler",
			"subclassSource": "XGE",
			"level": 9,
			"header": 2,
			"entries": [
				"At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma ({@skill Persuasion}) check contested by a creature's Wisdom ({@skill Insight}) check. The creature must be able to hear you, and the two of you must share a language.",
				"If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.",
				"If you succeed on the check and the creature isn't hostile to you, it is {@condition charmed} by you for 1 minute. While {@condition charmed}, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it."
			]
		},
		{
			"name": "Elegant Maneuver",
			"source": "XGE",
			"page": 48,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Swashbuckler",
			"subclassSource": "XGE",
			"level": 13,
			"header": 2,
			"entries": [
				"Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity ({@skill Acrobatics}) or Strength ({@skill Athletics}) check you make during the same turn."
			]
		},
		{
			"name": "Master Duelist",
			"source": "XGE",
			"page": 48,
			"className": "Rogue",
			"classSource": "PHB",
			"subclassShortName": "Swashbuckler",
			"subclassSource": "XGE",
			"level": 17,
			"header": 2,
			"entries": [
				"Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest."
			]
		},
		{
			"name": "Psi-Bolstered Knack",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "TCE",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 3,
			"consumes": {
				"name": "Psionic Energy Die"
			},
			"entries": [
				"When your nonpsionic training fails you, your psionic power can help: if you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy die and add the number rolled to the check, potentially turning failure into success. You expend the die only if the roll succeeds."
			]
		},
		{
			"name": "Psychic Whispers",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "TCE",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"You can establish telepathic communication between yourself and others-perfect for quiet infiltration. As an action, choose one or more creatures you can see, up to a number of creatures equal to your proficiency bonus, and then roll one Psionic Energy die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can't use this telepathy if it can't speak any languages, and a creature can end the telepathic connection at any time (no action required). You and the creature don't need to speak a common language to understand each other.",
				"The first time you use this power after each long rest, you don't expend the Psionic Energy die. All other times you use the power, you expend the die."
			]
		},
		{
			"name": "Homing Strikes",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "TCE",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 9,
			"entries": [
				"If you make an attack roll with your Psychic Blades and miss the target, you can roll one Psionic Energy die and add the number rolled to the attack roll. If this causes the attack to hit, you expend the Psionic Energy die."
			]
		},
		{
			"name": "Psychic Teleportation",
			"source": "TCE",
			"page": 63,
			"className": "Rogue",
			"classSource": "TCE",
			"subclassShortName": "Soulknife",
			"subclassSource": "TCE",
			"level": 9,
			"entries": [
				"As a bonus action, you manifest one of your Psychic Blades, expend one Psionic Energy die and roll it, and throw the blade at an unoccupied space you can see, up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes."
			]
		}
	]
}

const sorcerer =

{
	"_meta": {
		"dependencies": {
			"subclass": [
				"generic"
			]
		}
	},
	"class": [
		{
			"name": "Sorcerer",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 6
			},
			"proficiency": [
				"con",
				"cha"
			],
			"spellcastingAbility": "cha",
			"casterProgression": "full",
			"cantripProgression": [
				4,
				4,
				4,
				5,
				5,
				5,
				5,
				5,
				5,
				6,
				6,
				6,
				6,
				6,
				6,
				6,
				6,
				6,
				6,
				6
			],
			"spellsKnownProgression": [
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				12,
				13,
				13,
				14,
				14,
				15,
				15,
				15,
				15
			],
			"optionalfeatureProgression": [
				{
					"name": "Metamagic",
					"featureType": [
						"MM"
					],
					"progression": {
						"3": 2,
						"10": 3,
						"17": 4
					}
				}
			],
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
								"deception",
								"insight",
								"intimidation",
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
					"(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
					"(a) a {@item dungeoneer's pack|phb} or (b) an {@item explorer's pack|phb}",
					"Two {@item dagger|phb|daggers}"
				],
				"goldAlternative": "{@dice 3d4 × 10|3d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"light crossbow|phb",
							"crossbow bolts (20)|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimple"
							}
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
							"dungeoneer's pack|phb"
						],
						"b": [
							"explorer's pack|phb"
						]
					},
					{
						"_": [
							{
								"item": "dagger|phb",
								"quantity": 2
							}
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"cha": 13
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"Sorcery Points"
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
							4
						],
						[
							5
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
							9
						],
						[
							10
						],
						[
							11
						],
						[
							12
						],
						[
							13
						],
						[
							14
						],
						[
							15
						],
						[
							16
						],
						[
							17
						],
						[
							18
						],
						[
							19
						],
						[
							20
						]
					]
				},
				{
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|class=sorcerer}",
						"{@filter Spells Known|spells|class=sorcerer}"
					],
					"rows": [
						[
							4,
							2
						],
						[
							4,
							3
						],
						[
							4,
							4
						],
						[
							5,
							5
						],
						[
							5,
							6
						],
						[
							5,
							7
						],
						[
							5,
							8
						],
						[
							5,
							9
						],
						[
							5,
							10
						],
						[
							6,
							11
						],
						[
							6,
							12
						],
						[
							6,
							12
						],
						[
							6,
							13
						],
						[
							6,
							13
						],
						[
							6,
							14
						],
						[
							6,
							14
						],
						[
							6,
							15
						],
						[
							6,
							15
						],
						[
							6,
							15
						],
						[
							6,
							15
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=sorcerer}",
						"{@filter 2nd|spells|level=2|class=sorcerer}",
						"{@filter 3rd|spells|level=3|class=sorcerer}",
						"{@filter 4th|spells|level=4|class=sorcerer}",
						"{@filter 5th|spells|level=5|class=sorcerer}",
						"{@filter 6th|spells|level=6|class=sorcerer}",
						"{@filter 7th|spells|level=7|class=sorcerer}",
						"{@filter 8th|spells|level=8|class=sorcerer}",
						"{@filter 9th|spells|level=9|class=sorcerer}"
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
				"Spellcasting|Sorcerer||1",
				{
					"classFeature": "Sorcerous Origin|Sorcerer||1",
					"gainSubclassFeature": true
				},
				"Spell Versatility|Sorcerer||1|UAClassFeatureVariants",
				"Font of Magic|Sorcerer||2",
				"Font of Magic Options|Sorcerer||2|UAClassFeatureVariants",
				"Metamagic|Sorcerer||3",
				"Metamagic Options|Sorcerer||3|UAClassFeatureVariants",
				"Metamagic Options|Sorcerer||3|TCE",
				"Ability Score Improvement|Sorcerer||4",
				"Proficiency Versatility|Sorcerer||4|UAClassFeatureVariants",
				"Sorcerous Versatility|Sorcerer||4|TCE",
				"Magical Guidance|Sorcerer||5|TCE",
				{
					"classFeature": "Sorcerous Origin feature|Sorcerer||6",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Sorcerer||8",
				"Proficiency Versatility|Sorcerer||8|UAClassFeatureVariants",
				"Metamagic|Sorcerer||10",
				"Ability Score Improvement|Sorcerer||12",
				"Proficiency Versatility|Sorcerer||12|UAClassFeatureVariants",
				{
					"classFeature": "Sorcerous Origin feature|Sorcerer||14",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Sorcerer||16",
				"Proficiency Versatility|Sorcerer||16|UAClassFeatureVariants",
				"Metamagic|Sorcerer||17",
				{
					"classFeature": "Sorcerous Origin feature|Sorcerer||18",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Sorcerer||19",
				"Proficiency Versatility|Sorcerer||19|UAClassFeatureVariants",
				"Sorcerous Restoration|Sorcerer||20"
			],
			"subclassTitle": "Sorcerous Origin",
			"fluff": [
				{
					"name": "Sorcerer",
					"type": "section",
					"entries": [
						"Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air.",
						"Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning.",
						"Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned her skin bright blue.",
						"Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can't study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
						{
							"type": "entries",
							"name": "Raw Magic",
							"entries": [
								"Magic is a part of every sorcerer, suffusing body, mind, and spirit with a latent power that waits to be tapped. Some sorcerers wield magic that springs from an ancient bloodline infused with the magic of dragons. Others carry a raw, uncontrolled magic within them, a chaotic storm that manifests in unexpected ways.",
								"The appearance of sorcerous powers is wildly unpredictable. Some draconic bloodlines produce exactly one sorcerer in every generation, but in other lines of descent every individual is a sorcerer. Most of the time, the talents of sorcery appear as apparent flukes. Some sorcerers can't name the origin of their power, while others trace it to strange events in their own lives. The touch of a demon, the blessing of a dryad at a baby's birth, or a taste of the water from a mysterious spring might spark the gift of sorcery. So too might the gift of a deity of magic, exposure to the elemental forces of the Inner Planes or the maddening chaos of Limbo, or a glimpse into the inner workings of reality.",
								"Sorcerers have no use for the spellbooks and ancient tomes of magic lore that wizards rely on, nor do they rely on a patron to grant their spells as warlocks do. By learning to harness and channel their own inborn magic, they can discover new and staggering ways to unleash that power."
							]
						},
						{
							"type": "entries",
							"name": "Unexplained Powers",
							"entries": [
								"Sorcerers are rare in the world, and it's unusual to find a sorcerer who is not involved in the adventuring life in some way. People with magical power seething in their veins soon discover that the power doesn't like to stay quiet. A sorcerer's magic wants to be wielded, and it has a tendency to spill out in unpredictable ways if it isn't called on.",
								"Sorcerers often have obscure or quixotic motivations driving them to adventure. Some seek a greater understanding of the magical force that infuses them, or the answer to the mystery of its origin. Others hope to find a way to get rid of it, or to unleash its full potential. Whatever their goals, sorcerers are every bit as useful to an adventuring party as wizards, making up for a comparative lack of breadth in their magical knowledge with enormous flexibility in using the spells they know."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Sorcerer",
							"entries": [
								"The most important question to consider when creating your sorcerer is the origin of your power. As a starting character, you'll choose an origin that ties to a draconic bloodline or the influence of wild magic, but the exact source of your power is up to you to decide. Is it a family curse, passed down to you from distant ancestors? Or did some extraordinary event leave you blessed with inherent magic but perhaps scarred as well?",
								"How do you feel about the magical power coursing through you? Do you embrace it, try to master it, or revel in its unpredictable nature? Is it a blessing or a curse? Did you seek it out, or did it find you? Did you have the option to refuse it, and do you wish you had? What do you intend to do with it? Perhaps you feel like you've been given this power for some lofty purpose. Or you might decide that the power gives you the right to do what you want, to take what you want from those who lack such power. Perhaps your power links you to a powerful individual in the world\u2014the fey creature that blessed you at birth, the dragon who put a drop of its blood into your veins, the lich who created you as an experiment, or the deity who chose you to carry this power.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a sorcerer quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution. Second, choose the hermit background. Third, choose the {@spell light}, {@spell prestidigitation}, {@spell ray of frost}, and {@spell shocking grasp} cantrips, along with the 1st-level spells {@spell shield} and {@spell magic missile}."
									]
								}
							]
						}
					],
					"page": 99,
					"source": "PHB"
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"Practice and study are for amateurs. True power is a birthright."
							],
							"by": "Hennet, scion of Tiamat"
						},
						"When it comes to drawing forth their abilities in times of need, sorcerers have it easy compared to other characters. Their power not only rests within them, but it likely takes some effort to keep it at bay. Every sorcerer is born to the role, or stumbles into it through cosmic chance. Unlike other characters, who must actively learn, embrace, and pursue their talents, sorcerers have their power thrust upon them.",
						"Because the idea of an innately magical being traveling among them does not sit well with many folk, sorcerers tend to breed mistrust and suspicion in others they come across. Nonetheless, many sorcerers succeed in overcoming that prejudice through deeds that benefit their less magically gifted contemporaries.",
						"Sorcerers are often defined by the events surrounding the manifestation of their power. For those who receive it as an expected birthright, its appearance is a cause for celebration. Other sorcerers are treated as outcasts, banished from their homes after the sudden, terrifying arrival of their abilities.",
						"Playing a sorcerer character can be as rewarding as it is challenging. The sections below offer suggestions on how to flesh out and personalize your persona.",
						{
							"type": "entries",
							"name": "Arcane Origins",
							"entries": [
								"Some sorcerers understand where their power came from, based on how their abilities manifested. Others can only speculate, since their powers came to them in a way that suggests no particular cause.",
								"Does your character know the source of your magical power? Does it tie back to some distant relative, a cosmic event, or blind chance? If your sorcerer doesn't know where their power arose from, your DM can use this table (or select an origin) and reveal it to you when the information plays a role in the campaign.",
								{
									"type": "table",
									"caption": "Arcane Origins",
									"colLabels": [
										"{@dice d6}",
										"Origin"
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
											"Your power arises from your family's bloodline. You are related to some powerful creature, or you inherited a blessing or a curse."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"You are the reincarnation of a being from another plane of existence."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A powerful entity entered the world. Its magic changed you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your birth was prophesied in an ancient text, and you are foretold to use your power for terrible ends."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"You are the product of generations of careful, selective breeding."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You were made in a vat by an alchemist."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Reaction",
							"entries": [
								"When a new sorcerer enters the world, either at birth or later when one's power becomes evident, the consequences of that event depend greatly on how its witnesses react to what they have seen.",
								"When your sorcerer's powers appeared, how did the world around you respond? Were other people supportive, fearful, or somewhere in between?",
								{
									"type": "table",
									"caption": "Reactions",
									"colLabels": [
										"{@dice d6}",
										"Reaction"
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
											"Your powers are seen as a great blessing by those around you, and you are expected to use them in service to your community."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your powers caused destruction and even a death when they became evident, and you were treated as a criminal."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your neighbors hate and fear your power, causing them to shun you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You came to the attention of a sinister cult that plans on exploiting your abilities."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"People around you believe that your powers are a curse levied on your family for a past transgression."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Your powers are believed to be tied to an ancient line of mad kings that supposedly ended in a bloody revolt over a century ago."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Supernatural Mark",
							"entries": [
								"A sorcerer at rest is almost indistinguishable from a normal person; it's only when their magic flies forth that sorcerers reveal their true nature. Even so, many sorcerers have a subtle but telling physical trait that sets them apart from other folk.",
								"If your sorcerer has a supernatural mark, it might be one that's easily concealed, or it could be a source of pride that you keep on constant display.",
								{
									"type": "table",
									"caption": "Supernatural Marks",
									"colLabels": [
										"{@dice d6}",
										"Mark"
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
											"Your eyes are an unusual color, such as red."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"You have an extra toe on one foot."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"One of your ears is noticeably larger than the other."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your hair grows at a prodigious rate."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"You wrinkle your nose repeatedly while you are chewing."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"A red splotch appears on your neck once a day, then vanishes after an hour."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Signs of Sorcery",
							"entries": [
								"As the world well knows, some sorcerers are better than others at controlling their spellcasting. Sometimes a wild display of magic gone awry emanates from a sorcerer who casts a spell. But even when one's magic goes off as planned, the act of casting is often accompanied by a telltale sign that makes it clear where that magical energy came from.",
								"When your sorcerer character casts a spell, does the effort reveal itself in a sign of sorcery? Is this sign tied to your origin or some other aspect of who you are, or is it a seemingly random phenomenon?",
								{
									"type": "table",
									"caption": "Signs of Sorcery",
									"colLabels": [
										"{@dice d6}",
										"Sign"
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
											"You deliver the verbal components of your spells in the booming voice of a titan."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"For a moment after you cast a spell, the area around you grows dark and gloomy."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"You sweat profusely while casting a spell and for a few seconds thereafter."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your hair and garments are briefly buffeted about, as if by a breeze, whenever you call forth a spell."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"If you are standing when you cast a spell, you rise six inches into the air and gently float back down."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Illusory blue flames wreathe your head as you begin your casting, then abruptly disappear."
										]
									]
								}
							]
						}
					],
					"page": 48,
					"source": "XGE"
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Draconic Bloodline",
			"shortName": "Draconic",
			"source": "PHB",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 102,
			"srd": true,
			"subclassFeatures": [
				"Draconic Bloodline|Sorcerer||Draconic||1",
				"Elemental Affinity|Sorcerer||Draconic||6",
				"Dragon Wings|Sorcerer||Draconic||14",
				"Draconic Presence|Sorcerer||Draconic||18"
			]
		},
		{
			"name": "Wild Magic",
			"shortName": "Wild",
			"source": "PHB",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 103,
			"subclassFeatures": [
				"Wild Magic|Sorcerer||Wild||1",
				"Bend Luck|Sorcerer||Wild||6",
				"Controlled Chaos|Sorcerer||Wild||14",
				"Spell Bombardment|Sorcerer||Wild||18"
			]
		},
		{
			"name": "Favored Soul (UA)",
			"shortName": "Favored Soul (UA)",
			"source": "UAModifyingClasses",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 8,
			"isReprinted": true,
			"subclassFeatures": [
				"Favored Soul|Sorcerer||Favored Soul (UA)|UAModifyingClasses|1",
				"Extra Attack|Sorcerer||Favored Soul (UA)|UAModifyingClasses|6",
				"Divine Wings|Sorcerer||Favored Soul (UA)|UAModifyingClasses|14",
				"Power of the Chosen|Sorcerer||Favored Soul (UA)|UAModifyingClasses|18"
			]
		},
		{
			"name": "Storm Sorcery (UA)",
			"shortName": "Storm (UA)",
			"source": "UAWaterborneAdventures",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"fog cloud",
							"thunderwave"
						],
						"3": [
							"gust of wind",
							"levitate"
						],
						"5": [
							"call lightning",
							"sleet storm"
						],
						"7": [
							"conjure minor elementals",
							"ice storm"
						],
						"9": [
							"conjure elemental"
						]
					}
				}
			],
			"subclassFeatures": [
				"Storm Sorcery|Sorcerer||Storm (UA)|UAWaterborneAdventures|1",
				"Heart of the Storm|Sorcerer||Storm (UA)|UAWaterborneAdventures|6",
				"Storm Guide|Sorcerer||Storm (UA)|UAWaterborneAdventures|6",
				"Storm's Fury|Sorcerer||Storm (UA)|UAWaterborneAdventures|14",
				"Wind Soul|Sorcerer||Storm (UA)|UAWaterborneAdventures|18"
			]
		},
		{
			"name": "Shadow (UA)",
			"shortName": "Shadow (UA)",
			"source": "UALightDarkUnderdark",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"Shadow|Sorcerer||Shadow (UA)|UALightDarkUnderdark|1",
				"Hound of Ill Omen|Sorcerer||Shadow (UA)|UALightDarkUnderdark|6",
				"Shadow Walk|Sorcerer||Shadow (UA)|UALightDarkUnderdark|14",
				"Shadow Form|Sorcerer||Shadow (UA)|UALightDarkUnderdark|18"
			]
		},
		{
			"name": "Favored Soul v2 (UA)",
			"shortName": "Favored Soul v2 (UA)",
			"source": "UASorcerer",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"Favored Soul v2|Sorcerer||Favored Soul v2 (UA)|UASorcerer|1",
				"Blessed Countenance|Sorcerer||Favored Soul v2 (UA)|UASorcerer|6",
				"Divine Purity|Sorcerer||Favored Soul v2 (UA)|UASorcerer|14",
				"Unearthly Recovery|Sorcerer||Favored Soul v2 (UA)|UASorcerer|18"
			]
		},
		{
			"name": "Phoenix Sorcery (UA)",
			"shortName": "Phoenix (UA)",
			"source": "UASorcerer",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 1,
			"subclassFeatures": [
				"Phoenix Sorcery (UA)|Sorcerer||Phoenix (UA)|UASorcerer|1",
				"Phoenix Spark|Sorcerer||Phoenix (UA)|UASorcerer|6",
				"Nourishing Fire|Sorcerer||Phoenix (UA)|UASorcerer|14",
				"Form of the Phoenix|Sorcerer||Phoenix (UA)|UASorcerer|18"
			]
		},
		{
			"name": "Sea Sorcery (UA)",
			"shortName": "Sea (UA)",
			"source": "UASorcerer",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 2,
			"subclassFeatures": [
				"Sea Sorcery (UA)|Sorcerer||Sea (UA)|UASorcerer|1",
				"Watery Defense|Sorcerer||Sea (UA)|UASorcerer|6",
				"Shifting Form|Sorcerer||Sea (UA)|UASorcerer|14",
				"Water Soul|Sorcerer||Sea (UA)|UASorcerer|18"
			]
		},
		{
			"name": "Stone Sorcery (UA)",
			"shortName": "Stone (UA)",
			"source": "UASorcerer",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 3,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"compelled duel",
							"searing smite",
							"thunderous smite",
							"wrathful smite"
						],
						"3": [
							"branding smite",
							"magic weapon"
						],
						"5": [
							"blinding smite",
							"elemental weapon"
						],
						"7": [
							"staggering smite"
						]
					}
				}
			],
			"subclassFeatures": [
				"Stone Sorcery (UA)|Sorcerer||Stone (UA)|UASorcerer|1",
				"Stone Aegis|Sorcerer||Stone (UA)|UASorcerer|6",
				"Stone's Edge|Sorcerer||Stone (UA)|UASorcerer|14",
				"Earth Master's Aegis|Sorcerer||Stone (UA)|UASorcerer|18"
			]
		},
		{
			"name": "Pyromancer (PSK)",
			"shortName": "Pyromancer (PSK)",
			"source": "PSK",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 9,
			"subclassFeatures": [
				"Pyromancer (PSK)|Sorcerer||Pyromancer (PSK)|PSK|1",
				"Fire in the Veins|Sorcerer||Pyromancer (PSK)|PSK|6",
				"Pyromancer's Fury|Sorcerer||Pyromancer (PSK)|PSK|14",
				"Fiery Soul|Sorcerer||Pyromancer (PSK)|PSK|18"
			]
		},
		{
			"name": "Favored Soul v3 (UA)",
			"shortName": "Favored Soul v3 (UA)",
			"source": "UARevisedSubclasses",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 5,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"Favored Soul v3|Sorcerer||Favored Soul v3 (UA)|UARevisedSubclasses|1",
				"Empowered Healing|Sorcerer||Favored Soul v3 (UA)|UARevisedSubclasses|6",
				"Angelic Form|Sorcerer||Favored Soul v3 (UA)|UARevisedSubclasses|14",
				"Unearthly Recovery|Sorcerer||Favored Soul v3 (UA)|UARevisedSubclasses|18"
			]
		},
		{
			"name": "Divine Soul",
			"shortName": "Divine Soul",
			"source": "XGE",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 50,
			"additionalSpells": [
				{
					"name": "Good",
					"known": {
						"1": [
							"cure wounds"
						]
					},
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				},
				{
					"name": "Evil",
					"known": {
						"1": [
							"inflict wounds"
						]
					},
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				},
				{
					"name": "Law",
					"known": {
						"1": [
							"bless"
						]
					},
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				},
				{
					"name": "Chaos",
					"known": {
						"1": [
							"bane"
						]
					},
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				},
				{
					"name": "Neutrality",
					"known": {
						"1": [
							"protection from evil and good"
						]
					},
					"expanded": {
						"1": [
							{
								"all": "level=0|class=Cleric"
							},
							{
								"all": "level=1|class=Cleric"
							}
						],
						"3": [
							{
								"all": "level=2|class=Cleric"
							}
						],
						"5": [
							{
								"all": "level=3|class=Cleric"
							}
						],
						"7": [
							{
								"all": "level=4|class=Cleric"
							}
						],
						"9": [
							{
								"all": "level=5|class=Cleric"
							}
						],
						"11": [
							{
								"all": "level=6|class=Cleric"
							}
						],
						"13": [
							{
								"all": "level=7|class=Cleric"
							}
						],
						"15": [
							{
								"all": "level=8|class=Cleric"
							}
						],
						"17": [
							{
								"all": "level=9|class=Cleric"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"Divine Soul|Sorcerer||Divine Soul|XGE|1",
				"Empowered Healing|Sorcerer||Divine Soul|XGE|6",
				"Otherworldly Wings|Sorcerer||Divine Soul|XGE|14",
				"Unearthly Recovery|Sorcerer||Divine Soul|XGE|18"
			]
		},
		{
			"name": "Shadow Magic",
			"shortName": "Shadow",
			"source": "XGE",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 50,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"darkness"
						]
					}
				}
			],
			"subclassFeatures": [
				"Shadow Magic|Sorcerer||Shadow|XGE|1",
				"Hound of Ill Omen|Sorcerer||Shadow|XGE|6",
				"Shadow Walk|Sorcerer||Shadow|XGE|14",
				"Umbral Form|Sorcerer||Shadow|XGE|18"
			]
		},
		{
			"name": "Storm Sorcery",
			"shortName": "Storm",
			"source": "XGE",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 51,
			"otherSources": [
				{
					"source": "SCAG",
					"page": 137
				}
			],
			"subclassFeatures": [
				"Storm Sorcery|Sorcerer||Storm|XGE|1",
				"Heart of the Storm|Sorcerer||Storm|XGE|6",
				"Storm Guide|Sorcerer||Storm|XGE|6",
				"Storm's Fury|Sorcerer||Storm|XGE|14",
				"Wind Soul|Sorcerer||Storm|XGE|18"
			]
		},
		{
			"name": "Giant Soul (UA)",
			"shortName": "Giant Soul (UA)",
			"source": "UAGiantSoulSorcerer",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 1,
			"additionalSpells": [
				{
					"name": "Cloud",
					"known": {
						"1": [
							"fog cloud",
							"minor illusion"
						],
						"3": [
							"invisibility"
						]
					}
				},
				{
					"name": "Fire",
					"known": {
						"1": [
							"burning hands",
							"fire bolt"
						],
						"3": [
							"flaming sphere"
						]
					}
				},
				{
					"name": "Frost",
					"known": {
						"1": [
							"armor of Agathys",
							"ray of frost"
						],
						"3": [
							"hold person"
						]
					}
				},
				{
					"name": "Hill",
					"known": {
						"1": [
							"heroism",
							"shillelagh"
						],
						"3": [
							"enlarge/reduce"
						]
					}
				},
				{
					"name": "Stone",
					"known": {
						"1": [
							"entangle",
							"resistance"
						],
						"3": [
							"spike growth"
						]
					}
				},
				{
					"name": "Storm",
					"known": {
						"1": [
							"shocking grasp",
							"thunderwave"
						],
						"3": [
							"gust of wind"
						]
					}
				}
			],
			"subclassFeatures": [
				"Giant Soul (UA)|Sorcerer||Giant Soul (UA)|UAGiantSoulSorcerer|1",
				"Soul of Lost Ostoria|Sorcerer||Giant Soul (UA)|UAGiantSoulSorcerer|6",
				"Rage of Fallen Ostoria|Sorcerer||Giant Soul (UA)|UAGiantSoulSorcerer|14",
				"Blessing of the All Father|Sorcerer||Giant Soul (UA)|UAGiantSoulSorcerer|18"
			]
		},
		{
			"name": "Aberrant Mind (UA)",
			"shortName": "Aberrant Mind (UA)",
			"source": "UASorcererAndWarlock",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"arms of Hadar",
							"dissonant whispers"
						],
						"3": [
							"calm emotions",
							"detect thoughts"
						],
						"5": [
							"hunger of Hadar",
							"sending"
						],
						"7": [
							"compulsion",
							"Evard's black tentacles"
						],
						"9": [
							"modify memory",
							"Rary's telepathic bond"
						]
					}
				}
			],
			"subclassFeatures": [
				"Aberrant Mind|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|1",
				"Psionic Sorcery|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|6",
				"Psychic Defenses|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|6",
				"Revelation in Flesh|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|14",
				"Warp Reality|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|18"
			]
		},
		{
			"name": "Clockwork Soul (UA)",
			"shortName": "Clockwork Soul (UA)",
			"source": "UA2020SubclassesPt2",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"alarm",
							"protection from evil and good"
						],
						"3": [
							"find traps",
							"heat metal"
						],
						"5": [
							"counterspell",
							"glyph of warding"
						],
						"7": [
							"arcane eye",
							"Otiluke's resilient sphere"
						],
						"9": [
							"animate objects",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Clockwork Soul|Sorcerer||Clockwork Soul (UA)|UA2020SubclassesPt2|1",
				"Bulwark of Law|Sorcerer||Clockwork Soul (UA)|UA2020SubclassesPt2|6",
				"Trance of Order|Sorcerer||Clockwork Soul (UA)|UA2020SubclassesPt2|14",
				"Clockwork Cavalcade|Sorcerer||Clockwork Soul (UA)|UA2020SubclassesPt2|18"
			]
		},
		{
			"name": "Psionic Soul (UA)",
			"shortName": "Psionic Soul (UA)",
			"source": "UA2020PsionicOptionsRevisited",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 5,
			"isReprinted": true,
			"subclassFeatures": [
				"Psionic Soul|Sorcerer||Psionic Soul (UA)|UA2020PsionicOptionsRevisited|1",
				"Psychic Strike|Sorcerer||Psionic Soul (UA)|UA2020PsionicOptionsRevisited|6",
				"Mind Over Body|Sorcerer||Psionic Soul (UA)|UA2020PsionicOptionsRevisited|14",
				"Psychic Aura|Sorcerer||Psionic Soul (UA)|UA2020PsionicOptionsRevisited|18"
			]
		},
		{
			"name": "Aberrant Mind",
			"shortName": "Aberrant Mind",
			"source": "TCE",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 66,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"mind sliver|tce#c",
							"arms of Hadar",
							"dissonant whispers"
						],
						"3": [
							"calm emotions",
							"detect thoughts"
						],
						"5": [
							"hunger of Hadar",
							"sending"
						],
						"7": [
							"Evard's black tentacles",
							"summon aberration|TCE"
						],
						"9": [
							"Rary's telepathic bond",
							"telekinesis"
						]
					}
				}
			],
			"subclassFeatures": [
				"Aberrant Mind|Sorcerer||Aberrant Mind|TCE|1",
				"Psionic Sorcery|Sorcerer||Aberrant Mind|TCE|6",
				"Psychic Defenses|Sorcerer||Aberrant Mind|TCE|6",
				"Revelation in Flesh|Sorcerer||Aberrant Mind|TCE|14",
				"Warping Implosion|Sorcerer||Aberrant Mind|TCE|18"
			]
		},
		{
			"name": "Clockwork Soul",
			"shortName": "Clockwork Soul",
			"source": "TCE",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 68,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"alarm",
							"protection from evil and good"
						],
						"3": [
							"aid",
							"lesser restoration"
						],
						"5": [
							"dispel magic",
							"protection from energy"
						],
						"7": [
							"freedom of movement",
							"summon construct|TCE"
						],
						"9": [
							"greater restoration",
							"wall of force"
						]
					}
				}
			],
			"subclassFeatures": [
				"Clockwork Soul|Sorcerer||Clockwork Soul|TCE|1",
				"Bastion of Law|Sorcerer||Clockwork Soul|TCE|6",
				"Trance of Order|Sorcerer||Clockwork Soul|TCE|14",
				"Clockwork Cavalcade|Sorcerer||Clockwork Soul|TCE|18"
			]
		},
		{
			"name": "Mage of Prismari (UA)",
			"shortName": "Prismari (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Sorcerer",
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
			"className": "Sorcerer",
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
			"name": "Lunar Magic (UA)",
			"shortName": "Lunar Magic (UA)",
			"source": "UA2022HeroesOfKrynn",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"name": "Full Moon",
					"known": {
						"1": [
							"faerie fire"
						],
						"3": [
							"moonbeam"
						],
						"5": [
							"death ward"
						],
						"7": [
							"freedom of movement"
						],
						"9": [
							"mass cure wounds"
						]
					}
				},
				{
					"name": "New Moon",
					"known": {
						"1": [
							"dissonant whispers"
						],
						"3": [
							"darkness"
						],
						"5": [
							"bestow curse"
						],
						"7": [
							"Evard's black tentacles"
						],
						"9": [
							"mislead"
						]
					}
				},
				{
					"name": "Crescent Moon",
					"known": {
						"1": [
							"sanctuary"
						],
						"3": [
							"blindness/deafness"
						],
						"5": [
							"phantom steed"
						],
						"7": [
							"hallucinatory terrain"
						],
						"9": [
							"dream"
						]
					}
				}
			],
			"subclassFeatures": [
				"Lunar Magic|Sorcerer||Lunar Magic (UA)|UA2022HeroesOfKrynn|1",
				"Lunar Boons|Sorcerer||Lunar Magic (UA)|UA2022HeroesOfKrynn|6",
				"Waxing and Waning|Sorcerer||Lunar Magic (UA)|UA2022HeroesOfKrynn|6",
				"Lunar Empowerment|Sorcerer||Lunar Magic (UA)|UA2022HeroesOfKrynn|14",
				"Lunar Phenomenon|Sorcerer||Lunar Magic (UA)|UA2022HeroesOfKrynn|18"
			]
		},
		{
			"name": "Lunar Sorcery",
			"shortName": "Lunar",
			"source": "DSotDQ",
			"className": "Sorcerer",
			"classSource": "PHB",
			"page": 34,
			"additionalSpells": [
				{
					"name": "Full Moon",
					"known": {
						"1": [
							"shield"
						],
						"3": [
							"ray of sickness"
						],
						"5": [
							"color spray"
						],
						"7": [
							"lesser restoration"
						],
						"9": [
							"blindness/deafness"
						]
					}
				},
				{
					"name": "New Moon",
					"known": {
						"1": [
							"alter self"
						],
						"3": [
							"dispel magic"
						],
						"5": [
							"vampiric touch"
						],
						"7": [
							"phantom steed"
						],
						"9": [
							"death ward"
						]
					}
				},
				{
					"name": "Crescent Moon",
					"known": {
						"1": [
							"confusion"
						],
						"3": [
							"hallucinatory terrain"
						],
						"5": [
							"Rary's telepathic bond"
						],
						"7": [
							"hold monster"
						],
						"9": [
							"mislead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Lunar Sorcery|Sorcerer||Lunar|DSotDQ|1",
				"Lunar Boons|Sorcerer||Lunar|DSotDQ|6",
				"Waxing and Waning|Sorcerer||Lunar|DSotDQ|6",
				"Lunar Empowerment|Sorcerer||Lunar|DSotDQ|14",
				"Lunar Phenomenon|Sorcerer||Lunar|DSotDQ|18"
			]
		}
	],
	"classFeature": [
		{
			"name": "Sorcerous Origin",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Choose a sorcerous origin, which describes the source of your innate magical power, from the list of available origins.",
				"Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
			]
		},
		{
			"name": "Spell Versatility",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level sorcerer feature (enhances Spellcasting)}",
				"Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the sorcerer spell list. The new spell must be the same level as the spell you replace."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter sorcerer spell list|spells|class=sorcerer}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn an additional sorcerer cantrip of your choice at 4th level and another at 10th level."
					]
				},
				{
					"type": "entries",
					"name": "Spell Slots",
					"entries": [
						"The Sorcerer table shows how many spell slots you have to cast your {@filter sorcerer spells|spells|class=sorcerer} of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell {@spell burning hands} and have a 1st-level and a 2nd-level spell slot available, you can cast {@spell burning hands} using either slot."
					]
				},
				{
					"type": "entries",
					"name": "Spells Known of 1st Level and Higher",
					"entries": [
						"You know two 1st-level spells of your choice from the sorcerer spell list.",
						"You learn an additional sorcerer spell of your choice at each level except 12th, 14th, 16th, 18th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
						"Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
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
						"You can use an {@item arcane focus|phb} as a spellcasting focus for your sorcerer spells."
					]
				}
			]
		},
		{
			"name": "Flexible Casting",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.",
				{
					"type": "entries",
					"name": "Creating Spell Slots",
					"entries": [
						"You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The created spell slots vanish at the end of a long rest. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.",
						{
							"type": "table",
							"caption": "Creating Spell Slots",
							"colLabels": [
								"Spell Slot Level",
								"Sorcery Point Cost"
							],
							"colStyles": [
								"col-6 text-center",
								"col-6 text-center"
							],
							"rows": [
								[
									"1st",
									"2"
								],
								[
									"2nd",
									"3"
								],
								[
									"3rd",
									"5"
								],
								[
									"4th",
									"6"
								],
								[
									"5th",
									"7"
								]
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Converting a Spell Slot to Sorcery Points",
					"entries": [
						"As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
					]
				}
			]
		},
		{
			"name": "Font of Magic",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.",
				{
					"type": "refClassFeature",
					"classFeature": "Sorcery Points|Sorcerer||2"
				},
				{
					"type": "refClassFeature",
					"classFeature": "Flexible Casting|Sorcerer||2"
				}
			]
		},
		{
			"name": "Font of Magic Options",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level sorcerer feature (enhances Font of Magic)}",
				"When you gain the Font of Magic feature, you get access to the following ways to spend your sorcery points.",
				{
					"type": "refClassFeature",
					"classFeature": "Empowering Reserves|Sorcerer|UAClassFeatureVariants|2"
				},
				{
					"type": "refClassFeature",
					"classFeature": "Imbuing Touch|Sorcerer|UAClassFeatureVariants|2"
				},
				{
					"type": "refClassFeature",
					"classFeature": "Sorcerous Fortitude|Sorcerer|UAClassFeatureVariants|2"
				}
			]
		},
		{
			"name": "Sorcery Points",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"You have 2 sorcery points, and you gain one additional point every time you level up, to a maximum of 20 at level 20. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
			]
		},
		{
			"name": "Metamagic",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
				"You can use only one Metamagic option on a spell when you cast it, unless otherwise noted.",
				{
					"type": "options",
					"count": 2,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Careful Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Distant Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Empowered Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Extended Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Heightened Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Quickened Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Subtle Spell"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Twinned Spell"
						}
					]
				}
			]
		},
		{
			"name": "Metamagic Options",
			"source": "TCE",
			"page": 65,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level sorcerer {@variantrule optional class features|tce|optional feature}}",
				"When you choose Metamagic options, you have access to the following additional options.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Seeking Spell|TCE"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Transmuted Spell|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Metamagic Options",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 3,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 3rd-level sorcerer feature (enhances Metamagic)}",
				"When you choose Metamagic options, you have access to the following additional options.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Elemental Spell|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Seeking Spell|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Unerring Spell|UAClassFeatureVariants"
						}
					]
				}
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
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
			"className": "Sorcerer",
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
			"name": "Sorcerous Versatility",
			"source": "TCE",
			"page": 65,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level sorcerer {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing the magic within you flowing in new ways:",
				{
					"type": "list",
					"items": [
						"Replace one of the options you chose for the Metamagic feature with a different {@filter Metamagic option|optionalfeatures|Feature Type=MM} available to you.",
						"Replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the {@filter sorcerer spell list|spells|level=0|class=Sorcerer}."
					]
				}
			]
		},
		{
			"name": "Magical Guidance",
			"source": "TCE",
			"page": 65,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 5,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"{@i 5th-level sorcerer {@variantrule optional class features|tce|optional feature}}",
				"You can tap into your inner wellspring of magic to try to conjure success from failure. When you make an ability check that fails, you can spend 1 sorcery point to reroll the {@dice d20}, and you must use the new roll, potentially turning the failure into a success."
			]
		},
		{
			"name": "Sorcerous Origin feature",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature granted by your Sorcerous Origin."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
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
			"className": "Sorcerer",
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
			"name": "Metamagic",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you learn an additional metamagic option."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
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
			"className": "Sorcerer",
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
			"name": "Sorcerous Origin feature",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature granted by your Sorcerous Origin."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
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
			"className": "Sorcerer",
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
			"name": "Metamagic",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, you learn an additional metamagic option."
			]
		},
		{
			"name": "Sorcerous Origin feature",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"At 18th level, you gain a feature granted by your Sorcerous Origin."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
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
			"className": "Sorcerer",
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
			"name": "Sorcerous Restoration",
			"source": "PHB",
			"page": 99,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
			]
		},
		{
			"name": "Empowering Reserves",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Sorcerer",
			"classSource": "UAClassFeatureVariants",
			"level": 2,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 2
			},
			"entries": [
				"When you make an ability check on your turn, you can spend 2 sorcery points to gain advantage on the check."
			]
		},
		{
			"name": "Imbuing Touch",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Sorcerer",
			"classSource": "UAClassFeatureVariants",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"As an action, you can touch one nonmagical weapon and spend 2 sorcery points to imbue it with magic for 1 minute. For the duration, the weapon is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks."
			]
		},
		{
			"name": "Sorcerous Fortitude",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Sorcerer",
			"classSource": "UAClassFeatureVariants",
			"level": 2,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"As an action, you can spend any number of sorcery points to roll a {@dice d4} for each point expended. You gain a number of temporary hit points equal to the total rolled."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Lunar Sorcery",
			"source": "DSotDQ",
			"page": 34,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar",
			"subclassSource": "DSotDQ",
			"level": 1,
			"entries": [
				"On many worlds, the moon is a revered celestial body with magical properties. On Krynn, the gods of magic are associated with the world's three moons. On the world of Toril, the god Selûne uses the light of the moon to battle darkness. On Eberron, scholars of the Draconic Prophecy decipher ancient secrets from the waxing and waning of that world's twelve moons.",
				"You or someone from your lineage has been exposed to the concentrated magic of the moon (or moons) of your world, imbuing you with lunar magic. Perhaps your ancestor was involved in a druidic ritual involving an eclipse, or maybe a mystical fragment of a moon crashed near you. However you came to have your magic, your connection to the moon is obvious when you cast sorcerer spells\u2014perhaps making your pupils glow with the color of a moon from your world, causing spectral manifestations of lunar phases to orbit you, or some other effect.",
				{
					"type": "entries",
					"name": "Lunar Embodiment",
					"entries": [
						"{@i 1st-Level Lunar Sorcery Feature}",
						"You learn additional spells when you reach certain levels in this class, as shown on the Lunar Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
						{
							"type": "table",
							"caption": "Lunar Spells",
							"colLabels": [
								"Sorcerer Level",
								"Full Moon Spell",
								"New Moon Spell",
								"Crescent Moon Spell"
							],
							"colStyles": [
								"col-1-1 text-center",
								"col-3-3",
								"col-3-3",
								"col-3-3"
							],
							"rows": [
								[
									"1st",
									"{@spell shield}",
									"{@spell ray of sickness}",
									"{@spell color spray}"
								],
								[
									"3rd",
									"{@spell lesser restoration}",
									"{@spell blindness/deafness}",
									"{@spell alter self}"
								],
								[
									"5th",
									"{@spell dispel magic}",
									"{@spell vampiric touch}",
									"{@spell phantom steed}"
								],
								[
									"7th",
									"{@spell death ward}",
									"{@spell confusion}",
									"{@spell hallucinatory terrain}"
								],
								[
									"9th",
									"{@spell Rary's telepathic bond}",
									"{@spell hold monster}",
									"{@spell mislead}"
								]
							]
						},
						"Whenever you finish a long rest, you can choose what lunar phase manifests its power through your magic: Full Moon, New Moon, or Crescent Moon. While in the chosen phase, you can cast one 1st-level spell of the associated phase in the Lunar Spells table once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
					]
				},
				{
					"type": "entries",
					"name": "Moon Fire",
					"entries": [
						"{@i 1st-Level Lunar Sorcery Feature}",
						"You can call down the radiant light of the moon on command. You learn the {@spell sacred flame} spell, which doesn't count against the number of sorcerer cantrips you know. When you cast the spell, you can target one creature as normal or target two creatures within range that are within 5 feet of each other."
					]
				}
			]
		},
		{
			"name": "Lunar Boons",
			"source": "DSotDQ",
			"page": 34,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar",
			"subclassSource": "DSotDQ",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-Level Lunar Sorcery Feature}",
				"The current phase of your Lunar Embodiment can affect your Metamagic feature. Each Lunar Embodiment phase is associated with certain schools of magic, as shown here:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Full Moon",
							"entries": [
								"{@filter Abjuration and divination spells|spells|class=sorcerer|school=A;D}"
							]
						},
						{
							"type": "item",
							"name": "New Moon",
							"entries": [
								"{@filter Enchantment and necromancy spells|spells|class=sorcerer|school=E;N}"
							]
						},
						{
							"type": "item",
							"name": "Crescent Moon",
							"entries": [
								"{@filter Illusion and transmutation spells|spells|class=sorcerer|school=I;T}"
							]
						}
					]
				},
				"Whenever you use Metamagic on a spell of a school of magic associated with your current Lunar Embodiment phase, you can reduce the sorcery points spent by 1 (minimum 0). You can reduce the sorcery points spent for your Metamagic a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Waxing and Waning",
			"source": "DSotDQ",
			"page": 35,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar",
			"subclassSource": "DSotDQ",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"{@i 6th-Level Lunar Sorcery Feature}",
				"You gain greater control over the phases of your lunar magic. As a bonus action, you can spend 1 sorcery point to change your current Lunar Embodiment phase to a different one.",
				"You can now cast one 1st-level spell from each lunar phase of the Lunar Spells table once without expending a spell slot, provided your current phase is the same as the lunar phase spell. Once you cast a lunar phase spell in this way, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "Lunar Empowerment",
			"source": "DSotDQ",
			"page": 35,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar",
			"subclassSource": "DSotDQ",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-Level Lunar Sorcery Feature}",
				"The power of a lunar phase saturates your being. While you are in a Lunar Embodiment phase, you also gain the following benefit associated with that phase:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Full Moon",
							"entries": [
								"You can use a bonus action to shed bright light in a 10-foot radius and dim light for an additional 10 feet or to douse the light. In addition, you and creatures of your choice have advantage on Intelligence ({@skill Investigation}) and Wisdom ({@skill Perception}) checks while within the bright light you shed."
							]
						},
						{
							"type": "item",
							"name": "New Moon",
							"entries": [
								"You have advantage on Dexterity ({@skill Stealth}) checks. In addition, while you are entirely in darkness, attack rolls have disadvantage against you."
							]
						},
						{
							"type": "item",
							"name": "Crescent Moon",
							"entries": [
								"You have resistance to necrotic and radiant damage."
							]
						}
					]
				}
			]
		},
		{
			"name": "Lunar Phenomenon",
			"source": "DSotDQ",
			"page": 35,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar",
			"subclassSource": "DSotDQ",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-Level Lunar Sorcery feature}",
				"As a bonus action, you can tap into a special power of your current Lunar Embodiment phase. Alternatively, as part of the bonus action you take to change your lunar phase using the Waxing and Waning feature, you can immediately use the power of the lunar phase you are entering:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Full Moon",
							"entries": [
								"You radiate moonlight for a moment. Each creature of your choice within 30 feet of you must succeed on a Constitution saving throw against your spell save DC or be {@condition blinded} until the end of its next turn. In addition, one creature of your choice in that area regains {@dice 3d8} hit points."
							]
						},
						{
							"type": "item",
							"name": "New Moon",
							"entries": [
								"You momentarily emanate gloom. Each creature of your choice within 30 feet of you must succeed on a Dexterity saving throw against your spell save DC or take {@damage 3d10} necrotic damage and have its speed reduced to 0 until the end of its next turn. In addition, you become {@condition invisible} until the end of your next turn, or until immediately after you make an attack roll or cast a spell."
							]
						},
						{
							"type": "item",
							"name": "Crescent Moon",
							"entries": [
								"You can magically teleport to an unoccupied space you can see within 60 feet of yourself. You can bring along one willing creature you can see within 5 feet of yourself. That creature teleports to an unoccupied space of your choice that you can see within 5 feet of your destination space. In addition, you and that creature gain resistance to all damage until the start of your next turn."
							]
						}
					]
				},
				"Once you use one of these bonus action benefits, you can't use that benefit again until you finish a long rest, unless you spend 5 sorcery points to use it again."
			]
		},
		{
			"name": "Draconic Bloodline",
			"source": "PHB",
			"page": 102,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Draconic",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dragon Ancestor|Sorcerer||Draconic||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Draconic Resilience|Sorcerer||Draconic||1"
				}
			]
		},
		{
			"name": "Draconic Resilience",
			"source": "PHB",
			"page": 102,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Draconic",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.",
				"Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
			]
		},
		{
			"name": "Dragon Ancestor",
			"source": "PHB",
			"page": 102,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Draconic",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
				{
					"type": "table",
					"caption": "Draconic Ancestry",
					"colLabels": [
						"Dragon",
						"Damage Type"
					],
					"colStyles": [
						"col-6 text-center",
						"col-6 text-center"
					],
					"rows": [
						[
							"Black",
							"{@filter Acid|spells|damage type=acid|class=sorcerer}"
						],
						[
							"Blue",
							"{@filter Lightning|spells|damage type=lightning|class=sorcerer}"
						],
						[
							"Brass",
							"{@filter Fire|spells|damage type=fire|class=sorcerer}"
						],
						[
							"Bronze",
							"{@filter Lightning|spells|damage type=lightning|class=sorcerer}"
						],
						[
							"Copper",
							"{@filter Acid|spells|damage type=acid|class=sorcerer}"
						],
						[
							"Gold",
							"{@filter Fire|spells|damage type=fire|class=sorcerer}"
						],
						[
							"Green",
							"{@filter Poison|spells|damage type=poison|class=sorcerer}"
						],
						[
							"Red",
							"{@filter Fire|spells|damage type=fire|class=sorcerer}"
						],
						[
							"Silver",
							"{@filter Cold|spells|damage type=cold|class=sorcerer}"
						],
						[
							"White",
							"{@filter Cold|spells|damage type=cold|class=sorcerer}"
						]
					]
				},
				"You can speak, read, and write {@language Draconic}. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
			]
		},
		{
			"name": "Elemental Affinity",
			"source": "PHB",
			"page": 102,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Draconic",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, you can add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
			]
		},
		{
			"name": "Dragon Wings",
			"source": "PHB",
			"page": 102,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Draconic",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
				"You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
			]
		},
		{
			"name": "Draconic Presence",
			"source": "PHB",
			"page": 102,
			"srd": true,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Draconic",
			"subclassSource": "PHB",
			"level": 18,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 5
			},
			"entries": [
				"Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or {@condition frightened}. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your {@status concentration} (as if you were casting a {@status concentration} spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be {@condition charmed} (if you chose awe) or {@condition frightened} (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
			]
		},
		{
			"name": "Wild Magic",
			"source": "PHB",
			"page": 103,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Wild",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wild Magic Surge|Sorcerer||Wild||1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tides of Chaos|Sorcerer||Wild||1"
				}
			]
		},
		{
			"name": "Tides of Chaos",
			"source": "PHB",
			"page": 103,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Wild",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.",
				"Any time before you regain the use of this feature, the DM can have you roll on the {@table Wild Magic Surge|PHB} table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
			]
		},
		{
			"name": "Wild Magic Surge",
			"source": "PHB",
			"page": 103,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Wild",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a {@dice d20}. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect. A Wild Magic Surge can happen once per turn.",
				"If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires {@status concentration}, it doesn't require {@status concentration} in this case; the spell lasts for its full duration.",
				{
					"type": "table",
					"caption": "Wild Magic Surge",
					"colLabels": [
						"{@dice d100}",
						"Effect"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"01-02",
							"Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls."
						],
						[
							"03-04",
							"For the next minute, you can see any {@condition invisible} creature if you have line of sight to it."
						],
						[
							"05-06",
							"A {@filter modron|bestiary|source=mm|search=modron} chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later."
						],
						[
							"07-08",
							"You cast {@spell fireball} as a 3rd-level spell centered on yourself."
						],
						[
							"09-10",
							"You cast {@spell magic missile} as a 5th-level spell."
						],
						[
							"11-12",
							"Roll a {@dice d10}. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow."
						],
						[
							"13-14",
							"You cast {@spell confusion} centered on yourself."
						],
						[
							"15-16",
							"For the next minute, you regain 5 hit points at the start of each of your turns."
						],
						[
							"17-18",
							"You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face."
						],
						[
							"19-20",
							"You cast {@spell grease} centered on yourself."
						],
						[
							"21-22",
							"Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw."
						],
						[
							"23-24",
							"Your skin turns a vibrant shade of blue. A {@spell remove curse} spell can end this effect."
						],
						[
							"25-26",
							"An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom ({@skill Perception}) checks that rely on sight."
						],
						[
							"27-28",
							"For the next minute, all your spells with a casting time of 1 action have a casting time of 1 bonus action."
						],
						[
							"29-30",
							"You teleport up to 60 feet to an unoccupied space of your choice that you can see."
						],
						[
							"31-32",
							"You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied."
						],
						[
							"33-34",
							"Maximize the damage of the next damaging spell you cast within the next minute."
						],
						[
							"35-36",
							"Roll a {@dice d10}. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older."
						],
						[
							"37-38",
							"{@dice 1d6} {@creature flumph||flumphs} controlled by the DM appear in unoccupied spaces within 60 feet of you and are {@condition frightened} of you. They vanish after 1 minute."
						],
						[
							"39-40",
							"You regain {@dice 2d10} hit points."
						],
						[
							"41-42",
							"You turn into a potted plant until the start of your next turn. While a plant, you are {@condition incapacitated} and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts."
						],
						[
							"43-44",
							"For the next minute, you can teleport up to 20 feet as a bonus action on each of your turns."
						],
						[
							"45-46",
							"You cast {@spell levitate} on yourself."
						],
						[
							"47-48",
							"A {@creature unicorn} controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later."
						],
						[
							"49-50",
							"You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth."
						],
						[
							"51-52",
							"A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to {@spell magic missile}."
						],
						[
							"53-54",
							"You are immune to being intoxicated by alcohol for the next {@dice 5d6} days."
						],
						[
							"55-56",
							"Your hair falls out but grows back within 24 hours."
						],
						[
							"57-58",
							"For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame."
						],
						[
							"59-60",
							"You regain your lowest-level expended spell slot."
						],
						[
							"61-62",
							"For the next minute, you must shout when you speak."
						],
						[
							"63-64",
							"You cast {@spell fog cloud} centered on yourself."
						],
						[
							"65-66",
							"Up to three creatures you choose within 30 feet of you take {@damage 4d10} lightning damage."
						],
						[
							"67-68",
							"You are {@condition frightened} by the nearest creature until the end of your next turn."
						],
						[
							"69-70",
							"Each creature within 30 feet of you becomes {@condition invisible} for the next minute. The invisibility ends on a creature when it attacks or casts a spell."
						],
						[
							"71-72",
							"You gain resistance to all damage for the next minute."
						],
						[
							"73-74",
							"A random creature within 60 feet of you becomes {@condition poisoned} for {@dice 1d4} hours."
						],
						[
							"75-76",
							"You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is {@condition blinded} until the end of its next turn."
						],
						[
							"77-78",
							"You cast {@spell polymorph} on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration."
						],
						[
							"79-80",
							"Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute."
						],
						[
							"81-82",
							"You can take one additional action immediately."
						],
						[
							"83-84",
							"Each creature within 30 feet of you takes {@damage 1d10} necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt."
						],
						[
							"85-86",
							"You cast {@spell mirror image}."
						],
						[
							"87-88",
							"You cast {@spell fly} on a random creature within 60 feet of you."
						],
						[
							"89-90",
							"You become {@condition invisible} for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell."
						],
						[
							"91-92",
							"If you die within the next minute, you immediately come back to life as if by the {@spell reincarnate} spell."
						],
						[
							"93-94",
							"Your size increases by one size category for the next minute."
						],
						[
							"95-96",
							"You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute."
						],
						[
							"97-98",
							"You are surrounded by faint, ethereal music for the next minute."
						],
						[
							"99-00",
							"You regain all expended sorcery points."
						]
					],
					"data": {
						"tableInclude": true
					}
				}
			]
		},
		{
			"name": "Bend Luck",
			"source": "PHB",
			"page": 103,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Wild",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 2
			},
			"entries": [
				"Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll {@dice 1d4} and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur."
			]
		},
		{
			"name": "Controlled Chaos",
			"source": "PHB",
			"page": 103,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Wild",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the {@table Wild Magic Surge|PHB} table, you can roll twice and use either number."
			]
		},
		{
			"name": "Spell Bombardment",
			"source": "PHB",
			"page": 103,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Wild",
			"subclassSource": "PHB",
			"level": 18,
			"header": 2,
			"entries": [
				"Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn."
			]
		},
		{
			"name": "Pyromancer (PSK)",
			"source": "PSK",
			"page": 9,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Pyromancer (PSK)",
			"subclassSource": "PSK",
			"level": 1,
			"entries": [
				"Your innate magic manifests in fire. You are your fire, and your fire is you.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Heart of Fire|Sorcerer||Pyromancer (PSK)|PSK|1"
				}
			]
		},
		{
			"name": "Heart of Fire",
			"source": "PSK",
			"page": 9,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Pyromancer (PSK)",
			"subclassSource": "PSK",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, whenever you start casting a spell of 1st level or higher that deals fire damage, fiery magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take fire damage equal to half your sorcerer level (minimum of 1)."
			]
		},
		{
			"name": "Fire in the Veins",
			"source": "PSK",
			"page": 9,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Pyromancer (PSK)",
			"subclassSource": "PSK",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain resistance to fire damage. In addition, spells you cast ignore resistance to fire damage."
			]
		},
		{
			"name": "Pyromancer's Fury",
			"source": "PSK",
			"page": 9,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Pyromancer (PSK)",
			"subclassSource": "PSK",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal fire damage to the attacker. The damage equals your sorcerer level, and ignores resistance to fire damage."
			]
		},
		{
			"name": "Fiery Soul",
			"source": "PSK",
			"page": 9,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Pyromancer (PSK)",
			"subclassSource": "PSK",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you gain immunity to fire damage. In addition, any spell or effect you create ignores resistance to fire damage and treats immunity to fire damage as resistance to fire damage."
			]
		},
		{
			"name": "Aberrant Mind",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"An alien influence has wrapped its tendrils around your mind, giving you psionic power. You can now touch other minds with that power and alter the world around you by using it to control the magical energy of the multiverse. Will this power shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the strange manifestations of your might?",
				"As an Aberrant Mind sorcerer, you decide how you acquired your powers. Were you born with them? Or did an event later in life leave you shining with psionic awareness? Consult the Aberrant Origins table for a possible origin of your power.",
				{
					"type": "table",
					"caption": "Aberrant Origins",
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
							"You were exposed to the Far Realm's warping influence. You are convinced that a tentacle is now growing on you, but no one else can see it."
						],
						[
							"2",
							"A psychic wind from the Astral Plane carried psionic energy to you. When you use your powers, faint motes of light sparkle around you."
						],
						[
							"3",
							"You once suffered the dominating powers of an aboleth, leaving a psychic splinter in your mind."
						],
						[
							"4",
							"You were implanted with a mind flayer tadpole, but the ceremorphosis never completed. And now its psionic power is yours. When you use it, your flesh shines with a strange mucus."
						],
						[
							"5",
							"As a child, you had an imaginary friend that looked like a flumph or a strange platypus-like creature. One day, it gifted you with psionic powers, which have ended up being not so imaginary."
						],
						[
							"6",
							"Your nightmares whisper the truth to you: your psionic powers are not your own. You draw them from your parasitic twin!"
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Spells|Sorcerer||Aberrant Mind|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Telepathic Speech|Sorcerer||Aberrant Mind|TCE|1"
				}
			]
		},
		{
			"name": "Psionic Spells",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Aberrant Mind feature}",
				"You learn additional spells when you reach certain levels in this class, as shown on the Psionic Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
				"Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be a {@filter divination or an enchantment spell from the sorcerer, warlock, or wizard spell list|spells|class=sorcerer;warlock;wizard|school=D;E|level=1;2;3;4;5}.",
				{
					"type": "table",
					"caption": "Psionic Spells",
					"colLabels": [
						"Sorcerer Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell arms of Hadar}, {@spell dissonant whispers}, {@spell mind sliver|tce}"
						],
						[
							"3rd",
							"{@spell calm emotions}, {@spell detect thoughts}"
						],
						[
							"5th",
							"{@spell hunger of Hadar}, {@spell sending}"
						],
						[
							"7th",
							"{@spell Evard's black tentacles}, {@spell summon aberration|TCE}"
						],
						[
							"9th",
							"{@spell Rary's telepathic bond}, {@spell telekinesis}"
						]
					]
				}
			]
		},
		{
			"name": "Telepathic Speech",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Aberrant Mind feature}",
				"You can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see within 30 feet of you. You and the chosen creature can speak telepathically with each other while the two of you are within a number of miles of each other equal to your Charisma modifier (minimum of 1 mile). To understand each other, you each must speak mentally in a language the other knows.",
				"The telepathic connection lasts for a number of minutes equal to your sorcerer level. It ends early if you are {@condition incapacitated} or die or if you use this ability to form a connection with a different creature."
			]
		},
		{
			"name": "Psionic Sorcery",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Aberrant Mind feature}",
				"When you cast any spell of 1st level or higher from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level.",
				"If you cast the spell using sorcery points, it requires no verbal or somatic components, and it requires no material components, unless they are consumed by the spell."
			]
		},
		{
			"name": "Psychic Defenses",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Aberrant Mind feature}",
				"You gain resistance to psychic damage, and you have advantage on saving throws against being {@condition charmed} or {@condition frightened}."
			]
		},
		{
			"name": "Revelation in Flesh",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Aberrant Mind feature}",
				"You can unleash the aberrant truth hidden within yourself. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 10 minutes. For each sorcery point you spend, you can gain one of the following benefits of your choice, the effects of which last until the transformation ends:",
				{
					"type": "list",
					"items": [
						"You can see any {@condition invisible} creature within 60 feet of you, provided it isn't behind total cover. Your eyes also turn black or become writhing sensory tendrils.",
						"You gain a flying speed equal to your walking speed, and you can hover. As you fly, your skin glistens with mucus or shines with an otherworldly light.",
						"You gain a swimming speed equal to twice your walking speed, and you can breathe underwater. Moreover, gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow writhing cilia that extend through your clothing.",
						"Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being {@condition grappled}."
					]
				}
			]
		},
		{
			"name": "Warping Implosion",
			"source": "TCE",
			"page": 66,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind",
			"subclassSource": "TCE",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Aberrant Mind feature}",
				"You can unleash your aberrant power as a space-warping anomaly. As an action, you can teleport to an unoccupied space you can see within 120 feet of you. Immediately after you disappear, each creature within 30 feet of the space you left must make a Strength saving throw against your spell save DC. On a failed save, a creature takes {@damage 3d10} force damage and is pulled straight toward the space you left, ending in an unoccupied space as close to your former space as possible. On a successful save, the creature takes half as much damage and isn't pulled.",
				"Once you use this feature, you can't do so again until you finish a long rest, unless you spend 5 sorcery points to use it again."
			]
		},
		{
			"name": "Clockwork Soul",
			"source": "TCE",
			"page": 68,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"The cosmic force of order has suffused you with magic. That power arises from Mechanus or a realm like it-a plane of existence shaped entirely by clockwork efficiency. You, or someone from your lineage, might have become entangled in the machinations of the modrons, the orderly beings who inhabit Mechanus. Perhaps your ancestor even took part in the Great Modron March. Whatever its origin within you, the power of order can seem strange to others, but for you, it is part of a vast and glorious system.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Clockwork Magic|Sorcerer||Clockwork Soul|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Restore Balance|Sorcerer||Clockwork Soul|TCE|1"
				}
			]
		},
		{
			"name": "Clockwork Magic",
			"source": "TCE",
			"page": 68,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Clockwork Soul feature}",
				"You learn additional spells when you reach certain levels in this class, as shown on the Clockwork Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
				"Whenever you gain a sorcerer level, you can replace one spell you gained from this feature with another spell of the same level. The new spell must be an {@filter abjuration or a transmutation spell from the sorcerer, warlock, or wizard spell list|spells|class=sorcerer;warlock;wizard|school=A;T|level=1;2;3;4;5}.",
				{
					"type": "table",
					"caption": "Clockwork Spells",
					"colLabels": [
						"Sorcerer Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell alarm}, {@spell protection from evil and good}"
						],
						[
							"3rd",
							"{@spell aid}, {@spell lesser restoration}"
						],
						[
							"5th",
							"{@spell dispel magic}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell freedom of movement}, {@spell summon construct|TCE}"
						],
						[
							"9th",
							"{@spell greater restoration}, {@spell wall of force}"
						]
					]
				},
				"In addition, consult the Manifestations of Order table and choose or randomly determine a way your connection to order manifests while you are casting any of your sorcerer spells.",
				{
					"type": "table",
					"caption": "Manifestations of Order",
					"colLabels": [
						"d6",
						"Manifestation"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Spectral cogwheels hover behind you."
						],
						[
							"2",
							"The hands of a clock spin in your eyes."
						],
						[
							"3",
							"Your skin glows with a brassy sheen."
						],
						[
							"4",
							"Floating equations and geometric objects overlay your body."
						],
						[
							"5",
							"Your spellcasting focus temporarily takes the form of a Tiny clockwork mechanism."
						],
						[
							"6",
							"The ticking of gears or ringing of a clock can be heard by you and those affected by your magic."
						]
					]
				}
			]
		},
		{
			"name": "Restore Balance",
			"source": "TCE",
			"page": 68,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Clockwork Soul feature}",
				"Your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a {@dice d20} with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage.",
				"You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Bastion of Law",
			"source": "TCE",
			"page": 68,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"{@i 6th-level Clockwork Soul feature}",
				"You can tap into the grand equation of existence to imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.",
				"The ward is represented by a number of {@dice d8}s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can expend a number of those dice, roll them, and reduce the damage taken by the total rolled on those dice."
			]
		},
		{
			"name": "Trance of Order",
			"source": "TCE",
			"page": 68,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Clockwork Soul feature}",
				"You gain the ability to align your consciousness to the endless calculations of Mechanus. As a bonus action, you can enter this state for 1 minute. For the duration, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a roll of 9 or lower on the {@dice d20} as a 10.",
				"Once you use this bonus action, you can't use it again until you finish a long rest, unless you spend 5 sorcery points to use it again."
			]
		},
		{
			"name": "Clockwork Cavalcade",
			"source": "TCE",
			"page": 68,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul",
			"subclassSource": "TCE",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Clockwork Soul feature}",
				"You summon spirits of order to expunge disorder around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, and they create the following effects within the cube before vanishing:",
				{
					"type": "list",
					"items": [
						"The spirits restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.",
						"Any damaged objects entirely in the cube are repaired instantly.",
						"Every spell of 6th level or lower ends on creatures and objects of your choice in the cube."
					]
				},
				"Once you use this action, you can't use it again until you finish a long rest, unless you spend 7 sorcery points to use it again."
			]
		},
		{
			"name": "Psionic Soul",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Psionic Soul (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 1,
			"entries": [
				"One day a light blazed forth within you\u2014the illumination of psionic power. Your mind now simmers with this power, the full extent of which you won't fully grasp for years to come. You can touch other minds with it and alter the world around you by using it to control the magical energy of the multiverse. Will this power shine from you as a hopeful beacon to others? Or will you be a source of terror to those who feel the stab of your mind and witness the strange manifestations of your might?",
				"Among githyanki and githzerai, the powers of Psionic Soul sorcerers are revered and marshaled on both sides of the gith war. In Eberron, many kalashtar dream of discovering this origin's abilities within themselves, and in Athas, more sorcerers are born with a Psionic Soul than with any other source of power. In the glades of primeval woods touched by the Feywild, children sometimes awaken to the wonders of psionic power. And in communities that survive Far Realm incursions, some folk are mutated into horrific aberrations, while a lucky few not only remain themselves, but also discover that psionic energy now suffuses their minds.",
				"As a Psionic Soul sorcerer, you decide how you acquired your powers. Were you born with them, and did they manifest throughout childhood? Or did an extraordinary event later in life leave you shining with psionic awareness? Consult the Psionic Origins table for a possible origin of your power.",
				{
					"type": "table",
					"caption": "Psionic Origins",
					"colLabels": [
						"d10",
						"Origin"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							1,
							"You were exposed to the Far Realm's warping influence. You can now use your mind in ways you never thought possible, and you're also convinced that a tendril is growing upon you."
						],
						[
							2,
							"A psychic wind from the Astral Plane carried psionic energy into your being. When you use your powers now, faint motes of light sparkle around you."
						],
						[
							3,
							"You or your ancestor were trained by a githzerai monk to unlock the psionic potential within yourself."
						],
						[
							4,
							"A spirit haunts your mind, lending incredible power to your thoughts. When you sleep, the spirit's memories invade your dreams."
						],
						[
							5,
							"Deep in a forest touched by the Feywild, you drank from a glimmering stream, and now your mind shines with power. Beasts and fey creatures are often now friendly to you, as if they can sense the light within you."
						],
						[
							6,
							"Upon recovering from a near-fatal injury, you found yourself with psionic powers. Whenever you use them, your old wound tingles."
						],
						[
							7,
							"You were implanted with a mind flayer tadpole, but the ceremorphosis never completed. And now the psionic power is yours. When you use it, your flesh shines with a strange mucus."
						],
						[
							8,
							"As a child, you had an imaginary friend that looked like a flumph or a strange platypuslike creature. One day, it gifted you with psionic powers, which have ended up being not so imaginary."
						],
						[
							9,
							"Your nightmares whisper the truth to you: your psionic powers are not your own. You draw them from your vestigial twin!"
						],
						[
							10,
							"You grew up near the lair of a sapphire dragon, and now your eyes glow with sapphire light when you use your newfound powers."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Talent|Sorcerer||Psionic Soul (UA)|UA2020PsionicOptionsRevisited|1"
				}
			]
		},
		{
			"name": "Psionic Talent",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Psionic Soul (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Psionic Soul feature}",
				"You harbor a wellspring of psionic power within yourself, an energy that ebbs and flows as you channel it in various ways. This power is represented by your Psionic Talent die, the starting size of which is a {@dice d6}.",
				{
					"type": "entries",
					"name": "Psionic Talent Options",
					"entries": [
						"You can use your Psionic Talent die in the following ways:",
						{
							"type": "list",
							"style": "list-hang-notitle",
							"items": [
								{
									"type": "item",
									"name": "Psionic Discovery",
									"entry": "You can unlock the ability to cast a mind-oriented sorcerer spell you don't already know. After meditating for 10 minutes (which can be done during a rest), roll your Psionic Talent die, and choose a sorcerer spell of a level for which you have spell slots and that is in the school of divination or enchantment. You know the chosen spell for a number of hours equal to the number you rolled."
								},
								{
									"type": "item",
									"name": "Psychic Sorcery",
									"entry": "When you cast a spell, you can use your mind to form it, rather than relying on words, gestures, and materials. To do so, roll your Psionic Talent die. The spell then requires no verbal component, and if you rolled the level of the spell or higher, the spell doesn't require somatic or material components either."
								},
								{
									"type": "item",
									"name": "Telepathic Speech",
									"entry": "You can form a telepathic connection between your mind and the mind of another. As a bonus action, choose one creature you can see, and roll your Psionic Talent die. For a number of hours equal to the number you rolled, you and the chosen creature can speak telepathically with each other while the two of you are within a number of miles of each other equal to the number you rolled. To understand each other, you each must speak mentally in a language the other knows. The telepathic connection ends early if you use this ability to form a connection with a different creature."
								}
							]
						}
					]
				},
				{
					"type": "entries",
					"name": "Changing the Die's Size",
					"entries": [
						"If you roll the highest number on your Psionic Talent die, it decreases by one die size after the roll. This represents you burning through your psionic energy. For example, if the die is a {@dice d6} and you roll a 6, it becomes a {@dice d4}. If it's a {@dice d4} and you roll a 4, it becomes unusable until you finish a long rest.",
						"Conversely, if you roll a 1 on your Psionic Talent die, it increases by one die size after the roll, up to its starting size. This represents you conserving psionic energy for later use. For example, if you roll a 1 on a {@dice d4}, the die then becomes a {@dice d6}.",
						"Whenever you finish a long rest, your Psionic Talent die resets to its starting size. When you reach certain levels in this class, the starting size of your Psionic Talent die increases: at 5th level ({@dice d8}), 11th level ({@dice d10}), and 17th level ({@dice d12})."
					]
				},
				{
					"type": "entries",
					"name": "Psi Replenishment",
					"entries": [
						"As a bonus action, you can calm your mind for a moment and restore your Psionic Talent die to its starting size. You then can't use Psi Replenishment again until you finish a long rest."
					]
				}
			]
		},
		{
			"name": "Psychic Strike",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Psionic Soul (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Psionic Soul feature}",
				"You have learned to channel additional psychic energy into your spells. Immediately after you deal damage to a creature with a sorcerer spell for which you expend a spell slot, you can roll your Psionic Talent die and also deal psychic damage to that creature equal to the number rolled. You can deal this extra damage only once per turn."
			]
		},
		{
			"name": "Mind Over Body",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Psionic Soul (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Psionic Soul feature}",
				"You can now use the psi that flows through you to give your body extraordinary abilities. As a bonus action, you can roll your Psionic Talent die and spend 1 or more sorcery points to magically transform yourself for a number of hours equal to the number rolled. Until the transformation ends, you gain one of the following benefits of your choice for each sorcery point you spent, choosing a different benefit for each point:",
				{
					"type": "list",
					"items": [
						"You can see any {@condition invisible} creature within 60 feet of you, provided it isn't behind total cover.",
						"You gain a flying speed equal to your walking speed, and you can hover.",
						"You gain a swimming speed equal to twice your walking speed, and you can breathe underwater.",
						"Your body, along with any equipment you are wearing or carrying, becomes pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being {@condition grappled}."
					]
				}
			]
		},
		{
			"name": "Psychic Aura",
			"source": "UA2020PsionicOptionsRevisited",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Psionic Soul (UA)",
			"subclassSource": "UA2020PsionicOptionsRevisited",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Psionic Soul feature}",
				"If your Psionic Talent die is available, you can unleash your psionic power in a crackling aura of psychic energy; as a bonus action, you can magically radiate this transparent, 30-foot-radius aura for 1 minute or until you're {@condition incapacitated} or lose the use of your Psionic Talent die.",
				"Whenever a creature starts its turn in the aura or moves into it for the first time on a turn, you can roll your Psionic Talent die and deal psychic damage to the creature, equaling the number rolled plus your Charisma modifier. If the creature takes any of this damage, its speed is halved until the start of its next turn."
			]
		},
		{
			"name": "Clockwork Soul",
			"source": "UA2020SubclassesPt2",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"entries": [
				"A plane of utmost order, Mechanus is a realm overseen by a godlike entity called Primus, whose actions are inscrutable and calculations, vast. You, or someone from your lineage, might have become entangled in one of the machinations of the leader of the modrons. Perhaps you were exposed to an artifact created by Primus, or your ancestor took part in the Great Modron March in some way.",
				"The power of Mechanus can seem strange and alien to others, but for you it is part of a vast and glorious system that others can't comprehend. At your option, you can pick from or roll on the Manifestations of Mechanus table to create a way your connection to the plane manifests while you are casting a spell.",
				{
					"type": "table",
					"caption": "Manifestations of Mechanus",
					"colLabels": [
						"d6",
						"Manifestation"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Large, spectral cogwheels appear hovering behind you."
						],
						[
							"2",
							"The hands of a clock appear in your eyes."
						],
						[
							"3",
							"Your skin glows with a golden, metallic sheen."
						],
						[
							"4",
							"Your features become unnaturally angular, like geometric objects."
						],
						[
							"5",
							"Your spellcasting focus takes the form of a miniature Spawning Stone or other creation of Primus."
						],
						[
							"6",
							"The ringing of a clock can be heard by you and those affected by your magic."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Clockwork Magic|Sorcerer||Clockwork Soul (UA)|UA2020SubclassesPt2|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Restore Balance|Sorcerer||Clockwork Soul (UA)|UA2020SubclassesPt2|1"
				}
			]
		},
		{
			"name": "Clockwork Magic",
			"source": "UA2020SubclassesPt2",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Clockwork Soul feature}",
				"You learn additional spells when you reach certain levels in this class, as shown on the Clockwork Spells table. Each spell counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know. These spells can't be replaced when you gain a level in this class.",
				{
					"type": "table",
					"caption": "Clockwork Spells",
					"colLabels": [
						"Sorcerer Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell alarm}, {@spell protection from evil and good}"
						],
						[
							"3rd",
							"{@spell find traps}, {@spell heat metal}"
						],
						[
							"5th",
							"{@spell counterspell}, {@spell glyph of warding}"
						],
						[
							"7th",
							"{@spell arcane eye}, {@spell Otiluke's resilient sphere}"
						],
						[
							"9th",
							"{@spell animate objects}, {@spell wall of force}"
						]
					]
				}
			]
		},
		{
			"name": "Restore Balance",
			"source": "UA2020SubclassesPt2",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Clockwork Soul feature}",
				"Your connection to the plane of absolute order allows you to equalize chaotic moments. When a creature you can see within 60 feet of you is about to roll a {@dice d20} with advantage or disadvantage, you can use your reaction to prevent the roll from being affected by advantage and disadvantage.",
				"You can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Bulwark of Law",
			"source": "UA2020SubclassesPt2",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"{@i 6th-level Clockwork Soul feature}",
				"You can imbue a creature with a shimmering shield of order. As an action, you can expend 1 to 5 sorcery points to create a magical ward around yourself or another creature you can see within 30 feet of you. The ward lasts until you finish a long rest or until you use this feature again.",
				"The ward is represented by a number of {@dice d8}s equal to the number of sorcery points spent to create it. When the warded creature takes damage, it can use its reaction to spend a number of those dice, roll them, and reduce the damage taken by the total of the spent dice."
			]
		},
		{
			"name": "Trance of Order",
			"source": "UA2020SubclassesPt2",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Clockwork Soul feature}",
				"You gain the ability to enter a state of clockwork consciousness as a bonus action. For the next minute, attack rolls against you can't benefit from advantage, and whenever you make an attack roll, an ability check, or a saving throw, you can treat a {@dice d20} roll of 9 or lower as a 10.",
				"Once you use this action, you can't use it again until you finish a long rest or until you expend 5 sorcery points to use it again."
			]
		},
		{
			"name": "Clockwork Cavalcade",
			"source": "UA2020SubclassesPt2",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Clockwork Soul (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Clockwork Soul feature}",
				"You summon spirits of order to restore balance around you. As an action, you summon the spirits in a 30-foot cube originating from you. The spirits look like modrons or other constructs of your choice. The spirits are intangible and invulnerable, work fast and efficiently, and create the following effects within the cube before vanishing:",
				{
					"type": "list",
					"items": [
						"The spirits restore up to 100 hit points, divided as you choose among any number of creatures of your choice in the cube.",
						"Any damaged objects entirely in the cube are repaired.",
						"Every spell of 6th level or lower ends on creatures and objects of your choice in the cube."
					]
				},
				"Once you use this action, you can't use it again until you finish a long rest or until you expend 7 sorcery points to use it again."
			]
		},
		{
			"name": "Lunar Magic",
			"source": "UA2022HeroesOfKrynn",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar Magic (UA)",
			"subclassSource": "UA2022HeroesOfKrynn",
			"level": 1,
			"entries": [
				"On many worlds, the moon is a revered celestial body with magical properties. On Krynn, the gods of magic are associated with the world's three moons. On the world of Toril, the god Selûne uses the light of the moon to battle darkness. On Eberron, scholars of the Draconic Prophecy decipher ancient secrets from the waxing and waning of that world's twelve moons.",
				"You, or someone from your lineage, has been exposed to the concentrated magic of the moon (or moons) of your world, imbuing you with lunar magic. Perhaps your ancestor was involved in a druidic ritual involving an eclipse, or maybe a mystical fragment of a moon crashed near you. However you came to have your magic, your connection to the moon is obvious when you cast sorcerer spells. Consult the Manifestations of Lunar Magic table, then choose or randomly determine how your connection to the moon manifests while you cast your sorcerer spells.",
				{
					"type": "table",
					"caption": "Manifestations of Lunar Magic",
					"colLabels": [
						"d4",
						"Manifestation"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You glow with faint light that matches the color of a moon from your world."
						],
						[
							"2",
							"Your pupils shift in shape, matching the current phase of a moon from your world."
						],
						[
							"3",
							"Spectral manifestations of the moon (or moons) of your world orbit you."
						],
						[
							"4",
							"Your shadow is limned in faint light, as if it were a lunar body during a solar eclipse."
						]
					]
				},
				{
					"type": "entries",
					"name": "Moon Fire",
					"entries": [
						"{@i 1st-Level Lunar Magic Feature}",
						"You can call down the radiant light of the moon on command. You learn the {@spell sacred flame} spell, which doesn't count against the number of sorcerer cantrips you know. When you cast the spell, you can target one creature as normal or target two creatures within range that are within 5 feet of each other."
					]
				},
				{
					"type": "entries",
					"name": "Lunar Embodiment",
					"entries": [
						"{@i 1st-Level Lunar Magic Feature}",
						"You learn additional spells when you reach certain levels in this class, as shown on the Lunar Spells table. Each of these spells counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
						{
							"type": "table",
							"caption": "Lunar Spells",
							"colLabels": [
								"Sorcerer Level",
								"Full Moon Spells",
								"New Moon Spells",
								"Crescent Moon Spells"
							],
							"colStyles": [
								"col-1-1 text-center",
								"col-3-3",
								"col-3-3",
								"col-3-3"
							],
							"rows": [
								[
									"1st",
									"{@spell faerie fire}",
									"{@spell dissonant whispers}",
									"{@spell sanctuary}"
								],
								[
									"3rd",
									"{@spell moonbeam}",
									"{@spell darkness}",
									"{@spell blindness/deafness}"
								],
								[
									"5th",
									"{@spell death ward}",
									"{@spell bestow curse}",
									"{@spell phantom steed}"
								],
								[
									"7th",
									"{@spell freedom of movement}",
									"{@spell Evard's black tentacles}",
									"{@spell hallucinatory terrain}"
								],
								[
									"9th",
									"{@spell mass cure wounds}",
									"{@spell mislead}",
									"{@spell dream}"
								]
							]
						},
						"Whenever you finish a long rest, you can choose what lunar phase manifests its power through your magic: Full Moon, New Moon, or Crescent Moon. While in the chosen phase, spells of the associated phase in the Lunar Spells table can be cast once without expending a spell slot. Once you cast a spell in this way, you can't do so again until you finish a long rest."
					]
				}
			]
		},
		{
			"name": "Lunar Boons",
			"source": "UA2022HeroesOfKrynn",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar Magic (UA)",
			"subclassSource": "UA2022HeroesOfKrynn",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-Level Lunar Magic Feature}",
				"Lunar phases influence your metamagic. Each lunar phase is associated with spells of the following schools of magic:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Full Moon",
							"entries": [
								"Abjuration and conjuration spells"
							]
						},
						{
							"type": "item",
							"name": "New Moon",
							"entries": [
								"Evocation and necromancy spells"
							]
						},
						{
							"type": "item",
							"name": "Crescent Moon",
							"entries": [
								"Divination and transmutation spells"
							]
						}
					]
				},
				"Whenever you use Metamagic on a spell from the Lunar Spells table or a spell of a school of magic associated with the lunar phase you are in, you can reduce the sorcery points spent by 1 (minimum 0). You can reduce the sorcery points spent for your Metamagic a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest"
			]
		},
		{
			"name": "Waxing and Waning",
			"source": "UA2022HeroesOfKrynn",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar Magic (UA)",
			"subclassSource": "UA2022HeroesOfKrynn",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"{@i 6th-Level Lunar Magic Feature}",
				"You gain greater control over the phases of your lunar magic. As a bonus action, you can spend 1 sorcery point to change your lunar phase for a different one."
			]
		},
		{
			"name": "Lunar Empowerment",
			"source": "UA2022HeroesOfKrynn",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar Magic (UA)",
			"subclassSource": "UA2022HeroesOfKrynn",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-Level Lunar Magic Feature}",
				"The power of a lunar phase saturates your being. Whenever you choose a lunar phase to affect your magic, you also gain the following benefit associated with that phase:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Full Moon:",
							"entry": "You shed bright light in a 10-foot radius and dim light for an additional 10 feet. In addition, you and creatures of your choice have advantage on saving throws while within the bright light you shed."
						},
						{
							"type": "item",
							"name": "New Moon:",
							"entry": "You have advantage on Dexterity ({@skill Stealth}) checks. In addition, while you are in dim light or darkness, attack rolls have disadvantage against you."
						},
						{
							"type": "item",
							"name": "Crescent Moon:",
							"entry": "You have resistance to necrotic and radiant damage"
						}
					]
				}
			]
		},
		{
			"name": "Lunar Phenomenon",
			"source": "UA2022HeroesOfKrynn",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Lunar Magic (UA)",
			"subclassSource": "UA2022HeroesOfKrynn",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-Level Lunar Magic feature}",
				"Your lunar phase magic bursts. As a bonus action, you can tap into a special power of the lunar phase you are currently in. Alternatively, as part of the bonus action you take to change your lunar phase using your Waxing and Waning feature, you can immediately use the power of the lunar phase you are entering:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Full Moon:",
							"entries": [
								"You radiate intense moonlight for a moment. Each creature of your choice within 30 feet of you must succeed on a Constitution saving throw against your spell save DC or be {@condition blinded} until the end of its next turn. In addition, one creature of your choice in that area regains {@dice 3d8} hit points."
							]
						},
						{
							"type": "item",
							"name": "New Moon:",
							"entries": [
								"You momentarily emanate an oppressive gloom. Each creature of your choice within 30 feet of you must succeed on a Dexterity saving throw against your spell save DC or take {@damage 3d10} necrotic damage and have its speed reduced to 0 until the end of its next turn. In addition, you become {@condition invisible} until the end of your next turn, or until you make an attack or cast a spell."
							]
						},
						{
							"type": "item",
							"name": "Crescent Moon:",
							"entries": [
								"You slip through light and darkness. You can magically teleport to an unoccupied space you can see within 60 feet of yourself. In addition, you also gain resistance to all damage until the start of your next turn."
							]
						}
					]
				},
				"Once you use a phase's bonus action, you can't do so again until you finish a long rest, unless you spend 5 sorcery points to use it again."
			]
		},
		{
			"name": "Giant Soul (UA)",
			"source": "UAGiantSoulSorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Giant Soul (UA)",
			"subclassSource": "UAGiantSoulSorcerer",
			"level": 1,
			"entries": [
				"The giants once dwelled in a fabled realm known as Ostoria, a paradise for their folk that reflected their mastery of the mortal realm. In time, Ostoria fell, and the giants were scattered and broken. During that mythic era, the giants granted a few chosen individuals among the small folk a shard of their great power. These favored people were caught in the same tragedy that sundered Ostoria. Since that time, they have spread across the many worlds of the multiverse. Now and again, one of their descendants manifests the gifts imparted by the giants, granting them sorcerous magic that allows them to command the elements and gain the might of a giant.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Jotun Resilience|Sorcerer||Giant Soul (UA)|UAGiantSoulSorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Mark of the Ordning|Sorcerer||Giant Soul (UA)|UAGiantSoulSorcerer|1"
				}
			]
		},
		{
			"name": "Jotun Resilience",
			"source": "UAGiantSoulSorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Giant Soul (UA)",
			"subclassSource": "UAGiantSoulSorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"The resilience of giants flows through your body. At 1st level, your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class."
			]
		},
		{
			"name": "Mark of the Ordning",
			"source": "UAGiantSoulSorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Giant Soul (UA)",
			"subclassSource": "UAGiantSoulSorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you discover innate magical abilities within yourself that are based on your giant heritage. Select one of the giant types from the Mark of the Ordning table. At 1st and 3rd level, you learn the spells associated with your choice, as shown in the table. These spells count as sorcerer spells for you, but they don't count against your number of sorcerer spells known.",
				{
					"type": "table",
					"colLabels": [
						"Giant Type",
						"Spells at 1st Level",
						"Spells at 3rd Level"
					],
					"colStyles": [
						"col-3",
						"col-3",
						"col-3"
					],
					"rows": [
						[
							"{@creature Cloud Giant}",
							"{@spell fog cloud}, {@spell minor illusion}",
							"{@spell invisibility}"
						],
						[
							"{@creature Fire Giant}",
							"{@spell burning hands}, {@spell fire bolt}",
							"{@spell flaming sphere}"
						],
						[
							"{@creature Frost Giant}",
							"{@spell armor of Agathys}, {@spell ray of frost}",
							"{@spell hold person}"
						],
						[
							"{@creature Hill Giant}",
							"{@spell heroism}, {@spell shillelagh}",
							"{@spell enlarge/reduce}"
						],
						[
							"{@creature Stone Giant}",
							"{@spell entangle}, {@spell resistance}",
							"{@spell spike growth}"
						],
						[
							"{@creature Storm Giant}",
							"{@spell shocking grasp}, {@spell thunderwave}",
							"{@spell gust of wind}"
						]
					]
				}
			]
		},
		{
			"name": "Soul of Lost Ostoria",
			"source": "UAGiantSoulSorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Giant Soul (UA)",
			"subclassSource": "UAGiantSoulSorcerer",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you gain a benefit whenever you cast one of the spells granted by your Mark of the Ordning Feature.",
				{
					"type": "entries",
					"name": "Cloud Giant",
					"entries": [
						"Immediately after you cast any of your Mark of the Ordning spells, you can magically teleport as a bonus action. You teleport to an unoccupied space you can see that is no farther away than a number of feet equal to 10 + your Constitution modifier."
					]
				},
				{
					"type": "entries",
					"name": "Fire Giant",
					"entries": [
						"You gain a bonus to the damage rolls of your Mark of the Ordning spells. The bonus equals your Constitution modifier (minimum of +1)."
					]
				},
				{
					"type": "entries",
					"name": "Frost Giant",
					"entries": [
						"Immediately after you cast any of your Mark of the Ordning spells, you gain temporary hit points equal to your Constitution modifier (minimum of 1). But if the spell is {@spell armor of Agathys}, you instead increase its temporary hit points by an amount equal to your Constitution modifier (minimum of 1)."
					]
				},
				{
					"type": "entries",
					"name": "Hill Giant",
					"entries": [
						"Immediately after you cast any of your Mark of the Ordning spells, you can target up to two creatures within 5 feet of you that you can see. Each target must succeed on a Strength saving throw against your spell save DC or be pushed a number of feet away from you equal to 5 + your Constitution modifier (minimum of +1). A target can choose to fail this save."
					]
				},
				{
					"type": "entries",
					"name": "Stone Giant",
					"entries": [
						"Immediately after you cast any of your Mark of the Ordning spells, you gain a bonus to AC equal to your Constitution modifier (minimum of +1) until the end of your next turn."
					]
				},
				{
					"type": "entries",
					"name": "Storm Giant",
					"entries": [
						"Immediately after you cast any of your Mark of the Ordning spells, up to three creatures of your choice that you can see within 30 feet of you take lightning damage equal to your Constitution modifier (minimum of 1)."
					]
				}
			]
		},
		{
			"name": "Rage of Fallen Ostoria",
			"source": "UAGiantSoulSorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Giant Soul (UA)",
			"subclassSource": "UAGiantSoulSorcerer",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you gain the ability to channel the souls of your ancestors into your physical form. When you start casting a sorcerer spell on your turn and expend a spell slot, you can increase your size by one category\u2014from Medium to Large, for example.",
				"This increase lasts for 1 minute. It ends early if you die or are {@condition incapacitated}. Until it ends, you enjoy the following benefits:",
				{
					"type": "list",
					"items": [
						"Your current hit points and your hit point maximum both increase by 1 per sorcerer level.",
						"Your reach increases by 5 feet.",
						"Your walking speed increases by 5 feet.",
						"You have advantage on Strength checks and Strength saving throws.",
						"You gain a bonus to the damage rolls of your melee weapon attacks; the bonus equals your Constitution modifier (minimum of +1)."
					]
				},
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Blessing of the All Father",
			"source": "UAGiantSoulSorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Giant Soul (UA)",
			"subclassSource": "UAGiantSoulSorcerer",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, your Constitution score increases by 2, up to a maximum of 22.",
				"In addition, you can now use Rage of Fallen Ostoria twice between rests, but no more than once on a turn. If you use that feature while under its effects, its increases to your size, hit points, reach, and walking speed are cumulative."
			]
		},
		{
			"name": "Shadow",
			"source": "UALightDarkUnderdark",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 1,
			"entries": [
				"Your innate magic comes from the Shadowfell. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed in some fundamental manner.",
				"The power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul. At your option, you can pick from or roll on the following table to create a unique quirk for your character.",
				{
					"type": "table",
					"caption": "Shadow Sorcerer Quirks",
					"colLabels": [
						"d6",
						"Quirk"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You are always icy cold to the touch."
						],
						[
							"2",
							"When you are asleep, you don't appear to breathe (though you must still breathe to survive)."
						],
						[
							"3",
							"You don't seem to bleed, even when badly injured."
						],
						[
							"4",
							"Your heart beats once per minute. This even sometimes surprises you."
						],
						[
							"5",
							"You have trouble remembering that living creatures and corpses should be treated differently."
						],
						[
							"6",
							"You blinked. Once. Last week."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of the Dark|Sorcerer||Shadow (UA)|UALightDarkUnderdark|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Strength of the Grave|Sorcerer||Shadow (UA)|UALightDarkUnderdark|1"
				}
			]
		},
		{
			"name": "Eyes of the Dark",
			"source": "UALightDarkUnderdark",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 1,
			"header": 1,
			"entries": [
				"From 1st level, you have {@sense darkvision} with a range of 60 feet. You can cast {@spell darkness} by spending 1 sorcery point. You can see through any {@spell darkness} spell you cast using this ability."
			]
		},
		{
			"name": "Strength of the Grave",
			"source": "UALightDarkUnderdark",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. Whenever damage reduces you to 0 hit points, you can make a Constitution saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You cannot use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit."
			]
		},
		{
			"name": "Hound of Ill Omen",
			"source": "UALightDarkUnderdark",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 3
			},
			"entries": [
				"At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to summon a hound of ill omen to target one creature you can see. The hound uses a dire wolf's statistics with the following changes:",
				{
					"type": "list",
					"items": [
						"The hound is size Medium.",
						"It can move through other creatures and objects as if they were {@quickref difficult terrain||3}. The hound takes 5 force damage if it ends its turn inside an object.",
						"At the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound."
					]
				},
				"The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only towards its target by the most direct route, and it can use its action only to attack its target. The hound makes opportunity attack, but only against its target. Additionally, the target has disadvantage on all saving throws against your spells while the hound is within 5 feet of it. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes."
			]
		},
		{
			"name": "Shadow Walk",
			"source": "UALightDarkUnderdark",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness."
			]
		},
		{
			"name": "Shadow Form",
			"source": "UALightDarkUnderdark",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 18,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 3
			},
			"entries": [
				"At 18th level, you can spend 3 sorcery points to transform yourself into a shadow form as a bonus action. In this form, you have resistance to all damage except force damage, and you can move through other creatures and objects as if they were {@quickref difficult terrain||3}. You take 5 force damage if you end your turn inside an object. You remain in this form for 1 minute."
			]
		},
		{
			"name": "Favored Soul",
			"source": "UAModifyingClasses",
			"page": 8,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul (UA)",
			"subclassSource": "UAModifyingClasses",
			"level": 1,
			"entries": [
				"You have been chosen by a deity, and bestowed with a fragment of their divine power. You have been fundamentally changed by the touch of this deity, which awakens powerful magical abilities inside you.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Sorcerer||Favored Soul (UA)|UAModifyingClasses|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Chosen of the Gods|Sorcerer||Favored Soul (UA)|UAModifyingClasses|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAModifyingClasses",
			"page": 8,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul (UA)",
			"subclassSource": "UAModifyingClasses",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency in light armor, medium armor, shields, and simple weapons."
			]
		},
		{
			"name": "Chosen of the Gods",
			"source": "UAModifyingClasses",
			"page": 8,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul (UA)",
			"subclassSource": "UAModifyingClasses",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you choose one of the cleric class's divine domains. You add that domain's spells for 1st-level clerics to your known spells. These spells do not count against the number of spells you can know, and they are considered to be sorcerer spells for you. When you reach 3rd, 5th, 7th, and 9th levels in the sorcerer class, you likewise learn your domain's spells that become available at those levels."
			]
		},
		{
			"name": "Extra Attack",
			"source": "UAModifyingClasses",
			"page": 8,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul (UA)",
			"subclassSource": "UAModifyingClasses",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Divine Wings",
			"source": "UAModifyingClasses",
			"page": 8,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul (UA)",
			"subclassSource": "UAModifyingClasses",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to sprout a pair of wings from your back (feathered or bat-like, your choice), gaining a flying speed equal to your current walking speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
				"You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
			]
		},
		{
			"name": "Power of the Chosen",
			"source": "UAModifyingClasses",
			"page": 8,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul (UA)",
			"subclassSource": "UAModifyingClasses",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, when you cast one of the spells you learned from your Chosen of the Gods class feature, you regain hit points equal to your Charisma modifier (minimum of +1) + the spell's level."
			]
		},
		{
			"name": "Favored Soul v3",
			"source": "UARevisedSubclasses",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v3 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 1,
			"entries": [
				"Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a favored soul, your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god's name. Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.",
				"Favored souls, with their natural magnetism and strong personalities, are often seen as threats by traditional religious hierarchies. As outsiders who command the power of the gods, these sorcerers can undermine the existing order and claim a direct tie to the divine.",
				"In some cultures, only those who can claim the power of a favored soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divine Magic|Sorcerer||Favored Soul v3 (UA)|UARevisedSubclasses|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Favored by the Gods|Sorcerer||Favored Soul v3 (UA)|UARevisedSubclasses|1"
				}
			]
		},
		{
			"name": "Divine Magic",
			"source": "UARevisedSubclasses",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v3 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 1,
			"header": 1,
			"entries": [
				"Your link to the divine allows you to learn spells normally associated with the cleric class. When your Spellcasting feature lets you learn a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list, in addition to the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.",
				"You also learn the {@spell cure wounds} spell, which does not count against your number of sorcerer spells known."
			]
		},
		{
			"name": "Favored by the Gods",
			"source": "UARevisedSubclasses",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v3 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll {@dice 2d4} and add it to the total, possibly changing the outcome.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Empowered Healing",
			"source": "UARevisedSubclasses",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v3 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"Starting at 6th level, the celestial energy coursing through you can empower your healing magic. Whenever you roll dice to determine the number of hit points a sorcerer spell of yours restores, you can spend 1 sorcery point to reroll any number of those dice once."
			]
		},
		{
			"name": "Angelic Form",
			"source": "UARevisedSubclasses",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v3 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your divine essence causes you to undergo a minor physical transformation. Your appearance takes on an otherworldly version of one of the following qualities (your choice): beautiful, youthful, kind, or imposing.",
				"In addition, as a bonus action, you can manifest a pair of spectral wings from your back. The wings last until you're {@condition incapacitated} or you dismiss them as a bonus action. While the wings are present, you have a flying speed of 30 feet."
			]
		},
		{
			"name": "Unearthly Recovery",
			"source": "UARevisedSubclasses",
			"page": 5,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v3 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have less than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Favored Soul v2",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"entries": [
				"Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a favored soul, your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god's name. Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.",
				"Favored souls, with their natural magnetism and strong personalities, are often seen as threats by traditional religious hierarchies. As outsiders who command the power of the gods, these sorcerers can undermine the existing order and claim a direct tie to the divine.",
				"In some cultures, only those who can claim the power of a favored soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divine Magic|Sorcerer||Favored Soul v2 (UA)|UASorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Supernatural Resilience|Sorcerer||Favored Soul v2 (UA)|UASorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Favored by the Gods|Sorcerer||Favored Soul v2 (UA)|UASorcerer|1"
				}
			]
		},
		{
			"name": "Divine Magic",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"Your link to the divine allows you to learn spells normally associated with the cleric class. When your Spellcasting feature lets you learn a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list, in addition to the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you."
			]
		},
		{
			"name": "Favored by the Gods",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll {@dice 2d4} and add it to the total, possibly changing the outcome.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Supernatural Resilience",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, the blessing of the gods grants you enhanced durability. Your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class."
			]
		},
		{
			"name": "Blessed Countenance",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your divine essence causes you to undergo a minor physical transformation. Your appearance takes on an otherworldly version of one of the following qualities (your choice): beautiful, youthful, kind, or imposing.",
				"Whatever your choice, if your proficiency bonus applies to a Charisma check, double that bonus."
			]
		},
		{
			"name": "Divine Purity",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you become immune to disease, poison damage, and the {@condition poisoned} condition."
			]
		},
		{
			"name": "Unearthly Recovery",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Favored Soul v2 (UA)",
			"subclassSource": "UASorcerer",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have less than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Phoenix Sorcery (UA)",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Phoenix (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"entries": [
				"Your power draws from the immortal flame that fuels the legendary phoenix. You or your ancestors perhaps rendered a phoenix a great service, or you were born in its presence. Whatever the cause, a shard of the phoenix's power dwells within you.",
				"That power is a mixed blessing. Like the mythical creature, you can invoke fiery energy and gain the ability to cheat death itself. This power comes at a cost. The fire within you seethes, demanding to be unleashed. You sometimes find yourself absentmindedly feeding fires. You can't bear to allow a fire to sputter out. You feel most comfortable while holding a lit torch or sitting in front of a campfire.",
				"More importantly, this gift comes with no special protection from fire. You are as vulnerable as any other creature to fiery magic, including your own. Phoenix sorcerers can use their powers to pull themselves back from the brink of death, and all too often their own, rash nature or reliance on destructive magic is what puts them there in the first place.",
				"Such sorcerers are wanderers by necessity. The volatile nature of their magic makes other folk nervous. If a fire breaks out in town, a phoenix sorcerer had best flee, whether guilty or not. Fire is a dangerous force, and phoenix sorcerers have a reputation (deserved or not) for reckless behavior, confident that the essence of the phoenix can save them.",
				{
					"type": "table",
					"caption": "Phoenix Soul Quirks",
					"colLabels": [
						"d6",
						"Phoenix Soul"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You absentmindedly ignite small fires that quickly sputter out."
						],
						[
							"2",
							"You cackle like a fiend when you unleash your fire spells."
						],
						[
							"3",
							"You admire fire, even if it burns your friends."
						],
						[
							"4",
							"You are covered in burns that mark the first time your power manifested."
						],
						[
							"5",
							"You like your food charred."
						],
						[
							"6",
							"You are brave to the point of recklessness."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Ignite|Sorcerer||Phoenix (UA)|UASorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Mantle of Flame|Sorcerer||Phoenix (UA)|UASorcerer|1"
				}
			]
		},
		{
			"name": "Ignite",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Phoenix (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to start fires with a touch. As an action, you can magically ignite a flammable object you touch with your hand\u2014an object such as a torch, a piece of tinder, or the hem of drapes."
			]
		},
		{
			"name": "Mantle of Flame",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Phoenix (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can unleash the phoenix fire that blazes within you.",
				"As a bonus action, you magically wreathe yourself in swirling fire, as your eyes glow like hot coals. For 1 minute, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You shed bright light in a 30-foot radius and dim light for an additional 30 feet.",
						"Any creature takes fire damage equal to your Charisma modifier if it hits you with a melee attack from within 5 feet of you or if it touches you.",
						"Whenever you roll fire damage on your turn, the roll gains a bonus to equal to your Charisma modifier."
					]
				},
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Phoenix Spark",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Phoenix (UA)",
			"subclassSource": "UASorcerer",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, the fiery energy within you grows restless and vengeful. In the face of defeat, it surges outward to preserve you in a fiery roar.",
				"If you are reduced to 0 hit points, you can use your reaction to draw on the spark of the phoenix. You are instead reduced to 1 hit point, and each creature within 10 feet of you takes fire damage equal to half your sorcerer level + your Charisma modifier.",
				"If you use this feature while under the effects of your Mantle of Flame, this feature instead deals fire damage equal to your sorcerer level + double your Charisma modifier, and your Mantle of Flame immediately ends.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Nourishing Fire",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Phoenix (UA)",
			"subclassSource": "UASorcerer",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, your fire spells soothe and restore you. When you expend a spell slot to cast a spell that includes a fire damage roll, you regain hit points equal to the slot's level + your Charisma modifier."
			]
		},
		{
			"name": "Form of the Phoenix",
			"source": "UASorcerer",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Phoenix (UA)",
			"subclassSource": "UASorcerer",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you finally master the spark of fire that dances within you. While under the effect of your Mantle of Flame feature, you gain additional benefits:",
				{
					"type": "list",
					"items": [
						"You have a flying speed of 40 feet and can hover.",
						"You have resistance to all damage.",
						"If you use your Phoenix Spark, that feature deals an extra 20 fire damage to each creature."
					]
				}
			]
		},
		{
			"name": "Sea Sorcery (UA)",
			"source": "UASorcerer",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Sea (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"entries": [
				"The power of water is the strength of flexibility, resilience, and a relentless nature. Water parts to allow a ship to sail over it or a diver to plunge into it, but their passing leaves no mark. Water flowing down a mountain reaches the sea. It might bend and turn across valleys and down hillsides, but it slowly and steadily returns to the waves. Those whose souls are touched by the power of elemental water command a similar power.",
				"Your heritage ties to powerful creatures of the sea, such as nereids, the lords of the merfolk, and elemental powers. Like a river, you feel the call of the ocean. The call is ever present in your heart, and you are never completely at peace until you are near the sea.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Soul of the Sea|Sorcerer||Sea (UA)|UASorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Curse of the Sea|Sorcerer||Sea (UA)|UASorcerer|1"
				}
			]
		},
		{
			"name": "Curse of the Sea",
			"source": "UASorcerer",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Sea (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"When you choose this origin at 1st level, you learn the secret of infusing your spells with a watery curse.",
				"When you hit a creature with a cantrip's attack or when a creature fails a saving throw against your cantrip, you can curse the target until the end of your next turn or until you curse a different creature with this feature.",
				"Once per turn when you cast a spell, you can trigger the curse if that spell deals cold or lightning damage to the cursed target or forces it to move. Doing so subjects the target to the appropriate additional effect below, and then the curse ends if the spell isn't a cantrip (you choose the effect to use if more than one effect applies):",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Cold damage",
							"entries": [
								"If the affected target takes cold damage from your spell, the target's speed is also reduced by 15 feet until the end of your next turn. If the spell already reduces the target's speed, use whichever reduction is greater."
							]
						},
						{
							"type": "entries",
							"name": "Lightning Damage",
							"entries": [
								"If the affected target takes lightning damage from your spell, the target takes additional lightning damage equal to your Charisma modifier."
							]
						},
						{
							"type": "entries",
							"name": "Forced Movement",
							"entries": [
								"If the target is moved by your spell, increase the distance it is moved by 15 feet."
							]
						}
					]
				}
			]
		},
		{
			"name": "Soul of the Sea",
			"source": "UASorcerer",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Sea (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, your tie to the sea grants you the ability to breathe underwater, and you have a swim speed equal to your walking speed."
			]
		},
		{
			"name": "Watery Defense",
			"source": "UASorcerer",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Sea (UA)",
			"subclassSource": "UASorcerer",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain resistance to fire damage.",
				"You also gain the ability to defend yourself by momentarily assuming a watery form. As a reaction when you are hit by an attack and take bludgeoning, piercing, or slashing damage from it, you can reduce that damage by an amount equal to your sorcerer level plus your Charisma score, and then you can move up to 30 feet without provoking opportunity attacks. Once you use this special reaction, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Shifting Form",
			"source": "UASorcerer",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Sea (UA)",
			"subclassSource": "UASorcerer",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you gain the ability to enter a liquid state while moving.",
				"When you move on your turn, you take only half damage from opportunity attacks, and you can move through any enemy's space but can't willingly end your move there.",
				"On your turn, you can move through any space that is at least 3 inches in diameter and do so without squeezing. When you stop moving, the regular squeezing rules apply if you're in a space one size smaller than you. You can't willingly stop in a space smaller than that, and if you're forced to do so, you immediately flow to the nearest space that can fit you, back along the path of your movement."
			]
		},
		{
			"name": "Water Soul",
			"source": "UASorcerer",
			"page": 2,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Sea (UA)",
			"subclassSource": "UASorcerer",
			"level": 18,
			"header": 2,
			"entries": [
				"Starting at 18th level, your being is altered by the power of the sea. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You no longer need to eat, drink, or sleep.",
						"A critical hit against you becomes a normal hit.",
						"You have resistance to bludgeoning, piercing, and slashing damage."
					]
				}
			]
		},
		{
			"name": "Stone Sorcery (UA)",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"entries": [
				"Your magic springs from a mystical link between your soul and the magic of elemental earth. You might trace a distant ancestor to the Plane of Earth, or your family might have earned a mighty boon in return for a service to the dao lords. Whatever your past, the magic of elemental earth is yours to command.",
				"Your link to earth magic grants you extraordinary resilience, and stone sorcerers have a natural affinity for combat. A steel blade feels like a natural extension of your body, and sorcerers with this origin have a knack for wielding both shields and weapons. In combat your place is amid the fray. You rely on your elemental nature to shield you from harm and your magic and metal weapons to overwhelm your foes.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Sorcerer||Stone (UA)|UASorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Stone: Metal Magic|Sorcerer||Stone (UA)|UASorcerer|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Stone's Durability|Sorcerer||Stone (UA)|UASorcerer|1"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with shields, simple weapons, and martial weapons."
			]
		},
		{
			"name": "Stone's Durability",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, your connection to stone gives you extra fortitude. Your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class.",
				"As an action, you can gain a base AC of 13 + your Constitution modifier if you aren't wearing armor, and your skin assumes a stony appearance. This effect lasts until you end it as a bonus action, you are {@condition incapacitated}, or you don armor other than a shield."
			]
		},
		{
			"name": "Stone: Metal Magic",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 1,
			"header": 1,
			"entries": [
				"Your affinity for metal gives you the option to learn some non-sorcerer spells that focus on weapon attacks. When your Spellcasting feature lets you learn a sorcerer spell of 1st level or higher, you can select the spell from the following list of spells, in addition to the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.",
				{
					"type": "table",
					"caption": "Metal Magic",
					"colLabels": [
						"Spell Level",
						"Spell"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell compelled duel}, {@spell searing smite}, {@spell thunderous smite}, {@spell wrathful smite}"
						],
						[
							"2nd",
							"{@spell branding smite}, {@spell magic weapon}"
						],
						[
							"3rd",
							"{@spell blinding smite}, {@spell elemental weapon}"
						],
						[
							"4th",
							"{@spell staggering smite}"
						]
					]
				}
			]
		},
		{
			"name": "Stone Aegis",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your command of earth magic grows stronger, allowing you to harness it for your allies' protection.",
				"As a bonus action, you can grant an aegis to one allied creature you can see within 60 feet of you. The aegis is a dim, gray aura of earth magic that protects the target. Any bludgeoning, piercing, or slashing damage the target takes is reduced by 2 + your sorcerer level divided by 4. This effect lasts for 1 minute, until you use it again, or until you are {@condition incapacitated}.",
				"In addition, when a creature you can see within 60 feet of you hits the protected target with a melee attack, you can use your reaction to teleport to an unoccupied space you can see within 5 feet of the attacker. You can teleport only if you and the attacker are on the same surface. You can then make one melee weapon attack against the attacker. If that attack hits, it deals an extra {@damage 1d10} force damage. This extra damage increases to {@dice 2d10} at 11th level and {@dice 3d10} at 17th level."
			]
		},
		{
			"name": "Stone's Edge",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, your mastery of earth magic allows you to add the force of elemental earth to your spells. When you cast a spell that deals damage, choose one creature damaged by that spell on the round you cast it. That creature takes extra force damage equal to half your sorcerer level. This feature can be used only once per casting of a spell."
			]
		},
		{
			"name": "Earth Master's Aegis",
			"source": "UASorcerer",
			"page": 3,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Stone (UA)",
			"subclassSource": "UASorcerer",
			"level": 18,
			"header": 2,
			"entries": [
				"Beginning at 18th level, when you use your Stone Aegis to protect an ally, you can choose up to three creatures to gain its benefits."
			]
		},
		{
			"name": "Aberrant Mind",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"entries": [
				"An alien influence has wrapped its tendrils around you, warping you in both body and mind. Perhaps a psychic splinter lodged in your psyche after you suffered domination by an aboleth. Maybe you were born somewhere tainted by the Far Realm, a planar blot that changed you forever. Or perhaps mind flayers kidnapped you, subjecting you to the nightmarish process of ceremorphosis\u2014but the transformation failed and left you altered.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Unique Disturbance|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Invasive Thoughts|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psionic Spells|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Warped Being|Sorcerer||Aberrant Mind (UA)|UASorcererAndWarlock|1"
				}
			]
		},
		{
			"name": "Invasive Thoughts",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Aberrant Mind feature}",
				"At 1st level, you gain the ability to use a bonus action to magically create a telepathic link with one creature you can see within 30 feet of you. Until the link ends, you can telepathically speak to the target through the link, and if it understands at least one language, it can speak telepathically to you. The link lasts for 10 minutes, and it ends early if you are {@condition incapacitated} or die, or if you use another bonus action to break the link or to establish this link with a different creature."
			]
		},
		{
			"name": "Psionic Spells",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Aberrant Mind feature}",
				"Starting at 1st level, your aberrant nature changes your mind in subtle but profound ways. You learn additional spells when you reach certain levels in this class, as shown on the Psionic Spells table. The spell counts as a sorcerer spell for you, but it doesn't count against the number of sorcerer spells you know.",
				{
					"type": "table",
					"caption": "Psionic Spells",
					"colLabels": [
						"Sorcerer Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell arms of Hadar}, {@spell dissonant whispers}"
						],
						[
							"3rd",
							"{@spell calm emotions}, {@spell detect thoughts}"
						],
						[
							"5th",
							"{@spell hunger of Hadar}, {@spell sending}"
						],
						[
							"7th",
							"{@spell compulsion}, {@spell Evard's black tentacles}"
						],
						[
							"9th",
							"{@spell modify memory}, {@spell Rary's telepathic bond}"
						]
					]
				}
			]
		},
		{
			"name": "Unique Disturbance",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"type": "inset",
			"entries": [
				"Regardless of its genesis, the Aberrant Mind origin imparts a sense of eeriness to the character or their surroundings. This can be as subtle as when your sorcerer reads a creature's mind with detect thoughts, anyone in their immediate vicinity experiences a faint but pervasive sense of dread. Or it could be unmistakable, such as sweating a sheen of viscous mucus when you're scared, or your pupils squirming when you're excited. Consider the potentially unspeakable source of your sorcerer's powers, and use that as a guide to weave threads of eeriness throughout your magic."
			]
		},
		{
			"name": "Warped Being",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Aberrant Mind feature}",
				"Starting at 1st level, your aberrant origin protects you from harm. Your body might have a coating of viscous slime, tough hide, scales, or an invisible psionic barrier (choose the form of protection when you gain this feature). Whatever form the protection takes, your AC equals 13 + your Dexterity modifier while you aren't wearing armor."
			]
		},
		{
			"name": "Psionic Sorcery",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Aberrant Mind feature}",
				"Beginning at 6th level, when you cast any of the spells gained from your Psionic Spells feature, you can cast it by expending a spell slot as normal or by spending a number of sorcery points equal to the spell's level. If you cast the spell using sorcery points, it requires no components."
			]
		},
		{
			"name": "Psychic Defenses",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Aberrant Mind feature}",
				"At 6th level, you gain resistance to psychic damage, and you have advantage on saving throws against being {@condition charmed} or {@condition frightened}."
			]
		},
		{
			"name": "Revelation in Flesh",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Aberrant Mind feature}",
				"Beginning at 14th level, you can unleash the aberrant truth hidden within your flesh. As a bonus action, you can spend 1 or more sorcery points to magically transform your body for 1 minute. For each sorcery point you spend, you can gain one of the following benefits of your choice, the effects of which last until the transformation ends:",
				{
					"type": "list",
					"items": [
						"You gain a swimming speed equal to your walking speed and the ability to breathe water. Gills grow from your neck or fan out from behind your ears, your fingers become webbed, or you grow lashing cilia that extend through your clothing.",
						"You gain a flying speed equal to your walking speed and can hover. As you fly, your skin glistens with mucus.",
						"Your body, along with any equipment you are wearing or carrying, becomes slimy and pliable. You can move through any space as narrow as 1 inch without squeezing, and you can spend 5 feet of movement to escape from nonmagical restraints or being {@condition grappled}.",
						"Your eyes turn black or become writhing sensory tendrils. You are aware of the location of any hidden or {@condition invisible} creature within 60 feet of you."
					]
				}
			]
		},
		{
			"name": "Warp Reality",
			"source": "UASorcererAndWarlock",
			"page": 1,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Aberrant Mind (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 18,
			"header": 2,
			"entries": [
				"{@i 18th-level Aberrant Mind feature}",
				"At 18th level, you become the focal point of a reality-warping anomaly. As an action, you can magically radiate a transparent, 20-foot-radius aura for 1 minute. This might take the form of a sphere of rippling psychic energy, a fluctuating amoebic gel, an extrusion of ephemeral parasites, or some other manifestation. Other creatures treat the aura as {@quickref difficult terrain||3}, and when they start their turn in it, they take {@damage 2d10} psychic damage. When you activate this feature, you can choose any number of creatures you can see to be unaffected by the aura.",
				"As a bonus action, you can end the aura early. If you do so, you and any number of creatures you choose within the aura are teleported to a location you can see within 1 mile of you. Each creature must appear within 20 feet of you and in an unoccupied space. An unwilling creature that succeeds on a Charisma saving throw against your spell save DC is not teleported. Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Storm Sorcery",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 1,
			"entries": [
				"Your innate magic comes from the power of elemental air. Perhaps you were born during a howling gale so powerful that folk still tell stories of it. Your lineage might include the influence of potent air creatures such as vaati or djinni. Whatever the case, the magic of the storm permeates your soul.",
				"Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Stormborn|Sorcerer||Storm (UA)|UAWaterborneAdventures|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tempestuous Magic|Sorcerer||Storm (UA)|UAWaterborneAdventures|1"
				}
			]
		},
		{
			"name": "Stormborn",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 1,
			"header": 1,
			"entries": [
				"The arcane magic you command is infused with elemental air. You can speak, read, and write {@language Primordial}. In addition, you gain the following spells at the listed sorcerer level. These spells do not count against the number of sorcerer spells you know.",
				{
					"type": "table",
					"caption": "Storm Sorcerer Bonus Spells",
					"colLabels": [
						"Sorcerer Level",
						"Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1st",
							"{@spell Fog cloud}, {@spell thunderwave}"
						],
						[
							"3rd",
							"{@spell Gust of wind}, {@spell levitate}"
						],
						[
							"5th",
							"{@spell Call lightning}, {@spell sleet storm}"
						],
						[
							"7th",
							"{@spell Conjure minor elementals}*, {@spell ice storm}"
						],
						[
							"9th",
							"{@spell Conjure elemental}**"
						]
					],
					"footnotes": [
						"* Unless you gain this spell from another source, you can summon only {@creature smoke mephit||smoke mephits}, {@creature steam mephit||steam mephits}, {@creature ice mephit||ice mephits}, or {@creature dust mephit||dust mephits} with it.",
						"**Unless you gain this spell from another source, you can summon only {@creature air elemental||air elementals} with it."
					]
				}
			]
		},
		{
			"name": "Tempestuous Magic",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you are attuned to elemental air magic. Whenever you cast a spell other than a cantrip during your turn, whirling gusts of elemental air surround you. You can use a bonus action to fly 10 feet without provoking opportunity attacks."
			]
		},
		{
			"name": "Heart of the Storm",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain resistance to lightning and thunder damage. Whenever you cast a spell other than a cantrip that deals lightning or thunder damage, a stormy aura surrounds you. In addition to the spell's effects, creatures of your choice within 10 feet of you take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level."
			]
		},
		{
			"name": "Storm Guide",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to subtly control the weather around you.",
				"If it is raining, you can use an action to cause the rain to stop falling in a 20‐foot radius centered on you. You can end this effect as a bonus action.",
				"If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100‐foot radius around you. The wind blows in that direction until the end of your next turn. You have no ability to alter the speed of the wind."
			]
		},
		{
			"name": "Storm's Fury",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the storm energy you channel through your magic seethes within your soul. When you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker equal to your sorcerer level. The attacker must also make a Strength saving throw, with a DC equal to 8 + your Charisma bonus + your proficiency bonus. On a failed save, the attacker is pushed in a straight line 20 feet away from you."
			]
		},
		{
			"name": "Wind Soul",
			"source": "UAWaterborneAdventures",
			"page": 4,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm (UA)",
			"subclassSource": "UAWaterborneAdventures",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you gain a flying speed of 60 feet and immunity to lightning and thunder damage. As an action, you can reduce your flying speed to 30 feet for one hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a flying speed of 30 feet for 1 hour."
			]
		},
		{
			"name": "Divine Soul",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Divine Soul",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a blessed soul is a sign that your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god's name.",
				"Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.",
				"A Divine Soul, with a natural magnetism, is seen as a threat by some religious hierarchies. As an outsider who commands sacred power, a Divine Soul can undermine an existing order by claiming a direct tie to the divine.",
				"In some cultures, only those who can claim the power of a Divine Soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Divine Magic|Sorcerer||Divine Soul|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Favored by the Gods|Sorcerer||Divine Soul|XGE|1"
				}
			]
		},
		{
			"name": "Divine Magic",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Divine Soul",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"Your link to the divine allows you to learn spells from the cleric class. When your Spellcasting feature lets you learn or replace a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.",
				"In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer spell for you, but it doesn't count against your number of sorcerer spells known. If you later replace this spell, you must replace it with a spell from the cleric spell list.",
				{
					"type": "table",
					"colLabels": [
						"Affinity",
						"Spell"
					],
					"colStyles": [
						"col-6",
						"col-6"
					],
					"rows": [
						[
							"Good",
							"{@spell cure wounds}"
						],
						[
							"Evil",
							"{@spell inflict wounds}"
						],
						[
							"Law",
							"{@spell bless}"
						],
						[
							"Chaos",
							"{@spell bane}"
						],
						[
							"Neutrality",
							"{@spell protection from evil and good}"
						]
					]
				}
			]
		},
		{
			"name": "Favored by the Gods",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Divine Soul",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll {@dice 2d4} and add it to the total, possibly changing the outcome. Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Empowered Healing",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Divine Soul",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point"
			},
			"entries": [
				"Starting at 6th level, the divine energy coursing through you can empower healing spells. Whenever you or an ally within 5 feet of you rolls dice to determine the number of hit points a spell restores, you can spend 1 sorcery point to reroll any number of those dice once, provided you aren't {@condition incapacitated}. You can use this feature only once per turn."
			]
		},
		{
			"name": "Otherworldly Wings",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Divine Soul",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can use a bonus action to manifest a pair of spectral wings from your back. While the wings are present, you have a flying speed of 30 feet. The wings last until you're {@condition incapacitated}, you die, or you dismiss them as a bonus action.",
				"The affinity you chose for your Divine Magic feature determines the appearance of the spectral wings: eagle wings for good or law, bat wings for evil or chaos, and dragonfly wings for neutrality."
			]
		},
		{
			"name": "Unearthly Recovery",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Divine Soul",
			"subclassSource": "XGE",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have fewer than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Shadow Magic",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"You are a creature of shadow, for your innate magic comes from the Shadowfell itself. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed by it.",
				"The power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul. At your option, you can pick from or roll on the Shadow Sorcerer Quirks table to create a quirk for your character.",
				{
					"type": "table",
					"caption": "Shadow Sorcerer Quirks",
					"colLabels": [
						"d6",
						"Quirk"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"You are always icy cold to the touch."
						],
						[
							"2",
							"When you are asleep, you don't appear to breathe (though you must still breathe to survive)."
						],
						[
							"3",
							"You barely bleed, even when badly injured."
						],
						[
							"4",
							"Your heart beats once per minute. This event sometimes surprises you."
						],
						[
							"5",
							"You have trouble remembering that living creatures and corpses should be treated differently."
						],
						[
							"6",
							"You blinked. Once. Last week."
						]
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Eyes of the Dark|Sorcerer||Shadow|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Strength of the Grave|Sorcerer||Shadow|XGE|1"
				}
			]
		},
		{
			"name": "Eyes of the Dark",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you have {@sense darkvision} with a range of 120 feet.",
				"When you reach 3rd level in this class, you learn the {@spell darkness} spell, which doesn't count against your number of sorcerer spells known. In addition, you can cast it by spending 2 sorcery points or by expending a spell slot. If you cast it with sorcery points, you can see through the {@spell darkness} created by the spell."
			]
		},
		{
			"name": "Strength of the Grave",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, your existence in a twilight state between life and death makes you difficult to defeat. When damage reduces you to 0 hit points, you can make a Charisma saving throw (DC 5 + the damage taken). On a success, you instead drop to 1 hit point. You can't use this feature if you are reduced to 0 hit points by radiant damage or by a critical hit.",
				"After the saving throw succeeds, you can't use this feature again until you finish a long rest."
			]
		},
		{
			"name": "Hound of Ill Omen",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 3
			},
			"entries": [
				"At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to magically summon a hound of ill omen to target one creature you can see within 120 feet of you. The hound uses the {@creature dire wolf}'s statistics (see the Monster Manual or appendix C in the Player's Handbook), with the following changes:",
				{
					"type": "list",
					"items": [
						"The hound is size Medium, not Large, and it counts as a monstrosity, not a beast.",
						"It appears with a number of temporary hit points equal to half your sorcerer level.",
						"It can move through other creatures and objects as if they were {@quickref difficult terrain||3}. The hound takes 5 force damage if it ends its turn inside an object.",
						"At the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound."
					]
				},
				"The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound can make opportunity attacks, but only against its target. Additionally, while the hound is within 5 feet of the target, the target has disadvantage on saving throws against any spell you cast. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes."
			]
		},
		{
			"name": "Shadow Walk",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can magically teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness."
			]
		},
		{
			"name": "Umbral Form",
			"source": "XGE",
			"page": 50,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Shadow",
			"subclassSource": "XGE",
			"level": 18,
			"header": 2,
			"consumes": {
				"name": "Sorcery Point",
				"amount": 6
			},
			"entries": [
				"Starting at 18th level, you can spend 6 sorcery points as a bonus action to magically transform yourself into a shadowy form. In this form, you have resistance to all damage except force and radiant damage, and you can move through other creatures and objects as if they were {@quickref difficult terrain||3}. You take 5 force damage if you end your turn inside an object.",
				"You remain in this form for 1 minute. It ends early if you are {@condition incapacitated}, if you die, or if you dismiss it as a bonus action."
			]
		},
		{
			"name": "Storm Sorcery",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"Your innate magic comes from the power of elemental air. Many with this power can trace their magic back to a near-death experience caused by the Great Rain, but perhaps you were born during a howling gale so powerful that folk still tell stories of it, or your lineage might include the influence of potent air creatures such as djinn. Whatever the case, the magic of the storm permeates your being.",
				"Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Wind Speaker|Sorcerer||Storm|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tempestuous Magic|Sorcerer||Storm|XGE|1"
				}
			]
		},
		{
			"name": "Tempestuous Magic",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks."
			]
		},
		{
			"name": "Wind Speaker",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"The arcane magic you command is infused with elemental air. You can speak, read, and write {@language Primordial}. Knowing this language allows you to understand and be understood by those who speak its dialects: {@language Primordial||Aquan}, {@language Primordial||Auran}, {@language Primordial||Ignan}, and {@language Primordial||Terran}."
			]
		},
		{
			"name": "Heart of the Storm",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you start casting a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level."
			]
		},
		{
			"name": "Storm Guide",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to subtly control the weather around you.",
				"If it is raining, you can use an action to cause the rain to stop falling in a 20-foot-radius sphere centered on you. You can end this effect as a bonus action.",
				"If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot-radius sphere centered on you. The wind blows in that direction until the end of your next turn. This feature doesn't alter the speed of the wind."
			]
		},
		{
			"name": "Storm's Fury",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you."
			]
		},
		{
			"name": "Wind Soul",
			"source": "XGE",
			"page": 51,
			"className": "Sorcerer",
			"classSource": "PHB",
			"subclassShortName": "Storm",
			"subclassSource": "XGE",
			"level": 18,
			"header": 2,
			"entries": [
				"At 18th level, you gain immunity to lightning and thunder damage.",
				"You also gain a magical flying speed of 60 feet. As an action, you can reduce your flying speed to 30 feet for 1 hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a magical flying speed of 30 feet for 1 hour. Once you reduce your flying speed in this way, you can't do so again until you finish a short or long rest."
			]
		}
	]
}

const warlock = 

{
	"_meta": {
		"dependencies": {
			"subclass": [
				"generic"
			]
		}
	},
	"class": [
		{
			"name": "Warlock",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"wis",
				"cha"
			],
			"spellcastingAbility": "cha",
			"casterProgression": "pact",
			"cantripProgression": [
				2,
				2,
				2,
				3,
				3,
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
				4,
				4,
				4,
				4,
				4
			],
			"spellsKnownProgression": [
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				10,
				11,
				11,
				12,
				12,
				13,
				13,
				14,
				14,
				15,
				15
			],
			"spellsKnownProgressionFixedByLevel": {
				"11": {
					"6": 1
				},
				"13": {
					"7": 1
				},
				"15": {
					"8": 1
				},
				"17": {
					"9": 1
				}
			},
			"optionalfeatureProgression": [
				{
					"name": "Eldritch Invocations",
					"featureType": [
						"EI"
					],
					"progression": [
						0,
						2,
						2,
						2,
						3,
						3,
						4,
						4,
						5,
						5,
						5,
						6,
						6,
						6,
						7,
						7,
						7,
						8,
						8,
						8
					]
				},
				{
					"name": "Pact Boon",
					"featureType": [
						"PB"
					],
					"progression": {
						"3": 1
					}
				}
			],
			"startingProficiencies": {
				"armor": [
					"light"
				],
				"weapons": [
					"simple"
				],
				"skills": [
					{
						"choose": {
							"from": [
								"arcana",
								"deception",
								"history",
								"intimidation",
								"investigation",
								"nature",
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
					"(a) a {@item light crossbow|phb} and {@item crossbow bolts (20)|phb|20 bolts} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"(a) a {@item component pouch|phb} or (b) an {@item arcane focus|phb}",
					"(a) a {@item scholar's pack|phb} or (b) a {@item dungeoneer's pack|phb}",
					"{@item Leather armor|phb}, any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}, and two {@item dagger|phb|daggers}"
				],
				"goldAlternative": "{@dice 4d4 × 10|4d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"light crossbow|phb",
							"crossbow bolts (20)|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimple"
							}
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
							"dungeoneer's pack|phb"
						]
					},
					{
						"_": [
							"Leather armor|phb",
							{
								"equipmentType": "weaponSimple"
							},
							{
								"item": "dagger|phb",
								"quantity": 2
							}
						]
					}
				]
			},
			"multiclassing": {
				"requirements": {
					"cha": 13
				},
				"proficienciesGained": {
					"armor": [
						"light"
					],
					"weapons": [
						"simple"
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|class=Warlock}",
						"{@filter Spells Known|spells|class=Warlock}",
						"Spell Slots",
						"Slot Level",
						"{@filter Invocations Known|optionalfeatures|feature type=ei}"
					],
					"rows": [
						[
							2,
							2,
							1,
							"{@filter 1st|spells|level=1|class=Warlock}",
							0
						],
						[
							2,
							3,
							2,
							"{@filter 1st|spells|level=1|class=Warlock}",
							2
						],
						[
							2,
							4,
							2,
							"{@filter 2nd|spells|level=2|class=Warlock}",
							2
						],
						[
							3,
							5,
							2,
							"{@filter 2nd|spells|level=2|class=Warlock}",
							2
						],
						[
							3,
							6,
							2,
							"{@filter 3rd|spells|level=3|class=Warlock}",
							3
						],
						[
							3,
							7,
							2,
							"{@filter 3rd|spells|level=3|class=Warlock}",
							3
						],
						[
							3,
							8,
							2,
							"{@filter 4th|spells|level=4|class=Warlock}",
							4
						],
						[
							3,
							9,
							2,
							"{@filter 4th|spells|level=4|class=Warlock}",
							4
						],
						[
							3,
							10,
							2,
							"{@filter 5th|spells|level=5|class=Warlock}",
							5
						],
						[
							4,
							10,
							2,
							"{@filter 5th|spells|level=5|class=Warlock}",
							5
						],
						[
							4,
							11,
							3,
							"{@filter 5th|spells|level=5|class=Warlock}",
							5
						],
						[
							4,
							11,
							3,
							"{@filter 5th|spells|level=5|class=Warlock}",
							6
						],
						[
							4,
							12,
							3,
							"{@filter 5th|spells|level=5|class=Warlock}",
							6
						],
						[
							4,
							12,
							3,
							"{@filter 5th|spells|level=5|class=Warlock}",
							6
						],
						[
							4,
							13,
							3,
							"{@filter 5th|spells|level=5|class=Warlock}",
							7
						],
						[
							4,
							13,
							3,
							"{@filter 5th|spells|level=5|class=Warlock}",
							7
						],
						[
							4,
							14,
							4,
							"{@filter 5th|spells|level=5|class=Warlock}",
							7
						],
						[
							4,
							14,
							4,
							"{@filter 5th|spells|level=5|class=Warlock}",
							8
						],
						[
							4,
							15,
							4,
							"{@filter 5th|spells|level=5|class=Warlock}",
							8
						],
						[
							4,
							15,
							4,
							"{@filter 5th|spells|level=5|class=Warlock}",
							8
						]
					]
				}
			],
			"classFeatures": [
				"Pact Magic|Warlock||1",
				"Spell Versatility|Warlock||1|UAClassFeatureVariants",
				{
					"classFeature": "Otherworldly Patron|Warlock||1",
					"gainSubclassFeature": true
				},
				"Eldritch Invocations|Warlock||2",
				"Pact Boon|Warlock||3",
				"Ability Score Improvement|Warlock||4",
				"Proficiency Versatility|Warlock||4|UAClassFeatureVariants",
				"Eldritch Versatility|Warlock||4|TCE",
				{
					"classFeature": "Otherworldly Patron feature|Warlock||6",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Warlock||8",
				"Proficiency Versatility|Warlock||8|UAClassFeatureVariants",
				{
					"classFeature": "Otherworldly Patron feature|Warlock||10",
					"gainSubclassFeature": true
				},
				"Mystic Arcanum (6th level)|Warlock||11",
				"Ability Score Improvement|Warlock||12",
				"Proficiency Versatility|Warlock||12|UAClassFeatureVariants",
				"Mystic Arcanum (7th level)|Warlock||13",
				{
					"classFeature": "Otherworldly Patron feature|Warlock||14",
					"gainSubclassFeature": true
				},
				"Mystic Arcanum (8th level)|Warlock||15",
				"Ability Score Improvement|Warlock||16",
				"Proficiency Versatility|Warlock||16|UAClassFeatureVariants",
				"Mystic Arcanum (9th level)|Warlock||17",
				"Ability Score Improvement|Warlock||19",
				"Proficiency Versatility|Warlock||19|UAClassFeatureVariants",
				"Eldritch Master|Warlock||20"
			],
			"subclassTitle": "Otherworldly Patron",
			"fluff": [
				{
					"name": "Warlock",
					"type": "section",
					"entries": [
						"With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will.",
						"As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic.",
						"Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world.",
						"Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.",
						{
							"type": "entries",
							"name": "Sworn and Beholden",
							"entries": [
								"A warlock is defined by a pact with an otherworldly being. Sometimes the relationship between warlock and patron is like that of a cleric and a deity, though the beings that serve as patrons for warlocks are not gods. A warlock might lead a cult dedicated to a demon prince, an archdevil, or an utterly alien entity\u2014beings not typically served by clerics. More often, though, the arrangement is similar to that between a master and an apprentice. The warlock learns and grows in power, at the cost of occasional services performed on the patron's behalf.",
								"The magic bestowed on a warlock ranges from minor but lasting alterations to the warlock's being (such as the ability to see in darkness or to read any language) to access to powerful spells. Unlike bookish wizards, warlocks supplement their magic with some facility at hand-to-hand combat. They are comfortable in light armor and know how to use simple weapons."
							]
						},
						{
							"type": "entries",
							"name": "Delvers into Secrets",
							"entries": [
								"Warlocks are driven by an insatiable need for knowledge and power, which compels them into their pacts and shapes their lives. This thirst drives warlocks into their pacts and shapes their later careers as well.",
								"Stories of warlocks binding themselves to fiends are widely known. But many warlocks serve patrons that are not fiendish. Sometimes a traveler in the wilds comes to a strangely beautiful tower, meets its fey lord or lady, and stumbles into a pact without being fully aware of it. And sometimes, while poring over tomes of forbidden lore, a brilliant but crazed student's mind is opened to realities beyond the material world and to the alien beings that dwell in the outer void.",
								"Once a pact is made, a warlock's thirst for knowledge and power can't be slaked with mere study and research. No one makes a pact with such a mighty patron if he or she doesn't intend to use the power thus gained. Rather, the vast majority of warlocks spend their days in active pursuit of their goals, which typically means some kind of adventuring. Furthermore, the demands of their patrons drive warlocks toward adventure."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Warlock",
							"entries": [
								"As you make your warlock character, spend some time thinking about your patron and the obligations that your pact imposes upon you. What led you to make the pact, and how did you make contact with your patron? Were you seduced into summoning a devil, or did you seek out the ritual that would allow you to make contact with an alien elder god? Did you search for your patron, or did your patron find and choose you? Do you chafe under the obligations of your pact or serve joyfully in anticipation of the rewards promised to you?",
								"Work with your DM to determine how big a part your pact will play in your character's adventuring career. Your patron's demands might drive you into adventures, or they might consist entirely of small favors you can do between adventures.",
								"What kind of relationship do you have with your patron? Is it friendly, antagonistic, uneasy, or romantic? How important does your patron consider you to be? What part do you play in your patron's plans? Do you know other servants of your patron?",
								"How does your patron communicate with you? If you have a familiar, it might occasionally speak with your patron's voice. Some warlocks find messages from their patrons etched on trees, mingled among tea leaves, or adrift in the clouds\u2014messages that only the warlock can see. Other warlocks converse with their patrons in dreams or waking visions, or deal only with intermediaries.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a warlock quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution. Second, choose the {@background charlatan} background. Third, choose the {@spell eldritch blast} and {@spell chill touch} cantrips, along with the 1st-level spells {@spell charm person} and {@spell witch bolt}."
									]
								}
							]
						}
					],
					"page": 105,
					"source": "PHB"
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"You think me mad? I think true insanity is being content to live a life of mortal drudgery when knowledge and power is there for the taking in the realm beyond."
							],
							"by": "Xarren, herald of Acamar"
						},
						"Warlocks are finders and keepers of secrets. They push at the edge of our understanding of the world, always seeking to expand their expertise. Where sages or wizards might heed a clear sign of danger and end their research, a warlock plunges ahead, heedless of the cost. Thus, it takes a peculiar mixture of intelligence, curiosity, and recklessness to produce a warlock. Many folk would describe that combination as evidence of madness. Warlocks see it as a demonstration of bravery.",
						"Warlocks are defined by two elements that work in concert to forge their path into this class. The first element is the event or circumstances that led to a warlock's entering into a pact with a planar entity. The second one is the nature of the entity a warlock is bound to. Unlike clerics, who typically embrace a deity and that god's ethos, a warlock might have no love for a patron, or vice versa.",
						"The sections that follow provide ways to embellish a warlock character that could generate some intriguing story and roleplaying opportunities.",
						{
							"type": "entries",
							"name": "Patron's Attitude",
							"entries": [
								"Every relationship is a two-way street, but in the case of warlocks and their patrons it's not necessarily true that both sides of the street are the same width or made of the same stuff. The feeling that a warlock holds for their patron, whether positive or negative, might be reciprocated by the patron, or the two participants in the pact might view one another with opposing emotions.",
								"When you determine the attitude your warlock character holds toward your patron, also consider how things look from the patron's perspective. How does your patron behave toward you? Is your patron a friend and ally, or an enemy that grants you power only because you forced a pact upon it?",
								{
									"type": "table",
									"caption": "Patron Attitudes",
									"colLabels": [
										"{@dice d6}",
										"Attitude"
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
											"Your patron has guided and helped your family for generations and is kindly toward you."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Each interaction with your capricious patron is a surprise, whether pleasant or painful."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your patron is the spirit of a long-dead hero who sees your pact as a way for it to continue to influence the world."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"Your patron is a strict disciplinarian but treats you with a measure of respect."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Your patron tricked you into a pact and treats you as a slave."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"You are mostly left to your own devices with no interference from your patron. Sometimes you dread the demands it will make when it does appear."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Special Terms of the Pact",
							"entries": [
								"A pact can range from a loose agreement to a formal contract with lengthy, detailed clauses and lists of requirements. The terms of a pact\u2014what a warlock must do to receive a patron's favor\u2014are always dictated by the patron. On occasion, those terms include a special proviso that might seem odd or whimsical, but warlocks take these dictates as seriously as they do the other requirements of their pacts.",
								"Does your character have a pact that requires you to change your behavior in an unusual or seemingly frivolous way? Even if your patron hasn't imposed such a duty on you already, that's not to say it couldn't still happen.",
								{
									"type": "table",
									"caption": "Special Terms",
									"colLabels": [
										"{@dice d6}",
										"Term"
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
											"When directed, you must take immediate action against a specific enemy of your patron."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Your pact tests your willpower; you are required to abstain from alcohol and other intoxicants."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"At least once a day, you must inscribe or carve your patron's name or symbol on the wall of a building."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You must occasionally conduct bizarre rituals to maintain your pact."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"You can never wear the same outfit twice, since your patron finds such predictability to be boring."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"When you use an eldritch invocation, you must speak your patron's name aloud or risk incurring its displeasure."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Binding Mark",
							"entries": [
								"Some patrons make a habit of, and often enjoy, marking the warlocks under their sway in some fashion. A binding mark makes it clear\u2014to those who know about such things\u2014that the individual in question is bound to the patron's service. A warlock might take advantage of such a mark, claiming it as proof of one's pact, or might want to keep it under wraps (if possible) to avoid the difficulties it might bring.",
								"If your warlock's pact comes with a binding mark, how you feel about displaying it probably depends on the nature of your relationship with the one who gave it to you. Is the mark a source of pride or something you are secretly ashamed of?",
								{
									"type": "table",
									"caption": "Binding Marks",
									"colLabels": [
										"d6",
										"Mark"
									],
									"colStyles": [
										"col-1 text-center",
										"col-11"
									],
									"rows": [
										[
											"1",
											"One of your eyes looks the same as one of your patron's eyes."
										],
										[
											"2",
											"Each time you wake up, the small blemish on your face appears in a different place."
										],
										[
											"3",
											"You display outward symptoms of a disease but suffer no ill effects from it."
										],
										[
											"4",
											"Your tongue is an unnatural color."
										],
										[
											"5",
											"You have a vestigial tail."
										],
										[
											"6",
											"Your nose glows in the dark."
										]
									]
								}
							]
						}
					],
					"page": 53,
					"source": "XGE"
				}
			]
		}
	],
	"subclass": [
		{
			"name": "The Archfey",
			"shortName": "Archfey",
			"source": "PHB",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 108,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"faerie fire",
							"sleep"
						],
						"s2": [
							"calm emotions",
							"phantasmal force"
						],
						"s3": [
							"blink",
							"plant growth"
						],
						"s4": [
							"dominate beast",
							"greater invisibility"
						],
						"s5": [
							"dominate person",
							"seeming"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Archfey|Warlock||Archfey||1",
				"Misty Escape|Warlock||Archfey||6",
				"Beguiling Defenses|Warlock||Archfey||10",
				"Dark Delirium|Warlock||Archfey||14"
			]
		},
		{
			"name": "The Fiend",
			"shortName": "Fiend",
			"source": "PHB",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 109,
			"srd": true,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"burning hands",
							"command"
						],
						"s2": [
							"blindness/deafness",
							"scorching ray"
						],
						"s3": [
							"fireball",
							"stinking cloud"
						],
						"s4": [
							"fire shield",
							"wall of fire"
						],
						"s5": [
							"flame strike",
							"hallow"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Fiend|Warlock||Fiend||1",
				"Dark One's Own Luck|Warlock||Fiend||6",
				"Fiendish Resilience|Warlock||Fiend||10",
				"Hurl Through Hell|Warlock||Fiend||14"
			]
		},
		{
			"name": "The Great Old One",
			"shortName": "Great Old One",
			"source": "PHB",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 109,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"dissonant whispers",
							"Tasha's hideous laughter"
						],
						"s2": [
							"detect thoughts",
							"phantasmal force"
						],
						"s3": [
							"clairvoyance",
							"sending"
						],
						"s4": [
							"dominate beast",
							"Evard's black tentacles"
						],
						"s5": [
							"dominate person",
							"telekinesis"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Great Old One|Warlock||Great Old One||1",
				"Entropic Ward|Warlock||Great Old One||6",
				"Thought Shield|Warlock||Great Old One||10",
				"Create Thrall|Warlock||Great Old One||14"
			]
		},
		{
			"name": "Ghost in the Machine (UA)",
			"shortName": "Ghost in the Machine (UA)",
			"source": "UAModernMagic",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"infallible relay (ua)|uamodernmagic",
							"remote access (ua)|uamodernmagic"
						],
						"s2": [
							"arcane hacking (ua)|uamodernmagic",
							"digital phantom (ua)|uamodernmagic"
						],
						"s3": [
							"haywire (ua)|uamodernmagic",
							"invisibility to cameras (ua)|uamodernmagic"
						],
						"s4": [
							"conjure knowbot (ua)|uamodernmagic",
							"system backdoor (ua)|uamodernmagic"
						],
						"s5": [
							"shutdown (ua)|uamodernmagic",
							"synchronicity (ua)|uamodernmagic"
						]
					}
				}
			],
			"subclassFeatures": [
				"Ghost in the Machine|Warlock||Ghost in the Machine (UA)|UAModernMagic|1",
				"Wire Walk|Warlock||Ghost in the Machine (UA)|UAModernMagic|6",
				"Personal Encryption|Warlock||Ghost in the Machine (UA)|UAModernMagic|10",
				"Technovirus|Warlock||Ghost in the Machine (UA)|UAModernMagic|14"
			]
		},
		{
			"name": "The Undying Light (UA)",
			"shortName": "Undying Light (UA)",
			"source": "UALightDarkUnderdark",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"light#c",
							"sacred flame#c"
						]
					},
					"expanded": {
						"s1": [
							"burning hands"
						],
						"s2": [
							"flaming sphere"
						],
						"s3": [
							"daylight"
						],
						"s4": [
							"fire shield"
						],
						"s5": [
							"flame strike"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Undying Light|Warlock||Undying Light (UA)|UALightDarkUnderdark|1",
				"Searing Vengeance|Warlock||Undying Light (UA)|UALightDarkUnderdark|6",
				"Radiant Resilience|Warlock||Undying Light (UA)|UALightDarkUnderdark|10",
				"Healing Light|Warlock||Undying Light (UA)|UALightDarkUnderdark|14"
			]
		},
		{
			"name": "The Undying",
			"shortName": "Undying",
			"source": "SCAG",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 139,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"spare the dying#c"
						]
					},
					"expanded": {
						"s1": [
							"false life",
							"ray of sickness"
						],
						"s2": [
							"blindness/deafness",
							"silence"
						],
						"s3": [
							"feign death",
							"speak with dead"
						],
						"s4": [
							"aura of life",
							"death ward"
						],
						"s5": [
							"contagion",
							"legend lore"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Undying|Warlock||Undying|SCAG|1",
				"Defy Death|Warlock||Undying|SCAG|6",
				"Undying Nature|Warlock||Undying|SCAG|10",
				"Indestructible Life|Warlock||Undying|SCAG|14"
			]
		},
		{
			"name": "The Seeker (UA)",
			"shortName": "Seeker (UA)",
			"source": "UATheFaithful",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 1,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"feather fall",
							"jump"
						],
						"s2": [
							"levitate",
							"locate object"
						],
						"s3": [
							"clairvoyance",
							"sending"
						],
						"s4": [
							"arcane eye",
							"locate creature"
						],
						"s5": [
							"legend lore",
							"passwall"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Seeker|Warlock||Seeker (UA)|UATheFaithful|1",
				"Astral Refuge|Warlock||Seeker (UA)|UATheFaithful|6",
				"Far Wanderer|Warlock||Seeker (UA)|UATheFaithful|10",
				"Astral Sequestration|Warlock||Seeker (UA)|UATheFaithful|14"
			]
		},
		{
			"name": "The Hexblade (UA)",
			"shortName": "Hexblade (UA)",
			"source": "UAWarlockAndWizard",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"shield",
							"wrathful smite"
						],
						"s2": [
							"branding smite",
							"magic weapon"
						],
						"s3": [
							"blink",
							"elemental weapon"
						],
						"s4": [
							"phantasmal killer",
							"staggering smite"
						],
						"s5": [
							"cone of cold",
							"destructive wave"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Hexblade|Warlock||Hexblade (UA)|UAWarlockAndWizard|1",
				"Shadow Hound|Warlock||Hexblade (UA)|UAWarlockAndWizard|6",
				"Armor of Hexes|Warlock||Hexblade (UA)|UAWarlockAndWizard|10",
				"Master of Hexes|Warlock||Hexblade (UA)|UAWarlockAndWizard|14"
			]
		},
		{
			"name": "The Raven Queen (UA)",
			"shortName": "Raven Queen (UA)",
			"source": "UAWarlockAndWizard",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"false life",
							"sanctuary"
						],
						"s2": [
							"silence",
							"spiritual weapon"
						],
						"s3": [
							"feign death",
							"speak with dead"
						],
						"s4": [
							"ice storm",
							"locate creature"
						],
						"s5": [
							"commune",
							"cone of cold"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Raven Queen|Warlock||Raven Queen (UA)|UAWarlockAndWizard|1",
				"Soul of the Raven|Warlock||Raven Queen (UA)|UAWarlockAndWizard|6",
				"Raven's Shield|Warlock||Raven Queen (UA)|UAWarlockAndWizard|10",
				"Queen's Right Hand|Warlock||Raven Queen (UA)|UAWarlockAndWizard|14"
			]
		},
		{
			"name": "The Celestial (UA)",
			"shortName": "Celestial (UA)",
			"source": "UARevisedClassOptions",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"burning hands",
							"cure wounds"
						],
						"s2": [
							"flaming sphere",
							"lesser restoration"
						],
						"s3": [
							"daylight",
							"revivify"
						],
						"s4": [
							"guardian of faith",
							"wall of fire"
						],
						"s5": [
							"flame strike",
							"greater restoration"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Celestial|Warlock||Celestial (UA)|UARevisedClassOptions|1",
				"Radiant Soul|Warlock||Celestial (UA)|UARevisedClassOptions|6",
				"Celestial Resilience|Warlock||Celestial (UA)|UARevisedClassOptions|10",
				"Healing Light|Warlock||Celestial (UA)|UARevisedClassOptions|14"
			]
		},
		{
			"name": "The Celestial",
			"shortName": "Celestial",
			"source": "XGE",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 54,
			"additionalSpells": [
				{
					"known": {
						"1": [
							"sacred flame#c",
							"light#c"
						]
					},
					"expanded": {
						"s1": [
							"cure wounds",
							"guiding bolt"
						],
						"s2": [
							"flaming sphere",
							"lesser restoration"
						],
						"s3": [
							"daylight",
							"revivify"
						],
						"s4": [
							"guardian of faith",
							"wall of fire"
						],
						"s5": [
							"flame strike",
							"greater restoration"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Celestial|Warlock||Celestial|XGE|1",
				"Radiant Soul|Warlock||Celestial|XGE|6",
				"Celestial Resilience|Warlock||Celestial|XGE|10",
				"Searing Vengeance|Warlock||Celestial|XGE|14"
			]
		},
		{
			"name": "The Hexblade",
			"shortName": "Hexblade",
			"source": "XGE",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 55,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"shield",
							"wrathful smite"
						],
						"s2": [
							"blur",
							"branding smite"
						],
						"s3": [
							"blink",
							"elemental weapon"
						],
						"s4": [
							"phantasmal killer",
							"staggering smite"
						],
						"s5": [
							"banishing smite",
							"cone of cold"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Hexblade|Warlock||Hexblade|XGE|1",
				"Accursed Specter|Warlock||Hexblade|XGE|6",
				"Armor of Hexes|Warlock||Hexblade|XGE|10",
				"Master of Hexes|Warlock||Hexblade|XGE|14"
			]
		},
		{
			"name": "The Lurker in the Deep (UA)",
			"shortName": "Lurker in the Deep (UA)",
			"source": "UASorcererAndWarlock",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"create or destroy water",
							"thunderwave"
						],
						"s2": [
							"gust of wind",
							"silence"
						],
						"s3": [
							"lightning bolt",
							"sleet storm"
						],
						"s4": [
							"control water",
							"Evard's black tentacles"
						],
						"s5": [
							"commune with nature",
							"cone of cold"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Lurker in the Deep|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|1",
				"Fathomless Soul|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|6",
				"Guardian Grasp|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|6",
				"Devouring Maw|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|10",
				"Unleash the Depths|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|14"
			]
		},
		{
			"name": "The Noble Genie (UA)",
			"shortName": "Noble Genie (UA)",
			"source": "UA2020SubclassesPt1",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 4,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"fog cloud",
							"sleep"
						],
						"s2": [
							"enlarge/reduce",
							"phantasmal force"
						],
						"s3": [
							"create food and water",
							"protection from energy"
						],
						"s4": [
							"polymorph",
							"phantasmal killer"
						],
						"s5": [
							"Bigby's hand",
							"creation"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Noble Genie|Warlock||Noble Genie (UA)|UA2020SubclassesPt1|1",
				"Elemental Resistance|Warlock||Noble Genie (UA)|UA2020SubclassesPt1|6",
				"Protective Wish|Warlock||Noble Genie (UA)|UA2020SubclassesPt1|10",
				"Genie's Entertainment|Warlock||Noble Genie (UA)|UA2020SubclassesPt1|10",
				"Collector's Call|Warlock||Noble Genie (UA)|UA2020SubclassesPt1|14"
			]
		},
		{
			"name": "The Genie (UA)",
			"shortName": "Genie (UA)",
			"source": "UA2020SubclassesRevisited",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"name": "Dao",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"sanctuary"
						],
						"s2": [
							"phantasmal force",
							"spike growth"
						],
						"s3": [
							"create food and water",
							"meld into stone"
						],
						"s4": [
							"phantasmal killer",
							"stone shape"
						],
						"s5": [
							"creation",
							"wall of stone"
						]
					}
				},
				{
					"name": "Djinni",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"thunderwave"
						],
						"s2": [
							"phantasmal force",
							"gust of wind"
						],
						"s3": [
							"create food and water",
							"wind wall"
						],
						"s4": [
							"phantasmal killer",
							"greater invisibility"
						],
						"s5": [
							"creation",
							"seeming"
						]
					}
				},
				{
					"name": "Efreeti",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"burning hands"
						],
						"s2": [
							"phantasmal force",
							"scorching ray"
						],
						"s3": [
							"create food and water",
							"fireball"
						],
						"s4": [
							"phantasmal killer",
							"fire shield"
						],
						"s5": [
							"creation",
							"flame strike"
						]
					}
				},
				{
					"name": "Marid",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"fog cloud"
						],
						"s2": [
							"phantasmal force",
							"blur"
						],
						"s3": [
							"create food and water",
							"sleet storm"
						],
						"s4": [
							"phantasmal killer",
							"control water"
						],
						"s5": [
							"creation",
							"cone of cold"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Genie|Warlock||Genie (UA)|UA2020SubclassesRevisited|1",
				"Elemental Gift|Warlock||Genie (UA)|UA2020SubclassesRevisited|6",
				"Sanctuary Vessel|Warlock||Genie (UA)|UA2020SubclassesRevisited|10",
				"Limited Wish|Warlock||Genie (UA)|UA2020SubclassesRevisited|14"
			]
		},
		{
			"name": "The Undead (UA)",
			"shortName": "Undead (UA)",
			"source": "UA2020SubclassesPt4",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"bane",
							"false life"
						],
						"s2": [
							"blindness/deafness",
							"phantasmal force"
						],
						"s3": [
							"speak with dead",
							"phantom steed"
						],
						"s4": [
							"death ward",
							"greater invisibility"
						],
						"s5": [
							"antilife shell",
							"cloudkill"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Undead|Warlock||Undead (UA)|UA2020SubclassesPt4|1",
				"Grave Touched|Warlock||Undead (UA)|UA2020SubclassesPt4|6",
				"Mortal Husk|Warlock||Undead (UA)|UA2020SubclassesPt4|10",
				"Spirit Projection|Warlock||Undead (UA)|UA2020SubclassesPt4|14"
			]
		},
		{
			"name": "The Fathomless",
			"shortName": "Fathomless",
			"source": "TCE",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 72,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"create or destroy water",
							"thunderwave"
						],
						"s2": [
							"gust of wind",
							"silence"
						],
						"s3": [
							"lightning bolt",
							"sleet storm"
						],
						"s4": [
							"control water",
							"summon elemental|tce"
						],
						"s5": [
							"Bigby's hand",
							"cone of cold"
						]
					},
					"known": {
						"10": {
							"daily": {
								"1": [
									"Evard's black tentacles"
								]
							}
						}
					}
				}
			],
			"subclassFeatures": [
				"The Fathomless|Warlock||Fathomless|TCE|1",
				"Oceanic Soul|Warlock||Fathomless|TCE|6",
				"Guardian Coil|Warlock||Fathomless|TCE|6",
				"Grasping Tentacles|Warlock||Fathomless|TCE|10",
				"Fathomless Plunge|Warlock||Fathomless|TCE|14"
			]
		},
		{
			"name": "The Genie",
			"shortName": "Genie",
			"source": "TCE",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 73,
			"additionalSpells": [
				{
					"name": "Dao",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"sanctuary"
						],
						"s2": [
							"phantasmal force",
							"spike growth"
						],
						"s3": [
							"create food and water",
							"meld into stone"
						],
						"s4": [
							"phantasmal killer",
							"stone shape"
						],
						"s5": [
							"creation",
							"wall of stone"
						]
					}
				},
				{
					"name": "Djinni",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"thunderwave"
						],
						"s2": [
							"phantasmal force",
							"gust of wind"
						],
						"s3": [
							"create food and water",
							"wind wall"
						],
						"s4": [
							"phantasmal killer",
							"greater invisibility"
						],
						"s5": [
							"creation",
							"seeming"
						]
					}
				},
				{
					"name": "Efreeti",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"burning hands"
						],
						"s2": [
							"phantasmal force",
							"scorching ray"
						],
						"s3": [
							"create food and water",
							"fireball"
						],
						"s4": [
							"phantasmal killer",
							"fire shield"
						],
						"s5": [
							"creation",
							"flame strike"
						]
					}
				},
				{
					"name": "Marid",
					"expanded": {
						"9": [
							"wish"
						],
						"s1": [
							"detect evil and good",
							"fog cloud"
						],
						"s2": [
							"phantasmal force",
							"blur"
						],
						"s3": [
							"create food and water",
							"sleet storm"
						],
						"s4": [
							"phantasmal killer",
							"control water"
						],
						"s5": [
							"creation",
							"cone of cold"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Genie|Warlock||Genie|TCE|1",
				"Elemental Gift|Warlock||Genie|TCE|6",
				"Sanctuary Vessel|Warlock||Genie|TCE|10",
				"Limited Wish|Warlock||Genie|TCE|14"
			]
		},
		{
			"name": "The Undead",
			"shortName": "Undead",
			"source": "VRGR",
			"className": "Warlock",
			"classSource": "PHB",
			"page": 30,
			"additionalSpells": [
				{
					"expanded": {
						"s1": [
							"bane",
							"false life"
						],
						"s2": [
							"blindness/deafness",
							"phantasmal force"
						],
						"s3": [
							"phantom steed",
							"speak with dead"
						],
						"s4": [
							"death ward",
							"greater invisibility"
						],
						"s5": [
							"antilife shell",
							"cloudkill"
						]
					}
				}
			],
			"subclassFeatures": [
				"The Undead|Warlock||Undead|VRGR|1",
				"Grave Touched|Warlock||Undead|VRGR|6",
				"Necrotic Husk|Warlock||Undead|VRGR|10",
				"Spirit Projection|Warlock||Undead|VRGR|14"
			]
		},
		{
			"name": "Mage of Lorehold (UA)",
			"shortName": "Lorehold (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Warlock",
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
			"name": "Mage of Silverquill (UA)",
			"shortName": "Silverquill (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Warlock",
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
			"name": "Mage of Witherbloom (UA)",
			"shortName": "Witherbloom (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Warlock",
			"classSource": "PHB",
			"_copy": {
				"name": "Mage of Witherbloom (UA)",
				"shortName": "Witherbloom (UA)",
				"source": "UA2021MagesOfStrixhaven",
				"className": "Generic",
				"classSource": "Generic",
				"_preserve": {
					"page": true
				}
			}
		}
	],
	"classFeature": [
		{
			"name": "Otherworldly Patron",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"At 1st level, you have struck a bargain with an otherworldly being chosen from the list of available patrons. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
			]
		},
		{
			"name": "Pact Magic",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter warlock spell list|spells|class=warlock}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table."
					]
				},
				{
					"type": "entries",
					"name": "Spell Slots",
					"entries": [
						"The Warlock table shows how many spell slots you have to cast your {@filter warlock spells|spells|class=warlock} of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
						"For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell {@spell witch bolt}, you must spend one of those slots, and you cast it as a 3rd-level spell."
					]
				},
				{
					"type": "entries",
					"name": "Spells Known of 1st Level and Higher",
					"entries": [
						"At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
						"The Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
						"Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
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
						"You can use an {@item arcane focus|phb} as a spellcasting focus for your warlock spells."
					]
				}
			]
		},
		{
			"name": "Spell Versatility",
			"source": "UAClassFeatureVariants",
			"page": 10,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level warlock feature (enhances Pact Magic)}",
				"Whenever you finish a long rest, you can replace one spell you learned from this Pact Magic feature with another spell from the warlock spell list. The new spell must be the same level as the spell you replace."
			]
		},
		{
			"name": "Eldritch Invocations",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
				"At 2nd level, you gain two eldritch invocations of your choice. A list of the available options can be found on the {@filter Optional Features|optionalfeatures|Feature Type=EI} page. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.",
				"Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.",
				"If an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class."
			]
		},
		{
			"name": "Pact Boon",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pact of the Chain"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pact of the Blade"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pact of the Tome"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pact of the Star Chain|UATheFaithful"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pact of the Talisman|UAClassFeatureVariants"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Pact of the Talisman|TCE"
						}
					]
				}
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Eldritch Versatility",
			"source": "TCE",
			"page": 70,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level warlock {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change of focus in your occult studies:",
				{
					"type": "list",
					"items": [
						"Replace one cantrip you learned from this class's Pact Magic feature with another cantrip from the {@filter warlock spell list|spells|level=0|class=Warlock}.",
						"Replace the option you chose for the Pact Boon feature with one of that feature's other options.",
						"If you're 12th level or higher, replace one spell from your Mystic Arcanum feature with another warlock spell of the same level."
					]
				},
				"If this change makes you ineligible for any of your Eldritch Invocations, you must also replace them now, choosing invocations for which you qualify."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Warlock",
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
			"name": "Otherworldly Patron feature",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature granted by your Otherworldly Patron."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
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
			"className": "Warlock",
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
			"name": "Otherworldly Patron feature",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you gain a feature granted by your Otherworldly Patron."
			]
		},
		{
			"name": "Mystic Arcanum (6th level)",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 11,
			"entries": [
				"At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one {@filter 6th-level spell from the warlock spell list|spells|level=6|class=Warlock} as this arcanum.",
				"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
				"At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
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
			"className": "Warlock",
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
			"name": "Mystic Arcanum (7th level)",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 13,
			"entries": [
				"At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one {@filter 7th-level spell from the warlock spell list|spells|level=7|class=Warlock} as this arcanum.",
				"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
			]
		},
		{
			"name": "Otherworldly Patron feature",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature granted by your Otherworldly Patron."
			]
		},
		{
			"name": "Mystic Arcanum (8th level)",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one {@filter 8th-level spell from the warlock spell list|spells|level=8|class=Warlock} as this arcanum.",
				"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
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
			"className": "Warlock",
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
			"name": "Mystic Arcanum (9th level)",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one {@filter 9th-level spell from the warlock spell list|spells|level=9|class=Warlock} as this arcanum.",
				"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
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
			"className": "Warlock",
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
			"name": "Eldritch Master",
			"source": "PHB",
			"page": 105,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "The Archfey",
			"source": "PHB",
			"page": 108,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Archfey",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Archfey Expanded Spells",
							"colLabels": [
								"Spell Level",
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
									"2nd",
									"{@spell calm emotions}, {@spell phantasmal force}"
								],
								[
									"3rd",
									"{@spell blink}, {@spell plant growth}"
								],
								[
									"4th",
									"{@spell dominate beast}, {@spell greater invisibility}"
								],
								[
									"5th",
									"{@spell dominate person}, {@spell seeming}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fey Presence|Warlock||Archfey||1"
				}
			]
		},
		{
			"name": "Fey Presence",
			"source": "PHB",
			"page": 108,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Archfey",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all {@condition charmed} or {@condition frightened} by you (your choice) until the end of your next turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Misty Escape",
			"source": "PHB",
			"page": 108,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Archfey",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn {@condition invisible} and teleport up to 60 feet to an unoccupied space you can see. You remain {@condition invisible} until the start of your next turn or until you attack or cast a spell.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Beguiling Defenses",
			"source": "PHB",
			"page": 108,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Archfey",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being {@condition charmed}, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be {@condition charmed} by you for 1 minute or until the creature takes any damage."
			]
		},
		{
			"name": "Dark Delirium",
			"source": "PHB",
			"page": 108,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Archfey",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is {@condition charmed} or {@condition frightened} by you (your choice) for 1 minute or until your {@status concentration} is broken (as if you are {@status concentration||concentrating} on a spell). This effect ends early if the creature takes any damage.",
				"Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.",
				"You must finish a short or long rest before you can use this feature again."
			]
		},
		{
			"name": "The Fiend",
			"source": "PHB",
			"page": 109,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fiend",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Fiend Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell burning hands}, {@spell command}"
								],
								[
									"2nd",
									"{@spell blindness/deafness}, {@spell scorching ray}"
								],
								[
									"3rd",
									"{@spell fireball}, {@spell stinking cloud}"
								],
								[
									"4th",
									"{@spell fire shield}, {@spell wall of fire}"
								],
								[
									"5th",
									"{@spell flame strike}, {@spell hallow}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Dark One's Blessing|Warlock||Fiend||1"
				}
			]
		},
		{
			"name": "Dark One's Blessing",
			"source": "PHB",
			"page": 109,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fiend",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
			]
		},
		{
			"name": "Dark One's Own Luck",
			"source": "PHB",
			"page": 109,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fiend",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a {@dice d10} to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Fiendish Resilience",
			"source": "PHB",
			"page": 109,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fiend",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
			]
		},
		{
			"name": "Hurl Through Hell",
			"source": "PHB",
			"page": 109,
			"srd": true,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fiend",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.",
				"At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes {@damage 10d10} psychic damage as it reels from its horrific experience.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "The Great Old One",
			"source": "PHB",
			"page": 109,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Great Old One",
			"subclassSource": "PHB",
			"level": 1,
			"entries": [
				"Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Great Old One Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell dissonant whispers}, {@spell Tasha's hideous laughter}"
								],
								[
									"2nd",
									"{@spell detect thoughts}, {@spell phantasmal force}"
								],
								[
									"3rd",
									"{@spell clairvoyance}, {@spell sending}"
								],
								[
									"4th",
									"{@spell dominate beast}, {@spell Evard's black tentacles}"
								],
								[
									"5th",
									"{@spell dominate person}, {@spell telekinesis}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Awakened Mind|Warlock||Great Old One||1"
				}
			]
		},
		{
			"name": "Awakened Mind",
			"source": "PHB",
			"page": 109,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Great Old One",
			"subclassSource": "PHB",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
			]
		},
		{
			"name": "Entropic Ward",
			"source": "PHB",
			"page": 109,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Great Old One",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Thought Shield",
			"source": "PHB",
			"page": 109,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Great Old One",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do."
			]
		},
		{
			"name": "Create Thrall",
			"source": "PHB",
			"page": 109,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Great Old One",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an {@condition incapacitated} humanoid. That creature is then {@condition charmed} by you until a {@spell remove curse} spell is cast on it, the {@condition charmed} condition is removed from it, or you use this feature again.",
				"You can communicate telepathically with the {@condition charmed} creature as long as the two of you are on the same plane of existence."
			]
		},
		{
			"name": "The Undying",
			"source": "SCAG",
			"page": 139,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying",
			"subclassSource": "SCAG",
			"level": 1,
			"entries": [
				"Death holds no sway over your patron, who has unlocked the secrets of everlasting life, although such a prize\u2014like all power\u2014comes at a price. Once mortal, the Undying has seen mortal lifetimes pass like the seasons, like the flicker of endless days and nights. It has the secrets of the ages to share, secrets of life and death. Beings of this sort include Vecna, Lord of the Hand and the Eye; the dread Iuz; the lich-queen Vol; the Undying Court of Aerenal; Vlaakith, lich-queen of the githyanki; and the deathless wizard Fistandantalus.",
				"In the Realms, Undying patrons include Larloch the Shadow King, legendary master of Warlock's Crypt, and Gilgeam, the God-King of Unther.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Undying lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Undying Expanded Spells",
							"colLabels": [
								"Spell Level",
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
									"2nd",
									"{@spell blindness/deafness}, {@spell silence}"
								],
								[
									"3rd",
									"{@spell feign death}, {@spell speak with dead}"
								],
								[
									"4th",
									"{@spell aura of life}, {@spell death ward}"
								],
								[
									"5th",
									"{@spell contagion}, {@spell legend lore}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Among the Dead|Warlock||Undying|SCAG|1"
				}
			]
		},
		{
			"name": "Among the Dead",
			"source": "SCAG",
			"page": 139,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying",
			"subclassSource": "SCAG",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you learn the {@spell spare the dying} cantrip, which counts as a warlock cantrip for you. You also have advantage on saving throws against any disease.",
				"Additionally, undead have difficulty harming you. If an undead targets you directly with an attack or a harmful spell, that creature must make a Wisdom saving throw against your spell save DC (an undead needn't make the save when it includes you in an area effect, such as the explosion of {@spell fireball}). On a failed save, the creature must choose a new target or forfeit targeting someone instead of you, potentially wasting the attack or spell. On a successful save, the creature is immune to this effect for 24 hours. An undead is also immune to this effect for 24 hours if you target it with an attack or a harmful spell."
			]
		},
		{
			"name": "Defy Death",
			"source": "SCAG",
			"page": 139,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying",
			"subclassSource": "SCAG",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can give yourself vitality when you cheat death or when you help someone else cheat it. You can regain hit points equal to {@dice 1d8} + your Constitution modifier (minimum of 1 hit point) when you succeed on a death saving throw or when you stabilize a creature with {@spell spare the dying}.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Undying Nature",
			"source": "SCAG",
			"page": 139,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying",
			"subclassSource": "SCAG",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you can hold your breath indefinitely, and you don't require food, water, or sleep, although you still require rest to reduce {@condition exhaustion} and still benefit from finishing short and long rests.",
				"In addition, you age at a slower rate. For every 10 years that pass, your body ages only 1 year, and you are immune to being magically aged."
			]
		},
		{
			"name": "Indestructible Life",
			"source": "SCAG",
			"page": 139,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying",
			"subclassSource": "SCAG",
			"level": 14,
			"header": 2,
			"entries": [
				"When you reach 14th level, you partake some of the true secrets of the Undying. On your turn, you can use a bonus action to regain hit points equal to {@dice 1d8} + your warlock level. Additionally, if you put a severed body part of yours back in place when you use this feature, the part reattaches.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "The Fathomless",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"You have plunged into a pact with the deeps. An entity of the ocean, the Elemental Plane of Water, or another otherworldly sea now allows you to draw on its thalassic power. Is it merely using you to learn about terrestrial realms, or does it want you to open cosmic floodgates and drown the world?",
				"Perhaps you were born into a generational cult that venerates the Fathomless and its spawn. Or you might have been shipwrecked and on the brink of drowning when your patron's grasp offered you a chance at life. Whatever the reason for your pact, the sea and its unknown depths call to you.",
				"Entities of the deep that might empower a warlock include krakens, ancient water elementals, godlike hallucinations dreamed into being by kuo-toa, merfolk demigods, and sea hag covens.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"{@i 1st-level Fathomless feature}",
						"The Fathomless lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Fathomless Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell create or destroy water}, {@spell thunderwave}"
								],
								[
									"2nd",
									"{@spell gust of wind}, {@spell silence}"
								],
								[
									"3rd",
									"{@spell lightning bolt}, {@spell sleet storm}"
								],
								[
									"4th",
									"{@spell control water}, {@spell summon elemental|tce} (water only)"
								],
								[
									"5th",
									"{@spell Bigby's hand} (appears as a tentacle), {@spell cone of cold}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tentacle of the Deeps|Warlock||Fathomless|TCE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Gift of the Sea|Warlock||Fathomless|TCE|1"
				}
			]
		},
		{
			"name": "Gift of the Sea",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fathomless feature}",
				"You gain a swimming speed of 40 feet, and you can breathe underwater."
			]
		},
		{
			"name": "Tentacle of the Deeps",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Fathomless feature}",
				"You can magically summon a spectral tentacle that strikes at your foes. As a bonus action, you create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle.",
				"When you create the tentacle, you can make a melee spell attack against one creature within 10 feet of it. On a hit, the target takes {@damage 1d8} cold damage, and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage increases to {@dice 2d8}.",
				"As a bonus action on your turn, you can move the tentacle up to 30 feet and repeat the attack.",
				"You can summon the tentacle a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Guardian Coil",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Fathomless feature}",
				"Your Tentacle of the Deeps can defend you and others, interposing itself between them and harm. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to that creature by {@dice 1d8}. When you reach 10th level in this class, the damage reduced by the tentacle increases to {@dice 2d8}."
			]
		},
		{
			"name": "Oceanic Soul",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Fathomless feature}",
				"You are now even more at home in the depths. You gain resistance to cold damage. In addition, when you are fully submerged, any creature that is also fully submerged can understand your speech, and you can understand theirs."
			]
		},
		{
			"name": "Grasping Tentacles",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Fathomless feature}",
				"You learn the spell {@spell Evard's black tentacles}. It counts as a warlock spell for you, but it doesn't count against the number of spells you know. You can also cast it once without a spell slot, and you regain the ability to do so when you finish a long rest.",
				"Whenever you cast this spell, your patron's magic bolsters you, granting you a number of temporary hit points equal to your warlock level. Moreover, damage can't break your {@status concentration} on this spell."
			]
		},
		{
			"name": "Fathomless Plunge",
			"source": "TCE",
			"page": 72,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Fathomless",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Fathomless feature}",
				"You can magically open temporary conduits to watery destinations. As an action, you can teleport yourself and up to five other willing creatures that you can see within 30 feet of you. Amid a whirl of tentacles, you all vanish and then reappear up to 1 mile away in a body of water you've seen (pond size or larger) or within 30 feet of it, each of you appearing in an unoccupied space within 30 feet of the others.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "The Genie",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"You have made a pact with one of the rarest kinds of genie, a noble genie. Such entities rule vast fiefs on the Elemental Planes and have great influence over lesser genies and elemental creatures. Noble genies are varied in their motivations, but most are arrogant and wield power that rivals that of lesser deities. They delight in turning the table on mortals, who often bind genies into servitude, and readily enter into pacts that expand their reach.",
				"You choose your patron's kind or determine it randomly, using the Genie Kind table.",
				{
					"type": "table",
					"caption": "Genie Kind",
					"colLabels": [
						"d4",
						"Kind",
						"Element"
					],
					"colStyles": [
						"col-2 text-center",
						"col-5",
						"col-5"
					],
					"rows": [
						[
							1,
							"{@creature Dao}",
							"Earth"
						],
						[
							2,
							"{@creature Djinni}",
							"Air"
						],
						[
							3,
							"{@creature Efreeti}",
							"Fire"
						],
						[
							4,
							"{@creature Marid}",
							"Water"
						]
					]
				},
				{
					"name": "Expanded Spell List",
					"type": "entries",
					"entries": [
						"{@i 1st-level Genie feature}",
						"The Genie lets you choose from an expanded list of spells when you learn a warlock spell. The Genie Expanded Spells table shows the genie spells that are added to the warlock spell list for you, along with the spells associated in the table with your patron's kind: dao, djinni, efreeti, or marid.",
						{
							"type": "table",
							"caption": "Genie Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Genie Spells",
								"Dao Spells",
								"Djinni Spells",
								"Efreeti Spells",
								"Marid Spells"
							],
							"colStyles": [
								"col-1 text-center",
								"col-2-2",
								"col-2-2",
								"col-2-2",
								"col-2-2",
								"col-2-2"
							],
							"rows": [
								[
									"1st",
									"{@spell detect evil and good}",
									"{@spell sanctuary}",
									"{@spell thunderwave}",
									"{@spell burning hands}",
									"{@spell fog cloud}"
								],
								[
									"2nd",
									"{@spell phantasmal force}",
									"{@spell spike growth}",
									"{@spell gust of wind}",
									"{@spell scorching ray}",
									"{@spell blur}"
								],
								[
									"3rd",
									"{@spell create food and water}",
									"{@spell meld into stone}",
									"{@spell wind wall}",
									"{@spell fireball}",
									"{@spell sleet storm}"
								],
								[
									"4th",
									"{@spell phantasmal killer}",
									"{@spell stone shape}",
									"{@spell greater invisibility}",
									"{@spell fire shield}",
									"{@spell control water}"
								],
								[
									"5th",
									"{@spell creation}",
									"{@spell wall of stone}",
									"{@spell seeming}",
									"{@spell flame strike}",
									"{@spell cone of cold}"
								],
								[
									"9th",
									"{@spell wish}",
									"\u2014",
									"\u2014",
									"\u2014",
									"\u2014"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Genie's Vessel|Warlock||Genie|TCE|1"
				}
			]
		},
		{
			"name": "Genie's Vessel",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Genie feature}",
				"Your patron gifts you a magical vessel that grants you a measure of the genie's power. The vessel is a Tiny object, and you can use it as a spellcasting focus for your warlock spells. You decide what the object is, or you can determine what it is randomly by rolling on the Genie's Vessel table.",
				{
					"type": "table",
					"caption": "Genie's Vessel",
					"colLabels": [
						"d6",
						"Vessel"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Oil lamp"
						],
						[
							"2",
							"Urn"
						],
						[
							"3",
							"Ring with a compartment"
						],
						[
							"4",
							"Stoppered bottle"
						],
						[
							"5",
							"Hollow statuette"
						],
						[
							"6",
							"Ornate lantern"
						]
					]
				},
				"While you are touching the vessel, you can use it in the following ways:",
				{
					"type": "options",
					"style": "list-hang-notitle",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Bottled Respite|Warlock|TCE|Genie|TCE|1"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Genie's Wrath|Warlock|TCE|Genie|TCE|1"
						}
					]
				},
				"The vessel's AC equals your spell save DC. Its hit points equal your warlock level plus your proficiency bonus, and it is immune to poison and psychic damage.",
				"If the vessel is destroyed or you lose it, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental power when you die."
			]
		},
		{
			"name": "Elemental Gift",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Genie feature}",
				"You begin to take on characteristics of your patron's kind. You now have resistance to a damage type determined by your patron's kind: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).",
				"In addition, as a bonus action, you can give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Sanctuary Vessel",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Genie feature}",
				"When you enter your Genie's Vessel via the Bottled Respite feature, you can now choose up to five willing creatures that you can see within 30 feet of you, and the chosen creatures are drawn into the vessel with you.",
				"As a bonus action, you can eject any number of creatures from the vessel, and everyone is ejected if you leave or die or if the vessel is destroyed.",
				"In addition, anyone (including you) who remains within the vessel for at least 10 minutes gains the benefit of finishing a short rest, and anyone can add your proficiency bonus to the number of hit points they regain if they spend any Hit Dice as part of a short rest there."
			]
		},
		{
			"name": "Limited Wish",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Genie feature}",
				"You entreat your patron to grant you a small wish. As an action, you can speak your desire to your Genie's Vessel, requesting the effect of one spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components; the spell simply takes effect as part of this action.",
				"Once you use this feature, you can't use it again until you finish {@dice 1d4} long rests."
			]
		},
		{
			"name": "The Noble Genie",
			"source": "UA2020SubclassesPt1",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Noble Genie (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 1,
			"entries": [
				"You made a pact with one of the rarest of geniekind, a noble genie. Such entities are rulers of vast fiefs on the Elemental Planes and have great influence over lesser genies and elemental creatures. Noble genies are varied in their motivations but are all arrogant collectors of creatures, knowledge, and treasure. A genie values their collection and will protect that which they claim ownership over. Through your connection to the noble, you can leverage their influence and extend their ownership of things in the multiverse.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"{@i 1st-level Noble Genie feature}",
						"The Noble Genie lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Noble Genie Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell fog cloud}, {@spell sleep}"
								],
								[
									"2nd",
									"{@spell enlarge/reduce}, {@spell phantasmal force}"
								],
								[
									"3rd",
									"{@spell create food and water}, {@spell protection from energy}"
								],
								[
									"4th",
									"{@spell polymorph}, {@spell phantasmal killer}"
								],
								[
									"5th",
									"{@spell Bigby's hand}, {@spell creation}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Collector's Vessel|Warlock||Noble Genie (UA)|UA2020SubclassesPt1|1"
				}
			]
		},
		{
			"name": "Collector's Vessel",
			"source": "UA2020SubclassesPt1",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Noble Genie (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Noble Genie feature}",
				"Your patron gives you a magical vessel with which you can bind a creature to you and to your patron's menagerie. The vessel is a Tiny object, and it is a spellcasting focus for you. You decide what the object is, or you can determine what it is randomly by rolling on the Collector's Vessel table.",
				{
					"type": "table",
					"caption": "Collector's Vessel",
					"colLabels": [
						"d6",
						"Vessel"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Oil lamp"
						],
						[
							"2",
							"Urn"
						],
						[
							"3",
							"Ring with a compartment"
						],
						[
							"4",
							"Stoppered bottle"
						],
						[
							"5",
							"Hollow statuette"
						],
						[
							"6",
							"Ornate lantern"
						]
					]
				},
				"If you lose your vessel, you can perform a 1 hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous vessel. The vessel vanishes in a flare of elemental power when you die.",
				"As an action while you are holding the vessel, you target a willing creature you can see within 100 feet of you and create a tether of wispy elemental material that links the target to you. The tether lasts for 1 hour, until you use this feature to create another tether, until the bound target is reduced to 0 hit points, or until the target ends its turn more than 100 feet from you.",
				"While you are tethered to a creature, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain a bonus to your Wisdom ({@skill Perception}) checks equal to your Charisma modifier (minimum of +1).",
						"When you can cast a spell, you can deliver the spell from your space or the bound creature's space."
					]
				},
				"You can create the tether a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
				{
					"type": "inset",
					"name": "Collector's Vessel and Pact Boons",
					"entries": [
						"When you create a tether with your Collector's Vessel, the tether takes on a form that reflects your patron's type of geniekind: swirling mist and wind for a {@creature djinni}, sand and flecks of rock or gems for a {@creature dao}, smoke and embers for an {@creature efreeti}, and foamy water for a {@creature marid}.",
						"When you gain the Pact Boon feature at 3rd level, if you choose a boon that grants you a physical object, your vessel transforms into that object. For example, a warlock whose patron is a noble efreeti and chooses the Pact of the Tome might find their bottle transformed into an elaborate scroll made of a red dragon's wing, with brass and iron rolling rods."
					]
				}
			]
		},
		{
			"name": "Elemental Resistance",
			"source": "UA2020SubclassesPt1",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Noble Genie (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Noble Genie feature}",
				"Your patron grants you protection from an element. Whenever you finish a long rest, you gain resistance to acid, cold, fire, or lightning damage (your choice) until the end of your next long rest.",
				"While the tether of your Collector's Vessel is active, the tethered creature gains resistance to the damage type you chose."
			]
		},
		{
			"name": "Genie's Entertainment",
			"source": "UA2020SubclassesPt1",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Noble Genie (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Noble Genie feature}",
				"As an action, you attempt to send a creature you can see within 90 feet to your patron's court. The target must succeed on a Charisma saving throw against your warlock spell save DC or be magically drawn into your vessel and teleported to your patron's court in the Elemental Planes. While there, the target is {@condition stunned} and your patron marvels at the target with amusement but brings no harm to it. The target can repeat the saving throw at the end of each of its turns, reappearing in the space it left or in the nearest unoccupied space if that space is occupied on a success.",
				"Once you use this feature, you can't use it again until you finish a long rest. If the target remains in your patron's court for 1 minute, the genie sends the target back at the end of its turn as if it successfully saved, and you regain the use of this feature."
			]
		},
		{
			"name": "Protective Wish",
			"source": "UA2020SubclassesPt1",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Noble Genie (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Noble Genie feature}",
				"You're now able to use your Collector's Vessel to wish for protection for yourself or your tethered creature. If you or the tethered creature is hit by an attack, you can use your reaction to teleport, swapping places with the creature and switching which one of you is hit by the attack."
			]
		},
		{
			"name": "Collector's Call",
			"source": "UA2020SubclassesPt1",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Noble Genie (UA)",
			"subclassSource": "UA2020SubclassesPt1",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Noble Genie feature}",
				"In exchange for extending your patron's influence over the multiverse, you can call on more of their power. As an action, you can implore your patron for aid by making a Charisma ({@skill Persuasion}) check against your warlock spell save DC. If the check succeeds, you can choose one of the following effects:",
				{
					"type": "list",
					"items": [
						"A creature you can see within 60 feet of you regains {@dice 8d6} hit points and ends one disease or condition afflicting it: {@condition blinded}, {@condition charmed}, {@condition deafened}, {@condition frightened}, {@condition paralyzed}, or {@condition poisoned}.",
						"A creature you can see within 60 feet of you has disadvantage on attack rolls and saving throws until the start of your next turn.",
						"You cast the {@spell legend lore} spell without material components."
					]
				},
				"Whether the check succeeds or fails, you can't use this feature again until you finish a long rest. Alternatively, you can regain the use of this feature by sacrificing nonmagical treasure worth at least 500 gp to your patron. This sacrifice requires the treasure to be within 10 feet of you for at least 1 minute, at the end of which you use an action to teleport the treasure to your patron's realm, provided you have the vessel of your Collector's Vessel in hand."
			]
		},
		{
			"name": "The Undead",
			"source": "UA2020SubclassesPt4",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 1,
			"entries": [
				"The Undead is an entity that resides in the dark corners of the multiverse. Your patron could be Acererak, Azalin, Lord Soth, Strahd, or some other ancient undead being. You may seek to gain knowledge from your patron's countless lifetimes of experience, while it may see you as a piece of a centuries long plan.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"{@i 1st-level Undead feature}",
						"The Undead lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Undead Expanded Spells",
							"colLabels": [
								"Spell Level",
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
									"2nd",
									"{@spell blindness/deafness}, {@spell phantasmal force}"
								],
								[
									"3rd",
									"{@spell speak with dead}, {@spell phantom steed}"
								],
								[
									"4th",
									"{@spell death ward}, {@spell greater invisibility}"
								],
								[
									"5th",
									"{@spell antilife shell}, {@spell cloudkill}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Form of Dread|Warlock||Undead (UA)|UA2020SubclassesPt4|1"
				}
			]
		},
		{
			"name": "Form of Dread",
			"source": "UA2020SubclassesPt4",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Undead feature}",
				"You manifest an aspect of your patron's dreadful power. As a bonus action, you transform for 1 minute. You gain the following benefits while transformed:",
				{
					"type": "list",
					"items": [
						"You gain temporary hit points equal to {@dice 1d10} + your warlock level.",
						"Once during each of your turns, when you hit a creature with an attack, you can force it to make a Wisdom saving throw, and if the saving throw fails, the target is {@condition frightened} of you until the end of your next turn.",
						"You are immune to the {@condition frightened} condition."
					]
				},
				"You can transform a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"The appearance of your Form of Dread reflects some aspect of your patron. For example, your form could be a shroud of shadows forming the crown and robes of your lich patron, or your face might transform into bat-like features due to your vampire patron."
			]
		},
		{
			"name": "Grave Touched",
			"source": "UA2020SubclassesPt4",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Undead feature}",
				"Your patron's powers have a profound effect on your body and magic. You don't need to eat, drink, or breathe.",
				"In addition, when you hit a creature with an attack and roll damage against the creature, you can replace the damage type with necrotic damage. While you are using your Form of Dread, you can roll one additional damage die when determining the necrotic damage the target takes."
			]
		},
		{
			"name": "Mortal Husk",
			"source": "UA2020SubclassesPt4",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Undead feature}",
				"Your connection to undeath and necrotic energy now saturates your body. You have resistance to necrotic damage. If you are transformed using your Form of Dread, you instead become immune to necrotic damage.",
				"In addition, when you are reduced to 0 hit points, you can cause your body to explode. Each creature within 30 feet of you takes necrotic damage equal to {@dice 2d10} + your warlock level. You then revive with 1 hit point in your previous space, along with your gear, and you gain 1 level of {@condition exhaustion}. Once you revive this way, you can't do so again until you finish {@dice 1d4} long rests."
			]
		},
		{
			"name": "Spirit Projection",
			"source": "UA2020SubclassesPt4",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Undead feature}",
				"Your body is now simply a vessel for your spirit. As an action, you can project your spirit from your body. The body you leave behind is {@condition unconscious} and in a state of suspended animation.",
				"Your spirit can remain outside your body for up to 1 hour or until your {@status concentration} is broken (as if {@status concentration||concentrating} on a spell). When your projection ends, your spirit returns to your body or your body magically teleports to your spirit's space (your choice).",
				"While projecting your spirit, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"Your spirit and body gain resistance to bludgeoning, piercing, and slashing damage.",
						"When you cast a spell of the conjuration or necromancy school, the spell doesn't require verbal, somatic, or material components that lack a gold cost.",
						"You have a flying speed equal to your walking speed and can hover. You can move through creatures and objects as if they were {@quickref difficult terrain||3}, but you take {@damage 1d10} force damage if you end your turn inside a creature or an object.",
						"While you are using your Form of Dread, once during each of your turns when you deal necrotic damage to a creature, you regain hit points equal to half the amount of necrotic damage dealt."
					]
				},
				"Once you use this feature, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "The Genie",
			"source": "UA2020SubclassesRevisited",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 1,
			"entries": [
				"You have made a pact with one of the rarest kinds of genie, a noble genie. Such entities are rulers of vast fiefs on the Elemental Planes and have great influence over lesser genies and elemental creatures. Noble genies are varied in their motivations but are all arrogant and wield power that rivals that of lesser deities. They delight in turning the table on mortals who so love to bind genies into servitude, readily entering into pacts that expand their reach across the multiverse.",
				"You choose your patron's kind or determine it randomly, using the Genie Kind table. Each kind of genie is associated with a particular element, as shown in the table.",
				{
					"type": "table",
					"caption": "Genie Kind",
					"colLabels": [
						"d4",
						"Kind",
						"Element"
					],
					"colStyles": [
						"col-2 text-center",
						"col-5",
						"col-5"
					],
					"rows": [
						[
							1,
							"{@creature Dao}",
							"Earth"
						],
						[
							2,
							"{@creature Djinni}",
							"Air"
						],
						[
							3,
							"{@creature Efreeti}",
							"Fire"
						],
						[
							4,
							"{@creature Marid}",
							"Water"
						]
					]
				},
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"{@i 1st-level Genie feature}",
						"The Genie lets you choose from an expanded list of spells when you learn a warlock spell. The Genie Expanded Spells table shows the genie spells that are added to the warlock spell list for you, along with the spells associated in the table with your patron's kind: dao, djinni, efreeti, or marid.",
						{
							"type": "table",
							"caption": "Genie Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Genie Spells",
								"Dao Spells",
								"Djinni Spells",
								"Efreeti Spells",
								"Marid Spells"
							],
							"colStyles": [
								"col-1 text-center",
								"col-2-2",
								"col-2-2",
								"col-2-2",
								"col-2-2",
								"col-2-2"
							],
							"rows": [
								[
									"1st",
									"{@spell detect evil and good}",
									"{@spell sanctuary}",
									"{@spell thunderwave}",
									"{@spell burning hands}",
									"{@spell fog cloud}"
								],
								[
									"2nd",
									"{@spell phantasmal force}",
									"{@spell spike growth}",
									"{@spell gust of wind}",
									"{@spell scorching ray}",
									"{@spell blur}"
								],
								[
									"3rd",
									"{@spell create food and water}",
									"{@spell meld into stone}",
									"{@spell wind wall}",
									"{@spell fireball}",
									"{@spell sleet storm}"
								],
								[
									"4th",
									"{@spell phantasmal killer}",
									"{@spell stone shape}",
									"{@spell greater invisibility}",
									"{@spell fire shield}",
									"{@spell control water}"
								],
								[
									"5th",
									"{@spell creation}",
									"{@spell wall of stone}",
									"{@spell seeming}",
									"{@spell flame strike}",
									"{@spell cone of cold}"
								],
								[
									"9th",
									"{@spell wish}",
									"\u2014",
									"\u2014",
									"\u2014",
									"\u2014"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Genie's Vessel|Warlock||Genie (UA)|UA2020SubclassesRevisited|1"
				}
			]
		},
		{
			"name": "Genie's Vessel",
			"source": "UA2020SubclassesRevisited",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Genie feature}",
				"Your patron gifts you a magical vessel that grants you a measure of the genie's power. The vessel is a Tiny object, and you can use it as a spellcasting focus for your warlock spells. You decide what the object is, or you can determine what it is randomly by rolling on the Genie's Vessel table.",
				{
					"type": "table",
					"caption": "Genie's Vessel",
					"colLabels": [
						"d6",
						"Vessel"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							1,
							"Oil lamp"
						],
						[
							2,
							"Urn"
						],
						[
							3,
							"Ring with a compartment"
						],
						[
							4,
							"Stoppered bottle"
						],
						[
							5,
							"Hollow statuette"
						],
						[
							6,
							"Ornate lantern"
						]
					]
				},
				"While you are touching the vessel, you can use it in the following ways:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Bottled Respite",
							"entry": "As an action, you can magically vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is comfortably appointed with cushions and low tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus. You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space. Once you enter the vessel, you can't enter again until you finish a long rest."
						},
						{
							"type": "item",
							"name": "Genie's Wrath",
							"entry": "Once during each of your turns when you hit with an attack roll, you can deal extra damage to the target equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid)."
						}
					]
				},
				"The vessel's AC equals your spell save DC. Its hit points equal your warlock level plus your proficiency bonus, and it is immune to poison and psychic damage.",
				"If the vessel is destroyed or you lose it, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and the previous vessel is destroyed if it still exists. The vessel vanishes in a flare of elemental power when you die."
			]
		},
		{
			"name": "Elemental Gift",
			"source": "UA2020SubclassesRevisited",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Genie feature}",
				"You begin to take on characteristics of your patron's kind. You now have resistance to a damage type determined by your patron's kind: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid).",
				"In addition, as a bonus action, you can give yourself a flying speed of 30 feet that lasts for 10 minutes, during which you can hover. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Sanctuary Vessel",
			"source": "UA2020SubclassesRevisited",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Genie feature}",
				"When you enter your Genie's Vessel via the Bottled Respite feature, you can now choose up to five willing creatures that you can see within 30 feet of you, and the chosen creatures are drawn into the vessel with you.",
				"As a bonus action, you can eject any number of creatures from the vessel, and everyone is ejected if you leave or the vessel is destroyed.",
				"In addition, anyone (including you) who remains within the vessel for at least 10 minutes gains the benefit of finishing a short rest, and anyone can add your proficiency bonus to the number of hit points they regain if they spend any Hit Dice as part of a short rest there."
			]
		},
		{
			"name": "Limited Wish",
			"source": "UA2020SubclassesRevisited",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Genie (UA)",
			"subclassSource": "UA2020SubclassesRevisited",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Genie feature}",
				"You entreat your patron to grant you a small wish. As an action, you can speak your desire to your Genie's Vessel, requesting the effect of one spell that is 6th level or lower and has a casting time of 1 action. The spell can be from any class's spell list, and you don't need to meet the requirements in that spell, including costly components; the spell simply takes effect as part of this action.",
				"Once you use this feature, you can't use it again until you finish {@dice 1d4} long rests."
			]
		},
		{
			"name": "The Undying Light",
			"source": "UALightDarkUnderdark",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying Light (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 1,
			"entries": [
				"Your patron is not a specific entity, but the energy that radiates from the Positive Plane. Your pact allows you to experience the barest touch of the raw stuff of life that powers the multiverse. Anything more, and you would be instantly incinerated by its energy.",
				"Contact with the Positive Plane causes subtle changes to your behavior and beliefs. You are driven to bring light to dark places, to annihilate undead creatures, and to protect all living things. At the same time, you crave the light and find total darkness a suffocating experience akin to drowning.",
				"As an optional way to add more flavor to your character, you can pick from or roll on the following table of flaws associated with warlocks of the Undying Light.",
				{
					"type": "table",
					"caption": "Undying Light Flaws",
					"colLabels": [
						"d6",
						"Quirk"
					],
					"colStyles": [
						"col-1 text-center",
						"col-11"
					],
					"rows": [
						[
							"1",
							"You are afraid of the dark, and must always have a light source at hand."
						],
						[
							"2",
							"You have a nervous compulsion to keep a bright light in even the barest shadow."
						],
						[
							"3",
							"You have a compulsion to enter and illuminate dark areas."
						],
						[
							"4",
							"You have an overwhelming hatred of undead creatures."
						],
						[
							"5",
							"You fidget and are irritable when you can't see the sun."
						],
						[
							"6",
							"In a dark area, you always carry a lit torch or lantern. Putting it down is an unbearable thought."
						]
					]
				},
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Undying Light lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Undying Light Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell burning hands}"
								],
								[
									"2nd",
									"{@spell flaming sphere}"
								],
								[
									"3rd",
									"{@spell daylight}"
								],
								[
									"4th",
									"{@spell fire shield}"
								],
								[
									"5th",
									"{@spell flame strike}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Radiant Soul|Warlock||Undying Light (UA)|UALightDarkUnderdark|1"
				}
			]
		},
		{
			"name": "Radiant Soul",
			"source": "UALightDarkUnderdark",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying Light (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, your link to the Positive Plane allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant damage or fire damage, you add your Charisma modifier to that damage. Additionally, you know the {@spell sacred flame} and {@spell light} cantrips and can cast them at will. They don't count against your number of cantrips known."
			]
		},
		{
			"name": "Searing Vengeance",
			"source": "UALightDarkUnderdark",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying Light (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, the radiant energy you channel allows you to overcome grievous injuries. When you would make a death saving throw, you can instead spring back to your feet with a burst of radiant energy. You immediately stand up (if you so choose), and you regain hit points equal to half your hit point maximum. All hostile creatures within 30 feet of you take 10 + your Charisma modifier radiant damage and are {@condition blinded} until the end of your turn.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Radiant Resilience",
			"source": "UALightDarkUnderdark",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying Light (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you gain temporary hit points whenever you finish a long or short rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of your rest. Those creatures gain temporary hit points equal to half your warlock level + your Charisma modifier."
			]
		},
		{
			"name": "Healing Light",
			"source": "UALightDarkUnderdark",
			"page": 3,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undying Light (UA)",
			"subclassSource": "UALightDarkUnderdark",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to channel the Undying Light to heal yourself and other creatures. As a bonus action, you can touch a creature and heal it. With each touch, a creature regains from {@dice 1d6} to {@dice 5d6} hit points (your choice). You have a total pool of {@dice 15d6} you can expend. Subtract the dice you use with each touch from that total.",
				"You regain all expended dice from your pool when you finish a long rest."
			]
		},
		{
			"name": "Ghost in the Machine",
			"source": "UAModernMagic",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Ghost in the Machine (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"entries": [
				"You have made a bargain for power granted by an entity that you believe to be completely digital. Whether it is a rogue AI or the spirit of a deceased hacker, the Ghost in the Machine is capable of feats that defy explanation.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Ghost in the Machine lets you choose from an expanded list of spells when you learn a warlock spell. You gain the on/off cantrip, and the following new spells are added to the warlock spell list for you.",
						"Spells marked with an asterisk can be found in Unearthed Arcana: Modern Magic.",
						{
							"type": "table",
							"caption": "Ghost in the Machine Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell infallible relay (UA)|UAModernMagic|infallible relay}*, {@spell remote access (UA)|UAModernMagic|remote access}*"
								],
								[
									"2nd",
									"{@spell arcane hacking (UA)|UAModernMagic|arcane hacking}*, {@spell digital phantom (UA)|UAModernMagic|digital phantom}*"
								],
								[
									"3rd",
									"{@spell haywire (UA)|UAModernMagic|haywire}*, {@spell invisibility to cameras (UA)|UAModernMagic|invisibility to cameras}*"
								],
								[
									"4th",
									"{@spell conjure knowbot (UA)|UAModernMagic|conjure knowbot}*, {@spell system backdoor (UA)|UAModernMagic|system backdoor}*"
								],
								[
									"5th",
									"{@spell shutdown (UA)|UAModernMagic|shutdown}*, {@spell synchronicity (UA)|UAModernMagic|synchronicity}*"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiency|Warlock||Ghost in the Machine (UA)|UAModernMagic|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Information Surge|Warlock||Ghost in the Machine (UA)|UAModernMagic|1"
				}
			]
		},
		{
			"name": "Bonus Proficiency",
			"source": "UAModernMagic",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Ghost in the Machine (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with hacking tools."
			]
		},
		{
			"name": "Information Surge",
			"source": "UAModernMagic",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Ghost in the Machine (UA)",
			"subclassSource": "UAModernMagic",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to temporarily render computerized devices inoperable. As an action, you can target a computerized device within 30 feet of you. If the targeted device is held or otherwise actively used by a living creature, that creature must make an Intelligence saving throw against your spell save DC. On a failed save, the targeted device ceases to function until the end of your next turn. If the targeted device is not held or used by a creature, the DM makes a special saving throw for the device with disadvantage and a +0 modifier. Certain shielded devices might negate the disadvantage, at the DM's determination.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Wire Walk",
			"source": "UAModernMagic",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Ghost in the Machine (UA)",
			"subclassSource": "UAModernMagic",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you gain the ability to travel short distances over electrical wires, data lines, or telephone cables. As a bonus action, you can touch a device or socket connected to a hardwired network and teleport along this network to another device or socket within your line of sight. Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Personal Encryption",
			"source": "UAModernMagic",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Ghost in the Machine (UA)",
			"subclassSource": "UAModernMagic",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, you have learned to apply your innate knowledge of encryption to your thoughts, memories, and presence. You have advantage on saving throws against {@spell scrying}, thought detection, or any other method of magically learning your whereabouts or reading your thoughts. For any such effect that does not grant you a saving throw but which requires the creature targeting you to make an ability check, the check is made with disadvantage."
			]
		},
		{
			"name": "Technovirus",
			"source": "UAModernMagic",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Ghost in the Machine (UA)",
			"subclassSource": "UAModernMagic",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to infect a humanoid's body with living circuitry. You can use an action to make a melee attack against a humanoid creature using your spell attack modifier. The target must make a Constitution saving throw against your spell save DC as a techno-organic virus quickly spreads through its body. On a failed save, the target takes {@damage 8d10} psychic damage, or half as much damage on a successful one.",
				"Additionally, if the target fails the saving throw, you can use an action to issue it a single command, as if you were casting the {@spell command} spell. The target makes its saving throw against your {@spell command} with disadvantage. You can issue this {@spell command} at any time while the target remains infected.",
				"Once you use this feature, you can't use it again until you finish a long rest, at which point the target is cured of the technovirus. The infection can also be removed with a {@spell lesser restoration} spell."
			]
		},
		{
			"name": "The Celestial",
			"source": "UARevisedClassOptions",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 1,
			"entries": [
				"Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, or unicorn or to another entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.",
				"Being connected to such power can cause changes in your behavior and beliefs. You might find yourself driven to annihilate the undead, to defeat fiends, and to protect the innocent. At times, your heart might also be filled with a longing for the celestial realm of your patron, a desire to wander that paradise for the rest of your days. But you know that your mission is among mortals for now and that your pact binds you to bring light to the dark places of the world.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Celestial Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell burning hands}, {@spell cure wounds}"
								],
								[
									"2nd",
									"{@spell flaming sphere}, {@spell lesser restoration}"
								],
								[
									"3rd",
									"{@spell daylight}, {@spell revivify}"
								],
								[
									"4th",
									"{@spell guardian of faith}, {@spell wall of fire}"
								],
								[
									"5th",
									"{@spell flame strike}, {@spell greater restoration}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrips|Warlock||Celestial (UA)|UARevisedClassOptions|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Healing Light|Warlock||Celestial (UA)|UARevisedClassOptions|1"
				}
			]
		},
		{
			"name": "Bonus Cantrips",
			"source": "UARevisedClassOptions",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn the {@spell sacred flame} and {@spell light} cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known."
			]
		},
		{
			"name": "Healing Light",
			"source": "UARevisedClassOptions",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of {@dice d6}s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.",
				"As a bonus action, you can touch a creature and heal it, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.",
				"Your pool regains all expended dice when you finish a long rest."
			]
		},
		{
			"name": "Radiant Soul",
			"source": "UARevisedClassOptions",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you add your Charisma modifier to that damage against one target of your choice."
			]
		},
		{
			"name": "Celestial Resilience",
			"source": "UARevisedClassOptions",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier."
			]
		},
		{
			"name": "Healing Light",
			"source": "UARevisedClassOptions",
			"page": 4,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, the radiant energy you channel allows you to overcome grievous injuries. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up, if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to {@dice 2d8} + your Charisma modifier, and it is {@condition blinded} until the end of the current turn.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "The Lurker in the Deep",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"entries": [
				"You made a pact with an entity that lurks somewhere deep in the ocean, or even on the Elemental Plane of Water, such as a mighty kraken, an ancient primordial, or a monstrous being from creation's earliest days. You serve as this creature's eyes and ears, watching the world beyond its domain and reporting your findings. You may have gained this pact as a member of a cult dedicated to the entity or after your patron saved your life when you nearly drowned at sea.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "The Lurker's Clutches|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|1"
				},
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"{@i 1st-level Lurker in the Deep feature}",
						"The Lurker in the Deep lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Lurker Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell create or destroy water}, {@spell thunderwave}"
								],
								[
									"2nd",
									"{@spell gust of wind}, {@spell silence}"
								],
								[
									"3rd",
									"{@spell lightning bolt}, {@spell sleet storm}"
								],
								[
									"4th",
									"{@spell control water}, {@spell Evard's black tentacles}"
								],
								[
									"5th",
									"{@spell commune with nature}, {@spell cone of cold}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Grasp of the Deep|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Scion of the Deep|Warlock||Lurker in the Deep (UA)|UASorcererAndWarlock|1"
				}
			]
		},
		{
			"name": "Grasp of the Deep",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Lurker in the Deep feature}",
				"At 1st level, you gain the ability to magically summon a spectral tentacle that strikes at your foes. As a bonus action, you create a 10-foot-long tentacle at a point you can see within 60 feet of you. The tentacle lasts for 1 minute or until you use this feature to create another tentacle.",
				"When you create the tentacle, you can make a melee spell attack against a creature within 10 feet of it. On a hit, the target takes {@damage 1d8} cold or lightning damage (your choice when it takes the damage) and its speed is reduced by 10 feet until the start of your next turn. When you reach 10th level in this class, the damage dealt by the tentacle increases to {@dice 2d8}.",
				"As a bonus action on your turn, you can move the tentacle up to 30 feet and repeat the attack. You can summon the tentacle a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Scion of the Deep",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Lurker in the Deep feature}",
				"At 1st level, your patron accepts you into its inner court of servitors. You can telepathically communicate with any aberration, beast, elemental, or monstrosity that has an innate swimming speed, while it is within 120 feet of you. The creature can understand you and can respond telepathically."
			]
		},
		{
			"name": "The Lurker's Clutches",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 1,
			"header": 1,
			"type": "inset",
			"entries": [
				"Several features of the Lurker in the Deep create tentacles or a maw that reach into the world. The form of these appendages should reflect the nature of your specific patron. For example, a kraken's warlock might summon great squid-like tentacles, serrated crab claws, or a massive octopus beak, while the servant of a primordial water elemental might create tendrils or swells of living water."
			]
		},
		{
			"name": "Fathomless Soul",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Lurker in the Deep feature}",
				"At 6th level, your patron grants you greater abilities. You gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You can breathe both air and water.",
						"You gain a swimming speed equal to your walking speed.",
						"You gain resistance to cold damage."
					]
				}
			]
		},
		{
			"name": "Guardian Grasp",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Lurker in the Deep feature}",
				"At 6th level, the tentacle you create with Grasp of the Deep can defend you and others. When you or a creature you can see takes damage while within 10 feet of the tentacle, you can use your reaction to choose one of those creatures and reduce the damage to the chosen creature by half. After doing so, the tentacle vanishes."
			]
		},
		{
			"name": "Devouring Maw",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Lurker in the Deep feature}",
				"Starting at 10th level, you can magically draw forth a manifestation of your patron's insatiable hunger. As an action, choose a point you can see within 60 feet of you. For 1 minute, a translucent maw manifests in a 10-foot radius centered on that point. Each creature in that area when the maw appears must succeed on a Strength saving throw against your spell save DC or be {@condition restrained}. Any creature that starts its turn in the maw's area takes {@damage 3d6} cold or lightning damage (your choice when it takes the damage). As an action, a {@condition restrained} creature can repeat the saving throw, ending the restraint on a success. At the start of your turn, if there is a creature in the maw's area, you gain temporary hit points equal to your warlock level.",
				"Once you use this feature, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "Unleash the Depths",
			"source": "UASorcererAndWarlock",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Lurker in the Deep (UA)",
			"subclassSource": "UASorcererAndWarlock",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Lurker in the Deep feature}",
				"Starting at 14th level, you gain the ability to call upon your patron for aid. As an action, you choose a point within 30 feet of you where your patron tears through reality, manifesting a measure of its thalassic grandeur. Choose one of the following effects to issue from this manifestation point. Once you use either effect, you can't use this feature again until you finish a long rest.",
				{
					"type": "entries",
					"name": "Transport",
					"entries": [
						"You and up to five willing creatures of your choice that you can see within 30 feet of the manifestation point are grasped by spectral tentacles and yanked through your patron's realm. The tentacles teleport you and the chosen creatures to a point of your choice within 100 miles that you have visited within the past 24 hours. The tentacles then vanish."
					]
				},
				{
					"type": "entries",
					"name": "Fury",
					"entries": [
						"You can direct a barrage of spectral tentacles to issue forth and strike up to five creatures you can see within 30 feet of the manifestation point. Each target must make a Dexterity saving throw against your spell save DC. On a failed save, the creature takes {@damage 6d10} cold or lightning damage (your choice) and is knocked {@condition prone}. On a successful save, it takes half as much damage and is not knocked {@condition prone}. The tentacles then vanish."
					]
				}
			]
		},
		{
			"name": "The Seeker",
			"source": "UATheFaithful",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Seeker (UA)",
			"subclassSource": "UATheFaithful",
			"level": 1,
			"entries": [
				"Your patron is an inscrutable being who travels the Astral Plane in search of knowledge and secrets. In return for your patron's gifts, you wander the world seeking lore that you can share with the Seeker.",
				"Your patron could be any deity or other powerful entity dedicated to knowledge or forgotten lore. Celestian is an ideal patron for a Greyhawk campaign, and was the inspiration for this concept. In the Forgotten Realms, your patron might be Azuth or Oghma. Aureon makes an excellent patron in Eberron, while in Krynn and the Dragonlance campaign setting, Gilean is a good match for the Seeker's role.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Seeker lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Seeker Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell feather fall}, {@spell jump}"
								],
								[
									"2nd",
									"{@spell levitate}, {@spell locate object}"
								],
								[
									"3rd",
									"{@spell clairvoyance}, {@spell sending}"
								],
								[
									"4th",
									"{@spell arcane eye}, {@spell locate creature}"
								],
								[
									"5th",
									"{@spell legend lore}, {@spell passwall}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Shielding Aurora|Warlock||Seeker (UA)|UATheFaithful|1"
				}
			]
		},
		{
			"name": "Shielding Aurora",
			"source": "UATheFaithful",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Seeker (UA)",
			"subclassSource": "UATheFaithful",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you can invoke the Seeker's power to protect you from harm. As a bonus action, you create a whirling aurora of brilliant energy that swirls around you. Until the end of your next turn, you gain resistance to all damage, and if a hostile creature ends its turn within 10 feet of you, it takes radiant damage equal to your warlock level + your Charisma modifier.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Astral Refuge",
			"source": "UATheFaithful",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Seeker (UA)",
			"subclassSource": "UATheFaithful",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to step into an astral refuge. As an action, you disappear from the world for a brief moment and enter the Astral Plane, taking advantage of its timeless nature. While in your astral refuge, you can take two actions to cast spells that target only you. After using those two actions, you return to the space you occupied and your turn ends."
			]
		},
		{
			"name": "Far Wanderer",
			"source": "UATheFaithful",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Seeker (UA)",
			"subclassSource": "UATheFaithful",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you no longer need to breathe, and you gain resistance to fire damage and cold damage."
			]
		},
		{
			"name": "Astral Sequestration",
			"source": "UATheFaithful",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Seeker (UA)",
			"subclassSource": "UATheFaithful",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you gain the ability to sequester yourself and your allies on the Astral Plane.",
				"By performing a special ritual over the course of 5 minutes, you shift yourself and up to ten willing creatures you can see to the Astral Plane. You and those creatures gain the benefits of a short rest while sequestered on the Astral Plane. You then return to the spaces you all occupied when you used this ability, with no time having passed in the world.",
				"During this short rest, you and the creatures you sequester can make use of any options available during a rest that affect only you and the creatures you sequester.",
				"Once you use this ability, you cannot use it again until you complete a long rest."
			]
		},
		{
			"name": "The Hexblade",
			"source": "UAWarlockAndWizard",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 1,
			"entries": [
				"You have made your pact with a powerful, sentient magic weapon carved from the stuff of the Shadowfell. The mighty sword Blackrazor is the most notable of these weapons, several of which have spread across the multiverse over the ages. These weapons grow stronger as they consume the life essence of their victims. The strongest of them can use their ties to the Shadowfell to offer power to mortals who serve them. The Raven Queen forged the first of these weapons. They, along with the hexblade warlocks, are another tool she can use to manipulate events in the Material Plane to her inscrutable ends.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Hexblade Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell shield}, {@spell wrathful smite}"
								],
								[
									"2nd",
									"{@spell branding smite}, {@spell magic weapon}"
								],
								[
									"3rd",
									"{@spell blink}, {@spell elemental weapon}"
								],
								[
									"4th",
									"{@spell phantasmal killer}, {@spell staggering smite}"
								],
								[
									"5th",
									"{@spell cone of cold}, {@spell destructive wave}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hex Warrior|Warlock||Hexblade (UA)|UAWarlockAndWizard|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hexblade's Curse|Warlock||Hexblade (UA)|UAWarlockAndWizard|1"
				}
			]
		},
		{
			"name": "Hex Warrior",
			"source": "UAWarlockAndWizard",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain proficiency with medium armor, shields, and martial weapons. In addition, when attacking with a melee weapon that you are proficient with and that lacks the two-handed property, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls."
			]
		},
		{
			"name": "Hexblade's Curse",
			"source": "UAWarlockAndWizard",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain the ability to place a baleful curse on an enemy. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. Until the curse ends, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.",
						"Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the {@dice d20}.",
						"If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier."
					]
				},
				"You can't use this feature again until you finish a short or long rest."
			]
		},
		{
			"name": "Shadow Hound",
			"source": "UAWarlockAndWizard",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your shadow can split from you and transform into a hound of pure darkness. Most of the time, your shadow hound masquerades as your normal shadow. As a bonus action, you can command it to magically slip into the shadow of a creature you can see within 60 feet of you. While the shadow hound is merged in this manner, the target can't gain the benefits of half cover or three-quarters cover against your attack rolls, and you know the distance and direction to the target even if it is hidden. The hound can't be seen by anyone but you and those with {@sense truesight}, and it is unaffected by light. The target has a vague feeling of dread while the hound is present.",
				"As a bonus action, you can command your shadow hound to return to you. It also automatically returns to you if you and the target are on different planes of existence, if you're {@condition incapacitated}, or if dispel magic, {@spell remove curse}, or similar magic is used on the target."
			]
		},
		{
			"name": "Armor of Hexes",
			"source": "UAWarlockAndWizard",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your hex grows more powerful. If the target cursed by your Hexblade's Curse hits you with an attack roll, roll a {@dice d6}. On a 4 or higher, the attack instead misses you."
			]
		},
		{
			"name": "Master of Hexes",
			"source": "UAWarlockAndWizard",
			"page": 1,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can use your Hexblade's Curse again without resting, but when you apply it to a new target, the curse immediately ends on the previous target."
			]
		},
		{
			"name": "The Raven Queen",
			"source": "UAWarlockAndWizard",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Raven Queen (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 1,
			"entries": [
				"Your patron is the Raven Queen, a mysterious being who rules the Shadowfell from a palace of ice deep within that dread realm. The Raven Queen watches over the world, anticipating each creature's death and ensuring that it meets its end at the proscribed time and place. As the ruler of the Shadowfell, she dwells in a decayed, dark reflection of the world. Her ability to reach into the world is limited. Thus, she turns to mortal warlocks to serve her will. Warlocks sworn to the Raven Queen receive visions and whispers from her in their dreams, sending them on quests and warning them of impending dangers.",
				"The Raven Queen's followers are expected to serve her will in the world. She concerns herself with ensuring that those fated to die pass from the world as expected, and bids her agents to defeat those who seek to cheat death through undeath or other imitations of immortality. She hates intelligent undead and expects her followers to strike them down, whereas mindless undead such as skeletons and zombies are little more than stumbling automatons in her eyes.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Raven Queen lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Raven Queen Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell false life}, {@spell sanctuary}"
								],
								[
									"2nd",
									"{@spell silence}, {@spell spiritual weapon}"
								],
								[
									"3rd",
									"{@spell feign death}, {@spell speak with dead}"
								],
								[
									"4th",
									"{@spell ice storm}, {@spell locate creature}"
								],
								[
									"5th",
									"{@spell commune}, {@spell cone of cold}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Sentinel Raven|Warlock||Raven Queen (UA)|UAWarlockAndWizard|1"
				}
			]
		},
		{
			"name": "Sentinel Raven",
			"source": "UAWarlockAndWizard",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Raven Queen (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain the service of a spirit sent by the Raven Queen to watch over you. The spirit assumes the form and game statistics of a {@creature raven}, and it always obeys your commands, which you can give telepathically while it is within 100 feet of you.",
				"While the raven is perched on your shoulder, you gain {@sense darkvision} with a range of 30 feet and a bonus to your passive Wisdom ({@skill Perception}) score and to Wisdom ({@skill Perception}) checks. The bonus equals your Charisma modifier. While perched on your shoulder, the raven can't be targeted by any attack or other harmful effect; only you can cast spells on it; it can't take damage; and it is {@condition incapacitated}.",
				"You can see through the raven's eyes and hear what it hears while it is within 100 feet of you. In combat, you roll initiative for the raven and control how it acts. If it is slain by a creature, you gain advantage on all attack rolls against the killer for the next 24 hours.",
				"The raven doesn't require sleep. While it is within 100 feet of you, it can awaken you from sleep as a bonus action. The raven vanishes when it dies, if you die, or if the two of you are separated by more than 5 miles.",
				"At the end of a short or long rest, you can call the raven back to you\u2014no matter where it is or whether it died\u2014and it reappears within 5 feet of you."
			]
		},
		{
			"name": "Soul of the Raven",
			"source": "UAWarlockAndWizard",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Raven Queen (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to merge with your raven spirit. As a bonus action when your raven is perched on your shoulder, your body merges with your raven's form. While merged, you become Tiny, you replace your speed with the raven's, and you can use your action only to {@action Dash}, {@action Disengage}, {@action Dodge}, {@action Help}, {@action Hide}, or {@action Search}. During this time, you gain the benefits of your raven being perched on your shoulder. As an action, you and the raven return to normal."
			]
		},
		{
			"name": "Raven's Shield",
			"source": "UAWarlockAndWizard",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Raven Queen (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, the Raven Queen grants you a protective blessing. You gain advantage on death saving throws, immunity to the {@condition frightened} condition, and resistance to necrotic damage."
			]
		},
		{
			"name": "Queen's Right Hand",
			"source": "UAWarlockAndWizard",
			"page": 2,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Raven Queen (UA)",
			"subclassSource": "UAWarlockAndWizard",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can channel the Raven Queen's power to slay a creature. You can cast {@spell finger of death}. After you cast the spell with this feature, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "The Undead",
			"source": "VRGR",
			"page": 30,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead",
			"subclassSource": "VRGR",
			"level": 1,
			"entries": [
				"You've made a pact with a deathless being, a creature that defies the cycle and life and death, forsaking its mortal shell so it might eternally pursue its unfathomable ambitions. For such beings, time and morality are fleeting things, the concerns of those for whom grains of sand still rush through life's hourglass. Having once been mortal themselves, these ancient undead know firsthand the paths of ambition and the routes past the doors of death. They eagerly share this profane knowledge, along with other secrets, with those who work their will among the living.",
				"Beings of this type include the demilich Acererak, the vampire tyrant Kas the Bloody-Handed, the githyanki lich-queen Vlaakith, the dracolich Dragotha, the undead pharaoh Ankhtepot, and the elusive Darklord, Azalin Rex.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"{@i 1st-level Undead feature}",
						"The Undead lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Undead Expanded Spells",
							"colLabels": [
								"Spell Level",
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
									"2nd",
									"{@spell blindness/deafness}, {@spell phantasmal force}"
								],
								[
									"3rd",
									"{@spell phantom steed}, {@spell speak with dead}"
								],
								[
									"4th",
									"{@spell death ward}, {@spell greater invisibility}"
								],
								[
									"5th",
									"{@spell antilife shell}, {@spell cloudkill}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Form of Dread|Warlock||Undead|VRGR|1"
				}
			]
		},
		{
			"name": "Form of Dread",
			"source": "VRGR",
			"page": 30,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead",
			"subclassSource": "VRGR",
			"level": 1,
			"header": 1,
			"entries": [
				"{@i 1st-level Undead feature}",
				"You manifest an aspect of your patron's dreadful power. As a bonus action, you transform for 1 minute. You gain the following benefits while transformed:",
				{
					"type": "list",
					"items": [
						"You gain temporary hit points equal to {@dice 1d10} + your warlock level.",
						"Once during each of your turns, when you hit a creature with an attack roll, you can force it to make a Wisdom saving throw, and if the saving throw fails, the target is {@condition frightened} of you until the end of your next turn.",
						"You are immune to the {@condition frightened} condition."
					]
				},
				"You can transform a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
				"The appearance of your Form of Dread reflects some aspect of your patron. For example, your form could be a shroud of shadows forming the crown and robes of your lich patron, or your body might glow with glyphs from ancient funerary rites and be surrounded by desert winds, suggesting your mummy patron."
			]
		},
		{
			"name": "Grave Touched",
			"source": "VRGR",
			"page": 30,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead",
			"subclassSource": "VRGR",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Undead feature}",
				"Your patron's powers have a profound effect on your body and magic. You don't need to eat, drink, or breathe.",
				"In addition, once during each of your turns, when you hit a creature with an attack roll and roll damage against the creature, you can replace the damage type with necrotic damage. While you are using your Form of Dread, you can roll one additional damage die when determining the necrotic damage the target takes."
			]
		},
		{
			"name": "Necrotic Husk",
			"source": "VRGR",
			"page": 30,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead",
			"subclassSource": "VRGR",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Undead feature}",
				"Your connection to undeath and necrotic energy now saturates your body. You have resistance to necrotic damage. If you are transformed using your Form of Dread, you instead become immune to necrotic damage.",
				"In addition, when you would be reduced to 0 hit points, you can use your reaction to drop to 1 hit point instead and cause your body to erupt with deathly energy. Each creature of your choice that is within 30 feet of you takes necrotic damage equal to {@damage 2d10} + your warlock level. You then gain 1 level of {@condition exhaustion}. Once you use this reaction, you can't do so again until you finish {@dice 1d4} long rests."
			]
		},
		{
			"name": "Spirit Projection",
			"source": "VRGR",
			"page": 30,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Undead",
			"subclassSource": "VRGR",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Undead feature}",
				"Your spirit can become untethered from your physical form. As an action, you can project your spirit from your body. The body you leave behind is {@condition unconscious} and in a state of suspended animation.",
				"Your spirit resembles your mortal form in almost every way, replicating your game statistics but not your possessions. Any damage or other effects that apply to your spirit or physical body affects the other. Your spirit can remain outside your body for up to 1 hour or until your {@status concentration} is broken (as if {@status concentration||concentrating} on a spell). When your projection ends, your spirit returns to your body or your body magically teleports to your spirit's space (your choice).",
				"While projecting your spirit, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"Your spirit and body gain resistance to bludgeoning, piercing, and slashing damage.",
						"When you cast a spell of the conjuration or necromancy school, the spell doesn't require verbal or somatic components or material components that lack a gold cost.",
						"You have a flying speed equal to your walking speed and can hover. You can move through creatures and objects as if they were {@quickref difficult terrain||3}, but you take {@dice 1d10} force damage if you end your turn inside a creature or an object.",
						"While you are using your Form of Dread, once during each of your turns when you deal necrotic damage to a creature, you regain hit points equal to half the amount of necrotic damage dealt."
					]
				},
				"Once you use this feature, you can't do so again until you finish a long rest."
			]
		},
		{
			"name": "The Celestial",
			"source": "XGE",
			"page": 54,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"Your patron is a powerful being of the Upper Planes. You have bound yourself to an ancient empyrean, solar, ki-rin, unicorn, or other entity that resides in the planes of everlasting bliss. Your pact with that being allows you to experience the barest touch of the holy light that illuminates the multiverse.",
				"Being connected to such power can cause changes in your behavior and beliefs. You might find yourself driven to annihilate the undead, to defeat fiends, and to protect the innocent. At times, your heart might also be filled with a longing for the celestial realm of your patron, and a desire to wander that paradise for the rest of your days. But you know that your mission is among mortals for now, and that your pact binds you to bring light to the dark places of the world.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Celestial lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Celestial Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell cure wounds}, {@spell guiding bolt}"
								],
								[
									"2nd",
									"{@spell flaming sphere}, {@spell lesser restoration}"
								],
								[
									"3rd",
									"{@spell daylight}, {@spell revivify}"
								],
								[
									"4th",
									"{@spell guardian of faith}, {@spell wall of fire}"
								],
								[
									"5th",
									"{@spell flame strike}, {@spell greater restoration}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrips|Warlock||Celestial|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Healing Light|Warlock||Celestial|XGE|1"
				}
			]
		},
		{
			"name": "Bonus Cantrips",
			"source": "XGE",
			"page": 54,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you learn the {@spell sacred flame} and {@spell light} cantrips. They count as warlock cantrips for you, but they don't count against your number of cantrips known."
			]
		},
		{
			"name": "Healing Light",
			"source": "XGE",
			"page": 54,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you gain the ability to channel celestial energy to heal wounds. You have a pool of {@dice d6}s that you spend to fuel this healing. The number of dice in the pool equals 1 + your warlock level.",
				"As a bonus action, you can heal one creature you can see within 60 feet of you, spending dice from the pool. The maximum number of dice you can spend at once equals your Charisma modifier (minimum of one die). Roll the dice you spend, add them together, and restore a number of hit points equal to the total.",
				"Your pool regains all expended dice when you finish a long rest."
			]
		},
		{
			"name": "Radiant Soul",
			"source": "XGE",
			"page": 54,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your link to the Celestial allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant or fire damage, you can add your Charisma modifier to one radiant or fire damage roll of that spell against one of its targets."
			]
		},
		{
			"name": "Celestial Resilience",
			"source": "XGE",
			"page": 54,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you gain temporary hit points whenever you finish a short or long rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of the rest. Those creatures each gain temporary hit points equal to half your warlock level + your Charisma modifier."
			]
		},
		{
			"name": "Searing Vengeance",
			"source": "XGE",
			"page": 54,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Celestial",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, the radiant energy you channel allows you to resist death. When you have to make a death saving throw at the start of your turn, you can instead spring back to your feet with a burst of radiant energy. You regain hit points equal to half your hit point maximum, and then you stand up if you so choose. Each creature of your choice that is within 30 feet of you takes radiant damage equal to {@dice 2d8} + your Charisma modifier, and it is {@condition blinded} until the end of the current turn.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "The Hexblade",
			"source": "XGE",
			"page": 55,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade",
			"subclassSource": "XGE",
			"level": 1,
			"entries": [
				"You have made your pact with a mysterious entity from the Shadowfell\u2014a force that manifests in sentient magic weapons carved from the stuff of shadow. The mighty sword Blackrazor is the most notable of these weapons, which have been spread across the multiverse over the ages. The shadowy force behind these weapons can offer power to warlocks who form pacts with it. Many hexblade warlocks create weapons that emulate those formed in the Shadowfell. Others forgo such arms, content to weave the dark magic of that plane into their spellcasting.",
				"Because the Raven Queen is known to have forged the first of these weapons, many sages speculate that she and the force are one and that the weapons, along with hexblade warlocks, are tools she uses to manipulate events on the Material Plane to her inscrutable ends.",
				{
					"type": "entries",
					"name": "Expanded Spell List",
					"entries": [
						"The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
						{
							"type": "table",
							"caption": "Hexblade Expanded Spells",
							"colLabels": [
								"Spell Level",
								"Spells"
							],
							"colStyles": [
								"col-2 text-center",
								"col-10"
							],
							"rows": [
								[
									"1st",
									"{@spell shield}, {@spell wrathful smite}"
								],
								[
									"2nd",
									"{@spell blur}, {@spell branding smite}"
								],
								[
									"3rd",
									"{@spell blink}, {@spell elemental weapon}"
								],
								[
									"4th",
									"{@spell phantasmal killer}, {@spell staggering smite}"
								],
								[
									"5th",
									"{@spell banishing smite}, {@spell cone of cold}"
								]
							]
						}
					]
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hexblade's Curse|Warlock||Hexblade|XGE|1"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Hex Warrior|Warlock||Hexblade|XGE|1"
				}
			]
		},
		{
			"name": "Hex Warrior",
			"source": "XGE",
			"page": 55,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"At 1st level, you acquire the training necessary to effectively arm yourself for battle. You gain proficiency with medium armor, shields, and martial weapons.",
				"The influence of your patron also allows you to mystically channel your will through a particular weapon. Whenever you finish a long rest, you can touch one weapon that you are proficient with and that lacks the two-handed property. When you attack with that weapon, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls. This benefit lasts until you finish a long rest. If you later gain the Pact of the Blade feature, this benefit extends to every pact weapon you conjure with that feature, no matter the weapon's type."
			]
		},
		{
			"name": "Hexblade's Curse",
			"source": "XGE",
			"page": 55,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade",
			"subclassSource": "XGE",
			"level": 1,
			"header": 1,
			"entries": [
				"Starting at 1st level, you gain the ability to place a baleful curse on someone. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. The curse ends early if the target dies, you die, or you are {@condition incapacitated}. Until the curse ends, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.",
						"Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the {@dice d20}.",
						"If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier (minimum of 1 hit point)."
					]
				},
				"You can't use this feature again until you finish a short or long rest."
			]
		},
		{
			"name": "Accursed Specter",
			"source": "XGE",
			"page": 55,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can curse the soul of a person you slay, temporarily binding it to your service. When you slay a humanoid, you can cause its spirit to rise from its corpse as a {@creature specter}, the statistics for which are in the Monster Manual. When the specter appears, it gains temporary hit points equal to half your warlock level. Roll initiative for the specter, which has its own turns. It obeys your verbal commands, and it gains a special bonus to its attack rolls equal to your Charisma modifier (minimum of +0).",
				"The specter remains in your service until the end of your next long rest, at which point it vanishes to the afterlife.",
				"Once you bind a specter with this feature, you can't use the feature again until you finish a long rest."
			]
		},
		{
			"name": "Armor of Hexes",
			"source": "XGE",
			"page": 55,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your hex grows more powerful. If the target cursed by your Hexblade's Curse hits you with an attack roll, you can use your reaction to roll a {@dice d6}. On a 4 or higher, the attack instead misses you, regardless of its roll."
			]
		},
		{
			"name": "Master of Hexes",
			"source": "XGE",
			"page": 55,
			"className": "Warlock",
			"classSource": "PHB",
			"subclassShortName": "Hexblade",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, you can spread your Hexblade's Curse from a slain creature to another creature. When the creature cursed by your Hexblade's Curse dies, you can apply the curse to a different creature you can see within 30 feet of you, provided you aren't {@condition incapacitated}. When you apply the curse in this way, you don't regain hit points from the death of the previously cursed creature."
			]
		},
		{
			"name": "Bottled Respite",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "TCE",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"As an action, you can magically vanish and enter your vessel, which remains in the space you left. The interior of the vessel is an extradimensional space in the shape of a 20-foot-radius cylinder, 20 feet high, and resembles your vessel. The interior is appointed with cushions and low tables and is a comfortable temperature. While inside, you can hear the area around your vessel as if you were in its space. You can remain inside the vessel up to a number of hours equal to twice your proficiency bonus. You exit the vessel early if you use a bonus action to leave, if you die, or if the vessel is destroyed. When you exit the vessel, you appear in the unoccupied space closest to it. Any objects left in the vessel remain there until carried out, and if the vessel is destroyed, every object stored there harmlessly appears in the unoccupied spaces closest to the vessel's former space. Once you enter the vessel, you can't enter again until you finish a long rest."
			]
		},
		{
			"name": "Genie's Wrath",
			"source": "TCE",
			"page": 73,
			"className": "Warlock",
			"classSource": "TCE",
			"subclassShortName": "Genie",
			"subclassSource": "TCE",
			"level": 1,
			"entries": [
				"Once during each of your turns when you hit with an attack roll, you can deal extra damage to the target equal to your proficiency bonus. The type of this damage is determined by your patron: bludgeoning (dao), thunder (djinni), fire (efreeti), or cold (marid)."
			]
		}
	]
}

export {rogue, sorcerer, warlock}