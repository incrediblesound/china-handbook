exports.premodern = {

	prehistory: {
		tag: 'Pre-historic China',
		dates: ' < 2000 BC',
		description: {
			one:'Prehistoric China contained a plethora of independant civilizations. \
			Nearly every region in China has produced archaeological evidence of neolithic \
			cultures with artifacts including pottery and stonework.',
			two:''},
    pleistocene: {
  		place: 'prehistory+pleistocene',
      tag: 'The Pleistocene',
      description: {one:'Our current geological epoch, the holocene, began about\
 				11,700 years before the present. The preceding epoch is known as the\
 				pleistocene. At the end of the pleistocene, East Asia had a warm moist\
 				climate. There was an abundance of vegetaion including plants both edible and\
 				medicinal and animals such as elephant, crocodile and deer, many of which are\
 				now only to be found in southern China and other parts of Asia.',
 			two:''}
    },
	holocene: {
		place: 'prehistory+holocene',
    tag: 'The Holocene',
    description: {one:'People all over the world started developing agriculture around \
			10,000 years ago. Excavations all over China have uncovered remains of \
			sophisticated civilizations dating from this era, with artifacts including \
			carved jade, pottery, musical instruments and even written language, although \
			the few symbols passed down from these cultures have not been decifered. \
			According to these ecavations it is known that civilizations in the north \
			primarily cultivated millet while those of the south grew domesticated rice.',
		two:''}
  },
	civilization: {
		place:'prehistory+civilization',
    tag: 'Pre-historic Civilizations',
		description: { one:'Prior to 3000bc there were a number of different unique cultures\
already flourishing in the area which later became known as China. These\
cultures began to influence each other around 3000bc after a few thousand\
years of growth and development. Grave sites of this "prehistoric" period show\
evidence of hierarchical social organization. In some sites the largest and\
most resplendant graves contain many ritualistic objects which suggests that the\
leaders of these societies simultaneously held political, military, and\
religious roles.',
			two:''},
		shamanism: {
			place:'prehistory+civilization+shamanism',
      tag: 'Shamanism',
      description: 'cong and bi'
    },
		society: {
			place:'prehistory+civilization+society',
      tag: 'Society',
      description: 'walled settlements'
    },
		technology: {
			place:'prehistory+civilization+technology',
      tag: 'Technology',
      description: 'mining and jade carving'
    }
	},
  	language: {
  		place:'prehistory+civilization+language',
    	tag: 'Language',
  		description: 'Chinese languages form one branch of the Sino-Tibetan language \
 family, also called "Trans-Himalayan" by some scholars. This classification is \
 based on similarities between words such as the numbers one through ten, \
 pronouns such as I, me and you, and other basic words. While it is possible that these \
 similarities are due to early contact between Chinese and Tibetan peoples, the \
 evidence is too scarce to draw definite conclusions.'
  	}
	},
	preimperial: {
		tag: 'Pre-imperial China',
		dates: '~1600-221 BC',
		description: {
			one:'The history of pre-imperial China has been organized into a tidy \
			succession of dynasties starting with the Xia, which is prehistoric, and \
			a continuing on through the Shang and Zhou dynasties. This linear model \
			is problematic because it ignores the cultural diversity of ancient \
			China. It is apparent, however, that the Shang and Zhou were powerful \
			regional leaders that exerted control over smaller states, and that much \
			of Chinese culture may have originated with them, or at least have been \
			transmitted via their scribes, artists and shamans.',
			two:''},
		shang:{
    	tag: 'Shang',
    	place: 'preimperial+shang',
			dates: '(ca. 1600-1046 BC)',			
			description: {
				one: 'The Shang dynasty was considered the first Chinese dynasty by traditional Chinese historians. \
				It is not entirely clear why this is; there were many other states contemporaneous with the Shang. \
				It is likely that the Shang civilization was regionally the most powerful, and may have been an important source of \
				Chinese writing, religion, and art. \
				Shang civilization did have many characteristics unique \
				to Chinese culture and political organization, most notably divination with animal bones, and the bronze tripods which retained ritual significance \
				throughout the Zhou dynasty.',
				two: ''},
			script: 'Oracle Bones',
			religion: {
				tag: 'Ancestor worship',
				place: 'preimperial+shang+religion',
				description: {   
					one: 'The Shang had a complex system of divination\
					whereby the king and/or his shamans, who were also nobles, asked for\
					guidance from the ancestors or from "god". The questions were inscribed\
					into bovine scapula or turtle shells, now called "oracle bones", and a\
					heat source was applied to produce cracks. The cracks were interpreted\
					and a summary of the divination event was inscribed on the bone. This\
					process was gradually simplified of the course of Shang history.',

				two: 'At first, a large variety of questions were offered up to the\
				higher powers, including topics such as harvest, childbirth, the\
				interpretation of dreams, and matters of diplomacy or war. The\
				questions were formed in binary pairs which were inscribed in bold\
				calligraphy on either side of the bone, and filled in with colorful\
				pigment when the divination process was complete. Over time the\
				subject matter of divination became narrower, mostly covering requests\
				for safety and a plentiful hunt. The calligraphic inscriptions became\
				simpler both in style and content, and the interpretations lost their\
				depth and variety. <br> This is most likely due to a greater\
				systemization of royal power, which may have relied less on spectacle\
				as it became more established. Another factor was the development of a\
				new system of divination which is known today as the Yi Jing.'
      	}
			},
			technology: {
				bronze: {
				description:'The artisans of bronze age China developed a unique\
				technique for casting bronze called piece mold casting.',
      	},
				pictures: {},
        pottery: {
				  description: '',
				  pictures:{}
		    }
    	}
		},
    zhou: {         
      tag: 'Zhou',
      dates: '1046-221 bc',
      place: 'preimperial+zhou',
      description: {         
        one: 'Zhou was one many states in central China that existed alongside \
				the Shang in neolithic times. In 1045 bc the Zhou army defeated the Shang and \
				became the center of political power in northern China. The Zhou king \
				stabilized his empire by sending out close relatives to serve as rulers of \
				smaller states in strategic positions most to the south and east of the Zhou \
				capitol. Over the course of a few generations these states grew became more \
				and more powerful as their leaders grew more and more distant from the Zhou \
				king.',

        two: 'This alienation of the Zhou from its child states led to the \
        development of a more bureacratic style of governance on the one hand, \
        and an increasing dissatisfaction among the people on the other. In \
        776 bc the decline of the Zhou state reached its climax when the Zhou \
        capitol was sacked by a coalition of smaller states. While the central \
        government still retained some symbolic significance, it retained \
        little in the way of real political power. The period after 776 \
        bc is referred to as the "eastern Zhou" or the spring and autumn \
        period.'
      },
			conquest:{
				tag: 'The Zhou conquest of Shang',
				place: 'preimperial+zhou+conquest',
        description: {
        		one: 'Before he died in 1050 bc King Wen of Zhou began a series \
        of military capaigns against the Shang by setting up a new capitol in \
        the Feng river valley. From here his capaigns focused on the small \
        states occupying strategic positions to the south and west of the \
        Shang capitol. Two years after his death, his successor King Wu took \
        this campaign to its conclusion. First, he camped at a ford on the \
        yellow river south of the shang capitol and cultivated alliances with \
        local lords. He brough his army, strengthened by their forces, to \
        "Shepard\'s Wild" just south of the capitol, where his cavalry \
        sucessfully routed the Shang forces.',
        		two: ''},
        	literature: {
        		daming: {
        			name: 'Great Brightness',
        			source: 'Classic of Poetry',
        			text: {source: 'shijing', text: 'daming'}
        		}
        	}
        },
			civilwar:{},
			western:{},
			literature:{},
			script:{}
		},
		SpringAndAutumn:{
    	tag:'Spring and Autumn'
  	},
		warringStates:{
    	tag: 'Warring States',
			dates: '',
			politics: {
				description: '',
				map: 'TODO warringStatesMap'
			},
			warfare: {
				description:'',
				battles:{}
			},
			literature: {
				daodejing: 'daodejing',
				zhuangzi: 'zhuangzi',
				lunyu: 'lunyu',
				sunzi: 'sunzi',
				zhanguoce: 'zhanguoce'
			},
			script: {
				description: '',
				types: {}
			}
		}	
	},
	imperial: {
		Qin:{
    	tag: 'Qin'
  	},
		Han:{
    	tag: 'Han'
  	},
		threeKingdoms:{
    	tag: 'Three Kingdoms',
    	northsouth: ''
  	},
		Tang:{
    	tag:'Tang'
  	},
		Song:{
    	tag:'Song'
  	}
  }
};

exports.lit = {
	shiji: {
		yin: {
			name: 'Annals of Yin',
			chapters: {}
		}
	},
	shijing: {
		title: 'Classic of Poetry',
		daming: {
			title: 'The Great Brightness',
			body: 'The forces of Shang, gathered like a forest.<br>The armies \
		arrayed in Shepards Wilds, and the lords rose up.<br> The Lord on High \
		comes down to us, there is no need to second thoughts.<br> Shepards Wild \
		is a vast field, the sandalwood chariots glimmer and the teams of horses \
		thunder.<br> Captain Shang Fu spread out like an eagle. Assisting King Wu \
		they struck down the Shang.<br> The next morning was clear and bright.'
		}
	},
	zhouyi: {

		xicishang: 'Heaven is on high, earth is down low. Thusly are the \
		symbols Qian and Kun established, the fine and crude take their \
		places. Movement and stillness are fixed, hard and soft are separated. \
		Parts are separated according to types, things are gathered according \
		to groups, auspicious and inauspicious are born. In heaven the images \
		are formed, on earth the shapes are completed, and thusly change may \
		be observed. <br>'
	}
};