import {} from './style.css'

export const PostCard = ({id, cover,title, body}) => {
    return (
        <div className="post">
            <img className='img-card' src={cover} alt={title} />
            <div key={id} className="post-content">
                <h1>{id} - {title}</h1>
                <p>{body}</p>
            </div>
        </div>
    );
}
