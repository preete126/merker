import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/Auth.css";
import { GlobalContext } from "../../Provider/GlobalProvider";



function New_password() {
    const { email } = useContext(GlobalContext)
    const navigate = useNavigate(null)

    const update = ()=>{
        navigate("/update")
    }

    return (
        <>
            <section className="bg-light px-2 px-sm-0 w-100 d-flex align-items-center" style={{ height: "100vh" }}>
                <main className="m-auto text-center otp_container " style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <h5 className="fs-2 fw-bold">Reset account password</h5>
                    <div className="text-dark  my-5" style={{ fontSize: "17px" }}> Enter a new password for {email} </div>
                    <form action="" onSubmit={update}>
                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                required
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                               
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="password"
                                required
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                               
                            />
                            <label htmlFor="floatingPassword">Confirm Password</label>
                        </div>
                        <button type="submit" className="btnForm my-4 p-3 w-100 rounded d-block fs-5">
                           Reset Password
                        </button>
                    </form>

                </main>
            </section>
        </>
    );
}

export default New_password;