import '../styles/SignUp.css'

function SignUp() {
    return (
        <div className="container">
            <div className="img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QsdmFQyAw0A28Zo3y5CcPYNA5yD7Y4GaLA&usqp=CAU" alt="instagram logo" />
            </div>
            <form >
                <input type="text" placeholder="Mobile Number or Email" />
                <input type="text" placeholder="Full Name" />
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit" className='btn'>Sign Up</button>
            </form>
            <div className='login'>
                <span>have an account</span>
                <a href="/login">Log in</a>
            </div>
        </div>
    )
}

export default SignUp