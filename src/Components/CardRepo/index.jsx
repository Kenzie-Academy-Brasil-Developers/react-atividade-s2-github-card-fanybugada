function CardRepo({ repo, key }) {
  return (
    <div key={key}>
      <h3> {repo.data.full_name} </h3>
      <div>
        <img src={repo.data.owner.avatar_url} alt="User Avatar" />
        <p> {repo.data.description} </p>
      </div>
    </div>
  );
}
export default CardRepo;
