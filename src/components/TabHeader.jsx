export function TabHeader(props) {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav>
      {tabs.map((tabs, tabsindex) => {
        let todonumber = 0;
        if (tabs == "All") {
          todonumber = todos.length;
        } else if (tabs == "Open") {
          todonumber = todos.filter((val) => !val.complete).length;
        } else {
          todonumber = todos.filter((val) => val.complete).length;
        }
        return (
          <button
            onClick={()=>setSelectedTab(tabs)}
            key={tabsindex}
            className={
              "tab-button " + (tabs == selectedTab ? "tab-selected" : " ")
            }
          >
            <h3>
              {tabs}
              <span> ({todonumber}) </span>
            </h3>
          </button>
        );
      })}
      <br />
    </nav>
  );
}
