export default {
    highlights(state) {
        return state.highlights;
    },
    hasHighlights(state) {
        return state.highlights && state.highlights.length > 0;
    }
};