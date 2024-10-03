import { usergmail} from "../store/store";

export const load = async (event) => {
    const session = await event.locals.auth();
    usergmail.set(session.user.email);
    // userid.set(session.user._id);
    // console.log(1232313, session?.user?.email)
    return {
     session
    };
        
   };



// export let data;
// console.log(session.user?.email)



