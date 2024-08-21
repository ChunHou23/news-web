export class SearchFilter  {
    static POPULARITY = 1;
    static RELEVANCY = 2;
    static DATE_POSTED = 3;

    static getName(value) {
        switch (value) {
            case SearchFilter.POPULARITY:
                return 'popularity';
            case SearchFilter.RELEVANCY:
                return 'relevancy';
            case SearchFilter.DATE_POSTED:
                return 'publishedAt';
            default:
                return 'UNKNOWN';
        }
    }
}