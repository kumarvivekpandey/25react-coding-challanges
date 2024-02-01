import Tabs from "./tabs"

export default function TabTest(){

 const tabs=[
    
    {
        label:"tab1",
        content:"this is for 1"
    },
    {
        label:"tab2",
        content:"this is for 2"
    },
    {
        label:"tab3",
        content:"this is for 3"
    }

]

function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}