const UserList = ({ statusData }) => {
  return (
    <ul>
      {statusData.length > 0 ? (
        statusData.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.status}
          </li>
        ))
      ) : (
        <p>
          <strong>No results found </strong>
        </p>
      )}
    </ul>
  );
};

export default UserList;
