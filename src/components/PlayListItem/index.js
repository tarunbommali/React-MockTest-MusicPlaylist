import './index.css'

const PlayListItem = props => {
  const {playListDetails, deleteSong} = props

  const {id, imageUrl, name, genre, duration} = playListDetails

  return (
    <li className="play-list-item">
      <div className="track-details">
        <img src={imageUrl} alt="**track**" className="track-img" />
        <div className="song-details">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="button-container">
        <p className="duration">{duration}</p>

        <button
          type="submit"
          onClick={() => deleteSong(id)}
          aria-label={`Delete ${name}`} // Provide a meaningful label
          data-testid="delete"
        >
          <i className="fa-solid fa-trash" />
        </button>
      </div>
    </li>
  )
}

export default PlayListItem
