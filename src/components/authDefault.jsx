import logo from "../assets/images/hacks-removebg-preview.png";



function Sidebar({info, height}) {
    return (
        <>
            <div className="  w-100 w-lg-50 bg-light px-3 px-sm-5 d-none d-sm-block ">
                <div style={{ marginTop: "-20px" }}>
                    <img src={logo} width={250} alt="" />
                </div>
                <div className=" ps-4   d-flex align-items-center ADs " style={{ fontWeight: "500", fontSize: "50px", height:height }}>
                    {info}
                </div>
            </div>
        </>
    );
}

export default Sidebar;