export default function Course(props) {
  return (
    <div>
      <h1>{props.course.title}</h1>
      <h3>{props.course.duration}</h3>
      <h3>{props.course.fee}</h3>
      <p></p>
      <h2>Topics</h2>
      Here are the topics discussed in this course:
      <ul>
        <ListTopics topics={props.course.topics} />
      </ul>
      <h4>Trainer : {props.trainer} </h4>
    </div>
  );
}

function ListTopics(props) {
  return props.topics.map((v) => <DisplayTopic topic={v} />);
}

function DisplayTopic(props) {
  return <li style={{ color: "red" }}>{props.topic.toUpperCase()}</li>;
}
