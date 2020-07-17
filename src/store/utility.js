
export const updateItem = (oldObject , updateProperties) => {

    return {
        ...oldObject, //spread 
        ...updateProperties
    }

}


export const updateObject = (oldObject , updateProperties) => {
 
    return {
        ...oldObject, //spread 
        ...updateProperties
    }
}
    