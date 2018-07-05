export default {

    stations (state, getters) {
        
        return state.filters.reduce((stations, filter) => {

            return getters[filter](stations)

        }, state.stations)

    },

    withAvailableBikes () {

        return (stations) => {

            return stations.filter(station => station.free_bikes > 3)

        }

    },

    withAvailableSlots () {

        return (stations) => {

            return stations.filter(station => station.empty_slots > 3)

        }

    },

    activeStations () {

        return (stations) => {

            return stations.filter(station => station.extra.open)

        }

    },
}