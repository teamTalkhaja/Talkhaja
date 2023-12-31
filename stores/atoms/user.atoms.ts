import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userIdState = atom<string | null>({
  key: 'userIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export default userIdState;
