// I M P O R T:   F I L E S
import "../styles/help.scss";

// I M P O R T:   P A C K A G E S

// I M P O R T:   F U N C T I O N S

// C O D E

const Help = () => {
  return (
    <div className="help-container">
      <h2>Welcome to the Help Page</h2>
      <p>
        This To-Do application helps you stay organized and manage your tasks
        efficiently. Here are some instructions to make the most of its
        features:
      </p>
      <ol>
        <li>
          <strong>To-Do List:</strong>
          <p>
            1. Add new tasks you want to accomplish by typing them in the input
            field and clicking the "ADD" button.
          </p>
          <p>
            2. **Editing Tasks:** - Click the pencil icon (✏️) next to a to-do
            item to enter edit mode. - Modify the task text as needed. - Click
            the "SAVE" button to save your changes.
          </p>
          <p>
            3. **Completing Tasks:** - Once you've completed a task, click the
            checkmark icon (✅) to mark it as done. - View your accomplishments
            on the "Done Tasks" page.
          </p>
        </li>
        <li>
          <strong>Done Tasks:</strong>
          <p>
            1. **Viewing Completed Tasks:** - Switch to the "Done Tasks" page
            using the navigation bar to see a list of your completed tasks.
          </p>
          <p>
            2. **Reverting Tasks:** - If needed, you can click the revert icon
            (↩️) on a completed task to move it back to the to-do list.
          </p>
        </li>
        <li>
          <strong>Navigation:</strong>
          <p>
            Use the navigation bar at the top to seamlessly switch between the
            following pages:
          </p>
          <ul>
            <li>
              <strong>To-Do:</strong> Your active to-do list.
            </li>
            <li>
              <strong>Done:</strong> A record of your completed tasks.
            </li>
            <li>
              <strong>Help:</strong> These instructions for quick reference.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        If you have any questions or need assistance, feel free to reach out.
        Happy organizing!
      </p>
    </div>
  );
};

export default Help;
