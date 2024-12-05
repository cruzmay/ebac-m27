import React from "react";
import { Form } from "./components/Form";
import { UserForm } from "./interface/form";
import { UserList } from "./components/UserList";
import "./styles/styles.scss"
import { Toast } from "./components/Toast";

interface AppProps {}

interface AppState {
  form: UserForm;
  users: UserForm[];
  message: boolean;
}

const initialFieldsState: UserForm = {
  name: "",
  firstname: "",
  age: "",
  nickname: "",
};

class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props)
     this.state = {
      form: initialFieldsState,
      users: [],
      message: false
    };
  }

  private createUser(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    if(this.state.form.name.length > 0) {
      this.setState((state) => ({
        users: state.users.concat(state.form),
      }));
      this.setState({ form: initialFieldsState });
    }
  }

  componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any): void {
    if(prevState.users.length !== this.state.users.length ) {
      this.setState({ message: true })
    }
  }

  private handleChange(
    event: React.SyntheticEvent<HTMLInputElement>,
    field: string
  ) {
    const value = event.currentTarget?.value;
    this.setState((state) => ({
      message: false,
      form: {
        ...state.form,
        [field]: value,
      },
    }));
    
  }

  public render(): React.ReactNode {
    return (
      <>
        <Form
          formState={this.state.form}
          createUser={(event) => this.createUser(event)}
          change={(event, name) => this.handleChange(event, name)}
        />
        <UserList userState={this.state.users} />
        <Toast message={this.state.message} />
      </>
    );
  }
}

export default App;
