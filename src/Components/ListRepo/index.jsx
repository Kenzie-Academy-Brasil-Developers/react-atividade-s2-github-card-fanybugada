import CardRepo from "../CardRepo";

function ListRepo({ repository }) {
  return (
    <div>
      {repository.map((repo, index) => (
        <CardRepo repo={repo} key={index} />
      ))}
    </div>
  );
}
export default ListRepo;
