const bard = {
	"_meta": {
		"dependencies": {
			"subclass": [
				"generic"
			]
		}
	},
	"class": [
		{
			"name": "Bard",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"dex",
				"cha"
			],
			"spellcastingAbility": "cha",
			"casterProgression": "full",
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
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				14,
				15,
				15,
				16,
				18,
				19,
				19,
				20,
				22,
				22,
				22
			],
			"additionalSpells": [
				{
					"name": "Magical Secrets",
					"known": {
						"10": [
							{
								"choose": "level=0;1;2;3;4;5"
							},
							{
								"choose": "level=0;1;2;3;4;5"
							}
						],
						"14": [
							{
								"choose": "level=0;1;2;3;4;5;6;7"
							},
							{
								"choose": "level=0;1;2;3;4;5;6;7"
							}
						],
						"18": [
							{
								"choose": ""
							},
							{
								"choose": ""
							}
						]
					}
				}
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
					"three {@item musical instrument|PHB|musical instruments} of your choice"
				],
				"toolProficiencies": [
					{
						"anyMusicalInstrument": 3
					}
				],
				"skills": [
					{
						"any": 3
					}
				]
			},
			"startingEquipment": {
				"additionalFromBackground": true,
				"default": [
					"(a) a {@item rapier|phb}, (b) a {@item longsword|phb}, or (c) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"(a) a {@item diplomat's pack|phb} or (b) an {@item entertainer's pack|phb}",
					"(a) a {@item lute|phb} or (b) any other {@filter musical instrument|items|miscellaneous=mundane|type=instrument}",
					"{@item Leather armor|phb}, and a {@item dagger|phb}"
				],
				"goldAlternative": "{@dice 5d4 × 10|5d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"rapier|phb"
						],
						"b": [
							"longsword|phb"
						],
						"c": [
							{
								"equipmentType": "weaponSimple"
							}
						]
					},
					{
						"a": [
							"diplomat's pack|phb"
						],
						"b": [
							"entertainer's pack|phb"
						]
					},
					{
						"a": [
							"lute|phb"
						],
						"b": [
							{
								"equipmentType": "instrumentMusical"
							}
						]
					},
					{
						"_": [
							"Leather armor|phb",
							"dagger|phb"
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
					"skills": [
						{
							"choose": {
								"from": [
									"athletics",
									"acrobatics",
									"sleight of hand",
									"stealth",
									"arcana",
									"history",
									"investigation",
									"nature",
									"religion",
									"animal handling",
									"insight",
									"medicine",
									"perception",
									"survival",
									"deception",
									"intimidation",
									"performance",
									"persuasion"
								],
								"count": 1
							}
						}
					],
					"tools": [
						"one {@item musical instrument|PHB} of your choice"
					],
					"toolProficiencies": [
						{
							"anyMusicalInstrument": 1
						}
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|class=bard}",
						"{@filter Spells Known|spells|class=bard}"
					],
					"rows": [
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
							3,
							7
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
							11
						],
						[
							3,
							12
						],
						[
							4,
							14
						],
						[
							4,
							15
						],
						[
							4,
							15
						],
						[
							4,
							16
						],
						[
							4,
							18
						],
						[
							4,
							19
						],
						[
							4,
							19
						],
						[
							4,
							20
						],
						[
							4,
							22
						],
						[
							4,
							22
						],
						[
							4,
							22
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=bard}",
						"{@filter 2nd|spells|level=2|class=bard}",
						"{@filter 3rd|spells|level=3|class=bard}",
						"{@filter 4th|spells|level=4|class=bard}",
						"{@filter 5th|spells|level=5|class=bard}",
						"{@filter 6th|spells|level=6|class=bard}",
						"{@filter 7th|spells|level=7|class=bard}",
						"{@filter 8th|spells|level=8|class=bard}",
						"{@filter 9th|spells|level=9|class=bard}"
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
				"Bardic Inspiration|Bard||1",
				"Magical Inspiration|Bard||1|UAClassFeatureVariants",
				"Spellcasting|Bard||1",
				"Spell Versatility|Bard||1|UAClassFeatureVariants",
				"Jack of All Trades|Bard||2",
				"Song of Rest (d6)|Bard||2",
				"Magical Inspiration|Bard||2|TCE",
				{
					"classFeature": "Bard College|Bard||3",
					"gainSubclassFeature": true
				},
				"Expertise|Bard||3",
				"Ability Score Improvement|Bard||4",
				"Proficiency Versatility|Bard||4|UAClassFeatureVariants",
				"Bardic Versatility|Bard||4|TCE",
				"Bardic Inspiration (d8)|Bard||5",
				"Font of Inspiration|Bard||5",
				"Countercharm|Bard||6",
				{
					"classFeature": "Bard College feature|Bard||6",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Bard||8",
				"Proficiency Versatility|Bard||8|UAClassFeatureVariants",
				"Song of Rest (d8)|Bard||9",
				"Bardic Inspiration (d10)|Bard||10",
				"Expertise|Bard||10",
				"Magical Secrets|Bard||10",
				"Ability Score Improvement|Bard||12",
				"Proficiency Versatility|Bard||12|UAClassFeatureVariants",
				"Song of Rest (d10)|Bard||13",
				"Magical Secrets|Bard||14",
				{
					"classFeature": "Bard College feature|Bard||14",
					"gainSubclassFeature": true
				},
				"Bardic Inspiration (d12)|Bard||15",
				"Ability Score Improvement|Bard||16",
				"Proficiency Versatility|Bard||16|UAClassFeatureVariants",
				"Song of Rest (d12)|Bard||17",
				"Magical Secrets|Bard||18",
				"Ability Score Improvement|Bard||19",
				"Proficiency Versatility|Bard||19|UAClassFeatureVariants",
				"Superior Inspiration|Bard||20"
			],
			"subclassTitle": "Bard College",
			"fluff": [
				{
					"name": "Bard",
					"type": "section",
					"entries": [
						"Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song\u2014knowledge of the people who constructed the monument and the mythic saga it depicts.",
						"A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them.",
						"Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions' words will be well received.",
						"Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
						{
							"type": "entries",
							"name": "Music and Magic",
							"entries": [
								"In the worlds of D&D, words and music are not just vibrations of air, but vocalizations with power all their own. The bard is a master of song, speech, and the magic they contain. Bards say that the multiverse was spoken into existence, that the words of the gods gave it shape, and that echoes of these primordial Words of Creation still resound throughout the cosmos. The music of bards is an attempt to snatch and harness those echoes, subtly woven into their spells and powers.",
								"The greatest strength of bards is their sheer versatility. Many bards prefer to stick to the sidelines in combat, using their magic to inspire their allies and hinder their foes from a distance. But bards are capable of defending themselves in melee if necessary, using their magic to bolster their swords and armor. Their spells lean toward charms and illusions rather than blatantly destructive spells. They have a wide-ranging knowledge of many subjects and a natural aptitude that lets them do almost anything well. Bards become masters of the talents they set their minds to perfecting, from musical performance to esoteric knowledge."
							]
						},
						{
							"type": "entries",
							"name": "Learning from Experience",
							"entries": [
								"True bards are not common in the world. Not every minstrel singing in a tavern or jester cavorting in a royal court is a bard. Discovering the magic hidden in music requires hard study and some measure of natural talent that most troubadours and jongleurs lack. It can be hard to spot the difference between these performers and true bards, though. A bard's life is spent wandering across the land gathering lore, telling stories, and living on the gratitude of audiences, much like any other entertainer. But a depth of knowledge, a level of musical skill, and a touch of magic set bards apart from their fellows.",
								"Only rarely do bards settle in one place for long, and their natural desire to travel\u2014to find new tales to tell, new skills to learn, and new discoveries beyond the horizon\u2014makes an adventuring career a natural calling. Every adventure is an opportunity to learn, practice a variety of skills, enter long-forgotten tombs, discover lost works of magic, decipher old tomes, travel to strange places, or encounter exotic creatures. Bards love to accompany heroes to witness their deeds firsthand. A bard who can tell an awe-inspiring story from personal experience earns renown among other bards. Indeed, after telling so many stories about heroes accomplishing mighty deeds, many bards take these themes to heart and assume heroic roles themselves."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Bard",
							"entries": [
								"Bards thrive on stories, whether those stories are true or not. Your character's background and motivations are not as important as the stories that he or she tells about them. Perhaps you had a secure and mundane childhood. There's no good story to be told about that, so you might paint yourself as an orphan raised by a hag in a dismal swamp. Or your childhood might be worthy of a story. Some bards acquire their magical music through extraordinary means, including the inspiration of fey or other supernatural creatures.",
								"Did you serve an apprenticeship, studying under a master, following the more experienced bard until you were ready to strike out on your own? Or did you attend a college where you studied bardic lore and practiced your musical magic? Perhaps you were a young runaway or orphan, befriended by a wandering bard who became your mentor. Or you might have been a spoiled noble child tutored by a master. Perhaps you stumbled into the clutches of a hag, making a bargain for a musical gift in addition to your life and freedom, but at what cost?",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a bard quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Dexterity. Second, choose the {@background entertainer} background. Third, choose the {@spell dancing lights} and {@spell vicious mockery} cantrips, along with the following 1st-level spells: {@spell charm person}, {@spell detect magic}, {@spell healing word}, and {@spell thunderwave}."
									]
								}
							]
						}
					],
					"source": "PHB",
					"page": 51
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"Music is the fruit of the divine tree that vibrates with the Words of Creation. But the question I ask you is, can a bard go to the root of this tree? Can one tap into the source of that power? Ah, then what manner of music they would bring to this world!"
							],
							"by": "Fletcher Danairia, master bard"
						},
						"Bards bring levity during grave times; they impart wisdom to offset ignorance; and they make the ridiculous seem sublime. Bards are preservers of ancient history, their songs and tales perpetuating the memory of great events down through time\u2014knowledge so important that it is memorized and passed along as oral history, to survive even when no written record remains.",
						"It is also the bard's role to chronicle smaller and more contemporary events\u2014the stories of today's heroes, including their feats of valor as well as their less than impressive failures.",
						"Of course, the world has many people who can carry a tune or tell a good story, and there's much more to any adventuring bard than a glib tongue and a melodious voice. Yet what truly sets bards apart from others\u2014and from one another\u2014are the style and substance of their performances.",
						"To grab and hold the attention of an audience, bards are typically flamboyant and outgoing when they perform. The most famous of them are essentially the D&D world's equivalent of pop stars. If you're playing a bard, consider using one of your favorite musicians as a role model for your character.",
						"You can add some unique aspects to your bard character by considering the suggestions that follow.",
						{
							"type": "entries",
							"name": "Defining Work",
							"entries": [
								"Every successful bard is renowned for at least one piece of performance art, typically a song or a poem that is popular with everyone who hears it. These performances are spoken about for years by those who view them, and some spectators have had their lives forever changed because of the experience.",
								"If your character is just starting out, your ultimate defining work is likely in the future. But in order to make any sort of living at your profession, chances are you already have a piece or two in your repertoire that have proven to be audience pleasers.",
								{
									"type": "table",
									"caption": "Defining Work",
									"colLabels": [
										"{@dice d6}",
										"Defining Work"
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
											"\"The Three Flambinis,\" a ribald song concerning mistaken identities and unfettered desire"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"\"Waltz of the Myconids,\" an upbeat tune that children in particular enjoy"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"\"Asmodeus's Golden Arse,\" a dramatic poem you claim was inspired by your personal visit to Avernus"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"\"The Pirates of Luskan,\" your firsthand account of being kidnapped by sea reavers as a child"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"\"A Hoop, Two Pigeons, and a Hell Hound,\" a subtle parody of an incompetent noble"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"\"A Fool in the Abyss,\" a comedic poem about a jester's travels among demons"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Instrument",
							"entries": [
								"In a bard's quest for the ultimate performance and the highest acclaim, one's instrument is at least as important as one's vocal ability. The instrument's quality of manufacture is a critical factor, of course; the best ones make the best music, and some bards are continually on the lookout for an improvement. Perhaps just as important, though, is the instrument's own entertainment value; those that are bizarrely constructed or made of exotic materials are likely to leave a lasting impression on an audience.",
								"You might have an \"off the rack\" instrument, perhaps because it's all you can afford right now. Or, if your first instrument was gifted to you, it might be of a more elaborate sort. Are you satisfied with the instrument you have, or do you aspire to replace it with something truly distinctive?",
								{
									"type": "table",
									"caption": "Instrument",
									"colLabels": [
										"{@dice d6}",
										"Instrument"
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
											"A masterfully crafted halfling fiddle"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"A mithral {@item horn|PHB} made by elves"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"A zither made with drow spider silk"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"An orcish {@item drum|PHB}"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A wooden bullywug croak box"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"A tinker's harp of gnomish design"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Embarrassment",
							"entries": [
								"Almost every bard has suffered at least one bad experience in front of an audience, and chances are you're no exception. No one becomes famous right away, after all; perhaps you had a few small difficulties early in your career, or maybe it took you a while to restore your reputation after one agonizing night when the fates conspired to bring about your theatrical ruin.",
								"The ways that a performance can go wrong are as varied as the fish in the sea. No matter what sort of disaster might occur, however, a bard has the courage and the confidence to rebound from it\u2014either pressing on with the show (if possible) or promising to come back tomorrow with a new performance that's guaranteed to please.",
								{
									"type": "table",
									"caption": "Embarrassment",
									"colLabels": [
										"{@dice d6}",
										"Embarrassment"
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
											"The time when your comedic song, \"Big Tom's Hijinks\"\u2014which, by the way, you thought was brilliant\u2014did not go over well with Big Tom"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"The matinee performance when a circus's owlbear got loose and terrorized the crowd"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"When your opening song was your enthusiastic but universally hated rendition of \"Song of the Froghemoth\""
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"The first and last public performance of \"Mirt, Man about Town\""
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"The time on stage when your wig caught fire and you threw it down\u2014which set fire to the stage"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"When you sat on your {@item lute|PHB} by mistake during the final stanza of \"Starlight Serenade\""
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "A Bard's Muse",
							"entries": [
								"Naturally, every bard has a repertoire of songs and stories. Some bards are generalists who can draw from a wide range of topics for each performance, and who take pride in their versatility. Others adopt a more personal approach to their art, driven by their attachment to a muse\u2014a particular concept that inspires much of what those bards do in front of an audience.",
								"A bard who follows a muse generally does so to gain a deeper understanding of what that muse represents and how to best convey that understanding to others through performance.",
								"If your bard character has a muse, it could be one of the three described here, or one of your own devising.",
								{
									"type": "entries",
									"entries": [
										{
											"type": "entries",
											"name": "Nature",
											"entries": [
												"You feel a kinship with the natural world, and its beauty and mystery inspire you. For you, a tree is deeply symbolic, its roots delving into the dark unknown to draw forth the power of the earth, while its branches reach toward the sun to nourish their flowers and fruit. Nature is the ancient witness who has seen every kingdom rise and fall, even those whose names have been forgotten and wait to be rediscovered. The gods of nature share their secrets with druids and sages, opening their hearts and minds to new ways of seeing, and as with those individuals, you find that your creativity blossoms while you wander in an open field of waving grass or walk in silent reverence through a grove of ancient oaks."
											]
										},
										{
											"type": "entries",
											"name": "Love",
											"entries": [
												"You are on a quest to identify the essence of true love. Though you do not disdain the superficial love of flesh and form, the deeper form of love that can inspire thousands or bring joy to one's every moment is what you are interested in. Love of this sort takes on many forms, and you can see its presence everywhere\u2014from the sparkling of a beautiful gem to the song of a simple fisher thanking the sea for its bounty. You are on the trail of love, that most precious and mysterious of emotions, and your search fills your stories and your songs with vitality and passion."
											]
										},
										{
											"type": "entries",
											"name": "Conflict",
											"entries": [
												"Drama embodies conflict, and the best stories have conflict as a key element. From the morning-after tale of a tavern brawl to the saga of an epic battle, from a lover's spat to a rift between powerful dynasties, conflict is what inspires tale-tellers like you to create your best work. Conflict can bring out the best in some people, causing their heroic nature to shine forth and transform the world, but it can cause others to gravitate toward darkness and fall under the sway of evil. You strive to experience or witness all forms of conflict, great and small, so as to study this eternal aspect of life and immortalize it in your words and music."
											]
										}
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 12
				}
			]
		}
	],
	"subclass": [
		{
			"name": "College of Lore",
			"shortName": "Lore",
			"source": "PHB",
			"className": "Bard",
			"classSource": "PHB",
			"page": 54,
			"srd": true,
			"additionalSpells": [
				{
					"name": "Additional Magical Secrets",
					"known": {
						"6": [
							{
								"choose": "level=0;1;2;3"
							},
							{
								"choose": "level=0;1;2;3"
							}
						]
					}
				}
			],
			"subclassFeatures": [
				"College of Lore|Bard||Lore||3",
				"Additional Magical Secrets|Bard||Lore||6",
				"Peerless Skill|Bard||Lore||14"
			]
		},
		{
			"name": "College of Valor",
			"shortName": "Valor",
			"source": "PHB",
			"className": "Bard",
			"classSource": "PHB",
			"page": 55,
			"subclassFeatures": [
				"College of Valor|Bard||Valor||3",
				"Extra Attack|Bard||Valor||6",
				"Battle Magic|Bard||Valor||14"
			]
		},
		{
			"name": "College of Satire (UA)",
			"shortName": "Satire (UA)",
			"source": "UAKitsOfOld",
			"className": "Bard",
			"classSource": "PHB",
			"page": 2,
			"subclassFeatures": [
				"College of Satire|Bard||Satire (UA)|UAKitsOfOld|3",
				"Fool's Insight|Bard||Satire (UA)|UAKitsOfOld|6",
				"Fool's Luck|Bard||Satire (UA)|UAKitsOfOld|14"
			]
		},
		{
			"name": "College of Swords (UA)",
			"shortName": "Swords (UA)",
			"source": "UAKitsOfOld",
			"className": "Bard",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:B"
					],
					"progression": {
						"3": 1
					}
				}
			],
			"subclassFeatures": [
				"College of Swords|Bard||Swords (UA)|UAKitsOfOld|3",
				"Extra Attack|Bard||Swords (UA)|UAKitsOfOld|6",
				"Battle Magic|Bard||Swords (UA)|UAKitsOfOld|14"
			]
		},
		{
			"name": "College of Glamour (UA)",
			"shortName": "Glamour (UA)",
			"source": "UABardBardColleges",
			"className": "Bard",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"College of Glamour|Bard||Glamour (UA)|UABardBardColleges|3",
				"Mantle of Majesty|Bard||Glamour (UA)|UABardBardColleges|6",
				"Mantle of Majesty|Bard||Glamour (UA)|UABardBardColleges|14"
			]
		},
		{
			"name": "College of Whispers (UA)",
			"shortName": "Whispers (UA)",
			"source": "UABardBardColleges",
			"className": "Bard",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"subclassFeatures": [
				"College of Whispers|Bard||Whispers (UA)|UABardBardColleges|3",
				"Mantle of Whispers|Bard||Whispers (UA)|UABardBardColleges|6",
				"Shadow Lore|Bard||Whispers (UA)|UABardBardColleges|14"
			]
		},
		{
			"name": "College of Swords v2 (UA)",
			"shortName": "Swords v2 (UA)",
			"source": "UARevisedSubclasses",
			"className": "Bard",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:B"
					],
					"progression": {
						"3": 1
					}
				}
			],
			"subclassFeatures": [
				"College of Swords v2|Bard||Swords v2 (UA)|UARevisedSubclasses|3",
				"Cunning Flourish|Bard||Swords v2 (UA)|UARevisedSubclasses|6",
				"Master's Flourish|Bard||Swords v2 (UA)|UARevisedSubclasses|14"
			]
		},
		{
			"name": "College of Glamour",
			"shortName": "Glamour",
			"source": "XGE",
			"className": "Bard",
			"classSource": "PHB",
			"page": 14,
			"additionalSpells": [
				{
					"innate": {
						"6": [
							"command"
						]
					}
				}
			],
			"subclassFeatures": [
				"College of Glamour|Bard||Glamour|XGE|3",
				"Mantle of Majesty|Bard||Glamour|XGE|6",
				"Unbreakable Majesty|Bard||Glamour|XGE|14"
			]
		},
		{
			"name": "College of Swords",
			"shortName": "Swords",
			"source": "XGE",
			"className": "Bard",
			"classSource": "PHB",
			"page": 15,
			"optionalfeatureProgression": [
				{
					"name": "Fighting Style",
					"featureType": [
						"FS:B"
					],
					"progression": {
						"3": 1
					}
				}
			],
			"subclassFeatures": [
				"College of Swords|Bard||Swords|XGE|3",
				"Extra Attack|Bard||Swords|XGE|6",
				"Master's Flourish|Bard||Swords|XGE|14"
			]
		},
		{
			"name": "College of Whispers",
			"shortName": "Whispers",
			"source": "XGE",
			"className": "Bard",
			"classSource": "PHB",
			"page": 16,
			"subclassFeatures": [
				"College of Whispers|Bard||Whispers|XGE|3",
				"Mantle of Whispers|Bard||Whispers|XGE|6",
				"Shadow Lore|Bard||Whispers|XGE|14"
			]
		},
		{
			"name": "College of Eloquence (UA)",
			"shortName": "Eloquence (UA)",
			"source": "UABardAndPaladin",
			"className": "Bard",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"College of Eloquence|Bard||Eloquence (UA)|UABardAndPaladin|3",
				"Undeniable Logic|Bard||Eloquence (UA)|UABardAndPaladin|6",
				"Infectious Inspiration|Bard||Eloquence (UA)|UABardAndPaladin|14"
			]
		},
		{
			"name": "College of Creation (UA)",
			"shortName": "Creation (UA)",
			"source": "UA2020SubclassesPt2",
			"className": "Bard",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"College of Creation|Bard||Creation (UA)|UA2020SubclassesPt2|3",
				"Animating Performance|Bard||Creation (UA)|UA2020SubclassesPt2|6",
				"Performance of Creation|Bard||Creation (UA)|UA2020SubclassesPt2|14"
			]
		},
		{
			"name": "College of Spirits (UA)",
			"shortName": "Spirits (UA)",
			"source": "UA2020SubclassesPt4",
			"className": "Bard",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"guidance#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"College of Spirits|Bard||Spirits (UA)|UA2020SubclassesPt4|3",
				"Spirit Session|Bard||Spirits (UA)|UA2020SubclassesPt4|6",
				"Spiritual Focus|Bard||Spirits (UA)|UA2020SubclassesPt4|6",
				"Mystical Connection|Bard||Spirits (UA)|UA2020SubclassesPt4|14"
			]
		},
		{
			"name": "College of Creation",
			"shortName": "Creation",
			"source": "TCE",
			"className": "Bard",
			"classSource": "PHB",
			"page": 28,
			"subclassFeatures": [
				"College of Creation|Bard||Creation|TCE|3",
				"Animating Performance|Bard||Creation|TCE|6",
				"Creative Crescendo|Bard||Creation|TCE|14"
			]
		},
		{
			"name": "College of Eloquence",
			"shortName": "Eloquence",
			"source": "TCE",
			"className": "Bard",
			"classSource": "PHB",
			"page": 29,
			"otherSources": [
				{
					"source": "MOT",
					"page": 28
				}
			],
			"subclassFeatures": [
				"College of Eloquence|Bard||Eloquence|TCE|3",
				"Unfailing Inspiration|Bard||Eloquence|TCE|6",
				"Universal Speech|Bard||Eloquence|TCE|6",
				"Infectious Inspiration|Bard||Eloquence|TCE|14"
			]
		},
		{
			"name": "College of Spirits",
			"shortName": "Spirits",
			"source": "VRGR",
			"className": "Bard",
			"classSource": "PHB",
			"page": 28,
			"additionalSpells": [
				{
					"known": {
						"3": [
							"guidance#c"
						]
					}
				}
			],
			"subclassFeatures": [
				"College of Spirits|Bard||Spirits|VRGR|3",
				"Spirit Session|Bard||Spirits|VRGR|6",
				"Mystical Connection|Bard||Spirits|VRGR|14"
			]
		},
		{
			"name": "Mage of Lorehold (UA)",
			"shortName": "Lorehold (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Bard",
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
			"className": "Bard",
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
		}
	],
	"classFeature": [
		{
			"name": "Bardic Inspiration",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a {@dice d6}.",
				"Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the {@dice d20} before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
				"You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
				"Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a {@dice d8} at 5th level, a {@dice d10} at 10th level, and a {@dice d12} at 15th level."
			]
		},
		{
			"name": "Magical Inspiration",
			"source": "UAClassFeatureVariants",
			"page": 3,
			"className": "Bard",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level bard feature (enhances Bardic Inspiration)}",
				"If a creature has a Bardic Inspiration die from you and casts a spell, the creature can roll that die and add the number rolled to one damage or healing roll of the spell. The Bardic Inspiration die is then lost."
			]
		},
		{
			"name": "Spell Versatility",
			"source": "UAClassFeatureVariants",
			"page": 3,
			"className": "Bard",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level bard feature (enhances Spellcasting)}",
				"Whenever you finish a long rest, you can replace one spell you learned from this Spellcasting feature with another spell from the bard spell list. The new spell must be the same level as the spell you replace."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter bard spell list|spells|class=bard}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level."
					]
				},
				{
					"type": "entries",
					"name": "Spell Slots",
					"entries": [
						"The Bard table shows how many spell slots you have to cast your {@filter bard spells|spells|class=bard} of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"For example, if you know the 1st-level spell {@spell cure wounds} and have a 1st-level and a 2nd-level spell slot available, you can cast {@spell cure wounds} using either slot."
					]
				},
				{
					"type": "entries",
					"name": "Spells Known of 1st Level and Higher",
					"entries": [
						"You know four 1st-level spells of your choice from the bard spell list.",
						"You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
						"Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
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
					"name": "Ritual Casting",
					"entries": [
						"You can cast any bard spell you know as a ritual if that spell has the ritual tag."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Focus",
					"entries": [
						"You can use a {@item musical instrument|PHB} as a spellcasting focus for your bard spells."
					]
				}
			]
		},
		{
			"name": "Jack of All Trades",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
			]
		},
		{
			"name": "Magical Inspiration",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 2nd-level bard {@variantrule optional class features|tce|optional feature}}",
				"If a creature has a Bardic Inspiration die from you and casts a spell that restores hit points or deals damage, the creature can roll that die and choose a target affected by the spell. Add the number rolled as a bonus to the hit points regained or the damage dealt. The Bardic Inspiration die is then lost."
			]
		},
		{
			"name": "Song of Rest (d6)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra {@dice 1d6} hit points.",
				"The extra hit points increase when you reach certain levels in this class: to {@dice 1d8} at 9th level, to {@dice 1d10} at 13th level, and to {@dice 1d12} at 17th level."
			]
		},
		{
			"name": "Bard College",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, you delve into the advanced techniques of a bard college of your choice from the list of available colleges. Your choice grants you features at 3rd level and again at 6th and 14th level."
			]
		},
		{
			"name": "Expertise",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 3,
			"entries": [
				"At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
				"At 10th level, you can choose another two skill proficiencies to gain this benefit."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"When you reach 4th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
				"If your DM allows the use of feats, you may instead take a {@5etools feat|feats.html}."
			]
		},
		{
			"name": "Bardic Versatility",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level bard {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can do one of the following, representing a change in focus as you use your skills and magic:",
				{
					"type": "list",
					"items": [
						"Replace one of the skills you chose for the Expertise feature with one of your other skill proficiencies that isn't benefiting from Expertise.",
						"Replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the {@filter bard spell list|spells|level=0|class=bard}."
					]
				}
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Bard",
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
			"name": "Bardic Inspiration (d8)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"At 5th level, your Bardic Inspiration die changes to a {@dice d8}."
			]
		},
		{
			"name": "Font of Inspiration",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 5,
			"entries": [
				"Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
			]
		},
		{
			"name": "Bard College feature",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature from your Bard College."
			]
		},
		{
			"name": "Countercharm",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being {@condition frightened} or {@condition charmed}. A creature must be able to hear you to gain this benefit. The performance ends early if you are {@condition incapacitated} or silenced or if you voluntarily end it (no action required)."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
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
			"className": "Bard",
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
			"name": "Song of Rest (d8)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 9,
			"entries": [
				"At 9th level, the extra hit points gained from Song of Rest increases to {@dice 1d8}."
			]
		},
		{
			"name": "Bardic Inspiration (d10)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, your Bardic Inspiration die changes to a {@dice d10}."
			]
		},
		{
			"name": "Expertise",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you can choose another two skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
			]
		},
		{
			"name": "Magical Secrets",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
				"The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
				"You learn two additional spells from any classes at 14th level and again at 18th level."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
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
			"className": "Bard",
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
			"name": "Song of Rest (d10)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 13,
			"entries": [
				"At 13th level, the extra hit points gained from Song of Rest increases to {@dice 1d10}."
			]
		},
		{
			"name": "Bard College feature",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature from your Bard College."
			]
		},
		{
			"name": "Magical Secrets",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, choose two additional spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
				"The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table."
			]
		},
		{
			"name": "Bardic Inspiration (d12)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 15,
			"entries": [
				"At 15th level, your Bardic Inspiration die changes to a {@dice d12}."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
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
			"className": "Bard",
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
			"name": "Song of Rest (d12)",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 17,
			"entries": [
				"At 17th level, the extra hit points gained from Song of Rest increases to {@dice 1d12}."
			]
		},
		{
			"name": "Magical Secrets",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"At 18th level, choose two additional spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
				"The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
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
			"className": "Bard",
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
			"name": "Superior Inspiration",
			"source": "PHB",
			"page": 51,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "College of Lore",
			"source": "PHB",
			"page": 54,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Lore",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.",
				"The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.",
				"The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Bard||Lore||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Cutting Words|Bard||Lore||3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 54,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Lore",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
			]
		},
		{
			"name": "Cutting Words",
			"source": "PHB",
			"page": 54,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Lore",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being {@condition charmed}."
			]
		},
		{
			"name": "Additional Magical Secrets",
			"source": "PHB",
			"page": 54,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Lore",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."
			]
		},
		{
			"name": "Peerless Skill",
			"source": "PHB",
			"page": 54,
			"srd": true,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Lore",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail."
			]
		},
		{
			"name": "College of Valor",
			"source": "PHB",
			"page": 55,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Valor",
			"subclassSource": "PHB",
			"level": 3,
			"entries": [
				"Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Bard||Valor||3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Inspiration|Bard||Valor||3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "PHB",
			"page": 55,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Valor",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons."
			]
		},
		{
			"name": "Combat Inspiration",
			"source": "PHB",
			"page": 55,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Valor",
			"subclassSource": "PHB",
			"level": 3,
			"header": 1,
			"entries": [
				"Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses."
			]
		},
		{
			"name": "Extra Attack",
			"source": "PHB",
			"page": 55,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Valor",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Battle Magic",
			"source": "PHB",
			"page": 55,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Valor",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
			]
		},
		{
			"name": "College of Creation",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Bards believe the cosmos is a work of art-the creation of the first dragons and gods. That creative work included harmonies that continue to resound through existence today, a power known as the Song of Creation. The bards of the College of Creation draw on that primeval song through dance, music, and poetry, and their teachers share this lesson:",
				"\"Before the sun and the moon, there was the Song, and its music awoke the first dawn. Its melodies so delighted the stones and trees that some of them gained a voice of their own. And now they sing too. Learn the Song, students, and you too can teach the mountains to sing and dance.\"",
				"Dwarves and gnomes often encourage their bards to become students of the Song of Creation. And among dragonborn, the Song of Creation is revered, for legends portray Bahamut and Tiamat-the greatest of dragons-as two of the song's first singers.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Mote of Potential|Bard||Creation|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Performance of Creation|Bard||Creation|TCE|3"
				}
			]
		},
		{
			"name": "Mote of Potential",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Creation feature}",
				"Whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature. The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.",
				"When the creature uses the Bardic Inspiration die, the mote provides an additional effect based on whether the die benefits an ability check, an attack roll, or a saving throw, as detailed below:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Ability Check",
							"entry": "When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment."
						},
						{
							"type": "item",
							"name": "Attack Roll",
							"entry": "Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die."
						},
						{
							"type": "item",
							"name": "Saving Throw",
							"entry": "Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point)."
						}
					]
				}
			]
		},
		{
			"name": "Performance of Creation",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Creation feature}",
				"As an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level, and the item must be Medium or smaller. The item glimmers softly, and a creature can faintly hear music when touching it. The created item disappears after a number of hours equal to your proficiency bonus. For examples of items you can create, see the equipment chapter of the {@book Player's Handbook|PHB|5}.",
				"Once you create an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to use this feature again. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes.",
				"The size of the item you can create with this feature increases by one size category when you reach 6th level (Large) and 14th level (Huge)."
			]
		},
		{
			"name": "Animating Performance",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Creation feature}",
				"As an action, you can animate one Large or smaller nonmagical item within 30 feet of you that isn't being worn or carried.. The animate item uses the {@creature Dancing Item|TCE} stat block, which uses your proficiency bonus (PB). The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.",
				"In combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the item can take any action of its choice, not just {@action Dodge}.",
				"When you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.",
				"Once you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again. You can have only one item animated by this feature at a time; if you use this action and already have a {@creature dancing item|TCE} from this feature, the first one immediately becomes inanimate."
			]
		},
		{
			"name": "Creative Crescendo",
			"source": "TCE",
			"page": 27,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level College of Creation feature}",
				"When you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier (minimum of two items). If you create an item that would exceed that number, you choose which of the previously created items disappears. Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny.",
				"You are no longer limited by gp value when creating items with Performance of Creation."
			]
		},
		{
			"name": "College of Eloquence",
			"source": "TCE",
			"page": 29,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence",
			"subclassSource": "TCE",
			"level": 3,
			"entries": [
				"Adherents of the College of Eloquence master the art of oratory. Persuasion is regarded as a high art, and a well-reasoned, well-spoken argument often proves more persuasive than facts. These bards wield a blend of logic and theatrical wordplay, winning over skeptics and detractors with logical arguments and plucking at heartstrings to appeal to the emotions of audiences.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Silver Tongue|Bard||Eloquence|TCE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Unsettling Words|Bard||Eloquence|TCE|3"
				}
			]
		},
		{
			"name": "Silver Tongue",
			"source": "TCE",
			"page": 29,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Eloquence feature}",
				"You are a master at saying the right thing at the right time. When you make a Charisma ({@skill Persuasion}) or Charisma ({@skill Deception}) check, you can treat a {@dice d20} roll of 9 or lower as a 10."
			]
		},
		{
			"name": "Unsettling Words",
			"source": "TCE",
			"page": 29,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence",
			"subclassSource": "TCE",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Eloquence feature}",
				"You can spin words laced with magic that unsettle a creature and cause it to doubt itself. As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn."
			]
		},
		{
			"name": "Unfailing Inspiration",
			"source": "TCE",
			"page": 29,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Eloquence feature}",
				"Your inspiring words are so persuasive that others feel driven to succeed. When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die."
			]
		},
		{
			"name": "Universal Speech",
			"source": "TCE",
			"page": 29,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Eloquence feature}",
				"You have gained the ability to make your speech intelligible to any creature. As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour.",
				"Once you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot to use it again."
			]
		},
		{
			"name": "Infectious Inspiration",
			"source": "TCE",
			"page": 29,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level College of Eloquence feature}",
				"When you successfully inspire someone, the power of your eloquence can now spread to someone else. When a creature within 60 feet of you adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses.",
				"You can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "College of Creation",
			"source": "UA2020SubclassesPt2",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 3,
			"entries": [
				"Bards believe the multiverse was given existence through word and sound, esoteric harmonies that continue to resound through existence: the Song of Creation. The bards of this college draw on this ancient power through performances of dance, music, or song to bring into being what they need most.",
				"Members of this college might have developed their powers during experiences on other worlds or planes of existence. Those who have seen the commonalities of multiple realities might have learned how to tap into truths most mortals glimpse only for a moment. Alternatively, the bard might find themselves out of step with their own home plane, reality, or time, their connections to elsewhere allowing them to manipulate the space around them. Regardless of where a bard draws their powers from, other performers might be drawn to them, either to learn their secrets or to put an end to their dangerous manipulation of the Song of Creation.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Note of Potential|Bard||Creation (UA)|UA2020SubclassesPt2|3"
				}
			]
		},
		{
			"name": "Note of Potential",
			"source": "UA2020SubclassesPt2",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Creation feature}",
				"You can manipulate the Song of Creation to summon a floating musical note of possibility: Whenever you give a creature a Bardic Inspiration die, you can create a Note of Potential. The note orbits within 5 feet of the creature. The note is a Tiny object that is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. A creature with a note can use it in the following ways.",
				{
					"type": "entries",
					"name": "Note of Destruction",
					"entries": [
						"Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll, the creature can expend the note to create a burst of sound. Each other creature within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die."
					]
				},
				{
					"type": "entries",
					"name": "Note of Protection",
					"entries": [
						"Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the creature can expend the note to gain temporary hit points equal to the number rolled on the Bardic Inspiration die + your Charisma modifier, provided the creature doesn't already have temporary hit points."
					]
				},
				{
					"type": "entries",
					"name": "Note of Ingenuity",
					"entries": [
						"When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can expend the note to roll the Bardic Inspiration die again and choose which roll to use."
					]
				}
			]
		},
		{
			"name": "Animating Performance",
			"source": "UA2020SubclassesPt2",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Creation feature}",
				"Your mastery over the Song of Creation allows you to magically bring items to life. As an action, you can target a Large or smaller nonmagical item you can see within 30 feet of you and animate it. The animate item uses the {@creature Dancing Item|UA2020SubclassesPt2} stat block and is under your control for 1 hour or until it is reduced to 0 hit points.",
				"In combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take one of the actions in its stat block or the {@action Dash}, {@action Disengage}, {@action Help}, {@action Hide}, or {@action Search} action.",
				"When you use your Bardic Inspiration feature, you can command which action your animated item takes as part of the same bonus action.",
				"Once you animate an item with this feature, you can't do so again until you finish a long rest or until you expend a spell slot of 3rd level or higher to use this feature. You can have only one item animated by this feature at a time; if you use this action and already have a {@creature dancing item|UA2020SubclassesPt2} from this feature, the first one immediately becomes inanimate."
			]
		},
		{
			"name": "Performance of Creation",
			"source": "UA2020SubclassesPt2",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Creation (UA)",
			"subclassSource": "UA2020SubclassesPt2",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level College of Creation feature}",
				"Your performance can manipulate the magic of creation, briefly transforming the world around you. As an action, you can create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level and must be Large or smaller. Tiny glimmering, intangible notes float around it, and a creature can faintly hear music when touching it. For examples of items you can create, see the Armor, Weapons, Adventuring Gear, Tools, and Mounts and Vehicles tables in chapter 5, \"Equipment,\" of the Player's Handbook.",
				"The created item disappears at the end of your next turn, unless you use your action to maintain it. Each time you use your action in this way, the item's duration is extended to the end of your next turn, up to a maximum of 1 minute. If you maintain the item for the full minute, it continues to exist for a number of hours equal to your bard level.",
				"Once you create an item with this feature, you can't do so again until you finish a long rest or until you expend a spell slot of 5th level or higher to use this feature. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes."
			]
		},
		{
			"name": "College of Spirits",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 3,
			"entries": [
				"Stories of the past are powerful; they hold lessons of history, philosophy, and magic. Bards of the College of Spirits seek the stories of those from beyond the material plane. Using gaming sets, they reach out to hear their stories, but the bards have no control over what story they find.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guiding Whispers|Bard||Spirits (UA)|UA2020SubclassesPt4|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spiritual Focus|Bard||Spirits (UA)|UA2020SubclassesPt4|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tales from Beyond|Bard||Spirits (UA)|UA2020SubclassesPt4|3"
				}
			]
		},
		{
			"name": "Guiding Whispers",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Spirits feature}",
				"You can reach out to spirits to guide you and others. You learn the {@spell guidance} cantrip, which doesn't count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it."
			]
		},
		{
			"name": "Spiritual Focus",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Spirits feature}",
				"Your practice of contacting spirits can employ special tools. You can use the following objects as a spellcasting focus for your bard spells: a candle, a crystal ball, a talking board, a {@deck tarokka deck|CoS}, or a skull.",
				"At 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a {@dice d6}, and you gain a bonus to one roll of the spell equal to the number rolled."
			]
		},
		{
			"name": "Tales from Beyond",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Spirits feature}",
				"You reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the Spirits' Tales table using your Bardic Inspiration die to determine the tale told. You retain the tale in mind until you bestow the tale's effect or you finish a short or long rest.",
				"You can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale's effect. Once you do so, you can't bestow the tale's effect again until you roll it again.",
				"You can retain only one of these tales in mind at a time, and rolling on the Spirits' Tales table immediately ends the effect of the previous tale. If the tale requires a saving throw, the DC equals your spell save DC.",
				{
					"type": "table",
					"caption": "Spirits' Tales",
					"colLabels": [
						"Bardic Insp. Die",
						"Tale"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							1,
							"{@b 1 Beast.} You recite the tale of a clever animal. For 1 minute, the target has advantage on Wisdom ({@skill Perception}) checks and advantage on attack rolls against a creature if another enemy is within 5 feet of it, and that enemy isn't {@condition incapacitated}."
						],
						[
							2,
							"{@b 2 Warrior.} You recount the story of a renowned duelist. Make a melee spell attack against the target as an attacking spectral warrior briefly appears in an unoccupied space within 5 feet of the target before vanishing. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier."
						],
						[
							3,
							"{@b 3 Friends.} You recite the tale of friends who found each other in the afterlife. The target and another creature of its choice it can see within 5 feet of it regains hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier."
						],
						[
							4,
							"{@b 4 Runaway.} You tell the tale of an adventurer that could escape any confinement. The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 1) to immediately use the same reaction."
						],
						[
							5,
							"{@b 5 Avenger.} You recount the tale of an avenging knight. For 1 minute, whenever a creature the target can see within 30 feet of it is damaged by a creature, the target can use its reaction to deal force damage equal to a roll of your Bardic Inspiration die to the attacker."
						],
						[
							6,
							"{@b 6 Hero.} You speak the tale of an epic hero. Choose a creature you can see within 30 feet of you. The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target's walking speed increases by 10 feet."
						],
						[
							7,
							"{@b 7 Fey.} You recount the tale of a mischievous fey. The target must succeed on a Wisdom saving throw or become {@condition charmed} by you until the end of its next turn. The {@condition charmed} target must use its action to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no other creature."
						],
						[
							8,
							"{@b 8 Dark Spirit.} You speak a dreadful tale of a slayer in the dark. The target becomes {@condition invisible} until the end of its next turn or until it hits a creature with an attack. If it hits a creature with an attack during this invisibility, that creature takes necrotic damage equal to a roll of your Bardic Inspiration die and is {@condition frightened} of the target until the end of its next turn."
						],
						[
							9,
							"{@b 9 Giant.} You speak of the deeds of a mighty giant. Each creature of the target's choice it can see within 30 feet of it must make a Strength saving throw, taking force damage equal to two rolls of your Bardic Inspiration die on a failed save and is knocked {@condition prone}. A creature that succeeds on its saving throw takes half as much damage and isn't knocked {@condition prone}."
						],
						[
							10,
							"{@b 10 Dragon.} You breathe a poem of a wrathful dragon. The target magically spews fire from their mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to three rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one."
						],
						[
							11,
							"{@b 11 Celestial.} You speak of the exalted deeds of a celestial. The target regains hit points equal to two rolls of your Bardic Inspiration die + your bard level, and you end one disease or a condition from the following list affecting the target: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, {@condition petrified}, or {@condition poisoned}."
						],
						[
							12,
							"{@b 12 Unknown.} You utter an incomprehensible fable from a being beyond the stars. Choose a creature you can see within 30 feet of you. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die, and the target is unable to speak any language for 1 minute."
						]
					]
				}
			]
		},
		{
			"name": "Spirit Session",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Spirits feature}",
				"You can channel spirits to gain insights into magic. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn {@filter one spell of your choice from any class|spells|school=d;n|level=0;1;2;3;4;5;6}.",
				"The spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must of a level you can cast, and it must be in the school of divination or necromancy. The chosen spell counts as a bard spell for you but doesn't count against the number of bard spells you know.",
				"Once you perform the ritual, you can't do so again until you start a long rest, and you know the chosen spell until you start a long rest."
			]
		},
		{
			"name": "Spiritual Focus",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Spirits feature}",
				"At 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a {@dice d6}, and you gain a bonus to one roll of the spell equal to the number rolled."
			]
		},
		{
			"name": "Mystical Connection",
			"source": "UA2020SubclassesPt4",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits (UA)",
			"subclassSource": "UA2020SubclassesPt4",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level College of Spirits feature}",
				"Your connection to spirits has become semi-permanent. Whenever you use your Tales from Beyond feature, you can roll a {@dice d6} and use it instead of expending a Bardic Inspiration die. You still use your Bardic Inspiration die for the tale's effect, without expending it."
			]
		},
		{
			"name": "College of Eloquence",
			"source": "UABardAndPaladin",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"entries": [
				"Adherents of the College of Eloquence master the art of oratory. Persuasion is regarded as a high art, and a well-reasoned, well-spoken argument often proves more powerful than objective truth. These bards wield a blend of logic and theatrical wordplay, winning over skeptics and detractors with logical arguments, and plucking at heartstrings to appeal to the emotions of entire audiences.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Universal Speech|Bard||Eloquence (UA)|UABardAndPaladin|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Soothing Words|Bard||Eloquence (UA)|UABardAndPaladin|3"
				}
			]
		},
		{
			"name": "Soothing Words",
			"source": "UABardAndPaladin",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Eloquence feature}",
				"You can now cast calm emotions without expending a spell slot. You can use this feature a number of times equal to your Charisma modifier. You regain all expended uses of this feature when you finish a long rest."
			]
		},
		{
			"name": "Universal Speech",
			"source": "UABardAndPaladin",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Eloquence feature}",
				"You have gained the ability to speak and reason with any creature. As a bonus action, you can expend one of your uses of Bardic Inspiration. When you do so, roll your Bardic Inspiration die, and choose a number of creatures within 60 feet of you that you can see equal to the roll. For 10 minutes, the chosen creatures can magically understand you, regardless of the language you speak, and you have advantage on Charisma checks made to influence them. This feature works even on a creature that doesn't speak any languages."
			]
		},
		{
			"name": "Undeniable Logic",
			"source": "UABardAndPaladin",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Eloquence feature}",
				"You can spin words laced with magic into a knot of reasoning that can be encouraging or impossible to follow.",
				"As a bonus action, you can expend one of your uses of Bardic Inspiration. When you do so, choose a creature you can see within 60 of you that can hear you, then roll your Bardic Inspiration die and choose one of the following:",
				{
					"type": "list",
					"items": [
						"The creature takes psychic damage equal to the number you roll on the Bardic Inspiration die, and the creature must succeed on an Intelligence saving throw against your spell save DC or have disadvantage on the next saving throw it makes before the end of your next turn.",
						"The creature regains hit points equal to the number you roll on the Bardic Inspiration die, and the creature has advantage on the next saving throw it makes before the end of your next turn."
					]
				}
			]
		},
		{
			"name": "Infectious Inspiration",
			"source": "UABardAndPaladin",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Eloquence (UA)",
			"subclassSource": "UABardAndPaladin",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level College of Eloquence feature}",
				"When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.",
				"In addition, when a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses. You can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "College of Glamour",
			"source": "UABardBardColleges",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 3,
			"entries": [
				"The College of Glamour is open to those bards who mastered their craft in the vibrant, deadly realm of the Feywild. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others.",
				"The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. The bards of this college are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, abusing their magic to turn their hosts into thralls.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Mantle of Inspiration|Bard||Glamour (UA)|UABardBardColleges|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Enthralling Performance|Bard||Glamour (UA)|UABardBardColleges|3"
				}
			]
		},
		{
			"name": "Enthralling Performance",
			"source": "UABardBardColleges",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can charge your performance with seductive fey magic.",
				"If you perform for at least 10 minutes, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number of them equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be {@condition charmed} by you. While {@condition charmed} in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.",
				"If a target succeeds on its save against this effect, the target has no hint that you tried to charm it.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Mantle of Inspiration",
			"source": "UABardBardColleges",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that enthralls your allies with vigor and speed.",
				"As a bonus action, you can expend a use of Bardic Inspiration to grant yourself a wondrous, otherworldly appearance. When you do so, choose a number of allies you can see and who can see you within 60 feet of you, up to a number of them equal to your Charisma modifier (minimum of one). Each target gains {@dice 2d6} temporary hit points.",
				"When a target gains these temporary hit points, it can also use its reaction to move up to its speed toward you, without provoking opportunity attacks. It must take the shortest, safest path to you.",
				"The number of temporary hit points increases when you reach certain levels in this class, increasing to {@dice 2d8} at 5th level, {@dice 2d10} at 10th level, and {@dice 2d12} at 15th level."
			]
		},
		{
			"name": "Mantle of Majesty",
			"source": "UABardBardColleges",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you take on an appearance of unearthly beauty for 1 minute. During this time, you can cast {@spell command} as a bonus action on each of your turns, without using a spell slot. This effect lasts for 1 minute, and any creature {@condition charmed} by you automatically fails its saving throw against the spell.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Mantle of Majesty",
			"source": "UABardBardColleges",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain an otherworldly aspect to your appearance that makes you look more fierce and lovely.",
				"In addition, through this feature, you can cast {@spell sanctuary} on yourself. If a creature fails its saving throw against the spell, you also gain advantage on all Charisma checks against the creature for 1 minute, and it has disadvantage on any saving throw it makes against your spells on your next turn.",
				"Once you cast {@spell sanctuary} using this feature, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "College of Whispers",
			"source": "UABardBardColleges",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 3,
			"entries": [
				"Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats.",
				"Many other bards hate the College of Whispers, viewing it as a parasite that uses the bards' reputation to acquire wealth and power. For this reason, these bards rarely reveal their true nature unless they must. They typically claim to follow some other college, or keep their true nature secret in order to better infiltrate and exploit royal courts and other settings of power.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Venomous Blades|Bard||Whispers (UA)|UABardBardColleges|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Venomous Words|Bard||Whispers (UA)|UABardBardColleges|3"
				}
			]
		},
		{
			"name": "Venomous Blades",
			"source": "UABardBardColleges",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Whispers at 3rd level, you gain the ability to magically make your weapon attacks toxic for a moment.",
				"When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional {@damage 2d6} poison damage to that target. You can do so only once per round on your turn.",
				"The additional damage increases when you reach certain levels in this class, increasing to {@dice 2d8} at 5th level, {@dice 2d10} at 10th level, and {@dice 2d12} at 15th level."
			]
		},
		{
			"name": "Venomous Words",
			"source": "UABardBardColleges",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to infuse innocent-seeming words with an insidious magic. A creature that hears you speak can become plunged into fear and paranoia.",
				"If you speak to a humanoid alone for at least 10 minutes, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} for the next hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged. While {@condition frightened} in this way, the target is paranoid and tries to avoid the company of others, including its allies. The target seeks out what it considers the safest, most secret place available to it and hides there.",
				"If the target succeeds on its save, the target has no hint that you tried to frighten it.",
				"Once you use this feature, you can't use it again until you finish a short rest or long rest."
			]
		},
		{
			"name": "Mantle of Whispers",
			"source": "UABardBardColleges",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to adopt a creature's persona. When you slay a creature with an attack or a spell or a creature dies within 5 feet of you, you can magically capture its shadow using your reaction. You can capture only the shadow of a creature that is your creature type, such as humanoid, and your size (you can capture a Small or Medium shadow if you're Small), and you can have only one shadow captured at a time.",
				"After you capture a creature's shadow, you can use your magic to weave it into a disguise that allows you to take on its appearance and gain access to its surface memories. As an action, you take on the creature's appearance for 1 hour or until you end this effect as a bonus action.",
				"During that hour, you gain access to all information that the creature would freely share with a casual acquaintance. Information includes general details on its background and personal life, but does not include secrets. The information is enough that you can pass yourself off as the creature by drawing on its memories.",
				"Another creature can see through this disguise by making a Wisdom ({@skill Insight}) check opposed by your Charisma ({@skill Deception}) check, though you gain a +5 bonus to your check.",
				"The disguise and the knowledge it grants disappears when this ability's duration ends."
			]
		},
		{
			"name": "Shadow Lore",
			"source": "UABardBardColleges",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers (UA)",
			"subclassSource": "UABardBardColleges",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to weave dark magic into your words and tap into a creature's deepest fears.",
				"As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn't share a language with you or if it can't hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.",
				"If the target fails its saving throw, it is {@condition charmed} by you for the next 8 hours or until you or your allies attack or damage it. It interprets the whispers as a description of its most mortifying secret. While you gain no knowledge of this secret, the target is convinced you know it.",
				"While {@condition charmed} in this way, the creature obeys your commands for fear that you will reveal its secret. It won't risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.",
				"When the effect ends, the creature has no understanding of why it held you in such fear. Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "College of Satire",
			"source": "UAKitsOfOld",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Satire (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"entries": [
				"Bards of the College of Satire are called jesters. They use lowbrow stories, daring acrobatics, and cutting jokes to entertain audiences, ranging from the crowds in a rundown dockside pub to the nobles of a king's royal court. Where other bards seek forgotten lore or tales of epic bravery, jesters ferret out embarrassing and hilarious stories of all kinds. Whether telling the ribald tale of a brawny stable hand's affair with an aged duchess or a mocking satire of a paladin of Helm's cloying innocence, a jester never lets taste, social decorum, or shame get in the way of a good laugh.",
				"While jesters are masters of puns, jokes, and verbal barbs, they are much more than just comic relief. They are expected to mock and provoke, taking advantage of how even the most powerful folk are expected by tradition to endure a jester's barbs with good humor. This expectation allows a jester to serve as a critic or a voice of reason when others are too intimidated to speak the truth.",
				"For the duchess with a taste for strapping young laborers, such tales might serve to warn the targets of her affections and force her to change her ways for lack of willing partners. Striking back at the jester only ruins her already damaged reputation, and might provide the best evidence that the jester's satires have hit their mark. But if she is kind and generous to her conquests, the jokes and stories cast her as a kind of folk hero, while drawing even more potential partners to her.",
				"Jesters are loyal to only one cause: the pursuit and propagation of the truth. They use their comedy and innocuous appearance to break down social barriers and expose corruption, incompetence, and stupidity among the rich and powerful. Whether revealing a con artist's treachery or exposing a baron's plans for war as driven by greed and bloodlust, a jester serves as the conscience of a realm.",
				"Jesters adventure to safeguard the common folk and to undermine the plans of the rich, powerful, and arrogant. Their magic bolsters allies' spirits while casting doubt into foes' minds. Among bards, jesters are unmatched acrobats, and their ability to tumble, dodge, leap, and climb makes them slippery opponents in battle.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Bard||Satire (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tumbling Fool|Bard||Satire (UA)|UAKitsOfOld|3"
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAKitsOfOld",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Satire (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Satire at 3rd level, you gain proficiency with {@item thieves' tools|phb}. You also gain proficiency in {@skill Sleight of Hand} and one additional skill of your choice. If you are already proficient with {@item thieves' tools|phb} or in {@skill Sleight of Hand}, choose another skill proficiency for each proficiency you already have."
			]
		},
		{
			"name": "Tumbling Fool",
			"source": "UAKitsOfOld",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Satire (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you master a variety of acrobatic techniques that allow you to evade danger. As a bonus action, you can tumble. When you tumble, you gain the following benefits for the rest of your turn:",
				{
					"type": "list",
					"items": [
						"You gain the benefits of taking the {@action Dash} and {@action Disengage} actions.",
						"You gain a climbing speed equal to your current speed.",
						"You take half damage from falling."
					]
				}
			]
		},
		{
			"name": "Fool's Insight",
			"source": "UAKitsOfOld",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Satire (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your ability to gather stories and lore gains a supernatural edge. You can cast detect thoughts up to a number of times equal to your Charisma modifier. You regain any expended uses of this ability after completing a long rest.",
				"If a creature resists your attempt to probe deeper and succeeds at its saving throw against your detect thoughts, it immediately suffers an embarrassing social gaffe. It might loudly pass gas, unleash a thunderous burp, trip and fall, or be compelled to tell a tasteless joke."
			]
		},
		{
			"name": "Fool's Luck",
			"source": "UAKitsOfOld",
			"page": 2,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Satire (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 14,
			"header": 2,
			"entries": [
				"Jesters seem to have a knack for pulling themselves out of tight situations, transforming what looks like sure failure into an embarrassing but effective success.",
				"At 14th level, you can expend one use of Bardic Inspiration after you fail an ability check, fail a saving throw, or miss with an attack roll. Roll a Bardic Inspiration die and add the number rolled to your attack, saving throw, or ability check, using the new result in place of the failed one.",
				"If using this ability grants you a success on the attack, saving throw, or ability check, note the number you rolled on the Bardic Inspiration die. The DM can then apply that result as a penalty to an attack or check you make, and you cannot use this ability again until you suffer this drawback. When the DM invokes this penalty, describe an embarrassing gaffe or mistake you make as part of the affected die roll."
			]
		},
		{
			"name": "College of Swords",
			"source": "UAKitsOfOld",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"entries": [
				"Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. But though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.",
				"Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade's talent for the excitement it adds to a performance, but few entertainers fully trust them.",
				"Blades who abandon lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most performer troupes. With their weapon skills as their greatest asset, these blades either take up work as enforcers for thieves' guilds or strike out on their own as adventurers.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Bard||Swords (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fighting Style|Bard||Swords (UA)|UAKitsOfOld|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blade Flourish|Bard||Swords (UA)|UAKitsOfOld|3"
				}
			]
		},
		{
			"name": "Blade Flourish",
			"source": "UAKitsOfOld",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to conduct impressive displays of skill with your weapons. When you use the {@action Attack} action on your turn and attack with a dagger, longsword, rapier, scimitar, or shortsword, you can attempt one of the following flourishes.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Defensive Flourish",
							"entries": [
								"You spin your weapon around you in swift circles, creating a hypnotic display. As a bonus action, you expend one use of Bardic Inspiration, rolling a Bardic Inspiration die and applying the number rolled as a bonus to your AC until the start of your next turn."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Trick Shooter's Flourish",
							"entries": [
								"This favorite trick of knife throwers allows you to expend one use of Bardic Inspiration as a bonus action. Roll a Bardic Inspiration die and apply the number rolled as a bonus to the next ranged attack roll you make with a dagger this turn. If the target of the attack is an unattended, inanimate object, the bonus equals double the die roll."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Unnerving Flourish",
							"entries": [
								"Your deadly display of combat prowess unnerves your opponents, leaving them cowering in fear and at your mercy. Whenever you reduce a creature to 0 hit points with a melee attack, you can use a bonus action to expend one use of Bardic Inspiration, and instead leave the creature at 1 hit point.",
								"The creature is {@condition frightened} of you for a number of minutes equal to your Charisma modifier. It must also make a Charisma saving throw with a DC equal to your spellcasting DC + a bonus equal to the roll of your Bardic Inspiration die. If the creature fails this saving throw, it answers truthfully any questions you ask it and obeys your direct orders while it is {@condition frightened} by this effect."
							]
						}
					]
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UAKitsOfOld",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Blades at 3rd level, you gain proficiency with medium armor and with scimitars."
			]
		},
		{
			"name": "Fighting Style",
			"source": "UAKitsOfOld",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 3,
			"header": 1,
			"entries": [
				"The College of Blades emphasizes mastery with weapons, granting you access to the two-weapon fighting option for the Fighting Style class feature.",
				{
					"type": "refOptionalfeature",
					"optionalfeature": "Two-Weapon Fighting"
				}
			]
		},
		{
			"name": "Extra Attack",
			"source": "UAKitsOfOld",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Battle Magic",
			"source": "UAKitsOfOld",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords (UA)",
			"subclassSource": "UAKitsOfOld",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
			]
		},
		{
			"name": "College of Swords v2",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"entries": [
				"Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. But though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.",
				"Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade's talent for the excitement it adds to a performance, but few entertainers fully trust them.",
				"Blades who abandon lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most performer troupes. With their weapon skills as their greatest asset, these blades either take up work as enforcers for thieves' guilds or strike out on their own as adventurers.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Bard||Swords v2 (UA)|UARevisedSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fighting Style|Bard||Swords v2 (UA)|UARevisedSubclasses|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blade Flourish|Bard||Swords v2 (UA)|UARevisedSubclasses|3"
				}
			]
		},
		{
			"name": "Blade Flourish",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to conduct impressive displays of skill with your weapons. As a standard action, you can make a standard melee attack and increase your walking speed by 10 feet until the end of the current turn. Whenever you use this option, you can also use one of the following Blade Flourish options with it.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Defensive Flourish",
							"entries": [
								"You spin your weapon around you in swift circles, creating a hypnotic display. You can expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and applying the number rolled as a bonus to your AC until the start of your next turn."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Slashing Flourish",
							"entries": [
								"If the attack hits its target, you can expend one of your uses of Bardic Inspiration to cause the weapon to damage each creature of your choice, other than the target, that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Mobile Flourish",
							"entries": [
								"If the attack hits its target, you can expend one of your uses of Bardic Inspiration to push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on the Bardic Inspiration die. You can then immediately use your reaction to move up to your speed to an unoccupied space within 5 feet of the target."
							]
						}
					]
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Blades at 3rd level, you gain proficiency with medium armor and with scimitars. If you are proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your Bard spells."
			]
		},
		{
			"name": "Fighting Style",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 3,
			"header": 1,
			"entries": [
				"The College of Blades emphasizes mastery with weapons, granting you access to either the dueling or two-weapon fighting option for the Fighting Style class feature, which are as follows.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Dueling"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Two-Weapon Fighting"
						}
					]
				}
			]
		},
		{
			"name": "Cunning Flourish",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 6,
			"header": 2,
			"entries": [
				"Beginning at 6th level, you can attack twice, instead of once, whenever you take the Blade Flourish action on your turn. You can, nevertheless, only use one Blade Flourish option when you take that action."
			]
		},
		{
			"name": "Master's Flourish",
			"source": "UARevisedSubclasses",
			"page": 1,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords v2 (UA)",
			"subclassSource": "UARevisedSubclasses",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, whenever you use a Blade Flourish option, you can roll a {@dice d6} and use it instead of expending a Bardic Inspiration die."
			]
		},
		{
			"name": "College of Spirits",
			"source": "VRGR",
			"page": 28,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits",
			"subclassSource": "VRGR",
			"level": 3,
			"entries": [
				"Bards of the College of Spirits seek tales with inherent power\u2014be they legends, histories, or fictions\u2014and bring their subjects to life. Using occult trappings, these bards conjure spiritual embodiments of powerful forces to change the world once more. Such spirits are capricious, though, and what a bard summons isn't always entirely under their control.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Guiding Whispers|Bard||Spirits|VRGR|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spiritual Focus|Bard||Spirits|VRGR|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Tales from Beyond|Bard||Spirits|VRGR|3"
				}
			]
		},
		{
			"name": "Guiding Whispers",
			"source": "VRGR",
			"page": 28,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits",
			"subclassSource": "VRGR",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Spirits feature}",
				"You can reach out to spirits to guide you and others. You learn the {@spell guidance} cantrip, which doesn't count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it."
			]
		},
		{
			"name": "Spiritual Focus",
			"source": "VRGR",
			"page": 28,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits",
			"subclassSource": "VRGR",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Spirits feature}",
				"You employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or {@deck tarokka deck|CoS}.",
				"Starting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a {@dice d6}, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled."
			]
		},
		{
			"name": "Tales from Beyond",
			"source": "VRGR",
			"page": 28,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits",
			"subclassSource": "VRGR",
			"level": 3,
			"header": 1,
			"entries": [
				"{@i 3rd-level College of Spirits feature}",
				"You reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the Spirit Tales table using your Bardic Inspiration die to determine the tale the spirits direct you to tell. You retain the tale in mind until you bestow the tale's effect or you finish a short or long rest.",
				"You can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale's effect. Once you do so, you can't bestow the tale's effect again until you roll it again.",
				"You can retain only one of these tales in mind at a time, and rolling on the Spirit Tales table immediately ends the effect of the previous tale.",
				"If the tale requires a saving throw, the DC equals your spell save DC.",
				{
					"type": "table",
					"caption": "Spirit Tales",
					"colLabels": [
						"Bardic Insp. Die",
						"Tale Told Through You"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"Tale of the Clever Animal. For the next 10 minutes, whenever the target makes an Intelligence, a Wisdom, or a Charisma check, the target can roll an extra die immediately after rolling the {@dice d20} and add the extra die's number to the check. The extra die is the same type as your Bardic Inspiration die."
						],
						[
							"2",
							"Tale of the Renowned Duelist. You make a melee spell attack against the target. On a hit, the target takes force damage equal to two rolls of your Bardic Inspiration die + your Charisma modifier."
						],
						[
							"3",
							"Tale of the Beloved Friends. The target and another creature of its choice it can see within 5 feet of it gains temporary hit points equal to a roll of your Bardic Inspiration die + your Charisma modifier."
						],
						[
							"4",
							"Tale of the Runaway. The target can immediately use its reaction to teleport up to 30 feet to an unoccupied space it can see. When the target teleports, it can choose a number of creatures it can see within 30 feet of it up to your Charisma modifier (minimum of 0) to immediately use the same reaction."
						],
						[
							"5",
							"Tale of the Avenger. For 1 minute, any creature that hits the target with a melee attack takes force damage equal to a roll of your Bardic Inspiration die."
						],
						[
							"6",
							"Tale of the Traveler. The target gains temporary hit points equal to a roll of your Bardic Inspiration die + your bard level. While it has these temporary hit points, the target's walking speed increases by 10 feet and it gains a +1 bonus to its AC."
						],
						[
							"7",
							"Tale of the Beguiler. The target must succeed on a Wisdom saving throw or take psychic damage equal to two rolls of your Bardic Inspiration die, and the target is {@condition incapacitated} until the end of its next turn."
						],
						[
							"8",
							"Tale of the Phantom. The target becomes {@condition invisible} until the end of its next turn or until it hits a creature with an attack. If the target hits a creature with an attack during this invisibility, the creature it hits takes necrotic damage equal to a roll of your Bardic Inspiration die and is {@condition frightened} of the target until the end of the {@condition frightened} creature's next turn."
						],
						[
							"9",
							"Tale of the Brute. Each creature of the target's choice it can see within 30 feet of it must make a Strength saving throw. On a failed save, a creature takes thunder damage equal to three rolls of your Bardic Inspiration die and is knocked {@condition prone}. A creature that succeeds on its saving throw takes half as much damage and isn't knocked {@condition prone}."
						],
						[
							"10",
							"Tale of the Dragon. The target spews fire from the mouth in a 30-foot cone. Each creature in that area must make a Dexterity saving throw, taking fire damage equal to four rolls of your Bardic Inspiration die on a failed save, or half as much damage on a successful one."
						],
						[
							"11",
							"Tale of the Angel. The target regains hit points equal to two rolls of your Bardic Inspiration die + your Charisma modifier, and you end one condition from the following list affecting the target: {@condition blinded}, {@condition deafened}, {@condition paralyzed}, {@condition petrified}, or {@condition poisoned}."
						],
						[
							"12",
							"Tale of the Mind-Bender. You evoke an incomprehensible fable from an otherworldly being. The target must succeed on an Intelligence saving throw or take psychic damage equal to three rolls of your Bardic Inspiration die and be {@condition stunned} until the end of its next turn."
						]
					]
				}
			]
		},
		{
			"name": "Spirit Session",
			"source": "VRGR",
			"page": 28,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits",
			"subclassSource": "VRGR",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level College of Spirits feature}",
				"Spirits provide you with supernatural insights. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of willing creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn {@filter one spell of your choice from any class|spells|school=d;n|level=0;1;2;3;4;5;6}.",
				"The spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must be of a level you can cast, and it must be in the school of divination or necromancy. The chosen spell counts as a bard spell for you but doesn't count against the number of bard spells you know.",
				"Once you perform the ritual, you can't do so again until you start a long rest, and you know the chosen spell until you start a long rest."
			]
		},
		{
			"name": "Mystical Connection",
			"source": "VRGR",
			"page": 28,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Spirits",
			"subclassSource": "VRGR",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level College of Spirits feature}",
				"You now have the ability to nudge the spirits of Tales from Beyond toward certain tales. Whenever you roll on the Spirit Tales table, you can roll the die twice and choose which of the two effects to bestow. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.",
				{
					"type": "inset",
					"name": "Spirit Tales",
					"entries": [
						"Storytellers, like bards of the College of Spirits, often give voice to tales inspired by some greater theme or body of work. When determining what stories you tell, consider what unites them. Do they all feature characters from a specific group, like archetypes from the {@deck tarokka deck|CoS}, figures from constellations, childhood imaginary friends, or characters in a particular storybook? Or are your inspirations more general, incorporating historic champions, mythological heroes, or urban legends? Use the tales you tell to define your niche as a storytelling adventurer."
					]
				}
			]
		},
		{
			"name": "College of Glamour",
			"source": "XGE",
			"page": 14,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"The College of Glamour is the home of bards who mastered their craft in the vibrant realm of the Feywild or under the tutelage of someone who dwelled there. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others.",
				"The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. These bards are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, misusing their magic to turn their hosts into thralls. Heroic bards of this college instead use this power to gladden the downtrodden and undermine oppressors.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Mantle of Inspiration|Bard||Glamour|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Enthralling Performance|Bard||Glamour|XGE|3"
				}
			]
		},
		{
			"name": "Enthralling Performance",
			"source": "XGE",
			"page": 14,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"Starting at 3rd level, you can charge your performance with seductive, fey magic.",
				"If you perform for at least 1 minute, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be {@condition charmed} by you. While {@condition charmed} in this way, the target idolizes you, it speaks glowingly of you to anyone who talks to it, and it hinders anyone who opposes you, although it avoids violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies.",
				"If a target succeeds on its saving throw, the target has no hint that you tried to charm it.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Mantle of Inspiration",
			"source": "XGE",
			"page": 14,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that imbues your allies with vigor and speed.",
				"As a bonus action, you can expend one use of your Bardic Inspiration to grant yourself a wondrous appearance. When you do so, choose a number of creatures you can see and that can see you within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one). Each of them gains 5 temporary hit points. When a creature gains these temporary hit points, it can immediately use its reaction to move up to its speed, without provoking opportunity attacks.",
				"The number of temporary hit points increases when you reach certain levels in this class, increasing to 8 at 5th level, 11 at 10th level, and 14 at 15th level."
			]
		},
		{
			"name": "Mantle of Majesty",
			"source": "XGE",
			"page": 14,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you cast {@spell command}, without expending a spell slot, and you take on an appearance of unearthly beauty for 1 minute or until your {@status concentration} ends (as if you were {@status concentration||concentrating} on a spell). During this time, you can cast {@spell command} as a bonus action on each of your turns, without expending a spell slot.",
				"Any creature {@condition charmed} by you automatically fails its saving throw against the {@spell command} you cast with this feature.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Unbreakable Majesty",
			"source": "XGE",
			"page": 14,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Glamour",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your appearance permanently gains an otherworldly aspect that makes you look more lovely and fierce.",
				"In addition, as a bonus action, you can assume a magically majestic presence for 1 minute or until you are {@condition incapacitated}. For the duration, whenever any creature tries to attack you for the first time on a turn, the attacker must make a Charisma saving throw against your spell save DC. On a failed save, it can't attack you on this turn, and it must choose a new target for its attack or the attack is wasted. On a successful save, it can attack you on this turn, but it has disadvantage on any saving throw it makes against your spells on your next turn.",
				"Once you assume this majestic presence, you can't do so again until you finish a short or long rest."
			]
		},
		{
			"name": "College of Swords",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. Though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.",
				"Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade's talent for the excitement it adds to a performance, but few entertainers fully trust a blade in their ranks.",
				"Blades who abandon their lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most troupes. With their weapon skills and magic, these blades either take up work as enforcers for thieves' guilds or strike out on their own as adventurers.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Proficiencies|Bard||Swords|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Fighting Style|Bard||Swords|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Blade Flourish|Bard||Swords|XGE|3"
				}
			]
		},
		{
			"name": "Blade Flourish",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to perform impressive displays of martial prowess and speed.",
				"Whenever you take the {@action Attack} action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.",
				{
					"type": "options",
					"entries": [
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Defensive Flourish|Bard|XGE|Swords|XGE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Slashing Flourish|Bard|XGE|Swords|XGE|3"
						},
						{
							"type": "refSubclassFeature",
							"subclassFeature": "Mobile Flourish|Bard|XGE|Swords|XGE|3"
						}
					]
				}
			]
		},
		{
			"name": "Bonus Proficiencies",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the {@item scimitar|phb}.",
				"If you're proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells."
			]
		},
		{
			"name": "Fighting Style",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if something in the game lets you choose again.",
				{
					"type": "options",
					"count": 1,
					"entries": [
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Dueling"
						},
						{
							"type": "refOptionalfeature",
							"optionalfeature": "Two-Weapon Fighting"
						}
					]
				}
			]
		},
		{
			"name": "Extra Attack",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, you can attack twice, instead of once, whenever you take the {@action Attack} action on your turn."
			]
		},
		{
			"name": "Master's Flourish",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, whenever you use a Blade Flourish option, you can roll a {@dice d6} and use it instead of expending a Bardic Inspiration die."
			]
		},
		{
			"name": "College of Whispers",
			"source": "XGE",
			"page": 16,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like other bards, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats.",
				"Many other bards hate the College of Whispers, viewing it as a parasite that uses a bard's reputation to acquire wealth and power. For this reason, members of this college rarely reveal their true nature. They typically claim to follow some other college, or they keep their actual calling secret in order to infiltrate and exploit royal courts and other settings of power.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Psychic Blades|Bard||Whispers|XGE|3"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Words of Terror|Bard||Whispers|XGE|3"
				}
			]
		},
		{
			"name": "Psychic Blades",
			"source": "XGE",
			"page": 16,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.",
				"When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an extra {@damage 2d6} psychic damage to that target. You can do so only once per round on your turn.",
				"The psychic damage increases when you reach certain levels in this class, increasing to {@dice 3d6} at 5th level, {@dice 5d6} at 10th level, and {@dice 8d6} at 15th level."
			]
		},
		{
			"name": "Words of Terror",
			"source": "XGE",
			"page": 16,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers",
			"subclassSource": "XGE",
			"level": 3,
			"header": 1,
			"entries": [
				"At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.",
				"If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia in its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be {@condition frightened} of you or another creature of your choice. The target is {@condition frightened} in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.",
				"If the target succeeds on its saving throw, the target has no hint that you tried to frighten it.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Mantle of Whispers",
			"source": "XGE",
			"page": 16,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.",
				"You can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.",
				"While you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.",
				"Another creature can see through this disguise by succeeding on a Wisdom ({@skill Insight}) check contested by your Charisma ({@skill Deception}) check. You gain a +5 bonus to your check.",
				"Once you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest."
			]
		},
		{
			"name": "Shadow Lore",
			"source": "XGE",
			"page": 16,
			"className": "Bard",
			"classSource": "PHB",
			"subclassShortName": "Whispers",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, you gain the ability to weave dark magic into your words and tap into a creature's deepest fears.",
				"As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn't share a language with you or if it can't hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.",
				"On a failed saving throw, the target is {@condition charmed} by you for the next 8 hours or until you or your allies attack it, damage it, or force it to make a saving throw. It interprets the whispers as a description of its most mortifying secret. You gain no knowledge of this secret, but the target is convinced you know it.",
				"The {@condition charmed} creature obeys your commands for fear that you will reveal its secret. It won't risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.",
				"When the effect ends, the creature has no understanding of why it held you in such fear.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Defensive Flourish",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "XGE",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn."
			]
		},
		{
			"name": "Mobile Flourish",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "XGE",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target."
			]
		},
		{
			"name": "Slashing Flourish",
			"source": "XGE",
			"page": 15,
			"className": "Bard",
			"classSource": "XGE",
			"subclassShortName": "Swords",
			"subclassSource": "XGE",
			"level": 3,
			"entries": [
				"You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die."
			]
		}
	]
}

