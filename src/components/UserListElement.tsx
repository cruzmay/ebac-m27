import { UserForm } from "../interface/form";

export interface UserListElementProps {
  user: UserForm;
}

export const UserListElement = ({ user }: UserListElementProps) => {
  return (
    <li className="users__list__item">
      <div>
        {user.name.length > 0 && (
          <p>
            {" "}
            <strong>name:</strong> {user.name} {user.firstname}
          </p>
        )}
        {user.age.length > 0 && (
          <p>
            {" "}
            <strong>age:</strong> {user.age}
          </p>
        )}
        {user.nickname.length > 0 && (
          <p>
            {" "}
            <strong>nickname:</strong> {user.nickname}
          </p>
        )}
      </div>
    </li>
  );
};
