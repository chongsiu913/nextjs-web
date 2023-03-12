export default function HomePage(){
    return(
        <div> <h1>The value of customKey is: {process.env.NEST_HOST}</h1></div>
    );
};