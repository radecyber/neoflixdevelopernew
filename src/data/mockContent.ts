export interface MockContent {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  year: number;
  genre: string[];
  rating: string;
  subtitles: Array<{
    language: string;
    code: string;
    url: string;
  }>;
}

export const mockContent: MockContent[] = [
  {
    id: '1',
    title: 'Detective Poirot: The Third Floor Flat',
    description: 'Hercule Poirot and friends accidentally discover a dead woman in a London apartment after a mix-up with keys. Poirot investigates the tenants and visitors, piecing together subtle clues about timing, relationships, and lies. In the end, he unmasks the murderer by revealing how access to the flat and a hidden motive fit perfectly together.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://dn720503.ca.archive.org/0/items/poirot-series/01.05%20The%20Third%20Floor%20Flat.mp4',
    duration: '50m 47s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '2',
    title: 'Detective Poirot: The Incredible Theft',
    description: 'Hercule Poirot is called to investigate the disappearance of top-secret military plans from the home of a wealthy politician, Lord Mayfield. The suspects include houseguests with potential motives, including espionage and personal gain. Using his trademark logic and observation, Poirot uncovers a clever scheme involving deception, blackmail, and a surprising culprit',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.08%20The%20Incredible%20Theft.mp4',
    duration: '51m 49s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/nile-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/nile-sr.vtt' },
      { language: 'French', code: 'fr', url: '/subtitles/nile-fr.vtt' }
    ]
  },
  {
    id: '3',
    title: 'Detective Poirot: The Orient Express Mystery',
    description: 'Trapped on the famous Orient Express during a snowstorm, Poirot must solve a murder when one of the passengers is found dead in their compartment.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://dn720503.ca.archive.org/0/items/poirot-series/12.03%20Murder%20on%20the%20Orient%20Express.mp4',
    duration: '1h 32m 51s',
    year: 2010,
    genre: ['Mystery', 'Drama', 'Period'],
    rating: 'TV-14',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/nile-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/nile-sr.vtt' },
      { language: 'French', code: 'fr', url: '/subtitles/nile-fr.vtt' }
    ]
  },
  {
    id: '4',
    title: 'Detective Poirot: Triangle At Rhodes',
    description: 'Hercule Poirot is vacationing on the Greek island of Rhodes when he observes a tense romantic triangle between a glamorous woman, her new husband, and another man’s wife. Poirot senses danger and warns of impending trouble, but his caution goes unheeded. When murder strikes, Poirot uses his sharp observations to uncover a crime motivated by jealousy and manipulation',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.06%20Triangle%20At%20Rhodes.mp4',
    duration: '53m 14s',
    year: 2024,
    genre: ['Crime', 'Thriller', 'Drama'],
    rating: 'TV-MA',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/london-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/london-sr.vtt' }
    ]
  },
  {
    id: '5',
    title: 'Ocean Mysteries',
    description: 'Dive deep into the unexplored mysteries of our oceans. This documentary series reveals the secrets hidden beneath the waves and the creatures that call it home.',
    thumbnail: 'https://images.pexels.com/photos/544197/pexels-photo-544197.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    duration: '50m',
    year: 2024,
    genre: ['Documentary', 'Nature', 'Science'],
    rating: 'TV-G',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/ocean-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/ocean-sr.vtt' },
      { language: 'Portuguese', code: 'pt', url: '/subtitles/ocean-pt.vtt' }
    ]
  },
  {
    id: '6',
    title: 'Space Chronicles',
    description: 'An epic journey through space exploring distant galaxies, black holes, and the search for extraterrestrial life. Cutting-edge science meets stunning visuals.',
    thumbnail: 'https://images.pexels.com/photos/73873/rocket-launch-rocket-take-off-nasa-73873.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
    duration: '1h 15m',
    year: 2024,
    genre: ['Documentary', 'Science', 'Space'],
    rating: 'TV-PG',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/space-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/space-sr.vtt' },
      { language: 'Japanese', code: 'ja', url: '/subtitles/space-ja.vtt' }
    ]
  },
  {
    id: '7',
    title: 'The Crown Chronicles',
    description: 'A historical drama following the reign of Queen Elizabeth II from the 1940s to modern times. Witness the personal intrigues, political rivalries, and events that shaped the second half of the 20th century.',
    thumbnail: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    duration: '1h 2m',
    year: 2024,
    genre: ['Drama', 'Historical', 'Biography'],
    rating: 'TV-MA',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/crown-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/crown-sr.vtt' },
      { language: 'French', code: 'fr', url: '/subtitles/crown-fr.vtt' }
    ]
  },
  {
    id: '8',
    title: 'Cyberpunk 2087',
    description: 'In a dystopian future where technology and humanity collide, a group of rebels fights against corporate control. High-octane action meets philosophical questions about what it means to be human.',
    thumbnail: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
    duration: '2h 15m',
    year: 2024,
    genre: ['Sci-Fi', 'Action', 'Thriller'],
    rating: 'TV-MA',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/cyber-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/cyber-sr.vtt' },
      { language: 'Japanese', code: 'ja', url: '/subtitles/cyber-ja.vtt' }
    ]
  },
  {
    id: '9',
    title: 'Mountain Rescue',
    description: 'Follow an elite mountain rescue team as they risk their lives to save others in the most dangerous conditions. Real stories of heroism, survival, and the unbreakable human spirit.',
    thumbnail: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
    duration: '48m',
    year: 2024,
    genre: ['Documentary', 'Adventure', 'Drama'],
    rating: 'TV-14',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/rescue-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/rescue-sr.vtt' },
      { language: 'German', code: 'de', url: '/subtitles/rescue-de.vtt' }
    ]
  },
  {
    id: '10',
    title: 'Detective Poirot: How Does Your Garden Grow',
    description: 'Hercule Poirot receives a cryptic letter from an elderly woman, Amelia Barrowby, asking for his help—shortly before she dies under suspicious circumstances. Poirot investigates her household and uncovers hidden tensions involving a young Russian companion and a disputed inheritance. Ultimately, he reveals that the murder was committed using poison concealed in perfume, motivated by jealousy and greed.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://dn720503.ca.archive.org/0/items/poirot-series/03.02%20How%20Does%20Your%20Garden%20Grow.mp4',
    duration: '53m 33s',
    year: 1991,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  }
  },
  {
    id: '11',
    title: 'Detective Poirot: The Adventure of the Clapham Cook',
    description: 'Hercule Poirot investigates the mysterious disappearance of a cook from a respectable household in Clapham. What initially appears to be a simple case of domestic staff leaving without notice soon reveals deeper secrets involving family finances, hidden relationships, and a clever scheme that only Poirot can unravel.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.01%20The%20Adventure%20of%20the%20Clapham%20Cook.mp4',
    duration: '51m 28s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '12',
    title: 'Detective Poirot: Murder in the Mews',
    description: 'When a woman is found dead in her locked flat, apparently having committed suicide, Poirot suspects foul play. The Belgian detective must navigate through alibis, hidden motives, and carefully planted evidence to expose a cunning murderer who thought they had committed the perfect crime.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.02%20Murder%20in%20the%20Mews.mp4',
    duration: '51m 42s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '13',
    title: 'Detective Poirot: The Adventure of Johnnie Waverly',
    description: 'Poirot is called to protect young Johnnie Waverly from a kidnapping threat. Despite his precautions, the boy disappears, leading Poirot into a complex web of family secrets, financial troubles, and a kidnapping plot that is not quite what it seems. The detective must use all his skills to save the child and expose the truth.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.03%20The%20Adventure%20of%20Johnnie%20Waverly.mp4',
    duration: '51m 15s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '14',
    title: 'Detective Poirot: Four and Twenty Blackbirds',
    description: 'The death of a reclusive old man in a restaurant leads Poirot to investigate his peculiar dining habits and the people who knew them. What starts as a natural death investigation becomes a murder case when Poirot discovers that someone used the victim\'s predictable routine against him in a most ingenious way.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.04%20Four%20and%20Twenty%20Blackbirds.mp4',
    duration: '51m 33s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '15',
    title: 'Detective Poirot: The King of Clubs',
    description: 'When a film producer is found murdered in his locked study, Poirot must sift through a cast of suspects including actors, writers, and business partners. Each has a motive, and each has an alibi. The detective must use his understanding of human nature to identify the killer among this theatrical group.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.07%20The%20King%20of%20Clubs.mp4',
    duration: '51m 19s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '16',
    title: 'Detective Poirot: The Dream',
    description: 'A wealthy man\'s recurring nightmare about his own murder becomes reality when he is found dead in circumstances that mirror his dream exactly. Poirot must determine whether this is an extraordinary coincidence or if someone used the man\'s fears against him in a carefully planned murder.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.09%20The%20Dream.mp4',
    duration: '51m 07s',
    year: 1989,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '17',
    title: 'Detective Poirot: The Veiled Lady',
    description: 'A mysterious veiled woman seeks Poirot\'s help to recover compromising letters, but the detective suspects there is more to her story than she reveals. As he investigates, Poirot uncovers a blackmail scheme, hidden identities, and a murder that threatens to destroy several reputations.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/01.10%20The%20Veiled%20Lady.mp4',
    duration: '51m 24s',
    year: 1990,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
  },
  {
    id: '18',
    title: 'Detective Poirot: The Lost Mine',
    description: 'When a man dies leaving behind a will that mentions a valuable mine, his relatives gather to claim their inheritance. However, the will goes missing, and soon people start dying. Poirot must navigate family greed, hidden partnerships, and deadly secrets to solve multiple murders and locate the missing document.',
    thumbnail: 'https://images.pexels.com/photos/3137078/pexels-photo-3137078.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://ia601708.us.archive.org/0/items/poirot-series/02.01%20The%20Lost%20Mine.mp4',
    duration: '51m 51s',
    year: 1990,
    genre: ['Drama', 'Crime'],
    rating: 'TV-12',
    subtitles: [
      { language: 'English', code: 'en', url: '/subtitles/poirot-en.vtt' },
      { language: 'Serbian', code: 'sr', url: '/subtitles/poirot-sr.vtt' },
      { language: 'Spanish', code: 'es', url: '/subtitles/poirot-es.vtt' }
    ]
];