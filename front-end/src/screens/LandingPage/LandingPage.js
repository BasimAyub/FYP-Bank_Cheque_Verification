import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'


const LandingPage = () => {
    // useEffect(() => {
    //     const userInfo = localStorage.getItem("userInfo");
    //     if(userInfo){
    //         history.push("/notes")
    //     }
    // }, [history])
    return (
        <div  style={{minHeight:"90vh"}}>
            <div>
                <h1>Welcome</h1>
            </div>
            <div>
                <a href="/login">
                    <Button>
                        Login
                    </Button>
                </a>
                <a href="/register">
                    <Button>
                        Register
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default LandingPage
