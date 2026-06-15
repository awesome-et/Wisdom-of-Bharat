export const categories = [
  { id: '1', name: 'Ramayana', lessons: 24, difficulty: 'Beginner', time: '12 hrs', emoji: '🏹', color: 'from-orange-500 to-amber-500', description: 'Epic tale of duty, honor, and the triumph of good over evil through the life of Lord Rama.' },
  { id: '2', name: 'Mahabharata', lessons: 36, difficulty: 'Intermediate', time: '18 hrs', emoji: '⚔️', color: 'from-blue-600 to-indigo-600', description: 'The great epic of dharma, rivalry, and the complexities of right and wrong.' },
  { id: '3', name: 'Bhagavad Gita', lessons: 18, difficulty: 'Advanced', time: '10 hrs', emoji: '📜', color: 'from-amber-500 to-yellow-500', description: 'Timeless dialogue between Krishna and Arjuna on duty, purpose, and the nature of existence.' },
  { id: '4', name: 'Stories of Krishna', lessons: 20, difficulty: 'Beginner', time: '10 hrs', emoji: '🦚', color: 'from-sky-500 to-blue-500', description: 'From mischievous child to divine strategist — lessons in love, wisdom, and leadership.' },
  { id: '5', name: 'Stories of Shiva', lessons: 16, difficulty: 'Intermediate', time: '8 hrs', emoji: '🔱', color: 'from-purple-500 to-violet-500', description: 'The destroyer and transformer — stories of detachment, compassion, and cosmic balance.' },
  { id: '6', name: 'Stories of Hanuman', lessons: 14, difficulty: 'Beginner', time: '7 hrs', emoji: '🐒', color: 'from-red-500 to-orange-500', description: 'The embodiment of devotion, strength, and selfless service.' },
  { id: '7', name: 'Stories of Ganesha', lessons: 12, difficulty: 'Beginner', time: '6 hrs', emoji: '🐘', color: 'from-rose-500 to-pink-500', description: 'The remover of obstacles — wisdom in humility, intelligence, and new beginnings.' },
  { id: '8', name: 'Stories of Devi', lessons: 15, difficulty: 'Intermediate', time: '8 hrs', emoji: '🪷', color: 'from-fuchsia-500 to-pink-500', description: 'The divine feminine — courage, shakti, and the power of righteous fury.' },
  { id: '9', name: 'Panchatantra', lessons: 25, difficulty: 'Beginner', time: '12 hrs', emoji: '🦁', color: 'from-emerald-500 to-green-500', description: 'Ancient animal fables by Vishnu Sharma teaching practical wisdom and statecraft.' },
  { id: '10', name: 'Chanakya Niti', lessons: 20, difficulty: 'Advanced', time: '10 hrs', emoji: '🧠', color: 'from-slate-600 to-gray-700', description: 'Kautilya\'s sharp maxims on politics, economics, strategy, and human nature.' },
  { id: '11', name: 'Indian Saints', lessons: 18, difficulty: 'Intermediate', time: '9 hrs', emoji: '🙏', color: 'from-teal-500 to-cyan-500', description: 'From Swami Vivekananda to Kabir — lives that transformed India\'s spiritual landscape.' },
  { id: '12', name: 'Historical Inspirations', lessons: 22, difficulty: 'Intermediate', time: '11 hrs', emoji: '🏛️', color: 'from-stone-500 to-stone-700', description: 'Real figures from Indian history whose courage and vision shaped a civilization.' },
];

export const wisdomPaths = [
  {
    id: '1', name: 'Confidence Builder', description: 'Build unshakable self-belief through stories of legendary heroes who conquered fear and self-doubt to achieve the impossible.',
    progress: 45, lessons: 12, time: '6 hrs', icon: '💪',
    characters: ['Hanuman', 'Arjuna', 'Abhimanyu'],
    color: 'from-primary to-accent',
  },
  {
    id: '2', name: 'Leadership Path', description: 'Learn the art of inspiring others, making tough decisions, and leading with integrity from India\'s greatest leaders and strategists.',
    progress: 30, lessons: 15, time: '8 hrs', icon: '👑',
    characters: ['Krishna', 'Rama', 'Vidura'],
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: '3', name: 'Discipline Path', description: 'Master self-control, unwavering commitment, and the strength to uphold your principles no matter the cost.',
    progress: 60, lessons: 10, time: '5 hrs', icon: '🎯',
    characters: ['Lakshmana', 'Bhishma'],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: '4', name: 'Decision Making', description: 'Sharpen your judgment through stories of moral dilemmas, strategic thinking, and choosing wisely under pressure.',
    progress: 15, lessons: 14, time: '7 hrs', icon: '⚖️',
    characters: ['Yudhishthira', 'Chanakya', 'Vidura'],
    color: 'from-purple-500 to-violet-600',
  },
];

export interface LessonData {
  id: string;
  title: string;
  category: string;
  duration: string;
  difficulty: string;
  completed: boolean;
  thumbnail: string;
  description: string;
}

