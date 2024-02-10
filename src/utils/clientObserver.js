import { createContext, useContext } from "react"

export const clientContext = createContext({ clientH: 0, clientW: 0 })


const ClientObserver = ({ children }) => {

    let { clientH, clientW } = useContext(clientContext)

    const updateClient = () => {
        clientH = window.innerHeight
        clientW = window.innerWidth
    }

    window.addEventListener('resize', updateClient)

    return (<clientContext.Provider value={{ clientH, clientW }}>{children} </clientContext.Provider>)

}

export default ClientObserver











// const ClientObserver = {

//     clientH: window.innerHeight,
//     clientW: window.innerWidth,

//     init: function() {
//         window.addEventListener('resize', this.updateClient)
//     },

//     updateClient: function() {
//         this.clientH = window.innerHeight
//         this.clientW = window.innerWidth
//     },

//     get clientH() {
//         return this.clientH
//     },

//     get clientW() {
//         return this.clientW
//     }



// }


// export default ClientObserver

