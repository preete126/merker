import { Link } from "react-router-dom";
import "../../assets/styles/Auth.css";

function Update() {
    return (
        <>
            <section className="bg-light px-2 px-sm-0 w-100 d-flex align-items-center" style={{ height: "100vh" }}>
                <main className="m-auto text-center otp_container " style={{ fontFamily: "'Poppins', sans-serif", width: "400px" }}>
                    <div className='d-flex align-items-center text-white justify-content-center mx-auto my-3 bg-success fs-5' style={{ border: "8px solid rgba(151, 179, 97, 0.741)", borderRadius: "28px", width: "48px", height: "48px" }}>
                        ✓
                    </div>
                    <h5 className="fs-2 fw-bold">Password Updated</h5>
                    <div className="text-dark  my-5" style={{ fontSize: "17px" }}> Your password has been changed successfully. Use your new password to log in.</div>
                    <Link className="text-decoration-none" to={"/login"}>
                        <button type="submit" className="btnForm my-4 p-3 w-100 rounded d-block fs-5">
                            Login now
                        </button>
                    </Link>

                </main>
            </section>
        </>
    );
}

export default Update;