import React, { Fragment, Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Tittle from '../../components/titles/index';
import Modal from '../../components/modal';
import './settings.css';
import UserTabs from './settingsUser/index.jsx';
import Menu from '../../components/sidebarNav/index'
import SideDrawer from '../../components/sidebarNav/sideDrawer/sideDrawer';

class Settings extends Component {

    render() {
        const { modalOpen, closeModal } = this.props;
        const displayTabsSettings = (
            <Tabs>
                <TabList>
                    <Tab>Usuarios</Tab>
                    <Tab>Menú</Tab>
                    <Tab>Ayuda</Tab>
                </TabList>

                <TabPanel>
                    <UserTabs/>
                </TabPanel>
                <TabPanel>
                    <h2>No hay menú agregado aún</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Ayuda en construcción</h2>
                </TabPanel>
            </Tabs>
        )
        console.log(closeModal)
        return (
            <Fragment>
                <div className="wrapper">
                <Modal open={modalOpen} close={closeModal} />
                <Menu/>
                <SideDrawer/>
                <main className="main">
                    <Tittle color="#303F9F" text="Configuración" icon={<i className="material-icons icon">settings_applications</i>} />
                    {displayTabsSettings}
                </main>
                </div>
            </Fragment>
        )
    }
}

export default Settings;