export const sampleLessons: LessonData[] = [
  { id: '1', title: "Hanuman's Leap of Faith", category: 'Stories of Hanuman', duration: '8 min', difficulty: 'Beginner', completed: true, thumbnail: '🐒', description: 'How Hanuman overcame self-doubt when reminded of his divine powers, and leaped across the ocean to find Sita in Lanka.' },
  { id: '2', title: "Arjuna's Dilemma on the Battlefield", category: 'Bhagavad Gita', duration: '12 min', difficulty: 'Advanced', completed: true, thumbnail: '🏹', description: 'When Arjuna refused to fight his own kin at Kurukshetra, Krishna revealed the deeper meaning of duty and dharma.' },
  { id: '3', title: "Rama's Exile — Grace Under Pressure", category: 'Ramayana', duration: '10 min', difficulty: 'Beginner', completed: false, thumbnail: '👑', description: 'Prince Rama accepted 14 years of forest exile without bitterness, teaching the world about duty, acceptance, and grace.' },
  { id: '4', title: "Krishna and Sudama — True Friendship", category: 'Stories of Krishna', duration: '7 min', difficulty: 'Beginner', completed: false, thumbnail: '🦚', description: 'When the impoverished Brahmin Sudama visited his childhood friend Krishna, now a king, their bond proved that true friendship transcends wealth.' },
  { id: '5', title: "Bhishma's Terrible Vow", category: 'Mahabharata', duration: '15 min', difficulty: 'Intermediate', completed: false, thumbnail: '⚔️', description: 'Devavrata took a vow of lifelong celibacy for his father\'s happiness, earning the name Bhishma — a story of extreme sacrifice and its consequences.' },
  { id: '6', title: "Chanakya's Master Strategy", category: 'Chanakya Niti', duration: '11 min', difficulty: 'Advanced', completed: false, thumbnail: '🧠', description: 'How the scholar Chanakya, humiliated by the Nanda king, patiently built a strategy to install Chandragupta Maurya and unite India.' },
  { id: '7', title: "Ganesha Wins the Race Around the World", category: 'Stories of Ganesha', duration: '5 min', difficulty: 'Beginner', completed: true, thumbnail: '🐘', description: 'When challenged to race around the world, Ganesha simply circled his parents — proving that wisdom and devotion outweigh brute speed.' },
  { id: '8', title: "Draupadi's Courage in the Dice Hall", category: 'Mahabharata', duration: '13 min', difficulty: 'Intermediate', completed: false, thumbnail: '🔥', description: 'When Draupadi was humiliated in the Kaurava court, she stood her ground and questioned the elders, becoming a symbol of righteous defiance.' },
  { id: '9', title: 'The Monkey and the Crocodile', category: 'Panchatantra', duration: '6 min', difficulty: 'Beginner', completed: true, thumbnail: '🦁', description: 'A clever monkey outwits a crocodile who plots to steal his heart — a timeless fable about quick thinking and choosing friends wisely.' },
  { id: '10', title: "Vivekananda's Chicago Address of 1893", category: 'Indian Saints', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '🙏', description: 'How a 30-year-old monk from Calcutta electrified the World Parliament of Religions with "Sisters and brothers of America."' },
  { id: '11', title: "Abhimanyu and the Chakravyuha", category: 'Mahabharata', duration: '14 min', difficulty: 'Intermediate', completed: false, thumbnail: '🌀', description: 'The 16-year-old warrior entered a deadly military formation he could not exit, fighting alone against seasoned warriors — a story of raw courage and incomplete knowledge.' },
  { id: '12', title: "Shiva Drinks the Halahala Poison", category: 'Stories of Shiva', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '🔱', description: 'During the churning of the cosmic ocean, deadly poison emerged threatening all creation. Shiva drank it to save the world, his throat turning blue.' },
  { id: '13', title: "Eklavya's Devotion to Learning", category: 'Mahabharata', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '🎯', description: 'A tribal boy rejected by the royal teacher Drona mastered archery alone through sheer devotion — then paid the cruelest guru dakshina in history.' },
  { id: '14', title: "Karna — The Tragic Hero", category: 'Mahabharata', duration: '14 min', difficulty: 'Advanced', completed: false, thumbnail: '☀️', description: 'Born a prince but raised as a charioteer\'s son, Karna\'s life is a story of loyalty, generosity, and the devastating cost of identity denied.' },
  { id: '15', title: "Sita's Agni Pariksha — Trial by Fire", category: 'Ramayana', duration: '11 min', difficulty: 'Advanced', completed: false, thumbnail: '🔥', description: 'After being rescued from Ravana, Sita walked through fire to prove her purity — a moment that raises profound questions about justice and sacrifice.' },
  { id: '16', title: "Krishna Lifts Govardhan Hill", category: 'Stories of Krishna', duration: '7 min', difficulty: 'Beginner', completed: false, thumbnail: '⛰️', description: 'When young Krishna challenged Indra\'s authority, the rain god unleashed a devastating storm. Krishna lifted an entire mountain to shelter his village.' },
  { id: '17', title: "Savitri and Satyavan — Defeating Death", category: 'Mahabharata', duration: '12 min', difficulty: 'Intermediate', completed: false, thumbnail: '💀', description: 'Princess Savitri followed Yama, the god of death, and through sheer wit and devotion won back her husband\'s life — the ultimate story of love defeating fate.' },
  { id: '18', title: "Vibhishana's Moral Choice", category: 'Ramayana', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '⚖️', description: 'Ravana\'s own brother chose dharma over family loyalty, leaving Lanka to join Rama — teaching that righteousness sometimes means standing against your own.' },
  { id: '19', title: "The Blind Men and the Elephant", category: 'Panchatantra', duration: '5 min', difficulty: 'Beginner', completed: false, thumbnail: '🐘', description: 'Six blind men each touched a different part of an elephant and argued about its true nature — a timeless lesson about perspective and humility.' },
  { id: '20', title: "Nachiketa and the Secret of Death", category: 'Bhagavad Gita', duration: '13 min', difficulty: 'Advanced', completed: false, thumbnail: '🕯️', description: 'A fearless boy confronted Yama, the god of death, and refused gold, kingdoms, and immortality — demanding instead the ultimate knowledge of what lies beyond death.' },
  { id: '21', title: "Shiva as Ardhanarishvara", category: 'Stories of Shiva', duration: '7 min', difficulty: 'Beginner', completed: false, thumbnail: '☯️', description: 'Shiva merged with Parvati to become half-male, half-female — teaching that masculine and feminine energies are equal and inseparable halves of the whole.' },
  { id: '22', title: "Lakshmana's Unwavering Loyalty", category: 'Ramayana', duration: '9 min', difficulty: 'Beginner', completed: false, thumbnail: '🛡️', description: 'Rama\'s younger brother gave up his own palace life to serve and protect Rama in exile for 14 years — the gold standard of brotherly devotion and discipline.' },
  { id: '23', title: "Krishna's Vishwarupa — The Universal Form", category: 'Bhagavad Gita', duration: '10 min', difficulty: 'Advanced', completed: false, thumbnail: '🌌', description: 'When Arjuna asked to see Krishna\'s true nature, Krishna revealed a form containing all of creation — terrifying, beautiful, and infinite beyond comprehension.' },
  { id: '24', title: "The Tortoise and the Geese", category: 'Panchatantra', duration: '5 min', difficulty: 'Beginner', completed: false, thumbnail: '🐢', description: 'A talkative tortoise convinced two geese to carry him through the sky — but his inability to keep quiet led to his downfall. A lesson on when to speak and when to be silent.' },
  { id: '25', title: "Rani Padmavati's Supreme Sacrifice", category: 'Historical Inspirations', duration: '10 min', difficulty: 'Intermediate', completed: false, thumbnail: '🏰', description: 'When Alauddin Khilji besieged Chittor, Queen Padmavati chose death over dishonor, performing jauhar — a controversial but unforgettable act of defiance.' },
  { id: '26', title: "Guru Nanak's Journey to Mecca", category: 'Indian Saints', duration: '8 min', difficulty: 'Beginner', completed: false, thumbnail: '🙏', description: 'When told his feet were pointing toward the holy Kaaba, Guru Nanak replied: "Turn my feet in a direction where God does not exist." A lesson in universal divinity.' },
  { id: '27', title: "Vidura's Counsel to Dhritarashtra", category: 'Mahabharata', duration: '11 min', difficulty: 'Advanced', completed: false, thumbnail: '📖', description: 'The wisest advisor in Hastinapura repeatedly warned the blind king of coming destruction — a masterclass in ethical counsel that was tragically ignored.' },
  { id: '28', title: "Shabari's Berries — Devotion Beyond Form", category: 'Ramayana', duration: '6 min', difficulty: 'Beginner', completed: false, thumbnail: '🫐', description: 'An old tribal woman tasted each berry to ensure only the sweetest reached Rama. He accepted them with love — teaching that devotion matters more than ritual purity.' },
  { id: '29', title: "Krishna Teaches with a Butter Ball", category: 'Stories of Krishna', duration: '6 min', difficulty: 'Beginner', completed: false, thumbnail: '🧈', description: 'Young Krishna\'s famous butter-stealing wasn\'t mere mischief — it carries deep lessons about attachment, sharing, and the joy of divine play (Leela).' },
  { id: '30', title: "Kabir — The Weaver Poet of Truth", category: 'Indian Saints', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '🧵', description: 'Born into a Muslim weaver family, accepted by a Hindu guru, rejected by both communities — Kabir\'s dohas cut through religious pretension with razor wit.' },
  { id: '31', title: "Ravana's Ten Heads — The Scholar Demon", category: 'Ramayana', duration: '10 min', difficulty: 'Intermediate', completed: false, thumbnail: '👹', description: 'Ravana was not merely a villain — he was a scholar, musician, and devotee of Shiva. His downfall teaches that knowledge without humility becomes destruction.' },
  { id: '32', title: "The Four Friends and the Lion", category: 'Panchatantra', duration: '5 min', difficulty: 'Beginner', completed: false, thumbnail: '🦴', description: 'Three scholars used their knowledge to bring a dead lion back to life — while the one "fool" who climbed a tree survived. Book-smart without common sense can be fatal.' },
  { id: '33', title: "Chandragupta and the Poison Maiden", category: 'Chanakya Niti', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '🍷', description: 'Chanakya trained Chandragupta to be immune to poison by feeding him tiny doses daily — a story about preparation, patience, and building resilience gradually.' },
  { id: '34', title: "Yudhishthira's Dog at Heaven's Gate", category: 'Mahabharata', duration: '10 min', difficulty: 'Advanced', completed: false, thumbnail: '🐕', description: 'At the gates of heaven, Yudhishthira refused to enter without his loyal dog. His compassion for the weakest being was his final and greatest test.' },
  { id: '35', title: "Mirabai — Defying a Kingdom for Love", category: 'Indian Saints', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '🎶', description: 'A Rajput queen who gave up royalty to sing devotional songs to Krishna, surviving poison and persecution through unshakable faith and spiritual courage.' },
  { id: '36', title: "Durga Slays Mahishasura", category: 'Stories of Devi', duration: '10 min', difficulty: 'Intermediate', completed: false, thumbnail: '⚔️', description: 'When no god could defeat the shape-shifting buffalo demon, the combined energy of all deities created Goddess Durga — who did what none could do alone.' },
  { id: '37', title: "The Brahmin and the Mongoose", category: 'Panchatantra', duration: '6 min', difficulty: 'Beginner', completed: false, thumbnail: '🦎', description: 'A wife killed the family mongoose thinking it had harmed her baby — but the mongoose had saved the child from a snake. Acting on hasty assumptions destroys the innocent.' },
  { id: '38', title: "Ashoka's Transformation After Kalinga", category: 'Historical Inspirations', duration: '11 min', difficulty: 'Intermediate', completed: false, thumbnail: '☸️', description: 'After conquering Kalinga in a devastating war, Emperor Ashoka surveyed the battlefield of 100,000 dead — and was so horrified he renounced violence forever.' },
  { id: '39', title: "Hanuman Burns Lanka", category: 'Stories of Hanuman', duration: '8 min', difficulty: 'Beginner', completed: false, thumbnail: '🔥', description: 'When Ravana set Hanuman\'s tail ablaze as punishment, the monkey warrior turned the weapon against them — burning the golden city of Lanka to the ground.' },
  { id: '40', title: "Prahlad and Holika — Faith Against Fire", category: 'Stories of Devi', duration: '7 min', difficulty: 'Beginner', completed: false, thumbnail: '🪔', description: 'A young boy\'s unshakable faith in Vishnu protected him from his own father\'s attempts to kill him — even when placed in the lap of fire itself.' },
  { id: '41', title: "Chanakya's Rules for Choosing Friends", category: 'Chanakya Niti', duration: '7 min', difficulty: 'Intermediate', completed: false, thumbnail: '🤝', description: 'Chanakya\'s sharp maxims on friendship: test before you trust, judge by actions not words, and never share your deepest vulnerabilities with the untested.' },
  { id: '42', title: "Krishna as Diplomat — The Peace Mission", category: 'Mahabharata', duration: '12 min', difficulty: 'Advanced', completed: false, thumbnail: '🕊️', description: 'Before the great war, Krishna went to the Kaurava court as a peace envoy — offering every possible compromise. When all were rejected, war became dharma.' },
  { id: '43', title: "Adi Shankaracharya — The Boy Philosopher", category: 'Indian Saints', duration: '10 min', difficulty: 'Intermediate', completed: false, thumbnail: '📿', description: 'By age 32, Shankaracharya had traveled all of India on foot, defeated every philosophical opponent, established four monasteries, and united Hindu thought.' },
  { id: '44', title: "The Crow and the Water Pitcher", category: 'Panchatantra', duration: '4 min', difficulty: 'Beginner', completed: false, thumbnail: '🪨', description: 'A thirsty crow dropped pebbles into a pitcher until the water rose within reach — proving that persistence and creative thinking solve what brute force cannot.' },
  { id: '45', title: "Ganesha Writes the Mahabharata", category: 'Stories of Ganesha', duration: '6 min', difficulty: 'Beginner', completed: false, thumbnail: '✍️', description: 'Sage Vyasa needed a scribe who could write as fast as he could dictate. Ganesha agreed — with one clever condition that ensured the epic\'s depth.' },
  { id: '46', title: "Maharana Pratap's Last Stand", category: 'Historical Inspirations', duration: '11 min', difficulty: 'Intermediate', completed: false, thumbnail: '🐎', description: 'The Rajput king who refused to submit to Mughal rule, fighting from the hills of Mewar with his loyal horse Chetak — a story of resistance and undying pride.' },
  { id: '47', title: "Shiva and the Hunter — The First Shivaratri", category: 'Stories of Shiva', duration: '7 min', difficulty: 'Beginner', completed: false, thumbnail: '🌙', description: 'A hunter accidentally worshipped Shiva by staying awake all night in a bilva tree — teaching that sincerity matters more than intention in devotion.' },
  { id: '48', title: "Draupadi's Friendship with Krishna", category: 'Mahabharata', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '🪷', description: 'Their bond was neither romantic nor transactional — Krishna called Draupadi "Sakhi" (friend) and she was the one person who treated him as an equal, not a god.' },
  { id: '49', title: "Sati Anusuya — The Power of Virtue", category: 'Stories of Devi', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '✨', description: 'When the three great gods tested Anusuya\'s virtue by demanding she serve them unclothed, she turned them into infants — proving that a woman\'s power lies in her character.' },
  { id: '50', title: "Bhartrihari — The King Who Renounced", category: 'Indian Saints', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '👑', description: 'A king who discovered his beloved queen\'s betrayal renounced his throne to become a wandering philosopher — his poems on love, disillusion, and detachment endure.' },
  { id: '51', title: "Parashurama's Rage and Redemption", category: 'Historical Inspirations', duration: '10 min', difficulty: 'Intermediate', completed: false, thumbnail: '🪓', description: 'The warrior-sage who annihilated the Kshatriya class twenty-one times to avenge his father, then gave away all conquered lands — a study in righteous anger and its limits.' },
  { id: '52', title: "The Blue Jackal", category: 'Panchatantra', duration: '5 min', difficulty: 'Beginner', completed: false, thumbnail: '🐺', description: 'A jackal fell into a vat of blue dye and convinced the forest animals he was a divine king — until his own howl exposed him. You cannot fake identity forever.' },
  { id: '53', title: "Krishna and the Govardhan Lesson on Humility", category: 'Bhagavad Gita', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '🙏', description: 'Krishna taught that true worship is selfless service, not ritual sacrifice — challenging even the king of gods to rethink the purpose of devotion.' },
  { id: '54', title: "Subhadra's Daring Elopement", category: 'Mahabharata', duration: '7 min', difficulty: 'Beginner', completed: false, thumbnail: '💕', description: 'When family politics threatened her love for Arjuna, Krishna\'s sister Subhadra took matters into her own hands — a story of agency and defying convention.' },
  { id: '55', title: "Chanakya on Wealth and Contentment", category: 'Chanakya Niti', duration: '7 min', difficulty: 'Intermediate', completed: false, thumbnail: '💰', description: 'Chanakya taught that wealth is a tool, not a goal — accumulate wisely, spend judiciously, and never let money become your master.' },
  { id: '56', title: "Thiruvalluvar's Kural — Ethics in Two Lines", category: 'Indian Saints', duration: '8 min', difficulty: 'Intermediate', completed: false, thumbnail: '📝', description: 'The Tamil poet-saint who compressed all of life\'s wisdom into 1,330 two-line couplets covering virtue, wealth, and love — studied for over 2,000 years.' },
  { id: '57', title: "Jatayu's Sacrifice for Sita", category: 'Ramayana', duration: '8 min', difficulty: 'Beginner', completed: false, thumbnail: '🦅', description: 'The aged vulture king fought Ravana alone to save Sita, knowing he would lose. His sacrifice taught Rama that heroism has no age limit.' },
  { id: '58', title: "The Merchant and the Iron Scales", category: 'Panchatantra', duration: '5 min', difficulty: 'Beginner', completed: false, thumbnail: '⚖️', description: 'A merchant claimed mice ate his iron scales; a judge "lost" the merchant\'s son to an eagle. Absurd lies receive absurd justice — a lesson in reciprocity and honesty.' },
  { id: '59', title: "Parvati's Penance for Shiva", category: 'Stories of Shiva', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '🏔️', description: 'To win the ascetic Shiva as her husband, Parvati performed severe penances for years — proving that love backed by determination can move even the immovable.' },
  { id: '60', title: "Rani Lakshmibai — The Queen Who Fought", category: 'Historical Inspirations', duration: '10 min', difficulty: 'Intermediate', completed: false, thumbnail: '⚔️', description: 'The Queen of Jhansi strapped her infant son to her back and rode into battle against the British — becoming India\'s most iconic symbol of resistance.' },
  { id: '61', title: "Tulsidas and the Writing of Ramcharitmanas", category: 'Indian Saints', duration: '9 min', difficulty: 'Intermediate', completed: false, thumbnail: '📜', description: 'Mocked for writing the Ramayana in common Hindi rather than scholarly Sanskrit, Tulsidas made India\'s greatest epic accessible to millions — defying the gatekeepers of knowledge.' },
  { id: '62', title: "Yama and the Lesson of Time", category: 'Bhagavad Gita', duration: '8 min', difficulty: 'Advanced', completed: false, thumbnail: '⏳', description: 'The god of death teaches that time spares no one — kings, scholars, or warriors. Only dharma survives. A meditation on mortality and purposeful living.' },
];

