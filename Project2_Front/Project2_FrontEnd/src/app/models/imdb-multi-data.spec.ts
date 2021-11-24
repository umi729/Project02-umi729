import { ImdbMultiData } from './imdb-multi-data';

describe('ImdbMultiData', () => {
  it('should create an instance', () => {
    expect(new ImdbMultiData("", "", "", "", "")).toBeTruthy();
  });
});
