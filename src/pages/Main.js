import Content from '../components/Content';
import classes from './Main.module.css';


function Main() {
  return  (  
        <div className={classes.login_page}>
            <div className={classes.form}>
                <h1>Task Manager</h1>
                <form>
                <input  type="text" name="Task Title" placeholder="Task Title"/>
                <textarea type="text" rows="5" cols="10" name="Task Description" placeholder="Task Description"></textarea>
                <input type="text" placeholder="Date of birth" onfocus="(this.type='date')"/> 
                </form>
            </div>
            <div className={classes.bottom}>
                <h1>Your Task</h1>
                <Content data='1.Completing Assignment on time...'/>
                <Content data='2.Submitting assignment to Sir...'/>
                <button className={classes.btn}>Create task</button>
            </div>
        </div>
  ); 
}

export default Main;
