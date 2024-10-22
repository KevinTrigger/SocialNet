export type { 
  ScrollSaveSchema 
} from './model/types/ScrollSave';

export { scrollSaveReducer, scrollSaveActions } from './model/slice/scrollSaveSlice';

export { getScrollSaveByPath, getScrollSave } from './model/selectors/scrollSave';