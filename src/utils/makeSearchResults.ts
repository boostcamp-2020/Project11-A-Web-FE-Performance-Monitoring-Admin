import { SearchResult } from '@store/type';

const makeSearchResults = (result: Record<string, any>): SearchResult[] => {
  const refinedResults: SearchResult[] = [];
  Object.entries(result).forEach(([key, value]) => {
    if (typeof value === 'object') {
      const contents: { tag: string; count: number }[] = [];
      Object.entries(value as Record<string, number>).forEach(
        ([tag, count]) => {
          if (count !== 0) {
            const tagCount = {
              tag,
              count,
            };
            contents.push(tagCount);
          }
        },
      );
      if (contents.length) {
        const refinedResult = { title: key, contents };
        refinedResults.push(refinedResult);
      }
    }
  });
  return refinedResults;
};

export default makeSearchResults;
