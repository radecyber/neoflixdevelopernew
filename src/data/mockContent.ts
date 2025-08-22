export interface MockContent {
  id: string;
  title: string;
  type: 'movie' | 'series';
  genre: string;
  year: number;
  rating: string;
  duration: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  subtitles?: Array<{
    language: string;
    url: string;
  }>;
}

export const mockContent: MockContent[] = [
  {
    id: '1',
    title: 'The Adventure of the Clapham Cook',
    type: 'movie',
    genre: 'Mystery',
    year: 1989,
    rating: 'PG',
    duration: '50 min',
    description: 'Poirot investigates the mysterious disappearance of a cook from a respectable household. What appears to be a simple case of domestic staff leaving without notice soon reveals deeper family secrets and hidden motives.',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S01E01%20-%20The%20Adventure%20of%20the%20Clapham%20Cook.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/clapham-cook-en.vtt' },
      { language: 'French', url: '/subtitles/clapham-cook-fr.vtt' }
    ]
  },
  {
    id: '2',
    title: 'Murder in the Mews',
    type: 'movie',
    genre: 'Mystery',
    year: 1989,
    rating: 'PG',
    duration: '103 min',
    description: 'A woman is found dead in her locked flat, apparently having committed suicide. But Poirot suspects murder when he discovers the victim was left-handed, yet the gun was found in her right hand.',
    thumbnail: 'https://images.pexels.com/photos/8111764/pexels-photo-8111764.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S01E02%20-%20Murder%20in%20the%20Mews.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/murder-mews-en.vtt' },
      { language: 'Spanish', url: '/subtitles/murder-mews-es.vtt' }
    ]
  },
  {
    id: '3',
    title: 'The Adventure of Johnnie Waverly',
    type: 'movie',
    genre: 'Mystery',
    year: 1989,
    rating: 'PG',
    duration: '50 min',
    description: 'Poirot is hired to protect young Johnnie Waverly from a kidnapping threat. Despite his precautions, the boy disappears, leading Poirot to uncover a web of family secrets and financial desperation.',
    thumbnail: 'https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S01E03%20-%20The%20Adventure%20of%20Johnnie%20Waverly.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/johnnie-waverly-en.vtt' }
    ]
  },
  {
    id: '4',
    title: 'Four and Twenty Blackbirds',
    type: 'movie',
    genre: 'Mystery',
    year: 1989,
    rating: 'PG',
    duration: '50 min',
    description: 'An elderly man dies after changing his regular dining routine at a restaurant. Poirot investigates when it becomes clear that someone used the victim\'s predictable habits against him in a carefully planned murder.',
    thumbnail: 'https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S01E04%20-%20Four%20and%20Twenty%20Blackbirds.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/blackbirds-en.vtt' },
      { language: 'German', url: '/subtitles/blackbirds-de.vtt' }
    ]
  },
  {
    id: '5',
    title: 'The King of Clubs',
    type: 'movie',
    genre: 'Mystery',
    year: 1989,
    rating: 'PG',
    duration: '50 min',
    description: 'A film producer is found murdered in his office, and Poirot must navigate the theatrical world of cinema to find the killer among a cast of dramatic suspects, each with their own motive for murder.',
    thumbnail: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S01E05%20-%20The%20King%20of%20Clubs.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/king-clubs-en.vtt' }
    ]
  },
  {
    id: '6',
    title: 'The Dream',
    type: 'movie',
    genre: 'Mystery',
    year: 1989,
    rating: 'PG',
    duration: '50 min',
    description: 'A wealthy man dreams of his own murder and asks Poirot for protection. When the dream becomes reality, Poirot must solve a complex case involving family inheritance, jealousy, and carefully orchestrated deception.',
    thumbnail: 'https://images.pexels.com/photos/6899463/pexels-photo-6899463.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S01E06%20-%20The%20Dream.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/dream-en.vtt' },
      { language: 'Italian', url: '/subtitles/dream-it.vtt' }
    ]
  },
  {
    id: '7',
    title: 'The Veiled Lady',
    type: 'movie',
    genre: 'Mystery',
    year: 1990,
    rating: 'PG',
    duration: '50 min',
    description: 'A mysterious veiled woman seeks Poirot\'s help to recover compromising letters. But when blackmail turns to murder, Poirot discovers that nothing is as it seems in this case of hidden identities and secret pasts.',
    thumbnail: 'https://images.pexels.com/photos/8111763/pexels-photo-8111763.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S02E01%20-%20The%20Veiled%20Lady.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/veiled-lady-en.vtt' }
    ]
  },
  {
    id: '8',
    title: 'The Lost Mine',
    type: 'movie',
    genre: 'Mystery',
    year: 1990,
    rating: 'PG',
    duration: '50 min',
    description: 'When a will goes missing and the beneficiaries start dying under suspicious circumstances, Poirot must uncover the truth behind a South American mining fortune and the deadly lengths people will go to claim it.',
    thumbnail: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
    videoUrl: 'https://archive.org/download/poirot-series/Poirot%20S02E02%20-%20The%20Lost%20Mine.mp4',
    subtitles: [
      { language: 'English', url: '/subtitles/lost-mine-en.vtt' },
      { language: 'French', url: '/subtitles/lost-mine-fr.vtt' }
    ]
  }
];