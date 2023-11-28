import React from "react";
import SidebarNavListItem from "./SidebarNavListItem";
import SidebarNavList from "./SidebarNavList";
import { useDispatch } from "react-redux";
import { toStep } from "../../redux/slices/add-new-college-step-form";

const ReduceChildRoutes = (props) => {
  const dispatch = useDispatch();
  const { items, page, depth, currentRoute } = props;

  const handleToStep = (step) => {
    dispatch(toStep(step));
  };

  if (page.children) {
    const open = currentRoute.includes(page.href);

    items.push(
      <SidebarNavListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        badge={page.badge}
        open={!!open}
        title={page.title}
        href={page.href}
      >
        <SidebarNavList depth={depth + 1} pages={page.children} />
      </SidebarNavListItem>
    );
  } else {
    // if (page.href === "/college/add-new-college") {
    //   const open = currentRoute.includes(page.href);
    //   items.push(
    //     <SidebarNavListItem
    //       depth={depth}
    //       icon={page.icon}
    //       key={page.title}
    //       badge={page.badge}
    //       open={!!open}
    //       title={page.title}
    //       href={page.href}
    //     >
    //       <p onClick={() => handleToStep(0)}>1</p>
    //       <p onClick={() => handleToStep(1)}>2</p>
    //       <p onClick={() => handleToStep(2)}>3</p>
    //       <p onClick={() => handleToStep(3)}>4</p>
    //       <p onClick={() => handleToStep(4)}>5</p>
    //     </SidebarNavListItem>
    //   );
    // }
    //  else {
    items.push(
      <SidebarNavListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        badge={page.badge}
        title={page.title}
      />
    );
    // }
  }

  return items;
};

export default ReduceChildRoutes;
