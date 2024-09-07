export const load = async (event) => {
    const session = await event.locals.auth();
    
    // console.log(session?.user?.name)
    return {
     session
    };
        
   };