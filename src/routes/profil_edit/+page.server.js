import { usergmail } from "../store/store";

export const load = async (event) => {
    const session = await event.locals.auth();
    usergmail.set(session?.user?.email)
    
    return {
     session
    };
        
   };



// export let data;
// console.log(session.user?.email)



