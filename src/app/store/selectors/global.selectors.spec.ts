import * as fromGlobal from '../reducers/global.reducer';
import { selectGlobalState } from './global.selectors';

describe('Global Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGlobalState({
      [fromGlobal.globalFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
