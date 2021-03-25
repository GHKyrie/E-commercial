import './sign-in.styles.scss';
import {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../firebase/firebase.utils";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.state({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>У меня уже есть аккаунт</h2>
                <span>Войти, используя свою почту и пароль</span>

                <form onSubmit={ this.handleSubmit } >
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='Почта'
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='Пароль'
                        handleChange={this.handleChange}
                        required />

                    <CustomButton type="submit"> Войти </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        {' '}
                        Google
                        {' '}
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;