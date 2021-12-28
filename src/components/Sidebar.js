import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <nav>
        <ul>
          <li>Projects</li>
          <li>About</li>
          <li>Project</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
