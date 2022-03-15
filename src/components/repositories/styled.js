import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  height: 20rem;
  margin-top: .2rem;
  background-color: #eee;
  border-radius:.3rem;
  overflow-y:scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar{
    display:none;
  }
  
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  position:sticky;
  top:0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  width:100%;
  background-color: #eee;
  border: 1px solid #ccc;
  padding: .4rem;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  text-align:center;
    
  &:active  {
    outline: none;
    border:none;
    background-color:#aaa;
  }

  &.is-selected {
    background-color: #aaa;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: .3rem;
  display: none;
 
  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
