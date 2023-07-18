import ContactItem from "./ContactItem";

const Contacts = ({ list, search }) => {
  return (
    <div>
      <ul>
        {list
          .filter(({ name }) => name.includes(search))
          .map(({ id, name, phone, email }) => {
            return (
              <ContactItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                email={email}
                search={search}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Contacts;
