const User = ({ user }) => {
  const { name, address, phone, remarks } = user;
  return (
    <div style={{ margin: "12px 12px 12px 0px" }}>
      <h3>User Details</h3>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        <p>
          <strong>Username: </strong> {name}
        </p>
        <p>
          <strong>Phone no:</strong> {phone}
        </p>

        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Remarks:</strong> {remarks}
        </p>
      </div>
    </div>
  );
};
export default User;