export interface LessonContent {
  story: string;
  learningPoints: { title: string; description: string; icon: string }[];
  applications: { context: string; text: string }[];
  reflections: string[];
  quiz: { question: string; options: string[]; correct: number }[];
  takeaways: string[];
}

export const lessonContents: Record<string, LessonContent> = {
  '1': {
    story: `When Rama's wife Sita was abducted by the demon king Ravana and taken to the island of Lanka, the Vanara (monkey) army assembled at the southern tip of India. The vast ocean stretched before them — an impossible barrier. No one knew how to cross it.

Jambavan, the ancient bear king and wisest of the Vanaras, turned to Hanuman. He reminded Hanuman of something he had long forgotten — his true nature.

"You are the son of Vayu, the Wind God," Jambavan said. "As a child, you leaped toward the sun thinking it was a ripe fruit. You have the power to cross this ocean and more. You have simply forgotten who you are."

Hanuman had spent years in humble service, his extraordinary powers dormant, hidden even from himself. But as Jambavan's words sank in, a transformation began. Hanuman remembered. He felt the divine energy surge through him.

He climbed to the peak of Mount Mahendra. His body grew in size until he towered like a mountain himself. The earth trembled under his weight. With eyes blazing with determination and a thunderous roar that split the sky, he launched himself across the ocean.

The journey was not easy. The golden mountain Mainaka rose from the sea, offering him rest. Hanuman touched it gratefully but refused to stop — his mission was too important. The serpent-demoness Surasa opened her jaws wide to swallow him; Hanuman shrank to the size of a thumb, flew in and out of her mouth in an instant, satisfying her boon without losing a moment. When the shadow-grasping demoness Simhika tried to drag him down, he struck her with fierce precision.

Finally, Hanuman landed on the shores of Lanka. He had crossed a hundred yojanas of ocean — not because he gained new powers, but because he remembered the powers he always had.`,
    learningPoints: [
      { title: 'Forgotten Potential', description: 'Hanuman already had immense power — he had simply forgotten it. Many of us carry untapped abilities that lie dormant because no one has reminded us of our true capacity.', icon: '💎' },
      { title: 'The Power of a Mentor', description: 'Jambavan did not give Hanuman new strength. He simply reminded him of what was already there. A great mentor helps you see what you cannot see in yourself.', icon: '🧭' },
      { title: 'Courage Means Moving Forward', description: 'Hanuman faced Surasa, Simhika, and the vast unknown ocean. Courage is not the absence of obstacles — it is the refusal to be stopped by them.', icon: '🦁' },
      { title: 'Mission Over Comfort', description: 'When Mount Mainaka offered rest, Hanuman declined. When pursuing something meaningful, comfort can become the most dangerous distraction.', icon: '🎯' },
    ],
    applications: [
      { context: 'School & College', text: 'Before an exam or competition, self-doubt whispers "you can\'t." Remember Hanuman — you have prepared, you have the knowledge. Trust your preparation and take the leap. Sometimes all you need is someone to remind you of your own strength.' },
      { context: 'Career', text: 'Imposter syndrome makes professionals forget their accomplishments. Like Hanuman, you may need a "Jambavan moment" — a mentor, friend, or even a journal entry reminding you of what you have already overcome.' },
      { context: 'Relationships', text: 'Be someone\'s Jambavan. When a friend, sibling, or partner doubts themselves, your sincere words of belief can awaken strength they didn\'t know they had. The right words at the right time can change a life.' },
      { context: 'Business', text: 'Every startup faces an "ocean" — the gap between where you are and where you need to be. Hanuman teaches that you don\'t need to see the entire path. Take the leap, handle each obstacle as it comes, and refuse to rest until the mission is done.' },
    ],
    reflections: [
      'Think of a time when you doubted yourself but succeeded anyway. What triggered the shift from doubt to action?',
      'Who is the Jambavan in your life — the person who sees your potential even when you don\'t? Have you thanked them?',
      'What "ocean" are you currently afraid to cross? What would change if you truly believed you had the strength to leap?',
    ],
    quiz: [
      { question: 'Why had Hanuman forgotten his divine powers?', options: ['He was cursed by a sage in childhood', 'He was too humble and unaware of his own strength', 'He never had powers to begin with', 'Ravana stole his powers'], correct: 0 },
      { question: 'What did Jambavan do to help Hanuman?', options: ['Gave him a magical weapon', 'Carried him across the ocean', 'Reminded him of his forgotten abilities', 'Prayed to the gods for help'], correct: 2 },
      { question: 'Why did Hanuman refuse to rest on Mount Mainaka?', options: ['The mountain was an illusion', 'He was too proud to accept help', 'His mission to find Sita was more important than comfort', 'He was afraid of a trap'], correct: 2 },
      { question: 'What is the key life lesson from this story?', options: ['Physical strength is the most important quality', 'We often have more potential than we realize', 'It is better to work alone than with others', 'Success requires supernatural powers'], correct: 1 },
    ],
    takeaways: [
      'You likely have more ability than you realize — self-doubt hides your potential',
      'A mentor\'s role is not to give you power, but to help you remember your own',
      'Obstacles are not stop signs — they are tests of your commitment',
      'When the mission matters, refuse the temptation of comfortable rest',
    ],
  },
  '2': {
    story: `The great war of Kurukshetra was about to begin. Two massive armies faced each other on the battlefield — the Kauravas and the Pandavas. Arjuna, the greatest archer of his age, asked his charioteer Krishna to drive his chariot between the two armies so he could survey the enemy.

But as Arjuna looked across the battlefield, his heart sank. He saw not enemies, but family. There stood his grandfather Bhishma, who had bounced him on his knee as a child. There was his beloved teacher Dronacharya, who had taught him everything he knew about archery. His cousins, uncles, friends — all arrayed against him.

Arjuna's legendary bow, the Gandiva, slipped from his trembling hands. His mouth went dry. His body shook.

"I cannot do this, Krishna," he said, his voice breaking. "What good is a kingdom won by killing my own family? I would rather beg for food than rule a throne stained with their blood. I will not fight."

He collapsed in his chariot, overwhelmed by grief and confusion.

This was the moment Krishna had been waiting for — not to force Arjuna to fight, but to teach him the deepest truths of existence. What followed was the Bhagavad Gita, a conversation that would illuminate humanity for millennia.

Krishna did not dismiss Arjuna's compassion. Instead, he addressed each layer of his confusion. He explained that the soul (Atman) is eternal — it cannot be killed or destroyed. "Just as a person casts off worn-out clothes and puts on new ones, the soul casts off worn-out bodies," Krishna said.

But Krishna went deeper. He spoke of Dharma — Arjuna's sacred duty as a warrior. Walking away from a righteous battle would not be peace — it would be cowardice disguised as compassion. The Kauravas had stolen a kingdom, humiliated Draupadi, and tried to murder the Pandavas. Justice demanded action.

Krishna then revealed the most profound teaching: "You have the right to perform your duty, but you are not entitled to the fruits of your actions. Do not let the fruit of action be your motive, nor let your attachment be to inaction." (Chapter 2, Verse 47)

This was the teaching of Nishkama Karma — selfless action performed without attachment to results. Do your duty because it is right, not because of what you will gain.

Arjuna's confusion slowly cleared. He picked up the Gandiva, stood tall in his chariot, and prepared to fulfill his dharma — not with hatred, but with clarity, compassion, and a deep understanding of his purpose.`,
    learningPoints: [
      { title: 'Compassion vs. Weakness', description: 'Arjuna\'s hesitation came from genuine love for his family. But Krishna showed him that avoiding necessary action out of emotional attachment is not compassion — it is a failure of duty. True compassion sometimes requires hard choices.', icon: '💔' },
      { title: 'Selfless Action (Nishkama Karma)', description: 'Do your duty because it is right — not for reward, praise, or success. This is the central teaching of the Gita. Detach from outcomes, attach to effort.', icon: '🧘' },
      { title: 'Clarity Through Guidance', description: 'Arjuna did not overcome his crisis alone. He surrendered to Krishna\'s wisdom. In moments of deep confusion, seeking guidance from those wiser than us is not weakness — it is wisdom.', icon: '🌟' },
      { title: 'Dharma Over Emotion', description: 'When personal feelings conflict with what is just and right, the Gita teaches that dharma must prevail. Inaction in the face of injustice is itself a form of injustice.', icon: '⚖️' },
    ],
    applications: [
      { context: 'School & College', text: 'When you feel overwhelmed before a difficult exam or a major decision (which stream to choose, whether to take a stand against bullying), remember Arjuna. Confusion is natural, but clarity comes when you focus on what is right rather than what is comfortable.' },
      { context: 'Career', text: 'The teaching of Nishkama Karma is revolutionary for professionals. Focus on doing excellent work, not on promotions, raises, or recognition. When you detach from outcomes and pour yourself into the process, paradoxically, success follows.' },
      { context: 'Relationships', text: 'Sometimes doing the right thing means having difficult conversations — confronting a friend\'s harmful behavior, setting boundaries with family. Arjuna\'s dilemma teaches that avoiding conflict is not the same as keeping peace.' },
      { context: 'Business', text: 'Leaders often face "Arjuna moments" — decisions where every option has a cost. The Gita\'s teaching is clear: focus on your dharma (your responsibility), act with integrity, and do not be paralyzed by the fear of imperfect outcomes.' },
    ],
    reflections: [
      'Have you ever avoided doing the right thing because it was emotionally painful? What was the cost of that inaction?',
      'Think about your work or studies. Are you primarily motivated by results (grades, salary, praise) or by the quality of your effort? How might shifting focus change your experience?',
      'When you face confusion, who is your "Krishna" — the person or practice that helps you find clarity?',
    ],
    quiz: [
      { question: 'Why did Arjuna refuse to fight at Kurukshetra?', options: ['He was afraid of losing', 'He saw his family, teachers, and loved ones on the opposing side', 'He disagreed with the war strategy', 'He wanted to negotiate peace first'], correct: 1 },
      { question: 'What is "Nishkama Karma" as taught in the Bhagavad Gita?', options: ['Fighting without weapons', 'Performing duty without attachment to results', 'Avoiding all action and living in isolation', 'Praying before every action'], correct: 1 },
      { question: 'What did Krishna say about the soul (Atman)?', options: ['It dies with the body', 'It is eternal and cannot be destroyed', 'It exists only in holy people', 'It can be transferred to another person'], correct: 1 },
      { question: 'What is the Gita\'s position on inaction during injustice?', options: ['Inaction is always the safest choice', 'One should wait for divine intervention', 'Inaction in the face of injustice is itself a form of injustice', 'Silence is always golden'], correct: 2 },
    ],
    takeaways: [
      'Confusion before major decisions is natural and human — even the greatest warriors experience it',
      'Focus on effort and duty, not on outcomes — this is the path to both inner peace and excellence',
      'True compassion sometimes requires difficult action, not comfortable avoidance',
      'Seeking guidance in moments of crisis is a sign of wisdom, not weakness',
    ],
  },
  '3': {
    story: `King Dasharatha of Ayodhya had decided to crown his eldest son Rama as the heir to the throne. The entire kingdom was celebrating. Garlands hung from every door, the streets were washed and decorated, and the people of Ayodhya could not contain their joy.

But inside the palace, a storm was brewing. Queen Kaikeyi — Dasharatha's second wife and mother of prince Bharata — had been poisoned by the whispers of her maid Manthara. Years ago, Dasharatha had promised Kaikeyi two boons for saving his life in battle. She had never claimed them. Now, Manthara convinced her to demand them: first, that Bharata be crowned king instead of Rama; second, that Rama be banished to the forest for fourteen years.

When Dasharatha heard these demands, he collapsed. He begged, wept, offered his life — anything but losing his beloved Rama. But he was bound by his word.

When Rama learned of the situation, he did not argue. He did not protest. He did not blame Kaikeyi or rage against fate. He calmly accepted the exile, saying, "A father's word is sacred. If my going to the forest will preserve his honor and his truth, I go happily."

His wife Sita insisted on accompanying him. "Your joy is my joy. Your hardship is my hardship," she said. His brother Lakshmana, burning with anger at the injustice, also refused to stay behind.

Rama walked out of the palace — from silk robes to bark cloth, from a golden throne to the forest floor. The people of Ayodhya lined the streets, weeping. Many followed him into the forest, sleeping on the road wherever he rested.

In the forest, Rama never complained. He never spoke ill of Kaikeyi. When Bharata himself came to the forest, begging Rama to return and rule, Rama gently refused. "Our father gave his word. I will honor it completely." Bharata, equally noble, refused to sit on the throne. He placed Rama's sandals on it and ruled as a regent, waiting fourteen years for his brother's return.

Rama's exile was not a defeat. It became the stage for his greatest deeds — his alliance with the Vanaras, the defeat of Ravana, and the rescue of Sita. What seemed like cruel injustice became the foundation of his legend.`,
    learningPoints: [
      { title: 'Grace Under Injustice', description: 'Rama did not receive fair treatment. But he chose dignity over bitterness. How we respond to injustice defines our character more than the injustice itself.', icon: '🕊️' },
      { title: 'Honoring Commitments', description: 'Dasharatha\'s promise was sacred even when it was painful. Rama upheld it not out of blind obedience, but because he understood that a society built on broken words eventually crumbles.', icon: '🤝' },
      { title: 'Adversity as Opportunity', description: 'The exile that seemed like punishment became the path to Rama\'s greatest achievements. Some of life\'s most important journeys begin with unwanted detours.', icon: '🌱' },
      { title: 'The Power of Composure', description: 'While everyone around him — Lakshmana, the citizens, even his father — was overwhelmed by emotion, Rama remained composed. Calm in chaos is a hallmark of true strength.', icon: '🏔️' },
    ],
    applications: [
      { context: 'School & College', text: 'When you are treated unfairly — a biased grade, being passed over for an opportunity, social exclusion — notice how you respond. Rama teaches that grace under pressure earns more respect than angry reaction. Prove your worth through your actions, not your protests.' },
      { context: 'Career', text: 'Job loss, being passed over for promotion, office politics — these are modern exiles. Rama\'s story teaches that setbacks can redirect us toward our true path. Many of the world\'s greatest entrepreneurs and leaders point to their lowest moments as turning points.' },
      { context: 'Relationships', text: 'Sita\'s choice to accompany Rama into hardship is a profound lesson about partnership. True relationships are tested not in comfort but in adversity. And Bharata\'s loyalty shows that love doesn\'t require proximity — it requires honor.' },
      { context: 'Business', text: 'Businesses face "exile" moments — market downturns, lost clients, public failures. Rama\'s example shows that maintaining composure, upholding values, and continuing to act with integrity during difficult times builds the foundation for eventual triumph.' },
    ],
    reflections: [
      'Think of a time when something unfair happened to you. How did you respond? Looking back, would Rama have responded differently?',
      'Have you ever experienced a setback that later turned out to be a hidden blessing? What did the detour teach you?',
      'How do you maintain composure when emotions are running high around you? What practices or beliefs help you stay grounded?',
    ],
    quiz: [
      { question: 'What two boons did Kaikeyi demand from King Dasharatha?', options: ['Gold and land', 'Crown Bharata as king and exile Rama for 14 years', 'A new palace and an army', 'Exile Lakshmana and Sita'], correct: 1 },
      { question: 'How did Rama respond to the news of his exile?', options: ['He fought against the decision', 'He accepted it calmly to honor his father\'s word', 'He asked Krishna for help', 'He fled Ayodhya secretly'], correct: 1 },
      { question: 'What did Bharata do when he learned about Rama\'s exile?', options: ['He celebrated becoming king', 'He went to the forest and begged Rama to return, then ruled as regent', 'He joined Ravana\'s army', 'He left Ayodhya forever'], correct: 1 },
      { question: 'What is the deeper lesson of Rama\'s exile?', options: ['Always obey without question', 'Adversity can become the foundation for your greatest achievements', 'Avoid making promises', 'Never trust family members'], correct: 1 },
    ],
    takeaways: [
      'How you respond to injustice defines your character more than the injustice itself',
      'Keeping your word — even when it is painful — is the foundation of trust',
      'Life\'s most unwanted detours can lead to your most important destinations',
      'Composure in the face of chaos is the mark of true inner strength',
    ],
  },
  '4': {
    story: `Sudama (also called Kuchela) was a poor Brahmin who had studied alongside Krishna at the ashram of Guru Sandipani. While Krishna went on to become the king of Dwaraka, Sudama lived in grinding poverty. His family often went hungry. His clothes were threadbare. Yet he never once asked anyone for help.

One day, Sudama's wife — watching their children go to sleep hungry again — gathered her courage. "Your childhood friend Krishna is now the king of Dwaraka," she said gently. "Why don't you visit him? Not to beg, but simply to meet an old friend. Perhaps something good will come of it."

Sudama resisted at first. How could he, in his torn clothes, approach the golden palace of Dwaraka? But his wife persisted, and eventually Sudama agreed. She borrowed a handful of flattened rice (poha) from a neighbor — the only gift she could manage — and tied it in a torn piece of cloth.

The journey to Dwaraka was long. When Sudama arrived at the magnificent golden gates of Krishna's palace, the guards looked at the dusty, barefoot Brahmin with suspicion. But when Krishna heard that Sudama was at the gate, he leaped from his throne and ran.

Krishna embraced Sudama with tears in his eyes. He personally washed Sudama's cracked, dusty feet. He seated his old friend on his own royal couch. Queen Rukmini fanned him with a golden fan.

"What have you brought me?" Krishna asked with a mischievous smile, spotting the small bundle Sudama was trying to hide behind his back. Embarrassed, Sudama tried to keep the humble poha hidden — how could he offer flattened rice to a king? But Krishna snatched the bundle, opened it, and ate the poha with such delight that you would think it was the finest feast in the world.

"There is no gift greater than one given with love," Krishna said.

Sudama spent the day reliving old memories with Krishna — their days at the ashram, the time they went to collect firewood and got caught in a storm, their shared meals. They laughed and talked as if the years of separation had never happened.

When Sudama left, he was too proud to ask for anything, and Krishna did not offer anything openly. Sudama walked home thinking the visit was its own reward — the joy of reuniting with a true friend.

But as he approached his village, he could not find his old hut. In its place stood a beautiful home. His wife, dressed in fine clothes, came running out with their children — healthy, fed, smiling. Krishna had quietly transformed their lives without making Sudama feel like a charity case.

True friendship does not keep score. It does not require asking. It sees the need and acts with love and respect for the other's dignity.`,
    learningPoints: [
      { title: 'True Friendship Transcends Status', description: 'Krishna, a king, ran barefoot to greet his poor friend. Sudama, a pauper, never felt inferior in Krishna\'s presence. Real friendship exists beyond the walls of wealth and position.', icon: '🤗' },
      { title: 'The Value of a Humble Gift', description: 'A handful of poha given with love meant more to Krishna than all the gold in Dwaraka. The value of a gift lies not in its price but in the love behind it.', icon: '🎁' },
      { title: 'Giving Without Diminishing', description: 'Krishna helped Sudama without making him feel small. He didn\'t give publicly, didn\'t lecture about gratitude, and preserved his friend\'s dignity. This is the highest form of generosity.', icon: '✨' },
      { title: 'Pride vs. Dignity', description: 'Sudama\'s wife showed practical wisdom in suggesting the visit. Sudama\'s hesitation shows how pride can prevent us from receiving what we need. There is a difference between healthy dignity and harmful pride.', icon: '🪞' },
    ],
    applications: [
      { context: 'School & College', text: 'Do you treat your friends differently based on their economic background? Krishna\'s behavior is a model — run to greet old friends with the same warmth regardless of what they own. The friendships you build now, based on genuine affection rather than status, are the ones that will last a lifetime.' },
      { context: 'Career', text: 'As you grow in your career, remember Sudama. Don\'t lose touch with people who knew you before success. And when you\'re in a position to help, do so in a way that preserves the other person\'s dignity — offer opportunities, not charity.' },
      { context: 'Relationships', text: 'In any relationship, the greatest gift is presence and attention. Krishna dropped everything to be with Sudama. In a world of constant distraction, giving someone your full, undivided attention is the modern equivalent of washing their feet.' },
      { context: 'Business', text: 'The best business relationships, like Krishna and Sudama\'s friendship, are built on genuine respect rather than transactional exchange. Help your clients and partners without keeping score, and the returns will far exceed any invoice.' },
    ],
    reflections: [
      'Think of a friendship that has faded due to differences in status or geography. What would it take to reach out, like Sudama, and reconnect?',
      'When you help someone, do you do it in a way that preserves their dignity? Or does your help sometimes come with strings attached?',
      'Have you ever been too proud to accept help when you needed it? What was the cost of that pride?',
    ],
    quiz: [
      { question: 'What gift did Sudama bring for Krishna?', options: ['Gold coins', 'Precious gems', 'A handful of flattened rice (poha)', 'A rare scripture'], correct: 2 },
      { question: 'How did Krishna react when he saw Sudama at the palace gates?', options: ['He sent servants to greet him', 'He ran out personally and embraced him', 'He was too busy and asked Sudama to wait', 'He did not recognize him'], correct: 1 },
      { question: 'How did Krishna help Sudama?', options: ['He gave him bags of gold in front of the court', 'He offered him a job in the palace', 'He quietly transformed his home without making Sudama ask or feel small', 'He lectured Sudama about working harder'], correct: 2 },
      { question: 'What does this story teach about true generosity?', options: ['Always give publicly so others can see', 'Help others while preserving their dignity', 'Only help people who ask for it', 'Generosity should always be repaid'], correct: 1 },
    ],
    takeaways: [
      'True friendship is immune to differences in wealth, status, or time apart',
      'The most precious gifts are those given with love, not those with the highest price',
      'The highest form of generosity preserves the receiver\'s dignity',
      'Don\'t let pride prevent you from reconnecting with those who matter',
    ],
  },
  '5': {
    story: `Long ago, King Shantanu of Hastinapura fell deeply in love with Satyavati, a fisherman's daughter. When Shantanu asked Satyavati's father for her hand in marriage, the fisherman made a devastating demand: only Satyavati's sons could inherit the throne of Hastinapura.

This was impossible — Shantanu already had a son. Devavrata, his firstborn, was the crown prince: brilliant in warfare, learned in scriptures, and beloved by all. The king could not disinherit such a worthy heir.

Shantanu returned to his palace, heartbroken and silent. He could not bring himself to ask his son for such a sacrifice. But Devavrata noticed his father's sorrow. When he discovered the reason, the young prince went straight to the fisherman's hut.

"I, Devavrata, renounce my claim to the throne of Hastinapura," he declared. "The sons of Satyavati shall rule."

But the fisherman was shrewd. "What if your children claim the throne someday?" he asked.

Without hesitation, Devavrata made the most fearsome vow in the history of the epics: "I shall never marry. I shall remain celibate for the rest of my life. I will have no children, no heir, no claim."

The sky thundered. The gods showered flowers. Even the heavens trembled at the enormity of this sacrifice. From that day, Devavrata was called Bhishma — "he of the terrible vow."

For the rest of his extraordinarily long life, Bhishma kept his word. He served the throne of Hastinapura through generations — watching kings rise and fall, enduring injustice and heartbreak, never once sitting on the throne he had earned. He watched the Kaurava princes commit terrible wrongs. He watched Draupadi being humiliated in the court. He was bound by his vow of service to the throne, even when the throne was occupied by those unworthy of it.

On the battlefield of Kurukshetra, the ancient warrior finally fell — pierced by countless arrows, his body resting on a bed of shafts. Even then, he chose the moment of his death, waiting for the auspicious time. His last teachings to Yudhishthira on dharma, governance, and wisdom — delivered from that bed of arrows — remain among the most profound passages in the Mahabharata.

Bhishma's life raises a profound question: Was his sacrifice noble or tragic? He gave up everything for his father's happiness, but the consequences of his vow echoed through generations. His story teaches us that even the most selfless actions can have complex, unintended consequences.`,
    learningPoints: [
      { title: 'Sacrifice and Its Consequences', description: 'Bhishma\'s sacrifice was born of pure love for his father. But it set in motion a chain of events — succession crises, wars — that he never intended. Even noble sacrifices should be weighed against their long-term consequences.', icon: '⚖️' },
      { title: 'The Weight of a Promise', description: 'Once spoken, Bhishma\'s vow could never be taken back. He honored it for a lifetime, through joy and suffering alike. A promise, once given, becomes part of who you are.', icon: '💎' },
      { title: 'Duty vs. Morality', description: 'Bhishma witnessed injustice — the humiliation of Draupadi, the scheming of Duryodhana — but felt bound by his vow to serve the throne. His story asks: when does loyalty become complicity?', icon: '🔥' },
      { title: 'The Complexity of Virtue', description: 'Bhishma was undeniably virtuous, yet his story is tragic. This teaches us that life is rarely simple — even good people can be trapped by the consequences of their choices.', icon: '🌊' },
    ],
    applications: [
      { context: 'School & College', text: 'Sometimes we make commitments — to a friend, a club, a project — that we later realize have larger consequences than we expected. Bhishma\'s story teaches the importance of thinking deeply before making major commitments, even when the immediate motivation is love or loyalty.' },
      { context: 'Career', text: 'Loyalty to a company or leader is admirable, but not when it requires you to silently witness wrongdoing. Bhishma\'s greatest regret was his silence during Draupadi\'s humiliation. In the workplace, knowing when to speak up — even at personal cost — is a form of courage.' },
      { context: 'Relationships', text: 'Parents sometimes sacrifice too much for their children, and vice versa. Bhishma\'s story reminds us to ask: does this sacrifice truly serve everyone involved, or does it create an unsustainable burden?' },
      { context: 'Business', text: 'Founders often make "Bhishma vows" — extreme commitments that define their companies. While conviction is essential, rigidity can be dangerous. Great leaders know when to honor their commitments and when to adapt.' },
    ],
    reflections: [
      'Do you think Bhishma\'s vow was wise or excessive? Could he have found a way to make his father happy without such an extreme sacrifice?',
      'Have you ever stayed silent when you witnessed something wrong, out of loyalty or obligation? What would you do differently?',
      'What commitments have you made that shape your daily life? Are they still serving you, or have they become cages?',
    ],
    quiz: [
      { question: 'Why did Devavrata renounce the throne?', options: ['He was defeated in battle', 'So his father could marry Satyavati', 'He wanted to become a monk', 'He was exiled by a curse'], correct: 1 },
      { question: 'What was the "terrible vow" that earned him the name Bhishma?', options: ['To destroy all enemies of Hastinapura', 'To never eat or sleep', 'To remain celibate for life so his descendants could never claim the throne', 'To serve in the army forever'], correct: 2 },
      { question: 'What moral complexity does Bhishma\'s story illustrate?', options: ['Good people always have happy endings', 'Even noble sacrifices can have tragic, unintended consequences', 'Following rules guarantees success', 'Loyalty is never problematic'], correct: 1 },
      { question: 'What did Bhishma do on his deathbed of arrows?', options: ['He cursed the Pandavas', 'He taught Yudhishthira about dharma and governance', 'He tried to escape the battlefield', 'He asked for the throne back'], correct: 1 },
    ],
    takeaways: [
      'Noble sacrifices deserve careful thought — consider the long-term ripple effects',
      'A promise is powerful, but rigidity in the face of changing circumstances can be harmful',
      'Silence in the face of injustice, even out of loyalty, carries its own moral weight',
      'Life\'s greatest questions rarely have simple answers — embrace the complexity',
    ],
  },
  '6': {
    story: `In the 4th century BCE, a brilliant Brahmin scholar named Vishnugupta — later known as Chanakya or Kautilya — arrived at the court of the Nanda dynasty in Pataliputra. He was a professor at the legendary university of Takshashila, known across the ancient world for his razor-sharp intellect.

The Nanda king, Dhana Nanda, was powerful but arrogant and corrupt. His treasury was vast, built on the backs of overtaxed citizens. When Chanakya appeared at court — thin, dark-skinned, with a prominent topknot — Dhana Nanda laughed at his appearance and had him thrown out.

As Chanakya was dragged from the court, he loosened his shikha (topknot) and made a vow: "I will not tie this knot again until the Nanda dynasty is destroyed and replaced with a just ruler."

Lesser men would have nursed their wounded pride and done nothing. Chanakya was not a lesser man. He retreated, observed, planned, and waited.

He searched for a worthy candidate to become king and found him in the most unlikely place — a young boy named Chandragupta Maurya, playing "king of the hill" with village children. Chanakya saw in this boy the raw material of an emperor.

He took Chandragupta to Takshashila and trained him — not just in warfare, but in governance, diplomacy, economics, and strategy. Every lesson was designed to prepare the boy for the monumental task ahead.

Chanakya's first attempt to overthrow the Nandas failed. He attacked the capital directly and was defeated. Another man might have given up. But Chanakya, observing a mother scolding her child for eating the hot center of a roti instead of starting from the cooler edges, had an insight: "Start from the edges, not the center."

He changed his strategy entirely. Instead of attacking Pataliputra, he began liberating border regions, building alliances, winning hearts. Province by province, the Nanda empire was weakened from the outside in.

When Chandragupta's army finally reached Pataliputra, the Nanda dynasty collapsed. Chandragupta Maurya was crowned emperor — the founder of the Maurya Empire, one of the largest and most powerful empires in Indian history.

Chanakya became his chief advisor but never took wealth or luxury for himself. He continued living in a simple hut, writing the Arthashastra — a treatise on statecraft, economics, and strategy that is studied to this day. He had tied his topknot again.`,
    learningPoints: [
      { title: 'Patience is a Strategic Weapon', description: 'Chanakya did not react impulsively to humiliation. He took years to prepare. In a world obsessed with instant results, his story teaches that the most powerful responses are often the slowest and most deliberate.', icon: '⏳' },
      { title: 'Learn from Failure', description: 'His first attempt to topple the Nandas failed completely. But the failure taught him the crucial "start from the edges" strategy that ultimately succeeded. Failure is not the opposite of success — it is the research phase.', icon: '🔄' },
      { title: 'See Potential in the Unlikely', description: 'A village boy playing games became an emperor because one person saw his potential. Chanakya teaches that talent is everywhere — the rare skill is the ability to recognize and nurture it.', icon: '👁️' },
      { title: 'Power Without Personal Gain', description: 'Chanakya built an empire but kept nothing for himself. His goal was justice, not wealth. True power lies in what you enable, not what you accumulate.', icon: '🏛️' },
    ],
    applications: [
      { context: 'School & College', text: 'If you fail an exam or face rejection, remember Chanakya\'s first failed attack. Analyze what went wrong, adjust your approach, and try again from a different angle. The lesson from the roti applies to everything — sometimes you need to start from the edges, building smaller skills before tackling the big challenge.' },
      { context: 'Career', text: 'Chanakya\'s career was born from humiliation. Many successful people were fired, rejected, or mocked early in their journeys. Use setbacks as fuel for strategic reinvention, not as reasons to quit.' },
      { context: 'Relationships', text: 'Chanakya saw the emperor in a village boy. In your relationships, practice seeing the best in people — their potential, not just their current state. The encouragement and training you give someone might help them become who they were meant to be.' },
      { context: 'Business', text: 'The "start from the edges" strategy is pure business gold. Don\'t try to compete with industry giants head-on. Start in underserved markets, build your base, prove your model, and then expand. This is exactly how companies like Amazon and Flipkart grew.' },
    ],
    reflections: [
      'Think of a failure or rejection you experienced. With Chanakya\'s mindset, how could you reframe that experience as a learning opportunity?',
      'Have you ever seen extraordinary potential in someone that others missed? Did you act on that insight?',
      'What is your "roti strategy" — where in your life should you stop attacking the center and start from the edges instead?',
    ],
    quiz: [
      { question: 'Why did Chanakya vow to destroy the Nanda dynasty?', options: ['They stole his property', 'King Dhana Nanda humiliated and expelled him from court', 'They attacked Takshashila', 'He wanted to become king himself'], correct: 1 },
      { question: 'What lesson did Chanakya learn from the mother and the roti?', options: ['Always eat slowly', 'Start from the edges, not the center — weaken the periphery first', 'Food should be shared equally', 'Mothers are the best strategists'], correct: 1 },
      { question: 'What did Chanakya do after helping Chandragupta become emperor?', options: ['He crowned himself co-emperor', 'He lived simply and wrote the Arthashastra', 'He retired to a palace', 'He started a new war'], correct: 1 },
      { question: 'What is the key leadership lesson from Chanakya?', options: ['React immediately to insults', 'Patience, strategic planning, and learning from failure lead to lasting success', 'Only educated people can be leaders', 'Physical strength determines success'], correct: 1 },
    ],
    takeaways: [
      'The most powerful response to humiliation is not revenge — it is strategic success',
      'Failure is feedback. Analyze it, adapt, and attack from a new angle',
      'True leadership means seeing potential in others and helping them rise',
      'The "start from the edges" strategy applies to any seemingly impossible goal',
    ],
  },
  '7': {
    story: `One day, Lord Shiva and Goddess Parvati presented their two sons — Ganesha and Kartikeya — with a challenge. "Whoever circles the entire world three times and returns first," they said, "will receive a divine fruit of supreme knowledge."

Kartikeya, the god of war, was confident. He was athletic, swift, and rode the fastest peacock in the heavens. Without a moment's hesitation, he mounted his peacock and soared into the sky, racing around the earth at tremendous speed.

Ganesha watched his brother disappear into the horizon. He looked at his own mount — a small mouse named Mushika. Then he looked at himself — his round, heavy body was not built for racing. By all physical measures, this contest was already lost.

But Ganesha did not compete on physical terms. He had a different kind of intelligence.

Ganesha calmly walked over to his parents, Shiva and Parvati, who were seated together. With deep love and reverence, he slowly circled them — once, twice, three times. Then he bowed and said:

"My parents are my world. All the sacred rivers, all the holy mountains, all the knowledge of all the scriptures — everything is contained in my mother and father. By circling them, I have circled the entire universe."

Shiva and Parvati smiled with tears of joy. By the time Kartikeya returned — exhausted from his physical journey — the fruit had already been given to Ganesha.

This was not a trick. Ganesha genuinely understood something his brother had missed: that the essence of the world is not its geography but the love and wisdom at its center. He competed not with muscle but with insight.

The story has a nuanced ending in some versions: Kartikeya, hurt by what he felt was unfair judgment, left for the Palani Hills in the south of India. This adds another layer — even wise judgments can cause pain, and wisdom must always be accompanied by compassion.`,
    learningPoints: [
      { title: 'Intelligence Over Speed', description: 'Ganesha couldn\'t win a physical race, so he changed the game entirely. Real intelligence is not about being the fastest or strongest — it is about understanding the deeper meaning of the challenge.', icon: '🧠' },
      { title: 'Know Your Strengths', description: 'Ganesha did not try to be Kartikeya. He did not pretend he could fly fast or ride swiftly. He played to his own strength — wisdom and devotion. Self-awareness is the foundation of all strategy.', icon: '🪞' },
      { title: 'Reframe the Problem', description: 'The challenge was to "circle the world." Most people would take this literally. Ganesha reframed it: what IS the world? This ability to redefine a problem is perhaps the most valuable skill in any field.', icon: '🔄' },
      { title: 'Wisdom Includes Compassion', description: 'Kartikeya\'s pain in some versions of the story reminds us that even correct answers can hurt others. Being right is not enough — true wisdom considers the feelings of everyone involved.', icon: '💝' },
    ],
    applications: [
      { context: 'School & College', text: 'In exams and competitions, the winner is not always the one who works hardest — it\'s the one who works smartest. Before diving into a problem, take a moment to ask: Is there a simpler, more elegant solution? Am I interpreting this challenge in the most creative way?' },
      { context: 'Career', text: 'Many professionals exhaust themselves trying to compete on others\' terms — working longer hours, attending more meetings. Ganesha\'s approach says: stop. What is the real goal here? Is there a fundamentally different way to achieve it that plays to YOUR unique strengths?' },
      { context: 'Relationships', text: 'Ganesha\'s circling of his parents was an act of pure love and recognition. In our busy lives, we sometimes race around the world — for money, success, adventure — while the people who mean the most are right in front of us.' },
      { context: 'Business', text: 'Innovation is often not about building something new — it\'s about reframing the problem. Ganesha would make an excellent product designer. When your competitors are racing to add more features, sometimes the winning move is to simplify and ask: what does the customer REALLY need?' },
    ],
    reflections: [
      'In what area of your life are you trying to compete on someone else\'s terms? What would it look like to "change the game" like Ganesha?',
      'Think of a problem you\'re currently facing. Can you reframe it? Is the obvious interpretation the only one?',
      'Who are the "parents" in your life — the people who represent your whole world? When was the last time you circled them with love and attention?',
    ],
    quiz: [
      { question: 'What was the challenge given by Shiva and Parvati?', options: ['A test of strength', 'Circle the world three times — first to return wins', 'A battle between Ganesha and Kartikeya', 'A riddle-solving contest'], correct: 1 },
      { question: 'How did Ganesha solve the challenge?', options: ['He used magic to teleport around the world', 'He rode his mouse very fast', 'He circled his parents, saying they represent his whole world', 'He asked the gods to slow down Kartikeya'], correct: 2 },
      { question: 'What does Ganesha\'s solution demonstrate?', options: ['That cheating is acceptable', 'That intelligence and creative thinking can overcome physical limitations', 'That physical strength is useless', 'That parents should always favor the weaker child'], correct: 1 },
      { question: 'What nuance does Kartikeya\'s reaction add to the story?', options: ['Physical effort is always wasted', 'Even wise outcomes can cause pain — compassion must accompany wisdom', 'Competition between siblings is always harmful', 'Kartikeya was wrong to feel hurt'], correct: 1 },
    ],
    takeaways: [
      'Don\'t compete on others\' terms — find your unique advantage',
      'Reframing the question is often more powerful than optimizing the answer',
      'Self-awareness of your strengths (and limitations) is the beginning of strategy',
      'The people closest to you may be more valuable than anything the world offers',
    ],
  },
  '8': {
    story: `After Yudhishthira, the eldest Pandava, lost everything in a rigged game of dice — his kingdom, his wealth, his brothers, even himself — Duryodhana, drunk with triumph, demanded one final humiliation. "Bring Draupadi to the court," he ordered. "She too was wagered and lost."

Draupadi was dragged into the royal assembly by her hair. The hall was full of elders, warriors, kings, and scholars — the most powerful men of the age. Bhishma, the patriarch, sat silent. Dronacharya, the royal teacher, looked away. Vidura protested but was overruled.

Duryodhana's brother Dushasana grabbed Draupadi's sari and attempted to disrobe her before the entire court. In that moment of absolute horror and vulnerability, Draupadi did what the warriors around her could not — she spoke.

"I ask this assembly one question," she said, her voice cutting through the silence like a blade. "If Yudhishthira had already lost himself in the game, he was no longer a free man. A slave cannot wager what is not his. By what right was I staked? Is this lawful?"

The question was devastating. It exposed the legal and moral bankruptcy of the entire proceeding. The scholars in the court could not answer. Bhishma — the embodiment of dharma — admitted, "The subtle course of dharma is difficult to determine."

Draupadi continued: "Where are the protectors of dharma? Where are the great warriors who swore to protect the weak? If the greatest court in the land cannot protect one woman from injustice, what is the value of all your laws, your traditions, your might?"

Her words shamed the assembly. She did not weep helplessly — she argued. She did not beg for mercy — she demanded justice. When Dushasana continued his assault, she prayed to Krishna, who miraculously made her sari endless, foiling the attempt.

Eventually, a shaken King Dhritarashtra — the blind king and father of the Kauravas — intervened. Terrified by ominous signs and Draupadi's righteous fury, he offered her boons. She asked first for Yudhishthira's freedom, then for the freedom of all the Pandavas with their weapons.

When Dhritarashtra offered a third boon, Draupadi refused. "A Kshatriya woman does not need more than two boons. My husbands are now free — they will win back everything through their own strength."

This single scene in the Mahabharata became the seed of the great war. Draupadi's humiliation and her righteous anger were the moral engine that drove the Pandavas to fight for justice. She is not a victim in this story — she is its conscience.`,
    learningPoints: [
      { title: 'Question Injustice Fearlessly', description: 'When surrounded by powerful men who did nothing, Draupadi alone had the courage to question the legality and morality of what was happening. Speaking truth to power, especially when you are the vulnerable one, is the highest form of courage.', icon: '🔥' },
      { title: 'Silence is Complicity', description: 'Bhishma, Drona, and other elders failed Draupadi not by acting against her, but by staying silent. Their silence enabled the injustice. Witnessing wrongdoing and doing nothing makes you part of the problem.', icon: '🤐' },
      { title: 'Dignity in Crisis', description: 'Draupadi did not collapse. She argued logically, questioned legally, and refused to accept more charity than she needed. Even in her worst moment, she maintained her dignity and self-respect.', icon: '👑' },
      { title: 'Consequences of Injustice', description: 'This single event set the Mahabharata war in motion. Injustice, left unaddressed, does not simply go away — it accumulates until it erupts. Every act of oppression plants the seeds of its own destruction.', icon: '⚡' },
    ],
    applications: [
      { context: 'School & College', text: 'If you witness bullying — in the classroom, online, or in social settings — remember the elders in the dice hall. Their silence made them complicit. Speaking up when someone is being mistreated, even at social cost, is what separates bystanders from allies.' },
      { context: 'Career', text: 'Draupadi\'s question — "Is this lawful?" — is one every professional should be willing to ask. When you see unethical practices at work, staying silent for the sake of your career is the modern equivalent of Bhishma\'s silence. Document, speak up, escalate.' },
      { context: 'Relationships', text: 'Draupadi maintained her dignity even when those closest to her had failed her. This teaches self-respect — that your worth is not determined by how others treat you, but by how you hold yourself in the face of their treatment.' },
      { context: 'Business', text: 'Organizations that tolerate "small" injustices — discrimination, harassment, unfair practices — are building toward their own "Kurukshetra." Creating channels for people to safely question wrongdoing is not just ethical — it\'s essential for survival.' },
    ],
    reflections: [
      'Have you ever witnessed an injustice and stayed silent? What held you back — fear, loyalty, social pressure? What would you do differently now?',
      'Think of a time when you stood up for yourself or someone else. How did it feel? What gave you the courage?',
      'Draupadi asked a legal question in a moment of extreme emotion. How do you maintain clarity and logic when you\'re angry or afraid?',
    ],
    quiz: [
      { question: 'What was Draupadi\'s legal argument in the court?', options: ['She demanded a trial by combat', 'She argued that a slave (Yudhishthira) could not legally wager another person', 'She asked for the game to be replayed', 'She demanded Duryodhana be arrested'], correct: 1 },
      { question: 'How did the elders of the court respond to the injustice?', options: ['They attacked Duryodhana', 'They mostly stayed silent, failing to intervene', 'They left the court in protest', 'They sided with Draupadi immediately'], correct: 1 },
      { question: 'Why did Draupadi refuse the third boon from Dhritarashtra?', options: ['She was too angry to speak', 'She said her husbands were free and would win back everything on their own', 'She didn\'t hear the offer', 'She wanted revenge, not gifts'], correct: 1 },
      { question: 'What broader lesson does the silence of Bhishma and Drona teach?', options: ['Elders are always wise', 'Silence in the face of injustice is a form of complicity', 'It\'s better to stay neutral in conflicts', 'Powerful people can\'t be expected to help'], correct: 1 },
    ],
    takeaways: [
      'The courage to question injustice — especially when you are the vulnerable one — is the most powerful form of bravery',
      'Silence in the face of wrongdoing makes you complicit, regardless of your intentions',
      'Your dignity belongs to you — no one can take it unless you surrender it',
      'Unaddressed injustice doesn\'t disappear — it grows until it demands a reckoning',
    ],
  },
  '9': {
    story: `On the banks of a river, in a tall tree, lived a monkey. He was clever, kind, and spent his days eating the sweet fruits of his tree. Below the river lived a crocodile and his wife.

One day, the crocodile swam to the surface and struck up a friendship with the monkey. Every day, the monkey would toss down sweet fruits, and the crocodile would happily eat them. They talked, laughed, and became the best of friends — an unlikely pair.

The crocodile began taking fruits home to his wife. She ate them and found them delicious. But then a dark thought entered her mind. "If these fruits are so sweet," she said, "imagine how sweet the heart of the monkey who eats them every day must be. Bring me his heart."

The crocodile was horrified. "He is my friend!" he protested. But his wife was relentless. She wept, threatened, and sulked. Finally, the weak-willed crocodile agreed.

The next day, the crocodile invited the monkey to his home. "My wife wishes to meet you," he said. "Come, ride on my back across the river."

The trusting monkey agreed and climbed onto the crocodile's back. As they reached the middle of the river — where the water was deepest — the crocodile revealed the truth. "I'm sorry, friend. My wife wants your heart. I must kill you."

The monkey's blood ran cold. He was in the middle of a river, on the back of a predator, with no weapon and no allies. Most would have panicked. But the monkey thought fast.

"Oh, why didn't you tell me earlier!" the monkey said, slapping his forehead with apparent dismay. "I don't carry my heart with me. We monkeys keep our hearts safely stored in the tree. If you want my heart, take me back to the tree and I'll get it for you."

The foolish crocodile believed him and turned around. The moment the monkey reached the tree, he leaped to the highest branch and looked down at the crocodile.

"You fool," the monkey said. "No creature keeps its heart outside its body. You betrayed our friendship for someone else's greed. I was your true friend. Your wife only wanted me dead. Now you have lost both the fruits and the friendship."

The crocodile swam away in shame, realizing too late the cost of his betrayal.`,
    learningPoints: [
      { title: 'Quick Thinking Under Pressure', description: 'Trapped in a life-or-death situation with no physical advantage, the monkey used his mind. When you cannot fight and cannot flee, creativity becomes your greatest weapon.', icon: '💡' },
      { title: 'Choose Your Influences Wisely', description: 'The crocodile was not evil — he was weak-willed and easily manipulated. His wife\'s toxic influence cost him his only friendship. We become like the people who have the most influence over us.', icon: '🧭' },
      { title: 'Trust Must Be Earned and Protected', description: 'The monkey trusted the crocodile because of their long friendship. That trust was betrayed. Trust is precious — easy to break, nearly impossible to rebuild. Guard it fiercely.', icon: '🛡️' },
      { title: 'Greed Destroys What It Seeks to Gain', description: 'The crocodile\'s wife wanted the monkey\'s heart but ended up losing the fruits, the friendship, and her husband\'s self-respect. Greed that overreaches ends up with less than it started.', icon: '💀' },
    ],
    applications: [
      { context: 'School & College', text: 'Peer pressure is the modern crocodile\'s wife. When "friends" push you to do things that betray your values or hurt others, remember this story. A friend who pressures you to do wrong is not a friend — they are using you for their own ends.' },
      { context: 'Career', text: 'In business, you will encounter people who befriend you to extract value — contacts, ideas, insider information. Like the monkey, be generous but always keep your "heart" — your core intellectual property, your reputation, your principles — safely guarded.' },
      { context: 'Relationships', text: 'The crocodile chose his wife\'s unreasonable demand over a genuine friendship. Sometimes we must push back against the people closest to us when their demands require us to betray our values. Love does not mean blind obedience.' },
      { context: 'Business', text: 'When a deal goes wrong or a partner turns hostile, panic is natural but fatal. The monkey\'s calm, quick thinking saved his life. In a crisis, take a breath, buy yourself time, and think creatively about your options before reacting.' },
    ],
    reflections: [
      'Has someone you trusted ever betrayed that trust? How did you handle it, and what did you learn about reading people?',
      'Think of a time when you had to think quickly under pressure. What helped you stay calm?',
      'Are there people in your life who influence you negatively? Are you being the crocodile — doing things against your nature because of pressure from others?',
    ],
    quiz: [
      { question: 'Why did the crocodile decide to betray the monkey?', options: ['He was jealous of the monkey', 'His wife demanded the monkey\'s heart', 'He wanted the tree for himself', 'The monkey insulted him'], correct: 1 },
      { question: 'How did the monkey escape?', options: ['He fought the crocodile', 'He claimed his heart was stored in the tree and tricked the crocodile into returning', 'He called other animals for help', 'He jumped into the water and swam'], correct: 1 },
      { question: 'What does the crocodile represent in this story?', options: ['Pure evil', 'A weak-willed person easily manipulated by bad influences', 'A strategic thinker', 'A brave warrior'], correct: 1 },
      { question: 'What is the central lesson of this Panchatantra tale?', options: ['Never trust anyone', 'Quick thinking and wisdom can save you from any danger', 'Animals are smarter than humans', 'Marriage always causes problems'], correct: 1 },
    ],
    takeaways: [
      'When you can\'t fight or flee, think — creativity is the ultimate survival tool',
      'Be careful who you allow to influence your decisions — not all advisors have your best interests at heart',
      'Trust is fragile and irreplaceable; betraying it costs more than you think',
      'Greed that overreaches destroys the very thing it seeks to gain',
    ],
  },
  '10': {
    story: `In September 1893, a 30-year-old monk from Calcutta arrived in Chicago, Illinois. He had no invitation, no sponsors, and his saffron robes drew bewildered stares on the streets of America. His name was Narendra Nath Datta, but the world would come to know him as Swami Vivekananda.

Vivekananda had traveled to represent Hinduism at the World Parliament of Religions — the first major interfaith gathering in history. But there was a problem: he had no credentials from any recognized organization, and the deadline for delegate registration had passed.

Exhausted and nearly penniless in a foreign country, Vivekananda slept in a boxcar in the Chicago rail yards on his first night. But fate had other plans. Through a series of chance encounters — first with a kind woman who offered him breakfast, then with a Harvard professor who was so impressed by his intellect that he arranged for him to speak at the Parliament — Vivekananda made it to the stage.

On September 11, 1893, he stood before an audience of seven thousand people from all over the world. The hall fell silent as this unknown Indian monk in orange robes approached the podium.

His opening words changed everything: "Sisters and brothers of America."

The audience erupted. They leaped to their feet and applauded for two full minutes. No one had addressed them this way before — not as "Ladies and Gentlemen" but as family. In those five words, Vivekananda had demolished the wall between East and West, between "civilized" and "exotic."

When the applause subsided, he continued: "I am proud to belong to a religion which has taught the world both tolerance and universal acceptance. We believe not only in universal toleration, but we accept all religions as true."

He quoted from Hindu scripture: "As the different streams having their sources in different places all mingle their water in the sea, so, O Lord, the different paths which men take, through different tendencies, various though they appear, crooked or straight, all lead to Thee."

He challenged the very notion that had driven centuries of religious conflict: that only one path could be true. He spoke of a tradition that welcomed all seekers — whether they worshipped in temples, churches, mosques, or in the silence of nature.

The speech lasted barely five minutes, but its impact was seismic. Newspapers called him "the greatest figure in the Parliament of Religions." The New York Herald wrote: "After hearing him, we feel how foolish it is to send missionaries to this learned nation."

Vivekananda spent the next several years lecturing across America and Europe, teaching Vedanta philosophy, and founding the Ramakrishna Mission — which to this day runs hospitals, schools, and disaster relief operations around the world. He returned to India a hero, inspiring a generation of freedom fighters and thinkers, including Subhas Chandra Bose, Mahatma Gandhi, and Jawaharlal Nehru.

He died at the age of 39, having compressed several lifetimes of impact into one brief, blazing life.`,
    learningPoints: [
      { title: 'Conviction Overcomes Circumstances', description: 'Vivekananda had no money, no invitation, and no credentials. But he had absolute conviction in his message. When your belief in your purpose is strong enough, circumstances bend around you.', icon: '🔥' },
      { title: 'The Power of Authentic Communication', description: '"Sisters and brothers of America" worked because it was genuine — not a rhetorical trick, but a true expression of how he saw the world. Authenticity is the most disarming and powerful form of communication.', icon: '🗣️' },
      { title: 'Universal Respect and Tolerance', description: 'Vivekananda did not say Hinduism was the best religion. He said all religions lead to the same truth. In a world riven by conflict, this message of universal acceptance remains revolutionary.', icon: '🌍' },
      { title: 'Youth and Urgency', description: 'He was 30 when he spoke in Chicago and died at 39. He did not wait for the "right time." He acted with urgency because he understood that time is limited and the work is vast.', icon: '⚡' },
    ],
    applications: [
      { context: 'School & College', text: 'Public speaking terrifies most students. Vivekananda teaches that the key is not polished technique but genuine conviction. If you truly believe in what you\'re saying, that sincerity will reach your audience far more powerfully than perfect grammar or smooth delivery.' },
      { context: 'Career', text: 'Vivekananda arrived at the Parliament with no credentials but got himself in through sheer persistence and the quality of his ideas. In your career, don\'t wait for invitations — create your opportunities. Cold emails, unconventional connections, and showing up prepared can change everything.' },
      { context: 'Relationships', text: '"Sisters and brothers" — Vivekananda\'s default mode was treating strangers as family. Imagine approaching every new person with that warmth and openness. How different would your social life be?' },
      { context: 'Business', text: 'Vivekananda was essentially a startup founder with no resources but a transformative idea. His "pitch" at Chicago was five minutes long and changed the world. In business, your pitch doesn\'t need to be long — it needs to be authentic, clear, and rooted in genuine conviction.' },
    ],
    reflections: [
      'What is a message or idea you feel so strongly about that you would travel across the world to share it, even with no resources?',
      'Vivekananda said all paths lead to truth. How can you apply this tolerance in your daily interactions with people who think differently from you?',
      'If you had only five minutes to address the entire world, what would you say?',
    ],
    quiz: [
      { question: 'What were the opening words of Vivekananda\'s famous speech?', options: ['Ladies and Gentlemen', 'Dear delegates', 'Sisters and brothers of America', 'Respected members of the Parliament'], correct: 2 },
      { question: 'Why was the opening so impactful?', options: ['It was in a different language', 'It addressed the audience as family rather than strangers, demolishing cultural barriers', 'He spoke very loudly', 'He used dramatic gestures'], correct: 1 },
      { question: 'What was Vivekananda\'s core message about religion?', options: ['Hinduism is the only true religion', 'All religions should be abolished', 'All religions are paths to the same truth — tolerance and acceptance are essential', 'People should convert to one religion for world peace'], correct: 2 },
      { question: 'How old was Vivekananda when he gave the Chicago address?', options: ['45', '55', '30', '21'], correct: 2 },
    ],
    takeaways: [
      'Conviction in your purpose can overcome any material disadvantage',
      'Authenticity and genuine warmth are more powerful than polished rhetoric',
      'Respecting all perspectives, not just your own, is the highest form of wisdom',
      'Don\'t wait for the perfect moment — urgency and action create their own momentum',
    ],
  },
  '11': {
    story: `On the thirteenth day of the great Kurukshetra war, the Kaurava commander Dronacharya devised a deadly military formation called the Chakravyuha — a rotating, multi-layered labyrinth of soldiers designed to trap and crush anyone who entered it. Only a handful of warriors in the world knew how to both enter and exit this formation. Krishna knew. Arjuna knew. And no one else among the Pandavas.

But Arjuna had been deliberately drawn away to a distant part of the battlefield by a diversionary attack. Without him, the Pandavas faced annihilation. Someone had to enter the Chakravyuha, or the war would be lost.

Then, sixteen-year-old Abhimanyu — Arjuna's son — stepped forward.

Abhimanyu knew how to enter the Chakravyuha. He had learned it while still in his mother Subhadra's womb, listening as his father Arjuna explained the technique to her. But here was the cruel twist: Subhadra had fallen asleep before Arjuna could explain how to exit the formation. Abhimanyu knew the way in but not the way out.

He told this to the Pandava generals. His uncle Yudhishthira was torn — how could he send a boy into a death trap? But Bhima and others promised they would follow Abhimanyu in, breaking through the outer layers from behind so he would not be alone.

Abhimanyu smiled and charged.

His entry into the Chakravyuha was magnificent. The teenage warrior fought with a skill and ferocity that stunned seasoned veterans. He shattered layer after layer of the formation, cutting down warriors twice his age and experience. The Kauravas were in disbelief — this boy was fighting like a god.

But behind him, the plan failed. Jayadratha, the king of Sindhu, used a boon from Shiva to block the other Pandavas from entering the formation. Abhimanyu was alone inside the labyrinth.

The Kaurava commanders — including Drona, Karna, Ashwatthama, and Duryodhana — realized this was their chance. They surrounded the boy. In violation of all rules of fair combat, they attacked him together — six veteran warriors against one teenage boy.

Abhimanyu's chariot was destroyed. His bow was broken. His armor was shattered. But he did not stop fighting. He picked up a chariot wheel and used it as a shield. When that broke, he fought with his bare hands. He fought until his last breath, surrounded, outnumbered, and outmatched, but never outclassed.

When Arjuna learned of his son's death that evening, his grief shook the heavens. He vowed to kill Jayadratha by sunset the next day — and he did, in one of the most dramatic episodes of the war.

Abhimanyu's story is not about victory. It is about courage in the face of impossible odds, about acting with the knowledge you have even when it is incomplete, and about the tragic cost of war on the young.`,
    learningPoints: [
      { title: 'Act with What You Know', description: 'Abhimanyu did not have complete knowledge — he knew how to enter but not exit. But he acted anyway because the situation demanded it. In life, you will rarely have perfect information. The brave act with what they have.', icon: '⚔️' },
      { title: 'Courage Beyond Your Years', description: 'At sixteen, Abhimanyu faced the greatest warriors of his age and held his own. Youth is not a limitation — conviction and preparation can make you formidable at any age.', icon: '🦁' },
      { title: 'The Cost of Broken Promises', description: 'The other Pandava warriors promised to follow Abhimanyu into the formation. When they couldn\'t, he was left alone. This teaches the gravity of promises — especially those made to people who are risking everything based on your word.', icon: '💔' },
      { title: 'Injustice Reveals Character', description: 'The six-on-one attack on Abhimanyu was against all rules of warrior dharma. It reveals the Kauravas\' true character — willing to abandon all principles to win. Victory without honor is no victory at all.', icon: '⚖️' },
    ],
    applications: [
      { context: 'School & College', text: 'You will face exams, competitions, and challenges where you don\'t feel fully prepared. Abhimanyu teaches that partial preparation plus courage is better than perfect preparation that never acts. Enter the Chakravyuha of your challenges — you know more than you think.' },
      { context: 'Career', text: 'In your career, you will sometimes be asked to take on projects where you know the way in but not the way out. Like Abhimanyu, prepare as best you can, communicate what you need, and fight with everything you\'ve got. The willingness to enter unknown territory is what separates leaders from followers.' },
      { context: 'Relationships', text: 'When you make a promise to someone — especially someone who is depending on you for support — honor it. Bhima and the others couldn\'t follow Abhimanyu, and the consequences were fatal. In relationships, being reliable when it matters most is the definition of trustworthiness.' },
      { context: 'Business', text: 'Startups are Chakravyuhas — founders enter complex markets with incomplete knowledge. The key is to enter boldly, learn as you go, and build a team that genuinely has your back. And remember: breaking fair play to win (unethical competition) may give short-term results but always damages your reputation.' },
    ],
    reflections: [
      'Have you ever held back from a challenge because you didn\'t feel "fully prepared"? What would Abhimanyu do?',
      'Think of a time someone broke a promise to you when you needed them most. How did it affect your trust? How can you ensure you never do the same to others?',
      'Abhimanyu fought with a chariot wheel when his weapons were destroyed. What is your "chariot wheel" — the improvised skill or resource you fall back on when your first plan fails?',
    ],
    quiz: [
      { question: 'How did Abhimanyu learn to enter the Chakravyuha?', options: ['Krishna taught him before the war', 'He learned it in his mother\'s womb while Arjuna described it', 'He read about it in a military text', 'He figured it out during the battle'], correct: 1 },
      { question: 'Why could Abhimanyu not exit the Chakravyuha?', options: ['He forgot the exit technique during battle', 'His mother fell asleep before Arjuna could explain the exit method', 'The formation changed shape during battle', 'He chose not to exit'], correct: 1 },
      { question: 'What happened when six warriors attacked Abhimanyu together?', options: ['He surrendered', 'He escaped through a secret passage', 'He fought with everything he had — chariot wheel, bare hands — until his last breath', 'He called for help from Krishna'], correct: 2 },
      { question: 'What is the primary life lesson from Abhimanyu\'s story?', options: ['Never enter a battle you might lose', 'Act with courage and the knowledge you have, even when it is incomplete', 'War is always wrong', 'Only fight when you are guaranteed to win'], correct: 1 },
    ],
    takeaways: [
      'You will never have complete knowledge — act with courage and what you know',
      'Youth is not a limitation when paired with conviction and preparation',
      'Promises matter most when the person trusting them is in danger',
      'There is more honor in fighting bravely against impossible odds than in winning through unfair means',
    ],
  },
  '12': {
    story: `In the earliest age of creation, the Devas (gods) and Asuras (demons) were both mortal. To obtain Amrita — the nectar of immortality — they needed to churn the cosmic ocean, a task so monumental that neither side could accomplish it alone. And so, enemies agreed to cooperate.

They used Mount Mandara as the churning rod and Vasuki, the king of serpents, as the rope. The Devas held one end and the Asuras the other, and they began to churn the great Kshira Sagara — the ocean of milk.

As the churning progressed, extraordinary treasures emerged: Kamadhenu, the wish-fulfilling cow; the Kalpavriksha, the wish-granting tree; Lakshmi, the goddess of wealth; Airavata, the divine white elephant; and many other wonders.

But then something terrible happened.

Before the nectar appeared, a deadly poison called Halahala rose from the depths of the ocean. This was no ordinary poison — it was so lethal that its fumes alone began to choke the three worlds. The sky darkened. Trees withered. Living beings began to collapse.

Both Devas and Asuras panicked. They had wanted treasure, not destruction. They ran, they hid, they begged for salvation. The very cooperation that was churning the ocean now dissolved in terror.

In this moment of cosmic crisis, all turned to Lord Shiva.

Shiva, the great Mahadeva, looked upon the suffering of all beings with compassion. Without hesitation, without negotiation, without asking for anything in return, he stepped forward.

He gathered the Halahala — this world-destroying poison — in his hands and drank it.

Goddess Parvati, watching in horror, pressed her hand against Shiva's throat to prevent the poison from entering his stomach and destroying him from within. The poison lodged in his throat, turning it blue. From that day, Shiva was known as Neelakantha — the Blue-Throated One.

The churning continued. The Amrita finally emerged. The world was saved.

But the one who saved it was not the one who drank the nectar. Shiva did not seek immortality for himself. He took the poison so that others could have the nectar. This is the deepest teaching of the story — that true greatness lies not in what you gain, but in what you are willing to absorb so that others may thrive.`,
    learningPoints: [
      { title: 'Absorbing Poison for Others', description: 'Every family, team, and organization has "poison" — conflicts, stresses, failures. A true leader absorbs these toxins, processing them so they don\'t destroy the group. This is the hardest and most important form of service.', icon: '💙' },
      { title: 'Selfless Action in Crisis', description: 'Shiva did not calculate, negotiate, or ask what he would receive in return. When the world was in danger, he simply acted. In a crisis, the person who acts while others panic is the one who saves the day.', icon: '🧘' },
      { title: 'The Treasure Comes After the Poison', description: 'The Amrita emerged only after the Halahala was dealt with. This is a universal truth — the greatest rewards in life come only after you have faced and absorbed the greatest difficulties.', icon: '🌊' },
      { title: 'Partnership Requires Trust', description: 'Devas and Asuras — enemies — cooperated because the goal was too big for either alone. Some achievements require working with people you don\'t fully trust. The key is a shared goal larger than individual rivalry.', icon: '🤝' },
    ],
    applications: [
      { context: 'School & College', text: 'Group projects often produce "poison" — arguments, missed deadlines, unequal work. Someone in the group needs to be the Shiva — the person who absorbs the frustration, mediates the conflicts, and keeps the team moving forward. It\'s thankless work, but it\'s what makes the project succeed.' },
      { context: 'Career', text: 'Great managers are "Neelakanthas" — they shield their teams from organizational politics, absorb blame when things go wrong, and pass credit upward when things go right. This is the poison they drink so their team can have the nectar of focused, meaningful work.' },
      { context: 'Relationships', text: 'In every family, someone carries the emotional weight — the person who listens to everyone\'s problems, mediates between relatives, and absorbs stress. Recognize this person. Don\'t let them carry it alone. And if you are that person, know that what you do is sacred — even if no one acknowledges it.' },
      { context: 'Business', text: 'Before any venture produces results (Amrita), it produces challenges (Halahala). Cash flow problems, team conflicts, product failures — these are the poisons that emerge during the "churning." The founder or leader who absorbs these without passing the toxicity to their team creates the conditions for eventual success.' },
    ],
    reflections: [
      'Who is the "Shiva" in your life — the person who absorbs the poison so others don\'t have to? Have you acknowledged their sacrifice?',
      'Think of a difficult period in your life that was followed by something wonderful. Can you see the "Halahala before Amrita" pattern?',
      'Are you willing to absorb difficulty for the sake of a larger goal? What is the "poison" you need to drink right now?',
    ],
    quiz: [
      { question: 'What emerged from the ocean before the nectar of immortality?', options: ['More water', 'A deadly poison called Halahala', 'A golden palace', 'A divine weapon'], correct: 1 },
      { question: 'What did Shiva do with the Halahala poison?', options: ['He destroyed it with his trident', 'He drank it to save all beings', 'He sent it back into the ocean', 'He gave it to the Asuras'], correct: 1 },
      { question: 'Why is Shiva called "Neelakantha"?', options: ['He wore a blue necklace', 'His throat turned blue from holding the poison', 'He had a blue aura', 'His eyes were blue'], correct: 1 },
      { question: 'What is the deeper teaching of this story?', options: ['Always seek immortality', 'True greatness lies in absorbing difficulty so others may thrive', 'Never cooperate with enemies', 'Poison is more valuable than nectar'], correct: 1 },
    ],
    takeaways: [
      'True leadership means absorbing toxicity so your team can thrive',
      'In a crisis, the person who acts without calculating personal benefit is the true hero',
      'The greatest rewards come only after facing the greatest challenges',
      'Some goals are too large for any one group — cooperation across differences is sometimes essential',
    ],
  },
};

