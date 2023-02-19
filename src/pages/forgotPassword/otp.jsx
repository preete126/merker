import { useContext } from "react";
import logo from "../../assets/images/hacks-removebg-preview.png";
import otp_icon from "../../assets/images/otp-icon.png";
import { GlobalContext } from "../../Provider/GlobalProvider";
import "../../assets/styles/Auth.css";
import { useNavigate } from "react-router-dom";


function Otp() {
    const { email } = useContext(GlobalContext)
    const navigate = useNavigate(null)

    const next = function(){
        
    }

    const newCode = ()=>{
        navigate("/new_code")
    }


    return (
        <>
            <section className="bg-light px-2 px-sm-0 w-100 d-flex align-items-center" style={{height: "100vh"}}>
                <main className="m-auto text-center otp_container" style={{ width: "360px", fontFamily: "'Poppins', sans-serif"}}>

                    <div>
                        <img src={logo} width={250} alt="" />
                    </div>
                    <div className="fs-3 mt-4"  >
                        Two-Step Verification
                    </div>
                    <div className="my-4">
                        <img src={otp_icon} alt="" />
                    </div>
                    <div className="text-dark" style={{ fontSize: "17px" }}>Enter the verification code we sent to</div>
                    <div className="fs-5 py-1">{email}</div>
                    <form action="" onSubmit={newCode} >
                        <div className="otpForm d-flex mx-auto my-3" style={{ maxWidth: "fit-content" }}>
                            <input className="rounded-start" type="text" onKeyUp={next} required maxLength={1} />
                            <input type="text" required maxLength={1} onKeyUp={next} />
                            <input type="text" required maxLength={1} onKeyUp={next} />
                            <input className="rounded-end" required type="text" onKeyUp={next} maxLength={1} />
                        </div>

                        <button type="submit" className="btnForm my-4 p-3 w-100 rounded d-block fs-5">
                            Verify
                        </button>
                        <div className="policy text-dark" >
                           Didn't get the code? <a href="">Resend it</a>
                        </div>
                    </form>
                </main>
            </section>
        </>
    );
}

export default Otp;