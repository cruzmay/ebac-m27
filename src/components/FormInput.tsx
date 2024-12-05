import { UserForm } from "../interface/form";

interface InputProps {
  name: string;
  change: (event: React.SyntheticEvent<HTMLInputElement>, name: string) => void;
  value: string;
}

export const FormInput = ({ name, change, value }: InputProps): JSX.Element => {
    const clearField = (event: React.SyntheticEvent<HTMLInputElement>) => {
        event.currentTarget.value = ""
    }
  return (
    <div className="user-form__input-group">
      <label>{name}</label>
      <input value={value} placeholder={name} name={name} onChange={(e) => change(e, name)} />
    </div>
  );
};
