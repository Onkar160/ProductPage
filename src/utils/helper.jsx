export default function helper(type, content, ind) {
  if (type === "para") {
    return (
      <div key={ind}>
        <p>{content}</p>
        <br />
      </div>
    );
  } else {
    return (
      <>
        <ul className="list-inside list-disc">
          {content.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <br />
      </>
    );
  }
}
