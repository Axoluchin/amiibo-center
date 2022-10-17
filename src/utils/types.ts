export type amiiboTypes = 'Figure' | 'Card' | 'Band' | 'Yarn'

export interface amiiboProps {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  release: {
    au?: string;
    eu?: string;
    jp?: string;
    na?: string;
  };
  tail: string;
  type: amiiboTypes;
}
