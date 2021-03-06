import * as types from '@/store/actions/types'
import * as mutations from '@/store/mutations/types'



export default {

    [types.FETCH_STATIONS] ({ commit }) {

        commit(mutations.DISPLAY_LOADER)

        fetch('https://api.citybik.es/v2/networks/integrabike')
            .then(response => response.json())
            .then(({ network }) => {

                commit(mutations.SET_STATIONS, network.stations)

                commit(mutations.HIDE_LOADER)

            });

    },

    [types.SET_FILTERS] ({ commit }, payload) {

        commit(mutations.SET_FILTERS, payload)

    },

    [types.FOCUSED_STATION] ({ commit }, payload) {

        commit(mutations.FOCUSED_STATION, payload)

    }

}