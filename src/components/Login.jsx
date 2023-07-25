
function Login() {
    return (
        <div className="container">
            <div className="img-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QsdmFQyAw0A28Zo3y5CcPYNA5yD7Y4GaLA&usqp=CAU" alt="instagram logo" />
            </div>
            <form >
                <input type="text" placeholder="Phone Number, username or Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn">Log in</button>
            </form>
            <div className='login'>
                <span>don't have an account ?</span>
                <a href="/signup">Sign up</a>
            </div>
        </div>
    )
}

export default Login