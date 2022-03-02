import classes from './Content.module.css';


function Content(props){
    return (
        <div className={classes.bottom_content}>
            <h3>{props.data}</h3>
            <div className={classes.bottom_button}>
            <button className={classes.first} >Completed</button>
            <button className={classes.second}>Delete</button>
            </div>
        </div>
    );
}

export default Content;