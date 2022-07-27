export function Post({ author, content }) {
  return (
    <div style={{ marginTop: '5rem' }}>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>
  );
}