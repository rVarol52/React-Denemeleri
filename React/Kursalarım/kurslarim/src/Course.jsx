function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h2 className="cardPrice">{price}TL</h2>
      </div>
      <p>{content}</p>
      <button
        className="cardDeleteBtn"
        onClick={() => {
          removeOneCourse(id);
        }}
      >
        Sil
      </button>
    </div>
  );
}

export default Course;
