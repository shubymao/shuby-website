import { AttributionStyle } from '@typeDefs/data';
import { stl } from '@utils/graphics-utils';

export const HOVER_STLYE = stl('focus:outline-none hover:bg-gray-500 hover:bg-opacity-30');

export const CARD_SVG_STYLE: AttributionStyle = {
  contentStyle: stl('h-16 w-16 md:h-20:w-20 flex-none object-contain mx-auto'),
  wrapperStyle: stl('p-3 bg-white rounded-3xl flex'),
};
export const CARD_SVG_LARGE_STYLE = stl('flex-none h-20 md:h-24  mx-auto');
