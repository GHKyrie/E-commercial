import './sign-in.styles.scss';
import {Component} from "react";

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
                    <input
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />
                    <label>Почта</label>
                    <input
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />
                    <label>Пароль</label>

                    <input type="submit" value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;