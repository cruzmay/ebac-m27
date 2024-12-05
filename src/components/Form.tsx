import { UserForm } from "../interface/form";
import { FormInput } from "./FormInput";

interface FormProps {
  formState: UserForm ;
  change: (event: React.SyntheticEvent<HTMLInputElement>, name: string) => void;
  createUser: (event: React.SyntheticEvent<HTMLFormElement>) => void;
}

export const Form = ({ formState, change, createUser }: FormProps) => {
  return (
    <form className="user-form" onSubmit={(e) => createUser(e)}>
      {Object.entries(formState).map(([ key, value ]) => (
        <FormInput
          key={key}
          value={value}
          change={(event, name) => change(event, name)}
          name={key}
        />
      ))}
      <input type="submit" value={"send"} />
    </form>
  );
};
