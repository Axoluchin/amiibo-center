export type amiiboTypes = 'Figure' | 'Card' | 'Band' | 'Yarn'

export interface release {
  au?: string;
  eu?: string;
  jp?: string;
  na?: string;
}

export interface amiiboProps {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: release;
  tail: string;
  type: amiiboTypes;
}
