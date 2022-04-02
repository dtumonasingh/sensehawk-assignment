import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            highlights: [
                {
                    id: '1',
                    value: 'lorem',
                    route: '/highlights/1'
                },
                {
                    id: '2',
                    value: 'highlights',
                    route: '/highlights/2'
                }
            ]
        }

    },
    mutations,
    actions,
    getters
}