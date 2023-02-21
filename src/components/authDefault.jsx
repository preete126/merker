import logo from "../assets/images/hacks-removebg-preview.png";



function Sidebar({info}) {
    return (
        <>
            <div className="  w-100 w-lg-50 bg-light px-3 pt-4 px-sm-5 d-none d-sm-block ">
                <div>
                    <img src={logo} width={250} alt="" />
                </div>
                <div className=" ps-4 d-flex align-items-center ADs " style={{ fontWeight: "500", fontSize: "50px", height:"91%" }}>
                    {info}
                </div>
            </div>
        </>
    );
}

export default Sidebar;