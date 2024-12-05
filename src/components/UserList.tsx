import { UserForm } from "../interface/form";
import { UserListElement } from "./UserListElement";

interface UserListProps {
  userState: UserForm[];
}

export const UserList = ({ userState }: UserListProps) => {
  return (
    <>
      {userState.length > 0 && (
        <section className="users">
          <h2 className="users__title">User list</h2>
          <ul className="users__list">
            {userState.map((user, index) => (
              <UserListElement key={index} user={user} />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
