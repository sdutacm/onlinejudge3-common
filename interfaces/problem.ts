export interface IProblemSpConfig {
  forceTheme?: 'light' | 'dark';
  genshinStart?: boolean;
  genshinStartPostOpenUrl?: string;
  customFontFamily?: string;
  hasEgg?: boolean;
  postACVideo?: {
    url: string;
    allowSkip?: boolean;
  };
  onEnteredAudio?: {
    urls: string[];
    play: 'one' | 'all';
    playMode: 'random' | 'sequence';
  };
  onAcceptedAudio?: {
    urls: string[];
    play: 'one' | 'all';
    playMode: 'random' | 'sequence';
  };
}
