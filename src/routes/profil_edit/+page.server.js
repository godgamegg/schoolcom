export const load = async (event) => {
    const session = await event.locals.auth();

    return {
     session
    };
        
   };

//    console.log(db.employee)