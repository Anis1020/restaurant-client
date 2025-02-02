import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "../../Components/Shared/Cover/Cover";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["dessert", "pizza", "soup", "salad", "offered"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();
  const dessert = menus.filter((item) => item.category === "dessert");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const salad = menus.filter((item) => item.category === "salad");
  const offered = menus.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover img={orderCoverImg} title={"Ordered Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Salad</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
