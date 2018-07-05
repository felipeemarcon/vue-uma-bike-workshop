import * as types from '@/store/mutations/types'

export default {

    [types.DISPLAY_LOADER] (state) {

        state.isLoading = true

    },

    [types.HIDE_LOADER] (state) {

        state.isLoading = false

    },

    [types.SET_STATIONS] (state, payload) {

        state.stations = payload

    },

    [types.SET_FILTERS] (state, payload) {

        state.filters = payload

    },

    [types.FOCUSED_STATION] (state, payload) {

        state.focusedStation = payload

    }

}