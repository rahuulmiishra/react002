

export function getFilteredSuggestion({data=[], language}) {
   return data?.filter(d => {
        const {value=''} = d || {};

        const isMatch = language && value?.toLowerCase().includes(language?.toLowerCase());

        return isMatch;
    })
}