export const testimonials = [
  { name: 'Priya Sharma', role: 'College Student, Delhi University', text: 'Wisdom Bharat changed how I approach exams and social pressure. The story of Abhimanyu taught me that partial preparation plus courage beats waiting for perfection.', avatar: '👩‍🎓' },
  { name: 'Arjun Patel', role: 'Engineering Lead, Bangalore', text: 'The Leadership Path transformed my management style. Krishna\'s guidance to Arjuna in the Gita showed me that real leadership is about empowering others to find their own clarity.', avatar: '👨‍💻' },
  { name: 'Sneha Reddy', role: 'High School Teacher, Hyderabad', text: 'My students now look forward to moral science class. The Panchatantra stories spark genuine discussions about ethics and friendship that textbooks never could.', avatar: '👩‍🏫' },
  { name: 'Vikram Singh', role: 'Startup Founder, Mumbai', text: 'Chanakya\'s "start from the edges" strategy literally changed our go-to-market plan. We stopped attacking the market leader and focused on underserved segments. Revenue tripled.', avatar: '👨‍💼' },
];

export const achievements = [
  { id: '1', name: 'First Lesson', description: 'Complete your first lesson', icon: '📖', earned: true, date: '2026-05-20' },
  { id: '2', name: '7 Day Streak', description: 'Learn for 7 consecutive days', icon: '🔥', earned: true, date: '2026-05-27' },
  { id: '3', name: '30 Day Streak', description: 'Learn for 30 consecutive days', icon: '⚡', earned: false },
  { id: '4', name: 'Path Completed', description: 'Complete a full learning path', icon: '🏆', earned: false },
  { id: '5', name: 'Quiz Master', description: 'Score 100% on 5 quizzes', icon: '🎯', earned: true, date: '2026-06-01' },
  { id: '6', name: 'Knowledge Seeker', description: 'Complete 25 lessons', icon: '🌟', earned: false },
  { id: '7', name: 'Wise Scholar', description: 'Reach Scholar level', icon: '🎓', earned: false },
  { id: '8', name: 'Story Explorer', description: 'Read from 5 different categories', icon: '🗺️', earned: true, date: '2026-05-30' },
];

export const levels = [
  { name: 'Seeker', min: 0, max: 100, icon: '🌱' },
  { name: 'Learner', min: 100, max: 300, icon: '📚' },
  { name: 'Thinker', min: 300, max: 600, icon: '💡' },
  { name: 'Scholar', min: 600, max: 1000, icon: '🎓' },
  { name: 'Sage', min: 1000, max: 2000, icon: '🧘' },
];

export const weeklyProgress = [
  { day: 'Mon', minutes: 25 },
  { day: 'Tue', minutes: 40 },
  { day: 'Wed', minutes: 15 },
  { day: 'Thu', minutes: 35 },
  { day: 'Fri', minutes: 50 },
  { day: 'Sat', minutes: 30 },
  { day: 'Sun', minutes: 20 },
];
