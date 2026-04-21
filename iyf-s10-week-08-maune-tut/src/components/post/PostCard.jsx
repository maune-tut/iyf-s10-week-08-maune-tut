function PostCard({ title, excerpt, author, date }) {
  return (
    <div style={{ border: '1px solid #0c3f07', padding: '15px', margin: '10px 0', borderRadius: '8px', background: 'white', color: 'black' }}>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <div style={{ fontSize: '0.8rem', color: '#015e52' }}>
        <span>By {author}</span> | <span>{date}</span>
      </div>
    </div>
  );
}

export default PostCard;