const druid = 
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
			"name": "Druid",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"hd": {
				"number": 1,
				"faces": 8
			},
			"proficiency": [
				"int",
				"wis"
			],
			"spellcastingAbility": "wis",
			"casterProgression": "full",
			"preparedSpells": "<$level$> + <$wis_mod$>",
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
			"startingProficiencies": {
				"armor": [
					"light",
					"medium",
					{
						"proficiency": "{@item shield|phb|shields}",
						"full": "shields (druids will not wear armor or use shields made of metal)"
					}
				],
				"weapons": [
					"{@item club|phb|clubs}",
					"{@item dagger|phb|daggers}",
					"{@item dart|phb|darts}",
					"{@item javelin|phb|javelins}",
					"{@item mace|phb|maces}",
					"{@item quarterstaff|phb|quarterstaffs}",
					"{@item scimitar|phb|scimitars}",
					"{@item sickle|phb|sickles}",
					"{@item sling|phb|slings}",
					"{@item spear|phb|spears}"
				],
				"tools": [
					"{@item Herbalism kit|PHB}"
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
								"arcana",
								"animal handling",
								"insight",
								"medicine",
								"nature",
								"perception",
								"religion",
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
					"(a) a wooden {@item shield|phb} or (b) any {@filter simple weapon|items|source=phb|category=basic|type=simple weapon}",
					"(a) a {@item scimitar|phb} or (b) any {@filter simple melee weapon|items|source=phb|category=basic|type=simple weapon;melee weapon=u~u~sand}",
					"{@item Leather armor|phb}, an {@item explorer's pack|phb}, and a {@item druidic focus|phb}"
				],
				"goldAlternative": "{@dice 2d4 × 10|2d4 × 10|Starting Gold}",
				"defaultData": [
					{
						"a": [
							"shield|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimple"
							}
						]
					},
					{
						"a": [
							"scimitar|phb"
						],
						"b": [
							{
								"equipmentType": "weaponSimpleMelee"
							}
						]
					},
					{
						"_": [
							"Leather armor|phb",
							"explorer's pack|phb",
							"druidic focus|phb"
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
						{
							"proficiency": "{@item shield|phb|shields}",
							"full": "shields (druids will not wear armor or use shields made of metal)"
						}
					]
				}
			},
			"classTableGroups": [
				{
					"colLabels": [
						"{@filter Cantrips Known|spells|level=0|class=Druid}"
					],
					"rows": [
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
						]
					]
				},
				{
					"title": "Spell Slots per Spell Level",
					"colLabels": [
						"{@filter 1st|spells|level=1|class=Druid}",
						"{@filter 2nd|spells|level=2|class=Druid}",
						"{@filter 3rd|spells|level=3|class=Druid}",
						"{@filter 4th|spells|level=4|class=Druid}",
						"{@filter 5th|spells|level=5|class=Druid}",
						"{@filter 6th|spells|level=6|class=Druid}",
						"{@filter 7th|spells|level=7|class=Druid}",
						"{@filter 8th|spells|level=8|class=Druid}",
						"{@filter 9th|spells|level=9|class=Druid}"
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
				"Druidic|Druid||1",
				"Spellcasting|Druid||1",
				"Cantrip Versatility|Druid||1|UAClassFeatureVariants",
				"Wild Shape|Druid||2",
				"Wild Companion|Druid||2|UAClassFeatureVariants",
				"Wild Companion|Druid||2|TCE",
				{
					"classFeature": "Druid Circle|Druid||2",
					"gainSubclassFeature": true
				},
				"Wild Shape Improvement|Druid||4",
				"Ability Score Improvement|Druid||4",
				"Proficiency Versatility|Druid||4|UAClassFeatureVariants",
				"Cantrip Versatility|Druid||4|TCE",
				{
					"classFeature": "Druid Circle feature|Druid||6",
					"gainSubclassFeature": true
				},
				"Wild Shape Improvement|Druid||8",
				"Ability Score Improvement|Druid||8",
				"Proficiency Versatility|Druid||8|UAClassFeatureVariants",
				{
					"classFeature": "Druid Circle feature|Druid||10",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Druid||12",
				"Proficiency Versatility|Druid||12|UAClassFeatureVariants",
				{
					"classFeature": "Druid Circle feature|Druid||14",
					"gainSubclassFeature": true
				},
				"Ability Score Improvement|Druid||16",
				"Proficiency Versatility|Druid||16|UAClassFeatureVariants",
				"Timeless Body|Druid||18",
				"Beast Spells|Druid||18",
				"Ability Score Improvement|Druid||19",
				"Proficiency Versatility|Druid||19|UAClassFeatureVariants",
				"Archdruid|Druid||20"
			],
			"subclassTitle": "Druid Circle",
			"fluff": [
				{
					"name": "Druid",
					"type": "section",
					"entries": [
						"Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest.",
						"Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists' activities.",
						"Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life.",
						"Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature's resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature's indomitable will.",
						{
							"type": "entries",
							"name": "Power of Nature",
							"entries": [
								"Druids revere nature above all, gaining their spells and other magical powers either from the force of nature itself or from a nature deity. Many druids pursue a mystic spirituality of transcendent union with nature rather than devotion to a divine entity, while others serve gods of wild nature, animals, or elemental forces. The ancient druidic traditions are sometimes called the Old Faith, in contrast to the worship of gods in temples and shrines.",
								"Druid spells are oriented toward nature and animals\u2014the power of tooth and claw, of sun and moon, of fire and storm. Druids also gain the ability to take on animal forms, and some druids make a particular study of this practice, even to the point where they prefer animal form to their natural form."
							]
						},
						{
							"type": "entries",
							"name": "Preserve the Balance",
							"entries": [
								"For druids, nature exists in a precarious balance. The four elements that make up a world\u2014air, earth, fire, and water\u2014must remain in equilibrium. If one element were to gain power over the others, the world could be destroyed, drawn into one of the elemental planes and broken apart into its component elements. Thus, druids oppose cults of Elemental Evil and others who promote one element to the exclusion of others.",
								"Druids are also concerned with the delicate ecological balance that sustains plant and animal life, and the need for civilized folk to live in harmony with nature, not in opposition to it. Druids accept that which is cruel in nature, and they hate that which is unnatural, including aberrations (such as beholders and mind flayers) and undead (such as zombies and vampires). Druids sometimes lead raids against such creatures, especially when the monsters encroach on the druids' territory.",
								"Druids are often found guarding sacred sites or watching over regions of unspoiled nature. But when a significant danger arises, threatening nature's balance or the lands they protect, druids take on a more active role in combating the threat, as adventurers."
							]
						},
						{
							"type": "entries",
							"name": "Creating a Druid",
							"entries": [
								"When making a druid, consider why your character has such a close bond with nature. Perhaps your character lives in a society where the Old Faith still thrives, or was raised by a druid after being abandoned in the depths of a forest. Perhaps your character had a dramatic encounter with the spirits of nature, coming face to face with a giant eagle or dire wolf and surviving the experience. Maybe your character was born during an epic storm or a volcanic eruption, which was interpreted as a sign that becoming a druid was part of your character's destiny.",
								"Have you always been an adventurer as part of your druidic calling, or did you first spend time as a caretaker of a sacred grove or spring? Perhaps your homeland was befouled by evil, and you took up an adventuring life in hopes of finding a new home or purpose.",
								{
									"type": "entries",
									"name": "Quick Build",
									"entries": [
										"You can make a druid quickly by following these suggestions. First, Wisdom should be your highest ability score, followed by Constitution. Second, choose the {@background hermit} background."
									]
								}
							]
						},
						{
							"type": "inset",
							"name": "Sacred Plants and Wood",
							"entries": [
								"A druid holds certain plants to be sacred, particularly alder, ash, birch, elder, hazel, holly, juniper, mistletoe, oak, rowan, willow, and yew. Druids often use such plants as part of a spellcasting focus, incorporating lengths of oak or yew or sprigs of mistletoe.",
								"Similarly, a druid uses such woods to make other objects, such as weapons and shields. Yew is associated with death and rebirth, so weapon handles for scimitars or sickles might be fashioned from it. Ash is associated with life and oak with strength. These woods make excellent hafts or whole weapons, such as clubs or quarterstaffs, as well as shields. Alder is associated with air, and it might be used for thrown weapons, such as darts or javelins.",
								"Druids from regions that lack the plants described here have chosen other plants to take on similar uses. For instance, a druid of a desert region might value the yucca tree and cactus plants."
							]
						},
						{
							"type": "inset",
							"name": "Druids and the Gods",
							"entries": [
								"Some druids venerate the forces of nature themselves, but most druids are devoted to one of the many nature deities worshiped in the multiverse (the lists of gods in appendix B include many such deities). The worship of these deities is often considered a more ancient tradition than the faiths of clerics and urbanized peoples. In fact, in the world of Greyhawk, the druidic faith is called the Old Faith, and it claims many adherents among farmers, foresters, fishers, and others who live closely with nature. This tradition includes the worship of Nature as a primal force beyond personification, but also encompasses the worship of Beory, the Oerth Mother, as well as devotees of Obad-Hai, Ehlonna, and Ulaa.",
								"In the worlds of Greyhawk and the Forgotten Realms, druidic circles are not usually connected to the faith of a single nature deity. Any given circle in the Forgotten Realms, for example, might include druids who revere Silvanus, Mielikki, Eldath, Chauntea, or even the harsh Gods of Fury: Talos, Malar, Auril, and Umberlee. These nature gods are often called the First Circle, the first among the druids, and most druids count them all (even the violent ones) as worthy of veneration.",
								"The druids of Eberron hold animistic beliefs completely unconnected to the Sovereign Host, the Dark Six, or any of the other religions of the world. They believe that every living thing and every natural phenomenon\u2014sun, moon, wind, fire, and the world itself\u2014has a spirit. Their spells, then, are a means to communicate with and command these spirits. Different druidic sects, though, hold different philosophies about the proper relationship of these spirits to each other and to the forces of civilization. The Ashbound, for example, believe that arcane magic is an abomination against nature, the Children of Winter venerate the forces of death, and the Gatekeepers preserve ancient traditions meant to protect the world from the incursion of aberrations."
							]
						}
					],
					"source": "PHB",
					"page": 64
				},
				{
					"type": "section",
					"entries": [
						{
							"type": "quote",
							"entries": [
								"Even in death, each creature plays its part in maintaining the Great Balance. But now an imbalance grows, a force that seeks to hold sway over nature. This is the destructive behavior of the mortal races. The farther away from nature their actions take them, the more corrupting their influence becomes. As druids, we seek mainly to protect and educate, to preserve the Great Balance, but there are times when we must rise up against danger and eradicate it."
							],
							"by": "Safhran, archdruid"
						},
						"Druids are the caretakers of the natural world, and it is said that in time a druid becomes the voice of nature, speaking the truth that is too subtle for the general populace to hear. Many who become druids find that they naturally gravitate toward nature; its forces, cycles, and movements fill their minds and spirits with wonder and insight. Many sages and wise folk have studied nature, writing volumes about its mystery and power, but druids are a special kind of being: at some point, they begin to embody these natural forces, producing magical phenomena that link them to the spirit of nature and the flow of life. Because of their strange and mysterious power, druids are often revered, shunned, or considered dangerous by the people around them.",
						"Your druid character might be a true worshiper of nature, one who has always scorned civilization and found solace in the wild. Or your character could be a child of the city who now strives to bring the civilized world into harmony with the wilderness. You can use the sections that follow to flesh out your druid, regardless of how your character came to the profession.",
						{
							"type": "entries",
							"name": "Treasured Item",
							"entries": [
								"Some druids carry one or more items that are sacred to them or have deep personal significance. Such items are not necessarily magical, but every one is an object whose meaning connects the druid's mind and heart to a profound concept or spiritual outlook.",
								"When you decide what your character's treasured item is, think about giving it an origin story: how did you come by the item, and why is it important to you?",
								{
									"type": "table",
									"caption": "Treasured Item",
									"colLabels": [
										"{@dice d6}",
										"Treasured Item"
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
											"A twig from the meeting tree that stands in the center of your village"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"A vial of water from the source of a sacred river"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Special herbs tied together in a bundle"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"A small bronze bowl engraved with animal images"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"A rattle made from a dried gourd and holly berries"
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"A miniature golden sickle handed down to you by your mentor"
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Guiding Aspects",
							"entries": [
								"Many druids feel a strong link to a specific aspect of the natural world, such as a body of water, an animal, a type of tree, or some other sort of plant. You identify with your chosen aspect; by its behavior or its very nature, it sets an example that you seek to emulate.",
								{
									"type": "table",
									"caption": "Guiding Aspects",
									"colLabels": [
										"{@dice d6}",
										"Guiding Aspects"
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
											"Yew trees remind you of renewing your mind and spirit, letting the old die and the new spring forth."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"Oak trees represent strength and vitality. Meditating under an oak fills your body and mind with resolve and fortitude."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"The river's endless flow reminds you of the great span of the world. You seek to act with the long-term interests of nature in mind."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"The sea is a constant, churning cauldron of power and chaos. It reminds you that accepting change is necessary to sustain yourself in the world."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"The birds in the sky are evidence that even the smallest creatures can survive if they remain above the fray."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"As demonstrated by the actions of the wolf, an individual's strength is nothing compared to the power of the pack."
										]
									]
								}
							]
						},
						{
							"type": "entries",
							"name": "Mentors",
							"entries": [
								"It's not unusual for would-be druids to seek out (or be sought out by) instructors or elders who teach them the basics of their magical arts. Most druids who learn from a mentor begin their training at a young age, and the mentor has a vital role in shaping a student's attitudes and beliefs.",
								"If your character received training from someone else, who or what was that individual, and what was the nature of your relationship? Did your mentor imbue you with a particular outlook or otherwise influence your approach to achieving the goals of your chosen path?",
								{
									"type": "table",
									"caption": "Mentors",
									"colLabels": [
										"{@dice d6}",
										"Mentors"
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
											"Your mentor was a wise treant who taught you to think in terms of years and decades rather than days or months."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 2
												}
											},
											"You were tutored by a dryad who watched over a slumbering portal to the Abyss. During your training, you were tasked with watching for hidden threats to the world."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 3
												}
											},
											"Your tutor always interacted with you in the form of a falcon. You never saw the tutor's humanoid form."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 4
												}
											},
											"You were one of several youngsters who were mentored by an old druid, until one of your fellow pupils betrayed your group and killed your master."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 5
												}
											},
											"Your mentor has appeared to you only in visions. You have yet to meet this person, and you are not sure such a person exists in mortal form."
										],
										[
											{
												"type": "cell",
												"roll": {
													"exact": 6
												}
											},
											"Your mentor was a werebear who taught you to treat all living things with equal regard."
										]
									]
								}
							]
						},
						{
							"type": "section",
							"name": "Learning Beast Shapes",
							"entries": [
								"The Wild Shape feature in the player's handbook lets you transform into a beast that you've seen. That rule gives you a tremendous amount of flexibility, making it easy to amass an array of beast form options for yourself, but you must abide by the limitations in the Beast Shapes table in that book.",
								"When you gain Wild Shape as a 2nd-level druid, you might wonder which beasts you've already seen. The following tables organize beasts from the monster manual according to the beasts' most likely environments. Consider the environment your druid grew up in, then consult the appropriate table for a list of animals that your druid has probably seen by 2nd level.",
								"These tables can also help you and your DM determine which animals you might see on your travels. In addition, the tables include each beast's challenge rating and note whether a beast has a flying or swimming speed. This information will help you determine whether you qualify to assume that beast's form.",
								"The tables include all the individual beasts that are eligible for Wild Shape (up to a challenge rating of 1) or the Circle Forms feature of the Circle of the Moon (up to a challenge rating of 6).",
								{
									"type": "table",
									"caption": "Arctic",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Owl}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Blood hawk}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant owl}",
											"Fly"
										],
										[
											"1",
											"{@creature Brown bear}",
											"\u2014"
										],
										[
											"2",
											"{@creature Polar bear}",
											"Swim"
										],
										[
											"2",
											"{@creature Saber-toothed tiger}",
											"\u2014"
										],
										[
											"6",
											"{@creature Mammoth}",
											"\u2014"
										]
									]
								},
								{
									"type": "table",
									"caption": "Coast",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Crab}",
											"Swim"
										],
										[
											"0",
											"{@creature Eagle}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Blood hawk}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Giant crab}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Poisonous snake}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant lizard}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant wolf spider}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Pteranodon}",
											"Fly"
										],
										[
											"1",
											"{@creature Giant eagle}",
											"Fly"
										],
										[
											"1",
											"{@creature Giant toad}",
											"Swim"
										],
										[
											"2",
											"{@creature Plesiosaurus}",
											"Swim"
										]
									]
								},
								{
									"type": "table",
									"caption": "Desert",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Cat}",
											"\u2014"
										],
										[
											"0",
											"{@creature Hyena}",
											"\u2014"
										],
										[
											"0",
											"{@creature Jackal}",
											"\u2014"
										],
										[
											"0",
											"{@creature Scorpion}",
											"\u2014"
										],
										[
											"0",
											"{@creature Vulture}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Camel}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Flying snake}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Mule}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Poisonous snake}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Constrictor snake}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant lizard}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant poisonous snake}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant wolf spider}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant hyena}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant spider}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant toad}",
											"Swim"
										],
										[
											"1",
											"{@creature Giant vulture}",
											"Fly"
										],
										[
											"1",
											"{@creature Lion}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant constrictor snake}",
											"Swim"
										],
										[
											"3",
											"{@creature Giant scorpion}",
											"\u2014"
										]
									]
								},
								{
									"type": "table",
									"caption": "Forest",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Baboon}",
											"\u2014"
										],
										[
											"0",
											"{@creature Badger}",
											"\u2014"
										],
										[
											"0",
											"{@creature Cat}",
											"\u2014"
										],
										[
											"0",
											"{@creature Deer}",
											"\u2014"
										],
										[
											"0",
											"{@creature Hyena}",
											"\u2014"
										],
										[
											"0",
											"{@creature Owl}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Blood hawk}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Flying snake}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Giant rat}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Giant weasel}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Poisonous snake}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Mastiff}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Boar}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Constrictor snake}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Elk}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant badger}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant bat}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant frog}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant lizard}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant owl}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant poisonous snake}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant wolf spider}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Panther}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Wolf}",
											"\u2014"
										],
										[
											"1/2",
											"{@creature Ape}",
											"\u2014"
										],
										[
											"1/2",
											"{@creature Black bear}",
											"\u2014"
										],
										[
											"1/2",
											"{@creature Giant wasp}",
											"Fly"
										],
										[
											"1",
											"{@creature Brown bear}",
											"\u2014"
										],
										[
											"1",
											"{@creature Dire wolf}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant hyena}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant spider}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant toad}",
											"Swim"
										],
										[
											"1",
											"{@creature Tiger}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant boar}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant constrictor snake}",
											"Swim"
										],
										[
											"2",
											"{@creature Giant elk}",
											"\u2014"
										]
									]
								},
								{
									"type": "table",
									"caption": "Grassland",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Cat}",
											"\u2014"
										],
										[
											"0",
											"{@creature Deer}",
											"\u2014"
										],
										[
											"0",
											"{@creature Eagle}",
											"Fly"
										],
										[
											"0",
											"{@creature Goat}",
											"\u2014"
										],
										[
											"0",
											"{@creature Hyena}",
											"\u2014"
										],
										[
											"0",
											"{@creature Jackal}",
											"\u2014"
										],
										[
											"0",
											"{@creature Vulture}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Blood hawk}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Flying snake}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Giant weasel}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Poisonous snake}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Axe beak}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Boar}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Elk}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant poisonous snake}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant wolf spider}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Panther} (leopard)",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Pteranodon}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Riding horse}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Wolf}",
											"\u2014"
										],
										[
											"1/2",
											"{@creature Giant goat}",
											"\u2014"
										],
										[
											"1/2",
											"{@creature Giant wasp}",
											"Fly"
										],
										[
											"1",
											"{@creature Giant eagle}",
											"Fly"
										],
										[
											"1",
											"{@creature Giant hyena}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant vulture}",
											"Fly"
										],
										[
											"1",
											"{@creature Lion}",
											"\u2014"
										],
										[
											"1",
											"{@creature Tiger}",
											"\u2014"
										],
										[
											"2",
											"{@creature Allosaurus}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant boar}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant elk}",
											"\u2014"
										],
										[
											"2",
											"{@creature Rhinoceros}",
											"\u2014"
										],
										[
											"3",
											"{@creature Ankylosaurus}",
											"\u2014"
										],
										[
											"4",
											"{@creature Elephant}",
											"\u2014"
										],
										[
											"5",
											"{@creature Triceratops}",
											"\u2014"
										]
									]
								},
								{
									"type": "table",
									"caption": "Hill",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Baboon}",
											"\u2014"
										],
										[
											"0",
											"{@creature Eagle}",
											"Fly"
										],
										[
											"0",
											"{@creature Goat}",
											"\u2014"
										],
										[
											"0",
											"{@creature Hyena}",
											"\u2014"
										],
										[
											"0",
											"{@creature Raven}",
											"Fly"
										],
										[
											"0",
											"{@creature Vulture}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Blood hawk}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Giant weasel}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Mastiff}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Mule}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Poisonous snake}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Axe beak}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Boar}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Elk}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant owl}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant wolf spider}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Panther} (cougar)",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Wolf}",
											"\u2014"
										],
										[
											"1/2",
											"{@creature Giant goat}",
											"\u2014"
										],
										[
											"1",
											"{@creature Brown bear}",
											"\u2014"
										],
										[
											"1",
											"{@creature Dire wolf}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant eagle}",
											"Fly"
										],
										[
											"1",
											"{@creature Giant hyena}",
											"\u2014"
										],
										[
											"1",
											"{@creature Lion}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant boar}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant elk}",
											"\u2014"
										]
									]
								},
								{
									"type": "table",
									"caption": "Mountain",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Eagle}",
											"Fly"
										],
										[
											"0",
											"{@creature Goat}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Blood hawk}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Pteranodon}",
											"Fly"
										],
										[
											"1/2",
											"{@creature Giant goat}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant eagle}",
											"Fly"
										],
										[
											"1",
											"{@creature Lion}",
											"\u2014"
										],
										[
											"2",
											"{@creature Giant elk}",
											"\u2014"
										],
										[
											"2",
											"{@creature Saber-toothed tiger}",
											"\u2014"
										]
									]
								},
								{
									"type": "table",
									"caption": "Swamp",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Rat}",
											"\u2014"
										],
										[
											"0",
											"{@creature Raven}",
											"Fly"
										],
										[
											"1/8",
											"{@creature Giant rat}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Poisonous snake}",
											"Swim"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Constrictor snake}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant frog}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Giant lizard}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant poisonous snake}",
											"Swim"
										],
										[
											"1/2",
											"{@creature Crocodile}",
											"Swim"
										],
										[
											"1",
											"{@creature Giant spider}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant toad}",
											"Swim"
										],
										[
											"2",
											"{@creature Giant constrictor snake}",
											"Swim"
										],
										[
											"5",
											"{@creature Giant crocodile}",
											"Swim"
										]
									]
								},
								{
									"type": "table",
									"caption": "Underdark",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Giant fire beetle}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Giant rat}",
											"\u2014"
										],
										[
											"1/8",
											"{@creature Stirge}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant bat}",
											"Fly"
										],
										[
											"1/4",
											"{@creature Giant centipede}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant lizard}",
											"\u2014"
										],
										[
											"1/4",
											"{@creature Giant poisonous snake}",
											"Swim"
										],
										[
											"1",
											"{@creature Giant spider}",
											"\u2014"
										],
										[
											"1",
											"{@creature Giant toad}",
											"Swim"
										],
										[
											"2",
											"{@creature Giant constrictor snake}",
											"Swim"
										],
										[
											"2",
											"{@creature Polar bear} (cave bear)",
											"Swim"
										]
									]
								},
								{
									"type": "table",
									"caption": "Underwater",
									"colLabels": [
										"CR",
										"Beast",
										"Fly/Swim"
									],
									"colStyles": [
										"col-2 text-center",
										"col-8",
										"col-2"
									],
									"rows": [
										[
											"0",
											"{@creature Quipper}",
											"Swim"
										],
										[
											"1/4",
											"{@creature Constrictor snake}",
											"Swim"
										],
										[
											"1/2",
											"{@creature Giant sea horse}",
											"Swim"
										],
										[
											"1/2",
											"{@creature Reef shark}",
											"Swim"
										],
										[
											"1",
											"{@creature Giant octopus}",
											"Swim"
										],
										[
											"2",
											"{@creature Giant constrictor snake}",
											"Swim"
										],
										[
											"2",
											"{@creature Hunter shark}",
											"Swim"
										],
										[
											"2",
											"{@creature Plesiosaurus}",
											"Swim"
										],
										[
											"3",
											"{@creature Killer whale}",
											"Swim"
										],
										[
											"5",
											"{@creature Giant shark}",
											"Swim"
										]
									]
								}
							]
						}
					],
					"source": "XGE",
					"page": 21
				}
			]
		}
	],
	"subclass": [
		{
			"name": "Circle of the Land",
			"shortName": "Land",
			"source": "PHB",
			"className": "Druid",
			"classSource": "PHB",
			"page": 68,
			"srd": true,
			"additionalSpells": [
				{
					"name": "Arctic",
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
						"3": [
							"hold person",
							"spike growth"
						],
						"5": [
							"sleet storm",
							"slow"
						],
						"7": [
							"freedom of movement",
							"ice storm"
						],
						"9": [
							"commune with nature",
							"cone of cold"
						]
					}
				},
				{
					"name": "Coast",
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
						"3": [
							"mirror image",
							"misty step"
						],
						"5": [
							"water breathing",
							"water walk"
						],
						"7": [
							"control water",
							"freedom of movement"
						],
						"9": [
							"conjure elemental",
							"scrying"
						]
					}
				},
				{
					"name": "Desert",
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
						"3": [
							"blur",
							"silence"
						],
						"5": [
							"create food and water",
							"protection from energy"
						],
						"7": [
							"blight",
							"hallucinatory terrain"
						],
						"9": [
							"insect plague",
							"wall of stone"
						]
					}
				},
				{
					"name": "Forest",
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
						"3": [
							"barkskin",
							"spider climb"
						],
						"5": [
							"call lightning",
							"plant growth"
						],
						"7": [
							"divination",
							"freedom of movement"
						],
						"9": [
							"commune with nature",
							"tree stride"
						]
					}
				},
				{
					"name": "Grassland",
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
						"3": [
							"invisibility",
							"pass without trace"
						],
						"5": [
							"daylight",
							"haste"
						],
						"7": [
							"divination",
							"freedom of movement"
						],
						"9": [
							"dream",
							"insect plague"
						]
					}
				},
				{
					"name": "Mountain",
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
						"3": [
							"spider climb",
							"spike growth"
						],
						"5": [
							"lightning bolt",
							"meld into stone"
						],
						"7": [
							"stone shape",
							"stoneskin"
						],
						"9": [
							"passwall",
							"wall of stone"
						]
					}
				},
				{
					"name": "Swamp",
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
						"3": [
							"darkness",
							"Melf's acid arrow"
						],
						"5": [
							"water walk",
							"stinking cloud"
						],
						"7": [
							"freedom of movement",
							"locate creature"
						],
						"9": [
							"insect plague",
							"scrying"
						]
					}
				},
				{
					"name": "Underdark",
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
						"3": [
							"spider climb",
							"web"
						],
						"5": [
							"gaseous form",
							"stinking cloud"
						],
						"7": [
							"greater invisibility",
							"stone shape"
						],
						"9": [
							"cloudkill",
							"insect plague"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of the Land|Druid||Land||2",
				"Land's Stride|Druid||Land||6",
				"Nature's Ward|Druid||Land||10",
				"Nature's Sanctuary|Druid||Land||14"
			]
		},
		{
			"name": "Circle of the Moon",
			"shortName": "Moon",
			"source": "PHB",
			"className": "Druid",
			"classSource": "PHB",
			"page": 69,
			"additionalSpells": [
				{
					"known": {
						"14": [
							"alter self"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of the Moon|Druid||Moon||2",
				"Primal Strike|Druid||Moon||6",
				"Elemental Wild Shape|Druid||Moon||10",
				"Thousand Forms|Druid||Moon||14"
			]
		},
		{
			"name": "Circle of Dreams (UA)",
			"shortName": "Dreams (UA)",
			"source": "UADruid",
			"className": "Druid",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Circle of Dreams|Druid||Dreams (UA)|UADruid|2",
				"Hearth of Moonlight and Shadow|Druid||Dreams (UA)|UADruid|6",
				"Hidden Paths|Druid||Dreams (UA)|UADruid|10",
				"Purifying Light|Druid||Dreams (UA)|UADruid|14"
			]
		},
		{
			"name": "Circle of the Shepherd (UA)",
			"shortName": "Shepherd (UA)",
			"source": "UADruid",
			"className": "Druid",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Circle of the Shepherd|Druid||Shepherd (UA)|UADruid|2",
				"Mighty Summoner|Druid||Shepherd (UA)|UADruid|6",
				"Guardian Spirit|Druid||Shepherd (UA)|UADruid|10",
				"Faithful Summons|Druid||Shepherd (UA)|UADruid|14"
			]
		},
		{
			"name": "Circle of Twilight (UA)",
			"shortName": "Twilight (UA)",
			"source": "UADruid",
			"className": "Druid",
			"classSource": "PHB",
			"page": 2,
			"additionalSpells": [
				{
					"innate": {
						"14": {
							"daily": {
								"1e": [
									"etherealness"
								]
							}
						}
					}
				}
			],
			"subclassFeatures": [
				"Circle of Twilight|Druid||Twilight (UA)|UADruid|2",
				"Speech Beyond the Grave|Druid||Twilight (UA)|UADruid|6",
				"Watcher at the Threshold|Druid||Twilight (UA)|UADruid|10",
				"Paths of the Dead|Druid||Twilight (UA)|UADruid|14"
			]
		},
		{
			"name": "Circle of the Shepherd v2 (UA)",
			"shortName": "Shepherd v2 (UA)",
			"source": "UARevisedClassOptions",
			"className": "Druid",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"subclassFeatures": [
				"Circle of the Shepherd v2|Druid||Shepherd v2 (UA)|UARevisedClassOptions|2",
				"Mighty Summoner|Druid||Shepherd v2 (UA)|UARevisedClassOptions|6",
				"Guardian Spirit|Druid||Shepherd v2 (UA)|UARevisedClassOptions|10",
				"Faithful Summons|Druid||Shepherd v2 (UA)|UARevisedClassOptions|14"
			]
		},
		{
			"name": "Circle of Dreams",
			"shortName": "Dreams",
			"source": "XGE",
			"className": "Druid",
			"classSource": "PHB",
			"page": 22,
			"subclassFeatures": [
				"Circle of Dreams|Druid||Dreams|XGE|2",
				"Hearth of Moonlight and Shadow|Druid||Dreams|XGE|6",
				"Hidden Paths|Druid||Dreams|XGE|10",
				"Walker in Dreams|Druid||Dreams|XGE|14"
			]
		},
		{
			"name": "Circle of the Shepherd",
			"shortName": "Shepherd",
			"source": "XGE",
			"className": "Druid",
			"classSource": "PHB",
			"page": 23,
			"subclassFeatures": [
				"Circle of the Shepherd|Druid||Shepherd|XGE|2",
				"Mighty Summoner|Druid||Shepherd|XGE|6",
				"Guardian Spirit|Druid||Shepherd|XGE|10",
				"Faithful Summons|Druid||Shepherd|XGE|14"
			]
		},
		{
			"name": "Circle of Spores (UA)",
			"shortName": "Spores (UA)",
			"source": "UAThreeSubclasses",
			"className": "Druid",
			"classSource": "PHB",
			"page": 1,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"gentle repose",
							"ray of enfeeblement"
						],
						"5": [
							"animate dead",
							"gaseous form"
						],
						"7": [
							"blight",
							"confusion"
						],
						"9": [
							"cloudkill",
							"contagion"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of Spores (UA)|Druid||Spores (UA)|UAThreeSubclasses|2",
				"Fungal Infestation|Druid||Spores (UA)|UAThreeSubclasses|6",
				"Spreading Spores|Druid||Spores (UA)|UAThreeSubclasses|10",
				"Fungal Body|Druid||Spores (UA)|UAThreeSubclasses|14"
			]
		},
		{
			"name": "Circle of Wildfire (UA)",
			"shortName": "Wildfire (UA)",
			"source": "UAClericDruidWizard",
			"className": "Druid",
			"classSource": "PHB",
			"page": 2,
			"isReprinted": true,
			"additionalSpells": [
				{
					"prepared": {
						"3": [
							"locate animals or plants",
							"scorching ray"
						],
						"5": [
							"fireball",
							"plant growth"
						],
						"7": [
							"aura of life",
							"fire shield"
						],
						"9": [
							"flame strike",
							"raise dead"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of Wildfire|Druid||Wildfire (UA)|UAClericDruidWizard|2",
				"Enhanced Bond|Druid||Wildfire (UA)|UAClericDruidWizard|6",
				"Flames of Life|Druid||Wildfire (UA)|UAClericDruidWizard|10",
				"Blazing Endurance|Druid||Wildfire (UA)|UAClericDruidWizard|14"
			]
		},
		{
			"name": "Circle of the Stars (UA)",
			"shortName": "Stars (UA)",
			"source": "UA2020SubclassesPt3",
			"className": "Druid",
			"classSource": "PHB",
			"page": 3,
			"isReprinted": true,
			"subclassFeatures": [
				"Circle of the Stars|Druid||Stars (UA)|UA2020SubclassesPt3|2",
				"Cosmic Omen|Druid||Stars (UA)|UA2020SubclassesPt3|6",
				"Full of Stars|Druid||Stars (UA)|UA2020SubclassesPt3|10",
				"Star Flare|Druid||Stars (UA)|UA2020SubclassesPt3|14"
			]
		},
		{
			"name": "Circle of Spores",
			"shortName": "Spores",
			"source": "TCE",
			"className": "Druid",
			"classSource": "PHB",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"additionalSpells": [
				{
					"known": {
						"2": [
							"chill touch#c"
						]
					},
					"prepared": {
						"3": [
							"blindness/deafness",
							"gentle repose"
						],
						"5": [
							"animate dead",
							"gaseous form"
						],
						"7": [
							"blight",
							"confusion"
						],
						"9": [
							"cloudkill",
							"contagion"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of Spores|Druid||Spores|TCE|2",
				"Fungal Infestation|Druid||Spores|TCE|6",
				"Spreading Spores|Druid||Spores|TCE|10",
				"Fungal Body|Druid||Spores|TCE|14"
			]
		},
		{
			"name": "Circle of Stars",
			"shortName": "Stars",
			"source": "TCE",
			"className": "Druid",
			"classSource": "PHB",
			"page": 38,
			"additionalSpells": [
				{
					"known": {
						"2": [
							"guidance#c"
						]
					},
					"prepared": {
						"2": [
							"guiding bolt"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of Stars|Druid||Stars|TCE|2",
				"Cosmic Omen|Druid||Stars|TCE|6",
				"Twinkling Constellations|Druid||Stars|TCE|10",
				"Full of Stars|Druid||Stars|TCE|14"
			]
		},
		{
			"name": "Circle of Wildfire",
			"shortName": "Wildfire",
			"source": "TCE",
			"className": "Druid",
			"classSource": "PHB",
			"page": 39,
			"additionalSpells": [
				{
					"prepared": {
						"2": [
							"burning hands",
							"cure wounds"
						],
						"3": [
							"flaming sphere",
							"scorching ray"
						],
						"5": [
							"plant growth",
							"revivify"
						],
						"7": [
							"aura of life",
							"fire shield"
						],
						"9": [
							"flame strike",
							"mass cure wounds"
						]
					}
				}
			],
			"subclassFeatures": [
				"Circle of Wildfire|Druid||Wildfire|TCE|2",
				"Enhanced Bond|Druid||Wildfire|TCE|6",
				"Cauterizing Flames|Druid||Wildfire|TCE|10",
				"Blazing Revival|Druid||Wildfire|TCE|14"
			]
		},
		{
			"name": "Mage of Prismari (UA)",
			"shortName": "Prismari (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Druid",
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
			"name": "Mage of Witherbloom (UA)",
			"shortName": "Witherbloom (UA)",
			"source": "UA2021MagesOfStrixhaven",
			"className": "Druid",
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
		},
		{
			"name": " Circle of the Primeval (UA)",
			"shortName": "Primeval (UA)",
			"source": "UA2022GiantOptions",
			"className": "Druid",
			"classSource": "PHB",
			"page": 2,
			"subclassFeatures": [
				"Circle of the Primeval|Druid||Primeval (UA)|UA2022GiantOptions|2",
				"Prehistoric Conduit|Druid||Primeval (UA)|UA2022GiantOptions|6",
				"Titanic Bond|Druid||Primeval (UA)|UA2022GiantOptions|10",
				"Scourge of the Ancients|Druid||Primeval (UA)|UA2022GiantOptions|14"
			]
		}
	],
	"classFeature": [
		{
			"name": "Cantrip Versatility",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Druid",
			"classSource": "PHB",
			"level": 1,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 1st-level druid feature (enhances Spellcasting)}",
				"Whenever you gain a level in this class, you can replace one cantrip you learned from this Spellcasting feature with another cantrip from the druid spell list."
			]
		},
		{
			"name": "Druidic",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"You know {@language Druidic}, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom ({@skill Perception}) check but can't decipher it without magic."
			]
		},
		{
			"name": "Spellcasting",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 1,
			"entries": [
				"Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See {@book chapter 10|PHB|10} for the general rules of spellcasting and {@book chapter 11|PHB|11} for the {@filter druid spell list|spells|class=druid}.",
				{
					"type": "entries",
					"name": "Cantrips",
					"entries": [
						"At 1st level, you know two cantrips of your choice from the {@filter druid spell list|spells|level=0|class=druid}. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table."
					]
				},
				{
					"type": "entries",
					"name": "Preparing and Casting Spells",
					"entries": [
						"The Druid table shows how many spell slots you have to cast your {@filter druid spells|spells|class=druid} of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
						"You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
						"For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell {@spell cure wounds}, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
						"You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Ability",
					"entries": [
						"Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
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
						"You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared."
					]
				},
				{
					"type": "entries",
					"name": "Spellcasting Focus",
					"entries": [
						"You can use a {@item druidic focus|phb} as a spellcasting focus for your druid spells."
					]
				}
			]
		},
		{
			"name": "Druid Circle",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"At 2nd level, you choose to identify with a circle of druids from the list of available circles. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
			]
		},
		{
			"name": "Wild Companion",
			"source": "TCE",
			"page": 35,
			"className": "Druid",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"{@i 2nd-level druid {@variantrule optional class features|tce|optional feature}}",
				"You gain the ability to summon a spirit that assumes an animal form: as an action, you can expend a use of your Wild Shape feature to cast the {@spell find familiar} spell, without material components.",
				"When you cast the spell in this way, the familiar is a fey instead of a beast, and the familiar disappears after a number of hours equal to half your druid level."
			]
		},
		{
			"name": "Wild Companion",
			"source": "UAClassFeatureVariants",
			"page": 4,
			"className": "Druid",
			"classSource": "PHB",
			"level": 2,
			"isClassFeatureVariant": true,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"{@i 2nd-level druid feature (enhances Wild Shape)}",
				"You gain the ability to summon a spirit that assumes an animal form: as an action, you can expend a use of your Wild Shape feature to cast the {@spell find familiar} spell, without material components.",
				"When you cast the spell in this way, the familiar is a fey instead of a beast, and the familiar disappears after a number of hours equal to half your druid level."
			]
		},
		{
			"name": "Wild Shape",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 2,
			"entries": [
				"Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
				"Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
				{
					"type": "table",
					"caption": "Beast Shapes",
					"colLabels": [
						"Level",
						"Max. CR",
						"Limitations",
						"Example"
					],
					"colStyles": [
						"col-2 text-center",
						"col-2 text-center",
						"col-5",
						"col-3"
					],
					"rows": [
						[
							"2nd",
							"{@filter 1/4|bestiary|challenge rating=[&0;&1/4]|type=beast|speed type=!fly;!swim|miscellaneous=!swarm}",
							"No flying or swimming speed",
							"Wolf"
						],
						[
							"4th",
							"{@filter 1/2|bestiary|challenge rating=[&0;&1/2]|type=beast|speed type=!fly|miscellaneous=!swarm}",
							"No flying speed",
							"Crocodile"
						],
						[
							"8th",
							"{@filter 1|bestiary|challenge rating=[&0;&1]|type=beast|miscellaneous=!swarm}",
							"\u2014",
							"Giant eagle"
						]
					]
				},
				"You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall {@condition unconscious}, drop to 0 hit points, or die.",
				"While you are transformed, the following rules apply:",
				{
					"type": "list",
					"items": [
						"Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
						"When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked {@condition unconscious}.",
						"You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your {@status concentration} on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as {@spell call lightning}, that you've already cast.",
						"You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as {@sense darkvision}, unless your new form also has that sense.",
						"You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
					]
				}
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
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
			"page": 35,
			"className": "Druid",
			"classSource": "PHB",
			"level": 4,
			"isClassFeatureVariant": true,
			"entries": [
				"{@i 4th-level druid {@variantrule optional class features|tce|optional feature}}",
				"Whenever you reach a level in this class that grants the Ability Score Improvement feature, you can replace one cantrip you learned from this class's Spellcasting feature with another cantrip from the {@filter druid spell list|spells|level=0|class=Druid}."
			]
		},
		{
			"name": "Proficiency Versatility",
			"source": "UAClassFeatureVariants",
			"page": 1,
			"className": "Druid",
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
			"name": "Wild Shape Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 4,
			"entries": [
				"At 4th level, your Wild Shape improves as shown on the Beast Shapes table."
			]
		},
		{
			"name": "Druid Circle feature",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 6,
			"entries": [
				"At 6th level, you gain a feature granted by your Druid Circle."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
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
			"className": "Druid",
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
			"name": "Wild Shape Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 8,
			"entries": [
				"At 8th level, your Wild Shape improves as shown on the Beast Shapes table."
			]
		},
		{
			"name": "Druid Circle feature",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 10,
			"entries": [
				"At 10th level, you gain a feature granted by your Druid Circle feature."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
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
			"className": "Druid",
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
			"name": "Druid Circle feature",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 14,
			"entries": [
				"At 14th level, you gain a feature granted by your Druid Circle feature."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
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
			"className": "Druid",
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
			"name": "Beast Spells",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
			]
		},
		{
			"name": "Timeless Body",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 18,
			"entries": [
				"Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
			]
		},
		{
			"name": "Ability Score Improvement",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
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
			"className": "Druid",
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
			"name": "Archdruid",
			"source": "PHB",
			"page": 64,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"level": 20,
			"entries": [
				"At 20th level, you can use your Wild Shape an unlimited number of times.",
				"Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
			]
		}
	],
	"subclassFeature": [
		{
			"name": "Circle of the Land",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in {@language Druidic}. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Bonus Cantrip|Druid||Land||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Natural Recovery|Druid||Land||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle Spells|Druid||Land||2"
				}
			]
		},
		{
			"name": "Bonus Cantrip",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"You learn one additional druid cantrip of your choice. This cantrip doesn't count against the number of druid cantrips you know."
			]
		},
		{
			"name": "Circle Spells",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land\u2014arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark\u2014and consult the associated list of spells.",
				"Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
				{
					"type": "table",
					"caption": "Arctic",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell hold person}, {@spell spike growth}"
						],
						[
							"5th",
							"{@spell sleet storm}, {@spell slow}"
						],
						[
							"7th",
							"{@spell freedom of movement}, {@spell ice storm}"
						],
						[
							"9th",
							"{@spell commune with nature}, {@spell cone of cold}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Coast",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell mirror image}, {@spell misty step}"
						],
						[
							"5th",
							"{@spell water breathing}, {@spell water walk}"
						],
						[
							"7th",
							"{@spell control water}, {@spell freedom of movement}"
						],
						[
							"9th",
							"{@spell conjure elemental}, {@spell scrying}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Desert",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell blur}, {@spell silence}"
						],
						[
							"5th",
							"{@spell create food and water}, {@spell protection from energy}"
						],
						[
							"7th",
							"{@spell blight}, {@spell hallucinatory terrain}"
						],
						[
							"9th",
							"{@spell insect plague}, {@spell wall of stone}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Forest",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell barkskin}, {@spell spider climb}"
						],
						[
							"5th",
							"{@spell call lightning}, {@spell plant growth}"
						],
						[
							"7th",
							"{@spell divination}, {@spell freedom of movement}"
						],
						[
							"9th",
							"{@spell commune with nature}, {@spell tree stride}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Grassland",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell invisibility}, {@spell pass without trace}"
						],
						[
							"5th",
							"{@spell daylight}, {@spell haste}"
						],
						[
							"7th",
							"{@spell divination}, {@spell freedom of movement}"
						],
						[
							"9th",
							"{@spell dream}, {@spell insect plague}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Mountain",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell spider climb}, {@spell spike growth}"
						],
						[
							"5th",
							"{@spell lightning bolt}, {@spell meld into stone}"
						],
						[
							"7th",
							"{@spell stone shape}, {@spell stoneskin}"
						],
						[
							"9th",
							"{@spell passwall}, {@spell wall of stone}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Swamp",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell darkness}, {@spell Melf's acid arrow}"
						],
						[
							"5th",
							"{@spell water walk}, {@spell stinking cloud}"
						],
						[
							"7th",
							"{@spell freedom of movement}, {@spell locate creature}"
						],
						[
							"9th",
							"{@spell insect plague}, {@spell scrying}"
						]
					]
				},
				{
					"type": "table",
					"caption": "Underdark",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell spider climb}, {@spell web}"
						],
						[
							"5th",
							"{@spell gaseous form}, {@spell stinking cloud}"
						],
						[
							"7th",
							"{@spell greater invisibility}, {@spell stone shape}"
						],
						[
							"9th",
							"{@spell cloudkill}, {@spell insect plague}"
						]
					]
				}
			]
		},
		{
			"name": "Natural Recovery",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.",
				"For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
			]
		},
		{
			"name": "Land's Stride",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, moving through nonmagical {@quickref difficult terrain||3} costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
				"In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the {@spell entangle} spell."
			]
		},
		{
			"name": "Nature's Ward",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"entries": [
				"When you reach 10th level, you can't be {@condition charmed} or {@condition frightened} by elementals or fey, and you are immune to poison and disease."
			]
		},
		{
			"name": "Nature's Sanctuary",
			"source": "PHB",
			"page": 68,
			"srd": true,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Land",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.",
				"The creature is aware of this effect before it makes its attack against you."
			]
		},
		{
			"name": "Circle of the Moon",
			"source": "PHB",
			"page": 69,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Moon",
			"subclassSource": "PHB",
			"level": 2,
			"entries": [
				"Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid.",
				"Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Combat Wild Shape|Druid||Moon||2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle Forms|Druid||Moon||2"
				}
			]
		},
		{
			"name": "Circle Forms",
			"source": "PHB",
			"page": 69,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Moon",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a {@filter beast with a challenge rating as high as 1|bestiary|challenge rating=[&0;&1]|type=beast|speed type=!fly;!swim|miscellaneous=!swarm} (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).",
				"Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.",
				{
					"type": "table",
					"caption": "Circle of the Moon Beast Shapes",
					"colLabels": [
						"Level",
						"Max. CR",
						"Limitations"
					],
					"colStyles": [
						"col-2 text-center",
						"col-2 text-center",
						"col-8"
					],
					"rows": [
						[
							"2nd",
							"{@filter 1|bestiary|challenge rating=[&0;&1]|type=beast|speed type=!fly;!swim|miscellaneous=!swarm}",
							"No flying or swimming speed"
						],
						[
							"4th",
							"{@filter 1|bestiary|challenge rating=[&0;&1]|type=beast|speed type=!fly|miscellaneous=!swarm}",
							"No flying speed"
						],
						[
							"6th",
							"{@filter 2|bestiary|challenge rating=[&0;&2]|type=beast|speed type=!fly|miscellaneous=!swarm}",
							"No flying speed"
						],
						[
							"8th",
							"{@filter 2|bestiary|challenge rating=[&0;&2]|type=beast|miscellaneous=!swarm}",
							"\u2014"
						],
						[
							"9th",
							"{@filter 3|bestiary|challenge rating=[&0;&3]|type=beast|miscellaneous=!swarm}",
							"\u2014"
						],
						[
							"12th",
							"{@filter 4|bestiary|challenge rating=[&0;&4]|type=beast|miscellaneous=!swarm}",
							"\u2014"
						],
						[
							"15th",
							"{@filter 5|bestiary|challenge rating=[&0;&5]|type=beast|miscellaneous=!swarm}",
							"\u2014"
						],
						[
							"18th",
							"{@filter 6|bestiary|challenge rating=[&0;&6]|type=beast|miscellaneous=!swarm}",
							"\u2014"
						]
					]
				}
			]
		},
		{
			"name": "Combat Wild Shape",
			"source": "PHB",
			"page": 69,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Moon",
			"subclassSource": "PHB",
			"level": 2,
			"header": 1,
			"entries": [
				"You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.",
				"Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain {@dice 1d8} hit points per level of the spell slot expended."
			]
		},
		{
			"name": "Primal Strike",
			"source": "PHB",
			"page": 69,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Moon",
			"subclassSource": "PHB",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
			]
		},
		{
			"name": "Elemental Wild Shape",
			"source": "PHB",
			"page": 69,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Moon",
			"subclassSource": "PHB",
			"level": 10,
			"header": 2,
			"consumes": {
				"name": "Wild Shape",
				"amount": 2
			},
			"entries": [
				"At 10th level, you can expend two uses of Wild Shape at the same time to transform into an {@creature air elemental}, an {@creature earth elemental}, a {@creature fire elemental}, or a {@creature water elemental}."
			]
		},
		{
			"name": "Thousand Forms",
			"source": "PHB",
			"page": 69,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Moon",
			"subclassSource": "PHB",
			"level": 14,
			"header": 2,
			"entries": [
				"By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the {@spell alter self} spell at will."
			]
		},
		{
			"name": "Circle of Spores",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 2,
			"entries": [
				"Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life.",
				"These druids believe that life and death are parts of a grand cycle, with one leading to the other and then back again. Death isn't the end of life, but instead a change of state that sees life shift into a new form.",
				"Druids of this circle have a complex relationship with the undead. Unlike most other druids, they see nothing inherently wrong with undeath, which they consider to be a companion to life and death. But these druids believe that the natural cycle is healthiest when each segment of it is vibrant and changing. Undead that seek to replace all life with undeath, or that try to avoid passing to a final rest, violate the cycle and must be thwarted.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle Spells|Druid||Spores|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Halo of Spores|Druid||Spores|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Symbiotic Entity|Druid||Spores|TCE|2"
				}
			]
		},
		{
			"name": "Circle Spells",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"Your symbiotic link to fungus and your ability to tap into the cycle of life and death grants you access to certain spells. At 2nd level, you learn the {@spell chill touch} cantrip. At 3rd, 5th, 7th, and 9th level you gain access to the spells listed for that level in the Circle of Spores Spells table.",
				"Once you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
				{
					"type": "table",
					"caption": "Circle of Spores Spells",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell blindness/deafness}, {@spell gentle repose}"
						],
						[
							"5th",
							"{@spell animate dead}, {@spell gaseous form}"
						],
						[
							"7th",
							"{@spell blight}, {@spell confusion}"
						],
						[
							"9th",
							"{@spell cloudkill}, {@spell contagion}"
						]
					]
				}
			]
		},
		{
			"name": "Halo of Spores",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you are surrounded by invisible, necrotic spores that are harmless until you unleash them on a creature nearby. When a creature you can see moves into a space within 10 feet of you or starts its turn there, you can use your reaction to deal {@damage 1d4} necrotic damage to that creature unless it succeeds on a Constitution saving throw against your spell save DC. The necrotic damage increases to {@dice 1d6} at 6th level, {@dice 1d8} at 10th level, and {@dice 1d10} at 14th level."
			]
		},
		{
			"name": "Symbiotic Entity",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"At 2nd level, you gain the ability to channel magic into your spores. As an action, you can expend a use of your Wild Shape feature to awaken those spores, rather than transforming into a beast form, and you gain 4 temporary hit points for each level you have in this class. While this feature is active, you gain the following benefits:",
				{
					"type": "list",
					"items": [
						"When you deal your Halo of Spores damage, roll the damage die a second time and add it to the total.",
						"Your melee weapon attacks deal an extra {@damage 1d6} necrotic damage to any target they hit."
					]
				},
				"These benefits last for 10 minutes, until you lose all these temporary hit points, or until you use your Wild Shape again."
			]
		},
		{
			"name": "Fungal Infestation",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your spores gain the ability to infest a corpse and animate it. If a beast or a humanoid that is Small or Medium dies within 10 feet of you, you can use your reaction to animate it, causing it to stand up immediately with 1 hit point. The creature uses the {@creature zombie} stat block in the {@book Monster Manual|MM}. It remains animate for 1 hour, after which time it collapses and dies.",
				"In combat, the zombie's turn comes immediately after yours. It obeys your mental commands, and the only action it can take is the {@action Attack} action, making one melee attack.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Spreading Spores",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain the ability to seed an area with deadly spores. As a bonus action while your Symbiotic Entity feature is active, you can hurl spores up to 30 feet away, where they swirl in a 10-foot cube for 1 minute. The spores disappear early if you use this feature again, if you dismiss them as a bonus action, or if your Symbiotic Entity feature is no longer active.",
				"Whenever a creature moves into the cube or starts its turn there, that creature takes your Halo of Spores damage, unless the creature succeeds on a Constitution saving throw against your spell save DC. A creature can take this damage no more than once per turn.",
				"While the cube of spores persists, you can't use your Halo of Spores reaction."
			]
		},
		{
			"name": "Fungal Body",
			"source": "TCE",
			"page": 36,
			"otherSources": [
				{
					"source": "GGR",
					"page": 26
				}
			],
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the fungal spores in your body alter you: you can't be {@condition blinded}, {@condition deafened}, {@condition frightened}, or {@condition poisoned}, and any critical hit against you counts as a normal hit instead, unless you're {@condition incapacitated}."
			]
		},
		{
			"name": "Circle of Stars",
			"source": "TCE",
			"page": 38,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars",
			"subclassSource": "TCE",
			"level": 2,
			"entries": [
				"The Circle of Stars allows druids to draw on the power of starlight. These druids have tracked heavenly patterns since time immemorial, discovering secrets hidden amid the constellations. By revealing and understanding these secrets, the Circle of the Stars seeks to harness the powers of the cosmos.",
				"Many druids of this circle keep records of the constellations and the stars' effects on the world. Some groups document these observations at megalithic sites, which serve as enigmatic libraries of lore. These repositories might take the form of stone circles, pyramids, petroglyphs, and underground temples-any construction durable enough to protect the circle's sacred knowledge even against a great cataclysm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Star Map|Druid||Stars|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Starry Form|Druid||Stars|TCE|2"
				}
			]
		},
		{
			"name": "Star Map",
			"source": "TCE",
			"page": 38,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Circle of the Stars feature}",
				"You've created a star chart as part of your heavenly studies. It is a Tiny object and can serve as a spellcasting focus for your druid spells. You determine its form by rolling on the Star Map table or by choosing one.",
				{
					"type": "table",
					"caption": "Star Map",
					"colLabels": [
						"d6",
						"Map Form"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"A scroll covered with depictions of constellations"
						],
						[
							"2",
							"A stone tablet with fine holes drilled through it"
						],
						[
							"3",
							"A speckled owlbear hide, tooled with raised marks"
						],
						[
							"4",
							"A collection of maps bound in an ebony cover"
						],
						[
							"5",
							"A crystal that projects starry patterns when placed before a light"
						],
						[
							"6",
							"Glass disks that depict constellations"
						]
					]
				},
				"While holding this map, you have these benefits:",
				{
					"type": "list",
					"items": [
						"You know the {@spell guidance} cantrip.",
						"You have the {@spell guiding bolt} spell prepared. It counts as a druid spell for you, and it doesn't count against the number of spells you can have prepared.",
						"You can cast {@spell guiding bolt} without expending a spell slot. You can do so a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
					]
				},
				"If you lose the map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a short or long rest, and it destroys the previous map."
			]
		},
		{
			"name": "Starry Form",
			"source": "TCE",
			"page": 38,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"{@i 2nd-level Circle of the Stars feature}",
				"As a bonus action, you can expend a use of your Wild Shape feature to take on a starry form, rather than transforming into a beast.",
				"While in your starry form, you retain your game statistics, but your body becomes luminous; your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes. It ends early if you dismiss it (no action required), are {@condition incapacitated}, die, or use this feature again.",
				"Whenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:",
				{
					"type": "entries",
					"name": "Archer",
					"entries": [
						"A constellation of an archer appears on you. When you activate this form, and as a bonus action on your subsequent turns while it lasts, you can make a ranged spell attack, hurling a luminous arrow that targets one creature within 60 feet of you. On a hit, the attack deals radiant damage equal to {@dice 1d8} + your Wisdom modifier."
					]
				},
				{
					"type": "entries",
					"name": "Chalice",
					"entries": [
						"A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to {@dice 1d8} + your Wisdom modifier."
					]
				},
				{
					"type": "entries",
					"name": "Dragon",
					"entries": [
						"A constellation of a wise dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain {@status concentration} on a spell, you can treat a roll of 9 or lower on the {@dice d20} as a 10."
					]
				}
			]
		},
		{
			"name": "Cosmic Omen",
			"source": "TCE",
			"page": 38,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Circle of the Stars feature}",
				"Whenever you finish a long rest, you can consult your Star Map for omens. When you do so, roll a die. Until you finish your next long rest, you gain access to a special reaction based on whether you rolled an even or an odd number on the die:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Weal (even)",
							"entry": "Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a {@dice d6} and add the number rolled to the total."
						},
						{
							"type": "item",
							"name": "Woe (odd)",
							"entry": "Whenever a creature you can see within 30 feet of you is about to make an attack roll, a saving throw, or an ability check, you can use your reaction to roll a {@dice d6} and subtract the number rolled from the total."
						}
					]
				},
				"You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Twinkling Constellations",
			"source": "TCE",
			"page": 38,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Circle of the Stars feature}",
				"The constellations of your Starry Form improve. The {@dice 1d8} of the Archer and the Chalice becomes {@dice 2d8}, and while the Dragon is active, you have a flying speed of 20 feet and can hover.",
				"Moreover, at the start of each of your turns while in your Starry Form, you can change which constellation glimmers on your body."
			]
		},
		{
			"name": "Full of Stars",
			"source": "TCE",
			"page": 38,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Circle of the Stars feature}",
				"While in your Starry Form, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage."
			]
		},
		{
			"name": "Circle of Wildfire",
			"source": "TCE",
			"page": 39,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire",
			"subclassSource": "TCE",
			"level": 2,
			"entries": [
				"Druids within the Circle of Wildfire understand that destruction is sometimes the precursor of creation, such as when a forest fire promotes later growth. These druids bond with a primal spirit that harbors both destructive and creative power, allowing the druids to create controlled flames that burn away one thing but give life to another.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle Spells|Druid||Wildfire|TCE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Summon Wildfire Spirit|Druid||Wildfire|TCE|2"
				}
			]
		},
		{
			"name": "Circle Spells",
			"source": "TCE",
			"page": 39,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Circle of Wildfire feature}",
				"You have formed a bond with a wildfire spirit, a primal being of creation and destruction. Your link with this spirit grants you access to some spells when you reach certain levels in this class, as shown on the Circle of Wildfire Spells table.",
				"Once you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
				{
					"type": "table",
					"caption": "Circle of Wildfire Spells",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"2nd",
							"{@spell burning hands}, {@spell cure wounds}"
						],
						[
							"3rd",
							"{@spell flaming sphere}, {@spell scorching ray}"
						],
						[
							"5th",
							"{@spell plant growth}, {@spell revivify}"
						],
						[
							"7th",
							"{@spell aura of life}, {@spell fire shield}"
						],
						[
							"9th",
							"{@spell flame strike}, {@spell mass cure wounds}"
						]
					]
				}
			]
		},
		{
			"name": "Summon Wildfire Spirit",
			"source": "TCE",
			"page": 39,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire",
			"subclassSource": "TCE",
			"level": 2,
			"header": 1,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"{@i 2nd-level Circle of Wildfire feature}",
				"You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature to summon your wildfire spirit, rather than assuming a beast form.",
				"The spirit appears in an unoccupied space of your choice that you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take {@damage 2d6} fire damage.",
				"The spirit is friendly to you and your companions and obeys your commands. See this creature's game statistics in the {@creature Wildfire Spirit|TCE} stat block, which uses your proficiency bonus (PB) in several places. You determine the spirit's appearance. Some spirits take the form of a humanoid figure made of gnarled branches covered in flame, while others look like beasts wreathed in fire.",
				"In combat, the spirit shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the spirit can take any action of its choice, not just {@action Dodge}.",
				"The spirit manifests for 1 hour, until it is reduced to 0 hit points, until you use this feature to summon the spirit again, or until you die."
			]
		},
		{
			"name": "Enhanced Bond",
			"source": "TCE",
			"page": 39,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire",
			"subclassSource": "TCE",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Circle of Wildfire feature}",
				"The bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a {@dice d8}, and you gain a bonus equal to the number rolled to one damage or healing roll of the spell.",
				"In addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit."
			]
		},
		{
			"name": "Cauterizing Flames",
			"source": "TCE",
			"page": 39,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire",
			"subclassSource": "TCE",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Circle of Wildfire feature}",
				"You gain the ability to turn death into magical flames that can heal or incinerate. When a Small or larger creature dies within 30 feet of you or your wildfire spirit, a harmless spectral flame springs forth in the dead creature's space and flickers there for 1 minute. When a creature you can see enters that space, you can use your reaction to extinguish the spectral flame there and either heal the creature or deal fire damage to it. The healing or damage equals {@dice 2d10} + your Wisdom modifier.",
				"You can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blazing Revival",
			"source": "TCE",
			"page": 39,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire",
			"subclassSource": "TCE",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Circle of Wildfire feature}",
				"The bond with your wildfire spirit can save you from death. If the spirit is within 120 feet of you when you are reduced to 0 hit points and thereby fall {@condition unconscious}, you can cause the spirit to drop to 0 hit points. You then regain half your hit points and immediately rise to your feet.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Circle of the Stars",
			"source": "UA2020SubclassesPt3",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 2,
			"entries": [
				"An ancient lineage, the Circle of Stars allows druids to draw on the power of starlight. These druids have tracked heavenly patterns since time immemorial, discovering secrets hidden amid the constellations. By revealing and understanding these secrets, the Circle of the Stars seeks to harness the powers of the cosmos.",
				"Many druids of this circle keep detailed records of the stars and their effects on the world. Some groups document these observations at megalithic sites, which serve as enigmatic libraries of lore. These repositories might take the form of stone circles, pyramids, petroglyphs, and underground temples\u2014any construction durable enough to protect the circle's sacred knowledge even against a great cataclysm.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Star Map|Druid||Stars (UA)|UA2020SubclassesPt3|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Starry Form|Druid||Stars (UA)|UA2020SubclassesPt3|2"
				}
			]
		},
		{
			"name": "Star Map",
			"source": "UA2020SubclassesPt3",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Circle of the Stars feature}",
				"You've created a star map as part of your study of the heavens. The map is a Tiny object and can serve as a spellcasting focus for your druid spells. You decide what form the object takes, or you can determine what it is by rolling on the Star Map table.",
				{
					"type": "table",
					"caption": "Star Map",
					"colLabels": [
						"d6",
						"Map Form"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"1",
							"A scroll of living wood that aligns with heavenly bodies"
						],
						[
							"2",
							"A stone tablet with fine holes drilled through it"
						],
						[
							"3",
							"A speckled owlbear hide, tooled with raised marks"
						],
						[
							"4",
							"A collection of maps bound in an ebony cover"
						],
						[
							"5",
							"A crystal that projects starry patterns when placed before a light"
						],
						[
							"6",
							"Tempered glass disks that align to depict constellations"
						]
					]
				},
				"If you lose your map, you can perform a 1-hour ceremony to magically create a replacement. This ceremony can be performed during a short or long rest, and it destroys the previous map.",
				"You can cast the {@spell augury} and {@spell guiding bolt} spells without expending a spell slot and without preparing the spell, provided you use the star map as the spellcasting focus. You can cast a spell from the map in this way a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Starry Form",
			"source": "UA2020SubclassesPt3",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 2,
			"header": 1,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"{@i 2nd-level Circle of the Stars feature}",
				"You gain the ability to harness constellations' power to alter your form. As an action, you can expend a use of your Wild Shape feature to take on a starry form rather than transforming into a beast.",
				"While in your starry form, you retain your game statistics, but your body takes on a luminous, starlike quality; your joints glimmer like stars, and glowing lines connect them as on a star chart. This form sheds bright light in a 10-foot radius and dim light for an additional 10 feet. The form lasts for 10 minutes or until you're {@condition incapacitated}.",
				"Whenever you assume your starry form, choose which of the following constellations glimmers on your body; your choice gives you certain benefits while in the form:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Chalice",
							"entry": "A constellation of a life-giving goblet appears on you. Whenever you cast a spell using a spell slot that restores hit points to a creature, you or another creature within 30 feet of you can regain hit points equal to {@dice 1d8} + half your level in this class."
						},
						{
							"type": "item",
							"name": "Archer",
							"entry": "A constellation of an archer appears on you. You gain a bonus action that you can use to make a ranged spell attack, hurling a luminous arrow that targets a creature you can see within 60 feet of you. On a hit, the attack deals radiant damage equal to {@dice 1d8} + your Wisdom modifier."
						},
						{
							"type": "item",
							"name": "Dragon",
							"entry": "A constellation of a wise, ancient dragon appears on you. When you make an Intelligence or a Wisdom check or a Constitution saving throw to maintain {@status concentration} on a spell, you can treat a roll of 9 or lower on the {@dice d20} as a 10."
						}
					]
				}
			]
		},
		{
			"name": "Cosmic Omen",
			"source": "UA2020SubclassesPt3",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Circle of the Stars feature}",
				"You learn to use your star map to divine the will of the cosmos. Whenever you finish a long rest, you can consult your star map for omens. When you do so, roll a {@dice d6}. You gain one of the following possible omens based on whether you rolled an even number or an odd number on the {@dice d6}:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Weal (even)",
							"entry": "Whenever a creature you can see within 30 feet of you makes an attack roll, a saving throw, or an ability check, you can use your reaction to roll a {@dice d6} and add the number rolled to the total."
						},
						{
							"type": "item",
							"name": "Woe (odd)",
							"entry": "Whenever a creature you can see within 30 feet of you makes an attack roll, a saving throw, or an ability check, you can use your reaction to roll a {@dice d6} and subtract the number rolled from the total."
						}
					]
				},
				"You can use this reaction a number of times equal to your Wisdom modifier, and you regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Full of Stars",
			"source": "UA2020SubclassesPt3",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Circle of the Stars feature}",
				"While your Starry Form feature is active, you become partially incorporeal, giving you resistance to bludgeoning, piercing, and slashing damage."
			]
		},
		{
			"name": "Star Flare",
			"source": "UA2020SubclassesPt3",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Stars (UA)",
			"subclassSource": "UA2020SubclassesPt3",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Circle of the Stars feature}",
				"Your connection to the cosmos allows you to conjure brilliant starlight. As an action, you conjure a burst of light in a 30-foot-radius sphere centered on a point you can see within 120 feet of you. You can immediately teleport each willing creature in the sphere to an unoccupied space within 30 feet of it. Each creature remaining in the sphere must succeed on a Constitution saving throw against your spell save DC or take {@damage 4d10} radiant damage and be {@condition blinded} until the end of your next turn.",
				"Once you have used this action, you can't use it again until you finish a long rest or until you expend a spell slot of 5th level or higher to use it again."
			]
		},
		{
			"name": "Circle of the Primeval",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Primeval (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 2,
			"entries": [
				"The Circle of the Primeval teaches that, though the land may change over time, it never truly forgets. By tapping into the timeworn memory of the earth, these druids summon and bond with the spirit of a primeval behemoth\u2014a hulking creature that once ruled the ancient world alongside the giants. The most well-known primeval behemoths are the dinosaurs, but spirits bonded with members of the Circle of the Primeval have also taken the form of ancient predecessors to today's common beasts and other fantastical titanic creatures.",
				"Working alongside their companion spirit, most druids of the Circle of the Primeval spend their lives delving into long-forgotten places and preserving the remnants of bygone eras. As a druid's power grows, so does their companion, the beast starting near equal in size to its druid partner before increasing in stature until it too towers over the land.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Keeper of Old|Druid||Primeval (UA)|UA2022GiantOptions|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Primeval Companion|Druid||Primeval (UA)|UA2022GiantOptions|2"
				}
			]
		},
		{
			"name": "Keeper of Old",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Primeval (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-Level Circle of the Primeval Feature}",
				"Your connection to the mighty primeval behemoths allows you new insight into the ancient world. You gain proficiency in the {@skill History} skill. When you make an Intelligence ({@skill History}) check, you can roll a {@dice d4} and add the number rolled to the ability check."
			]
		},
		{
			"name": "Primeval Companion",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Primeval (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-Level Circle of the Primeval Feature}",
				"Starting when you choose this circle, you can call upon the primeval creature whose spirit is bound to you. As an action, you can expend one use of your Wild Shape feature to summon your primeval companion, rather than assuming a beast form. The companion appears in an unoccupied space of your choice within 30 feet of you.",
				"The primeval companion is friendly to you and your companions, and it obeys your commands. See this creature's game statistics in the {@creature Primeval Companion|UA2022GiantOptions} stat block, which uses your proficiency bonus (PB) in several places. You can determine the cosmetic appearance of the companion; for example, your companion may evoke ancient predators like raptors or saber-toothed tigers, or it might be more inclined for defense, appearing as an armored ankylosaurus or a wooly rhino. These choices have no effect on the companion's game statistics.",
				"In combat, the companion shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are {@condition incapacitated}, the companion can take any action of its choice, not just {@action Dodge}.",
				"The companion remains until it is reduced to 0 hit points or until you die, at which point the companion vanishes. If you use this feature to summon the companion again and you already have a companion present, the first companion immediately vanishes. Anything the companion was wearing or carrying is left behind when the companion vanishes."
			]
		},
		{
			"name": "Prehistoric Conduit",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Primeval (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-Level Circle of the Primeval Feature}",
				"You learn how to channel your magic through your primeval companion. When you cast a spell with a range other than self, the spell can originate from you or your primeval companion.",
				"In addition, if the primeval companion is affected by a spell you cast that allows creatures to make a saving throw against its effects, the primeval companion has advantage on its saving throw. If the primeval companion would normally take half damage on a successful save against this spell, the companion instead takes no damage on a successful save and half damage with no additional effects on a failed save."
			]
		},
		{
			"name": "Titanic Bond",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Primeval (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-Level Circle of the Primeval Feature}",
				"The primeval companion grows to Large size, and when you summon it, you can grant it either a climbing speed or a swimming speed equal to its walking speed.",
				"In turn, the primeval companion lends you some of its terrifying might. Once per turn while your primeval companion is summoned, when you hit a creature with an attack or deal damage to a creature you can see with a spell you cast, you can force that creature to make a Wisdom saving throw against your spell save DC; on a failure, the creature is {@condition frightened} of you until the end of your next turn."
			]
		},
		{
			"name": "Scourge of the Ancients",
			"source": "UA2022GiantOptions",
			"page": 3,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Primeval (UA)",
			"subclassSource": "UA2022GiantOptions",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-Level Circle of the Primeval Feature}",
				"You have learned to fully harness the titanic legacy of your companion. As part of the bonus action you use to command your companion, you can expend a spell slot of any level to heighten your primeval companion's might, granting it the following benefits:",
				{
					"type": "list",
					"style": "list-hang-notitle",
					"items": [
						{
							"type": "item",
							"name": "Hulking Behemoth",
							"entries": [
								"The companion becomes Huge and gains temporary hit points equal to 10 times the level of the spell slot expended. If there isn't enough room for the companion to become Huge, it attains the maximum possible size in the space available."
							]
						},
						{
							"type": "item",
							"name": "Mauler",
							"entries": [
								"On a hit, the companion's Strike deals additional damage equal to {@dice 1d8} plus the level of the spell slot expended."
							]
						},
						{
							"type": "item",
							"name": "Titanic Stride",
							"entries": [
								"The companion's walking speed increases by a number of feet equal to 5 times the level of the spell slot expended."
							]
						}
					]
				},
				"These benefits last for 1 hour, until the companion vanishes, or until you expend a spell slot for this feature again."
			]
		},
		{
			"name": "Circle of Wildfire",
			"source": "UAClericDruidWizard",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"entries": [
				"Druids who are members of the Circle of Wildfire understand the necessity of destruction, such as how a forest fire promotes growth. These druids bond with a primal spirit that harbors destructive tendencies, allowing the druids to use their power to create controlled flames that help flora and fauna reproduce and grow.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle Spells|Druid||Wildfire (UA)|UAClericDruidWizard|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Summon Wildfire|Druid||Wildfire (UA)|UAClericDruidWizard|2"
				}
			]
		},
		{
			"name": "Circle Spells",
			"source": "UAClericDruidWizard",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 1,
			"entries": [
				"{@i 2nd-level Circle of Wildfire feature}",
				"You have formed a mystical bond with a wildfire spirit, a primal being of creation and destruction. Your link with this spirit grants you access to certain spells. At 2nd level, you learn the fire bolt cantrip.",
				"When you reach certain levels in this class, you gain access to the spells listed for that level in the Circle of Wildfire Spells table. Once you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
				{
					"type": "table",
					"caption": "Circle of Wildfire Spells",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell locate animals or plants}, {@spell scorching ray}"
						],
						[
							"5th",
							"{@spell fireball}, {@spell plant growth}"
						],
						[
							"7th",
							"{@spell aura of life}, {@spell fire shield}"
						],
						[
							"9th",
							"{@spell flame strike}, {@spell raise dead}"
						]
					]
				}
			]
		},
		{
			"name": "Summon Wildfire",
			"source": "UAClericDruidWizard",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 2,
			"header": 1,
			"consumes": {
				"name": "Wild Shape"
			},
			"entries": [
				"{@i 2nd-level Circle of Wildfire feature}",
				"You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature to summon your {@creature wildfire spirit|UAClericDruidWizard}, rather than assuming a beast form.",
				"The spirit appears in an unoccupied space of your choice you can see within 30 feet of you. Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity saving throw against your spell save DC or take {@damage 2d10} fire damage.",
				"The wildfire spirit is friendly to you and your companions and obeys your commands. See this creature's game statistics in the wildfire spirit stat block. You determine the spirit's appearance. Some spirits take the form of a humanoid figure made of gnarled branches covered in flame, while others look like beasts wreathed in fire.",
				"In combat, the wildfire spirit shares your initiative count, but it takes its turn immediately after yours. The only action it takes on its turn is the {@action Dodge} action, unless you take a bonus action on your turn to command it to take one of the actions in its stat block or to take the {@action Dash}, {@action Disengage}, {@action Help}, or {@action Hide} action.",
				"The wildfire spirit manifests for 1 hour, until it is reduced to 0 hit points, or until you use your Wild Shape again."
			]
		},
		{
			"name": "Enhanced Bond",
			"source": "UAClericDruidWizard",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 6,
			"header": 2,
			"entries": [
				"{@i 6th-level Circle of Wildfire feature}",
				"The bond with your wildfire spirit enhances your destructive and restorative spells. Whenever you cast a spell that deals fire damage or restores hit points while your wildfire spirit is summoned, roll a {@dice d8}, and you gain a bonus to one roll of the spell equal to the number rolled. In addition, when you cast a spell with a range other than self, the spell can originate from you or your wildfire spirit."
			]
		},
		{
			"name": "Flames of Life",
			"source": "UAClericDruidWizard",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 10,
			"header": 2,
			"entries": [
				"{@i 10th-level Circle of Wildfire feature}",
				"You gain the ability to turn death into flames of vitality. When a Small or larger creature that you can see dies within 30 feet of you or your wildfire spirit, you can use your reaction to cause primal flames to spring from the body. When a creature you can see touches these flames, the creature regains hit points or takes fire damage (your choice) equal to {@dice 2d10} + your Wisdom modifier. The flames vanish after a creature has touched them or after 1 minute. You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a long rest."
			]
		},
		{
			"name": "Blazing Endurance",
			"source": "UAClericDruidWizard",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Wildfire (UA)",
			"subclassSource": "UAClericDruidWizard",
			"level": 14,
			"header": 2,
			"entries": [
				"{@i 14th-level Circle of Wildfire feature}",
				"The bond with your wildfire spirit is exceptionally strong, even fatal blows only fuel your defiance. If you drop to 0 hit points and don't die outright, you drop to 1 hit point instead and gain temporary hit points equal to five times your druid level, and each creature of your choice within 30 feet of you that you can see takes fire damage equal to {@dice 2d10} + your druid level.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Circle of Dreams",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"entries": [
				"Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild. The druids' guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with merriment and light. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Balm of the Summer Court|Druid||Dreams (UA)|UADruid|2"
				}
			]
		},
		{
			"name": "Balm of the Summer Court",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that lends relief to weary feet and respite from injuries. You have a pool of fey energy represented by a number of {@dice d6}s equal to your druid level.",
				"As a bonus action, you can choose an ally you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent, and its speed increases by 5 feet per die spent. The speed increase lasts for 1 minute.",
				"You regain the expended dice when you finish a long rest."
			]
		},
		{
			"name": "Hearth of Moonlight and Shadow",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams (UA)",
			"subclassSource": "UADruid",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, home is wherever you set up camp. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to ward your campsite from intruders. At the start of the rest, you create an area with a 30-foot radius. Within this area, you and your allies gain a +5 bonus to Wisdom ({@skill Perception}) checks to detect creatures, and any light from open flames (campfire, torches, and the like) is not visible outside the area. These effects end when the rest finishes or when you leave the area."
			]
		},
		{
			"name": "Hidden Paths",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams (UA)",
			"subclassSource": "UADruid",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you can use the hidden, unpredictable magical pathways that some fey use to traverse space in a blink of an eye. On your turn, you can teleport up to 30 feet to a spot you can see. Each foot of this teleportation costs 1 foot of your movement.",
				"You can also use this feature to teleport someone else. As an action, you can teleport a willing ally you touch up to 30 feet to a point you can see.",
				"Once you use either option\u2014teleporting yourself or an ally\u2014you can't use that option again until {@dice 1d4} rounds have passed."
			]
		},
		{
			"name": "Purifying Light",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams (UA)",
			"subclassSource": "UADruid",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the favor of the Summer Court allows you to end spells that hamper you and your allies. When you cast a spell with a spell slot and it restores hit points to you or an ally this turn, you can simultaneously target the healed creature with dispel magic, using a spell slot with a level equal to the slot used to cast the healing spell.",
				"You can use this feature three times, and you regain expended uses of it when you finish a long rest. If the healing spell targets more than one creature, you can use this feature on more than one at the same time, expending one use of it per creature."
			]
		},
		{
			"name": "Circle of the Shepherd",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"entries": [
				"Druids of the Circle of the Shepherd commune with the spirits of beasts. While these druids recognize that all living things play a role in the natural world, they focus on protecting animals. Shepherds, as they are known, see beasts as their charges. They ward off monsters that threaten natural creatures, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on habitats and paths needed for animal migrations. Many of these druids are happiest far from cities and towns, content to spend their days in the company of wild animals.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spirit Bond|Druid||Shepherd (UA)|UADruid|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Beast Speech|Druid||Shepherd (UA)|UADruid|2"
				}
			]
		},
		{
			"name": "Beast Speech",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain the ability to converse with beasts. Beasts can understand your speech, and you gain the ability to decipher their noises and motions into recognizable words and phrases. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past.",
				"This ability does not grant you any special friendship with beasts, though you can combine this ability with gifts and other favors to curry favor with them as you would any other nonplayer character."
			]
		},
		{
			"name": "Spirit Bond",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you gain the ability to call forth animal spirits and use them to influence the world around you. As a bonus action, you magically summon a Medium spirit to an unoccupied space you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around it, it doesn't occupy its space, it is immobile, and it counts as neither a creature nor an object.",
				"The spirit persists for 1 minute. Once you use this feature, you can't use it again until you finish a short or long rest.",
				"The nature of the aura depends on the type of spirit you choose to summon from the options below.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Bear",
							"entries": [
								"The bear spirit grants you and your allies its might and endurance. You and your allies who are in the aura when the spirit appears each gain temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Hawk",
							"entries": [
								"The hawk spirit is a consummate hunter, marking your enemies with its keen sight. You and your allies gain advantage on ranged attack rolls against targets in the spirit's aura."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Wolf",
							"entries": [
								"The wolf spirit lends you and your allies its precise senses, while your magic works to benefit the members of your pack. You and your allies gain advantage on all ability checks made to detect creatures in the spirit's aura. In addition, if you cast a spell with a spell slot that restores hit points to anyone inside or outside the aura, each of your allies in the aura also regains hit points equal to your druid level."
							]
						}
					]
				}
			]
		},
		{
			"name": "Mighty Summoner",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd (UA)",
			"subclassSource": "UADruid",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to conjure forth powerful animals. Any beast summoned or created by your spells gains two benefits. Its hit point maximum increases by 2 per Hit Die, and the damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage."
			]
		},
		{
			"name": "Guardian Spirit",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd (UA)",
			"subclassSource": "UADruid",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain the services of a spirit that watches over you and protects you from harm. Whenever you finish a long rest, you gain the benefits of a {@spell death ward} spell. The spell's duration is extended to 24 hours."
			]
		},
		{
			"name": "Faithful Summons",
			"source": "UADruid",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd (UA)",
			"subclassSource": "UADruid",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, the bestial spirits you commune with protect you when you are vulnerable. If you are reduced to 0 hit points or are {@condition incapacitated} against your will, you can immediately gain the benefits of {@spell conjure animals} as if it was cast with a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Circle of Twilight",
			"source": "UADruid",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"entries": [
				"The Circle of Twilight seeks to exterminate undead creatures and preserve the natural cycle of life and death that rules over the cosmos. Their magic allows them to manipulate the boundary between life and death, sending their foes to their final rest while keeping their allies from that fate.",
				"These druids seek out lands that have been tainted by undeath. Such places are grim and foreboding. Once vibrant forests become gloomy, haunted places devoid of animals and filled with plants dying a slow, lingering death. The Circle of Twilight goes to such places to banish undeath and restore life.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Harvest's Scythe|Druid||Twilight (UA)|UADruid|2"
				}
			]
		},
		{
			"name": "Harvest's Scythe",
			"source": "UADruid",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UADruid",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you learn to unravel and harvest the life energy of other creatures. You can augment your spells to drain the life force from creatures. You have a pool of energy represented by a number of {@dice d10}s equal to your druid level.",
				"When you roll damage for a spell, you can increase that damage by spending dice from the pool. You can spend a number of dice equal to half your druid level or less. Roll the spent dice and add them to the damage as necrotic damage. If you kill one or more hostile creatures with a spell augmented in this way, you or an ally of your choice that you can see within 30 feet of you regains 2 hit points per die spent to increase the spell's damage, or 5 hit points per die if at least one of the slain creatures was undead.",
				"You regain the expended dice when you finish a long rest."
			]
		},
		{
			"name": "Speech Beyond the Grave",
			"source": "UADruid",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UADruid",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to reach beyond death's veil in search of knowledge. Using this feature, you can cast {@spell speak with dead} without material components, and you understand what the target of this casting says. It can understand your questions, even if you don't share a language or it is not intelligent enough to speak.",
				"Once you use this feature, you can't use it again until you finish a short or long rest."
			]
		},
		{
			"name": "Watcher at the Threshold",
			"source": "UADruid",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UADruid",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain resistance to necrotic and radiant damage. In addition, while you aren't {@condition incapacitated}, any ally within 30 feet of you has advantage on death saving throws."
			]
		},
		{
			"name": "Paths of the Dead",
			"source": "UADruid",
			"page": 2,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Twilight (UA)",
			"subclassSource": "UADruid",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, your mastery of death allows you to tread the paths used by ghosts and other spirits. Using this feature, you can cast {@spell etherealness}. Once the spell ends, you can't cast it with this feature again until you finish a short or long rest."
			]
		},
		{
			"name": "Circle of the Shepherd v2",
			"source": "UARevisedClassOptions",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 2,
			"entries": [
				"Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid. These druids recognize that all living things play a role in the natural world, yet they focus on protecting animals and fey creatures that have difficulty defending themselves. Shepherds, as they are known, see such creatures as their charges. They ward off monsters that threaten them, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on rare animal habitats and on sites sacred to the fey. Many of these druids are happiest far from cities and towns, content to spend their days in the company of animals and the fey creatures of the wilds.",
				"Members of this circle become adventurers to oppose forces that threaten their charges or to seek knowledge and power that will help them safeguard their charges better. Wherever these druids go, the spirits of the wilderness are with them.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Speech of the Woods|Druid||Shepherd v2 (UA)|UARevisedClassOptions|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spirit Totem|Druid||Shepherd v2 (UA)|UARevisedClassOptions|2"
				}
			]
		},
		{
			"name": "Speech of the Woods",
			"source": "UARevisedClassOptions",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain the ability to converse with beasts and many fey.",
				"You learn to speak, read, and write {@language Sylvan}. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn't grant you any special friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character."
			]
		},
		{
			"name": "Spirit Totem",
			"source": "UARevisedClassOptions",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you gain the ability to call forth nature spirits and use them to influence the world around you. As a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents.",
				"As a bonus action, you can move the spirit up to 60 feet to a point you can see.",
				"The spirit persists for 1 minute. Once you use this feature, you can't use it again until you finish a short or long rest.",
				"The effect of the spirit's aura depends on the type of spirit you summon from the options below.",
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Bear Spirit",
							"entries": [
								"The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Hawk Spirit",
							"entries": [
								"The hawk spirit is a consummate hunter, marking your enemies with its keen sight. When a creature makes an attack roll against a target in the spirit's aura, you can use your reaction to grant advantage to that attack roll."
							]
						}
					]
				},
				{
					"type": "entries",
					"entries": [
						{
							"type": "entries",
							"name": "Unicorn Spirit",
							"entries": [
								"The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit's aura. In addition, if you cast a spell with a spell slot that restores hit points to anyone inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level."
							]
						}
					]
				}
			]
		},
		{
			"name": "Mighty Summoner",
			"source": "UARevisedClassOptions",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, you gain the ability to conjure forth powerful beasts and fey. Any beast or fey summoned or created by your spells gains two benefits:",
				{
					"type": "list",
					"items": [
						"The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.",
						"The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage."
					]
				}
			]
		},
		{
			"name": "Guardian Spirit",
			"source": "UARevisedClassOptions",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, your Spirit Totem safeguards the beasts and fey that you call forth with your magic. When a beast or fey that you summoned or created with a spell ends its turn in your Spirit Totem aura, that creature regains a number of hit points equal to half your druid level."
			]
		},
		{
			"name": "Faithful Summons",
			"source": "UARevisedClassOptions",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd v2 (UA)",
			"subclassSource": "UARevisedClassOptions",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, the nature spirits you commune with protect you when you are the most defenseless. If you are reduced to 0 hit points or are {@condition incapacitated} against your will, you can immediately gain the benefits of {@spell conjure animals} as if it were cast with a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no {@status concentration}, or until you dismiss it (no action required).",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Circle of Spores (UA)",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"entries": [
				"Druids of the Circle of Spores find beauty in decay. They see within mold and other fungi the ability to transform lifeless material into abundant, albeit somewhat strange, life. These druids believe that life and death are portions of a grand cycle, with one leading to the other and then back again. Death is not the end of life, but instead a change of state that sees life shift into a new form. Druids of this circle have a complex relationship with the undead. Unlike most other druids, they see nothing inherently wrong with undeath, which they consider to be a companion to life and death. However, these druids believe that the natural cycle is healthiest when each segment of it is vibrant and changing. Undead that seek to replace all life with undeath, or avoid passing to a final rest, violate the cycle and must be thwarted.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Circle Spells|Druid||Spores (UA)|UAThreeSubclasses|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Halo of Spores|Druid||Spores (UA)|UAThreeSubclasses|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Symbiotic Entity|Druid||Spores (UA)|UAThreeSubclasses|2"
				}
			]
		},
		{
			"name": "Circle Spells",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"header": 1,
			"entries": [
				"Your symbiotic link to fungus and your ability to tap into the cycle of life and death grants you access to certain spells. At 1st level, you learn the {@spell chill touch} cantrip. At 3rd, 5th, 7th, and 9th level you gain access to the spells listed for that level in the Circle of Spores Spells table.",
				"Once you gain access to one of these spells, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.",
				{
					"type": "table",
					"caption": "Circle of Spores Spells",
					"colLabels": [
						"Druid Level",
						"Circle Spells"
					],
					"colStyles": [
						"col-2 text-center",
						"col-10"
					],
					"rows": [
						[
							"3rd",
							"{@spell gentle repose}, {@spell ray of enfeeblement}"
						],
						[
							"5th",
							"{@spell animate dead}, {@spell gaseous form}"
						],
						[
							"7th",
							"{@spell blight}, {@spell confusion}"
						],
						[
							"9th",
							"{@spell cloudkill}, {@spell contagion}"
						]
					]
				}
			]
		},
		{
			"name": "Halo of Spores",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can launch toxic spores at other creatures. To do so, you use your reaction on your turn to deal 3 poison damage to one creature you can see within 10 feet of you. This damage increases to 6 at 6th level, 9 at 10th level, and 12 at 14th."
			]
		},
		{
			"name": "Symbiotic Entity",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain the ability to channel magic into the spores that infuse you.",
				"When you use your Wild Shape feature, you can awaken those spores, rather than transforming. When you do so, you gain 3 temporary hit points per level you have in this class, the damage of your Halo of Spores feature doubles, and your melee weapon attacks deal an extra {@damage 1d6} poison damage to any target they hit. These benefits last for 10 minutes or until you use your Wild Shape again."
			]
		},
		{
			"name": "Fungal Infestation",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, your spores gain the ability to infest a humanoid corpse and animate it.",
				"If you slay a humanoid with your Halo of Spores damage, the creature rises as a {@creature zombie} at the end of your turn. It has 1 hit point. In combat, its turn is immediately after yours. It obeys your mental commands, and the only action it can take is the {@action Attack} action, making one melee attack. It remains animate for 1 hour, after which time it collapses and dies."
			]
		},
		{
			"name": "Spreading Spores",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 10,
			"header": 2,
			"entries": [
				"At 10th level, you gain the ability to seed an area with deadly spores. As a bonus action, you hurl fungal spores up to 30 feet away, where they swirl around in a 10-foot cube for 1 minute. While the cube of spores persists, you can't use your Halo of Spores feature, but any creature that starts its turn in the cube takes your Halo of Spores damage. The cube of spores vanishes early if you use this feature again."
			]
		},
		{
			"name": "Fungal Body",
			"source": "UAThreeSubclasses",
			"page": 1,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Spores (UA)",
			"subclassSource": "UAThreeSubclasses",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the fungal spores in your body alter you: you can't be {@condition blinded}, {@condition deafened}, {@condition frightened}, or {@condition poisoned}, and if an attack is a critical hit against you, it doesn't deal its extra damage to you."
			]
		},
		{
			"name": "Circle of Dreams",
			"source": "XGE",
			"page": 22,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams",
			"subclassSource": "XGE",
			"level": 2,
			"entries": [
				"Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild and its dreamlike realms. The druids' guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with dreamy wonder. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places, where dream and reality blur together and where the weary can find rest.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Balm of the Summer Court|Druid||Dreams|XGE|2"
				}
			]
		},
		{
			"name": "Balm of the Summer Court",
			"source": "XGE",
			"page": 22,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams",
			"subclassSource": "XGE",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that offers respite from injuries. You have a pool of fey energy represented by a number of {@dice d6}s equal to your druid level.",
				"As a bonus action, you can choose one creature you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent.",
				"You regain all expended dice when you finish a long rest."
			]
		},
		{
			"name": "Hearth of Moonlight and Shadow",
			"source": "XGE",
			"page": 22,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"At 6th level, home can be wherever you are. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to help guard your respite. At the start of the rest, you touch a point in space, and an invisible, 30-foot-radius sphere of magic appears, centered on that point. Total cover blocks the sphere.",
				"While within the sphere, you and your allies gain a +5 bonus to Dexterity ({@skill Stealth}) and Wisdom ({@skill Perception}) checks, and any light from open flames in the sphere (a campfire, torches, or the like) isn't visible outside it.",
				"The sphere vanishes at the end of the rest or when you leave the sphere."
			]
		},
		{
			"name": "Hidden Paths",
			"source": "XGE",
			"page": 22,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"Starting at 10th level, you can use the hidden, magical pathways that some fey use to traverse space in the blink of an eye. As a bonus action on your turn, you can teleport up to 60 feet to an unoccupied space you can see. Alternatively, you can use your action to teleport one willing creature you touch up to 30 feet to an unoccupied space you can see.",
				"You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses of it when you finish a long rest."
			]
		},
		{
			"name": "Walker in Dreams",
			"source": "XGE",
			"page": 22,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Dreams",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"At 14th level, the magic of the Feywild grants you the ability to travel mentally or physically through dreamlands.",
				"When you finish a short rest, you can cast one of the following spells, without expending a spell slot or requiring material components: {@spell dream} (with you as the messenger), {@spell scrying}, or {@spell teleportation circle}.",
				"This use of {@spell teleportation circle} is special. Rather than opening a portal to a permanent {@spell teleportation circle}, it opens a portal to the last location where you finished a long rest on your current plane of existence. If you haven't taken a long rest on your current plane, the spell fails but isn't wasted.",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		},
		{
			"name": "Circle of the Shepherd",
			"source": "XGE",
			"page": 23,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd",
			"subclassSource": "XGE",
			"level": 2,
			"entries": [
				"Druids of the Circle of the Shepherd commune with the spirits of nature, especially the spirits of beasts and the fey, and call to those spirits for aid. These druids recognize that all living things play a role in the natural world, yet they focus on protecting animals and fey creatures that have difficulty defending themselves. Shepherds, as they are known, see such creatures as their charges. They ward off monsters that threaten them, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on rare animal habitats and on sites sacred to the fey. Many of these druids are happiest far from cities and towns, content to spend their days in the company of animals and the fey creatures of the wilds.",
				"Members of this circle become adventurers to oppose forces that threaten their charges or to seek knowledge and power that will help them safeguard their charges better. Wherever these druids go, the spirits of the wilderness are with them.",
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Speech of the Woods|Druid||Shepherd|XGE|2"
				},
				{
					"type": "refSubclassFeature",
					"subclassFeature": "Spirit Totem|Druid||Shepherd|XGE|2"
				}
			]
		},
		{
			"name": "Speech of the Woods",
			"source": "XGE",
			"page": 23,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd",
			"subclassSource": "XGE",
			"level": 2,
			"header": 1,
			"entries": [
				"At 2nd level, you gain the ability to converse with beasts and many fey.",
				"You learn to speak, read, and write {@language Sylvan}. In addition, beasts can understand your speech, and you gain the ability to decipher their noises and motions. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. This ability doesn't grant you friendship with beasts, though you can combine this ability with gifts to curry favor with them as you would with any nonplayer character."
			]
		},
		{
			"name": "Spirit Totem",
			"source": "XGE",
			"page": 23,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd",
			"subclassSource": "XGE",
			"level": 2,
			"header": 1,
			"entries": [
				"Starting at 2nd level, you can call forth nature spirits to influence the world around you. As a bonus action, you can magically summon an incorporeal spirit to a point you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around that point. It counts as neither a creature nor an object, though it has the spectral appearance of the creature it represents.",
				"As a bonus action, you can move the spirit up to 60 feet to a point you can see.",
				"The spirit persists for 1 minute or until you're {@condition incapacitated}. Once you use this feature, you can't use it again until you finish a short or long rest.",
				"The effect of the spirit's aura depends on the type of spirit you summon from the options below.",
				{
					"type": "entries",
					"name": "Bear Spirit",
					"entries": [
						"The bear spirit grants you and your allies its might and endurance. Each creature of your choice in the aura when the spirit appears gains temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura."
					]
				},
				{
					"type": "entries",
					"name": "Hawk Spirit",
					"entries": [
						"The hawk spirit is a consummate hunter, aiding you and your allies with its keen sight. When a creature makes an attack roll against a target in the spirit's aura, you can use your reaction to grant advantage to that attack roll. In addition, you and your allies have advantage on Wisdom ({@skill Perception}) checks while in the aura."
					]
				},
				{
					"type": "entries",
					"name": "Unicorn Spirit",
					"entries": [
						"The unicorn spirit lends its protection to those nearby. You and your allies gain advantage on all ability checks made to detect creatures in the spirit's aura. In addition, if you cast a spell using a spell slot that restores hit points to any creature inside or outside the aura, each creature of your choice in the aura also regains hit points equal to your druid level."
					]
				}
			]
		},
		{
			"name": "Mighty Summoner",
			"source": "XGE",
			"page": 23,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd",
			"subclassSource": "XGE",
			"level": 6,
			"header": 2,
			"entries": [
				"Starting at 6th level, beasts and fey that you conjure are more resilient than normal. Any beast or fey summoned or created by a spell that you cast gains the following benefits:",
				{
					"type": "list",
					"items": [
						"The creature appears with more hit points than normal: 2 extra hit points per Hit Die it has.",
						"The damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage."
					]
				}
			]
		},
		{
			"name": "Guardian Spirit",
			"source": "XGE",
			"page": 23,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd",
			"subclassSource": "XGE",
			"level": 10,
			"header": 2,
			"entries": [
				"Beginning at 10th level, your Spirit Totem safeguards the beasts and fey that you call forth with your magic. When a beast or fey that you summoned or created with a spell ends its turn in your Spirit Totem aura, that creature regains a number of hit points equal to half your druid level."
			]
		},
		{
			"name": "Faithful Summons",
			"source": "XGE",
			"page": 23,
			"className": "Druid",
			"classSource": "PHB",
			"subclassShortName": "Shepherd",
			"subclassSource": "XGE",
			"level": 14,
			"header": 2,
			"entries": [
				"Starting at 14th level, the nature spirits you commune with protect you when you are the most defenseless. If you are reduced to 0 hit points or are {@condition incapacitated} against your will, you can immediately gain the benefits of {@spell conjure animals} as if it were cast using a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour, requiring no {@status concentration}, or until you dismiss it (no action required).",
				"Once you use this feature, you can't use it again until you finish a long rest."
			]
		}
	]
}

export {bard, druid}