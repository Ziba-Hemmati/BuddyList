import "../styles/list.scss";

const ContactItem = ({ id, name, phone, email, search }) => {
  const index = name.indexOf(search);
  return (
    <div className="list-container">
      <div className="list">
        <li key={id}>
          {index === -1 ? (
            name
          ) : (
            <p>
              <span>{name.slice(0, index)} </span>
              <span style={{ backgroundColor: "#a42cd6" }}>
                {name.slice(index, index + search.length)}
              </span>
              <span>{name.slice(index + search.length)} </span>
            </p>
          )}
        </li>
        <li>{phone}</li>
        <li>{email}</li>
      </div>
    </div>
  );
};

export default ContactItem;
