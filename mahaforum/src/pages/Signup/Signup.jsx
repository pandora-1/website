import React from 'react'
import {useMediaQuery} from 'react-responsive'
import SignUpForm from '../../components/SignUpComponents/SignUpForm'
import {ReactComponent as Hero} from '../../icons/auth.svg'
// ResponsiveHooks
const useScreen = () =>{
    const isMinimalized = useMediaQuery({maxWidth:600});
    if(isMinimalized){
        return "minimalized"
    }
    return "fullscreen"
}

const Signup = () => {
    var layout;
    const screenType = useScreen();
    if (screenType==="minimalized"){
        layout = (
            <>
                <h1>MahaForum</h1>
                <h2>Sign Up</h2>
                <SignUpForm/>
                <Hero/>
            </>
        )
    } else {
        layout = (
            <h1>fullscreen</h1>
        )
    }

    return (
        <div>
            {layout}
        </div>
    )
}

export default Signup
