function Book(props) {
  return (
    <div>
      <h1>
        {`이 책의 이름은 `}
        <span style={{ color: props.color }}>{props.name}</span> {`입니다. `}
      </h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 구성되어 있습니다. `}</h2>
    </div>
  );
}

export default Book;
