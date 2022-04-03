import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            highlights: [{
                id:'1',
                value:'lorem',
                blogIds: ['1','2']
            },
            {
                id:'2',
                value:'picsum',
                blogIds: ['1','3']
            }
        ]
        }

    },
    mutations,
    actions,
    getters
}