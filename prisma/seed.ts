import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.game.deleteMany();

	await prisma.game.createMany({
		data: [
			// {
			// 	name: "Harry Potter: The Wizarding World",
			// 	description:
			// 		"Join Harry, Hermione, and Ron in this magical adventure. ",
			// 	storyline:
			// 		"Embark on a journey through the wizarding world, facing challenges and uncovering secrets. follow the story of Harry Potter as you explore iconic locations, learn spells, and battle dark forces during your quest.",
			// 	genre: "Adventure",
			// 	platform: "PC",
			// 	shopLink: "https://store.example.com/harry-potter-wizarding-world",
			// 	releaseDate: new Date("2024-06-01"),
			// 	producer: "Ubisoft",
			// 	photoGame:
			// 		"https://res.cloudinary.com/dwzu86xf5/image/upload/v1788882405/8f6f32bf7db9471d0dcee5921fd7bc72_b5mqqo.jpg",
			// 	studio: "Future Wheels",
			// 	headerImage:
			// 		"https://res.cloudinary.com/dwzu86xf5/image/upload/v1788882405/14f82ccc41be090f2b3de3fb41e44299_r9px9g.png",
			// 	rating: 4.8,
			// 	trailerUrl: "https://example.com/trailer/harry-potter-wizarding-world",
			// 	status: "available",
			// 	language: "English",
			// 	popularity: 1200,
			// 	price: 29.99,
			// 	istrending: true,
			// },
			{
				name: "Grand Theft Auto V",
				description:
					"An open-world action game set in the fictional city of Los Santos.",
				storyline:
					"Set in the huge city of Los Santos, the game allows players to explore the open world, drive vehicles, take part in missions, build criminal businesses, and interact with a wide variety of characters. The game combines action, crime, exploration, driving, and an extensive online multiplayer experience.",
				genre: "Action",
				platform: "PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2013-09-17"),
				producer: "Rockstar Games",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789051461/af0a25e27510f77d97634a6bbe653b13_b2xoqe.jpg",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789051460/b955184660f6c017452092680006fc6c_idzj23.png",
				studio: "Rockstar North",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789565758/bce1b9106b73399c517b481d312a6780_jiurkd.jpg",
				rating: 4.8,
				trailerUrl:
					"https://www.youtube.com/results?search_query=GTA+V+official+trailer",
				status: "available",
				language: "English",
				popularity: 100,
				price: 29.99,
				istrending: true,
			},

			{
				name: "Forza Horizon 5",
				description:
					"An open-world racing game set in a fictionalized version of Mexico.",
				storyline:
					"The game focuses on freedom, exploration, car culture, and fast-paced racing rather than a traditional linear story.",
				genre: "Racing",
				platform: "PC, Xbox Series X/S, Xbox One, PlayStation 5",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2021-11-09"),
				producer: "Xbox Game Studios",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789565758/34961b0d08f58efac4ac1682cbfc5f31_ulqay7.png",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789560825/46bc700ae687b72db8bf62e36f8fdab7_za1cd4.jpg",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139462/79930abaa4e3834809a9af2cef82861d_sclobk.jpg",
				studio: "Playground Games",
				rating: 4.8,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Forza+Horizon+5+trailer",
				status: "available",
				language: "English",
				popularity: 97,
				price: 59.99,
				istrending: true,
			},

			{
				name: "EA Sports FC 26",
				description:
					"A football simulation game featuring real clubs, players, competitions, and multiple game modes.",
				storyline:
					"EA Sports FC 26 lets players experience professional football through realistic matches, teams, players, and competitions from around the world. Players can create and manage their own club, build a career as a footballer or manager, compete online, and participate in different football modes. The game focuses on realistic gameplay, team management, player development, competitive matches, and recreating the experience of modern professional football.",
				genre: "Sports",
				platform: "PC, PlayStation 5, Xbox Series X/S, Nintendo Switch 2",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2025-09-26"),
				producer: "Electronic Arts",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053303/8d6927f9e4c3dd1842bbd5110937d2ec_qe8bx1.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139456/c4897e8271d1284bcc98c25cbd238b18_dvn0a7.jpg",
				studio: "EA Sports",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789567065/EA-Sports-Logo-500x281_vpptq5.png",
				rating: 4.4,
				trailerUrl:
					"https://www.youtube.com/results?search_query=EA+Sports+FC+26+trailer",
				status: "available",
				language: "English",
				popularity: 96,
				price: 69.99,
				istrending: true,
			},

			{
				name: "The Sims 4",
				description:
					"A life simulation game where players create characters and control their everyday lives.",
				storyline:
					"The Sims 4 is a life simulation game centered around creating and controlling virtual people known as Sims. Players can build homes, choose careers, develop relationships, raise families, explore neighborhoods, and guide their characters through different stages of life. Instead of following one fixed storyline, the game gives players the freedom to create their own stories and decide how their Sims live, work, socialize, and develop.",
				genre: "Life Simulation",
				platform: "PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2014-09-02"),
				producer: "Electronic Arts",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053310/aeb677b971d71e2c19ebd36fdbd839e9_h2mw27.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053294/677a2cd14778044c4d697a7a2680f1d3_jlopcv.png",
				studio: "Maxis",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789567065/unnamed_1_j7d6z0.png",
				rating: 4.5,
				trailerUrl:
					"https://www.youtube.com/results?search_query=The+Sims+4+official+trailer",
				status: "available",
				language: "English",
				popularity: 94,
				price: 0,
				istrending: false,
			},

			{
				name: "Minecraft",
				description:
					"A sandbox game where players explore, build, craft, and survive in a procedurally generated world.",
				storyline:
					"Minecraft gives players a huge block-based world where they can explore different environments, collect resources, build structures, craft equipment, and survive against hostile creatures. The game does not force players to follow one specific storyline, allowing them to create their own objectives. Players can build enormous cities, explore underground caves, fight powerful enemies, farm resources, or simply create whatever they imagine.",
				genre: "Sandbox",
				platform:
					"PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, Nintendo Switch, Mobile",
				shopLink: "https://www.minecraft.net/",
				releaseDate: new Date("2011-11-18"),
				producer: "Mojang Studios",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053303/a73027901f88055aaa0fd1a9e25d36c7_bg6cg0.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053297/86113dc59e768c1d1a462f18a5d458a0_vmceko.png",
				studio: "Mojang Studios",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789567065/unnamed_1_j7d6z0.png",
				rating: 4.9,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Minecraft+official+trailer",
				status: "available",
				language: "English",
				popularity: 100,
				price: 29.99,
				istrending: true,
			},

			{
				name: "Resident Evil 4",
				description:
					"A survival horror game combining exploration, combat, puzzles, and intense encounters.",
				storyline:
					"Resident Evil 4 follows Leon S. Kennedy as he travels to a remote European village to rescue the kidnapped daughter of the President. Instead of finding ordinary villagers, Leon discovers a dangerous population controlled by a mysterious parasite. He must investigate the surrounding area, fight infected enemies, solve environmental puzzles, and survive increasingly dangerous encounters while uncovering the organization behind the kidnapping.",
				genre: "Survival Horror",
				platform: "PC, PlayStation 5, PlayStation 4, Xbox Series X/S",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2023-03-24"),
				producer: "Capcom",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053287/a7ee11c99daa86125832bfc5e5a06cce_zm9qoa.jpg",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139460/ee9bd8073a31663328cd3d3f3ed824ad_osadlo.png",
				studio: "Capcom",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1790000102/133379_pk7nuv.png",
				rating: 4.9,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Resident+Evil+4+Remake+trailer",
				status: "available",
				language: "English",
				popularity: 96,
				price: 59.99,
				istrending: true,
			},

			{
				name: "Tekken 8",
				description:
					"A competitive fighting game featuring a large roster of martial artists and powerful combat systems.",
				storyline:
					"Tekken 8 continues the long-running conflict between the Mishima and Kazama families while introducing a new chapter in the rivalry between Jin Kazama and Kazuya Mishima. Players can choose from a large roster of fighters, each with unique fighting styles and abilities. The game combines a cinematic story mode with competitive multiplayer battles, training modes, character customization, and fast-paced one-on-one combat.",
				genre: "Fighting",
				platform: "PC, PlayStation 5, Xbox Series X/S",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2024-01-26"),
				producer: "Bandai Namco Entertainment",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053292/a9283100ad06971a29f5382f6ab25ea4_wxlyjg.jpg",
				headerImage:
					"https://images.unsplash.com/photo-1511512578047-dfb367046420",
				studio: "Bandai Namco Studios",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574297/images_1_c7rjfp.png",
				rating: 4.7,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Tekken+8+official+trailer",
				status: "available",
				language: "English",
				popularity: 91,
				price: 69.99,
				istrending: false,
			},

			{
				name: "Civilization VII",
				description:
					"A turn-based strategy game where players build and lead civilizations through history.",
				storyline:
					"Civilization VII allows players to create and lead a civilization from its early beginnings through different periods of human history. Players explore the world, establish cities, research technologies, develop economies, build armies, negotiate with other civilizations, and make decisions that shape their society. Success can come through military power, scientific progress, cultural influence, economic development, or diplomacy, giving players many different ways to build their empire.",
				genre: "Strategy",
				platform:
					"PC, PlayStation 5, Xbox Series X/S, Nintendo Switch, Nintendo Switch 2",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2025-02-11"),
				producer: "2K",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053283/76680c4c0b3e66c4cd885e7735d2776b_zuc5xm.jpg",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053307/1d8f1cb0b4d0010b1333b9c087a16c8b_uyyr8d.png",
				studio: "Firaxis Games",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574288/images_1_gonsjh.jpg",
				rating: 4.4,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Civilization+VII+trailer",
				status: "available",
				language: "English",
				popularity: 88,
				price: 69.99,
				istrending: false,
			},

			{
				name: "Super Mario Bros. Wonder",
				description:
					"A colorful platforming adventure featuring Mario and his friends.",
				storyline:
					"Super Mario Bros. Wonder is a side-scrolling platform game where Mario and his friends travel through the Flower Kingdom after Bowser causes chaos in the region.",
				genre: "Platformer",
				platform: "Nintendo Switch",
				shopLink: "https://www.nintendo.com/",
				releaseDate: new Date("2023-10-20"),
				producer: "Nintendo",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053290/66da3b21fe18692332284c64e08b8e02_mi5vam.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789053284/6b67f16993ab21391d32f5d5f662e060_vmaudz.png",
				studio: "Nintendo",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574295/images_2_olebid.png",
				rating: 4.9,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Super+Mario+Bros+Wonder+trailer",
				status: "available",
				language: "English",
				popularity: 95,
				price: 59.99,
				istrending: false,
			},

			{
				name: "Fortnite",
				description:
					"A free-to-play multiplayer game combining battle royale, building, shooting, and creative experiences.",
				storyline:
					"Fortnite is a constantly evolving multiplayer game where players compete, cooperate, and explore a changing world. Its most famous mode places players on an island where they collect equipment and fight until only one player or team remains. Beyond battle royale, Fortnite includes creative experiences, events, user-generated worlds, and collaborations with major entertainment franchises, making it more of a large gaming platform than a single traditional storyline.",
				genre: "Battle Royale",
				platform:
					"PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, Nintendo Switch, Mobile",
				shopLink: "https://www.fortnite.com/",
				releaseDate: new Date("2017-07-25"),
				producer: "Epic Games",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139440/4944e4ea87bc6821ae44cfbc7821ae26_lnnhy4.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139456/2f3e90ab16100ee5e3bcc45a7fb89e4d_ur7trw.png",
				studio: "Epic Games",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574288/images_3_f5e3d8.png",
				rating: 4.6,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Fortnite+official+trailer",
				status: "available",
				language: "English",
				popularity: 100,
				price: 0,
				istrending: true,
			},

			{
				name: "The Legend of Zelda: Tears of the Kingdom",
				description:
					"An open-world adventure game featuring exploration, puzzles, combat, and creative building.",
				storyline:
					"The Legend of Zelda: Tears of the Kingdom follows Link as he explores a greatly expanded version of Hyrule after a mysterious event threatens the kingdom. Players travel across the surface, sky islands, and underground areas while searching for Zelda and investigating an ancient power. The game combines exploration, combat, puzzles, abilities, and creative construction, allowing players to solve problems and navigate the world in many different ways.",
				genre: "Adventure",
				platform: "Nintendo Switch",
				shopLink: "https://www.nintendo.com/",
				releaseDate: new Date("2023-05-12"),
				producer: "Nintendo",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139450/ae758fbcbd5bd841516c53b3c08ebc6f_yaw9st.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139417/14dd1022b8d5fcb3297b6f1777bd4f8b_ymfbzg.png",
				studio: "Nintendo",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574297/images_1_c7rjfp.png",
				rating: 4.9,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Zelda+Tears+of+the+Kingdom+trailer",
				status: "available",
				language: "English",
				popularity: 98,
				price: 69.99,
				istrending: false,
			},

			{
				name: "Call of Duty: Warzone",
				description:
					"A free-to-play competitive shooter featuring large-scale multiplayer and battle royale modes.",
				storyline:
					"Call of Duty: Warzone is a competitive shooter built around large-scale multiplayer battles. Players enter massive maps, search for weapons and equipment, fight enemy squads, and try to remain the last team standing. The game combines traditional Call of Duty gunplay with battle royale mechanics, tactical movement, vehicles, contracts, and constantly changing events. It also connects to the wider Call of Duty universe through its seasonal content and characters.",
				genre: "Shooter",
				platform: "PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One",
				shopLink: "https://www.callofduty.com/warzone",
				releaseDate: new Date("2020-03-10"),
				producer: "Activision",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789561381/da12a36a0a1fc7cf0d4142aae11e3349_uqylpu.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789561381/cf2e63c20b34ae2070f9ed831e83f8fc_svvshm.png",
				studio: "Infinity Ward",
				rating: 4.5,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Call+of+Duty+Warzone+trailer",
				status: "available",
				language: "English",
				popularity: 98,
				price: 0,
				istrending: true,
			},

			{
				name: "Stardew Valley",
				description:
					"A relaxing farming and life simulation game focused on exploration, relationships, and community.",
				storyline:
					"Stardew Valley follows a character who leaves their stressful city life behind and moves to an old family farm in a small rural community. Players can grow crops, raise animals, fish, explore mines, collect resources, and build relationships with the people living in the valley. The game gives players freedom to decide how they spend their time while gradually restoring the farm and becoming part of the local community.",
				genre: "Lifestyle",
				platform:
					"PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, Nintendo Switch, Mobile",
				shopLink: "https://store.steampowered.com/app/413150/Stardew_Valley/",
				releaseDate: new Date("2016-02-26"),
				producer: "ConcernedApe",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139459/996e24639b91722571c81723760023e0_wu9oja.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139438/baf71d104146a8d186e61d551c11bca8_qc4zze.jpg",
				studio: "ConcernedApe",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574292/CA_logo_vector_5_colors5x_nsf54q.png",
				rating: 4.9,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Stardew+Valley+trailer",
				status: "available",
				language: "English",
				popularity: 97,
				price: 14.99,
				istrending: false,
			},

			{
				name: "Helldivers 2",
				description:
					"A cooperative third-person shooter focused on chaotic squad-based battles.",
				storyline:
					"Helldivers 2 takes place in a future where humanity is fighting to defend Super Earth from hostile forces across the galaxy. Players become Helldivers and are sent to dangerous planets to complete missions, destroy enemy positions, collect resources, and support the wider war effort. The game focuses heavily on cooperation, allowing players to call in weapons, vehicles, air strikes, and other equipment while fighting enormous waves of enemies.",
				genre: "Survival",
				platform: "PC, PlayStation 5, Xbox Series X/S",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2024-02-08"),
				producer: "Sony Interactive Entertainment",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139433/88804947ad9f43ab446f7ed938060ef8_qf7kti.jpg",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139437/61a484ad7f3166bfd59024a924efb02f_jcsbfm.png",
				studio: "Arrowhead Game Studios",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574292/images_rnpxec.jpg",
				rating: 4.6,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Helldivers+2+trailer",
				status: "available",
				language: "English",
				popularity: 94,
				price: 39.99,
				istrending: false,
			},

			{
				name: "Portal 2",
				description:
					"A puzzle adventure game based around portals, physics, and creative problem solving.",
				storyline:
					"Portal 2 follows a test subject trapped inside the mysterious Aperture Science facility, where a series of experimental tests are controlled by artificial intelligence systems. Players use a portal gun to create connected portals and manipulate objects, momentum, lasers, and other environmental elements. The game combines increasingly challenging puzzles with exploration, humor, and a story that reveals the strange history of the facility and its artificial intelligence.",
				genre: "Puzzle",
				platform: "PC, PlayStation 3, Xbox 360, Nintendo Switch",
				shopLink: "https://store.steampowered.com/app/620/Portal_2/",
				releaseDate: new Date("2011-04-18"),
				producer: "Valve",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139436/7668636048c4fbe8df8ffb388679e933_oasqms.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789139421/8b876c1b50944f1e1606cd4597450fbb_xs0egr.png",
				studio: "Valve",
				rating: 4.9,
				trailerUrl:
					"https://www.youtube.com/results?search_query=Portal+2+official+trailer",
				status: "available",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574293/Valve-logo_hgwh5h.jpg	",
				language: "English",
				popularity: 92,
				price: 9.99,
				istrending: false,
			},

			{
				name: "Elden Ring",
				description:
					"An open-world action RPG featuring exploration, challenging combat, and a vast fantasy world.",
				storyline:
					"Elden Ring takes place in the vast fantasy world of the Lands Between, a kingdom shaped by powerful beings and the destruction of the Elden Ring. Players create their own character and explore a huge interconnected world filled with ruins, castles, caves, enemies, and powerful bosses. The game focuses on exploration, difficult combat, character progression, and discovering the history of the world through its environments, characters, and mysterious lore.",
				genre: "RPG",
				platform: "PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One",
				shopLink: "https://store.steampowered.com/",
				releaseDate: new Date("2022-02-25"),
				producer: "Bandai Namco Entertainment",
				photoGame:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789561381/a0abf0396a718b8982fce0b80181d8cb_jmnadq.png",
				headerImage:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789561380/f5ed13775a70b09a08ffcf0fbecb9efd_coy5ak.png",
				studio: "FromSoftware",
				studiophoto:
					"https://res.cloudinary.com/dwzu86xf5/image/upload/v1789574294/FromSoftware-Logo-Dark-Thumb-Square_ojvpbm.png",
				rating: 4.9,

				trailerUrl:
					"https://www.youtube.com/results?search_query=Elden+Ring+official+trailer",
				status: "available",
				language: "English",
				popularity: 99,
				price: 59.99,
				istrending: true,
			},
		],
	});

	console.log("🎮 2 games inserted successfully");
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
