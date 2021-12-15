
// const fun = (arg) => {
//     console.log(arg);
// }

// const abc = 10;

// fun(abc);

const Footer = (props) => {

    return (
        <div>
            <p>This is footer</p>
            <p> {props.firstName} </p>
            <p> {props.lastName} </p>
        </div>
    );
}

export default Footer;
