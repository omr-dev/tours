type PropsError={
    message:string;
}
export const Error=({message}:PropsError)=>{
    return <h1>Error : {message.toUpperCase()}</h1>
}