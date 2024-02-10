const Layout = ({ children }) => {



    return (

        <div className="layout max-h-screen  flex absolute  overflow-hidden ">
            <main id='main' className="main flex  ml-[4vw] overflow-hidden">{children} </main>
        </div>


    );
}


export default Layout;