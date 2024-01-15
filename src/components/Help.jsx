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
        This is a simple To-Do application. Here are some instructions to get
        started:
      </p>
      <ol>
        <li>
          <strong>To-Do List:</strong>
          <p>
            Add new tasks you want to accomplish by typing them in the input
            field and clicking the "ADD" button.
          </p>
        </li>
        <li>
          <strong>Complete a Task:</strong>
          <p>
            Once you've completed a task, go to the "Done Tasks" page to see
            your accomplishments.
          </p>
        </li>
        <li>
          <strong>Navigation:</strong>
          <p>
            Use the navigation bar at the top to switch between the "To-Do" and
            "Done" pages. You can also visit the "Help" page for these
            instructions.
          </p>
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
