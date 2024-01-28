export interface IProblemSpConfig {
  forceTheme?: 'light' | 'dark';
  genshinStart?: boolean;
  genshinStartPostOpenUrl?: string;
  customFontFamily?: string;
  postACVideo?: {
    url: string;
    allowSkip?: boolean;
  };
  onEnteredAudio?: {
    url: string;
  };
}
