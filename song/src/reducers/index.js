import { combineReducers } from 'redux';

const songReducer = () => {

    return [
        { title: ' aaa', duration: '1.2'},
        { title: ' aaa1', duration: '1.4' },
        { title: ' aaa2', duration: '1.2' },
        { title: ' aaa3', duration: '1.7' },
        { title: ' aaa4', duration: '1.0' },
        { title: ' aaa5', duration: '0.2' },
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {

    if (action.type == 'SONG_SELECTED') {
            return action.payload;
    }
    return selectedSong;
}

export default combineReducers ({
    songs: songReducer,
    selectedSong: selectedSongReducer
})