import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "./menu-posts/MenuPosts";
import MenuCategories from "./menu-categorys/MenuCategories";


const Menu = () => {
  return (
    <div className="flex-2 mt-[60px] max-lg:hidden">
      <h3 className="text-gray-500 text-base font-normal">{"What's hot"}</h3>
      <h2 className="text-[28px]">Most Popular</h2>
      <MenuPosts withImage={false} />
      <h3 className="text-gray-500 text-base font-normal">Discover by topic</h3>
      <h2 className="text-[28px]">Categories</h2>
      <MenuCategories />
      <h3 className="text-gray-500 text-base font-normal">Chosen by the editor</h3>
      <h2 className="text-[28px]">Editors Pick</h2>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;