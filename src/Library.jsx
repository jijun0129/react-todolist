import Book from "./Book";

function Library() {
  return (
    <>
      <Book name="처음 만나는 파이썬" numOfPage="200" color="red"></Book>
      <Book name="처음 만나는 AWS" numOfPage="300" color="yellow"></Book>
    </>
  );
}

export default Library;
