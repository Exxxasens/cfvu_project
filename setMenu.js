const { Menu } = require('electron');

module.exports = () => {
    const mainMenuTemplate = [
        {
            label: 'View',
            submenu: [
              { role: 'quit' },
              { role: 'forcereload' },
              { role: 'toggledevtools' }
            ]
        }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate));
};