import { useState } from "react";

function Comment(props) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "14px", alignItems: "flex-start" }}>
      <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#2563eb", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>
        {props.comment.name[0]}
      </div>

      <div style={{ backgroundColor: "#f1f1f1", borderRadius: "10px", padding: "8px 12px" }}>
        <strong>{props.comment.name}</strong>
        <p style={{ margin: "4px 0" }}>{props.comment.text}</p>
        <button
          onClick={props.onLike}
          style={{ border: "none", background: "none", color: "crimson", cursor: "pointer", fontSize: "12px" }}
        >
          ♥ {props.comment.likes}
        </button>
      </div>
    </div>
  );
}

function App() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  function addComment() {
    if (commentText.trim() !== "") {
      setComments([
        ...comments,
        {name: "You", text: commentText, likes: 0 },
      ]);
      setCommentText("");
    }
  }

  function likeComment(id) {
    setComments(
      comments.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  }

  return (
    <div style={{ maxWidth: "450px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Comments ({comments.length})</h3>

      <input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write a comment..."
        style={{ width: "70%", padding: "8px", border: "2px solid #333", borderRadius: "6px" }}
      />

      <button
        onClick={addComment}
        style={{ backgroundColor: "#2563eb", color: "white", border: "none", borderRadius: "6px", padding: "9px 16px", marginLeft: "8px", cursor: "pointer" }}
      >
        Post
      </button>

      {comments.map((c) => (
        <Comment key={c.id} comment={c} onLike={() => likeComment(c.id)} />
      ))}
    </div>
  );
}

export default App;