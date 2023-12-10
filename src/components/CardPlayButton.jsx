import { Pause, Play } from './Player'
import { usePlayerStore } from '@/stores/PlayerStore'
export function CardPlayButton ({ id, size = 'small' }) {
    const { isPlaying, currentMusic, setCurrentMusic, setIsPlaying } = usePlayerStore(state => state)
    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id
    const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'
    const handleClick = () => {
        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }
        // promise
        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const {songs, playlist} = data
                setIsPlaying(true)
                setCurrentMusic({
                    songs,
                    playlist,
                    song: songs[0],
                })
            })
        
        // async
        // const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
        // const data = await res.json()
        // const {songs, playlist} = data
    }


    return (
        <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
          {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
        </button>
      )    
}